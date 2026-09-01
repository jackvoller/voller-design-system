# Voller migration — per-repo checklist

Spec: **`VOLLER.md`** — the only current document. `voller-design-system-reference.html` is a live
reference for type, spacing and geometry, but is **stale on colour and on icons** (§9.4).

In every repo, land the **token file** and the **tint** first. Most call sites then correct
themselves, and you can review the remainder against a working baseline.

Recommended order across the family: `voller_website` (smallest, becomes the reference) →
`unjumble` (one asset unlocks eight call sites) → `mealplanner` (one file) → `riverly` (specced
separately) → `studio` (largest).

## State — 1 Sep 2026

| Repo | State | Left |
|---|---|---|
| `voller_website` | **done**, on `main` | `--muted-dark` → `#A09892` (§8) |
| `unjumble` | **done**, §8 included | —. §2.3's gold row closed by §8.3: the record button and the draft flag are `accent`, and `.orange` has no call sites left |
| `mealplanner` | **done** bar the tag cull | **Accent migration (§8)**, `--muted-dark`, then the tag cull (§3) |
| `studio` | **done** bar the safelist | **Accent migration (§8)** as UnPickle, `--muted-dark`, then the safelist (§5) |
| `riverly` | **not started** | Blocked twice: its icon spec is in `Riverly Brand Review.dc.html`, not in this repo; and its six are a proposal with an open AA failure (`VOLLER.md` §1.2.1) |

Then, on top of all of the above:

| Repo | Yellow pass (§9) | Icon family (§9.3) |
|---|---|---|
| `voller_website` | **not started** — the whole house half of the site | **not started** — the full `brand-yellow/` ladder replaces `brand/web/` |
| `unjumble` | **done** — hairline, `--muted-dark`, flat field; `brandGreen` and `brandGold` deleted rather than renamed, as it has no house-side surface to paint | **done in the app, ahead of the gate** — see §9.3 |
| `mealplanner` | **not started** — house surfaces only | **not started** |
| `studio` | **not started** — house surfaces only | **not started** |
| `riverly` | **not started** | **not started**, and additionally blocked on the `#1372E8` hull (§9.4) |

Each migrated repo built clean before commit (`xcodebuild` for the two iOS apps, `npm run build`
for studio). The three original open items are all the same shape: a palette that looks like drift
but is actually persisted user choice. None is a find/replace.

**§8 supersedes parts of §1–§5, and §9 supersedes the house half of all of them.** Read them in
that order, newest last:

- `VOLLER.md` split colour into a house palette and a per-app accent (§8 here). Every repo that had
  already migrated to green-and-gold *product UI* has a second pass to make. Where §1–§5 say a
  product button is `--green`, they are describing the house half of a system the app no longer
  sits in.
- **The house then went yellow, and the app icons were redrawn in their own accents (§9 here).**
  That retires green and gold from the house entirely, so the icon, wordmark and marketing
  instructions in §1–§5 — previously the part §8 left alone — are now the stale part. **§9 wins over
  every green or gold value anywhere in this file.**

The §8 accent work is untouched by the yellow change: an app's six are the same six they always
were. If you have started §8 in a repo, finish it before starting §9.

---

## 0. Shared: the two-appearance accent — SUPERSEDED BY §8.1

**The block below is green, and green is no longer a house colour.** The reasoning still holds —
the tint must flip between fields, and a static `Color` cannot — but the *values* are per-app now:
each app's `AccentColor` carries its own `accent-deep` on light and `accent-dark` on dark. Take
them from §8.1, not from here. Left in place because §1–§5 refer back to it.

Every iOS app needs the tint to flip between fields (`VOLLER.md` §1.1). A static `Color` cannot,
so either set it in the asset catalog or use a dynamic `UIColor`.

**`Assets.xcassets/AccentColor.colorset/Contents.json`** — ~~drop-in for all three iOS apps~~:

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
    static let brandGold      = Color(red: 0.996, green: 0.792, blue: 0.000) // #FECA00
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
            ? UIColor(red: 0.627, green: 0.596, blue: 0.573, alpha: 1)   // #A09892
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

