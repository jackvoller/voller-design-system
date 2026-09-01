import React from 'react';

export function Input({ label, hint, error, id, style, ...rest }) {
  const inputId = id || `in-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: 'var(--fs-small)', fontWeight: 'var(--fw-medium)', color: 'var(--text-body)' }}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        style={{
          appearance: 'none',
          width: '100%',
          padding: '10px 14px',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--fs-body)',
          lineHeight: 1.4,
          color: 'var(--text-body)',
          background: 'var(--surface-card)',
          border: `1px solid ${error ? 'var(--alert)' : 'var(--border-input)'}`,
          borderRadius: 'var(--radius-control)',
          outline: 'none',
          transition: 'border-color var(--dur-fast) var(--ease)',
          ...style,
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--yellow-dark)'; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = error ? 'var(--alert)' : 'var(--border-input)'; }}
        {...rest}
      />
      {(hint || error) && (
        <span style={{ fontSize: 'var(--fs-caption)', color: error ? 'var(--alert)' : 'var(--muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
