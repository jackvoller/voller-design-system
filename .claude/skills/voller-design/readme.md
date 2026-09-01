# Voller Design System

Voller is a two-person studio in Bristol that ships four iOS apps: **UnPickle**, **Meal Planner**,
**UnJumble** and **Riverly**. This system is the house brand — the one that has to look like the
*parent* of those four icons without becoming a fifth app.

**Authority.** `VOLLER.md` at the root of the `voller-design-system` repo is the spec. It supersedes
both source documents below, and where this package and `VOLLER.md` disagree, `VOLLER.md` wins — read
it before designing anything. The tokens in `tokens/` have been reconciled to it.

This package is derived from two documents written for the icon work, both kept here as history:

| Source | What it is |
|---|---|
| `uploads/Brand-Icons/BRAND.md` | The original design language: colour, the 1024 grid, the four primitives, the gold rule, appearance variants |
| `brand/VOLLER-THEME.md` | The web-side companion written during the Voller logo redesign: tokens, type scale, wordmark geometry, favicon ladder |
| `uploads/Brand-Icons/<App>/source-*.svg` | Vector masters for the four sibling icons. There is no `.fig`/`.ai` original — the SVG **is** the source |
| `brand/Voller/` | The Voller app-icon set produced in this project (light / dark / tinted + `Contents.json`) |

There is **no codebase and no Figma file** behind this system. Everything here was authored from those
written specs and the shipped vector art. Component inventory is therefore a standard primitive set
sized to a marketing site, not a recreation of an existing library — see *Intentional additions*.

---

## CONTENT FUNDAMENTALS

The voice is a maker describing what a thing does, then stopping.

- **Second person, sparingly.** "Get out of it." "Plan the week." The reader is addressed by the verb,
  not by "you" in every sentence. First person plural for the studio: "We build for the platform."
- **Declarative and short.** Sentence, full stop. Two clauses maximum. If a sentence needs a semicolon
  it usually needs to be two sentences.
- **Sentence case everywhere.** Headings, buttons, labels, nav. Title Case appears only in product
  names (`Meal Planner`) and proper nouns. ALL CAPS only in eyebrows/spec labels, where it is a
  typographic device rather than emphasis.
- **Name the verb.** Every app is described by its action first — unwrapping, ticking off, recording,
  navigating. This is the same discipline that places the rationed element in each icon (§ the
  ration rule), and it
  applies to copy: if you cannot name the verb, the page isn't written yet.
- **Say what it does not do.** A signature move. "No accounts, no recipe feed, no video of someone
  making it." "No roadmap deck and no growth team." Absence is a feature; state it plainly, never
  smugly, and never as a jab at a named competitor.
- **Concrete over aspirational.** "Seven dinners, one list." not "Reimagine your week." No
  *empower*, *seamless*, *delight*, *journey*, *unlock*, *supercharge*, *revolutionary*.
- **Numbers are specific and small.** "Four small apps." "Four times a year." "Usually within a day."
  No invented percentages, no download counts, no five-star quotes.
- **No exclamation marks. No emoji. No rhetorical questions as headings.**
- **British English** — *colour*, *organise*, *£*, `14 August 2026` date order.
- **Buttons name the action and its object**: "See the apps", "Get Riverly — £9.99", "Send". Never
  "Learn more", "Click here", "Get started".
- **Eyebrows are locations, not teasers**: "The family", "Bristol · since 2019", "Specification".

## VISUAL FOUNDATIONS

### Colour
Colour splits in two — see `VOLLER.md` §1 for the split, §1.2 for the app accent, §1.1 and §1.2.1
for the sanctioned contrast pairings.

**The house palette — twelve values, fixed.** Yellow `#FFC400`, yellow-deep `#E0A200`, yellow-dark
`#8A5A00`, yellow-wash `#FFF3CE`, cream `#F6F1E3`, cream-dark `#EFE9DA`, ink `#1B1B19`, ink-raised
`#24231F`, muted `#6E6E6B`, muted-dark `#A09892`, alert `#C4382C`, alert-light `#E8705F`.
It draws the Voller mark, the wordmark, voller.uk and the App Store, plus every neutral, surface,
hairline and alert inside a product. **Do not add a thirteenth.**
Yellow is never a gradient — flat fills only.

