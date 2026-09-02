# Voller design system

Canonical source of truth for colour, type, spacing, components and app icons across
**UnPickle (studio)**, **Meal Planner**, **UnJumble**, **Riverly** and **voller.uk**.

| File | What |
|---|---|
| [`VOLLER.md`](VOLLER.md) | **The spec.** The one file other repos point at. Wins on any disagreement. |
| [`MIGRATION.md`](MIGRATION.md) | Per-repo find/replace checklist, migration state, and the open items. |
| `app-icons/<App>/` | **The current app icon sets**: 3 PNGs + `Contents.json` + SVG masters. |
| `Design system color flexibility/` | Archive of the design session that produced the yellow palette and the new icon family, including `brand-yellow/` — the re-exported Voller house ladder. A record, not a spec. |
| `voller-design-system-reference.html` | Live component reference — open in a browser. **Stale on colour and on icons**; see below. |
| `voller-in-app-colour-reference.dc.html` | In-app colour: the six accent tokens, four screens light and dark, one component set in two accents. Current, bar one panel. |
| `<App>/` | **Superseded** green-and-gold icon sets. Kept until the new ones are promoted — do not copy from these. |
| `BRAND.md` | Retired stub. Superseded by `VOLLER.md`. |

The house palette is **yellow** (`#FFC400`) and is **only for voller.uk** as of 2 Sep 2026. Each
product app publishes a **complete palette in its own hue** — sixteen tokens (six accent + ten
neutral), not six. Apps do not inherit house `cream`, `muted`, `ink`, `alert`, or house hairline.

**`VOLLER.md` is the central spec: rules and roles, not a hex registry.** Each app owns its theme
file. `VOLLER.md` §1.2 defines the sixteen roles and how to derive them; each app's repo holds the
actual hex values.

Raw URL for consuming repos:

    https://raw.githubusercontent.com/jackvoller/voller-design-system/main/VOLLER.md

---

# App icons — drop-in

`app-icons/<App>/` is a complete `AppIcon.appiconset` **plus vector source**.

**Two of these are not ready to ship.** UnPickle's zigzag crosses the 96pt safe margin, and
Riverly's N and S are live text that must be outlined before Xcode sees them (`MIGRATION.md` §9.4).
Fix those before copying either one.

## Installing

Copy the three PNGs and `Contents.json` over the existing
`<Target>/Assets.xcassets/AppIcon.appiconset/`, then clean build. Leave the `.svg` files out of the
asset catalog — Xcode does not read SVG for app icons.

No edits needed. Do not re-encode, resize, flatten or add a background to any PNG.

| App | Source | Destination |
|---|---|---|
| MealPlanner | `app-icons/MealPlanner/` | `MealPlan/Assets.xcassets/AppIcon.appiconset/` |
| UnPickle | `app-icons/UnPickle/` | `<Target>/Assets.xcassets/AppIcon.appiconset/` |
| UnJumble | `app-icons/UnJumble/` | `<Target>/Assets.xcassets/AppIcon.appiconset/` |
| Riverly | `app-icons/Riverly/` | `<Target>/Assets.xcassets/AppIcon.appiconset/` |

## The three variants

All 1024 × 1024 PNG. Xcode reads PNG only — `.ico` has no role in an appiconset.

- **Light / Any** — fully opaque, the app's own pale accent field with the gloss baked in. Also the
  fallback on iOS 17 and earlier.
- **Dark** — **transparent background, by design.** Apple composites its own backdrop behind it, which is what keeps these consistent with every other app on the home screen. If a tool reports "missing background" or offers to flatten it, decline.
- **Tinted** — grayscale art on solid black, opaque. The system applies the user's tint to the luminance.

## Editable source

`source-light.svg`, `source-dark.svg`, `source-tinted.svg` in each folder are the masters — plain SVG,
1024 × 1024, no external references, every shape a named primitive. Open them in Figma, Illustrator,
Sketch, Inkscape or a text editor. There is no `.fig` or `.ai` original; the SVG **is** the source.

To change an icon: edit the SVG, then re-export the PNG at 1024 × 1024 with no scaling. Keep the
dark variant's background transparent on export.

The full authoring environment (construction grids, size ladders, every direction explored) lives in
the design project. The session that produced this family is archived in
`Design system color flexibility/`, in particular `App Icon Set - final.dc.html`.

## Common mistakes

- Flattening the dark variant onto a dark colour. Breaks system consistency; leave the alpha.
- Adding an `ios-marketing` 1024 entry *and* a universal one. The `Contents.json` here is the modern single-size form — use it as-is.
- Leaving the tinted slot filenameless. That's the Xcode "unassigned image" warning; all three are filled here.
- Renaming files without updating `Contents.json`. Copy both together.

Spec and rationale: `VOLLER.md` §3, §4.1 and §6, in this folder. (`BRAND.md` is a retired stub.)
