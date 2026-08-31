> **Superseded — history only. Do not follow this file.**
>
> This is the retired `Brand-Icons/BRAND.md`, kept in this skill so its
> decisions remain readable. **Every value in it may be wrong.** It predates the contrast
> fixes: it still shows a light label on `green` (2.3:1) and `#8A8A8A` as `--muted`
> (3.4:1 on the light field).
>
> The spec is `VOLLER.md` at the root of this repo — three levels up from this skill, or
> https://raw.githubusercontent.com/jackvoller/voller-design-system/main/VOLLER.md

# UnPickle Design Language

The shared visual system for UnPickle, Meal Planner, UnJumble and Riverly — app icons, product UI and web.

Point other repos at this file. It is written to be followed without seeing the original designs.

---

## 1. Colour

Six values. Do not introduce a seventh without adding it here first.

| Token | Hex | Role |
|---|---|---|
| `green` | `#82BA51` | The brand. Primary subject colour, fills, primary buttons. |
| `green-deep` | `#69A63C` | Interior detail on green shapes only (ridges, grilles). Never a fill on its own. |
| `green-dark` | `#3F6B27` | Detail that must read *on top of* gold. Thwarts, dividers, pressed states. |
| `gold` | `#F0C21C` | The action colour. See §3 — it is rationed. |
| `cream` | `#F6F1E3` | Light surfaces, negative space inside a shape, water. |
| `cream-dark` | `#EFE9DA` | The cream substitute on dark backgrounds. |

**Light field gradient** (icon and page backgrounds): `linear-gradient(160deg, #FCFCF6 0%, #F1F0E4 100%)`

**Dark field gradient** (previews and UI only — never baked into a shipped dark icon, see §6): `linear-gradient(160deg, #302F2C 0%, #1B1B19 100%)`

**Gloss overlay** — every light tile carries one overlay above the art, and it *is* baked into the exported PNG:

```css
background: radial-gradient(120% 90% at 30% 0%, rgba(255,255,255,.7) 0%, rgba(255,255,255,0) 55%);
box-shadow: inset 0 1px 0 rgba(255,255,255,.9);
```

This is the only lighting effect in the system. It belongs to the *tile*, never to the subject (§4). Dark variants omit it — the background is transparent, so there is no field to catch light; the system's own backdrop supplies it.

Rules:
- Green is never a gradient. Flat fills only.
- Gold never touches gold. If two gold elements meet, one becomes `green-dark`.
- No new hues. If you need a distinguishing colour for a new app, shift lightness within the green ramp — do not move to another hue family.

---

## 2. Geometry

Everything is built on a **1024 × 1024** grid with a **96pt safe margin** (an 832pt box).

- **Optical footprint: 720–812pt.** All four icons live in this band. Do not fill the safe box — and do not match footprints numerically, match them optically: a solid filled shape reads larger than a linear one at the same measurement. Shipped values: UnPickle 730, Meal Planner 812 wide / 636 tall, UnJumble 720, Riverly 780.
- **Symmetry:** symmetric about `x=512` unless the subject is on an axis (see below).
- **The 35° axis.** Any subject that reads as "travelling" or "at rest at an angle" sits at 35° — the pickle body, the boat hull. It is the single diagonal in the system; don't invent a second one.
- **Corner radius: 23.5%** of the tile for icon masks (iOS squircle approximation).

### Primitives

Build subjects from these four. Nothing else.

1. **Capsule** — a rect with `rx = width/2`. The pickle body, the mic head, cutlery handles, the plate rim.
2. **Circle** — the plate, the globe.
3. **Band** — a rect or thick stroke crossing a shape edge to edge. The pickle's wrapper, the mic's gold ring, the river.
4. **Glass ring** — a circle at ~`r+50` behind a circular subject, filled `rgba(255,255,255,.62)` with a `rgba(255,255,255,.9)` 6–7pt stroke. On dark: `.10` fill, `.22` stroke. This is the token that ties the circular icons together — keep it.

### Stroke weights

Four weights. Nothing between them.

| Weight | Use |
|---|---|
| 24–32pt | Fine detail — checkmarks, list rules |
| 36pt | Structure — the mic yoke |
| 78–86pt | Bands and secondary channels |
| 150–190pt | Primary channels |

Joins and caps are `round` except where a shape must read as cut or folded, which is `miter` + `butt`.

---

## 3. The gold rule

**Gold appears exactly once per icon, on the element that performs the app's core action.**

This is the strongest rule in the system and the one that makes unrelated subjects feel related.

| App | Core action | Gold element |
|---|---|---|
| UnPickle | unwrapping | the ribbon crossing and unwinding off the body |
| Meal Planner | planning / ticking off | the three checkmarks |
| UnJumble | recording | the band on the mic head |
| Riverly | navigating | the boat hull |

For a new app: name the verb first, then find the one shape that performs it. If you can't name the verb, the icon isn't designed yet.

---

## 4. Drawing style

