# Voller migration — per-repo checklist

Spec: **`VOLLER.md`**. Live reference: **`voller-design-system-reference.html`**.

In every repo, land the **token file** and the **tint** first. Most call sites then correct
themselves, and you can review the remainder against a working baseline.

Recommended order across the family: `voller_website` (smallest, becomes the reference) →
`unjumble` (one asset unlocks eight call sites) → `mealplanner` (one file) → `riverly` (specced
separately) → `studio` (largest).

## State — 31 Aug 2026

| Repo | State | Left |
|---|---|---|
| `voller_website` | **done**, on `main` | — |
| `unjumble` | **done** bar §2.3's gold row | Gold and the orange draft set: deferred by Jack |
| `mealplanner` | **done** bar the tag cull | Tag/pastel sets — needs a data migration, see §3 |
| `studio` | **done** bar the safelist | Safelist — needs a data migration, see §5 |
| `riverly` | **not started** | Blocked: its spec is in `Riverly Brand Review.dc.html`, which is not in this repo |

Each migrated repo built clean before commit (`xcodebuild` for the two iOS apps, `npm run build`
for studio). The three open items are all the same shape: a palette that looks like drift but is
actually persisted user choice. None is a find/replace.

---

## 0. Shared: the two-appearance accent

Every iOS app needs the tint to flip between fields (`VOLLER.md` §1.1). A static `Color` cannot,
so either set it in the asset catalog or use a dynamic `UIColor`.

**`Assets.xcassets/AccentColor.colorset/Contents.json`** — drop-in for all three iOS apps:

```json
{
  "colors": [
    {
      "idiom": "universal",
      "color": { "color-space": "srgb", "components":
        { "red": "0.247", "green": "0.420", "blue": "0.153", "alpha": "1.000" } }
    },
    {
      "idiom": "universal",
      "appearances": [{ "appearance": "luminosity", "value": "dark" }],
      "color": { "color-space": "srgb", "components":
        { "red": "0.510", "green": "0.729", "blue": "0.318", "alpha": "1.000" } }
    }
  ],
  "info": { "author": "xcode", "version": 1 }
}
```

`green-dark` on light, `green` on dark. This alone re-tints every stock control — `Done`, `Cancel`,
links, pickers, switches, `NavigationLink` chevrons — before you open a view file.

**Shared Swift token block** — copy into each app's theme file:

```swift
extension Color {
    static let brandGreen     = Color(red: 0.510, green: 0.729, blue: 0.318) // #82BA51
    static let brandGreenDeep = Color(red: 0.412, green: 0.651, blue: 0.235) // #69A63C
    static let brandGreenDark = Color(red: 0.247, green: 0.420, blue: 0.153) // #3F6B27
    static let brandGold      = Color(red: 0.941, green: 0.761, blue: 0.110) // #F0C21C
    static let brandCream     = Color(red: 0.965, green: 0.945, blue: 0.890) // #F6F1E3
    static let brandCreamDark = Color(red: 0.937, green: 0.914, blue: 0.855) // #EFE9DA
    static let brandInk       = Color(red: 0.106, green: 0.106, blue: 0.098) // #1B1B19
    static let brandInkRaised = Color(red: 0.141, green: 0.137, blue: 0.122) // #24231F

    /// green-dark on light, green on dark. The only token that flips.
    static let brandTint = Color(UIColor { t in
        t.userInterfaceStyle == .dark
            ? UIColor(red: 0.510, green: 0.729, blue: 0.318, alpha: 1)
            : UIColor(red: 0.247, green: 0.420, blue: 0.153, alpha: 1)
    })
    static let brandMuted = Color(UIColor { t in
        t.userInterfaceStyle == .dark
            ? UIColor(red: 0.541, green: 0.541, blue: 0.541, alpha: 1)   // #8A8A8A
            : UIColor(red: 0.431, green: 0.431, blue: 0.420, alpha: 1)   // #6E6E6B
    })
    static let brandAlert = Color(UIColor { t in
        t.userInterfaceStyle == .dark
            ? UIColor(red: 0.910, green: 0.439, blue: 0.373, alpha: 1)   // #E8705F
            : UIColor(red: 0.769, green: 0.220, blue: 0.173, alpha: 1)   // #C4382C
    })
}
```

**Filled-button pattern** — the same in both fields, `ink` label:

```swift
.buttonStyle(.borderedProminent)
.tint(.brandGreen)
.foregroundStyle(Color.brandInk)   // required — the default white label is 2.3:1
```

---

## 1. voller_website — ~6 edits

The reference implementation. Fix it first so the others have something correct to copy.

**`src/index.css`**

