# Voller design system

Voller is a one-person iOS studio in London, and the house brand that parents four small apps:
**UnPickle**, **Meal Planner**, **UnJumble** and **Riverly**. The surfaces are the marketing website
(voller.uk), the App Store presence, and the app icons themselves.

The apps do one thing each, on the device, with no accounts. The design system exists so the house
reads as their parent — not as a fifth app.

## Sources

Everything here was built from these repositories. Read them if you have access; they are the ground
truth, and this project is a compilation of them, not a reinterpretation.

| Source | URL | What it gave us |
|---|---|---|
| Design system repo | https://github.com/jackvoller/voller-design-system | `VOLLER.md` — the canonical spec (colour, type, geometry, the gold rule, governance). `MIGRATION.md` — per-repo migration state. `voller-design-system-reference.html` — the live component reference. `<App>/` — four app-icon sets, three PNG variants plus SVG masters each. |
| Website repo | https://github.com/jackvoller/voller_website | `src/index.css` — the shipping implementation of the token and semantic layer. `src/pages/*.tsx`, `src/components/*` — the real component structure. `src/content/products.ts`, `productMarketing.ts` — all product copy, lifted verbatim. `public/brand`, `public/product-icons`, `public/screenshots` — the assets. |
| Not read | `jackvoller/riverly`, `mealplanner`, `unjumble`, `studio`, `unpickle_website` | The iOS and web app view code. **No in-app UI kit was built** because those views were not read — see "Gaps and caveats". |

Raw spec for a consuming repo:
`https://raw.githubusercontent.com/jackvoller/voller-design-system/main/VOLLER.md`

Sync state and the screen → source map live in [`github.md`](github.md).

### Three divergences from the brief — please confirm

The brief that opened this project described the **previous** brand document. `VOLLER.md` explicitly
supersedes it and lists each of these as a deliberate change, with a reason. **This project follows
`VOLLER.md`.** If the brief is what you actually want, say so and it is a small edit each.

| Brief said | `VOLLER.md` says | Why the repo changed it |
|---|---|---|
| DM Sans only, 400/500/600 | **No webfont.** One family: the platform system sans (SF Pro / Segoe UI / Roboto), 400/500/600 | Four of five products are Apple-platform; the webfont was two render-blocking requests for a family the apps could not use |
| `muted` is `#8A8A8A` | `muted` is `#6E6E6B`; `#8A8A8A` is renamed `muted-dark` and used only on dark | `#8A8A8A` is 3.4:1 on the light field — it failed AA, and it was the colour every eyebrow and caption used |
| Six colours only, no red — errors read as green-dark plus a message | Twelve tokens, including `alert` `#C4382C` and `alert-light` `#E8705F`, for destruction and safety only | A system with no answer for "delete" gets one invented per repo — Meal Planner had already shipped `#EF4444` |

Two further exceptions are **the site's own documented departures from `VOLLER.md`**, preserved here
because voller.uk ships them: the 78px hero (§2 caps display at 44px) and the four gold-tinted
product accent palettes (§4 rations gold to one element per view). Both are Jack's call and are
commented at the rule they break.

---

## Content fundamentals

**Voice: declarative, short, sentence case, British English.** The product is described by what it
does, in the order a person does it. No throat-clearing.

- **Name the verb.** Every app is defined by one: UnPickle *unwraps*, Meal Planner *plans*, UnJumble
  *un-jumbles*, Riverly *navigates*. Headings are verbs or verb phrases — "Talk", "Let it un-jumble",
  "Turn it into what you need".
- **Absence is a feature. Say what it does not do.** "The audio itself never leaves your device."
  "Never invents a tag." "No subscription." This is the most Voller sentence pattern there is.
- **Second person, and the reader owns things.** "Your own tags, applied by hand." "Everything you
  have said, still findable." First person appears only as the studio answering: "We reply from a real
  address."
- **Sentence case everywhere**, including buttons and headings. Headings that are sentences take a
  full stop: "Turn voice into clarity." Fragments do not: "One recording, whatever you needed from it".
