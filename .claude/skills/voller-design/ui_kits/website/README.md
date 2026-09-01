# UI kit — Voller marketing site

The public site for the studio. Four click-through views:

| View | File | What it shows |
|---|---|---|
| Home | `HomeScreen.jsx` | Field-gradient hero, the four icons, family grid, dark "how we work" section, cream signup band |
| Apps | `AppsScreen.jsx` | Full-width list rows, one per app |
| App detail | `AppDetailScreen.jsx` | Mark + tagline, a quiet "Get" button, feature list, spec table, cross-sell |
| About | `AboutScreen.jsx` | Glass-ring portraits, contact form |

Shared chrome (`Chrome.jsx`): sticky translucent header with the wordmark, `Section` wrapper for the
four background tones, `Btn`, `Eyebrow`, and the dark footer — the one place the icon and wordmark are
allowed together.

Copy and app metadata live in `data.js`. The four apps are illustrative product copy written in the
brand voice, not shipped marketing text.

## Gold budget per view

The header is `position: sticky`, so **the wordmark tile is on screen at every scroll position on
every route.** That tile is therefore the site's one yellow, permanently spent, and no other element
in this kit is a yellow fill — the home hero CTA and the app-detail "Get" button are both `quiet`,
a `yellow-wash` pill with a `yellow-dark` label.

If a page ever genuinely needs its action as a filled yellow, the header must give the tile up on
that route (render the wordmark without its `<i>`), not double up.

## Notes

Self-contained — it renders from these files plus `styles.css`, without the compiled bundle, so it
previews anywhere. Primitives are inlined in `Chrome.jsx` for that reason; when you build the real
site, import `Button`, `Card`, `Badge`, `Eyebrow` and `Wordmark` from the design system instead.