**The house went yellow on 1 Sep 2026.** Green `#82BA51`, green-deep `#69A63C`, green-dark `#3F6B27`
and gold `#FECA00` are retired from the house. Green is not gone from the family — it is now Meal
Planner's and UnPickle's published `accent`. The house no longer owns a green.

**The app accent — six values, published per app.** Inside a product, action and state come from
the app's own `accent`, `accent-deep`, `accent-wash`, `field`, `field-dark` and `accent-dark`, not
from the house colour. **The same six also draw that app's icon** (§4.1). UnJumble is coral
`#FF5A3C`; Meal Planner and UnPickle share green `#2BBF4E`;
Riverly proposes blue `#0B5FD0`. Full values in `tokens/colors.css` and §1.2. An app may not add a
seventh colour to its chrome — if it needs a distinction, it moves inside its own accent ramp.

**Three corrections to the source documents, all AA failures.** `--muted` is `#6E6E6B` on light —
the old `#8A8A8A` is 3.4:1 there. `--muted-dark` is `#A09892`, dark only — `#8A8A8A` was 3.9:1 at
the top of the dark field and is now retired outright. And a fill carries its published label,
never the other one: `yellow` + cream is 1.4:1, coral + cream 2.7:1. One button, no variants,
both fields.

`alert` / `alert-light` exist for safety and destruction only — not a highlight, not decoration,
and never replaced by an app's accent. There is no amber, and no conventional semantic colour set
beyond that one pair.

**Yellow is a light colour, and that is the whole palette in one line.** It is a *fill* in both
fields, always with an `ink` label — cream on yellow is 1.4:1 and banned. It is a *tint* only on
dark; on light it steps all the way down to `yellow-dark` `#8A5A00`, which looks like bronze. That
is correct, not a mistake — yellow is the most gamut-limited hue in sRGB, so the ramp is found by
dropping lightness, and no tint that still looks yellow on a light field exists. Do not try to
lighten `yellow-dark` toward yellow; it fails AA at every step in between.

**A yellow fill on the yellow field has a 1.4:1 edge.** The house field is the brand hue at ~6%
strength, so a yellow button on a yellow page must be defined by its ink content or a hairline,
never by the fill alone. On cream, white or ink it defines itself.

**The ration rule** governs the house and the icons: the rationed element appears **exactly once per
view**, on the thing the user came to do. On voller.uk and in the mark that element is `yellow` — in
a header it is the wordmark's tile, so a header carrying a yellow button is wrong. Neither the field
nor `yellow-wash` spends the ration. **Inside an app icon the ration is spent in that app's own
accent, not in yellow.** Where two rationed elements meet, one steps down a rung.
**Yellow does not appear in product UI at all.**

**The accent rule** is the same idea inside an app: **one accent per role per view** — one primary
action, one active tab, one "current" marker. Everything else is **neutral by default**: counts,
tags, dates, durations, avatars, photo slots and speaker names are ink, muted or white. Colour marks
the action, the current thing, and the danger. `accent` is a fill only — as text or a glyph it steps
down to `accent-deep` on light, `accent-dark` on dark.

### Backgrounds
Two house gradients exist, plus each app's own pair (§1.2), and no others may be invented:
`--field-light`
(`160deg, #FFFDF5 → #FFF1CE`) for pages and hero bands, `--field-dark` (`160deg, #302F2C → #1B1B19`)
for previews and UI. Flat `#FFFDF5` is the everyday page. The light field is pale yellow — the brand
hue at about 6% strength, which is how a yellow brand stays yellow without shouting. Dark sections are flat `#1B1B19` with
cream-dark text. No photographic backgrounds, no repeating patterns, no textures, no noise, no
hand-drawn illustration. The one lighting effect in the system is the tile-level gloss overlay
(`--gloss`), and it belongs to the *tile* — never to a drawn subject and never to a web surface. It
sits above the field, and *under* the subject where the subject is ink: a gloss laid over an ink
cut-out greys it out.

