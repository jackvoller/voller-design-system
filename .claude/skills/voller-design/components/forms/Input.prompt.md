Text entry — newsletter signup, support form, search.

```jsx
<Input label="Email" type="email" placeholder="you@example.com" hint="For release notes only." />
<Input label="Email" error="That address looks incomplete." />
```

There is no red in the Voller palette, so error states use `--green-dark` plus the message. Focus is a green border, not a glow.
