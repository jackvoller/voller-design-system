import React from 'react';

export function Switch({ label, checked = false, onChange, disabled = false, onDark = false, style, ...rest }) {
  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        fontSize: 'var(--fs-small)',
        color: onDark ? 'var(--text-on-dark)' : 'var(--text-body)',
        ...style,
      }}
    >
      <input
        type="checkbox"
        role="switch"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      <span
        aria-hidden="true"
        style={{
          width: 44,
          height: 26,
          flex: 'none',
          padding: 3,
          display: 'flex',
          justifyContent: checked ? 'flex-end' : 'flex-start',
          borderRadius: 'var(--radius-pill)',
          background: checked ? 'var(--action-primary)' : (onDark ? 'rgba(246,241,227,.16)' : 'var(--cream-dark)'),
          boxShadow: checked ? 'none' : `inset 0 0 0 1px ${onDark ? 'transparent' : 'var(--hairline)'}`,
          transition: 'background var(--dur-base) var(--ease)',
        }}
      >
        <span
          style={{
            width: 20,
            height: 20,
            borderRadius: 'var(--radius-pill)',
            background: 'var(--off-white)',
            transition: 'transform var(--dur-base) var(--ease)',
          }}
        />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
