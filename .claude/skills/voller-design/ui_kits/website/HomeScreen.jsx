function AppCard({ app, go }) {
  return (
    <div
      onClick={() => go('app', app.id)}
      style={{
        display: 'flex', flexDirection: 'column', gap: 16, padding: 24, cursor: 'pointer',
        background: 'var(--white)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-card)',
        transition: 'border-color var(--dur-base) var(--ease)',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--green)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--hairline)'; }}
    >
      <img src={`../../assets/app-icons/${app.id}.png`} width="64" height="64" alt="" style={{ borderRadius: 'var(--radius-icon)', display: 'block' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em' }}>{app.name}</div>
        <div style={{ fontSize: 15, color: 'var(--ink)' }}>{app.tagline}</div>
        <div style={{ fontSize: 13, color: 'var(--muted)' }}>{app.platform} · {app.price}</div>
      </div>
    </div>
  );
}

function HomeScreen({ go }) {
  return (
    <div>
      <section style={{ background: 'var(--field-light)', padding: '112px 32px 72px', borderBottom: '1px solid var(--hairline)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'flex', gap: 56, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 420px', display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 620 }}>
            <Eyebrow>Bristol · since 2019</Eyebrow>
            <h1 style={{ fontSize: 'var(--fs-display)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Four small apps that do one thing each.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink)', maxWidth: 'var(--measure-prose)' }}>
              Voller is a two-person studio. We build for the platform, keep the data on the device,
              and ship when it is finished.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
              <Btn variant="primary" onClick={() => go('apps')} iconRight={<Icon name="arrowRight" size={17} />}>See the apps</Btn>
              <Btn variant="quiet" onClick={() => go('about')}>About the studio</Btn>
            </div>
          </div>
          <div style={{ flex: '0 0 300px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {APPS.map((a) => (
              <img key={a.id} src={`../../assets/app-icons/${a.id}.png`} width="140" height="140" alt={a.name}
                   onClick={() => go('app', a.id)}
                   style={{ width: 140, height: 140, borderRadius: 'var(--radius-icon)', display: 'block', cursor: 'pointer' }} />
            ))}
          </div>
        </div>
      </section>

      <Section tone="light">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Eyebrow>The family</Eyebrow>
            <h2 style={{ fontSize: 'var(--fs-h1)', fontWeight: 600, letterSpacing: '-0.02em' }}>Siblings, not a suite</h2>
            <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 'var(--measure-prose)' }}>
              They share a look because they were drawn on the same grid — not because they talk to each other.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {APPS.map((a) => <AppCard key={a.id} app={a} go={go} />)}
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 560 }}>
            <Eyebrow onDark>How we work</Eyebrow>
            <h2 style={{ fontSize: 'var(--fs-h1)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--cream-dark)' }}>
              No accounts. No feed. No telemetry.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--text-secondary-on-dark)' }}>
              Every app works with the network off. If something needs a server, we usually decide it
              does not need building.
            </p>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {['On-device by default', 'One-time purchase, universal', 'Updated for each OS release'].map((t) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', background: 'var(--surface-card-dark)', border: '1px solid var(--hairline-dark)', borderRadius: 'var(--radius-row)' }}>
                <span style={{ color: 'var(--green)', display: 'flex' }}><Icon name="check" size={18} /></span>
                <span style={{ fontSize: 15, color: 'var(--cream-dark)' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 520 }}>
            <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 600, letterSpacing: '-0.02em' }}>Release notes, four times a year</h2>
            <p style={{ fontSize: 15, color: 'var(--muted)' }}>What shipped and what broke. Nothing else.</p>
          </div>
          <form style={{ display: 'flex', gap: 10, alignItems: 'center' }} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email" placeholder="you@example.com"
              style={{ appearance: 'none', width: 260, padding: '11px 14px', font: '400 16px/1.4 var(--font-sans)', color: 'var(--ink)', background: 'var(--white)', border: '1px solid var(--hairline-strong)', borderRadius: 'var(--radius-control)', outline: 'none' }}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--green)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--hairline-strong)'; }}
            />
            <Btn variant="primary" iconLeft={<Icon name="mail" size={17} />}>Subscribe</Btn>
          </form>
        </div>
      </Section>
    </div>
  );
}

/* Published for the sibling babel scripts — each src'd babel file gets its own scope. */
window.AppCard = AppCard;
window.HomeScreen = HomeScreen;
