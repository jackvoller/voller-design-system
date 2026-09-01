function AboutScreen() {
  return (
    <div>
      <section style={{ background: 'var(--field-light)', padding: '72px 32px 56px', borderBottom: '1px solid var(--hairline)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Eyebrow>About</Eyebrow>
          <h1 style={{ fontSize: 'var(--fs-h1)', fontWeight: 600, letterSpacing: '-0.02em' }}>Two people, a room in Bristol</h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 'var(--measure-prose)' }}>
            Voller has no roadmap deck and no growth team. We pick a problem one of us actually has,
            build the smallest thing that solves it, and then leave it alone.
          </p>
        </div>
      </section>

      <Section tone="light">
        <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Eyebrow>The people</Eyebrow>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {[['A', 'Ana Voller', 'Design, icons, the 35° axis'], ['T', 'Tom Reid', 'Everything that compiles']].map(([initial, name, role]) => (
                <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ width: 76, height: 76, flex: 'none', display: 'grid', placeItems: 'center', padding: 5, borderRadius: '50%', background: 'var(--glass-fill)', boxShadow: 'inset 0 0 0 2px var(--glass-stroke)' }}>
                    <span style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--yellow)', display: 'grid', placeItems: 'center', color: 'var(--ink)', fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em' }}>{initial}</span>
                  </span>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em' }}>{name}</div>
                    <div style={{ fontSize: 14, color: 'var(--muted)' }}>{role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Eyebrow>Get in touch</Eyebrow>
            <div style={{ background: 'var(--white)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-card)', padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ fontSize: 15, color: 'var(--muted)' }}>Support replies come from one of the two of us, usually within a day.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontSize: 14, fontWeight: 500 }}>Email</label>
                <input placeholder="you@example.com" style={{ appearance: 'none', padding: '10px 14px', font: '400 16px/1.4 var(--font-sans)', border: '1px solid var(--hairline-strong)', borderRadius: 'var(--radius-control)', outline: 'none', background: 'var(--white)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontSize: 14, fontWeight: 500 }}>Message</label>
                <textarea rows="3" placeholder="What happened?" style={{ appearance: 'none', padding: '10px 14px', font: '400 16px/1.5 var(--font-sans)', border: '1px solid var(--hairline-strong)', borderRadius: 'var(--radius-control)', outline: 'none', background: 'var(--white)', resize: 'vertical' }} />
              </div>
              <Btn variant="primary">Send</Btn>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

/* Published for the sibling babel scripts — each src'd babel file gets its own scope. */
window.AboutScreen = AboutScreen;