| Find | Replace | Why |
|---|---|---|
| `--muted: #8A8A8A;` | `--muted: #6E6E6B;` + add `--muted-dark: #8A8A8A;` | 3.4:1 on the light field |
| `background: var(--green); color: var(--ink)` in `.primary-action` — verify | ensure the label is `var(--ink)`, never `#FCFCF6` | Defect 01 |
| `--radius-card: 20px;` | keep; add `--radius-row: 16px;` | Row radius was unstated |
| `--sans: 'DM Sans', …` | `--sans: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, 'Segoe UI', Roboto, sans-serif;` | §2 |
| — | add `--hairline-dark: rgba(246,241,227,.12);` and `--ink-raised: #24231F;` | Dark spec |

**`index.html`** — delete the two DM Sans `<link>` tags (`preconnect` to fonts.gstatic.com and the
`css2?family=DM+Sans` stylesheet). One fewer render-blocking request.

**Resolve the gold double-spend.** The file header already admits it: the header wordmark tile spends
the gold, then the product accents spend it again. Per §4 the wordmark tile wins — demote the product
accents to `--green-dark`, or drop the tile on pages whose hero carries a gold CTA. Pick one and
delete the apologetic comment.

---

## 2. unjumble — 1 asset + 3 edits

No theme file, no colour definitions. Highest ratio of result to effort in the family.

1. **Add the two-appearance `AccentColor.colorset` from §0.** This fixes all six
   `Color.accentColor` / `foregroundStyle(Color.accentColor)` call sites at once —
   `SettingsView.swift:16`, `CloudProcessingConsentView.swift:64,120`,
   `SubscriptionView.swift:233`, `GeneratedOutputHistoryView.swift:31,46`, `LibraryView.swift:617`.

2. **Add `Theme/Colors.swift`** with the §0 token block. Model it on
   `mealplanner/MealPlan/Theme/Colors.swift`, which is the only existing example in the family.

3. **Three ad-hoc tints:**

| File | Find | Replace | Why |
|---|---|---|---|
| `Views/RecorderView.swift:114` | `.tint(.orange)` | `.tint(Color.brandGold)` + `.foregroundStyle(Color.brandInk)` on the label | **Recording is UnJumble's verb.** §4 puts gold exactly here — this is the one gold element on the screen, and it is currently a system orange |
| `Views/LibraryView.swift:186,239` | `.tint(.indigo)` | `.tint(Color.brandTint)` | System indigo, no rationale |
| `Views/RecentlyDeletedView.swift:39` | `.tint(.green)` | `.tint(Color.brandTint)` | System green `#34C759` is the most recognisable "not your brand" colour in an iOS app |

4. **Headings**: grep for `.bold()` and `.fontWeight(.bold)` on titles; move to `.semibold` (§2).

---

## 3. mealplanner — ~14 values, 1 file

**`MealPlan/Theme/Colors.swift`**

| Line | Find | Replace |
|---|---|---|
| 5 | `static let brand = Color(red: 0/255, green: 160/255, blue: 0/255) // #00A000` | `static let brand = Color(red: 130/255, green: 186/255, blue: 81/255) // #82BA51` |
| 15 | `static let destructive = Color(red: 239/255, green: 68/255, blue: 68/255) // #EF4444` | `static let destructive = Color.brandAlert // #C4382C / #E8705F` |
| 19–30 | 12 `tagX` colours | **Do not cull or rename without a data migration — see below.** |
| 33–39 | 7 `pastelX` colours | Same caveat; audit usage before deleting |

Also add the §0 `AccentColor.colorset` and the token block, and audit every `brand` call site for a
white label — `#82BA51` cannot carry one.

**On the tags — corrected 2026-08-31.** An earlier version of this file said to cull these to eight
and rename them by domain under §8 rule 1. **That is unsafe as written.** These are not colours the
app assigns; they are `MemberAvatarColor`, the set a household member *picks* for their avatar, and
the choice is persisted as the `WorkspaceMember.colorName` raw value and synced between devices.

Two consequences:

- **Culling silently resets people.** A member on a removed case falls back to brand green. There is
  a fallback so nothing crashes, but the user loses a choice they made, on every device.
- **Hue names are correct here.** The picker's own labels are "Blue", "Pink", "Bright green". §8's
  "named for its domain, not its hue" governs colour *the app* assigns meaning to. When the user is
  choosing a colour, the hue **is** the domain.

`tagRed` at `#EF4444` colliding with house `alert` is still real and still worth fixing — but the fix
is to change that one value and migrate stored rows, not to delete cases from a persisted enum. Treat
this as a data migration with its own plan, not a line in a find/replace table.

**Timer numerals**: keep `design: .rounded` in the timer only — that is the §2 instrument exception.
Remove it anywhere else it appears.

---

## 4. riverly — ~40 edits, 11 files

Fully specced in the **Riverly brand review** (`Riverly Brand Review.dc.html`, §05 Patch-ready — held in the design project, not in this repo).
Everything there stands, with **one amendment**:

> Under `VOLLER.md` §8, the `water` blue does **not** go into the house document. It is Riverly's
> domain colour and belongs in `Riverly/Support/Theme.swift` alongside `thames` and `wey`. Drop the
> proposed BRAND.md §1 additions for `water` / `water-light`; keep `alert` / `alert-light`, which are
> chrome and are now house tokens (§1).

