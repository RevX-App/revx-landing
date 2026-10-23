# Instructions for the RevX web-app agent: serve the app at revx.website/app

Paste this to the agent working on the RevX web app. It's self-contained.

---

## Context

- The RevX landing site (repo `RevX-App/revx-landing`) owns the domain **revx.website**.
- Once your change is deployed, the landing site will proxy every `/app` and `/app/*` request to **`https://rev-x-dev-build.vercel.app/app/...`**. That proxy is written but parked, and the owner enables it after you report success.
- Your job is to make the web app work when served **under the `/app` sub-path** at that deployment.
- Don't change the landing repo.

**Which repo deploys `rev-x-dev-build.vercel.app`?** The org repo `RevX-App/RevX` describes its website as "synced with piqim's forked repository" (`piqim/RevX-Dev-Build`). Before editing:
1. Confirm which repo and branch that Vercel project builds from (Vercel dashboard → project → Settings → Git).
2. Make the changes there, or in `prod-branch` and sync, per the repo's normal flow.

**What's live today:** the deployment serves the app at `/`, with assets at `/_expo/static/...`. Proxied through `revx.website/app`, the HTML loads but the assets 404, because the browser requests `revx.website/_expo/...`, which belongs to the landing site. Your change fixes that.

## Tasks

### 1. Build the web export under `/app`

In `app.json`, add `baseUrl` to the existing `experiments` block:

```json
"experiments": { "typedRoutes": true, "baseUrl": "/app" }
```

Facts (Expo docs, "Hosting with sub-paths"):
- `baseUrl` is **experimental and production-only**. `npx expo start` ignores it, and you must re-export after changing it.
- Expo Router `<Link>`, `<Redirect>` and `router.*` prepend the base automatically. All current navigation in `app/` uses these (`<Redirect href="/...">`, `<Link href="/...">`), so no screen changes should be needed.
- Anything else that builds an internal URL by hand must add `/app` itself: plain `<a href>`, `window.location`, `Linking.openURL` or hard-coded asset URLs. Grep for these and fix any you find.
- Check the Expo SDK 56 docs before trusting these details; the feature is experimental.

### 2. Put the exported files under `/app` and fix the SPA fallback

`expo export -p web` writes to `dist/` root and only *prefixes* URLs with `/app`. Nest the output so file paths match the URLs.

In the web app's `vercel.json`:
- replace `buildCommand`;
- replace the old catch-all rewrite (`"/:path*" → "/"`);
- add the redirect and header.

```jsonc
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": null,
  "installCommand": "npm install --legacy-peer-deps",
  "buildCommand": "npx expo export -p web && mkdir -p .out/app && cp -r dist/. .out/app/ && rm -rf dist && mv .out dist",
  "outputDirectory": "dist",
  "devCommand": "npx expo start --web",
  "cleanUrls": true,
  "rewrites": [
    { "source": "/app/:path*", "destination": "/app/index.html" }
  ],
  "redirects": [
    { "source": "/", "destination": "/app", "permanent": false }
  ],
  "headers": [
    { "source": "/(.*)", "headers": [{ "key": "X-Robots-Tag", "value": "noindex, nofollow" }] }
  ]
}
```

- Vercel serves real files before rewrites, so `/app/_expo/...` assets resolve, and only unmatched routes (`/app/discover`, `/app/sign-in`) fall back to `/app/index.html`.
- `X-Robots-Tag` keeps the logged-in app out of search results. The landing proxy also sends it.
- Don't add a `Permissions-Policy` that disables camera, microphone or geolocation. The app needs all three: photos, noise recording and the map.
- This edits the repo's root `vercel.json`, which earlier docs said not to touch. The owner has now approved this change; keep everything else in that file as it is.

### 3. Update Supabase auth URLs (dashboard, ask the owner if you lack access)

`src/features/auth/api.ts` calls `supabase.auth.resetPasswordForEmail(email)` with **no `redirectTo`**, so reset emails link to the project's **Site URL**.

In Supabase → Authentication → URL Configuration:
- set **Site URL** to `https://revx.website/app`;
- add `https://revx.website/app/**` to **Redirect URLs**, keeping the existing localhost and dev URLs so local work still functions.

### 4. Check locally, then deploy

```bash
npx expo export -p web
# serve dist/ AT /app to mimic production, e.g. nest it like the build command does:
mkdir -p .out/app && cp -r dist/. .out/app/ && npx serve .out -s
# then open http://localhost:3000/app
```

- [ ] `/app` renders; the browser console shows no 404s; asset URLs start with `/app/_expo/`.
- [ ] A deep link such as `/app/sign-in` loads on a hard refresh.
- [ ] `npx tsc --noEmit` and `npx eslint app/ src/` are still clean.
- [ ] Native builds are unaffected (`baseUrl` is web-only). Run `npx expo start` and confirm a device or simulator still launches.

After deploying to `rev-x-dev-build.vercel.app`:
- [ ] `https://rev-x-dev-build.vercel.app/app` works directly.
- [ ] `https://revx.website/app` works through the proxy, including sign-in, a deep link refresh, photo upload, audio recording and the map (geolocation prompt appears).
- [ ] `curl -sI https://revx.website/app/discover` shows `X-Robots-Tag: noindex, nofollow`.
- [ ] A password-reset email links to `https://revx.website/app/...`.

## Report back

Report:
- which repo and branch you changed, and the commit SHA;
- the deployed URL you verified;
- any internal URLs you had to prefix by hand;
- anything in the checklist that failed.

Don't push or open PRs without the owner's go-ahead, and don't hand-merge `package-lock.json`.

## If `baseUrl` doesn't work

The fallback is a subdomain instead of a sub-path:
1. Drop `baseUrl` and the nesting.
2. Serve the app at `app.revx.website` (a CNAME to this Vercel project).
3. Tell the owner, so the landing repo can replace its `/app` proxy with a link to the subdomain.
