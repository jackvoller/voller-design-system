function App() {
  const [route, setRoute] = React.useState({ name: 'home', id: null });
  const go = (name, id = null) => { setRoute({ name, id }); window.scrollTo(0, 0); };
  const app = APPS.find((a) => a.id === route.id) || APPS[3];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--off-white)' }}>
      <Header route={route} go={go} />
      <main style={{ flex: 1 }}>
        {route.name === 'home' && <HomeScreen go={go} />}
        {route.name === 'apps' && <AppsScreen go={go} />}
        {route.name === 'app' && <AppDetailScreen app={app} go={go} />}
        {route.name === 'about' && <AboutScreen />}
      </main>
      <Footer go={go} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
