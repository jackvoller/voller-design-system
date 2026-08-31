# Voller design system

Canonical source of truth for colour, type, spacing, components and app icons across
**UnPickle (studio)**, **Meal Planner**, **UnJumble**, **Riverly** and **voller.uk**.

| File | What |
|---|---|
| [`VOLLER.md`](VOLLER.md) | **The spec.** The one file other repos point at. |
| [`MIGRATION.md`](MIGRATION.md) | Per-repo find/replace checklist and migration state. |
| `voller-design-system-reference.html` | Live component reference — open in a browser. **In-app colour is stale**; see below. |
| `voller-in-app-colour-reference.dc.html` | In-app colour: the six accent tokens, four screens light and dark, one component set in two accents. |
| `<App>/` | App icon sets: 3 PNGs + `Contents.json` + SVG masters. |
| `BRAND.md` | Retired stub. Superseded by `VOLLER.md`. |

Raw URL for consuming repos:

    https://raw.githubusercontent.com/jackvoller/voller-design-system/main/VOLLER.md

---

# App icons — drop-in

Each folder is a complete `AppIcon.appiconset` **plus vector source**.

## Installing

Copy the three PNGs and `Contents.json` over the existing
`<Target>/Assets.xcassets/AppIcon.appiconset/`, then clean build. Leave the `.svg` files out of the
asset catalog — Xcode does not read SVG for app icons.

No edits needed. Do not re-encode, resize, flatten or add a background to any PNG.

| App | Destination |
|---|---|
| MealPlanner | `MealPlan/Assets.xcassets/AppIcon.appiconset/` |
| UnPickle | `<Target>/Assets.xcassets/AppIcon.appiconset/` |
| UnJumble | `<Target>/Assets.xcassets/AppIcon.appiconset/` |
| Riverly | `<Target>/Assets.xcassets/AppIcon.appiconset/` |

## The three variants

All 1024 × 1024 PNG. Xcode reads PNG only — `.ico` has no role in an appiconset.

- **Light / Any** — fully opaque. Also the fallback on iOS 17 and earlier.
- **Dark** — **transparent background, by design.** Apple composites its own backdrop behind it, which is what keeps these consistent with every other app on the home screen. If a tool reports "missing background" or offers to flatten it, decline.
- **Tinted** — grayscale art on solid black, opaque. The system applies the user's tint to the luminance.

## Editable source

`source-light.svg`, `source-dark.svg`, `source-tinted.svg` in each folder are the masters — plain SVG,
1024 × 1024, no external references, every shape a named primitive. Open them in Figma, Illustrator,
Sketch, Inkscape or a text editor. There is no `.fig` or `.ai` original; the SVG **is** the source.

To change an icon: edit the SVG, then re-export the PNG at 1024 × 1024 with no scaling. Keep the
dark variant's background transparent on export.

The full authoring environment (construction grids, size ladders, every direction explored) lives in
`Brand Icon System.dc.html` and `Family Export.dc.html` in the design project.

## Common mistakes

- Flattening the dark variant onto a dark colour. Breaks system consistency; leave the alpha.
- Adding an `ios-marketing` 1024 entry *and* a universal one. The `Contents.json` here is the modern single-size form — use it as-is.
- Leaving the tinted slot filenameless. That's the Xcode "unassigned image" warning; all three are filled here.
- Renaming files without updating `Contents.json`. Copy both together.

Spec and rationale: `VOLLER.md`, in this folder. (`BRAND.md` is a retired stub.)