- **Flat vector only — this applies to the subject.** No bevels, inner shadows, gloss, drop shadows or 3D rendering on any drawn shape. If a subject arrives as a glossy 3D render, redraw it flat — UnJumble's mic was rebuilt this way. The one permitted lighting effect is the tile-level gloss overlay in §1, which sits above the art and belongs to the field, not the drawing.
- **No texture.** No continents, no coastlines, no hatching. Detail that dies below 120pt is detail that shouldn't exist.
- **One focal point.** A second competing element gets cut. Riverly's compass rose was removed for this reason.
- **One weight per edge.** Not three concentric outlines where one will do.
- **Legibility floor: 29pt.** Every icon must survive it. Test there, not at 1024.

---

## 5. Motion and implied direction

If a subject implies travel, the whole composition must agree:

- The path it travels on and the subject's own axis must be **parallel**, not crossing.
- Trailing marks (wakes, ripples, motion lines) sit **behind** the subject **on the path**, never on the surrounding field.
- A subject may be **hinged up to 20°** off the path to imply turning. More than that reads as a mistake.

---

## 6. Appearance variants (iOS 18+ / iPadOS 18+)

Three variants per app, all at 1024 × 1024.

**Light / Any** — fully **opaque**. Fills the square. No alpha. This is also the fallback for older OS versions.

**Dark** — **transparent background.** Do not pick a dark colour and do not bake a gradient. Apple's guidance is to supply the art on transparency and let the system composite its own backdrop; this is what keeps you consistent with every other app, including future changes to that backdrop. Adjust the art itself for contrast (swap `cream` → `cream-dark`, drop glass-ring alpha to `.10`/`.22`) but ship the background as alpha.

**Tinted** — grayscale art on a solid `#000000` background, fully opaque. The system applies the user's tint to the luminance, so map for contrast, not for hue: `gold → #FFFFFF` (the action stays brightest), `cream → #D2D2D2`, `green → #8E8E8E`, `green-deep → #767676`, `green-dark → #454545`, glass ring to `.13` fill / `.26` stroke.

All three variants are 1024 × 1024 PNG and each app folder in `Brand-Icons/` ships a matching `Contents.json` — copy folder contents wholesale, no edits.

Xcode reads **PNG** only. `.ico` is a Windows/favicon format and has no role in an `.appiconset` — use it only for a website favicon or a Windows build.

---

## 7. Web

The same system, applied to pages.

### Surfaces
- Page background: the light field gradient, or flat `#FCFCF6`.
- Cards and panels: `#FFFFFF` or `cream`, radius 16–20px, no drop shadow — separate with a 1px `rgba(20,40,10,.10)` border or a background step.
- Dark sections: `#1B1B19` with `cream-dark` text.

### Type
- One sans for everything. Do not pair two families.
- Scale: 44 / 32 / 22 / 16 / 14 / 12px. Headings 600 weight and `letter-spacing: -0.02em`; body 400 at `line-height: 1.6`.
- Long-form copy gets `text-wrap: pretty`.
- Use a monospace only for labels, specs and eyebrows — uppercase, 11–12px, `letter-spacing: .1em`, colour `#8A8A8A`.

### Colour in UI
- `green` is the primary action. `green-dark` for hover/pressed.
- **`gold` obeys the icon rule:** at most one gold element per view, on the primary action or the thing the user came to do. It is not a warning colour, not a highlight colour, and not decoration.
- Body text `#1B1B19` on light, `#EDEDED` on dark. Secondary `#8A8A8A` on both.
- Links: `green-dark` default, `green` on hover. Always define both — never leave links at browser default.

### Layout
- 8px spacing base; section rhythm 24 / 32 / 56 / 72px.
- Flex or grid with `gap` for any group of siblings. Never margin-per-child.
- Circular imagery gets the glass ring treatment from §2 so the web echoes the icons.

### Don'ts
- No aggressive gradient backgrounds — the two field gradients above are the only ones.
- No emoji.
- No rounded container with a coloured left border.
- No drop shadows for hierarchy; use surface steps.

---

## 8. Adding a fifth app

1. Name the verb. That decides where gold goes.
2. Choose the subject and build it from §2 primitives only. If it needs a shape that isn't there, simplify the subject.
3. Fit it to a 720–812pt optical footprint on the 1024 grid.
4. Put gold on the verb, once.
5. Check it at 29pt.
6. Line it up against the existing four before shipping. It should be obvious they're siblings without being told.

---

## 9. Source of truth

- `Brand-Icons/<App>/source-{light,dark,tinted}.svg` — **the vector masters.** Plain SVG, 1024 × 1024, self-contained. Edit these; re-export PNGs from them. There is no `.fig`/`.ai`/`.sketch` original — the SVG is the source.
- `Brand-Icons/<App>/` — also holds the three exported 1024 PNGs and a ready `Contents.json`. Copy the PNGs + JSON into `Assets.xcassets/AppIcon.appiconset/`; leave the SVGs out of the catalog.
- `Brand Icon System.dc.html` — full spec: every direction explored, construction grids, layer stacks, size ladders, and the reasoning behind each decision.
- `Family Export.dc.html` — the live artboards, all four apps × three variants. **The only place PNGs are exported from.** If you add an app, add its tiles here rather than starting a separate export file — per-app artboards go stale.