> **Colour values below are superseded by §9.** The steps still apply; take every green or gold
> value straight to its yellow equivalent instead.

The reference implementation. Fix it first so the others have something correct to copy.

**`src/index.css`**

| Find | Replace | Why |
|---|---|---|
| `--muted: #8A8A8A;` | `--muted: #6E6E6B;` + add `--muted-dark: #A09892;` | 3.4:1 on the light field. **`#8A8A8A` is retired outright** — see §8.0; it is 3.9:1 on the dark field too |
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

> **The house values in both tables below are superseded by §9**, and studio's product UI is
> superseded again by §8 (it publishes UnPickle's six). Use these tables for *which* tokens to set
> and for the shadcn naming; take the values from §8.1 and §9.1.

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
| `--muted-foreground` | `0 0% 54.1%` | `26 6.9% 60%` — `#A09892` (§8.0). Not `#8A8A8A` |
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
- [ ] Grep for `#EF4444`, `#8A8A8A`, `#111827`, `#F5F5F5`, `0 0% 96.1%` — zero hits, no exceptions
- [ ] Grep for `DM Sans`, `fonts.googleapis`, `fonts.gstatic` — zero hits
- [ ] Grep for `.bold()`, `font-bold`, `font-weight: 700` on headings — zero hits
- [ ] Every filled `green` surface has an `ink` label
- [ ] Every screen has at most one gold element — and, in an app, **zero** (§8)
- [ ] Dark mode renders on a warm base, not `#000` or `#1C1C1E`
- [ ] No hex literal at a call site
- [ ] `--muted-dark` is `#A09892` everywhere it is defined
- [ ] `#F0C21C` has zero hits; `gold` is `#FECA00`, and the icon assets were copied, not re-rendered
- [ ] **In-app only:** every screen has at most one accent fill per role
- [ ] **In-app only:** no count, tag, date, duration, avatar or photo slot carries the accent
- [ ] **In-app only:** no hue on the screen outside the app's published six plus the house neutrals
- [ ] **In-app only:** `accent` appears as a fill and never as text or a glyph

---

## 7. Deliberately out of scope

- **`desk_booking`** — runs a client-facing Salesforce-adjacent palette (`#007ab7` seaside,
  `#13c5e2` ice, `#0d0e20` pepper) with Proxima Nova and Futura PT. Correctly *not* Voller; leave it.
- **`uk_market`** — Silverfin accounting templates, not a UI product.
- **`unpickle_website`** — no longer excluded; its README now points here. Note it still ships
  `--background: 0 0% 96.1%` and `--radius: 0.75rem`, so if it is still live it will visibly disagree
  with `studio` the moment studio moves. Its `globals.css` is nearly identical to studio's, so the
  §5 table applies almost verbatim when you migrate it.

---

## 8. The house/app colour split — second pass, every app

`VOLLER.md` §1.2 and §4.2. **Product UI moves off green-and-gold and onto the app's own six.**
Icons, wordmark, voller.uk and the App Store do not change at all — this pass touches app code only.

Order: `unjumble` (its deferred gold row resolves here) → `mealplanner` → `studio` →
`voller_website` (token rename only) → `riverly` (blocked).

### 8.0 Everywhere: the muted-dark correction

One value, every repo, both halves of the system. `#8A8A8A` is 3.9:1 at the top of `--field-dark`
and is retired outright.

| Find | Replace |
|---|---|
| `#8A8A8A` / `--muted-dark: #8A8A8A` | `#A09892` |
| Swift `0.541, 0.541, 0.541` in `brandMuted` | `0.627, 0.596, 0.573` |

Land this first — it is a true find/replace and it is independent of everything below.

### 8.0.1 Everywhere: the gold correction — SUPERSEDED

`gold` moved from `#F0C21C` to `#FECA00` on 31 Aug, and then gold was retired outright on 1 Sep.
**Do not run this step.** If a repo still carries `#F0C21C` or `#FECA00`, take it straight to
`#FFC400` under §9 rather than through the intermediate value.

### 8.1 The token block, per app

Drop into the app's single theme file. Nothing else in the app names a hex.

**Web** (`unjumble` has none; this is `studio`/`unpickle_website`) — see `tokens/colors.css` in the
`voller-design` skill for the full commented block. The six for each app:

| | `accent` | `accent-deep` | `accent-wash` | `accent-dark` | `field` | `field-dark` | label |
|---|---|---|---|---|---|---|---|
| `unjumble` | `#FF5A3C` | `#B92F14` | `#FFE7E0` | `#FF7358` | `#FFFCFA → #FFEDE6` | `#2C2320 → #1A1413` | `ink` |
| `mealplanner` | `#2BBF4E` | `#116B26` | `#E3F7E8` | `#45D268` | `#FBFEFB → #E9F8EC` | `#1F2A21 → #141A15` | `ink` |
| `studio` (UnPickle) | `#2BBF4E` | `#116B26` | `#E3F7E8` | `#45D268` | `#FBFEFB → #E9F8EC` | `#1F2A21 → #141A15` | `ink` |
| `riverly` | `#0B5FD0` | `#0B4E9E` | `#E2EEFC` | `#4E9BF5` | `#FAFCFF → #E6F0FB` | *unpublished* | `cream` |

All fields are `linear-gradient(160deg, …)`.

**Swift** — replace `brandTint` at the app's call sites with `accentTint`. `brandGreen` and
`brandGold` stay defined (the icon and any App Store asset still use them) but must have **zero**
call sites in view code after this pass.

```swift
extension Color {
    // UnJumble's six. Meal Planner swaps the four hexes and the two gradients.
    static let accent      = Color(red: 1.000, green: 0.353, blue: 0.235)  // #FF5A3C
    static let accentDeep  = Color(red: 0.725, green: 0.184, blue: 0.078)  // #B92F14
    static let accentWash  = Color(red: 1.000, green: 0.906, blue: 0.878)  // #FFE7E0
    static let accentDark  = Color(red: 1.000, green: 0.451, blue: 0.345)  // #FF7358

    /// This app's published label. Riverly is the one app where this is .brandCream.
    static let onAccent = Color.brandInk

    /// accent-deep on light, accent-dark on dark. Replaces brandTint inside the app.
    static let accentTint = Color(UIColor { t in
        t.userInterfaceStyle == .dark
            ? UIColor(red: 1.000, green: 0.451, blue: 0.345, alpha: 1)     // #FF7358
            : UIColor(red: 0.725, green: 0.184, blue: 0.078, alpha: 1)     // #B92F14
    })
}
```

**`AccentColor.colorset`** — the §0 drop-in re-tints every stock control, and its two values are now
per app, not the shared green pair. UnJumble: `#B92F14` light / `#FF7358` dark
(`0.725, 0.184, 0.078` and `1.000, 0.451, 0.345`). Meal Planner and studio: `#116B26` light /
`#45D268` dark (`0.067, 0.420, 0.149` and `0.271, 0.824, 0.408`). This one file is again the
highest-leverage edit in the pass — do it before opening any view.

**Filled-button pattern**, replacing the §0 one inside an app:

```swift
.buttonStyle(.borderedProminent)
.tint(.accent)
.foregroundStyle(Color.onAccent)   // required — the default white label fails in every app
```

### 8.2 Call-site pass, per app

Mechanical, in this order:

1. `brandGreen` / `--green` **as a fill in a view** → `accent` / `--accent`.
2. `brandTint` / `--tint` **in a view** → `accentTint` / `--accent-tint`.
3. `brandGold` / `--gold` **in a view** → delete the colour. Gold has no in-app form (§4.2). The
   element it marked is either the primary action (now `accent`) or nothing.
4. `--field-light` / `--field-dark` **in a view** → `--field-app` / `--field-app-dark`.
5. Quiet/secondary buttons → `accent-wash` ground with an `accent-deep` label on light; on dark, an
   `rgba(246,241,227,.20)` outline with an `accent-dark` label.

Then the judgement pass, which is not mechanical:

6. **Neutral by default.** Walk every screen and take the accent *off* counts, tags, dates,
   durations, avatars, photo slots, speaker names and status labels. They become `muted`. This is
   the bulk of the diff and the whole point of the change.
7. **One per role.** Where two accent fills share a role in one view, the loser steps down to
   `accent-wash` with an `accent-tint` label.

### 8.3 unjumble — the deferred gold row resolves here

§2.3 was left open because gold and an invented orange draft set had no home. They now do:
UnJumble's accent **is** coral, so the draft flag and the record button are `accent`, and the
orange set collapses into the published six rather than surviving as a seventh hue. Close §2.3 as
part of this pass. Reference screens: `voller-in-app-colour-reference.dc.html`, §2b and §2d.

### 8.4 mealplanner — do this before the §3 tag cull

The cull gets smaller if the accent lands first: every tag that was only coloured to look
deliberate becomes `muted` under *neutral by default*, and only genuine parallel-kind tags survive
to need a category set at all (§8 of `VOLLER.md`, rule 3 — a category set may not use the app's own
six either). Meal Planner's accent is a brighter relative of the brand green, so this repo's diff
is the smallest of the three.

### 8.5 studio — UnPickle shares Meal Planner's six exactly

Not a near-match: the same four hexes and the same two gradients. Copy the block. The two apps are
told apart by their icons, not their colour. Do the accent pass before the §5 safelist — the
safelist shrinks for the same reason Meal Planner's tag cull does.

### 8.6 riverly — still blocked, now for two reasons

Its six are a proposal, and `muted` on the bottom stop of its published field is **4.4:1**, which
fails AA (`VOLLER.md` §1.2.1). Its `field-dark` was never published. Resolve both in `VOLLER.md`
before writing any Riverly code — lighten the field's bottom stop to `#EAF3FD`, or put Riverly's
captions on `ink`.

---

## 9. The house goes yellow — third pass

`VOLLER.md` §1, §4.1, §6, §7, §11 and §12, all rewritten 1 Sep 2026. **This supersedes every green
and gold value anywhere above.** The house palette is now one yellow ramp; green survives only as
Meal Planner's and UnPickle's published `accent`, which this pass does not touch.

Scope, in one line: **house surfaces change, product UI does not.** If a value is inside an app's own
UI it is already governed by that app's six (§8) and this pass leaves it alone. If it is chrome, a
marketing page, an App Store surface, the wordmark or an icon, it changes.

### 9.1 The token block

Replace the house half of every theme file. The app half (§8.1) is unchanged.

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

  --tint: var(--yellow-dark);
}
@media (prefers-color-scheme: dark) {
  :root { --tint: var(--yellow); }
}
```

### 9.2 Find and replace

Ordered so that no substitution collides with a later one.

| Find | Replace | Note |
|---|---|---|
| `#FECA00` | `#FFC400` | The gold tile in every wordmark and mark |
| `#F0C21C` | `#FFC400` | The older gold, if any repo still carries it |
| `--gold` | `--yellow` | Token rename |
| `#82BA51` / `--green` | `#FFC400` / `--yellow` in house surfaces; `#2BBF4E` / `--accent` in Meal Planner and UnPickle product UI | **Not mechanical.** Check each site: is it chrome (house) or a product control (accent)? |
| `#69A63C` / `--green-deep` | `#E0A200` / `--yellow-deep` in house; `--accent` ramp in app | Same judgement |
| `#3F6B27` / `--green-dark` | `#8A5A00` / `--yellow-dark` in house; `--accent-deep` in app | Same judgement |
| `linear-gradient(160deg, #FCFCF6 0%, #F1F0E4 100%)` | `linear-gradient(160deg, #FFFDF5 0%, #FFF1CE 100%)` | House field only. App fields (§8.1) are untouched |
| `rgba(20, 40, 10, .10)` | `rgba(60, 40, 0, .12)` | Hairline cast |
| `#FCFCF6` as a flat page background | `#FFFDF5` | Flat-field alternative |
| `#F6F1E3` inside a brand shape | `#1B1B19` | The cut-out flip. Cream panels elsewhere stay cream |
| `rgba(63,107,39,.3)` on a link underline | `rgba(138,90,0,.3)` | Follows the tint |
| `a:hover { color: var(--green) }` | `a:hover { color: var(--ink) }` on light | Yellow is 1.4:1 on the light field. On dark, hover goes to `cream-dark` |

