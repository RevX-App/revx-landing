# Handoff: SEO, AEO and GEO for the RevX web app and mobile apps

Written 2026-10-22 for agents working in **RevX-App/RevX** (`prod-branch`). It covers the Expo web build on Vercel and the iOS/Android apps. It summarizes what was analyzed on the landing-site side and what to do in the app repo.

**Copy this file into the app repo** (for example `docs/technical/seo_geo_aeo_handoff.md`) before working from it.

**What the scores mean.** No tool gives one universal "SEO/GEO/AEO score". Improve the parts each tool actually measures:
- Lighthouse SEO and accessibility;
- Search Console coverage and queries;
- SE Ranking keyword positions;
- SE Ranking AI share of voice;
- App Store and Play Store search rank.

Never promise rankings or AI citations.

---

## 1. What was analyzed (landing site, RevX-App/revx-landing)

All files referenced live in that repo under `doc/seo-report/`.

| Artifact | What it holds |
|---|---|
| `report.md` | Local audit of the landing site: critical and high findings, Lighthouse (mobile 97/97/100/100, desktop 100/97/100/100). |
| `seranking-baseline.md` | SE Ranking US keyword volumes, competitor AI share of voice, AI answers about "RevX", San Diego demand estimate and local results page. |
| `seranking-raw/*.json` | Raw API responses, for monthly re-runs. |

### Findings that bind the app too

1. **The name collides.** In AI answers today, "RevX" means the Excalibur RevX **crossbow** (55 Google AI Overview prompts) and an ad-tech firm. ChatGPT has a "What is rev x?" answer about neither. Every public surface the app owns must say *RevX, the San Diego car-repair marketplace*.
2. **Demand is phrased as "near me" and "app", not by city.**

   | Keyword | Volume | Difficulty | Note |
   |---|---:|---:|---|
   | mobile mechanic near me | 201k/mo US | 68 | |
   | mobile mechanic | 110k | 59 | |
   | mobile mechanic app | 590 | 7 | |
   | ai mechanic | 590 | 7 | |
   | mechanic app | 260 | 8 | |
   | car noise diagnosis | 260 | 9 | |
   | grinding noise when braking | 6.6k | 49 | Long tail of 300–600/mo each at difficulty about 6 |

   San Diego local demand is estimated at about 4–5k/mo.
3. **AI share of voice among competitors** (US, five engines):
   - Wrench 50%, recommended by name;
   - RepairPal 42%, cited as the cost source;
   - Your Mechanic 8%;
   - MotorFyx 0%.
4. **The San Diego local results page** is led by small independents, Yelp, Reddit r/sandiego, Your Mechanic and Wrench. The **map pack and AI Overview sit above them all**.

---

## 2. The web app today (verified from `prod-branch` @ `1b37715`)

| Fact | Evidence | SEO consequence |
|---|---|---|
| Single-page export | `app.json` → `expo.web.output: "single"` | Every route serves the same empty HTML shell. Crawlers see no route-specific content, titles or descriptions. |
| Catch-all rewrite | `vercel.json` → `rewrites: /:path* → /` | Every URL returns 200 with identical HTML. Unknown URLs look like valid duplicates (a "soft 404" risk). |
| No per-route head | no `expo-router/head` usage in `app/` or `src/` | Every page has the same title and no description, canonical or OG tags. |
| No robots.txt or sitemap | none in `public/` | No crawl guidance. |
| No universal links or App Links | `expo.ios.associatedDomains` and `expo.android.intentFilters` are absent; only `scheme: "revx"` exists | Web links can't open the installed app; no app indexing. |
| Bundle IDs | `com.revx.app` (iOS and Android) | Needed for app association files and store listings. |

---

## 3. Recommended course of action: web app

### Principle

**The web app is a logged-in tool, not the marketing site.** The landing site owns brand, category and local discovery. The web app should not compete with it for the same queries, and it must never leak user data into search.

### P0: do before the web app is public

1. **Keep private app routes out of the index.**
   - Serve `X-Robots-Tag: noindex, nofollow` for every app route. One `headers` rule in `vercel.json` covers this.
   - Add a `public/robots.txt` that disallows authenticated paths.
   - Don't rely on robots.txt alone, since disallowed URLs can still be indexed from links. The `X-Robots-Tag` header is the control.
   - Covers chat, job detail, post detail, profile, moderation, conversations, account and similar routes.
2. **Return a real 404 for unknown paths.** Narrow the catch-all rewrite so only known route patterns rewrite to the SPA, and let everything else 404. This stops infinite duplicate URLs.
3. **Canonical brand home is the landing domain.** Point the app shell's `<link rel="canonical">` and OG tags at the landing site, or omit them, and use one consistent site name everywhere.
4. **Never put user data in URLs or titles.** Location snapping (decision D2) must hold for anything shared publicly: no precise coordinates, emails or names in query strings or `<title>`.

### P1: only if public content pages are wanted

Community threads and mechanic profiles are the app's only potential SEO and AEO assets. Pursue them **only after an explicit product decision**, with privacy and moderation review.

