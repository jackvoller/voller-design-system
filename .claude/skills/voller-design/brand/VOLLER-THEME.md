> **Superseded — history only. Do not follow this file.**
>
> This is the retired `voller_website/brand/VOLLER-THEME.md`, kept in this skill so its
> decisions remain readable. **Every value in it may be wrong.** It predates the contrast
> fixes: it still shows a light label on `green` (2.3:1) and `#8A8A8A` as `--muted`
> (3.4:1 on the light field).
>
> The spec is `VOLLER.md` at the root of this repo — three levels up from this skill, or
> https://raw.githubusercontent.com/jackvoller/voller-design-system/main/VOLLER.md

# Voller — website theme

The house brand for UnPickle, Meal Planner, UnJumble and Riverly. This file is the web-side
companion to `Brand-Icons/BRAND.md`: same six colours, same geometry, applied to pages.

Drop this file at the repo root. Everything below is copy-pasteable — no build step, no dependencies
beyond one webfont.

---

## 1. Colour

Six values, inherited unchanged from the app icons. Do not add a seventh.

| Token | Hex | Role on the web |
|---|---|---|
| `--green` | `#82BA51` | Primary action, primary fills |
| `--green-deep` | `#69A63C` | Interior detail on green shapes only |
| `--green-dark` | `#3F6B27` | Links, hover/pressed, detail on gold |
| `--gold` | `#F0C21C` | The action colour — rationed, see §4 |
| `--cream` | `#F6F1E3` | Light panels, negative space |
| `--cream-dark` | `#EFE9DA` | Text and surfaces on dark |
| `--ink` | `#1B1B19` | Body text on light, dark sections |
| `--muted` | `#8A8A8A` | Secondary text, both fields |

```css
:root {
  --green: #82BA51;
  --green-deep: #69A63C;
  --green-dark: #3F6B27;
  --gold: #F0C21C;
  --cream: #F6F1E3;
  --cream-dark: #EFE9DA;
  --ink: #1B1B19;
  --muted: #8A8A8A;

  --field-light: linear-gradient(160deg, #FCFCF6 0%, #F1F0E4 100%);
  --field-dark: linear-gradient(160deg, #302F2C 0%, #1B1B19 100%);
  --hairline: rgba(20, 40, 10, .10);
  --radius-card: 20px;
  --radius-control: 10px;
  --radius-icon: 23.5%;   /* iOS squircle approximation — icons only */
}
```

Rules:

- Green is never a gradient. Flat fills only.
- The only two gradients in the system are `--field-light` and `--field-dark`. No others.
- No new hues. If something needs to be distinguished, move lightness inside the green ramp.
- Page background: `--field-light`, or flat `#FCFCF6`.
- Dark sections: `#1B1B19` with `--cream-dark` text.

---

## 2. Type

One family. Never pair two.

