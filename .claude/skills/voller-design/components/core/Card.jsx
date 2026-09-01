import React from 'react';

export function Card({ tone = 'white', padding = 28, radius = 'card', interactive = false, style, children, ...rest }) {
  const tones = {
    white: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-body)' },
    cream: { background: 'var(--surface-sunken)', border: '1px solid var(--border-subtle)', color: 'var(--text-body)' },
    dark: { background: 'var(--surface-card-dark)', border: '1px solid var(--hairline-dark)', color: 'var(--text-on-dark)' },
    bare: { background: 'transparent', border: '1px solid var(--border-subtle)', color: 'var(--text-body)' },
  };
  return (
    <div
      style={{
        borderRadius: radius === 'panel' ? 'var(--radius-row)' : 'var(--radius-card)',
        padding,
        transition: 'border-color var(--dur-base) var(--ease)',
        cursor: interactive ? 'pointer' : undefined,
        ...(tones[tone] || tones.white),
        ...style,
      }}
      onMouseEnter={(e) => { if (interactive) e.currentTarget.style.borderColor = 'var(--yellow-dark)'; }}
      onMouseLeave={(e) => { if (interactive) e.currentTarget.style.borderColor = ''; }}
      {...rest}
    >
      {children}
    </div>
  );
}