- **Buttons name the action and its object.** "Get Riverly — £9.99", "Send message", "Keep me posted".
  Never "Learn more" as a standalone action — it is permitted only inside a product card whose heading
  already names the product.
- **Numbers are concrete and British.** "£1.99/month or £14.99/year", "61 locks", "0.85 m fall",
  "30 days", "iOS 26 or later". Prices in sterling, no "starting from".
- **Em dashes for the aside**, and the aside is where the honesty goes: "Drafts always use UnJumble's
  AI service, which needs a more capable model than the one on your device."
- **Banned:** emoji. Exclamation marks. "Seamless", "empower", "delight", "unlock", "effortless",
  "revolutionary". Sentences that describe the feeling instead of the function.
- **Eyebrows are written sentence case and uppercased by CSS** — write "Available now", not
  "AVAILABLE NOW".
- **Errors are written words**, not a red field: name what happened and what to do.

Specimen paragraph, from the site:

> UnJumble is for the moments when typing would interrupt your flow — a thought on a walk, a
> follow-up after a meeting, a brief you want to get down before you lose it. Talk, and get back
> something you can actually use.

---

## Visual foundations

**Colour.** Twelve tokens, no thirteenth. Six are the icon palette — `green #82BA51`,
`green-deep #69A63C`, `green-dark #3F6B27`, `gold #F0C21C`, `cream #F6F1E3`, `cream-dark #EFE9DA` —
plus `ink #1B1B19`, `ink-raised #24231F`, two muteds (`#6E6E6B` light, `#8A8A8A` dark) and the alert
pair. No new hues in chrome: if chrome needs a distinction, it moves inside the green ramp.
**Category colour** (tags, statuses, map families) is delegated to each app under four rules — max
eight values, named for their domain, measured on their own surface, never gold and never alert.

**The gold rule — the strongest rule in the system.** Gold appears exactly once per view, on the
element that performs the core action. In a header, that one gold is the wordmark's tile, so a header
carrying a gold button is wrong. If two golds meet, one becomes `green-dark`.

**The tint flips; nothing else does.** `--tint` is `green-dark` on light and `green` on dark. Green is
a mid-light colour: as a *tint* it only works on dark; as a *filled surface* it is `green` with an
`ink` label in both fields. A light label on green is 2.3:1 and forbidden.

**Type.** One family, the platform system sans, at 400/500/600 — 700 and above are unused, and that
is what makes four apps look like one family. Ladder: 44 / 34 / 22 / 16 (1.6) / 14 / 12, with
`-0.02em` on everything 22 and up. Monospace only for uppercase eyebrows and spec labels at 11–12px,
`.1em` — never body, never a heading. Long-form copy gets `text-wrap: pretty`; hero headlines get
`text-wrap: balance`. On iOS the ladder becomes Dynamic Type styles, never fixed sizes; the one
exception is `.rounded` numerals inside a live instrument (Riverly's Speedo, Meal Planner's timer).

**Backgrounds.** Two gradients exist and no third may be invented: `--field-light`
(160° `#FCFCF6` → `#F1F0E4`) and `--field-dark` (160° `#302F2C` → `#1B1B19`). Flat `#FCFCF6` / `#1B1B19`
are the alternatives. No photographic or illustrated page backgrounds; imagery is app screenshots
sitting on an accent tile, and app icons. **Green is never a gradient.** No textures, no patterns, no
noise.

**Shadows: none.** Hierarchy is a 1px hairline (`rgba(20,40,10,.10)` light, `rgba(246,241,227,.12)`
dark) or a background step (white or cream on the field; `ink-raised` on ink). The only box-shadows in
the system are inset: the quiet button's 1px outline, and the gloss baked into an exported light icon
tile.

**Corner radii.** Card 20, row 16, control 10, pill 999, app tile **23.5%** (the iOS squircle
approximation — tiles only, and never shown circular). Cards are: surface fill, 1px hairline, 20px
radius, 24–28px padding, contents in a flex column with `gap`. No coloured left border, ever.

