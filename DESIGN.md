---
name: RevX
description: The mechanic at your door. A night-lit instrument cluster for a two-sided repair marketplace.
colors:
  glass: "#07090b"
  bezel: "#0d1216"
  panel: "#10161b"
  lcd-screen: "#060a0d"
  chip-fill: "#1a232b"
  rule: "#1e272e"
  rule-strong: "#2c3740"
  unlit: "#2a333b"
  ink: "#eceff1"
  silver: "#c8c8c8"
  muted: "#9aa3ad"
  dim: "#7a8590"
  sky: "#38bdf8"
  sky-deep: "#0ea5e9"
  sky-soft: "#7dd3fc"
  sky-ink: "#04131c"
  amber: "#f5a524"
  amber-glow: "#ffd27a"
  amber-deep: "#d98a0b"
  amber-ink: "#1d1203"
  red: "#f0524f"
typography:
  display:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.4vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.2vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  panel-heading:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.02
  readout:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)"
    fontWeight: 700
    fontFeature: "tnum"
  reading-lead:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.1
  value:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    fontFeature: "tnum"
  item:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
  reading:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
  lede:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  small:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    letterSpacing: "0.06em"
  button-compact:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    letterSpacing: "0.06em"
  nav-label:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    letterSpacing: "0.08em"
  label:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  tag: "4px"
  row-tight: "0.4rem"
  row: "0.5rem"
  screen: "0.9rem"
  sheet: "1.25rem"
  panel: "1.5rem"
  bezel: "1.75rem"
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "clamp(1rem, 4vw, 3.5rem)"
  section: "clamp(4rem, 8vw, 7rem)"
  container: "82rem"
  header: "4.25rem"
  target: "2.75rem"
  panel-pad: "clamp(1.25rem, 3vw, 2rem)"
  split-gap: "clamp(2rem, 5vw, 5rem)"
  head-gap: "clamp(2.5rem, 5vw, 4rem)"
components:
  button-primary:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.sky-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.4rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.sky-soft}"
    textColor: "{colors.sky-ink}"
  button-primary-compact:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.sky-ink}"
    typography: "{typography.button-compact}"
    rounded: "{rounded.pill}"
    height: "{spacing.target}"
  button-ghost:
    textColor: "{colors.ink}"
    typography: "{typography.button-compact}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.4rem"
    height: "{spacing.target}"
  menu-toggle:
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.pill}"
    padding: "0 0.9rem"
    height: "{spacing.target}"
  menu-sheet:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.silver}"
    rounded: "{rounded.sheet}"
    padding: "0.75rem"
    width: "18rem"
  lamp-off:
    backgroundColor: "{colors.bezel}"
    textColor: "{colors.dim}"
    rounded: "{rounded.circle}"
  lamp-done:
    backgroundColor: "{colors.bezel}"
    textColor: "{colors.sky}"
    rounded: "{rounded.circle}"
  lamp-on:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.sky-ink}"
    rounded: "{rounded.circle}"
  lamp-warning:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.amber-ink}"
    rounded: "{rounded.circle}"
  lamp-not-wired:
    backgroundColor: "{colors.bezel}"
    textColor: "{colors.dim}"
    rounded: "{rounded.circle}"
    size: "{spacing.target}"
  instrument-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.silver}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel-pad}"
  message-centre:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.silver}"
    rounded: "{rounded.bezel}"
    padding: "clamp(1.1rem, 2.2vw, 1.75rem)"
  screen:
    backgroundColor: "{colors.lcd-screen}"
    textColor: "{colors.ink}"
    rounded: "{rounded.screen}"
    padding: "1.1rem 1.2rem"
  reading-row-lead:
    textColor: "{colors.ink}"
    typography: "{typography.reading-lead}"
    rounded: "{rounded.row}"
  reading-row-alternate:
    textColor: "{colors.muted}"
    typography: "{typography.reading}"
    rounded: "{rounded.row}"
  chip:
    backgroundColor: "{colors.chip-fill}"
    textColor: "{colors.ink}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.7rem"
  chip-hypothesis:
    textColor: "{colors.muted}"
    typography: "{typography.small}"
    rounded: "{rounded.row-tight}"
    padding: "0.2rem 0.7rem"
  lcd-strip:
    backgroundColor: "{colors.lcd-screen}"
    textColor: "{colors.amber}"
    padding: "1rem clamp(1.5rem, 3vw, 2.5rem)"
  placeholder-tag:
    textColor: "{colors.amber}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "0.15rem 0.55rem"
  start-button:
    backgroundColor: "{colors.bezel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "8.5rem"
