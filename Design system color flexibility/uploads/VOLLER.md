# Voller — design language

The house system for **UnPickle (studio)**, **Meal Planner**, **UnJumble**, **Riverly** and
**voller.uk**. App icons, product UI, and web.

This file supersedes and replaces both `BRAND.md` (in this repo) and
`voller_website/brand/VOLLER-THEME.md`. Point every repo at this one file. It is written to be
followed without seeing the original designs.

**Changes from the two documents it replaces** — read these first if you knew the old ones:

| Change | Why |
|---|---|
| `--muted` is now `#6E6E6B`; `--muted-dark` is `#A09892` | The old `#8A8A8A` is 3.4:1 on the light field and 3.9:1 at the top of the dark one. It fails AA in both, and it was the colour every eyebrow and caption used |
| Primary buttons take an **ink** label, never a light one | `green` + `#FCFCF6` was 2.3:1. The old `§6 .btn` shipped a failing button |
| DM Sans is removed; the system stack replaces it | One family per §2, now SF Pro / Segoe / Roboto. No webfont request |
| `--alert` / `--alert-light` added | Meal Planner had already invented `#EF4444`. A system with no answer for "delete" gets one invented per repo |
| `--ink-raised` added, dark mode fully specified | The old spec gave dark one line, so three products each guessed |
| Type scale reconciled to one ladder | The two documents disagreed on H1 (32 vs 34) |
| Category colour is explicitly delegated to apps (§8) | Three apps had each invented a palette: 19, 34 and 7 values |
| `#00A000` is retired | Still shipping in `studio`, `mealplanner` and `unpickle_website` |
| **Colour splits into house and app (§1.2)** | The gold rule governs icons well and product UI badly. Four apps each need one accent, and were each inventing three |
| **`#8A8A8A` is retired outright** | It was `--muted-dark`. Measured against the *top* of `--field-dark` rather than flat `ink`, it is 3.9:1. `#A09892` replaces it at 4.7:1 worst case |
| **`gold` is now `#FECA00`; `#F0C21C` is retired** | The old gold sat just inside the sRGB gamut, which gave it a greyed, ochre cast next to the app accents. `#FECA00` is the gamut edge at the same hue — +7% chroma, no hue shift |

---

## 1. Colour

Colour splits in two, and the halves do not borrow from each other.

- **The house palette** — the twelve values below. It draws the app icons, the wordmark,
  voller.uk, the App Store presence, and every neutral, surface, hairline and alert inside a
  product. It is fixed. Do not introduce a thirteenth without adding it here first.
- **The app accent** — six tokens, published once per app (§1.2). They carry action and state
  inside that app's own UI, and nothing else.

An app may not put `gold` in its chrome. The house may not take an app's accent. Everything an app
does not publish in its six, it inherits from the twelve.

### The twelve

| Token | Hex | Role |
|---|---|---|
| `green` | `#82BA51` | The brand. Primary fills, primary subject colour. **Tint on dark.** Carries ink labels only. |
| `green-deep` | `#69A63C` | Interior detail on green shapes (ridges, grilles). Filled chips and pins. Never a fill on its own in icons. |
| `green-dark` | `#3F6B27` | **Tint on light**: links, glyphs, pressed states. Detail that must read on top of gold. |
| `gold` | `#FECA00` | The action colour. Rationed — see §4. Identical in both fields. The sRGB gamut edge at its own hue — see the note below §1.1. |
| `cream` | `#F6F1E3` | Light panels, action bars, negative space inside a shape. |
| `cream-dark` | `#EFE9DA` | Body text and surfaces on dark. Never pure white on a warm dark field. |
| `ink` | `#1B1B19` | Body text on light. Dark base. Labels on `green` and `gold`. |
| `ink-raised` | `#24231F` | Cards and list rows on dark. Warm — iOS `#1C1C1E` is the tell that a dark mode isn't ours. |
| `muted` | `#6E6E6B` | Secondary text and eyebrows on light. 5.0:1. |
| `muted-dark` | `#A09892` | Secondary text and eyebrows on dark. 4.7:1 at the worst point of the dark field. Warm — a grey caption on a warm dark field is the other tell that a dark mode isn't ours. |
| `alert` | `#C4382C` | Safety and destruction only, on light. Not a highlight, not decoration. |
| `alert-light` | `#E8705F` | The `alert` substitute on dark (`#C4382C` is 3.3:1 there). |

