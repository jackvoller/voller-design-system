Instant on/off (settings, preferences). For anything that needs saving, use Checkbox.

```jsx
<Switch label="Dark app icon" checked={on} onChange={e => setOn(e.target.checked)} />
```

44×26 track, 20px knob — the capsule primitive from the icon system. Pass `onDark` in dark sections.
