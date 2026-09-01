import React from 'react';

/**
 * The word carries the name; the icon is not part of the wordmark.
 * Geometry is locked to cap height: tile = .33em, gap = .2em, tile radius 23.5%.
 */
export function Wordmark({ size = 22, onDark = false, as = 'a', style, ...rest }) {
  const Tag = as;
  return (
    <Tag
      style={{
        display: 'inline-flex',
        alignItems: 'flex-end',
        gap: '.2em',
        fontFamily: 'var(--font-sans)',
        fontSize: size,
        fontWeight: 'var(--fw-semibold)',
        letterSpacing: 'var(--tracking-heading)',
        lineHeight: .9,
        color: onDark ? 'var(--text-on-dark)' : 'var(--ink)',
        textDecoration: 'none',
        border: 0,
        ...style,
      }}
      {...rest}
    >
      <span>Voller</span>
      <i
        aria-hidden="true"
        style={{ width: '.33em', height: '.33em', borderRadius: '23.5%', background: 'var(--yellow)', flex: 'none' }}
      />
    </Tag>
  );
}