Net effect: the Riverly spec gets *smaller*. Its four POI families, the gold route line, the gold
boat hull and the two-appearance tint are all unchanged.

---

## 5. studio — ~30 token values

Largest job, but it is almost entirely one file of shadcn HSL triplets, and the dark block already
exists to be filled in.

**`src/app/globals.css`** — light `:root`. HSL values are exact conversions of the hex in the
right-hand column; paste the triplet, not a rounded version:

| Token | Find | Replace | Value |
|---|---|---|---|
| `--background` | `0 0% 96.1%` | `60 50% 97.6%` | `#FCFCF6` |
| `--foreground` | `240 10% 3.9%` | `60 4% 10.2%` | `#1B1B19` |
| `--card` | — | `0 0% 100%` | `#FFFFFF` |
| `--primary` | `120 100% 31.4%` | `92 43% 52.4%` | `#82BA51` — retires `#00A000` |
| `--primary-foreground` | — | `60 4% 10.2%` | `#1B1B19` — **ink, not white** |
| `--secondary` / `--accent` | `120 100% 92%` | `44 51% 92.7%` | `#F6F1E3` cream |
| `--muted-foreground` | — | `60 1.4% 42.5%` | `#6E6E6B` |
| `--border` / `--input` | — | `73 16% 88.8%` | hairline over the light field |
| `--ring` | — | `92 43% 52.4%` | `#82BA51` |
| `--destructive` | — | `5 63% 47%` | `#C4382C` |
| `--radius` | `1.125rem` | `1.25rem` | 20px card (§1) |

Dark block:

| Token | Replace | Value |
|---|---|---|
| `--background` | `60 4% 10.2%` | `#1B1B19` |
| `--foreground` | `43 40% 89.6%` | `#EFE9DA` cream-dark |
| `--card` / `--popover` | `48 8% 13.1%` | `#24231F` ink-raised |
| `--primary` | `92 43% 52.4%` | `#82BA51` — green is the tint on dark |
| `--primary-foreground` | `60 4% 10.2%` | `#1B1B19` |
| `--muted-foreground` | `0 0% 54.1%` | `#8A8A8A` |
| `--border` / `--input` | `60 4% 20%` | hairline-dark over ink |
| `--destructive` | `7 75% 64%` | `#E8705F` alert-light |

**`tailwind.config.ts`**

1. **The `safelist` array** (35 entries — 18 vibrant, 17 pastel). An earlier version of this file
   said to delete it outright. **Do not.** It is load-bearing: project status colours are persisted
   **as Tailwind class strings** (`{ value: 'in-progress', color: 'bg-orange-500' }`, see
   `src/app/projects/page.tsx`), and components match on them by substring. Purging the safelist
   stops those classes compiling, and every saved project loses its status colours in production —
   with no error to notice.

   The end state in §8 is still right: eight named status tokens in `globals.css`. Reaching it means
   migrating stored `color` values to token names and updating the matchers **first**, then removing
   the safelist last. That is its own piece of work, not a config edit.
2. **`fontFamily`** — all four keys currently repeat the same four-font stack. Collapse to one `sans`
   key with the §2 ladder (`'SF Pro Text'` and `system-ui` are missing today), and delete `body`,
   `headline` and `code` unless something reads them.
3. Add `borderRadius.row: '16px'`.

**Then grep the components** for `text-white` on a green background, `font-bold` on headings, and any
`bg-green-*` / `text-green-*` Tailwind utility that should be `bg-primary` / `text-primary`.

---

## 6. Verification pass

Per repo, after the edits:

- [ ] Grep for `#00A000`, `00a000`, `120 100% 31.4%` — zero hits
- [ ] Grep for `#EF4444`, `#8A8A8A`, `#111827`, `#F5F5F5`, `0 0% 96.1%` — zero hits outside `--muted-dark`
- [ ] Grep for `DM Sans`, `fonts.googleapis`, `fonts.gstatic` — zero hits
- [ ] Grep for `.bold()`, `font-bold`, `font-weight: 700` on headings — zero hits
- [ ] Every filled `green` surface has an `ink` label
- [ ] Every screen has at most one gold element
- [ ] Dark mode renders on a warm base, not `#000` or `#1C1C1E`
- [ ] No hex literal at a call site

## 7. Deliberately out of scope

- **`desk_booking`** — runs a client-facing Salesforce-adjacent palette (`#007ab7` seaside,
  `#13c5e2` ice, `#0d0e20` pepper) with Proxima Nova and Futura PT. Correctly *not* Voller; leave it.
- **`uk_market`** — Silverfin accounting templates, not a UI product.
- **`unpickle_website`** — no longer excluded; its README now points here. Note it still ships
  `--background: 0 0% 96.1%` and `--radius: 0.75rem`, so if it is still live it will visibly disagree
  with `studio` the moment studio moves. Its `globals.css` is nearly identical to studio's, so the
  §5 table applies almost verbatim when you migrate it.
