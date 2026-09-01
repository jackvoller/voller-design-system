> **Superseded — the assets in this folder are the old green-and-gold marks.**
>
> The house palette went yellow on 1 Sep 2026 (`VOLLER.md` §1) and the Voller mark was
> redrawn as a containerless glyph (§7). Nothing in `Voller/` or `web/` has been
> re-exported. The current ladder is `Design system color flexibility/brand-yellow/` at
> the repo root — eighteen files, not yet promoted here. See `MIGRATION.md` §9.3.
>
> The install instructions below are still correct; only the artwork is stale.

# Voller brand assets — drop-in

Generated from `VOLLER-THEME.md` (in this folder — the full theme spec: colour tokens, type scale, wordmark rules, head markup). Two folders: one for Xcode, one for the website.

## `Voller/` → Xcode

A complete `AppIcon.appiconset` plus vector source, matching the four existing app folders.

```
cp brand/Voller/*.png brand/Voller/Contents.json  <Target>/Assets.xcassets/AppIcon.appiconset/
```

Leave the `.svg` files out of the asset catalog — Xcode reads PNG only. Do not flatten
`AppIcon-Dark-1024.png`: its transparent background is deliberate, and iOS composites its own
backdrop behind it.

| File | Variant |
|---|---|
| `AppIcon-1024.png` | Light / any — opaque |
| `AppIcon-Dark-1024.png` | Dark — transparent background |
| `AppIcon-Tinted-1024.png` | Tinted — grayscale on black |
| `source-{light,dark,tinted}.svg` | Vector masters. Edit these, re-export at 1024 with no scaling. |

## `web/` → website repo

| File | Use |
|---|---|
| `voller-icon.svg` | Full icon, ≥33px. Mask with `border-radius: 23.5%` when shown as a tile. |
| `voller-mark.svg` | Same art, transparent background — for placing on cream or white surfaces. |
| `voller-logo.svg` / `voller-logo-dark.svg` | Wordmark as vector. Needs DM Sans 600 to render; prefer the CSS lockup in `VOLLER-THEME.md` §3 for the site itself and keep these for partners, print and anywhere the webfont can't load. |
| `favicon.svg` | Simplified mark — full-bleed green, channel only. Tab use, ≤32px. |
| `favicon-16.png`, `favicon-32.png`, `favicon-192.png` | Raster favicons. |
| `apple-touch-icon.png` | 180×180, full icon, opaque, square — iOS rounds it itself. |
| `icon-512.png` | Web manifest / PWA. |

`favicon.ico` isn't included — it's a Windows container format. Either serve `favicon.svg` +
`favicon-32.png` (all current browsers) or wrap `favicon-16.png` and `favicon-32.png` into an `.ico`
with any converter.

Head markup, CSS tokens, type scale and the wordmark rules are in `VOLLER-THEME.md`, alongside this file.

## What changed from the old assets

- `#00A000` → brand green `#82BA51`; cool ink `#111827` → `#1B1B19`.
- Five squares → the V channel on the system's 35° axis, inside the glass ring and green disc, on the
  light field gradient with the baked gloss overlay — same construction as UnPickle, Meal Planner,
  UnJumble and Riverly.
- Gold now appears exactly once, on the app tile resting in the V — the shape that performs Voller's
  verb (shipping apps).
- Inter dropped; one family (DM Sans) across icon lockups, wordmark and web.
- Icon and wordmark are now separate marks: the word never sits beside the disc in a header.
