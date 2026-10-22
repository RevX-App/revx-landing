# Domain setup: revx.website (landing) + revx.website/app (web app)

**Goal:** one domain. The landing site serves `revx.website/`, and the Expo web app serves `revx.website/app/...`.

**How:** two Vercel projects stay separate, and the landing project **proxies** `/app/*` to the web-app project with a Vercel rewrite. Visitors and search engines see only `revx.website`.

```
browser ── revx.website/            ──► landing project (Astro)
        └─ revx.website/app/...     ──► landing project rewrite ──► <webapp>.vercel.app/app/...
```

A single origin also means one cookie and localStorage scope for both sites, and no CORS between them.

## 1. Landing repo (this repo)

Already done here:

- `astro.config.mjs`: `trailingSlash: 'never'` and `build.format: 'file'`, and `vercel.json` has `"trailingSlash": false`. This keeps landing URLs slash-free (`/privacy`), so Vercel never adds a slash to proxied `/app/...` paths.
- Canonicals are normalized in `src/layouts/Base.astro`.

Also done (2026-10-22), pointing at the current web-app deployment `rev-x-dev-build.vercel.app`:

- **Proxy parked (not active yet).** The web app still serves from its root, so a live proxy would break. When the web app ships `baseUrl: "/app"` (see `webapp_agent_instructions.md`), add this to `vercel.json` and change `APP_URL`'s default in `src/config.ts` to `'/app'`:

  ```jsonc
  "rewrites": [
    { "source": "/app", "destination": "https://rev-x-dev-build.vercel.app/app" },
    { "source": "/app/:path*", "destination": "https://rev-x-dev-build.vercel.app/app/:path*" }
  ],
  ```

  Until then, "Open RevX" links straight to `https://rev-x-dev-build.vercel.app`.
- `vercel.json` sends `X-Robots-Tag: noindex, nofollow` on `/app` and `/app/:path*` only (not `/apple-touch-icon.png`).
- The landing security headers now use `source: "/((?!app$|app/).*)"`, so they **don't** apply to the web app. Their `Permissions-Policy` disables camera, microphone and geolocation, which the app needs for photos, noise recording and the map.
- `astro.config.mjs` defaults `site` to `https://revx.website`, overridable with `SITE_URL`.
- `src/config.ts` defaults `APP_URL` to the current web-app deployment, overridable with `PUBLIC_APP_URL`.

Vercel settings for the **landing** project:

| Setting | Value |
|---|---|
| Domains | Add `revx.website` (primary) and `www.revx.website`, redirecting www to the apex. |
| Environment variables | None needed. Both defaults are built in; set `SITE_URL` or `PUBLIC_APP_URL` only to override. |

DNS at your registrar: use exactly the records Vercel's Domains page shows. These are normally an `A` record for `@` and a `CNAME` for `www` pointing to Vercel. Don't copy values from a guide, because Vercel may assign project-specific ones.

## 2. Web-app repo (RevX-App/RevX, `prod-branch`)

Verified at `4edc48c`. The web build is `web.output: "single"` with a catch-all rewrite to `/`.

1. **Build under `/app`.** In `app.json`, add `baseUrl` next to the existing `typedRoutes`:

   ```json
   "experiments": { "typedRoutes": true, "baseUrl": "/app" }
   ```

   Expo marks `baseUrl` experimental and **production-only**: `expo start` ignores it, and you must re-export after changing it.

   Expo Router `<Link>`, `<Redirect>` and `router.*` prepend the base automatically. Every navigation in `app/` uses those (checked: all `<Redirect href="/...">` and `<Link href="/...">`), so no code changes are needed. Any future plain `<a href>`, `window.location` or `Linking.openURL` to an internal path must add `/app` by hand.

2. **Make the files live under `/app` on the web-app project.** `expo export` writes to `dist/` root and only *prefixes* URLs, so nest the output and rewrite unknown paths to the SPA shell. Replace the web-app `vercel.json` build and rewrites:

   ```jsonc
   "buildCommand": "npx expo export -p web && mkdir -p .out/app && cp -r dist/. .out/app/ && rm -rf dist && mv .out dist",
   "rewrites": [
     { "source": "/app/:path*", "destination": "/app/index.html" }
   ],
   "redirects": [
     { "source": "/", "destination": "/app", "permanent": false }
   ],
   "headers": [
     { "source": "/(.*)", "headers": [{ "key": "X-Robots-Tag", "value": "noindex, nofollow" }] }
   ]
   ```

   Vercel serves real files first, so `/app/_expo/...` assets resolve, and only unmatched routes (`/app/discover`) fall back to `index.html`. Remove the old `/:path* → /` catch-all.

   This changes the app's own `vercel.json`, which the original landing handoff (§6) said not to touch. Making this change is now an owner decision, so apply it deliberately and redeploy.

3. **Fix auth email links in Supabase.** `src/features/auth/api.ts` calls `resetPasswordForEmail(email)` with no `redirectTo`, so reset links use the project's **Site URL**. In the Supabase dashboard (Authentication → URL Configuration):
   - set Site URL to `https://revx.website/app`;
   - add `https://revx.website/app/**` to Redirect URLs, keeping the local and dev URLs.

4. **Native apps are unaffected.** `baseUrl` only applies to the web export. Universal links and App Links (see `handoff_webapp_seo.md` §4) can later use `https://revx.website/app/...`. Host `/.well-known/apple-app-site-association` and `/.well-known/assetlinks.json` on the **landing** project, because the domain root belongs to it.

## 3. Verify after both deploy

- [ ] `curl -sI https://revx.website/` → 200, no `X-Robots-Tag`.
- [ ] `curl -sI https://revx.website/app/discover` → 200, `X-Robots-Tag: noindex, nofollow`.
- [ ] Load `https://revx.website/app`: the app renders, the browser console shows no 404s on `/app/_expo/...`, and sign-in works.
- [ ] A deep link, e.g. `https://revx.website/app/sign-in`, refreshes without a 404.
- [ ] Password-reset email links land on `https://revx.website/app/...`.
- [ ] Landing "Open RevX" buttons go to `https://revx.website/app`.
- [ ] `https://revx.website/robots.txt` and `/sitemap.xml` show `https://revx.website/...` URLs.
- [ ] Verify `revx.website` in Google Search Console and Bing Webmaster Tools, then submit the sitemap.

## Risks

- **`baseUrl` is experimental in Expo.** If a future SDK changes it, the fallback is to drop `baseUrl` and serve the app on `app.revx.website` instead (a CNAME to the web-app project), with no proxy.
- **One request hop.** Proxied `/app` requests go through the landing project's rewrite. Vercel handles this at the edge, but check the web app's response times after launch.