Swift equivalents: `brandGold` `0.996, 0.792, 0.000` → `1.000, 0.769, 0.000`; rename to
`brandYellow`. `brandGreen` has no house form left — delete it from any file that is house-side, and
leave it alone where it is the app's `accent`.

`#F6F1E3`, `#EFE9DA`, `#1B1B19`, `#24231F`, `#6E6E6B`, `#A09892`, `#C4382C` and `#E8705F` are
unchanged. So is every value in §8.1.

### 9.3 Assets

Two sets were re-exported and **neither has been promoted into place yet.**

**The Voller house ladder** — `Design system color flexibility/brand-yellow/`, eighteen files:
`voller-icon.svg`, `favicon.svg`, `favicon.ico`, `favicon-{16,32,192}.png`, `apple-touch-icon.png`,
`icon-512.png`, `og-image.{svg,png}`, `voller-mark.svg`, `voller-logo{,-dark}.svg`, and the mark's
three `source-*.svg` masters plus `AppIcon{,-Dark,-Tinted}-1024.png`. Destination:
`voller_website/brand/web/`, and the mirrored copies inside the `voller-design` skill.

**The four app icons** — `app-icons/<App>/`, three PNGs + three SVG masters + `Contents.json` each.
Destination: the repo-root `<App>/` folders, and from there each app's
`Assets.xcassets/AppIcon.appiconset/`.

