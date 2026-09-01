> **Folded into `VOLLER.md` on 1 Sep 2026 — this file is an archive, not a spec.**
>
> Everything below now lives in `../VOLLER.md`: §1 and §1.1 were replaced outright, and §4.1, §6,
> §7, §11 and §12 were rewritten around it. The per-repo find/replace moved to `../MIGRATION.md` §9,
> along with the open items.
>
> Two things resolved differently in the folded version, both because the new app icon family
> (`../app-icons/`) landed at the same time and this file was written before it was drawn:
>
> - **§4.1's product table.** This file says the table "stands", but the four app icons no longer
>   contain any yellow — each spends its ration in its own `accent`. `VOLLER.md` §4.1 keeps the
>   ration rule and rewrites the table around that.
> - **`#FFFDF5` / `ink` is 16.9:1**, not the 16.4 in the contrast table below. Every other figure
>   in this file re-derives correctly.
>
> Kept because the reasoning here is fuller than the spec has room for.

---

# Voller — colour, yellow

**Replaces `VOLLER.md` §1 and §1.1 outright. Amends §4.1, §6, §7 and §11 — the amendments are at the
bottom of this file.** Everything else in `VOLLER.md` stands unchanged, including §1.2 (the app
accent), §2 (type), §3 (icon geometry), §8–§10.

The house moves from green-and-gold to one vibrant yellow. Green is not deleted from the family — it
is demoted out of the house palette and lives on as Meal Planner's and UnPickle's published `accent`
(§1.2). The house no longer owns a green.

**Changes from the green-and-gold document:**

| Change | Why |
|---|---|
| `green`, `green-deep`, `green-dark` retired from the house | Colour already split house/app in §1.2. With four apps publishing their own accents, a house green competed with two of them and meant nothing in the other two |
| `gold #FECA00` retired; `yellow #FFC400` replaces it | Gold was the *action* colour under a green brand. Yellow is now the brand itself, so it needs a ramp, not a single value |
| `--tint` on light is `yellow-dark #8A5A00`, not `green-dark` | Yellow is a light colour. It cannot be a tint on a light field at any chroma — 1.4:1 against cream |
| The house field is now pale yellow, `#FFFDF5 → #FFF1CE` | The brand hue carries the page at 6% strength, which is how yellow brands stay yellow without shouting |
| `yellow-wash #FFF3CE` added | The quiet button and selected-row ground the old palette borrowed from `cream` |
| The cut-out inside a brand shape flips from `cream` to `ink` | Cream on yellow is 1.4:1. This is the single geometric consequence of the change and it is why the V in the mark is now ink |

---

## 1. Colour

Colour still splits in two, and the halves still do not borrow from each other.

- **The house palette** — the twelve values below. It draws the Voller mark, the wordmark,
  voller.uk, the App Store presence, and every neutral, surface, hairline and alert inside a
  product. It is fixed. Do not introduce a thirteenth without adding it here first.
- **The app accent** — six tokens, published once per app (§1.2, unchanged). They carry action and
  state inside that app's own UI, and nothing else.

An app may not put `yellow` in its chrome. The house may not take an app's accent.

### The twelve

| Token | Hex | Role |
|---|---|---|
| `yellow` | `#FFC400` | The brand and the action colour. Primary fills, the full stop, the one rationed element per view (§4.1). **Carries ink labels only.** Identical in both fields. |
| `yellow-deep` | `#E0A200` | Hover and press on a yellow fill. Interior detail on yellow shapes. Still takes an `ink` label. |
| `yellow-dark` | `#8A5A00` | **Tint on light**: links, glyphs, pressed text, detail that must read on top of yellow. Takes a `cream` label when it is a fill. |
| `yellow-wash` | `#FFF3CE` | The quiet button, the tab pill, a selected row's ground. Light field only. |
| `cream` | `#F6F1E3` | Light panels, action bars, negative space that is not inside a yellow shape. |
| `cream-dark` | `#EFE9DA` | Body text and surfaces on dark. Never pure white on a warm dark field. |
| `ink` | `#1B1B19` | Body text on light. Dark base. Labels on `yellow` and `yellow-deep`. **The cut-out inside a yellow shape.** |
| `ink-raised` | `#24231F` | Cards and list rows on dark. Warm — iOS `#1C1C1E` is the tell that a dark mode isn't ours. |
| `muted` | `#6E6E6B` | Secondary text and eyebrows on light. 4.6:1 at the worst point of the light field. |
| `muted-dark` | `#A09892` | Secondary text and eyebrows on dark. 4.7:1 at the worst point of the dark field. |
| `alert` | `#C4382C` | Safety and destruction only, on light. Not a highlight, not decoration. |
| `alert-light` | `#E8705F` | The `alert` substitute on dark (`#C4382C` is 3.3:1 there). |

