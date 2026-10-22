# RevX landing: SEO, AEO and GEO audit

**Status:** completed (local, pre-launch). Report only; nothing in the site was changed, except `vercel.json` (see §1).
**Date:** 2026-10-22
**Scope:** the built Astro site (`dist/`), served locally. Three URLs: `/`, `/privacy/`, `/terms/`.
**Not in scope / blocked:**
- The site is not deployed, so there is no live crawl, Search Console or Bing data, and no backlink or AI-answer observation.
- SE Ranking (seranking `seo-skills`) needs OAuth sign-in and credits. It was not authorized during this run, so its keyword volumes, site audit and AI-search share-of-voice are missing (see §7).

This report gives each tool's own score. It does not invent a single blended "SEO score"; the suite forbids one because it would be false precision.

## 1. vercel.json (delivered)

`vercel.json` at the repo root:

| Setting | Value |
|---|---|
| framework | `astro` |
| installCommand | `npm ci` |
| buildCommand | `npm run build` |
| outputDirectory | `dist` |
| cleanUrls | `true` |
| trailingSlash | `true` |

Headers:
- `/_astro/*` gets one-year immutable caching.
- `favicon.svg` and `og.png` get one-day caching.
- Every route gets security headers: `nosniff`, `Referrer-Policy`, `X-Frame-Options: DENY`, `Permissions-Policy` and HSTS.

`trailingSlash: true` is deliberate. Astro builds `privacy/index.html` and emits canonical `/privacy/`. With `false`, Vercel would 308-redirect the canonical URL to a different one.

Not set yet: a `Content-Security-Policy`. Add one after launch, once the final script and font origins are known.

## 2. Measured scores (Lighthouse 12.6, local build)

| Profile | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Mobile | 97 | 97 | 100 | 100 |
| Desktop | 100 | 97 | 100 | 100 |

Mobile timings:
- LCP 2.3 s
- CLS 0.009
- TBT 0 ms
- FCP 1.8 s

These are lab numbers from localhost, not field data (CrUX/RUM), which only exists after launch.

**Lighthouse's SEO 100 is necessary but nowhere near sufficient.** It does not check the issues that matter most here: the placeholder canonical domain, the missing robots.txt and sitemap, the missing structured data, and the query targeting.

Lighthouse failures worth fixing:
- **`aria-prohibited-attr`:** the wordmark `<span aria-label="RevX">` has no role (`src/components/Wordmark.astro`).
- **Render-blocking CSS and font requests:** inlining the critical CSS or preloading the two main font files would help.
- **`uses-responsive-images`:** affects the brake photo on desktop.

## 3. Findings

Severity reflects pre-launch risk, and every item is evidenced from the build. "Fact" means observed; "inference" is labelled.

### Critical: fix before the site goes live

| # | Finding | Evidence | Fix |
|---|---|---|---|
| C1 | Canonical, OG and Twitter URLs point to a placeholder domain | `site: 'https://revx.example'` in `astro.config.mjs`. Every page emits `canonical https://revx.example/…` and `og:image https://revx.example/og.png`. | Set the real production domain before the first deploy. Otherwise Google is told the real pages are duplicates of a domain that doesn't exist, and link previews break. |
| C2 | The primary CTA is a dead link | Every "Open RevX" and founding-mechanic link is `href="#app-url-pending"`. | Set `APP_URL`. A page whose main action goes nowhere hurts conversions and crawl-quality signals. |
| C3 | No `robots.txt` and no XML sitemap | `/robots.txt`, `/sitemap.xml` and `/sitemap-index.xml` all return 404. | Add `@astrojs/sitemap` and a `public/robots.txt` with `Allow: /` and a `Sitemap:` line. |
| C4 | Placeholder legal pages are indexable | `/privacy/` (62 words) and `/terms/` (45 words) carry no `noindex`, and both reuse the homepage meta description. | Add `<meta name="robots" content="noindex">` until the real text ships, and give each a unique description. |

