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
    fontSize: "clamp(2.6rem, 4.4vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.4vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "0"
  readout:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2vw, 1.75rem)"
    fontWeight: 700
    fontFeature: "tnum"
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
  button:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    letterSpacing: "0.06em"
  label:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.14em"
rounded:
  tag: "4px"
  row: "0.4rem"
  screen: "0.9rem"
  panel: "1.25rem"
  bezel: "1.75rem"
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "clamp(1rem, 4vw, 3.5rem)"
  section: "clamp(4rem, 8vw, 7rem)"
  container: "82rem"
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
  button-ghost:
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.4rem"
    height: "3rem"
  start-button:
    backgroundColor: "{colors.bezel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "8.5rem"
  lamp-unlit:
    backgroundColor: "{colors.bezel}"
    textColor: "{colors.unlit}"
    rounded: "{rounded.circle}"
    size: "2.75rem"
  lamp-lit:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.sky-ink}"
    rounded: "{rounded.circle}"
    size: "2.75rem"
  lamp-warning:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.amber-ink}"
    rounded: "{rounded.circle}"
    size: "2.75rem"
  instrument-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.silver}"
    rounded: "{rounded.bezel}"
    padding: "clamp(1.25rem, 3vw, 2.25rem)"
  message-screen:
    backgroundColor: "{colors.lcd-screen}"
    textColor: "{colors.ink}"
    rounded: "{rounded.screen}"
    padding: "1rem 1.1rem"
  chip:
    backgroundColor: "{colors.chip-fill}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.65rem"
  placeholder-tag:
    textColor: "{colors.amber}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "0.15rem 0.55rem"
---

# Design System: RevX

## Overview

**Creative North Star: "The Night-Lit Instrument Cluster"**

Every RevX surface is a dashboard seen from the driver's seat at night: smoked black glass, thin bezel rules, dial arcs with tick scales, and LCD message-centre screens, lit by one sky-blue backlight. Content is presented as readouts, not marketing blocks. A step in a process is a tell-tale lamp; a ranked list is a set of readings where the lead is lit and the alternates sit dashed and dim; something not built yet is a lamp with no wire behind it.

The system runs on a four-state vocabulary that every component speaks: **unlit** (bezel fill, dark glyph), **lit** (sky gradient bulb or solid sky rule), **warning** (amber), and **dimmed-not-wired** (dashed outline, dim glyph). Solid means chosen, confirmed, or live. Dashed means alternate, sealed, pending, placeholder, or not built. Density is that of a cluster: compact readouts inside generous dark margins, with condensed uppercase legends doing the labelling.

Photography is allowed only as a dim backdrop behind the glass (the hero garage at 0.42 opacity, masked to transparent) or as a framed image inside an instrument screen. Depth comes from soft, long, black drop shadows under glass panels, never from glow.

**Key Characteristics:**
- Smoked black ground with a cool blue-grey neutral ramp; one sky backlight carries every lit state and the primary action.
- Barlow Condensed for everything that is printed on the dash (headings, legends, numerals, buttons); Barlow for prose; tabular numerals everywhere.
- Four light states (unlit, lit, warning, not-wired) and a solid/dashed distinction reused across lamps, lists, quotes, seals, avatars and roadmap.
- Circles for anything that lights up (lamps, dials, start button, swipe buttons); rounded rectangles for glass and screens; pills for buttons and chips.
- Motion is mechanical: needles sweep, bulbs light, panels fade in from a slight blur, all on one long ease-out.

## Colors

A smoked-glass dark palette with one cool backlight and two signal colours held in reserve.

### Primary
- **Sky Backlight** (sky): the only lit colour. Needles, lit lamp bulbs, the lead cause or quote border, the primary button, the start button's ring, the "X" of the wordmark, link focus rings and text selection.
- **Deep Sky** (sky-deep): the backlight's shadow. Hover borders on dials, the outer stop of lit bulb gradients, borders on "done" lamps and the founding-mechanic offer frame.
- **Soft Sky** (sky-soft): the hot centre of a lit bulb, primary-button hover, body links, mechanic specialty tags.
- **Sky Ink** (sky-ink): text and glyphs sitting on a lit sky surface. Never use white on sky.

### Secondary
- **Amber Tell-tale** (amber): caution that something needs attention or is not yet resolved. The Diagnose lamp, severity "High", the active urgency segment, the AI-read line and the AI disclaimer LCD strip, sealed-review locks, placeholder tags, and the ignition bulb check.
- **Amber Glow / Amber Deep** (amber-glow, amber-deep): the hot centre and outer stop of a lit amber bulb, and its border.
- **Amber Ink** (amber-ink): text and glyphs on lit amber.

### Tertiary
- **Stop Red** (red): reserved for the hard stop. It marks "Stop driving" on the urgency scale and the private exact-location point that never leaves the server. Nothing else.

