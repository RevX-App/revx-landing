# Handoff — RevX landing website

Written 2026-10-21 for the agent who will build a **promotional landing website**
for RevX on its own branch. It tells you what RevX is, how it is built, what is
true about it today (and what is not), and how to start the work.

**You are not changing the app.** The landing site is a marketing surface. Read
the app to understand it and to borrow its brand; do not edit app code, the
database, or Edge Functions as part of this job.

---

## 0. Before you write any code — grill the user

The brief ("promote the app, showcase its features and vision") leaves most of
the important decisions open. Do **not** guess them. Resolve them with the user
first, using the installed skills:

1. **`superpowers:brainstorming`** — mandatory before any creative/feature work
   in this repo. Use it to explore intent, audience and shape of the site.
2. **`grilling`** (invoke directly; `/grill-me` and `/grill-with-docs` are
   slash-only stubs that delegate to it) — stress-test the plan one question at
   a time until every open question in §9 has an answer. Record the answers as
   a **locked decision record**, which is the house format.
3. **`superpowers:writing-plans`** — turn the locked decisions into
   `docs/technical/landing_site_plan.md`: staged tick-list + decision record +
   *Watch-outs* per stage, plus a companion `landing_site_agent_notes.md` for
   traps. That is how every other feature in this repo is tracked.
4. **`superpowers:using-git-worktrees`** — isolate the branch.
5. Build with **`frontend-design:frontend-design`** (net-new UI) and/or
   **`design-taste-frontend`** (repo-local, anti-slop, aimed at landing pages).
   `high-end-visual-design`, `imagegen-frontend-web` and `brandkit` are also
   installed if the user wants generated references or a brand board.
6. **`context7` MCP** before trusting recall on any framework API you pick.
7. **`superpowers:verification-before-completion`** before claiming done —
   build it, serve it, screenshot it (Playwright MCP is available) at phone and
   desktop widths. This repo has a history of docs asserting things nobody ran.
8. **`superpowers:finishing-a-development-branch`** at the end; ask before
   pushing or opening a PR.

Standing instruction in `CLAUDE.md`: *use skills wherever they apply; don't
hand-roll a workflow one of them already encodes.*

---

## 1. What RevX is

**A two-sided vehicle-repair marketplace with AI diagnosis.** Vehicle owners
post a problem; mechanics and owners swipe on each other; a reciprocal
right-swipe creates a match; they chat, run the job, and leave blind reviews.

- **Tagline in the app today:** *"The mechanic at your door."*
  (`app/(auth)/welcome.tsx`)
- **Positioning (PRD):** "between Tinder's discovery loop and TaskRabbit's
  marketplace mechanics, built specifically for car culture."
- **Problem it attacks (PRD pitch section):** finding a trustworthy, specialized
  mechanic is broken — reviews are gamed, listings are pay-to-play, word of
  mouth doesn't scale.
- **Differentiators (PRD):** bidirectional matching (mechanics choose jobs too),
  AI diagnosis, no pay-per-lead bias. Moat: proprietary job dataset, local
  liquidity, reputation graph.
- **Team:** UCSD undergraduate founding team, building toward a pitch
  competition. **Launch city: San Diego** (UCSD campus + surroundings). The
  seed data is all San Diego ZIPs.
- **Two account types:** *Consumer* (vehicle owner, keeps a Garage) and
  *Mechanic* (profile with specializations, serviced vehicle types, service
  radius). Vehicles: **cars and motorcycles**.
- **Problem categories:** Mechanical · Computer/ECU · Modification · Cosmetic.

### The core loop (the story the site should tell)

1. **Post** — a five-step intake wizard: vehicle → category → symptoms → media
   (photo required; optional audio recording of the noise) → review.
2. **Diagnose** — unless the owner opts out, a real Gemini model returns a
   plain-English explanation, ranked likely causes with reasoning, severity,
   urgency (up to "stop driving"), a confidence level and a USD cost band.
   Posting never waits on the AI.
3. **Swipe** — owners swipe mechanics *for that post*; mechanics swipe open
   posts that match their specialties. Distances are computed server-side.
4. **Match** — reciprocal right-swipe → "It's a match!" (full-screen
   celebration + realtime alert on both devices).
5. **Chat & quote** — realtime chat. A post can collect **several quotes** from
   several mechanics; one becomes the job.
6. **Job** — start → both sides confirm complete (honor system, no payments in
   Phase 1).