### High: needed to rank or be cited

| # | Finding | Evidence | Fix |
|---|---|---|---|
| H1 | The brand name collides with an established entity | A web search for `"RevX" mechanic app` returns only RevX, the mobile ad-tech company (Bengaluru/Singapore), and no repair app. *Inference:* engines and AI answers will merge or confuse the two entities. | Always pair the name with its category ("RevX, the San Diego vehicle-repair marketplace"). Add Organization structured data with a description, `areaServed` and `sameAs` profiles (H3). Use one consistent name and description everywhere off-site. |
| H2 | The title and H1 carry no query terms | Title: "RevX · The mechanic at your door." (33 characters). H1: the same tagline. Nothing says *mobile mechanic*, *car repair*, *San Diego* or *AI diagnosis*. | Keep the tagline as the visible H1 if you like, but make the `<title>` descriptive. For example: "RevX: AI car diagnosis and San Diego mechanics who come to you" (about 60 characters). Make the description lead with the same terms. |
| H3 | No structured data at all | 0 JSON-LD blocks on all three pages. | Add `Organization` (name, url, logo, description, areaServed San Diego, sameAs) and `WebSite`. Optionally add `WebApplication` (applicationCategory, operatingSystem "Web"), but **no** ratings or offers until they are real. FAQ markup no longer earns rich results for most sites; use it only if it mirrors a visible FAQ. |
| H4 | No answer-shaped content | The H2s are evocative rather than descriptive ("Lamps we haven't wired yet.", "Trust, built into the wiring."), and there is no FAQ. AI answers and featured snippets extract direct question-and-answer passages. | Add a short visible FAQ. Candidates: How does the AI diagnosis work? Is it accurate? Do mechanics pay for leads? Which parts of San Diego? Cars and motorcycles? Is it free? (Pricing needs an owner decision; don't invent it.) Give the creative H2s descriptive subtitles, e.g. "Roadmap: features coming to RevX". |
| H5 | Thin entity and E-E-A-T signals | The team and traction are placeholders. There is no contact email, About page, founder names or social profiles. | Fill in the team with real names and roles, add a contact email, and link the UCSD and pitch context once it's real. These are the facts engines use to decide whether to trust and cite an entity. |

### Medium

| # | Finding | Fix |
|---|---|---|
| M1 | Favicon is SVG only; no `apple-touch-icon` or web manifest (both 404) | Add a PNG or ICO favicon of at least 48px, a 180px `apple-touch-icon` and a `site.webmanifest`. Google shows the site icon in mobile results. |
| M2 | OG tags are incomplete | Add `og:url`, `og:site_name`, `og:image:width`/`height`/`alt`, and per-page descriptions. |
| M3 | Content depth is 786 words on one URL, so the page can only compete for a narrow query set | Long-term: add service-area pages (UCSD/La Jolla, Clairemont, Pacific Beach…), a "for mechanics" page, and symptom pages built from real intake categories ("grinding noise when braking"). Only where real content exists; no programmatic thin pages. |
| M4 | Hero image is capped at 1024px wide but shown up to 1440px | Fine at the current 0.32 opacity; add a 1600px source if the backdrop gets stronger. |
| M5 | No `llms.txt` or Markdown mirror | Optional. A small `/llms.txt` that points to the homepage and FAQ is cheap to maintain. It is a publisher guide with no guaranteed consumer, not a visibility lever. |

### Low

| # | Finding | Fix |
|---|---|---|
| L1 | Wordmark `aria-label` on a bare `<span>` (Lighthouse a11y) | Add `role="img"`. |
| L2 | No CSP header | Add one after launch (see §1). |

### Already good: keep these

- Server-rendered static HTML, so all content is visible without JavaScript and crawlable.
- `lang="en"`, a single H1, and a logical H2/H3 order.
- A descriptive alt on the content image; the decorative hero is correctly `alt=""`.
- Fast: CLS under 0.02 and zero blocking time.
- Honest claims. The AI disclaimer, "not built" roadmap labels and demo labels all support GEO trust, because engines down-weight pages whose claims they can't corroborate.

## 4. Query landscape (live web search, 2026-10-22, US)

> **Update 2026-10-22:** SE Ranking data is now in [seranking-baseline.md](seranking-baseline.md). It replaces the qualitative ranking below with real volumes. The head term is "mobile mechanic near me" (201k/mo), not the city-name phrase (10/mo). The near-term wins are "mobile mechanic app", "ai mechanic" and "mechanic san diego" (difficulty 7–13). AI answers currently associate "RevX" with a hunting crossbow, which raises H1 to the top GEO risk. San Diego local demand is estimated at about 4–5k searches a month, mostly "near me". The local results page is led by small independents, Yelp and Reddit, with the map pack and AI Overview above them (see baseline §6).

| Query family | Who shows up | Read |
|---|---|---|
| **Head term:** "mobile mechanic San Diego (app)" | Wrench city pages, YourMechanic, MotorFyx, local shops | Dominated by national marketplaces with city-page networks and years of authority. This is a long-term leadership target, not a launch win. |
| **Category:** "AI car diagnosis app … photo … cost estimate" | App Store listings (MechanicIQ, RepairValueAI, AutoDiag AI Mechanic), AI Mechanic (aimech.app), hackathon projects | A young, fragmented SERP made of thin store pages. *Inference:* this is the nearer-term opportunity where a clear explainer page can compete. RevX's differentiator, AI read **plus** a two-sided mechanic match, is not well covered by anyone here. |
| **Brand:** "RevX mechanic app" | Only the ad-tech RevX | No brand presence yet; the entity collision in H1 applies. |

Without SE Ranking (or Search Console after launch) there are **no search volumes or difficulty scores** in this report. The ranking of query families above is qualitative.

Two tracks run in parallel:
- **Nearer-term:** brand and entity clarity (H1–H3), plus answer-ready AI-diagnosis and symptom content (H4).
- **Head term:** service-area pages plus authority-building (UCSD press, the pitch competition, local mechanic partners) toward "mobile mechanic San Diego".

## 5. AEO and GEO readiness (provisional)

Formal AEO and GEO findings need a pinned AI-search Research Pack, meaning observed engine answers for a frozen query set. That needs a live site and engine access. The checks below are **local readiness only**; they are not observations of what ChatGPT, Gemini or Perplexity actually say.

| Check | State |
|---|---|
| Direct answer to "what is RevX" in the first screen | Yes: the lede is one plain sentence. |
| Question-shaped headings or FAQ | No (H4). |
| Extractable facts (area served, vehicle types, categories, how matching works) | Present in prose; not in structured data (H3). |
| Entity uniqueness and consistency | At risk: the name collides (H1). |
| Claims supported and non-promotional | Strong: disclaimers and "not built" labels. |
| Crawlable without JavaScript | Yes. |
| AI crawler access | No robots.txt (C3). Decide your AI-crawler policy explicitly when you add it. Default allow is typical for a startup that wants to be cited. |

## 6. Recommended actions, in order

1. **Before first deploy:** C1 domain, C2 app URL, C3 robots and sitemap, C4 noindex the legal pages.
2. **Launch week:**
   - H2: descriptive title and description.
   - H3: Organization and WebSite JSON-LD.
   - M1: favicon set and manifest.
   - M2: OG completion.
   - L1: wordmark fix.
3. **First month:**
   - H4: a visible FAQ with descriptive subtitles.
   - H5: real team, contact and social profiles.
   - H1: consistent "RevX, San Diego vehicle-repair marketplace" naming on every off-site profile.
   - Then verify the domain in Google Search Console and Bing Webmaster Tools and submit the sitemap.
4. **After launch (measurement):**
   - Connect SE Ranking for volumes and a site audit.
   - Freeze a query set ("AI car diagnosis", "mobile mechanic San Diego", "car grinding noise when braking", "RevX") and take an AI-answer baseline, then re-check monthly.
   - Any change between checks is drift, not proof of cause.
5. **Ongoing:** M3 service-area and symptom content, authority (UCSD news, pitch results, local partners) and an `llms.txt` (M5).

## 7. Limitations

- Site not live: no field Core Web Vitals, index state, backlinks or AI-answer observations.
- SE Ranking not authorized: no keyword volumes, difficulty, competitor gap, audit health score or AI share-of-voice.
- Lighthouse ran on localhost, which flatters network timings.
- No ranking, citation, traffic or conversion outcome is promised by any action here.

## Sources (live search, 2026-10-22)

**Mobile-mechanic SERP:**
- [Wrench, San Diego](https://wrench.com/cities/san-diego-ca-mobile-mechanic)
- [YourMechanic, San Diego](https://www.yourmechanic.com/city/san-diego-ca)
- [MotorFyx, San Diego](https://motorfyx.com/articles/Free-Diagnostic-Mobile-Mechanic/San-Diego)

**AI car-diagnosis SERP:**
- [MechanicIQ](https://apps.apple.com/us/app/-/id6758075507)
- [RepairValueAI](https://apps.apple.com/app/id6780002718)
- [AutoDiag AI Mechanic](https://apps.apple.com/app/id6761052699)
- [AI Mechanic](https://mcpservers.org/ja/servers/aimech-app)

**Brand collision:**
- [RevX, AppSamurai](https://appsamurai.com/mobile-ad-networks/revx/)
- [RevX, Craft](https://craft.co/revx)

## 8. Implementation status (2026-10-22)

| # | Status | What changed |
|---|---|---|
| C1 | Fixed | `astro.config.mjs` reads `SITE_URL`, else Vercel's `VERCEL_PROJECT_PRODUCTION_URL`, else localhost. No placeholder domain ships. Verified: a simulated Vercel build emits `https://<prod-host>/` canonical and OG URLs. |
| C2 | Fixed in code; needs a value | `APP_URL` reads `PUBLIC_APP_URL`. Set it in the Vercel project; until then links stay `#app-url-pending`. |
| C3 | Fixed | `src/pages/robots.txt.ts` (Allow all, Sitemap line) and `src/pages/sitemap.xml.ts` (indexable pages only). |
| C4 | Fixed | Legal pages carry `noindex, follow` and their own descriptions. They're excluded from the sitemap. |
| H1 | Partly fixed | Title, description, hero first sentence and Organization `description`/`alternateName` all pair "RevX" with "San Diego car-repair marketplace". Off-site profiles and `sameAs` still need the real accounts. |
| H2 | Fixed | Title: "RevX: AI mechanic and mobile mechanics in San Diego". The description leads with the category. |
| H3 | Fixed | JSON-LD: `Organization` (areaServed San Diego), `WebSite`, `FAQPage` (built from the visible FAQ). No ratings or offers. `logo` and `sameAs` wait on real assets and profiles. |
| H4 | Fixed | Visible 7-question FAQ with answers traced to handoff §1–2 and PRODUCT.md. Descriptive H2s ("Trust and privacy…", "Roadmap: …"). |
| H5 | Blocked on owner | Needs real team names and roles, a contact email and social profiles. |
| M1 | Fixed | `scripts/icons.mjs` renders `favicon-48x48.png`, `apple-touch-icon.png` (180px, full-bleed), `icon-192.png` and `icon-512.png` from `favicon.svg`; added `public/site.webmanifest` and head links. `icon-512.png` is the Organization `logo`. Provenance is embedded. |
| M2 | Fixed | `og:url`, `og:site_name`, `og:image:width`/`height` (1200×630), `og:image:alt` and `twitter:image:alt`. Each page has its own meta description. |
