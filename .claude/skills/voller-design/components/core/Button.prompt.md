Primary interactive control; use for any action, and for link-buttons via `as="a"`.

```jsx
<Button variant="primary">Browse the apps</Button>
<Button variant="accent" size="lg">Download UnPickle</Button>
<Button variant="quiet" as="a" href="/about">Read more</Button>
```

Variants: `primary` (green, the default), `accent` (gold — **only one gold element per view**, and never in a header that already carries the wordmark tile), `quiet` (transparent with a hairline), `text` (bare). Sizes `sm | md | lg`. Pass `onDark` inside a `--bg-dark` section so quiet/text variants pick up cream. No drop shadows, ever.
