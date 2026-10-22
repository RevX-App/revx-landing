# RevX landing site — plan and locked decisions

Started 2026-10-22 on branch `landing-page`. Source brief: `doc/agent_handoff.md`.
Product truth lives in `PRODUCT.md`. The visual direction contract lives in
`.impeccable/surfaces/src-pages-index-astro.md`.

## Locked decision record

| # | Question (handoff §9) | Decision |
| --- | --- | --- |
| D1 | Primary goal | Balanced: owners and mechanics are equal audiences. Investors are served by the vision and team sections. |
| D2 | Primary visitor / structure | Both audiences on one page, each with its own path (Owners dial, Mechanics dial). |
| D3 | San Diego / UCSD | Front and centre. |
| D4 | Main CTA | **Open RevX**: link to the hosted web app. Mechanics use the same link and sign up as Mechanic accounts. |
| D5 | Form backend | None. No form, no keys, no migration. |
| D6 | Store availability | Not public. No store badges; copy says "coming to iOS & Android". |
| D7 | Web app URL | Placeholder constant `APP_URL` in `src/config.ts`. `rev-x-dev-build.vercel.app` is a dev build and is **not** to be used. |
| D8 | Roadmap | Shown and clearly labelled as not built yet. **No PRD numbers** (pricing, commission, funding). |
| D9 | Team | Placeholder cards, marked TODO, until names/roles/consent arrive. |
| D10 | Traction | Placeholder entries, visibly marked as placeholders. Never presented as real. |
| D11 | Screenshots | No device captures. UI on the page is authored HTML and labelled as an illustrative demo with fictional seed personas. |
| D12 | Legal | Placeholder `/privacy` and `/terms` pages. The AI disclaimer is mirrored from the app. |
| D13 | Look | Instrument Cluster direction (impeccable roll, seed `d814220abff297f3`), carrying category-standard elements per user steer: garage photo, plain H1 + two CTAs, phone view, how-it-works. |
| D14 | Stack | Astro 7, static output, self-hosted Barlow fonts. Own Vercel project. |
| D15 | Motion | One signature interaction: ignition bulb-check, then a lamp-driven demo of the loop in the message centre. Respects `prefers-reduced-motion`. |
| D16 | Hosting / analytics | Separate Vercel project. No analytics, so no cookie notice. Domain is TBD. |
| D17 | Pages | Single page plus the two legal placeholders. |
| D18 | SEO | Meta description, OG image, favicon (authored; the app's `icon.png` is the stock Expo icon and is not used). |

Assets: `src/assets/garage-hero.png` is copied unmodified from `RevX-App/RevX@prod-branch` `assets/welcome-hero.png`. `src/assets/disc-brake.jpg` is Wikimedia Commons *Disc_brake_car.jpg* by Irvin calicut (CC BY-SA 3.0), the same image the app seed uses; it's credited on the page and must stay credited. Every raster carries embedded provenance (`impeccable embed-prompt --scan src/assets public`).

## Stages

- [x] **1. Scaffold.** Astro project at repo root, `src/config.ts`, fonts, tokens, hero asset.
- [x] **2. First viewport.** Nav, lamp row, dials, message centre, start button, backdrop photo.
- [x] **3. Sections.** How it works (lamp legend), diagnosis readout, mechanics path, trust (blind reviews, privacy), also-on-the-dash, roadmap (unlit lamps), San Diego + traction placeholders, team placeholders, closing CTA, footer, legal pages.
- [x] **4. Motion.** Ignition sweep and lamp-driven demo; drag on the swipe step; reduced-motion hold.
- [x] **5. Responsive.** Captured at 390 and 1440 with no horizontal scroll. The tablet range (641–1100) is coded but **not captured**.
- [x] **6. Verify.** `npm ci && npm run build`, serve, screenshot 375 and 1440, design detector, finish review, DESIGN.md.

### Watch-outs

- Every feature claim must trace to handoff §2. Not-built features appear only in the roadmap block.
- Never write "certified", "guaranteed" or "verified mechanic".
- Push copy names only match, message and job completed. The review push is not wired.
- No `@revx.test` emails on the page. Persona names only, labelled as a demo.
- Lit lamps must not use coloured glow halos (the design detector flags them). Use solid fills.

## Handoff list for the user (fill before launch)

1. `APP_URL` in `src/config.ts`.
2. Team names, roles and consent.
3. Real traction items, or delete the placeholder block.
4. Privacy policy and terms text.
5. Custom domain and Vercel project (Root Directory = repo root). Then set `site` in `astro.config.mjs`, which is used for canonical and OG URLs.
6. Re-run `node scripts/og.mjs` if the OG card copy changes.

## Verification log (2026-10-22)

- `npm ci && npm run build` from a clean copy: 3 pages, no errors.
- Captured at 1440 and 390 (Chrome via playwright-core). No horizontal scroll. All seven demo states and drag-to-match work, with no console errors.
- The impeccable finish review ran two fix rounds and then scored **ship**, scoped to its fix list. The detector's 8 cramped-padding warnings are hairline dividers, and the reviewer judged them false positives.
- Not run: Lighthouse, screen-reader pass.