### Type
**The platform system sans only** — SF Pro / Segoe UI / Roboto, a documented substitution ladder.
No webfont; no `<link>` to fonts.googleapis.com anywhere in the family. (DM Sans was dropped when the
two source specs were reconciled.) Weights 400 / 500 / 600 — 700+ is unused. Never pair a second
family. Scale 44 / 34 / 22 / 16 / 14 / 12. On iOS this becomes a Dynamic Type mapping, never
`.system(size:)` — see `VOLLER.md` §2. Headings 600 at `-0.02em`; body 400 at `line-height: 1.6`; controls 500 at
`-0.01em`. Prose measure 640–720px with `text-wrap: pretty`. A monospace (`--font-mono`) is permitted
**only** for eyebrows, spec labels and code: 11–12px, uppercase, `.1em` tracking, `--muted`.

### Spacing and layout
8px base; `--space-1…8` = 4 / 8 / 12 / 16 / 24 / 32 / 56 / 72. Section rhythm uses four steps:
24 within a group, 32 between groups, 56 between blocks, 72 between sections. Container 1120px, 32px
gutters. **Always flex/grid with `gap`** for any group of siblings — never margin-per-child. Nothing
is fixed-position except the sticky header (68px, translucent `rgba(255,253,245,.86)` with a 12px
backdrop blur and a hairline bottom edge).

### Corners
20px cards, 16px panels, 10px controls, 6px checkboxes, `999px` capsules, and **23.5%** for app tiles
only — the iOS squircle approximation. App icons are never shown circular.

### Borders, shadows and separation
**There are no drop shadows in this system.** Hierarchy comes from a 1px hairline
(`rgba(60,40,0,.12)`, `.20` for inputs, `rgba(246,241,227,.12)` on dark) or a background step
between sections. The hairline is warm-cast: the old `rgba(20,40,10,.10)` was mixed to vanish into a
green-cast field and reads grey-green on this one. The only `box-shadow` uses are `inset` — outline
buttons, the yellow fill's edge, and the glass ring.

### Transparency and blur
Rationed to two places: the sticky header's translucent blur, and the **glass ring** — a circle at
`r + 7%` filled `rgba(255,255,255,.62)` with a `rgba(255,255,255,.9)` 1–2px stroke (`.10` / `.22` on
dark). Every circular image, avatar or round crop on the web wears it. **No icon uses it any
more** — the five marks are containerless glyphs (§3, §4.1) — so it now ties the web to the system's
geometry rather than to a shared icon container. No frosted cards, no glassmorphism panels.

### Imagery
The only imagery in the system is **the app icons themselves** — flat vector, opaque, warm-neutral,
never photographic, never grained, never in a device mockup with a shadow. Circular crops get the
glass ring; square art keeps 23.5%. The icons themselves no longer wear the ring — they are
containerless glyphs, each on a pale field of its own accent hue. When real product screenshots are needed, crop them into the ring
or place them flat on a field gradient. Do not draw new illustration to fill space.

### Animation
Restrained and short: `--dur-fast` 120ms for colour, `--dur-base` 180ms for movement and toggles,
easing `cubic-bezier(.2,.6,.2,1)`. Transitions are colour, border-colour and small transforms only.
No bounces, no springs, no parallax, no scroll-triggered reveals, no looping ambient motion.

### States
House surfaces. Inside an app the same states run on that app's six — see `VOLLER.md` §9.

- **Hover** — primary buttons darken yellow → yellow-deep, keeping their ink label; quiet buttons pick
  up a 6% wash of their own ink; text buttons go yellow-dark → ink (**not** → yellow: yellow is
  1.4:1 on the light field); interactive cards swap their hairline to yellow-dark; links go
  yellow-dark → ink. On the dark field the tint is already yellow, so links hover to cream-dark.
- **Press** — colour only. Nothing scales, nothing lifts.
- **Focus** — a 2px `rgba(138,90,0,.45)` ring at 2px offset; inputs additionally take a yellow-dark
  border. Never a glow.
- **Disabled** — 40% opacity plus `not-allowed`. No greyed-out repaint.
- **Selected nav** — `yellow-wash` behind the item, yellow-dark label. No underline, no bar.

