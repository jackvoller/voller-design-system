import React from 'react';

export function Select({ label, hint, options = [], id, style, children, ...rest }) {
  const selectId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
      {label && (
        <label htmlFor={selectId} style={{ fontSize: 'var(--fs-small)', fontWeight: 'var(--fw-medium)', color: 'var(--text-body)' }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex' }}>
        <select
          id={selectId}
          style={{
            appearance: 'none',
            width: '100%',
            padding: '10px 38px 10px 14px',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--fs-body)',
            lineHeight: 1.4,
            color: 'var(--text-body)',
            background: 'var(--surface-card)',
            border: '1px solid var(--border-input)',
            borderRadius: 'var(--radius-control)',
            outline: 'none',
            cursor: 'pointer',
            ...style,
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--green)'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-input)'; }}
          {...rest}
        >
          {children || options.map((o) => {
            const value = typeof o === 'string' ? o : o.value;
            const text = typeof o === 'string' ? o : o.label;
            return <option key={value} value={value}>{text}</option>;
          })}
        </select>
        <svg
          aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="var(--muted)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
          style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      {hint && <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--muted)' }}>{hint}</span>}
    </div>
  );
}