```css
:root {
  --green: #82BA51;
  --green-deep: #69A63C;
  --green-dark: #3F6B27;
  --gold: #FECA00;
  --cream: #F6F1E3;
  --cream-dark: #EFE9DA;
  --ink: #1B1B19;
  --ink-raised: #24231F;
  --muted: #6E6E6B;
  --muted-dark: #A09892;
  --alert: #C4382C;
  --alert-light: #E8705F;

  --field-light: linear-gradient(160deg, #FCFCF6 0%, #F1F0E4 100%);
  --field-dark:  linear-gradient(160deg, #302F2C 0%, #1B1B19 100%);
  --hairline:      rgba(20, 40, 10, .10);
  --hairline-dark: rgba(246, 241, 227, .12);

  --radius-card: 20px;
  --radius-row: 16px;
  --radius-control: 10px;
  --radius-icon: 23.5%;   /* iOS squircle approximation — icons only */

  /* The tint flips between fields. This is the only token that does. */
  --tint: var(--green-dark);
}
@media (prefers-color-scheme: dark) {
  :root { --tint: var(--green); }
}
```

**Gloss overlay** — every light *icon tile* carries one overlay above the art, baked into the
exported PNG. It belongs to the tile, never to the subject (§5), and never appears in product UI:

```css
background: radial-gradient(120% 90% at 30% 0%, rgba(255,255,255,.7) 0%, rgba(255,255,255,0) 55%);
box-shadow: inset 0 1px 0 rgba(255,255,255,.9);
```

Rules:

- Green is never a gradient. Flat fills only.
- The only two gradients in the system are `--field-light` and `--field-dark`.
- No new hues in chrome. If chrome needs a distinction, move lightness inside the green ramp.
- Page background: `--field-light`, or flat `#FCFCF6`. Dark: `--field-dark`, or flat `#1B1B19`.
- `#00A000` (the old web green) and `#111827` (the old cool ink) are retired. So are `#EF4444`,
  `#8A8A8A` and `#F0C21C` (the old gold).

### 1.1 The contrast table

If a pairing is not here, it is not sanctioned. Every figure below is computed with the WCAG
relative-luminance formula and rounded to one decimal — re-derive rather than eyeball if you add a row.

| Surface | Content | Ratio | Use |
|---|---|---|---|
| `green` | `ink` | 7.5 ✓ | Primary button, selected segment, toggle knob field |
| `green` | white / cream | 2.3 ✗ | **Never** |
| `green-deep` | `ink` | 5.9 ✓ | Map pins, filled chips |
| `green-deep` | white | 2.9 ✗ | **Never** |
| `green-dark` | `cream-dark` | 5.2 ✓ | Chat bubbles, pressed fills |
| `gold` | `ink` | 11.2 ✓ | The one gold element, both fields |
| `gold` | white | 1.5 ✗ | **Never** |
| `gold` | `green-dark` | 4.1 — | Icon detail only (§3 bands and channels), never text. Was 3.7 before the gold change |
| `#FCFCF6` | `ink` | 16.8 ✓ | Body copy on light |
| `#FCFCF6` | `muted` | 5.0 ✓ | Captions and eyebrows on light |
| `#FCFCF6` | `#8A8A8A` | 3.4 ✗ | **Never** — use `muted`. `#8A8A8A` is retired in both fields |
| `#FCFCF6` | `green-dark` | 6.1 ✓ | Links, tinted glyphs on light |
| `#FCFCF6` | `green` | 2.2 ✗ | **Never** — this is why the tint flips |
| `ink` | `cream-dark` | 14.2 ✓ | Body copy on dark |
| `ink` | `muted-dark` | 6.1 ✓ | Captions and eyebrows on dark |
| `#302F2C` (dark field, top) | `muted-dark` | 4.7 ✓ | The worst point on the dark field — this is the figure that sets the token |
| `#302F2C` (dark field, top) | `#8A8A8A` | 3.9 ✗ | **Never** — the retired `muted-dark`, and the reason it was retired |
| `ink` | `green` | 7.5 ✓ | Links and tinted glyphs on dark |
| `ink` | `green-dark` | 2.7 ✗ | **Never** |
| `alert` | white | 5.3 ✓ | Destructive button on light |
| `ink` | `alert` | 3.2 ✗ | Use `alert-light` on dark |
| `ink` | `alert-light` | 5.7 ✓ | Destructive text and fills on dark |
| `ink-raised` | `cream-dark` | 13.0 ✓ | Body copy in a dark card |
| `ink-raised` | `muted-dark` | 5.5 ✓ | Captions in a dark card |

