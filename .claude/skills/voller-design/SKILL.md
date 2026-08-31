---
name: voller-design
description: Use this skill to generate well-branded interfaces and assets for Voller, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

## Read first, in this order

1. **`../../../VOLLER.md`** — the repo root. **This is the spec and it wins any disagreement.**
   It supersedes `brand/VOLLER-THEME.md` and `uploads/Brand-Icons/BRAND.md`, both of which are kept
   in this skill only as history. Read §1.1 (the contrast table) and §4 (the gold rule) before
   choosing any colour.
2. **`readme.md`** in this folder — voice, visual foundations, component inventory, iconography.
3. The specific files you need: `tokens/`, `components/*/`, `guidelines/`, `ui_kits/website/`.

Every component ships `<Name>.jsx`, `<Name>.d.ts` and `<Name>.prompt.md`. **Read the `.prompt.md`
before using a component** — several carry rules that are easy to break.

## The five rules broken most often

- **Gold appears exactly once per view**, on the thing the user came to do. Not a warning, not a
  highlight, not decoration. A header already spends its gold on the wordmark tile.
- **A green or gold fill carries an `ink` label**, never a light one. Green + cream is 2.3:1.
- **`--muted` (`#6E6E6B`) is the light field only.** `#8A8A8A` is `--muted-dark`, dark field only.
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
