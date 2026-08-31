import React from 'react';

export function Badge({ tone = 'green', style, children, ...rest }) {
  const tones = {
    green: { background: 'rgba(130,186,81,.16)', color: 'var(--green-dark)' },
    gold: { background: 'rgba(240,194,28,.22)', color: 'var(--action-accent-detail)' },
    neutral: { background: 'var(--surface-sunken)', color: 'var(--muted)' },
    dark: { background: 'rgba(246,241,227,.10)', color: 'var(--text-on-dark)' },
    solid: { background: 'var(--action-primary)', color: 'var(--text-on-green)' },
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