---

# Design System: RevX

## Overview

**Creative North Star: "The Night-Lit Instrument Cluster"**

Every RevX surface is a dashboard seen from the driver's seat at night: smoked black glass, thin bezel rules, tick scales, and LCD message-centre screens, lit by one sky-blue backlight. Content is presented as readouts, not marketing blocks. A section of the page is a tell-tale lamp in the header; a step in a process is a lit bulb; a ranked list is a set of readings where the lead is lit and the alternates sit dashed and dim; something not built yet is a lamp with no wire behind it.

The system runs on a state vocabulary that every component speaks: **off** (bezel fill, unlit rim, dim glyph), **done** (bezel fill, sky-deep rim, sky glyph), **on** (sky radial bulb, sky-ink glyph), **warning** (amber radial bulb, amber-ink glyph), and **not wired / sealed** (dashed rim). Solid means chosen, confirmed, or live. Dashed means alternate, sealed, pending, placeholder, or not built. The page reads in one direction, top to bottom, with headings on one left edge; density is that of a cluster, compact readouts inside generous dark margins.

Photography is allowed only as a dim backdrop behind the glass (the hero garage at 0.32 opacity, masked to transparent below its midpoint) or as a framed image inside an instrument screen. Depth comes from soft, long, black drop shadows under glass panels, never from glow. Nothing moves on its own: every state change follows scroll position or a click.

**Key Characteristics:**
- Smoked black ground with a cool blue-grey neutral ramp; one sky backlight carries every lit state and the primary action.
- Barlow Condensed for everything printed on the dash (headings, legends, readings, numerals, buttons); Barlow for prose; tabular numerals everywhere.
- Five lamp states (off, done, on, warning, not wired) and a solid/dashed distinction reused across the header, the demo, ranked readings, quotes, seals, roadmap and placeholders.
- Circles for anything that lights up; nested rounded rectangles for glass and screens; pills for buttons, chips and the menu toggle.
- Motion is mechanical and user-driven: bulbs light over 0.3s, screens settle from a slight blur over 0.4s, all on one long ease-out.

## Colors

A smoked-glass dark palette with one cool backlight and two signal colours held in reserve.

### Primary
- **Sky Backlight** (sky): the only lit colour. Lit lamp bulbs, the lead reading's border and counter, lead quote prices, the snapped privacy cell, the distance needle, the primary button, the "X" of the wordmark, check glyphs, focus rings, text selection and the header progress strip.
- **Deep Sky** (sky-deep): the backlight's outer edge. The outer stop of lit bulb gradients, the rim of a "done" lamp, the swipe-right button rim, the founding-mechanic frame and the mechanic job-card border.
- **Soft Sky** (sky-soft): the hot centre of a lit bulb and its rim, primary-button hover, body links, mechanic specialty tags and the AI-read line on the mechanic card.
- **Sky Ink** (sky-ink): text and glyphs on a lit sky surface, including the owner's chat bubble.

### Secondary
- **Amber Tell-tale** (amber): caution or unresolved. The Diagnose lamp, a warning readout (severity "High", urgency "See someone soon"), the locks on sealed reviews, the AI disclaimer LCD strip, and placeholder tags.
- **Amber Glow / Amber Deep** (amber-glow, amber-deep): the hot centre and outer stop of a lit amber bulb; amber-glow is also its rim.
- **Amber Ink** (amber-ink): glyphs on lit amber.

### Tertiary
- **Stop Red** (red): reserved for what must never be shared or ignored. Its only current use is the exact-location point in the privacy grid, the coordinate that never leaves the server.

