import React from 'react';

const PAD = {
  sm: '8px 14px',
  md: '11px 18px',
  lg: '14px 24px',
};
const SIZE = { sm: 14, md: 15, lg: 16 };

export function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  full = false,
  disabled = false,
  iconLeft,
  iconRight,
  onDark = false,
  style,
  children,
  ...rest
}) {
  const base = {
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : undefined,
    /* An inline-flex button blockifies and stretches when it is itself a flex item,
       so pin it unless it is explicitly full-width. */
    alignSelf: full ? 'auto' : 'flex-start',
    flex: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: PAD[size] || PAD.md,
    border: 0,
    borderRadius: 'var(--radius-control)',
    fontFamily: 'var(--font-sans)',
    fontSize: SIZE[size] || SIZE.md,
    fontWeight: 'var(--fw-medium)',
    lineHeight: 1,
    letterSpacing: 'var(--tracking-control)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    textDecoration: 'none',
    transition: 'background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease)',
    whiteSpace: 'nowrap',
  };

  const variants = {
    // Yellow IS the rationed colour, so primary is the one-per-view element.
    // The inset hairline is required: a yellow fill on the yellow field is a 1.4:1
    // edge and must be defined by its ink label or an edge. VOLLER.md §1.
    primary: {
      background: 'var(--action-primary)',
      color: 'var(--action-primary-label)',
      boxShadow: 'inset 0 0 0 1px var(--action-primary-edge)',
    },
    // Deprecated: `accent` was the separate gold variant. Gold retired 1 Sep 2026 and
    // yellow now does both jobs, so this is an alias. Use `primary`.
    accent: {
      background: 'var(--action-primary)',
      color: 'var(--action-primary-label)',
      boxShadow: 'inset 0 0 0 1px var(--action-primary-edge)',
      fontWeight: 'var(--fw-semibold)',
    },
    quiet: {
      background: onDark ? 'transparent' : 'var(--action-quiet-bg)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--action-quiet-label)',
      boxShadow: `inset 0 0 0 1px ${onDark ? 'var(--hairline-dark)' : 'var(--hairline-strong)'}`,
    },
    text: { background: 'transparent', color: onDark ? 'var(--text-on-dark)' : 'var(--tint)', padding: 0 },
  };

  const Tag = as;
  return (
    <Tag
      disabled={Tag === 'button' ? disabled : undefined}
      style={{ ...base, ...(variants[variant] || variants.primary), ...style }}
      onMouseEnter={(e) => {
        if (disabled) return;
        if (variant === 'primary' || variant === 'accent') e.currentTarget.style.background = 'var(--action-primary-hover)';
        if (variant === 'quiet') e.currentTarget.style.background = onDark ? 'rgba(246,241,227,.06)' : 'rgba(138,90,0,.06)';
        // NOT yellow: yellow on the light field is 1.4:1. Text buttons darken to ink.
        if (variant === 'text') e.currentTarget.style.color = onDark ? 'var(--cream-dark)' : 'var(--ink)';
      }}
      onMouseLeave={(e) => {
        if (disabled) return;
        if (variant === 'primary' || variant === 'accent') e.currentTarget.style.background = 'var(--action-primary)';
        if (variant === 'quiet') e.currentTarget.style.background = onDark ? 'transparent' : 'var(--action-quiet-bg)';
        if (variant === 'text') e.currentTarget.style.color = onDark ? 'var(--text-on-dark)' : 'var(--tint)';
      }}
      {...rest}
    >
      {iconLeft}
      {/* One wrapper: the 8px gap must separate icon from label, not word from word. */}
      <span>{children}</span>
      {iconRight}
    </Tag>
  );
}
