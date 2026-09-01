Primary interactive control; use for any action, and for link-buttons via `as="a"`.

```jsx
<Button variant="primary">Browse the apps</Button>
<Button variant="accent" size="lg">Download UnPickle</Button>
<Button variant="quiet" as="a" href="/about">Read more</Button>
```

Variants: `primary` (yellow, the default — **and the one rationed element per view**, so never in a header that already carries the wordmark tile), `accent` (**deprecated**, an alias of `primary`; gold retired 1 Sep 2026), `quiet` (`yellow-wash` with a hairline on light, transparent outline on dark), `text` (bare). Sizes `sm | md | lg`. Pass `onDark` inside a `--bg-dark` section so quiet/text variants pick up cream. No drop shadows, ever.