### Neutral
- **Smoked Glass** (glass): page ground, the header at 94 percent opacity, the browser theme colour, the inner ring of the start button.
- **Bezel** (bezel): unlit and sealed bulb fills, round swipe buttons, unvisited route stops.
- **Panel** (panel): the top stop of instrument glass gradients and the menu sheet fill.
- **LCD Screen** (lcd-screen): the near-black screen inset in the message centre and the disclaimer strip.
- **Chip Fill** (chip-fill): filled intake chips and the mechanic's chat bubble.
- **Rule** (rule): section dividers, the header's bottom edge, list row rules, screen borders.
- **Strong Rule** (rule-strong): panel outlines, ghost-button and menu-toggle borders, dashed alternates, the privacy grid and the distance scale baseline.
- **Unlit** (unlit): unlit lamp rims, dashed sealed-lamp rims, the unlit segments of the progress strip.
- **Ink** (ink): headings, lit readout values, the current header lamp label.
- **Silver** (silver): body prose, the hero lede, menu links, and the "Rev" of the wordmark.
- **Muted** (muted): section ledes, captions, panel titles, alternate readings, header lamp labels at rest, major ticks and numerals on the distance scale.
- **Dim** (dim): printed legends on readouts, ruled-out readings, off-lamp glyphs, not-wired roadmap lamps, empty placeholder values.

### Named Rules
**The One Backlight Rule.** Sky is the only colour that means "lit". If something is on, chosen, current, or the primary action, it is sky; nothing else competes for that job.

**The Signal Reserve Rule.** Amber means caution or unresolved; red means private or stop. Neither is ever decoration, a brand accent, or a hover colour.

**The Ink-On-Light Rule.** Text and glyphs on a lit surface use that light's ink (sky-ink on sky, amber-ink on amber), never white.

## Typography

**Display Font:** Barlow Condensed (with Barlow, system-ui)
**Body Font:** Barlow (with system-ui)

**Character:** A California-plate, DIN-lineage pairing: the condensed cut is what is printed on the dash, the regular cut is what you read in the manual. Tabular numerals are on globally so readouts and prices align like gauges.

### Hierarchy
- **Display** (800, clamp(3rem, 6vw, 5.5rem), 0.92): the single H1, in the hero copy column.
- **Headline** (800, clamp(2.25rem, 4.4vw, 4rem), 1.02): section H2s, every one on the container's left edge.
- **Title** (700, clamp(1.5rem, 2.2vw, 2rem)): the stage H3s in How it works.
- **Panel Heading** (700, 1.5rem): headings that live inside an instrument: the demo's step title and the trust panel's H3s.
- **Readout** (700, clamp(1.25rem, 1.8vw, 1.5rem)): stat values and the lead verdict on a readout.
- **Reading Lead** (700, 1.375rem): the lead cause in the demo, the match pair, the mechanic job title.
- **Value** (700, 1.25rem): quote prices and spec-sheet terms.
- **Item** (600 to 700, 1.125rem): roadmap lamp names, route stop names and the founder title line.
- **Reading** (600 to 700, 1.0625rem): alternate causes and trace step names; the size a lead steps down from.
- **Lede** (400, clamp(1.0625rem, 1.3vw, 1.25rem), muted, 52ch max): the paragraph under a section headline. The hero lede sits in silver over the photo, 40ch max.
- **Body** (400, 1.0625rem, 1.6): prose in silver or muted, 52 to 56ch.
- **Small** (400, 0.9375rem): captions, panel titles, chips, the demo note, the step counter, footer text.
- **Button** (700, 1.125rem, 0.06em, uppercase): primary button labels and the quiet "I'm a mechanic" link. **Button Compact** (1rem) is the header CTA and the demo's Next.
- **Nav Label** (600, 0.9375rem, 0.08em, uppercase): header lamp labels and the menu toggle.
- **Label** (600, 0.875rem, 0.08em, uppercase): printed legends on readouts and placeholder tags. Nothing on the page is set smaller.

