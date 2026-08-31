/* Lucide icon paths (1.75px stroke, round caps) — see ICONOGRAPHY in readme.md.
   Voller's own sources ship no icon set; Lucide is the documented substitution. */
var ICONS = {
  arrowRight: 'M5 12h14M13 5l7 7-7 7',
  arrowLeft: 'M19 12H5M12 19l-7-7 7-7',
  download: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3',
  check: 'M20 6 9 17l-5-5',
  chevronRight: 'm9 18 6-6-6-6',
  mail: 'M22 7 13.03 12.7a1.94 1.94 0 0 1-2.06 0L2 7M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z',
  apple: 'M12 20.94c1.5 0 2.75-.83 3.5-2 .75-1.17 1.5-3.5 1.5-5.5 0-2.5-1.5-4-3-4-1 0-2 .5-2 .5s-1-.5-2-.5c-1.5 0-3 1.5-3 4 0 2 .75 4.33 1.5 5.5.75 1.17 2 2 3.5 2zM12 7c0-2 1.5-4 3.5-4',
};

function Icon({ name, size = 18, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
         aria-hidden="true" style={{ flex: 'none', display: 'block', ...style }}>
      <path d={ICONS[name]} />
    </svg>
  );
}

/* Published for the sibling babel scripts — each src'd babel file gets its own scope. */
window.Icon = Icon;