**Why gold cannot be as vibrant as an app accent.** The accents sit at 0.19–0.21 chroma in OKLCh;
`gold` is 0.176. That is not a choice — it is the sRGB ceiling. Yellow is the most gamut-limited
hue there is, and `#FECA00` is already the most chromatic colour sRGB can express at gold's hue and
lightness. Reaching 0.20 means rotating to a lemon yellow, which stops reading as gold and weakens
the family resemblance with `green`. **Do not "fix" gold by pushing it further.** If gold looks flat
in a layout, the problem is the ground it sits on, not the token: gold on cream or white reads
washed out, and on `green` or `ink` it reads as intended.

**The one rule that prevents most mistakes:** green is a mid-light colour. It can be the *tint* only
on a dark field; on light it steps down to `green-dark`. But as a *filled surface* it is `green` with
an `ink` label in both fields — one button, no variants.

### 1.2 The app accent

**Every app publishes exactly six tokens, and inherits everything else.** One accent per app, one
accent per role per view. An app may not add a seventh colour to its chrome; if it needs a
distinction, it moves inside its own accent ramp.

| Token | Role |
|---|---|
| `accent` | Fills. The primary button, the active tab, the live state. |
| `accent-deep` | Glyphs, links and pressed states on the light field. The accent's `green-dark`. |
| `accent-wash` | The quiet button, the tab pill, a selected row's ground. Light field only. |
| `field` | The app's page gradient on light. Replaces `--field-light` inside that app. |
| `field-dark` | The same hue at a tenth of the light. Replaces `--field-dark` inside that app. |
| `accent-dark` | The tint on dark. `accent` is too heavy there for glyphs and links. |

Published values:

| Token | UnJumble — coral | Meal Planner + UnPickle — green | Riverly — river blue |
|---|---|---|---|
| `accent` | `#FF5A3C` | `#2BBF4E` | `#0B5FD0` |
| `accent-deep` | `#B92F14` | `#116B26` | `#0B4E9E` |
| `accent-wash` | `#FFE7E0` | `#E3F7E8` | `#E2EEFC` |
| `field` | `#FFFCFA → #FFEDE6` | `#FBFEFB → #E9F8EC` | `#FAFCFF → #E6F0FB` |
| `field-dark` | `#2C2320 → #1A1413` | `#1F2A21 → #141A15` | *not yet published* |
| `accent-dark` | `#FF7358` | `#45D268` | `#4E9BF5` |
| **label on `accent`** | `ink` | `ink` | `cream` |

All fields are `linear-gradient(160deg, …)` — the same angle as the two house fields.

**In code the two field tokens are `--field-app` and `--field-app-dark`**, not `--field` and
`--field-dark`. The house pair keeps its names so that voller.uk and any marketing surface inside
an app repo still resolve correctly; the app pair is what a product view actually paints with.

**UnPickle shares Meal Planner's six exactly.** It already went down the green route, and two apps
on one palette is cheaper to hold than five. The icons keep them apart, not the colour.
**Riverly and UnPickle are proposals** — their screens are not drawn, and Riverly's `field-dark` is
deliberately blank rather than guessed. Derive it the way the other two were (the hue at roughly a
tenth of the light) and add it here before shipping it.

#### The label follows the fill

Light accents carry an `ink` label — ink on coral is 5.6:1 and on green 7.1:1, where cream would be
2.7:1 and 2.1:1. Dark accents flip: cream on Riverly's `#0B5FD0` is 5.2:1, where ink would be 2.9:1.
**Each app publishes which of the two its fill takes, in the table above, and never guesses per
screen.**

#### Inherited, never overridden

`ink`, `cream`, `muted` / `muted-dark`, white and the `ink-raised` dark surface family, the
hairlines, the radii, the type ladder, and the alert pair `#C4382C` / `#E8705F` for destruction
only. An app publishes six tokens. It does not publish a seventh, and it does not restate a house
value under an app name.

#### Neutral by default

Counts, tags, dates, durations, avatars, photo slots, speaker names and status labels are **ink,
muted or white** — never the accent. The accent marks the action, the current thing, and the danger.
This is the rule that keeps a screen minimal at speed, and it is the one that breaks first: a second
hue creeps in for "types of thing". The type is carried by the label and the icon.

```css
/* UnJumble. Swap these six and the component set is another app. */
:root {
  --accent:       #FF5A3C;
  --accent-deep:  #B92F14;
  --accent-wash:  #FFE7E0;
  --accent-dark:  #FF7358;
  --field-app:      linear-gradient(160deg, #FFFCFA 0%, #FFEDE6 100%);
  --field-app-dark: linear-gradient(160deg, #2C2320 0%, #1A1413 100%);

  --on-accent: var(--ink);            /* this app's published label. Riverly's is --cream */
  --accent-tint: var(--accent-deep);  /* flips, exactly as --tint does */
}
@media (prefers-color-scheme: dark) {
  :root { --accent-tint: var(--accent-dark); }
}
```

