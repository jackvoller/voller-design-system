import React from 'react';

export function Badge({ tone = 'yellow', style, children, ...rest }) {
  const tones = {
    yellow: { background: 'var(--yellow-wash)', color: 'var(--yellow-dark)' },
    // Deprecated aliases: the house had a green and a gold before 1 Sep 2026.
    green: { background: 'var(--yellow-wash)', color: 'var(--yellow-dark)' },
    gold: { background: 'var(--yellow-wash)', color: 'var(--yellow-dark)' },
    neutral: { background: 'var(--surface-sunken)', color: 'var(--muted)' },
    dark: { background: 'rgba(246,241,227,.10)', color: 'var(--text-on-dark)' },
    solid: { background: 'var(--action-primary)', color: 'var(--action-primary-label)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '4px 10px',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-caption)',
        fontWeight: 'var(--fw-medium)',
        lineHeight: 1.4,
        letterSpacing: 0,
        ...(tones[tone] || tones.green),
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
