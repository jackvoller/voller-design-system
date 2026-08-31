Shows a real shipped app icon — app grids, download rows, the family lineup.

```jsx
<AppTile app="riverly" size={96} />
<AppTile app="unjumble" variant="tinted" size={64} />
```

`assetPath` must point at `assets/app-icons` relative to the file doing the rendering. Keep the 23.5% radius: no circles, no shadows. `dark` variants are transparent PNGs, so they get an ink backdrop.