Fills keep `accent` and its published label in **both** fields — one button, no variants, the same
rule as `green`. Only the tint lightens. `accent-wash` is light-field only; on dark the quiet button
becomes a `rgba(246,241,227,.20)` outline, per §9.

#### Green and gold keep the house

Icons, voller.uk and the App Store stay `#82BA51` and `#FECA00`. Meal Planner's accent is a brighter
relative of the brand green, so the family resemblance is strongest where the shop is.

#### 1.2.1 Accent contrast

Re-derive these if you add an app. Every pairing an accent is allowed to make:

| Surface | Content | Coral | Green | Blue |
|---|---|---|---|---|
| `accent` | published label | 5.6 ✓ ink | 7.1 ✓ ink | 5.2 ✓ cream |
| `accent` | the other label | 2.7 ✗ cream | 2.1 ✗ cream | 2.9 ✗ ink |
| `#FCFCF6` | `accent-deep` | 5.9 ✓ | 6.5 ✓ | 7.9 ✓ |
| `field` bottom | `accent-deep` | 5.3 ✓ | 6.1 ✓ | 7.0 ✓ |
| `accent-wash` | `accent-deep` | 5.1 ✓ | 5.9 ✓ | 6.9 ✓ |
| `accent-wash` | `ink` | 14.6 ✓ | 15.4 ✓ | 14.7 ✓ |
| `accent-deep` (pressed fill) | `cream` | 5.3 ✓ | 5.9 ✓ | 7.2 ✓ |
| `accent-deep` (pressed fill) | `ink` | 2.9 ✗ | 2.6 ✗ | 2.1 ✗ |
| `field-dark` top | `accent-dark` | 5.7 ✓ | 7.6 ✓ | — |
| `field-dark` bottom | `accent-dark` | 6.8 ✓ | 9.0 ✓ | — |
| `ink-raised` | `accent-dark` | 5.9 ✓ | 8.0 ✓ | 5.5 ✓ |
| `field` bottom | `muted` | 4.5 ✓ | 4.7 ✓ | 4.4 ✗ |
| `field-dark` top | `muted-dark` | 5.4 ✓ | 5.2 ✓ | — |

`accent` is a fill only. It is never a tint, never text, and never a glyph on either field — that is
`accent-deep` on light and `accent-dark` on dark, exactly as `green` steps down to `green-dark`.

**One open failure.** `muted` on the bottom of Riverly's field is 4.4:1 — the only sanctioned pairing
in this file that does not clear AA, and it is why Riverly stays a proposal. Resolve it before
drawing the screens, either by lightening the bottom stop to `#EAF3FD` (4.6:1, and `accent-deep`
still 7.2:1) or by putting Riverly's captions on `ink`. Do not ship the field as published.

---

## 2. Type

**One family: the platform system sans.** Never pair two.

```css
--sans: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, 'Segoe UI', Roboto, sans-serif;
--mono: ui-monospace, 'SF Mono', Menlo, monospace;
```

This is a **documented substitution ladder**, not a claim that everyone sees SF Pro. Apple platforms
get SF Pro; Windows gets Segoe UI; Android gets Roboto. All three are neutral grotesques at
comparable optical weight, so the scale below holds on all of them. Same principle as the simplified
favicon in §7 — state the substitution rather than pretend it away.

No webfont. No `<link>` to fonts.googleapis.com anywhere in the family.

### Scale (web)

| Step | Size | Weight | Tracking |
|---|---|---|---|
| Display | 44px | 600 | -0.02em |
| H1 | 34px | 600 | -0.02em |
| H2 | 22px | 600 | -0.02em |
| Body | 16px | 400 | 0, `line-height: 1.6` |
| Small | 14px | 400 | 0 |
| Caption | 12px | 400 | 0 |
| Eyebrow / spec label | 11–12px | 400 | uppercase, `.1em`, **mono**, `--muted` |

### Weights

**400, 500, 600 only.** 700 and above are unused — Riverly, Meal Planner and studio all set headings
at 700 today, and it is the most visible typographic inconsistency in the family.

### iOS: text styles, never fixed sizes

An iOS app must honour Dynamic Type, so the scale becomes a mapping. Never `.system(size:)` for
body or UI text.

| Web step | SwiftUI | Weight | Note |
|---|---|---|---|
| Display 44 | — | — | Web only; iOS has no step this large |
| H1 34 | `.largeTitle` | `.semibold` | 34pt at default — the one number identical on both platforms |
| H2 22 | `.title2` | `.semibold` | Exact match |
| Body 16 | `.body` | `.regular` | 17pt on iOS. Do not force 16 — 17 is the platform reading size |
| Small 14 | `.subheadline` | `.regular` | 15pt |
| Caption 12 | `.caption` | `.regular` | Exact match |
| Eyebrow 11 | `.caption2` | `.regular` | Plus `.monospaced()`, uppercase, `.tracking(1.1)` |