```css
:root {
  --yellow: #FFC400;
  --yellow-deep: #E0A200;
  --yellow-dark: #8A5A00;
  --yellow-wash: #FFF3CE;
  --cream: #F6F1E3;
  --cream-dark: #EFE9DA;
  --ink: #1B1B19;
  --ink-raised: #24231F;
  --muted: #6E6E6B;
  --muted-dark: #A09892;
  --alert: #C4382C;
  --alert-light: #E8705F;

  --field-light: linear-gradient(160deg, #FFFDF5 0%, #FFF1CE 100%);
  --field-dark:  linear-gradient(160deg, #302F2C 0%, #1B1B19 100%);
  --hairline:      rgba(60, 40, 0, .12);
  --hairline-dark: rgba(246, 241, 227, .12);

  --radius-card: 20px;
  --radius-row: 16px;
  --radius-control: 10px;
  --radius-icon: 23.5%;   /* iOS squircle approximation — icons only */

  /* The tint flips between fields. This is still the only token that does. */
  --tint: var(--yellow-dark);
}
@media (prefers-color-scheme: dark) {
  :root { --tint: var(--yellow); }
}
```

The hairline moves from `rgba(20,40,10,.10)` to `rgba(60,40,0,.12)` — the old one was a green-cast
line, mixed to disappear into a green-cast field. On the yellow field it reads grey-green. Same
weight, warm cast, one notch stronger because the field it sits on is lighter than the old one.

**Gloss overlay** — unchanged from §1, and the rule that matters here is the second line: it belongs
to the tile, never to the subject. A gloss over an ink cut-out greys it out; put the gloss **under**
the art, above the field only.

```css
background: radial-gradient(120% 90% at 30% 0%, rgba(255,255,255,.7) 0%, rgba(255,255,255,0) 55%);
box-shadow: inset 0 1px 0 rgba(255,255,255,.9);
```

Rules:

- Yellow is never a gradient. Flat fills only. The field is a gradient; the brand colour is not.
- The only two gradients in the system are `--field-light` and `--field-dark`.
- No new hues in chrome. If chrome needs a distinction, move lightness inside the yellow ramp.
- Page background: `--field-light`, or flat `#FFFDF5`. Dark: `--field-dark`, or flat `#1B1B19`.
- **A yellow fill on the yellow field has a 1.5:1 edge.** It must be defined by its `ink` content or
  a `--hairline`, never by the fill alone. This is new and it is the trap of a yellow house: the
  field and the brand are the same hue, so a yellow button on a yellow page needs help to be a
  button. On `cream`, white or `ink` it defines itself.
- `#82BA51`, `#69A63C`, `#3F6B27`, `#FECA00`, `#F0C21C`, `#00A000`, `#111827`, `#EF4444` and
  `#8A8A8A` are retired from the house. The first three continue to exist **only** as Meal Planner's
  and UnPickle's `accent` family under §1.2.

### 1.1 The contrast table

If a pairing is not here, it is not sanctioned. Every figure is computed with the WCAG
relative-luminance formula and rounded to one decimal — re-derive rather than eyeball if you add a
row.

