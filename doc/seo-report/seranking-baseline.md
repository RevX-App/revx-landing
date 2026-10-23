# SE Ranking baseline: keywords and AI share of voice

**Status:** completed (pre-launch baseline)
**Date:** 2026-10-22
**Source:** SE Ranking API through MCP, US database, free trial account
**Cost:** about 8,000 of 100,000 trial units. Keyword metrics, the AI leaderboard and the question lookups reported no unit cost; the three brand-prompt lookups used about 8,000.
**Raw responses:** [`seranking-raw/`](seranking-raw/)

This baseline answers the gaps in the [audit report](report.md) §4 and §7: real search volumes, and what AI engines say today. RevX has no live domain yet, so its own AI visibility can't be measured. The AI baseline is therefore (a) competitors' AI share of voice and (b) what AI answers currently attach to the name "RevX".

## 1. Keyword volumes (US, monthly)

| Keyword | Volume | Difficulty (0–100) | CPC | Intent |
|---|---:|---:|---:|---|
| mobile mechanic near me | 201,000 | 68 | $1.59 | Local, commercial |
| mobile mechanic | 110,000 | 59 | $1.57 | Local, commercial |
| mechanic near me | 49,500 | 73 | $2.00 | Local, commercial |
| check engine light on | 14,800 | 80 | $0.02 | Informational |
| grinding noise when braking | 6,600 | 49 | $0.65 | Informational |
| car repair estimate | 1,900 | 61 | $2.11 | Local, commercial |
| **mobile mechanic app** | **590** | **7** | $1.76 | Informational |
| **ai mechanic** | **590** | **7** | $0.72 | Local, commercial |
| **mechanic san diego** | **480** | **13** | $2.73 | Local, commercial |
| mechanic app | 260 | 8 | $1.55 | Informational |
| find a mechanic | 260 | 15 | $1.74 | Local, commercial |
| car noise diagnosis | 260 | 9 | $1.28 | Informational |
| car diagnosis app | 90 | 27 | $0.61 | Informational |
| auto repair san diego | 60 | 15 | $2.78 | Local, commercial |
| mobile mechanic san diego | 10 | 3 | $1.58 | Local, navigational |
| car repair san diego | 10 | 22 | $2.78 | Local, navigational |
| mechanic la jolla | 10 | 4 | $0.00 | Local, commercial |

No data: "ai car diagnosis", "ucsd car repair", "what is that noise in my car".

### What this changes in the report

- **The head term is "mobile mechanic near me", not "mobile mechanic San Diego".** San Diego searchers type "near me" (201k/mo nationally), and Google localizes the result. The city-name phrasing barely registers (10/mo). The leadership track should target "mobile mechanic" and "near me" with local signals (Organization `areaServed`, a Google Business Profile if eligible, and neighbourhood content), not the city-name phrase.
- **Near-term wins are the low-difficulty, on-product terms:**
  - "mobile mechanic app" (590, difficulty 7)
  - "ai mechanic" (590, difficulty 7)
  - "mechanic san diego" (480, difficulty 13)
  - "car noise diagnosis" (260, difficulty 9)
  - "mechanic app" (260, difficulty 8)
  - "find a mechanic" (260, difficulty 15)
  
  These are winnable with a clear homepage title and one or two supporting pages.
- **"ai car diagnosis" has no measurable volume.** People search "ai mechanic" instead. Use that phrasing in the title and H2s.
- **Symptom content is the biggest informational opportunity.** "grinding noise when braking" draws 6,600/mo at difficulty 49, and its long tail (below) is nearly uncontested. That is exactly RevX's demo scenario.

## 2. Question keywords (FAQ and content seeds)

**"mobile mechanic" questions:**

| Question | Volume | Difficulty |
|---|---:|---:|
| how to start a mobile mechanic business | 390 | 7 |
| what is a mobile mechanic | 210 | 14 |
| how much do mobile mechanics charge | 210 | 5 |
| how much does a mobile mechanic make | 210 | 7 |
| how much does a mobile mechanic cost | 140 | 6 |
| how to become a mobile mechanic | 140 | 14 |
| do you tip mobile mechanics | 50 | 7 |

