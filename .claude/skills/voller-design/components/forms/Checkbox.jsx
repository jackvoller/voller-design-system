import React from 'react';

export function Checkbox({ label, checked = false, onChange, disabled = false, style, ...rest }) {
  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'flex-start',
        gap: 10,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        fontSize: 'var(--fs-small)',
        lineHeight: 1.5,
        ...style,
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      <span
        aria-hidden="true"
        style={{
          width: 20,
          height: 20,
          flex: 'none',
          marginTop: 1,
          display: 'grid',
          placeItems: 'center',
          borderRadius: 6,
          background: checked ? 'var(--action-primary)' : 'var(--surface-card)',
          border: `1px solid ${checked ? 'var(--action-primary)' : 'var(--border-input)'}`,
          transition: 'background var(--dur-fast) var(--ease), border-color var(--dur-fast) var(--ease)',
        }}
      >
        {checked && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-on-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        )}
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
