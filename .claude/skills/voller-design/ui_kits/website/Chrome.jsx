var NAV = [
  { id: 'home', label: 'Home' },
  { id: 'apps', label: 'Apps' },
  { id: 'about', label: 'About' },
];

function Wordmark({ size = 22, onDark = false, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'flex-end', gap: '.2em',
        fontSize: size, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: .9,
        color: onDark ? 'var(--cream-dark)' : 'var(--ink)', cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <span>Voller</span>
      <i style={{ width: '.33em', height: '.33em', borderRadius: '23.5%', background: 'var(--gold)', flex: 'none' }} />
    </div>
  );
}

function Header({ route, go }) {
  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 10,
        borderBottom: '1px solid var(--hairline)',
        background: 'rgba(252,252,246,.86)', backdropFilter: 'blur(12px)',
      }}
    >
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <Wordmark onClick={() => go('home')} />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {NAV.map((n) => {
            const active = route.name === n.id || (n.id === 'apps' && route.name === 'app');
            return (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                style={{
                  border: 0, background: active ? 'rgba(63,107,39,.07)' : 'transparent',
                  padding: '9px 14px', borderRadius: 'var(--radius-control)',
                  font: '500 15px/1 var(--font-sans)', letterSpacing: '-0.01em',
                  color: active ? 'var(--green-dark)' : 'var(--ink)', cursor: 'pointer',
                }}
              >
                {n.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

function Footer({ go }) {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--cream-dark)', padding: '56px 32px 40px' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 56, justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <img src="../../assets/voller-icon.svg" width="34" height="34" alt="" style={{ borderRadius: '23.5%', display: 'block' }} />
          <Wordmark size={18} onDark />
        </div>
        <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--text-secondary-on-dark)' }}>Apps</div>
            {APPS.map((a) => (
              <button key={a.id} onClick={() => go('app', a.id)} style={{ border: 0, background: 'none', padding: 0, textAlign: 'left', font: '400 14px/1.6 var(--font-sans)', color: 'var(--cream-dark)', cursor: 'pointer' }}>{a.name}</button>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--text-secondary-on-dark)' }}>Studio</div>
            {['About', 'Press kit', 'Privacy', 'Support'].map((t) => (
              <span key={t} style={{ fontSize: 14, color: 'var(--cream-dark)' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 'var(--container)', margin: '40px auto 0', paddingTop: 24, borderTop: '1px solid var(--hairline-dark)', fontSize: 12, color: 'var(--text-secondary-on-dark)' }}>
        © 2026 Voller. Made in Bristol.
      </div>
    </footer>
  );
}

function Section({ children, tone = 'light', style }) {
  const tones = {
    light: { background: 'transparent' },
    field: { background: 'var(--field-light)' },
    cream: { background: 'var(--cream)' },
    dark: { background: 'var(--ink)', color: 'var(--cream-dark)' },
  };
  return (
    <section style={{ padding: '72px 32px', ...tones[tone], ...style }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>{children}</div>
    </section>
  );
}

function Eyebrow({ onDark, children }) {
  return (
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.1em', color: onDark ? 'var(--text-secondary-on-dark)' : 'var(--muted)' }}>
      {children}
    </div>
  );
}

function Btn({ variant = 'primary', size = 'md', iconLeft, iconRight, onDark, onClick, children }) {
  const pad = { sm: '8px 14px', md: '11px 18px', lg: '14px 24px' }[size];
  const fs = { sm: 14, md: 15, lg: 16 }[size];
  const v = {
    primary: { background: 'var(--green)', color: 'var(--off-white)' },
    accent: { background: 'var(--gold)', color: 'var(--green-dark)', fontWeight: 600 },
    quiet: { background: 'transparent', color: onDark ? 'var(--cream-dark)' : 'var(--green-dark)', boxShadow: `inset 0 0 0 1px ${onDark ? 'var(--hairline-dark)' : 'var(--hairline-strong)'}` },
    text: { background: 'transparent', color: onDark ? 'var(--cream-dark)' : 'var(--green-dark)', padding: 0 },
  }[variant];
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        alignSelf: 'flex-start', flex: 'none',
        padding: pad, border: 0, borderRadius: 'var(--radius-control)',
        font: `500 ${fs}px/1 var(--font-sans)`, letterSpacing: '-0.01em', cursor: 'pointer',
        transition: 'background var(--dur-fast) var(--ease)', whiteSpace: 'nowrap', ...v,
      }}
      onMouseEnter={(e) => { if (variant === 'primary') e.currentTarget.style.background = 'var(--green-dark)'; }}
      onMouseLeave={(e) => { if (variant === 'primary') e.currentTarget.style.background = 'var(--green)'; }}
    >
      {iconLeft}<span>{children}</span>{iconRight}
    </button>
  );
}

/* Published for the sibling babel scripts — each src'd babel file gets its own scope. */
window.Wordmark = Wordmark;
window.Header = Header;
window.Footer = Footer;
window.Section = Section;
window.Eyebrow = Eyebrow;
window.Btn = Btn;
window.NAV = NAV;