**Braking-noise symptoms:**

| Question | Volume | Difficulty |
|---|---:|---:|
| grinding noise when braking | 6,600 | 49 |
| scraping noise when braking at low speed | 590 | 6 |
| creaking noise when braking | 480 | 6 |
| car making grinding noise when braking | 390 | 6 |
| car making scraping noise when braking | 390 | 6 |
| brakes making grinding noise when stopping | 320 | 17 |
| rubbing noise when braking | 320 | 6 |
| noise when i brake | 270 | 7 |

**Reading:**
- The cost questions ("how much does a mobile mechanic charge") fit an owner FAQ. The answer must not invent prices; it can explain that RevX shows an AI cost band and real quotes.
- The earnings and "start a business" questions fit the founding-mechanic section.
- The braking-noise cluster supports one well-built symptom page grounded in what the intake and AI read actually ask and return.

## 3. AI share of voice: competitors (US, all five engines)

The engines covered are Google AI Overviews, Google AI Mode, ChatGPT, Perplexity and Gemini.

| Rank | Brand (domain) | Share of voice | Brand mentions | Links/citations |
|---:|---|---:|---:|---:|
| 1 | Wrench (wrench.com) | 49.9% | 1,221 | 2,899 |
| 2 | RepairPal (repairpal.com) | 41.7% | 12 | 135,620 |
| 3 | Your Mechanic (yourmechanic.com) | 8.4% | 12 | 25,873 |
| 4 | MotorFyx (motorfyx.com) | 0% | none | 1 |

**Reading:**
- **Wrench wins on brand mentions.** AI answers name it, mostly in Google AI Overviews (862) and AI Mode (242). It's the brand AI recommends for "mobile mechanic".
- **RepairPal wins on citations** (135k links, 112k of them in AI Overviews). It is cited as a source but rarely named. *Inference:* its repair-cost pages are what AI uses to answer "how much does X cost". This is the source type RevX's cost-band and symptom content would compete with.
- **MotorFyx, the closest "multiple quotes from mobile mechanics" model, is invisible to AI.** A new entrant isn't locked out of this space, but it gains nothing from existing alone.
- **Caveat:** brand matching is exact and case-sensitive. "Your Mechanic" may undercount "YourMechanic". Treat the brand-mention column as indicative, the link column as more reliable.
- This is the competitor baseline to compare against after launch.

## 4. What AI engines say about "RevX" today

| Engine | Prompts whose answer mentions "RevX" | What they're about |
|---|---:|---|
| Google AI Overviews | 55 | Excalibur RevX **crossbow** (hunting, decocking, prices), "ski rev", other non-repair topics |
| ChatGPT | 8 | Crossbows, "What is rev x?", Indian mobile-ad companies, marketing automation |
| Perplexity | 0 | none |

**This upgrades audit finding H1 from "high" to the top GEO risk.** The name "RevX" is already owned in AI answers by a hunting crossbow and an ad-tech firm. ChatGPT even has a "What is rev x?" answer that isn't about RevX the marketplace.

Without strong disambiguation, a user asking an AI about "RevX" will get crossbows. Actions, building on audit H1 and H3:

1. **Never use the bare name.** Use "RevX, the San Diego car-repair marketplace" in the title, the first sentence, OG tags, Organization `description` and every off-site profile.
2. **Ship Organization JSON-LD on launch day.** Include `name`, `alternateName` (for example "RevX app"), `description`, `areaServed`, `url`, `logo` and `sameAs`.
3. **Build off-site corroboration early.** UCSD or pitch-competition coverage, a LinkedIn company page and a GitHub org, all saying "car repair" and "San Diego" next to "RevX". AI engines resolve entities from consistent third-party mentions.
4. **Decide whether the name stays.** That's a business call, but this data shows the collision is real and current. Re-run this check after launch; if repair prompts still don't surface RevX after 2–3 months of corroboration, a descriptive modifier ("RevX Auto", "RevX Repair") is cheaper than fighting a crossbow brand.

## 5. Re-run plan (post-launch)