### Wordmark
`Voller` in the system sans, 600, at `-0.02em`, followed by one **yellow** app tile as a full stop —
the hint at what the studio does. Tile = 0.33 × cap height, gap = 0.2 × cap height, tile radius
23.5%, baseline-aligned. The 0.2 gap is set for the system stack; anything spaced for DM Sans is an
old file. 22px header / 32px mid / 64px hero. **The mark is not part of the wordmark** and must not
sit beside it in a header; the footer is the one permitted lockup, at ~34px mark / 18px word, plus a
social card (§4's set clause).

**The mark itself is now a glyph, not a disc** — one ink V on the pale yellow field with the yellow
tile as the full stop, matching the four app icons. No container, no glass ring. Below 32px the
favicon inverts to full-bleed yellow with an ink channel and no tile.

## ICONOGRAPHY

**The brand's own sources contain no UI icon set** — no icon font, no sprite sheet, no SVG library.
`Brand-Icons/` holds only the five app icons (three appearance variants each) and the Voller marks.
The copies in `assets/` and `assets/app-icons/` are the **old green-and-gold family** and have not
been re-exported. The current sets live at the repo root: `app-icons/<App>/` for the four apps and
`Design system color flexibility/brand-yellow/` for the Voller house ladder.

For interface glyphs the system adopts **Lucide** — closest match to the brand's flat, round-cap,
even-weight drawing style. **This is a substitution, not something found in the sources.** Rules:

- `stroke-width: 1.75`, `stroke-linecap: round`, `stroke-linejoin: round`, `fill: none`, `currentColor`.
- 18px inside buttons and rows, 20px in nav and headers, 24px max. Never larger — a big glyph competes
  with the app icons, and the system allows one focal point.
- Available from CDN (`unpkg.com/lucide-static`) or copy the paths you need, as
  `ui_kits/website/Icon.jsx` does.
- **No emoji, ever.** No unicode characters used as icons (no ✓, →, ★ in text). No filled/duotone icon
  styles. No icon inside a coloured circular chip.
- App icons are not icons in this sense — they are artwork. Use `AppTile`, keep 23.5%, no recolouring.

If Voller later draws its own glyph set, replace Lucide and delete this section's caveat.

---

## Intentional additions

No source defined a component inventory, so the primitives here are a standard set scoped to the
studio's needs (a marketing site and simple forms). Two are brand-specific rather than generic:

- **Wordmark** — encodes the tile/gap/radius geometry so it cannot drift.
- **AppTile / GlassAvatar** — encode the 23.5% radius and the glass ring, the two rules most often
  broken by hand. `GlassAvatar` is now a **web-imagery** component only: no icon wears the ring.

Deliberately **not** built, because nothing in the sources needs them: Dialog, Toast, Tooltip, Tabs,
Table, Pagination, Breadcrumb. Add them when a real surface calls for one.

---

## Index

| Path | What |
|---|---|
| `styles.css` | The single entry point consumers link. `@import`s only |
| `tokens/` | `fonts.css` · `colors.css` · `typography.css` · `layout.css` · `base.css` |
| `assets/` | Voller wordmark + icon SVGs, favicon ladder, apple-touch, `ds-resolve.js` |
| `assets/app-icons/` | All five apps × light / dark / tinted, plus Voller vector sources |
| `components/core/` | Button, IconButton, Card, Badge, Eyebrow |
| `components/forms/` | Input, Select, Checkbox, Switch |
| `components/brand/` | Wordmark, AppTile, GlassAvatar |
| `guidelines/` | 19 specimen cards — Colors, Type, Spacing, Brand |
| `ui_kits/website/` | The Voller marketing site, four click-through views |
| `brand/VOLLER-THEME.md` | Original web spec, incl. head markup and export ladder |
| `brand/README.md` | Drop-in instructions for Xcode and the website repo |
| `SKILL.md` | Agent-Skills front matter for use in Claude Code |

Every component ships `<Name>.jsx`, `<Name>.d.ts` (props contract) and `<Name>.prompt.md` (when to use
it). Read the `.prompt.md` before using a component — several carry rules that are easy to break.