**One sanctioned exception:** `.system(design: .rounded)` numerals inside a **live instrument** — the
Riverly Speedo dial and badge, the Meal Planner timer. Never in a form, a list, a heading, or a
settings screen.

Long-form copy gets `text-wrap: pretty`. Monospace is only for eyebrows, specs and code — never body.

---

## 3. Geometry (icons)

Everything on a **1024 × 1024** grid with a **96pt safe margin** (an 832pt box).

- **Optical footprint: 720–812pt.** Match optically, not numerically — a solid filled shape reads
  larger than a linear one at the same measurement. Shipped: UnPickle 730, Meal Planner 812 × 636,
  UnJumble 720, Riverly 780, Voller 780.
- **Symmetry** about `x=512` unless the subject is on the axis below.
- **The 35° axis.** Any subject that reads as travelling or at rest at an angle sits at 35° — the
  pickle body, the boat hull, the V channel. It is the single diagonal in the system.
- **Corner radius 23.5%** of the tile for icon masks.

### Primitives

Build subjects from these four. Nothing else.

1. **Capsule** — a rect with `rx = width/2`. Pickle body, mic head, cutlery handles, plate rim.
2. **Circle** — the plate, the globe, the disc.
3. **Band** — a rect or thick stroke crossing a shape edge to edge. The pickle's wrapper, the mic's
   gold ring, the river, the V channel.
4. **Glass ring** — a circle at ~`r+50` behind a circular subject, `rgba(255,255,255,.62)` fill with
   a `rgba(255,255,255,.9)` 6–7pt stroke. On dark: `.10` fill, `.22` stroke. This is the token that
   ties the circular icons together — keep it.

### Stroke weights

Four weights. Nothing between them.

| Weight | Use |
|---|---|
| 24–32pt | Fine detail — checkmarks, list rules |
| 36pt | Structure — the mic yoke |
| 78–86pt | Bands and secondary channels |
| 150–190pt | Primary channels |

Joins and caps are `round` except where a shape must read as cut or folded: `miter` + `butt`.

---

## 4. The gold rule and the accent rule

Two rules, one idea, split by where they apply. **Gold governs the icons and the shop; the accent
governs the app.** They never appear in the same place, so they never compete.

### 4.1 Gold — icons, wordmark, voller.uk, App Store

**Gold appears exactly once per view, on the element that performs the core action.**

This is the strongest rule in the system and the one that makes unrelated subjects feel related.

| Product | Core action | Gold element |
|---|---|---|
| UnPickle | unwrapping | the ribbon crossing and unwinding off the body |
| Meal Planner | planning / ticking off | the three checkmarks |
| UnJumble | recording | the band on the mic head |
| Riverly | navigating | the boat hull |
| Voller | shipping apps | the app tile in the V, and the wordmark tile |

Where the core action is a set of elements expressing one concept — Voller's app tile and wordmark
tile — the whole set counts as one element. Gold is not a warning colour, not a highlight colour,
not decoration. If two golds meet, one becomes `green-dark`.

**On voller.uk and in marketing**, the same rule holds: one gold per view, on the thing the page is
for. In a header, the wordmark tile spends it. **A header containing both the wordmark and a gold
button is wrong.**

**This rule stops at the app boundary.** Inside a product, gold is replaced by the app's accent —
see §4.2. The one exception is a marketing surface *hosted* in an app repo (a landing page, an
App Store screenshot); that is voller.uk's rules, not the app's.

For a new app: name the verb first, then find the one shape that performs it. If you can't name the
verb, the icon isn't designed yet.

### 4.2 The accent rule — inside a product

The gold rule, generalised. **One accent per role per view: one primary action, one active tab, one
"current" marker.** Not one accent element per view — one per role. A screen may hold a filled
primary button, a filled active tab and a "TODAY" marker at once, because those are three roles.
It may not hold two primary buttons.

Everything else on the screen is `ink`, `muted` or white. Counts, tags, dates, durations, avatars,
photo slots and speaker names are neutral (§1.2, *neutral by default*) — that is what keeps a screen
minimal at speed.

**Gold does not appear in product UI.** The old §4 sent gold in to mark "the journey"; the accent
now does that job, per app, and does it better — it survives four apps where one gold could not.
Gold's remaining product-side appearance is the wordmark tile in a marketing header, which is
voller.uk, not an app.