### Neutral
- **Smoked Glass** (glass): page ground, the browser theme colour, the inner ring of the start button.
- **Bezel** (bezel): unlit bulb fill, round-button fill, needle hub.
- **Panel** (panel): the top stop of instrument-panel glass gradients.
- **LCD Screen** (lcd-screen): the near-black screen inset inside a panel (message centre, mechanic display, disclaimer strip).
- **Chip Fill** (chip-fill): filled intake chips and the incoming chat bubble.
- **Rule** (rule): section dividers, list row rules, screen borders.
- **Strong Rule** (rule-strong): bezel outlines, dial arcs, ghost-button borders, dashed alternates.
- **Unlit** (unlit): unlit tick marks, unlit lamp borders and glyphs, dashed outlines of not-wired lamps.
- **Ink** (ink): headings and lit readout values.
- **Silver** (silver): body text and the "Rev" of the wordmark.
- **Muted** (muted): ledes, secondary prose, nav links, alternate readings.
- **Dim** (dim): legends, dial numerals, captions, ruled-out readings.

### Named Rules
**The One Backlight Rule.** Sky is the only colour that means "lit". If something is on, chosen, or the primary action, it is sky; nothing else competes for that job.

**The Signal Reserve Rule.** Amber means caution or unresolved; red means stop. Neither is ever decoration, a brand accent, or a hover colour.

**The Ink-On-Light Rule.** Text on a lit surface uses that light's ink (sky-ink, amber-ink), not white.

## Typography

**Display Font:** Barlow Condensed (with Barlow, system-ui)
**Body Font:** Barlow (with system-ui)

**Character:** A California-plate, DIN-lineage pairing: the condensed cut is what is printed on the dash, the regular cut is what you read in the manual. Tabular numerals are on globally so readouts and prices align like gauges.

### Hierarchy
- **Display** (800, clamp(2.6rem, 4.4vw, 4.25rem), 0.95): the single H1, inside the message centre.
- **Headline** (800, clamp(2.25rem, 4.4vw, 4rem), 1.02): section H2s. The closing H2 scales up to clamp(2.5rem, 6vw, 5.5rem).
- **Title** (700, 1.375rem): H3s, spec-sheet terms (1.25rem), job and lead-cause titles.
- **Readout** (700 to 800, clamp(1.375rem, 2vw, 1.75rem)): numerals and values on a readout (severity, cost range, distance band, trip values).
- **Lede** (400, clamp(1.0625rem, 1.3vw, 1.25rem), muted, 52ch max): the paragraph under a headline.
- **Body** (400, 1.0625rem, 1.6): prose in silver or muted, 52 to 70ch.
- **Button** (700, 1.125rem, 0.06em, uppercase): every button label.
- **Label** (600, 0.8125rem, 0.14em, uppercase, dim): legends printed on instruments: lamp names, dial CTAs, readout terms, stage names.

### Named Rules
**The Printed Legend Rule.** Uppercase condensed caps label a reading inside an instrument (a lamp, a dial, a readout term, a screen header). They never float above a section headline as a kicker.

**The Billing Rule.** Ranked readings are billed by rank: the lead reading is set larger, in ink, and lit; alternates are smaller and muted; where the order among alternates is known, size steps down again (1.375rem, 1rem, 0.9375rem in the hero cause list).

## Layout

One centred container (82rem max, fluid gutter clamp(1rem, 4vw, 3.5rem)) and a fluid section rhythm (clamp(4rem, 8vw, 7rem) block padding). Sections are separated by 1px rules, not by background blocks; the only tinted band is the roadmap (a slightly darker glass) and the close (a sky radial rising from below).

The first viewport is a three-column cluster (1fr / 1.55fr / 1fr): owner dial, message centre, mechanic dial, with the lamp row centred above and the round start button overlapping the bottom bezel. Below the fold, two-column splits pair a copy column with an instrument (5/7, 5/6, 4/7), with the copy column sticky where the instrument column is a long list.

Responsive behaviour: at 1100px the message centre takes the full width and the dials pair beneath it, and the nav links collapse leaving wordmark and Open RevX. At 1000px every two-column split stacks. At 640px lamps spread edge to edge at 2.25rem, dial CTAs hide, the message centre gains its own two buttons, and readout grids drop to two columns.

## Elevation & Depth

Depth is glass over a dark cabin. Panels sit forward on soft, long, fully black drop shadows with a 1px inner highlight on the top edge; nothing glows. Lit state is conveyed by filling a shape with a radial gradient (hot centre, deep edge), not by an outer bloom.

