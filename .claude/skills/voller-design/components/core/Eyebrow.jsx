import React from 'react';

export function Eyebrow({ as = 'div', onDark = false, style, children, ...rest }) {
  const Tag = as;
  return (
    <Tag
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-caption)',
        fontWeight: 'var(--fw-regular)',
        lineHeight: 1.4,
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-eyebrow)',
        color: onDark ? 'var(--text-secondary-on-dark)' : 'var(--muted)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
