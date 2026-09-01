function AppsScreen({ go }) {
  return (
    <div>
      <section style={{ background: 'var(--field-light)', padding: '72px 32px 56px', borderBottom: '1px solid var(--hairline)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Eyebrow>Four apps</Eyebrow>
          <h1 style={{ fontSize: 'var(--fs-h1)', fontWeight: 600, letterSpacing: '-0.02em' }}>Everything we ship</h1>
          <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 'var(--measure-prose)' }}>
            One-time purchase, universal across the devices listed. No subscriptions anywhere.
          </p>
        </div>
      </section>

      <Section tone="light" style={{ paddingTop: 56 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {APPS.map((a) => (
            <div
              key={a.id}
              onClick={() => go('app', a.id)}
              style={{ display: 'flex', gap: 24, alignItems: 'center', padding: 24, background: 'var(--white)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-card)', cursor: 'pointer', transition: 'border-color var(--dur-base) var(--ease)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--yellow-dark)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--hairline)'; }}
            >
              <img src={`../../assets/app-icons/${a.id}.png`} width="88" height="88" alt="" style={{ borderRadius: 'var(--radius-icon)', display: 'block', flex: 'none' }} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em' }}>{a.name}</span>
                  <span style={{ display: 'inline-flex', padding: '4px 10px', borderRadius: 'var(--radius-pill)', background: 'var(--yellow-wash)', color: 'var(--yellow-dark)', fontSize: 12, fontWeight: 500 }}>v{a.version}</span>
                </div>
                <p style={{ fontSize: 15, color: 'var(--ink)', maxWidth: 620 }}>{a.blurb}</p>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>{a.platform} · {a.price}</div>
              </div>
              <span style={{ color: 'var(--muted)', display: 'flex' }}><Icon name="chevronRight" size={20} /></span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

/* Published for the sibling babel scripts — each src'd babel file gets its own scope. */
window.AppsScreen = AppsScreen;