### Shadow Vocabulary
- **Panel glass** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.05), 0 40px 80px -30px rgb(0 0 0 / 0.95)`): every below-the-fold instrument panel. The message centre uses `0 30px 60px -24px`.
- **Dial bezel** (`box-shadow: inset 0 0 0 10px rgb(7 9 11 / 0.7), 0 24px 50px -20px rgb(0 0 0 / 0.9)`): the round gauges.
- **Start button** (`box-shadow: inset 0 0 0 6px #07090b, 0 18px 36px -12px rgb(0 0 0 / 0.95)`): a recessed ring inside a sky gradient border.
- **Backlit key** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.35), 0 6px 16px -6px rgb(0 0 0 / 0.8)`): the primary button only.

### Named Rules
**The No-Bloom Rule.** Light lives inside a shape (gradient fill, coloured border, coloured glyph). Shadows are black and fall downward; they are never coloured.

## Shapes

Anything that lights up or turns is a circle: lamps (2.75rem, 3.25rem in the manual, 3.5rem on the roadmap), dials, the 8.5rem start button, swipe buttons, avatars. Glass is a softly rounded rectangle, nested so the radius tightens as you go inward: bezel (1.75rem) holds a screen (0.9 to 1.1rem) holds rows (0.4 to 0.5rem). Buttons and intake chips are full pills. Placeholder tags and focus rings use a 4px corner.

Strokes are thin: 1px rules and bezels, 1.5px lamp rims, 1.75px icon strokes on a 24px grid with round caps and joins. Dashed strokes carry meaning (alternate, sealed, placeholder, not wired) and are never used as ornament.

## Components

### Buttons
- **Shape:** full pill (999px), 3rem minimum height (2.6rem in the nav and on in-panel toggles).
- **Primary:** sky fill, sky-ink label, backlit-key shadow, padding 0.7rem 1.4rem, condensed uppercase label. Hover lifts to soft sky.
- **Ghost:** transparent with a strong-rule border and ink label; hover turns the border sky.
- **Press:** both translate down 1px on `:active`. Transitions run 0.2s on the shared ease-out.
- **Focus:** a 2px sky outline offset 3px, global to every focusable element.

### Start Button (signature)
The page's ignition. An 8.5rem circle with a sky-soft to sky-deep gradient ring, a dark radial face, "OPEN" in 800-weight ink at 2rem and "REVX" in sky at 0.24em tracking. Scales to 1.03 on hover and 0.98 on press. Used twice: bottom-centre of the cluster and in the close.

### Tell-tale Lamps (signature)
A circular bulb over a condensed label. States: **off** (bezel fill, unlit rim and glyph, dim label), **done** (sky-deep rim, sky glyph), **on** (sky radial gradient, sky-ink glyph, sky label), **warning on** (amber radial gradient, amber-ink glyph). The hero lamp row is a tablist driving the message centre. The same bulb appears lit in the manual legend, sky-rimmed in the "also on the dash" row, and dashed and dim on the roadmap.

### Dials (signature)
Square gauges with a 270 degree arc, 25 minor ticks, seven numbered majors and a sky needle with a bezel hub. The needle follows the active step (rotate 135deg + step x 45deg) over 0.9s. Each dial is a link; the title sits low in 800-weight caps with a sky CTA beneath it.

### Instrument Panels / Cards
- **Corner Style:** bezel (1.75rem) for primary panels, 1.25 to 1.5rem for secondary ones.
- **Background:** vertical glass gradient from panel to near-black at 94 to 98 percent opacity.
- **Shadow Strategy:** panel glass (see Elevation).
- **Border:** 1px strong rule.
- **Internal Padding:** clamp(1.25rem, 3vw, 2.25rem). Interior screens are lcd-screen with a 1px rule border.

### Ranked Readings (signature)
Causes, verdicts and quotes. The lead row has a solid 1px sky border and an 8 percent sky tint; alternates have a 1px dashed strong-rule border and muted text; a ruled-out reading is struck through in dim. A counter numeral sits before each cause, sky on the lead.

### Chips
- **Style:** pill, chip-fill background, ink text, 0.9375rem. Filled chips are facts the user supplied; dashed row-radius chips are hypotheses.

### LCD Strip
A full-width screen band at the base of a panel: lcd-screen fill, strong-rule top border, condensed uppercase amber text with a leading glyph. Carries the AI disclaimer.

### Navigation
Wordmark left, condensed uppercase links (600, 1rem, 0.1em, muted, ink on hover) centred, a compact primary button right. Below 1100px the links collapse and the cluster's dials and lamps carry navigation.

### Placeholder Tag
Dashed amber 1px border, 4px corner, amber condensed caps at 0.75rem. Marks content that must be replaced before launch.

## Do's and Don'ts

### Do:
- **Do** express every status through the four light states: unlit, lit (sky), warning (amber), not-wired (dashed, dim).
- **Do** draw the chosen or confirmed item solid and lit, and its alternates dashed and dim.
- **Do** bill ranked items by rank: the lead larger and in ink, alternates smaller and muted.
- **Do** put lit text in that light's ink (sky-ink #04131c on sky, amber-ink #1d1203 on amber).
- **Do** use Barlow Condensed caps for anything printed on an instrument and keep tabular numerals on for every readout and price.
- **Do** nest radii inward (1.75rem bezel, 0.9rem screen, 0.4rem row) and make anything that lights a circle.
- **Do** keep motion on the one ease-out (cubic-bezier(0.16, 1, 0.3, 1)) and hold every auto-advance under reduced motion.

### Don't:
- **Don't** use amber or red for anything but caution and stop.
- **Don't** add coloured glows or outer blooms; light fills shapes and shadows stay black.
- **Don't** use a dashed stroke as decoration; dashed always means alternate, sealed, placeholder or not built.
- **Don't** place uppercase legends above section headlines as kickers; legends label instrument readings only.
- **Don't** show photography at full strength behind content; it is a dim masked backdrop or an image framed inside a screen.
- **Don't** put white text on a lit sky or amber surface.