5. **Render them on the server or statically, not in the client SPA.** Switch `web.output` to `"static"` (or `"server"`) for those routes and use `expo-router/head` for per-route title, description, canonical and OG. Check Expo SDK 56 documentation (context7) before relying on recalled APIs.
6. **Add structured data that matches visible content.**
   - Community Q&A threads: `DiscussionForumPosting`, or `QAPage` when there's an accepted answer.
   - Mechanic profiles: `Person` or `LocalBusiness` only when the mechanic consents and the facts are real. Show `AggregateRating` only after the 3+ released-review threshold, and only with the real numbers.
   - Never invent ratings or prices.
7. **Write public mechanic profiles for the local queries.** Use specialties, vehicle types and a snapped service area, e.g. "Mobile mechanic · La Jolla / UCSD · brakes, ECU". Those are the "mechanic san diego" (480/mo, difficulty 13) and "near me" queries.
8. **Add a sitemap** listing only the public, indexable routes, and keep `lastmod` honest.

### P2: AEO and GEO from app data (needs owner sign-off)

9. **Turn aggregate intake data into anonymous symptom guides**, e.g. "What does a grinding noise when braking usually mean?", using the categories the intake actually asks about.
   - This targets the braking-noise cluster (6.6k plus a long tail at difficulty about 6) and the cost questions that make RepairPal the AI-cited source.
   - It must be aggregated and anonymized, carry the app's AI disclaimer verbatim, and never quote an individual user's post.
   - Publish on the landing site, not inside the app.
10. **Be consistent across surfaces.** Use the same name, description, logo and `sameAs` set as the landing site's Organization JSON-LD. An engine merges entities from consistent mentions; inconsistency feeds the crossbow and ad-tech confusion.

---

## 4. Recommended course of action: mobile apps (iOS and Android)

The stores aren't live yet (production readiness Order 5). Set these up as part of release:

1. **Store listing search (App Store Optimization).**
   - App name and subtitle carry the category: "RevX: AI Mechanic & Repair" (≤30 characters) with a subtitle like "Mobile mechanics in San Diego".
   - Fill the iOS keyword field with *mobile mechanic, car repair, car noise, brake, check engine, ai mechanic*.
   - The Play Store indexes the full description, so use the same terms naturally there.
   - Store-name collision: "RevX" alone loses to the crossbow and ad-tech results; the descriptive suffix fixes that.
2. **Universal links (iOS) and App Links (Android).**
   - Add `expo.ios.associatedDomains: ["applinks:<web-app-domain>"]` and Android `intentFilters` with `autoVerify: true`.
   - Host `/.well-known/apple-app-site-association` and `/.well-known/assetlinks.json`. On Vercel, exclude `/.well-known/*` from the SPA rewrite, or it will be rewritten to `/`.
   - This lets landing-site and shared links open the installed app.
3. **Deep-link the landing CTAs.** Once the stores are live:
   - add an iOS Smart App Banner (`<meta name="apple-itunes-app">`) on the landing site;
   - add official store badges;
   - add `MobileApplication` JSON-LD, with ratings only from real store data.
   
   The landing site deliberately has none of these today (decision D6).
4. **Ratings and reviews.** Prompt for a store rating only after a completed job and released review (the honest moment), using the native `StoreReview` API. Ratings drive both store rank and AI recommendation.
5. **Screenshots and preview video.** Show the loop (intake, AI read with disclaimer, swipe, match). Store creative is indexed context for the app's category.

---

## 5. Measurement (do this, or nothing above is provable)

| What | Tool | When |
|---|---|---|
| Index coverage, queries, CTR | Google Search Console + Bing Webmaster Tools, verified for both landing and web-app domains | At launch |
| Field Core Web Vitals | PageSpeed Insights / CrUX | After real traffic |
| Keyword positions | SE Ranking project (Google US + region "San Diego, California, United States"), keyword set from §1 | Weekly |
| AI share of voice | SE Ranking `DATA_getAiSearchLeaderboard` with the RevX domain as `primary` vs wrench.com, repairpal.com, yourmechanic.com, motorfyx.com; plus `DATA_getAiSearchPromptsByBrand` for "RevX" | Monthly; compare to `seranking-raw/` |
| Store rank | App Store Connect / Play Console search terms | Post-release |

Any change between runs is observational drift, not proof that a specific change caused it.

---

## 6. Rules for agents

- **Don't break the app to fix SEO.** Never edit `app.json` web settings or the root `vercel.json` without checking the app's own Vercel deploy and the handoff rule in the landing doc (§6, "do not collide").
- **Leave `package-lock.json` alone.** Never hand-merge it (`merge=binary`), and install with `--legacy-peer-deps`.
- **Verify, don't assume.** Run `npx tsc --noEmit` and `npx eslint app/ src/` after changes, and check `curl -I` on a deployed route for the `X-Robots-Tag` header.
- **Claims must match the app.** Only claim what is built (handoff §2 of the landing doc). No ratings, prices or "verified" labels in markup before they exist.
- **Privacy wins over SEO.** Nothing user-generated becomes public or indexable without an explicit owner decision.
