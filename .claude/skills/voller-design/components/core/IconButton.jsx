import React from 'react';

const BOX = { sm: 32, md: 40, lg: 44 };

export function IconButton({ label, variant = 'quiet', size = 'md', onDark = false, style, children, ...rest }) {
  const box = BOX[size] || BOX.md;
  const variants = {
    primary: { background: 'var(--action-primary)', color: 'var(--text-on-green)', boxShadow: 'none' },
    quiet: {
      background: 'transparent',
      color: onDark ? 'var(--text-on-dark)' : 'var(--ink)',
      boxShadow: `inset 0 0 0 1px ${onDark ? 'var(--hairline-dark)' : 'var(--hairline-strong)'}`,
    },
    bare: { background: 'transparent', color: onDark ? 'var(--text-on-dark)' : 'var(--muted)', boxShadow: 'none' },
  };
  return (
    <button
      aria-label={label}
      title={label}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: box,
        height: box,
        flex: 'none',
        border: 0,
        borderRadius: 'var(--radius-control)',
        cursor: 'pointer',
        transition: 'background var(--dur-fast) var(--ease)',
        ...(variants[variant] || variants.quiet),
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