### Named Rules
**The Printed Legend Rule.** Uppercase condensed caps label a reading inside an instrument (a readout term, a lamp, the menu toggle, a placeholder tag). They never float above a section headline as a kicker.

**The Billing Rule.** Ranked readings are billed by rank: the lead is set a step larger, in ink, and lit; alternates are smaller and muted; a ruled-out reading is struck through in dim.

**The Label Floor Rule.** Label (0.875rem) is the smallest text role. No legend, caption or tag goes below it.

## Layout

One centred container (82rem max, fluid gutter clamp(1rem, 4vw, 3.5rem)) and a fluid section rhythm (clamp(4rem, 8vw, 7rem) block padding). Sections are separated by 1px rules, not background blocks; the only tinted bands are the roadmap (a slightly darker glass) and the close (a sky radial rising from the lower right). Section heads sit on one left edge, 46rem max, with clamp(2.5rem, 5vw, 4rem) below them. The page reads in one order: hero, how it works, trust, mechanics, roadmap, about, contact, FAQ, close.

**Header.** Sticky, 4.25rem tall: wordmark left, the six section lamps centred, compact Open RevX right.

**Hero.** A 5/6 split, copy left (H1, lede, actions, platforms line) and the message centre right, vertically centred, gap clamp(2rem, 5vw, 5rem). The garage photo fills the section behind both.

**How it works.** Three staged rows, each a 5/7 split of copy (lit stage lamps, H3, prose) and an instrument panel, aligned to the top, rows spaced clamp(3.5rem, 7vw, 6rem) apart.

**Trust.** One wide instrument panel split 1.4/1 by a vertical strong rule (privacy left, ratings right), with the LCD strip spanning its base.

**Mechanics.** A 7/5 split; the mechanic's-side panel is sticky at 6rem from the top.

**Roadmap.** An auto-fill grid of not-wired lamps, 13rem minimum columns, then the milestone route in five equal columns. **About.** Four founder gauges in four equal columns, each topped by a strong rule, no boxes. **Contact.** A 5/7 split: section head left, message-centre screen right, vertically centred. **Close.** Headline left, start button right.

**Breakpoints.**
- **1100px:** the header lamps give way to a menu toggle (labelled with the current section) and a 3px six-segment progress strip along the header's base.
- **1000px:** every split stacks to one column: hero (message centre capped at 40rem), stages, mechanics (panel unstuck, 28rem max), contact and close. The founder gauges go to two columns and the route turns vertical, its wire running down the left. The trust panel stacks and its divider turns horizontal.
- **640px:** the header CTA hides (the menu sheet carries Open RevX), hero actions stretch, demo field grids go to one column and readout grids to two, the Next label drops its destination, the seal sequence turns vertical, spec rows stack, the roadmap goes to two columns, founder gauges and contact lines go to one.

## Elevation & Depth

Depth is glass over a dark cabin. Panels sit forward on soft, long, fully black drop shadows with a 1px inner highlight on the top edge; nothing glows. Lit state is conveyed by filling a circle with a radial gradient (hot centre at 50% 35%, deep edge), not by an outer bloom.

### Shadow Vocabulary
- **Panel glass** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.05), 0 24px 36px -24px rgb(0 0 0 / 0.9)`): every instrument panel below the hero.
- **Message centre** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.05), 0 30px 60px -24px rgb(0 0 0 / 0.95)`): the hero instrument, the one panel lifted further forward.
- **Menu sheet** (`box-shadow: 0 24px 50px -20px rgb(0 0 0 / 0.95)`): the dropdown section menu.
- **Backlit key** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.35), 0 6px 16px -6px rgb(0 0 0 / 0.8)`): the primary button only.
- **Start button** (`box-shadow: inset 0 0 0 6px #07090b, 0 18px 36px -12px rgb(0 0 0 / 0.95)`): a recessed ring inside a sky gradient border.

### Named Rules
**The No-Bloom Rule.** Light lives inside a shape (gradient fill, coloured rim, coloured glyph). Shadows are black and fall downward; they are never coloured.

## Shapes