Do not promote the app icons until §9.4 is closed.

**One exception already taken.** `unjumble/UnJumble/Assets.xcassets/AppIcon.appiconset/` was
updated straight from `app-icons/UnJumble/` and matches it byte for byte, `Contents.json` included.
Its icon is unaffected by every open item in §9.4 — those are UnPickle's margin and Riverly's
letterforms, hull and field. The repo-root `UnJumble/` folder is therefore **behind the app**, and
still holds the pre-yellow green-and-gold mic. Do not delete it and do not copy *from* it; it is
the promotion's destination, and it is filled when §9.4 closes for the family.

### 9.4 Open items

Nothing below is a find/replace. Each needs a decision.

1. **UnPickle's zigzag crosses the safe margin.** The other three icons now keep the 96pt margin
   (`VOLLER.md` §3, *no bleed*). Pull it inside, or end it at the jar.
2. **Riverly's N and S are live text** in `app-icons/Riverly/source-*.svg`. Convert to outlines
   before these go near Xcode, or the letterforms shift on any machine without the same system font.
3. **Riverly's hull is `#1372E8`**, which is not in its published six (`accent` is `#0B5FD0`). Every
   other icon uses only values from its own row. Publish `#1372E8` and re-derive the row, or redraw
   the hull. See `VOLLER.md` §4.1.
4. **Riverly's `field-dark` is still unpublished** and `muted` on its field bottom is 4.4:1 (§8.6).
   Unchanged by this pass, still blocking.
5. **`favicon.ico` was packed by hand** and is in `brand-yellow/`; the 32 and 16 PNGs are beside it
   if it needs rebuilding. Most browsers take `favicon.svg` now.
6. **`voller-design-system-reference.html` predates the yellow change** and is stale on colour and
   on icons — its type, spacing and geometry still hold. It is a Claude Design bundle, not
   hand-editable, so it must be rebuilt rather than patched.
   (`voller-in-app-colour-reference.dc.html` is current: the yellow change does not reach in-app
   colour, and its one house-colour panel was corrected in place.)