| Role | Carried by | Once per |
|---|---|---|
| Primary action | `accent` fill + published label | View |
| Active tab / selected segment | `accent` fill, or `accent-wash` pill + `accent-tint` glyph | Tab bar |
| Current / live state | `accent` — today's row, the recording dot, the running timer | View |
| Selection | 2px `accent` edge plus one filled tick | Group |
| Link, glyph, pressed | `accent-tint` (`accent-deep` light, `accent-dark` dark) | Unlimited |
| Destruction | `alert` / `alert-light` — house, never the accent | View |
| Everything else | `ink`, `muted`, white | — |

If two accent fills of the same role meet, one steps down to `accent-wash` with an `accent-tint`
label — the same move as "if two golds meet, one becomes `green-dark`".

---

## 5. Drawing style

- **Flat vector only**, applied to the subject. No bevels, inner shadows, gloss, drop shadows or 3D
  on any drawn shape. The only permitted lighting is the tile-level gloss in §1, which sits above the
  art and belongs to the field.
- **No texture.** No continents, no coastlines, no hatching. Detail that dies below 120pt shouldn't
  exist.
- **One focal point.** A second competing element gets cut — Riverly's compass rose went for this.
- **One weight per edge.** Not three concentric outlines where one will do.
- **Legibility floor: 29pt.** Test there, not at 1024.

### Motion and implied direction

- The path a subject travels on and the subject's own axis must be **parallel**, not crossing.
- Trailing marks (wakes, ripples) sit **behind** the subject **on the path**, never on the field.
- A subject may be **hinged up to 20°** off the path to imply turning. More reads as a mistake.

---

## 6. Appearance variants (iOS 18+)

Three variants per app, all 1024 × 1024 PNG.

**Light / Any** — fully **opaque**. Fills the square. No alpha. Also the fallback below iOS 18.

**Dark** — **transparent background.** Do not pick a dark colour and do not bake a gradient. Supply
the art on transparency and let the system composite its own backdrop. Adjust the art for contrast
(`cream` → `cream-dark`, glass ring to `.10`/`.22`) but ship the background as alpha.

**Tinted** — grayscale art on solid `#000000`, opaque. The system applies the user's tint to the
luminance, so map for contrast, not hue: `gold → #FFFFFF` (the action stays brightest),
`cream → #D2D2D2`, `green → #8E8E8E`, `green-deep → #767676`, `green-dark → #454545`, glass ring
`.13`/`.26`.

Xcode reads **PNG** only. `.ico` has no role in an `.appiconset`.

---

## 7. Wordmark, icon and favicon

**The word carries the name. The icon is not part of the wordmark.**

`Voller` in the system sans, 600, `-0.02em`, followed by one gold app tile acting as a full stop.

```html
<a class="voller-wordmark" href="/"><span>Voller</span><i aria-hidden="true"></i></a>
```

```css
.voller-wordmark {
  display: inline-flex; align-items: flex-end; gap: .2em;
  font-size: 22px;              /* 64px hero, 32px mid, 22px header */
  font-weight: 600; letter-spacing: -0.02em; line-height: .9;
  color: var(--ink); text-decoration: none; border: 0;
}
.voller-wordmark i {
  width: .33em; height: .33em; border-radius: 23.5%;
  background: var(--gold); flex: none;
}
.voller-wordmark.on-dark { color: var(--cream-dark); }
```

Geometry: **tile = 0.33 × cap height, gap = 0.2 × cap height, tile radius 23.5%, tile baseline-aligned
with the word.** All em-relative, so nothing changes when the family changes.

Do not: put the circular icon next to the wordmark in a header (two focal points saying one thing);
letterspace it positively; set it in 700 or in caps; recolour the tile; add a second tile. The footer
is the one place icon and wordmark sit together, at ~34px icon / 18px word, where the icon reads as a
stamp rather than a headline.

**Favicon below 32px is a documented simplification**, not a different mark: full-bleed green, cream
channel only, wider stroke — because the gold tile falls under 3px and turns to mud. Assets and the
export ladder are listed in §11.

---

## 8. Category colour is app-local

**Read §1.2 first.** Since colour split into house and app, most of what used to be reached for as
"category colour" is now either the app's own accent ramp or, more often, nothing at all — tags,
counts, dates and statuses are neutral by default. Reach for a category set only when the *data*
genuinely is a set of parallel kinds, and the label and icon are not already doing the work.

The house system governs **chrome**. The app accent governs **action and state**. Neither governs
**category colour** — the palette an app uses to distinguish tags, statuses, labels, map markers or
domain data.

This is deliberate. Meal Planner may need food-tag colours and studio status colours. No single
house palette can serve both, and every attempt to make one is what produced a 34-utility Tailwind
safelist. Riverly's water blue is no longer an example here: it is Riverly's `accent` (§1.2), not a
category colour.