Anything that lights up or turns is a circle: header lamps (2rem), demo step lamps (2.25rem bulbs in 2.75rem targets), stage lamps (2.5rem), seals, rating lamps, roadmap lamps and swipe buttons (2.75rem), route stops (2.75rem), copy lamps (1.9rem), founder portraits (5rem), the 8.5rem start button. Glass is a softly rounded rectangle, nested so the radius tightens inward: the message-centre bezel (1.75rem) holds a screen (0.9rem) holds reading rows (0.4rem). Below the hero, instrument panels round at 1.5rem; the menu sheet and founding-mechanic frame at 1.25rem; padded reading rows, quotes and seals at 0.5rem; single-line rows and hypothesis chips at 0.4rem. Buttons, filled chips and the menu toggle are full pills. Placeholder tags and focus rings use a 4px corner.

Strokes are thin: 1px rules and panel outlines, 1.5px lamp rims and scale lines, 1.75px icon strokes on a 24px grid with round caps. Dashed strokes carry meaning (alternate, sealed, placeholder, not wired) and are never ornament.

## Components

### Buttons
- **Shape:** full pill (999px), 3rem minimum height; compact buttons drop to the 2.75rem target.
- **Primary:** sky fill, sky-ink label, backlit-key shadow, padding 0.7rem 1.4rem, condensed uppercase label. Hover lifts to soft sky.
- **Ghost:** transparent with a strong-rule border and ink label; hover turns the border sky. Used for the demo's Next.
- **Quiet link:** condensed uppercase ink text with a trailing arrow, no box; hover turns soft sky. The secondary hero action.
- **Press:** buttons translate down 1px on `:active`. Transitions run 0.2s on the shared ease-out.
- **Focus:** a 2px sky outline offset 3px with a 4px corner, global to every focusable element.

### Navigation: Lamp Header (signature)
The section lamps are both the navigation and the scroll progress. Each is a 2rem bulb with a section glyph and a nav-label caption, in a 2.75rem target. Sections already passed are **done** (sky-deep rim, sky glyph); the section in view is **on** (sky radial bulb, ink label, `aria-current`); the rest are **off**. At 1100px and below the lamps collapse into a pill menu toggle that names the current section, a 3px six-segment strip (unlit, turning sky as sections pass), and a menu sheet with the same lamps beside silver links and a full-width Open RevX.

### Message Centre (signature)
The hero instrument: a bezel-radius glass panel holding a seven-lamp step row, the step title with an "n of 7" counter, an LCD screen, and a footer with the demo note and Next. It rests on Diagnose (the one warning lamp, amber). Advancing is click-only: a lamp, Next, arrow keys, or a drag of the swipe card. Each screen fades in from a 3px blur over 0.4s. Inside the screen: printed legends over ink values, ranked causes, a swipe card with two round buttons (pass in muted, right in sky), chat bubbles with a 0.2rem speech tail, quote rows, sky checks, and dashed sealed reviews with amber locks.

### Stage Rows
Each How it works stage leads with its loop lamps lit (sky, or amber for Diagnose) at 2.5rem, then the stage H3 and silver prose, beside an instrument panel. The first panel is an AI trace: a strong-rule spine with sky dots, filled chips (facts the user supplied), dashed chips (hypotheses), ranked verdicts, and a stat row over a rule.

### Instrument Panels
- **Corner Style:** panel (1.5rem) below the hero; bezel (1.75rem) for the message centre.
- **Background:** vertical glass gradient from panel to near-black at 94 to 98 percent opacity.
- **Shadow Strategy:** panel glass (see Elevation).
- **Border:** 1px strong rule.
- **Internal Padding:** clamp(1.25rem, 3vw, 2rem). A small muted panel title sits on top.

### Trust Instruments (signature)
- **Snapped grid:** a 6 by 4 grid of strong-rule cells, one snapped cell tinted and outlined in sky, the exact point a red dot inside it.
- **Distance scale:** a half-mile tick scale from 0 to 5 (strong-rule minors, muted majors with condensed numerals) with a sky arrow needle at 2.5.
- **Review-release lamps:** two lit sky lamps and one dashed sealed lamp with an amber lock; the public rating waits for the third.
- **Seal sequence:** two dashed sealed lamps, an arrow, two solid sky lamps: sealed until both reviews are in, released together.