- Same calls, same parameters, monthly. The raw JSON is in [`seranking-raw/`](seranking-raw/).
- Once a domain is live, add `DATA_getAiSearchOverview` for the RevX domain and put RevX as `primary` in the leaderboard against Wrench, RepairPal, Your Mechanic and MotorFyx.
- Track positions for the near-term keyword set (§1, bold rows) with an SE Ranking project, or with Search Console after verification.
- Any change between runs is observational drift, not proof that a specific change caused it.

## 6. San Diego demand (estimate) and the local results page

SE Ranking's keyword database is national only. Real city-level volumes need a rank-tracking project with a San Diego search engine, which means creating a project in the account. That was skipped by the owner's choice. The volumes below are therefore **estimates**, not measurements.

**Method.**
- San Diego County is about 3.3M people, about 1% of the US (about 335M).
- For "near me" and generic terms, the SD estimate is US volume × 1% (range 0.8–1.3%).
- City-named terms ("… san diego") are already local, so their US volume is used as-is.
- Replace these with measured numbers from Google Keyword Planner (location: San Diego DMA) or an SE Ranking project when ready.

| Keyword | US volume | Est. San Diego / month | Basis |
|---|---:|---:|---|
| mobile mechanic near me | 201,000 | ~2,000 (1,600–2,600) | 1% share |
| mobile mechanic | 110,000 | ~1,100 (900–1,400) | 1% share |
| mechanic near me | 49,500 | ~500 (400–640) | 1% share |
| mechanic san diego | 480 | 480 | city-named, all local |
| check engine light on | 14,800 | ~150 | 1% share |
| grinding noise when braking | 6,600 | ~65 | 1% share |
| auto repair san diego | 60 | 60 | city-named |
| car repair estimate | 1,900 | ~20 | 1% share |
| mobile mechanic san diego / car repair san diego / mechanic la jolla | 10 each | 10 each | city-named |
| mobile mechanic app / ai mechanic | 590 each | ~6 each | 1% share |

**Reading:**
- Local demand for this service is roughly **4,000–5,000 searches a month in San Diego**, almost all phrased as "near me". It is a real but small market at launch scale.
- The app-category terms ("mobile mechanic app", "ai mechanic") are national demand. They matter for brand discovery and App Store search, not local customer acquisition.
- **Implication:** win San Diego through the local results (Google's map pack and "near me"), not through city-named keywords.

**Live San Diego results page** for "mobile mechanic near me" (SE Ranking SERP, location San Diego CA, desktop, 2026-10-22 21:24; raw in `seranking-raw/serp-sandiego.json`).

Page features shown: AI Overview, **local pack**, reviews, People Also Ask, ads, images, video.

| Rank | Domain | Type |
|---:|---|---|
| 1 | mobilemechanicofsandiego.com | Local independent |
| 2 | yelp.com | Directory |
| 3 | sandiegoproautorepair.com | Local independent |
| 4 | yourmechanic.com | National marketplace |
| 5 | reddit.com (r/sandiego) | Community |
| 6 | thecardoc619.com | Local independent |
| 7 | wrench.com | National marketplace |
| 8 | thumbtack.com | National marketplace |
| 10 | sandiegopromobilemechanic.com | Local independent |

**Reading:**
- **The local page is winnable.** It's mostly small independent mechanics with thin sites, plus directories. That's no wall of national giants.
- The **local pack and AI Overview sit above all of these**. Being in the pack requires a Google Business Profile, which needs a business address or service area. That's an owner decision, since RevX is a marketplace, not a shop.
- **Reddit r/sandiego ranks #5.** Genuine community presence there (not spam) is a realistic early channel.
- **Yelp and Thumbtack rank.** A RevX listing on directories where allowed builds local signals and the third-party mentions that GEO needs.
- **Every local independent here is also a potential RevX founding mechanic.** The SEO competitors are the supply side of the marketplace.

Only one of the four queried terms returned results (250 units); the other three need separate runs.

## Limitations

- US national database. San Diego-level volumes aren't broken out; city-level SERP checks (`DATA_getSerpResults` with a San Diego location) would add them, at extra cost.
- AI share of voice reflects SE Ranking's own prompt sampling, not every possible question.
- Free trial: the account expires 2026-11-05.