- **DM Sans** — 400, 500, 600. Weights 700+ unused.

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet">
```

```css
body {
  font-family: 'DM Sans', ui-sans-serif, system-ui, -apple-system, sans-serif;
  color: var(--ink);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
```

| Step | Size | Weight | Tracking |
|---|---|---|---|
| Display | 44px | 600 | -0.02em |
| H1 | 34px | 600 | -0.02em |
| H2 | 22px | 600 | -0.02em |
| Body | 16px | 400 | 0 |
| Small | 14px | 400 | 0 |
| Caption | 12px | 400 | 0 |
| Eyebrow / spec label | 11–12px | 400 | uppercase, `.1em`, monospace, `--muted` |

- Long-form copy gets `text-wrap: pretty`.
- Monospace (`ui-monospace, 'SF Mono', Menlo, monospace`) is only for eyebrows, specs and code — never body copy.

---

## 3. Wordmark

**The word carries the name. The icon is not part of the wordmark.**

`Voller` set in DM Sans 600 at `-0.02em`, followed by one gold app tile acting as a full stop. The tile
is the only place gold appears in the header, and it's the hint at what Voller does: it ships apps.

```html
<a class="voller-wordmark" href="/">
  <span>Voller</span>
  <i aria-hidden="true"></i>
</a>
```

```css
.voller-wordmark {
  display: inline-flex;
  align-items: flex-end;
  gap: .2em;                 /* 0.2 × cap height */
  font-size: 22px;           /* header size; 64px hero, 32px mid */
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: .9;
  color: var(--ink);
  text-decoration: none;
  border: 0;
}
.voller-wordmark i {
  width: .33em;              /* 0.33 × cap height */
  height: .33em;
  border-radius: 23.5%;
  background: var(--gold);
  flex: none;
}
.voller-wordmark.on-dark { color: var(--cream-dark); }
```

Geometry, if you rebuild it anywhere else: **tile = 0.33 × cap height, gap = 0.2 × cap height, tile
radius 23.5%, tile baseline-aligned with the word.**

Do not:

- put the circular icon next to the wordmark in a header — they are two focal points saying the same thing;
- letterspace it positively, set it in 700, or set it in caps;
- recolour the tile (it is always `--gold`), or add a second tile.

The footer is the one permitted place where icon and wordmark sit together, at ~34px icon / 18px word,
where the icon reads as a stamp rather than a headline.

---

## 4. The gold rule

Gold appears **once per view**, on the primary action or the thing the user came to do.

In the header that once is the wordmark tile — so a header that also contains a gold button is wrong.
Gold is not a warning colour, not a highlight, not decoration. If two golds meet, one becomes
`--green-dark`.

---

## 5. Icon and favicon

The icon is a pure symbol: green disc inside a glass ring, cream V channel on the system's 35° axis,
one gold app tile resting in the V. Built on a 1024 grid with a 96pt safe margin, 780pt optical
footprint — the same silhouette as Riverly and Meal Planner, so it reads as the parent of the family.

Three appearance variants ship for the app-icon slots (`source-light.svg`, `source-dark.svg`,
`source-tinted.svg` + 1024 PNGs). For the web you need two files:

### `voller-icon.svg` — full icon, 33px and up

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024" role="img" aria-label="Voller">
  <defs>
    <linearGradient id="field" gradientUnits="userSpaceOnUse" x1="287.4" y1="-104.9" x2="736.6" y2="1128.9">
      <stop offset="0" stop-color="#FCFCF6"/><stop offset="1" stop-color="#F1F0E4"/>
    </linearGradient>
    <radialGradient id="gloss" gradientUnits="userSpaceOnUse" cx="307.2" cy="0" r="1228.8" gradientTransform="matrix(1 0 0 0.75 0 0)">
      <stop offset="0" stop-color="#fff" stop-opacity=".7"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="disc"><circle cx="512" cy="512" r="376"/></clipPath>
  </defs>
  <rect width="1024" height="1024" fill="url(#field)"/>
  <circle cx="512" cy="512" r="404" fill="rgba(255,255,255,.62)" stroke="rgba(255,255,255,.9)" stroke-width="5"/>
  <circle cx="512" cy="512" r="376" fill="#82BA51"/>
  <g clip-path="url(#disc)">
    <path d="M 166 250 L 512 744 L 858 250" fill="none" stroke="#F6F1E3" stroke-width="170" stroke-linejoin="round" stroke-linecap="round"/>
    <rect x="430" y="546" width="164" height="164" rx="38.5" fill="#F0C21C"/>
  </g>
  <rect width="1024" height="1024" fill="url(#gloss)"/>
</svg>
```

Mask it with `border-radius: 23.5%` wherever it appears as an app tile.

### `favicon.svg` — 32px and below

Below 32px the gold tile falls under 3px and turns to mud, and the ring and field disappear. The
favicon is therefore a **documented simplification**, not a different mark: full-bleed green, cream
channel only, wider stroke.

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024" role="img" aria-label="Voller">
  <rect width="1024" height="1024" rx="240" fill="#82BA51"/>
  <path d="M 150 230 L 512 760 L 874 230" fill="none" stroke="#F6F1E3" stroke-width="212" stroke-linejoin="round" stroke-linecap="round"/>
</svg>
```

### Head markup

```html
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png"><!-- 180×180, full icon, no rounding -->
<meta name="theme-color" content="#FCFCF6" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#1B1B19" media="(prefers-color-scheme: dark)">
```

Export ladder: `favicon.ico` (32 + 16, simplified), `favicon.svg` (simplified),
`apple-touch-icon.png` 180 (full icon, square, no transparency), `icon-512.png` (full icon, for the
web manifest), `og-image.png` 1200×630 (icon on `--field-light`, wordmark beneath).

---

## 6. Surfaces and components

```css
.card {
  background: #FFFFFF;              /* or var(--cream) */
  border: 1px solid var(--hairline);
  border-radius: var(--radius-card);
  padding: 28px;
}
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 11px 18px;
  border: 0; border-radius: var(--radius-control);
  background: var(--green); color: #FCFCF6;
  font: 500 15px/1 'DM Sans', sans-serif; letter-spacing: -0.01em;
  cursor: pointer;
}
.btn:hover { background: var(--green-dark); }
.btn-quiet {
  background: transparent; color: var(--green-dark);
  box-shadow: inset 0 0 0 1px var(--hairline);
}
a { color: var(--green-dark); text-decoration: none; border-bottom: 1px solid rgba(63,107,39,.3); }
a:hover { color: var(--green); }
```

- Separate surfaces with a 1px `--hairline` or a background step. **No drop shadows for hierarchy.**
- Circular imagery (avatars, screenshots in circles) gets the glass ring: a ring at `r + 7%`,
  `rgba(255,255,255,.62)` fill, `rgba(255,255,255,.9)` 1–2px stroke. On dark, `.10` / `.22`.
- App icons on the page are shown at 23.5% radius, never circular, never with a shadow.

---

## 7. Layout

- 8px spacing base. Section rhythm 24 / 32 / 56 / 72px.
- Flex or grid with `gap` for any group of siblings — never margin-per-child.
- Content measure: 640–720px for prose.

---

## 8. Don'ts

- No aggressive gradient backgrounds; the two field gradients are the only ones.
- No emoji.
- No rounded container with a coloured left border.
- No second typeface, no Inter, no `#00A000` (the old web green) and no `#111827` (the old cool ink).
- No gold on anything other than the one action per view.
- No icon-plus-wordmark in the header.

---

## 9. Asset checklist

| File | What | Where it's used |
|---|---|---|
| `voller-icon.svg` | Full icon, 1024 | Page, OG source, ≥33px |
| `favicon.svg` | Simplified channel | Tab, ≤32px |
| `favicon.ico` | 32 + 16, simplified | Legacy tab |
| `apple-touch-icon.png` | 180, full icon, opaque | iOS home screen |
| `icon-512.png` | Full icon | Web manifest |
| `og-image.png` | 1200×630 | Social cards |
| `source-{light,dark,tinted}.svg` | App-icon masters | Xcode `AppIcon.appiconset` |

The wordmark ships as CSS (§3), not as an image. Outline it to vector only for print or for a partner
who can't load the webfont.
