function AppDetailScreen({ app, go }) {
  return (
    <div>
      <section style={{ background: 'var(--field-light)', padding: '40px 32px 56px', borderBottom: '1px solid var(--hairline)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
          <Btn variant="text" onClick={() => go('apps')} iconLeft={<Icon name="arrowLeft" size={17} />}>All apps</Btn>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
            <img src={`../../assets/app-icons/${app.id}.png`} width="136" height="136" alt="" style={{ borderRadius: 'var(--radius-icon)', display: 'block', flex: 'none' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 620 }}>
              <Eyebrow>{app.platform}</Eyebrow>
              <h1 style={{ fontSize: 'var(--fs-h1)', fontWeight: 600, letterSpacing: '-0.02em' }}>{app.name} — {app.tagline}</h1>
              <p style={{ fontSize: 17, lineHeight: 1.6 }}>{app.blurb}</p>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 4 }}>
                {/* Green, not gold: the sticky header's wordmark tile is this view's single gold. */}
                <Btn variant="primary" size="lg" iconLeft={<Icon name="download" size={18} />}>Get {app.name} — {app.price}</Btn>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>Version {app.version}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section tone="light">
        <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Eyebrow>What it does</Eyebrow>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {app.features.map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{ color: 'var(--green)', display: 'flex', marginTop: 3 }}><Icon name="check" size={18} /></span>
                  <span style={{ fontSize: 16 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Eyebrow>Specification</Eyebrow>
            <div style={{ background: 'var(--white)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-card)', overflow: 'hidden' }}>
              {[['Core action', app.verb], ['Platform', app.platform], ['Price', app.price], ['Version', app.version], ['Data', 'On device only']].map(([k, v], i) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '14px 20px', borderTop: i === 0 ? 0 : '1px solid var(--hairline)' }}>
                  <span style={{ fontSize: 14, color: 'var(--muted)' }}>{k}</span>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Eyebrow>Also from Voller</Eyebrow>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {APPS.filter((a) => a.id !== app.id).map((a) => (
              <div key={a.id} onClick={() => go('app', a.id)} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 16, background: 'var(--white)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-row)', cursor: 'pointer', minWidth: 230, flex: 1 }}>
                <img src={`../../assets/app-icons/${a.id}.png`} width="48" height="48" alt="" style={{ borderRadius: 'var(--radius-icon)', display: 'block' }} />
                <div>
                  <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em' }}>{a.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)' }}>{a.tagline}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

/* Published for the sibling babel scripts — each src'd babel file gets its own scope. */
window.AppDetailScreen = AppDetailScreen;