### The house governs

Surfaces and fields · hairlines · the type family, scale and weight set · tint · primary and
secondary actions · gold and what it may mark · **the six accent tokens and the accent rule** ·
alert and destructive affordances · radii · the 8px spacing base and section rhythm · icons,
wordmark and app-tile geometry.

The app *publishes* its six (§1.2); it does not get to invent a seventh, or to use them outside the
roles in §4.2.

### The app decides — under four rules

1. **One file.** A category set lives in `Theme/Colors.swift` or a single `theme.css` block, named
   for its domain. Never a hex at a call site.
2. **Eight maximum.** Past eight, colour has stopped distinguishing and the icon or label is doing
   the work anyway.
3. **Measured against its own field.** Every value clears 4.5:1 against the glyph or text it
   carries, on the surface it actually sits on — not on white.
4. **Three reservations.** A category set may never use `gold`, `alert`, or **the app's own six**,
   and a category colour may never tint a button, a link, a nav item, a tab or a selection. Those
   carry meaning across the whole family — a category colour that borrows the accent makes "this is
   a vegetarian meal" and "this is the button" the same colour.

A category colour naming its domain (`water`, `overdue`, `protein`) is correct and needs no entry in
this file. A category colour named after its hue (`tagBlue`, `bg-indigo-500`) is a sign rule 1 has
been skipped.

---

## 9. Surfaces and components

```css
.card {
  background: #FFFFFF;                       /* or var(--cream) */
  border: 1px solid var(--hairline);
  border-radius: var(--radius-card);
  padding: 28px;
}
.btn {                                       /* primary */
  display: inline-flex; align-items: center; gap: 8px;
  padding: 11px 18px;
  border: 0; border-radius: var(--radius-control);
  background: var(--green); color: var(--ink);      /* ink, NOT cream — 7.5:1 */
  font: 500 15px/1 var(--sans); letter-spacing: -0.01em;
  cursor: pointer;
}
.btn:hover { background: var(--green-deep); }       /* not green-dark: the label stays ink */
.btn-quiet {
  background: transparent; color: var(--tint);
  box-shadow: inset 0 0 0 1px var(--hairline);
}
.btn-destructive { background: var(--alert); color: #FFFFFF; }
.btn-gold { background: var(--gold); color: var(--ink); font-weight: 600; }

a { color: var(--tint); text-decoration: none; border-bottom: 1px solid rgba(63,107,39,.3); }
a:hover { color: var(--green); }
```

**Inside an app, the same block runs on the accent** — swap `--green` for `--accent`, `--green-deep`
for a pressed step inside the accent ramp, `--tint` for `--accent-tint`, and `--ink` for that app's
published `--on-accent`. Identical geometry and states in every app; only the six tokens change.
`.btn-gold` has no in-app form — see §4.2.

```css
.btn        { background: var(--accent);      color: var(--on-accent); }
.btn:hover,
.btn:active { background: var(--accent-deep); color: var(--cream); }  /* the label flips — see below */
.btn-quiet  { background: var(--accent-wash); color: var(--accent-deep); box-shadow: none; }
.btn-outline{ background: transparent; color: var(--accent-tint);
              box-shadow: inset 0 0 0 1px var(--hairline); }
.btn-destructive { background: var(--alert); color: #FFFFFF; }              /* house, not accent */
```

- Separate surfaces with a 1px hairline or a background step. **No drop shadows for hierarchy.**
- On dark: cards and rows are `--ink-raised` with `--hairline-dark`; the quiet button becomes a
  `rgba(246,241,227,.20)` outline rather than a tinted wash, which disappears on near-black. This
  holds for `--accent-wash` too — it is a light-field token only.
- A filled control keeps `--accent` and its published label in **both** fields. Only the tint
  lightens, to `--accent-dark`. Do not build a dark variant of a button.
- **The pressed state is the one place a label flips.** `accent-deep` is dark enough that `ink`
  fails on it in every app (2.9 coral, 2.6 green, 2.1 blue), so a pressed button takes `cream`
  (5.3 / 5.9 / 7.2). Riverly's label does not change — it is `cream` at rest too. This is the
  house `.btn:hover` behaving differently, not a new rule: `green-deep` is light enough to keep
  its `ink` label, and `accent-deep` is not.
- Circular imagery gets the §3 glass ring so the web echoes the icons.
- App icons on a page are shown at 23.5% radius, never circular, never with a shadow.
- **Always define both `a` and `a:hover`.** Never leave links at browser default.

### Embedded platform surfaces are exempt