### Ranked Readings (signature)
Causes, verdicts and quotes. The lead row has a solid 1px sky border, an 8 percent sky tint and a larger size; alternates have a 1px dashed strong-rule border and muted text; a ruled-out reading is struck through in dim. A counter numeral precedes each cause, sky on the lead.

### Chips
- **Filled:** pill, chip-fill, ink text, small size. Facts the user supplied.
- **Hypothesis:** row-tight corner, dashed strong-rule border, muted text. Candidates not yet checked.

### LCD Strip
A full-width screen band at the base of a panel: lcd-screen fill, strong-rule top border, amber text with a leading glyph. Carries the AI disclaimer.

### Not-wired Lamps
Roadmap entries: a 2.75rem bezel circle with a dashed dim rim and dim glyph beside a muted item name.

### Milestone Route
The road to launch, under the not-wired lamps and never tied to them. Each stop is a 2.75rem circle in a lamp state: **done** (sky-deep rim, sky check), **now** (lit sky bulb, sky-ink pin, `aria-current="step"`), **next** (bezel fill, dashed unlit rim, no glyph). A wire joins each stop to the next: solid sky-deep after a done stop, dashed unlit ahead. Below each stop, the name in display weight (muted when next) and a printed legend (Done / Now / Next, sky on Now), so state never rests on colour alone.

### Founder Gauges
About section entries: a 5rem done-lamp portrait (sky-deep rim around the founder's photo, grayscale with a slight sky tint), then name (display, 1.625rem), title (muted display), one line of silver prose (32ch max) and text links to LinkedIn and a personal site in 2.75rem targets. No card boxes.

### Founders' Line (contact screen)
A message-centre screen (lcd-screen fill, rule border, 0.9rem corner) inside instrument glass. One row per founder: a printed legend (name and title), the email in sky display type as a mailto link, and a ghost pill copy button with a 1.9rem lamp. The lamp is unlit at rest and lights sky only on a successful click; the label changes to Copied and a polite live region announces it. Nothing in the panel moves on its own.

### Placeholder Tag
Dashed amber 1px border, 4px corner, amber label caps. Marks content that must be replaced before launch.

### Start Button
The closing action: an 8.5rem circle with a sky-soft to sky-deep gradient ring, a dark radial face, "OPEN" in 800-weight ink caps and "REVX" in sky at 0.24em tracking. Scales to 1.03 on hover and 0.98 on press.

## Do's and Don'ts

### Do:
- **Do** express every status through the lamp states: off, done (sky rim), on (sky bulb), warning (amber bulb), not wired (dashed, dim).
- **Do** draw the chosen or confirmed item solid and lit, and its alternates dashed and dim.
- **Do** bill ranked items by rank: the lead larger and in ink, alternates smaller and muted.
- **Do** put lit text in that light's ink (sky-ink #04131c on sky, amber-ink #1d1203 on amber).
- **Do** use Barlow Condensed caps for anything printed on an instrument and keep tabular numerals on for every readout and price.
- **Do** nest radii inward (1.75rem bezel, 0.9rem screen, 0.4rem row) and make anything that lights a circle.
- **Do** keep every interactive target at least 2.75rem and every text role at least 0.875rem.
- **Do** keep motion on the one ease-out (cubic-bezier(0.16, 1, 0.3, 1)) and drive every state change from scroll or a click.

### Don't:
- **Don't** use amber or red for anything but caution and private or stop.
- **Don't** add coloured glows or outer blooms; light fills shapes and shadows stay black.
- **Don't** use a dashed stroke as decoration; dashed always means alternate, sealed, placeholder or not built.
- **Don't** place uppercase legends above section headlines as kickers; legends label instrument readings only.
- **Don't** show photography at full strength behind content; it is a dim masked backdrop or an image framed inside a screen.
- **Don't** put white text on a lit sky or amber surface.
- **Don't** auto-advance or autoplay anything; the visitor drives the demo.