7. **Review** — blind, 5-star. Neither side sees the other's rating until both
   submit. Public ratings appear only after 3+ released reviews.

Around the loop: a **GPS map** of nearby mechanics/posts (message straight from
a pin), and a **Reddit-style community** — ranked feed, votes, threaded
comments, brand/topic groups, moderation.

---

## 2. Features you can honestly showcase

All of these are built and running against a live Supabase project (v0.1.1 on
`main`). Sell them, but stay inside these lines.

| Feature | Honest copy angle | Do **not** claim |
| --- | --- | --- |
| **AI diagnosis** (Gemini, multimodal: form + photo + audio) | "Describe it, snap it, record the noise — get a likely diagnosis, severity and a cost range before you talk to anyone." | That it is a certified/guaranteed diagnosis. The app itself shows: *"AI-generated from your photos and answers… not a substitute for a hands-on inspection."* Mirror that. |
| **Structured intake** | The wizard tells you exactly what to photograph or record; mechanics get real data, not "it makes a weird noise." | — |
| **Mechanic briefing** | Matched mechanics receive a clinical technical briefing — owners see plain English. | That the briefing is public; it is only visible to a matched mechanic. |
| **Two-way swiping** | Mechanics choose the jobs they want; owners choose who they trust. | — |
| **Multiple quotes per post** | Collect quotes from several mechanics, pick one. | — |
| **Realtime chat + job tracking** | Chat, start the job, both confirm done. | In-app payments, escrow, scheduling — none exist. |
| **Blind reviews** | Honest ratings: neither side sees the other's review until both are in. | — |
| **Location privacy** | Precise coordinates never leave the server; others see a snapped area and banded distance. Only the matched mechanic gets the job-site point. | — |
| **Map** | Browse nearby mechanics and problems; message from a pin. | — |
| **Community** | Ranked feed, groups by brand/topic, votes, threaded comments, reporting and moderation. | — |
| **Push notifications** | Match, message, job completed. | — (review-released push is coded but its webhook isn't configured) |
| **Platforms** | iOS, Android (Expo) and a web build hosted on Vercel. | **App Store / Play Store availability.** Release mechanics (Production readiness Order 5) are still open. Confirm store status with the user before any "Download on the App Store" badge goes live. |

**Not built (do not imply otherwise):** payments/escrow, Stripe, background
checks, verified-mechanic badges, insurance, VIN scanner, OBD-II Bluetooth,
scheduling widget, image/voice messages in chat, Pro subscriptions, Instant
Book. These are the *vision* (§3), and can appear on the site only if clearly
labelled as roadmap.

---

## 3. The vision (roadmap material)

From `docs/RevX_PRD.md` on `prod-branch` (PRD v3.0). Phase 1 is the built demo
MVP; the rest is plan. Several Phase 2 items were pulled forward and **are**
built (community feed, motorcycles, maps, audio) — cross-check against §2
before labelling anything "coming soon".

- **Phase 2 — early users** (trigger: pitch win, accelerator, or ~50+ users):
  Free vs Pro tiers (Consumer Pro ~$4.99/mo, Mechanic Pro ~$14.99/mo via
  RevenueCat), e-bikes/scooters/bikes, VIN scanner, video uploads, scheduling in
  chat, image messages, mechanic portfolios, smart AI match scoring, AI pricing
  estimates, multi-dimensional ratings, referral program, phone verification.
- **Phase 3 — post-funding** (trigger: ~$500k+ seed or real revenue): Stripe
  Connect payments with escrow (10% commission, 48h auto-release, disputes),
  ID verification + background checks → Verified Mechanic badge, insurance
  partnerships, masked calling, live location sharing, **OBD-II Bluetooth
  integration** (live fault codes on posts — called the major technical
  differentiator), team accounts, parts marketplace, international expansion.
- **Go-to-market:** mechanic-first hyperlocal launch — hand-recruit 20–30 San
  Diego mechanics (independent mobile mechanics, students doing side work, small
  shops), "first 100 mechanics free forever", then open to UCSD students and the
  surrounding community.

Prices, commission and funding figures are **PRD planning numbers**, not
commitments. Ask the user before publishing any of them.

---

## 4. How the app is built (enough to describe it, and to borrow from it)

| Layer | Choice |
| --- | --- |
| App | Expo SDK ~56, React Native 0.85, React 19.2, TypeScript, expo-router |
| Styling | NativeWind 4 (Tailwind **v3**) — dark `revx-*` tokens |
| State | TanStack Query (server), Zustand (local), react-hook-form + zod |
| Gestures | react-native-gesture-handler + Reanimated 4 (swipe decks) |
| Maps | react-native-maps (native) + Leaflet (web) — separate implementations |
| Backend | Supabase: Postgres + PostGIS + Row Level Security, Auth, Storage, Realtime, Deno Edge Functions |
| AI | Google Gemini (`gemini-3.5-flash-lite` primary, `3.1-flash-lite` fallback), called only from the `diagnose-problem` Edge Function. ~$0.0016/diagnosis, ~7s. Rate limited 10/hour, 50/day per user. |
| Push | expo-notifications → `send-push` Edge Function via Database Webhooks |
| Web hosting | Vercel: `vercel.json` at repo root runs `npx expo export -p web` → `dist/`, single-page output with a catch-all rewrite |

Interesting "how it works" talking points if the site gets a tech/trust section:

- **Hypothesis-confirming AI.** A deterministic rule engine turns the structured
  intake into a ranked hypothesis set first; the model is asked to *confirm or
  rule out* those causes from the evidence, which is why a cheap, fast model is
  enough.
- **Privacy by construction.** RLS on every table; state changes go through
  server functions; coordinates are snapped to a ~0.7-mile grid and distances
  banded to 0.5 mi so a pin cannot be reverse-located.
- **Blind reviews and minimum-review thresholds** keep ratings honest.

Full technical tour: `docs/technical/developers_guide_to_RevX_v01.md` (present on
both `main` and `prod-branch`).

---

## 5. Brand assets to reuse

| Asset | Where | Notes |
| --- | --- | --- |
| Wordmark | `src/components/RevXLogo.tsx` | Text, not an image: **"Rev"** bold in silver `#C8C8C8` + **"X"** extra-bold in sky `#38BDF8`, tight tracking. Recreate in HTML/CSS. |
| Palette | `tailwind.config.js` | `brand` `#38BDF8` (dark `#0EA5E9`, muted `#7DD3FC`). `revx-chrome` `#0A0A0A`, `bg` `#121212`, `surface` `#1A1A1A`, `field` `#262626`, `border` `#3A3A3E`, `hairline` `rgba(255,255,255,0.06)`, `silver` `#C8C8C8`, `muted` `#9CA3AF`. "Dark garage + sky-blue accent." |
| Hero photo | `assets/welcome-hero.png` | Full-bleed garage shot used on the welcome screen behind a ~45% black scrim. |
| Icons | `assets/icon.png`, `favicon.png`, `splash-icon.png` | |
| Screenshots | Not in the repo | `scripts/audit-design.mjs` captures every screen against Expo web on `:8081` (`node --env-file=.env --env-file=.env.seed scripts/audit-design.mjs`). Needs `.env`/`.env.seed` and a seeded project — ask the user to run it, or to provide device screenshots. Native-device shots look better than web captures for phone mockups. |
| Demo data | `scripts/seed.mjs` header | Seeded San Diego personas (Sam, Mia, Jay; mechanics like Gina L. of "Triton Auto"). Fine for mockups; they are fictional `@revx.test` accounts. |

There is **no recorded rationale** for the app's original visual design; ask
StefaniaKovalchuk (per `CLAUDE.md`) rather than inventing one. Whether the
landing site should match the app's dark look or depart from it is a question
for the user (§9).

---

## 6. Branch and repo rules that apply to you

- **Work on a new branch cut from `prod-branch`**, e.g. `landing-site`. Do not
  start from `main` (release snapshot, docs trimmed), `ui-gimmick`,
  `phase-1-branch` or `Steph`. The current checkout may be `main`; switch
  deliberately.
- **Do not collide with the app's Vercel deploy.** The repo-root `vercel.json`
  builds the Expo web app. Put the landing site in its own directory (e.g.
  `landing/`) with its own `package.json`, and plan a **separate Vercel
  project** whose Root Directory points at it. Do not edit the root
  `vercel.json` or `app.json` web settings.
- **Keep the landing site's dependencies out of the app's `package.json`.** The
  app installs with `--legacy-peer-deps` and its lockfile is `merge=binary`;
  **never hand-merge `package-lock.json`**.
- **Don't edit shared app components** (`src/components/{Button,TextField,LoadingScreen}.tsx`).
  You shouldn't need to import app code at all — copy tokens, don't couple.
- **No secrets in the site.** `.env` holds `SUPABASE_ACCESS_TOKEN` and other
  secrets. A static marketing site needs none of them. If the user wants a
  waitlist form, that is a backend decision (§9), not a reason to ship a key.
- **Migrations are hand-applied by the user** and numbers are a shared resource
  (next free: `0041`, re-scan every ref before claiming). Only relevant if a
  waitlist table is chosen — and then the agent writes the file, the user
  applies it.
- **`AGENTS.md` stays thin**; record decisions in your plan doc, and update
  `CLAUDE.md` (via `claude-md-management:revise-claude-md`) at the end so the
  next agent knows the landing site exists and where.
- Commit/push only when the user asks.

---

## 7. Verification

There is no test framework. For the landing site, "done" means evidence:

- It builds from a clean install (`npm ci`/`npm install` inside its directory).
- Served locally and **screenshotted at ~375px and ~1440px** via Playwright MCP;
  no horizontal scroll at phone width; dark/light behaviour as decided.
- Lighthouse (or equivalent) for performance/accessibility if the user cares
  about a score target.
- Every product claim on the page traced to §2 or confirmed by the user. Treat
  a feature claim like an RLS claim in this repo: assert only what was run.
- The app's own checks are untouched: `npx tsc --noEmit` and
  `npx eslint app/ src/` still clean at the repo root (your files must not leak
  into the app's `tsconfig`/eslint scope — check `tsconfig.json` `include` and
  `eslint.config.js` ignores).

---

## 8. Reading list

On `prod-branch`:

| Read | For |
| --- | --- |
| `CLAUDE.md` | House rules, live state, traps. |
| `docs/RevX_PRD.md` | Vision, phases, pitch positioning, go-to-market. |
| `docs/technical/developers_guide_to_RevX_v01.md` | How everything works. |
| `docs/technical/demo_script.md` | The 90-second pitch narrative — a good spine for the hero → features flow. |
| `docs/technical/ai_diagnostics_plan.md` | Why the AI is shaped the way it is. |
| `docs/technical/location_gps_plan.md` | The privacy story (decision D2). |
| `docs/technical/multi_quote_lifecycle_plan.md` | Multi-quote flow. |
| `docs/technical/app_deslopify_plan.md` | Locked visual decisions for the app (reference for brand consistency). |
| `pre-publish.md` · `production_readiness_plan.md` | What still stands between v0.1 and real users — i.e. what the site must not over-promise. |

---

## 9. Open questions to grill the user on

Resolve these (via `grilling`) before planning. Each answer becomes a locked
decision.

**Purpose and audience**
1. Primary goal: pitch-competition/investor credibility, mechanic recruitment,
   owner waitlist, or app downloads? (They imply different CTAs and pages.)
2. Who is the primary visitor — owners, mechanics, judges/investors — and do
   owners and mechanics get separate sections or separate pages?
3. Is the San Diego / UCSD launch front and centre, or kept generic?

**Calls to action**
4. What is the main CTA: join waitlist, open the web app, store download,
   "become a founding mechanic", contact the team?
5. If a waitlist/contact form: where does it go — a Supabase table (needs a
   migration and RLS), a third-party form service, or `mailto:`?
6. Are the iOS/Android apps publicly available yet? Store links? TestFlight?
7. Should the site link to the hosted web app on Vercel, and what is its URL?

**Content**
8. How much of the roadmap (§3) to show, and how clearly labelled? Any PRD
   numbers (Pro pricing, 10% commission, funding target) allowed in public?
9. Team section — names, photos, UCSD affiliation, permission to publish?
10. Any traction, testimonials, pitch results or partner logos that are real
    and approved? (Do not invent any.)
11. Screenshots: will the user supply device captures, or should the agent run
    `audit-design.mjs` against seeded data? Real-device phone mockups or
    stylised illustrations?
12. Legal: privacy policy / terms pages needed? The AI disclaimer wording?

**Look and tech**
13. Match the app's dark "garage + sky blue" identity, or a distinct marketing
    look? Any reference sites they like?
14. Stack: plain static HTML/CSS, Astro, Next.js, or Vite + React? (Default
    recommendation: a static-first framework such as Astro — fast, no runtime,
    trivial to host — unless the user wants interactive demos.)
15. Motion/interactivity budget — e.g. an animated swipe-deck or diagnosis demo
    in the hero?
16. Domain and hosting: separate Vercel project? Custom domain? Analytics
    (and therefore a cookie notice)?
17. Single page or multi-page (Home, For Mechanics, For Owners, Vision, About)?
18. SEO/social: OG image, meta description, favicon reuse?