| Surface | Content | Ratio | Use |
|---|---|---|---|
| `yellow` | `ink` | 10.8 ✓ | Primary button, the wordmark tile's neighbour, selected segment |
| `yellow` | `cream` / white | 1.4 ✗ | **Never.** This is the rule the whole change turns on |
| `yellow` | `yellow-dark` | 3.7 — | Icon detail and shape cut-outs only, never text |
| `yellow-deep` | `ink` | 7.7 ✓ | Hover and press on a primary fill, filled chips |
| `yellow-deep` | `cream` | 1.9 ✗ | **Never** |
| `yellow-dark` | `cream` | 5.3 ✓ | Pressed fills, chat bubbles, a tinted surface carrying light text |
| `yellow-dark` | `ink` | 2.9 ✗ | **Never** — this is why a pressed fill flips its label to cream |
| `yellow-wash` | `yellow-dark` | 5.4 ✓ | Quiet button, tab pill |
| `yellow-wash` | `ink` | 15.6 ✓ | Selected row |
| `#FFFDF5` (field top) | `ink` | 16.4 ✓ | Body copy on light |
| `#FFF1CE` (field bottom) | `ink` | 15.4 ✓ | Body copy at the worst point of the light field |
| `#FFF1CE` (field bottom) | `muted` | 4.6 ✓ | Captions and eyebrows on light — **the figure that sets the bottom stop** |
| `#FFEFC4` (field bottom, first draft) | `muted` | 4.5 ✗ | **Never** — 4.48:1. The reason the stop was lightened to `#FFF1CE` |
| `#FFF1CE` (field bottom) | `yellow-dark` | 5.3 ✓ | Links and tinted glyphs on light |
| `#FFF1CE` (field bottom) | `yellow` | 1.5 ✗ | **Never** — this is why the tint does not flip to yellow on light |
| `cream` | `yellow-dark` | 5.3 ✓ | Links on a cream panel |
| `ink` | `cream-dark` | 14.2 ✓ | Body copy on dark |
| `ink` | `muted-dark` | 6.1 ✓ | Captions and eyebrows on dark |
| `ink` | `yellow` | 10.8 ✓ | Links and tinted glyphs on dark |
| `ink` | `yellow-dark` | 2.9 ✗ | **Never** — the tint must flip |
| `#302F2C` (dark field, top) | `muted-dark` | 4.7 ✓ | The worst point on the dark field |
| `#302F2C` (dark field, top) | `yellow` | 8.4 ✓ | Tinted glyphs at the worst point on dark |
| `ink-raised` | `cream-dark` | 13.0 ✓ | Body copy in a dark card |
| `ink-raised` | `muted-dark` | 5.5 ✓ | Captions in a dark card |
| `ink-raised` | `yellow` | 9.9 ✓ | Tinted glyphs in a dark card |
| `alert` | white | 5.3 ✓ | Destructive button on light |
| `ink` | `alert` | 3.2 ✗ | Use `alert-light` on dark |
| `ink` | `alert-light` | 5.7 ✓ | Destructive text and fills on dark |

**Why yellow needs a three-step ramp where gold needed none.** Gold was rationed to one element per
view and never carried a state, so one value was enough. A brand colour has to survive hover, press,
a link, a glyph and a wash — five jobs at five different lightnesses. Yellow is the most
gamut-limited hue in sRGB, so those steps cannot be found by adding chroma; they are found by
dropping lightness, which is why `yellow-dark #8A5A00` looks like bronze rather than yellow. **That
is correct.** A tint that still looks yellow on a light field does not exist. Do not try to lighten
`yellow-dark` toward yellow — it fails AA at every step between here and `#E0A200`.

**The one rule that prevents most mistakes:** yellow is a light colour. It can be a *fill* in both
fields, always with an `ink` label. It can be a *tint* only on dark. On light it steps all the way
down to `yellow-dark`, and takes a `cream` label when it does.

---

## Amendments to the rest of `VOLLER.md`

### §4.1 — the gold rule becomes the yellow rule

Read `gold` as `yellow` throughout §4.1. The rule is unchanged and still the strongest in the system:
**yellow appears exactly once per view, on the element that performs the core action.** Two additions
the new palette forces:

- **The field does not spend the ration.** `--field-light` is the brand hue at roughly 6% strength.
  It is a surface, not the brand colour. A page on the yellow field still gets its one full-strength
  yellow element.
- **`yellow-wash` does not spend it either.** Same reason. A tab pill in `yellow-wash` with a
  `yellow-dark` glyph is not the yellow element; a filled `yellow` tab is.

The product table in §4.1 stands, with Voller's row rewritten:

| Product | Core action | Yellow element |
|---|---|---|
| Voller | shipping apps | the app tile in the V, and the wordmark tile |

And §4.2 is unchanged — yellow still stops at the app boundary. **Yellow does not appear in product
UI.** Inside a product, the app's `accent` does that job.

### §6 — appearance variants

The mapping in §6 changes because the subject is now ink rather than cream. For the Voller mark:

| Variant | Field | The V | The tile |
|---|---|---|---|
| Light / Any | `--field-light`, opaque | `ink` | `yellow` |
| Dark | **transparent** | `cream-dark` | `yellow` |
| Tinted | `#000000`, opaque | `#D2D2D2` | `#FFFFFF` |

