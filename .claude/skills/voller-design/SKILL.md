---
name: voller-design
description: Use this skill to generate well-branded interfaces and assets for Voller, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

## Read first, in this order

1. **`VOLLER.md` at the root of the `voller-design-system` repo** — `../../../VOLLER.md` from
   here, or `/Users/jackvoller/repos/voller-design-system/VOLLER.md` outright.
   **This is the spec and it wins any disagreement.**
   It supersedes `brand/VOLLER-THEME.md` and `uploads/Brand-Icons/BRAND.md`, both of which are kept
   in this skill only as history. Before choosing any colour, read **§1.2 (the app accent)**,
   **§1.1 (the contrast table)** and **§4 (the ration rule)** — in that order.
   §1.2 decides which half of the system you are in; the other two only make sense after it.
   **The house palette went yellow on 1 Sep 2026** — `VOLLER.md` §1. Green and gold are retired from
   the house. Anything in this skill that still says green or gold in a *house* context is stale;
   the spec wins.
2. **`readme.md`** in this folder — voice, visual foundations, component inventory, iconography.
3. The specific files you need: `tokens/`, `components/*/`, `guidelines/`, `ui_kits/website/`.

Every component ships `<Name>.jsx`, `<Name>.d.ts` and `<Name>.prompt.md`. **Read the `.prompt.md`
before using a component** — several carry rules that are easy to break.

## First, which half of the system is this?

Colour splits in two (§1.2), and almost every mistake is using the wrong half.

| Building | Colour comes from | Action colour |
|---|---|---|
| The Voller mark, wordmark, voller.uk, App Store, marketing | The twelve house values | `yellow` `#FFC400`, once per view |
| **An app icon** | House neutrals **plus that app's six** | The app's `accent` |
| Product UI — anything inside UnJumble, Meal Planner, UnPickle, Riverly | House neutrals **plus that app's six** | The app's `accent`, one per role |

**Yellow never appears in product UI, and never in an app icon. An app's accent never appears in the
house.** The app icons moved onto their own accents on 1 Sep 2026 — four containerless glyphs, each
on a pale field of its own hue, no shared container and no glass ring (§4.1).

The six, per app — swap them and the same component set becomes another app:

| | `accent` | `accent-deep` | `accent-wash` | `accent-dark` | label |
|---|---|---|---|---|---|
| UnJumble | `#FF5A3C` | `#B92F14` | `#FFE7E0` | `#FF7358` | `ink` |
| Meal Planner + UnPickle | `#2BBF4E` | `#116B26` | `#E3F7E8` | `#45D268` | `ink` |
| Riverly *(proposal)* | `#0B5FD0` | `#0B4E9E` | `#E2EEFC` | `#4E9BF5` | `cream` |

Plus each app's two fields — see §1.2 or `tokens/colors.css`. Riverly's dark field is unpublished
and its light field has an open AA failure; read §1.2.1 before using it.

## The rules broken most often

- **One accent per role per view.** One primary action, one active tab, one "current" marker.
  Not one accent element — one per role.
- **Neutral by default.** Counts, tags, dates, durations, avatars, photo slots and speaker names
  are `ink`, `muted` or white. Colour marks the action, the current thing, and the danger. This is
  the rule that breaks first — a second hue creeps in for "types of thing".
- **Yellow appears exactly once per view, on voller.uk or in the Voller mark**, on the thing the
  user came to do. Not a warning, not a highlight, not decoration. A header already spends its
  yellow on the wordmark tile. Neither the field nor `yellow-wash` spends the ration. Inside an app
  — UI *or* icon — yellow does not appear at all.
- **Yellow is a light colour.** It is a fill in both fields, always with an `ink` label; cream on
  yellow is 1.4:1 and banned. As a *tint* it works only on dark — on light it steps all the way down
  to `yellow-dark` `#8A5A00`, which looks like bronze, and that is correct.
- **A yellow fill on the yellow field has a 1.4:1 edge.** Give it a hairline or ink content. The
  house field is now pale yellow, so a yellow button on a yellow page needs help to be a button.
- **A fill carries its published label**, never the other one. Yellow + cream is 1.4:1; coral + cream
  is 2.7:1. The fill and its label are identical in light and dark — no dark variant of a button.
- **`accent` is a fill only** — never text, never a glyph. That is `accent-deep` on light and
  `accent-dark` on dark, the same step `yellow` makes down to `yellow-dark`.
- **`--muted` (`#6E6E6B`) is the light field only.** `--muted-dark` is **`#A09892`**.
  `#8A8A8A` is retired in both fields — it fails AA on light *and* on the dark field's top stop.
- **No webfont.** The platform system sans, 400/500/600. No `<link>` to fonts.googleapis.com.
- **No drop shadows.** Hierarchy comes from a 1px hairline or a background step. `inset` only.

## How to work

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out of `assets/` and
create static HTML files for the user to view. If working on production code, copy assets and read
the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or
design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production
code, depending on the need.

## Note on provenance

This package was generated in Claude Design from the two superseded source documents. Its `tokens/`,
`readme.md` and specimen cards have been reconciled to `VOLLER.md` — chiefly the `--muted` split, the
ink-on-green label, the removal of DM Sans, and the addition of `--alert` / `--ink-raised` and a full
dark-field specification. `uploads/`, `brand/VOLLER-THEME.md` and `Voller Brand Alignment.dc.html`
are **unreconciled history** — read them for rationale, never for values.

Two changes landed after this package was generated, in this order:

1. **The house/app colour split** (§1.2, §4.2). `tokens/colors.css` carries it.
2. **The house went yellow, and the app icons moved onto their own accents** (§1, §4.1, §6, §7).
   `tokens/colors.css` carries this too.

What is still stale, and in what way:

| Path | Stale on | Still correct |
|---|---|---|
| `guidelines/*.card.html` | In-app colour only — the house colour is reconciled | Everything else. **Note:** `brand-family` and `brand-icon` now reference artwork at the *repo root* (`../../../../app-icons/`, `../../../../Design system color flexibility/brand-yellow/`) because the copies inside `assets/` are the old family. Those two cards break if the skill is copied out of this repo on its own |
| `components/*` (`.jsx`, `.d.ts`, `.prompt.md`) | House colour — they name green and gold | Geometry, states, props, type |
| `assets/`, `brand/Voller/`, `brand/web/` | **All of it** — these are the green-and-gold marks. The yellow ladder is at `Design system color flexibility/brand-yellow/` in the repo root and has not been promoted here yet |
| `assets/app-icons/` | **All of it** — superseded by `app-icons/` at the repo root |
| `brand/VOLLER-THEME.md`, `uploads/`, `Voller Brand Alignment.dc.html` | Unreconciled history — read for rationale, never for values |

For in-app colour, the drawn reference is `voller-in-app-colour-reference.dc.html` at the repo root;
it is current. There is no drawn reference for the yellow house yet — use `VOLLER.md` §1 directly.