**Circular imagery wears the glass ring** — a circle at r+7% filled `rgba(255,255,255,.62)` with a
`rgba(255,255,255,.9)` stroke (`.10`/`.22` on dark). It is the token that ties the web back to the app
icons. App tiles are the exception: squircle, no ring.

**Transparency and blur** appear in exactly one place: the sticky site header, at
`rgb(252 252 246 / .92)` with `backdrop-filter: blur(10px)`. Nowhere else — no frosted cards, no
scrims, no protection gradients. Text over imagery is avoided rather than protected.

**Hover, press, focus.** Hover is a colour step: primary green → `green-deep`; a card steps its
surface to cream and its hairline to the stronger value; a muted link goes to `--text`. Press is
another colour step — primary → `green-dark` with a `cream-dark` label (5.2:1). Never a scale, never a
shadow lift, never an opacity fade on a button. Focus is `2px solid var(--tint)` at `3px` offset.

**Motion.** 120ms for colour, 180ms for movement, on `cubic-bezier(.2,.6,.2,1)`. No bounces, springs,
parallax or scroll reveals. Nothing animates on page load.

**Layout.** 8px base; section rhythm 24 / 32 / 56 / 72. Container `min(1120px, 100% - 40px)`; prose
measure 640–720px. Any group of siblings is flex or grid with `gap` — never margin-per-child. The
header is the only fixed element. iOS hit targets never below 44pt.

**Imagery vibe.** Warm and daylight — cream fields, green subjects, real iPhone screenshots on a pale
accent tile with a hairline. No stock photography, no people, no illustration beyond the icons
themselves.

---

## Iconography

- **There is no bespoke Voller UI icon set.** voller.uk ships `lucide-react`, so **Lucide is the
  documented icon system** — used here at **1.75px stroke, round caps, `currentColor`**. That stroke
  weight is the one value taken from the brief rather than the repo (the site uses Lucide's 2px
  default); it is a one-line change in `components/brand/Icon.jsx` if you would rather match the site
  exactly.
- Loaded from CDN (`unpkg.com/lucide@0.462.0/dist/umd/lucide.js`) by every card and UI kit, and
  wrapped by the `Icon` component. Sizes in use: 15–17 beside 14–15px text, 20 in nav, 26 in the
  App Store badge, 16 for tick lists.
- **Never emoji. Never a unicode character standing in for an icon.** The one unicode exception is the
  `›` disclosure chevron inside a list row, which is what the reference document uses.
- **Brand SVGs and PNGs are copied in, never redrawn:** `assets/brand/voller-icon.svg` (full mark,
  ≥33px), `favicon.svg` (the documented sub-32px simplification — full-bleed green, cream channel
  only, wider stroke), `apple-touch-icon.png`, `icon-512.png`, plus `voller-logo.svg`,
  `voller-logo-dark.svg` and `voller-mark.svg`.
- **App icons** live in `assets/app-icons/<App>/` — three 1024 PNGs (light opaque, dark **transparent
  by design**, tinted grayscale on black) and the three `source-*.svg` masters, which are the editable
  source. Shown on a page at 23.5% radius, never circular, never with a shadow.
- The Apple logo inside the App Store badge is the only third-party mark, and it is inline in
  `AppStoreBadge` exactly as the site ships it.
- The wordmark ships as **CSS, not an image** — the word plus one gold tile as a full stop.

---

## Components

`window.VollerDesignSystem_295131.<Name>`. Inventory taken from `voller-design-system-reference.html`
§03 and the website's own components — no primitive was invented.

**`components/core/`** — `Button`, `Card`, `ListGroup`, `ListRow`, `Input`, `Segmented`, `Toggle`,
`Slider`, `Chip`

**`components/brand/`** — `Wordmark`, `AppTile`, `GlassRing`, `Eyebrow`, `Icon`

**`components/web/`** — `SiteHeader`, `SiteFooter`, `ProductCard`, `StepCard`, `PlanCard`, `TickList`,
`PageTabs`, `AppStoreBadge`, `SectionHead`

