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
  navigating. This is the same discipline that places the gold in each icon (§ gold rule), and it
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
Twelve values and nothing else — see `VOLLER.md` §1 for the table and §1.1 for the sanctioned
contrast pairings. Green `#82BA51`, green-deep `#69A63C`, green-dark `#3F6B27`, gold `#F0C21C`,
cream `#F6F1E3`, cream-dark `#EFE9DA`, ink `#1B1B19`, ink-raised `#24231F`, muted `#6E6E6B`,
muted-dark `#8A8A8A`, alert `#C4382C`, alert-light `#E8705F`.
**Do not add a thirteenth.** If something needs distinguishing, move lightness inside the green ramp.
Green is never a gradient — flat fills only.

**Two corrections to the source documents, both AA failures.** `--muted` is `#6E6E6B` on light —
the old `#8A8A8A` is 3.4:1 there and is now `--muted-dark`, for dark only. And a green fill carries
an **ink** label, never a light one: `green` + cream is 2.3:1. One button, no variants, both fields.

`alert` / `alert-light` exist for safety and destruction only — not a highlight, not decoration.
There is still no amber or blue, and no conventional semantic colour set beyond that one pair.

**The gold rule** is the strongest rule in the system: gold appears **exactly once per view**, on the
thing the user came to do. In a header, that one gold is the wordmark's tile — so a header carrying a
gold button is wrong. Gold is not a warning, a highlight or decoration. Where two golds meet, one
becomes green-dark. Green-dark is the only ink allowed on top of gold.

### Backgrounds
Two gradients exist and no third may be invented: `--field-light`
(`160deg, #FCFCF6 → #F1F0E4`) for pages and hero bands, `--field-dark` (`160deg, #302F2C → #1B1B19`)
for previews and UI. Flat `#FCFCF6` is the everyday page. Dark sections are flat `#1B1B19` with
cream-dark text. No photographic backgrounds, no repeating patterns, no textures, no noise, no
hand-drawn illustration. The one lighting effect in the system is the tile-level gloss overlay
(`--gloss`), and it belongs to the *tile* — never to a drawn subject and never to a web surface.

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
is fixed-position except the sticky header (68px, translucent `rgba(252,252,246,.86)` with a 12px
backdrop blur and a hairline bottom edge).

### Corners
20px cards, 16px panels, 10px controls, 6px checkboxes, `999px` capsules, and **23.5%** for app tiles
only — the iOS squircle approximation. App icons are never shown circular.

### Borders, shadows and separation
**There are no drop shadows in this system.** Hierarchy comes from a 1px hairline
(`rgba(20,40,10,.10)`, `.18` for inputs, `rgba(246,241,227,.14)` on dark) or a background step
between sections. The only `box-shadow` uses are `inset` — outline buttons and the glass ring.

### Transparency and blur
Rationed to two places: the sticky header's translucent blur, and the **glass ring** — a circle at
`r + 7%` filled `rgba(255,255,255,.62)` with a `rgba(255,255,255,.9)` 1–2px stroke (`.10` / `.22` on
dark). Every circular image, avatar or round crop on the web wears it; it is the single token that
makes a page feel like it belongs to the icon family. No frosted cards, no glassmorphism panels.

### Imagery
The only imagery in the system is **the app icons themselves** — flat vector, opaque, warm-neutral,
never photographic, never grained, never in a device mockup with a shadow. Circular crops get the
glass ring; square art keeps 23.5%. When real product screenshots are needed, crop them into the ring
or place them flat on a field gradient. Do not draw new illustration to fill space.

### Animation
Restrained and short: `--dur-fast` 120ms for colour, `--dur-base` 180ms for movement and toggles,
easing `cubic-bezier(.2,.6,.2,1)`. Transitions are colour, border-colour and small transforms only.
No bounces, no springs, no parallax, no scroll-triggered reveals, no looping ambient motion.

### States
- **Hover** — primary buttons darken green → green-dark; quiet buttons pick up a 6% wash of their own
  ink; text buttons lighten green-dark → green; interactive cards swap their hairline to green; links
  go green-dark → green.
- **Press** — colour only. Nothing scales, nothing lifts.
- **Focus** — a 2px `rgba(105,166,60,.45)` ring at 2px offset; inputs additionally take a green border.
  Never a glow.
- **Disabled** — 40% opacity plus `not-allowed`. No greyed-out repaint.
- **Selected nav** — a 7% green-dark wash behind the item, green-dark label. No underline, no bar.

### Wordmark
`Voller` in the system sans, 600, at `-0.02em`, followed by one gold app tile as a full stop — the hint at what
the studio does. Tile = 0.33 × cap height, gap = 0.2 × cap height, tile radius 23.5%, baseline-aligned.
22px header / 32px mid / 64px hero. **The circular icon is not part of the wordmark** and must not sit
beside it in a header; the footer is the one permitted lockup, at ~34px icon / 18px word.

## ICONOGRAPHY

**The brand's own sources contain no UI icon set** — no icon font, no sprite sheet, no SVG library.
`Brand-Icons/` holds only the five app icons (three appearance variants each) and the Voller marks.
Those real assets are in `assets/` and `assets/app-icons/` and are the only brand-owned imagery.

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
  broken by hand.

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