**The dark variant inverts the V, it does not just drop the background.** An ink V on a transparent
field composites to invisible against the system's dark backdrop. The tile stays yellow in dark
because it is a fill, and fills do not change between fields.

Tinted mapping for the house palette, replacing the green-and-gold list: `yellow → #FFFFFF` (the
action stays brightest), `yellow-dark → #454545`, `cream → #D2D2D2`, `ink → #2B2B2B`, glass ring
`.13`/`.26`.

### §7 — wordmark, icon and favicon

The wordmark CSS is unchanged except the tile token:

```css
.voller-wordmark i { background: var(--yellow); }
```

The mark itself is the glyph form: **no disc, no container.** One ink V on the pale yellow field with
the yellow tile as the full stop, matching the four app icons, which are all containerless glyphs on
their own pale accent fields. The glass ring (§3 primitive 4) has no role in the house mark now that
it has no circular subject — it stays in the system for circular *imagery* on the web.

**The favicon simplification inverts.** Below 32px: full-bleed `yellow`, `ink` channel only, wider
stroke, and the tile dropped. The old simplification dropped the tile because it turned to mud at
3px; the new one also has to drop the pale field, because a pale yellow field with a thin ink V
disappears in a tab strip. Full-bleed yellow with an ink V is the most legible 16px mark in the
family.

### §11 — don'ts, amended

Replace the two colour lines with:

- No `#82BA51`, `#69A63C`, `#3F6B27`, `#FECA00`, `#F0C21C`, `#00A000`, `#111827`, `#EF4444` or
  `#8A8A8A` in either field — in **house** surfaces. Meal Planner's and UnPickle's `accent` family is
  the sanctioned home of the greens.
- No yellow on anything other than the one action per view — and **no yellow in product UI at all**.
- No light label on `yellow` or `yellow-deep`, and no `ink` label on `yellow-dark`.
- No `yellow` as a tint on light. That is `yellow-dark`.
- No yellow fill on the yellow field without a hairline or an ink label to define its edge.
- No cream cut-out inside a yellow shape. Cut-outs in the house palette are `ink`.

---

## Find and replace, per repo

Ordered so that no substitution collides with a later one.

| Find | Replace | Note |
|---|---|---|
| `#FECA00` | `#FFC400` | The gold tile in every wordmark and mark |
| `#F0C21C` | `#FFC400` | The older gold, if any repo still carries it |
| `--gold` | `--yellow` | Token rename |
| `#82BA51` / `--green` | `#FFC400` / `--yellow` in house surfaces; `#2BBF4E` / `--accent` in Meal Planner and UnPickle product UI | **Not mechanical.** Check each site: is it chrome (house) or a product control (accent)? |
| `#69A63C` / `--green-deep` | `#E0A200` / `--yellow-deep` in house; `--accent` ramp in app | Same judgement |
| `#3F6B27` / `--green-dark` | `#8A5A00` / `--yellow-dark` in house; `--accent-deep` in app | Same judgement |
| `linear-gradient(160deg, #FCFCF6 0%, #F1F0E4 100%)` | `linear-gradient(160deg, #FFFDF5 0%, #FFF1CE 100%)` | House field only. App fields (§1.2) are untouched |
| `rgba(20, 40, 10, .10)` | `rgba(60, 40, 0, .12)` | Hairline cast |
| `#FCFCF6` as a flat page background | `#FFFDF5` | Flat-field alternative |
| `#F6F1E3` inside a brand shape | `#1B1B19` | The cut-out flip. Cream panels elsewhere stay cream |

`#F6F1E3`, `#EFE9DA`, `#1B1B19`, `#24231F`, `#6E6E6B`, `#A09892`, `#C4382C` and `#E8705F` are
unchanged. So is every value in §1.2. So are all four app icons.

## Files to re-export

- `voller-icon.svg` — glyph form, pale yellow field, ink V, yellow tile
- `favicon.svg` — full-bleed yellow, ink V, no tile
- `favicon.ico` — 32 + 16 from the above
- `apple-touch-icon.png` — 180, opaque, light variant
- `icon-512.png` — web manifest
- `og-image.png` — 1200 × 630
- `voller-mark.svg` — transparent, for light surfaces
- `voller-logo.svg` / `voller-logo-dark.svg` — outline only if a partner cannot load the stack;
  the wordmark still ships as CSS

The four `<App>/source-{light,dark,tinted}.svg` masters are **not** affected. Their palettes come
from §1.2, which this file does not touch.