Each directory has a `<Name>.jsx`, a `<Name>.d.ts` props contract, a `<Name>.prompt.md` with usage and
rules, and one `@dsCard` HTML showing the variants on both fields.

### Intentional additions

- **`Icon`** — a Lucide wrapper. The source has no icon component (it imports `lucide-react`
  directly), but a browser design system needs one to pin the stroke weight.
- **`Eyebrow`** — the source uses a bare `.eyebrow` class. Promoted to a component so the mono/uppercase
  rule cannot be retyped wrongly.
- **`ListGroup`** — the reference draws the row group inline. Split out so `ListRow` hairlines and the
  16px clip live in one place.

---

## UI kits

| Kit | What | Built from |
|---|---|---|
| [`ui_kits/website/`](ui_kits/website/README.md) | voller.uk — hub → product page → changelog, plus Support. Click-through, dark mode included. | `voller_website/src/pages/*`, `src/index.css`, `src/content/*` |
| [`ui_kits/app-icons/`](ui_kits/app-icons/README.md) | The icon family: three variants per app on the plate each composites against, the size ladder to the 29pt floor, and where each app spends its gold. | `voller-design-system/<App>/`, `VOLLER.md` §3–§6 |
| [`ui_kits/app-store/`](ui_kits/app-store/README.md) | App Store presence — one listing sheet per app: tile, subtitle, promo text, screenshots, price, and the absences worth naming. | `productMarketing.ts`, `public/screenshots/`, icon exports |

## Templates

| Template | What |
|---|---|
| `templates/product-page/ProductPage.dc.html` | A Voller product marketing page: header, hero with the app tile on a cream plate, three steps, a highlight with a tick list and screenshot, and the closing restatement. |

---

## Index

| Path | What |
|---|---|
| `styles.css` | The one file a consumer links. `@import`s only. |
| `tokens/colors.css` | Twelve brand colours, two fields, hairlines |
| `tokens/typography.css` | Family stacks, the type ladder, weights |
| `tokens/spacing.css` | 8px base, section rhythm, padding, measures |
| `tokens/radii.css` | Card / row / control / pill / tile radii |
| `tokens/effects.css` | Glass ring, tile gloss, inset outlines |
| `tokens/motion.css` | 120ms / 180ms and the house easing |
| `tokens/semantic.css` | The light/dark semantic layer and `[data-field]` overrides |
| `tokens/base.css` | Element defaults, including both link states |
| `css/components.css` | The `.v-*` component layer, lifted from `src/index.css` |
| `components/{core,brand,web}/` | 23 components, each with `.d.ts`, `.prompt.md` and a card |
| `guidelines/*.card.html` | 21 foundation specimen cards (Colors, Type, Spacing, Brand, Motion) |
| `ui_kits/{website,app-icons,app-store}/` | Three surface recreations |
| `templates/product-page/` | The product-page starting template |
| `assets/brand/` | Voller mark, favicon ladder, logos, touch icons |
| `assets/product-icons/` | The four 1024 app icons as used on the web |
| `assets/app-icons/<App>/` | Full appiconset per app: 3 PNGs + 3 SVG masters |
| `assets/screenshots/` | Real iPhone screenshots for UnJumble, Riverly, Meal Planner |
| `sources/` | Imported source files kept for reference (marketing copy, the component reference, the website's CLAUDE.md) |
| `github.md` | Source association, last sync, screen → source map |
| `SKILL.md` | Agent Skills front matter for use in Claude Code |

## Gaps and caveats

- **No in-app iOS UI kit.** UnJumble, Riverly and Meal Planner's SwiftUI views live in private repos
  that were not read this run. The component set covers the iOS patterns the reference document
  specifies (settings rows, segmented, toggle, slider), but a screen-level recreation would have been
  invention. Say the word and it can be built from those repos properly.
- **No webfont files.** By design — `VOLLER.md` forbids one. If you ever want DM Sans back, the font
  files need to come from you; do not substitute a Google Font silently.
- **Privacy policy pages** render from Markdown upstream; the links exist in the website kit but are
  inert.
- **UnPickle has no App Store sheet** — it ships as a web app today.
