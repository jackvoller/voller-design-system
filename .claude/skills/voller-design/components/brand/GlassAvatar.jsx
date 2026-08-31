import React from 'react';

/** Circular imagery in the glass ring — the token that echoes the icons on the web. */
export function GlassAvatar({ src, alt = '', size = 96, onDark = false, style, children, ...rest }) {
  const ring = Math.max(4, Math.round(size * 0.07));
  return (
    <div
      style={{
        width: size,
        height: size,
        flex: 'none',
        display: 'grid',
        placeItems: 'center',
        padding: ring,
        borderRadius: '50%',
        background: onDark ? 'var(--glass-fill-dark)' : 'var(--glass-fill)',
        boxShadow: `inset 0 0 0 ${size > 64 ? 2 : 1}px ${onDark ? 'var(--glass-stroke-dark)' : 'var(--glass-stroke)'}`,
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          overflow: 'hidden',
          background: 'var(--green)',
          display: 'grid',
          placeItems: 'center',
          color: 'var(--text-on-green)',
          fontWeight: 'var(--fw-semibold)',
          fontSize: Math.round(size * 0.34),
          letterSpacing: 'var(--tracking-heading)',
        }}
      >
        {src ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> : children}
      </div>
    </div>
  );
}