Where a product embeds a platform's own view — MapKit's place card in Riverly, a Sign in with Apple
button, the iOS share sheet — that surface keeps the platform's colours and type. Brand the frame,
not the frame's contents. This is correct behaviour, not a bug: the whole promise of Riverly's
"Apple Maps" tab is that it *is* the Apple Maps page.

---

## 10. Layout

- 8px spacing base. Section rhythm 24 / 32 / 56 / 72px.
- Flex or grid with `gap` for any group of siblings. **Never margin-per-child.**
- Content measure 640–720px for prose.
- iOS hit targets never below 44pt.

---

## 11. Don'ts

- No aggressive gradient backgrounds; the two field gradients are the only ones.
- No second typeface. No DM Sans, no Inter, no Proxima Nova, no Futura PT.
- No emoji.
- No rounded container with a coloured left border.
- No drop shadows for hierarchy — use surface steps.
- No `#00A000`, `#111827`, `#EF4444`, `#8A8A8A`, `#F0C21C` in either field, or a light label on `green`.
- No gold on anything other than the one action per view — and **no gold in product UI at all**.
- No hue outside your own six. If an app needs a distinction, it moves inside its accent ramp.
- No accent on a count, a tag, a date, a duration, an avatar or a photo slot. Neutral by default.
- No second accent fill in the same role in one view.
- No `accent` as text or a glyph — that is `accent-deep` on light, `accent-dark` on dark.
- No dark variant of a filled control. The fill and its label do not change between fields.
- No `accent-wash` on the dark field.
- No icon-plus-wordmark in the header.
- No fixed font sizes on iOS for body or UI text.
- No hex at a call site — tokens only.

---

## 12. Source of truth and assets

- `<App>/source-{light,dark,tinted}.svg` — **the vector masters.** Plain SVG, 1024,
  self-contained. Edit these; re-export PNGs from them. There is no `.fig`/`.ai` original.
- `<App>/` also holds the three exported 1024 PNGs and a ready `Contents.json`. Copy the
  PNGs + JSON into `Assets.xcassets/AppIcon.appiconset/`; leave the SVGs out of the catalog.
- `voller_website/brand/web/` — web icon ladder.

| File | What | Where used |
|---|---|---|
| `voller-icon.svg` | Full icon, 1024 | Page, OG source, ≥33px |
| `favicon.svg` | Simplified channel | Tab, ≤32px |
| `favicon.ico` | 32 + 16, simplified | Legacy tab |
| `apple-touch-icon.png` | 180, full icon, opaque | iOS home screen |
| `icon-512.png` | Full icon | Web manifest |
| `og-image.png` | 1200×630 | Social cards |
| `source-{light,dark,tinted}.svg` | App-icon masters | Xcode `AppIcon.appiconset` |

The wordmark ships as CSS (§7), not as an image. Outline it to vector only for print or for a partner
who cannot load the stack.

Migration state and per-repo find/replace: **`MIGRATION.md`**.

Two live references, and they split the same way §1 does:

| File | Covers | Status |
|---|---|---|
| `voller-design-system-reference.html` | House palette, type, spacing, icons, web components | Current for everything except in-app colour |
| `voller-in-app-colour-reference.dc.html` | §1.2 and §4.2 — the six tokens, the four screens light and dark, and one component set drawn twice, coral and green | Current |

**The in-app half of `voller-design-system-reference.html` is stale**: it predates §1.2 and still
shows product UI on green and gold. Use the `.dc.html` for anything inside an app. Fold it into the
main reference when that file is next rebuilt — it is a Claude Design bundle, not hand-editable.

---

## 13. Adding a fifth app

1. Name the verb. That decides where gold goes.
2. Choose the subject and build it from §3 primitives only. If it needs a shape that isn't there,
   simplify the subject.
3. Fit it to a 720–812pt optical footprint on the 1024 grid.
4. Put gold on the verb, once. Gold lives in the icon; it does not follow you into the app.
5. Check it at 29pt.
6. **Publish your six** (§1.2) — accent, accent-deep, accent-wash, field, field-dark, accent-dark —
   and state which label your fill takes. Derive `accent-deep` and `accent-dark` from the accent, not
   from taste: deep must clear 4.5:1 on your own field and on your own wash; dark must clear it on
   `ink-raised` and on both stops of your `field-dark`. Add the row to §1.2 and the figures to
   §1.2.1 before writing any UI.
   Before inventing a sixth palette, check whether an existing app's six already fits — UnPickle and
   Meal Planner share one on purpose.
7. Declare any category colours in the app's own theme file, under §8's four rules.
8. Line it up against the existing icons before shipping. It should be obvious they're siblings
   without being told.
