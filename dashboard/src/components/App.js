import React, { useState } from 'react';

const apps = [
  {
    id: 'screener',
    icon: '🔍',
    name: 'Stock Screener',
    category: 'Research',
    description: 'Filter stocks by PE ratio, market cap, volume, 52-week high/low and 50+ other parameters.',
    color: '#e3f2fd',
    accent: '#1565c0',
    installed: true,
  },
  {
    id: 'sensibull',
    icon: '📊',
    name: 'Options Trader',
    category: 'Derivatives',
    description: 'Visual options strategy builder with P&L charts, Greeks, and strategy backtest.',
    color: '#f3e5f5',
    accent: '#7b1fa2',
    installed: false,
  },
  {
    id: 'smallcase',
    icon: '🗂️',
    name: 'Smallcase',
    category: 'Portfolios',
    description: 'Invest in expert-curated thematic baskets of stocks & ETFs in a single click.',
    color: '#e8f5e9',
    accent: '#2e7d32',
    installed: true,
  },
  {
    id: 'ticker',
    icon: '📈',
    name: 'Ticker',
    category: 'Research',
    description: 'In-depth fundamentals, financials, and peer comparisons for NSE/BSE listed companies.',
    color: '#fff3e0',
    accent: '#e65100',
    installed: false,
  },
  {
    id: 'streak',
    icon: '⚡',
    name: 'Streak — Algo Trader',
    category: 'Automation',
    description: 'Create, backtest and deploy no-code algo trading strategies on live markets.',
    color: '#fce4ec',
    accent: '#c62828',
    installed: false,
  },
  {
    id: 'ditto',
    icon: '🛡️',
    name: 'Ditto Insurance',
    category: 'Insurance',
    description: 'Get unbiased health & life insurance advice from SEBI-registered advisors.',
    color: '#e0f7fa',
    accent: '#00695c',
    installed: false,
  },
  {
    id: 'goldbees',
    icon: '🥇',
    name: 'Gold ETF Tracker',
    category: 'Commodities',
    description: 'Track live gold prices, SGB rates and compare gold ETFs across AMCs.',
    color: '#fffde7',
    accent: '#f57f17',
    installed: false,
  },
  {
    id: 'twitt',
    icon: '📰',
    name: 'Market News',
    category: 'News',
    description: 'Curated real-time market news, earnings alerts, and corporate announcements.',
    color: '#e8eaf6',
    accent: '#283593',
    installed: true,
  },
];

const categories = ['All', 'Research', 'Derivatives', 'Portfolios', 'Automation', 'Insurance', 'Commodities', 'News'];

const AppPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [installedApps, setInstalledApps] = useState(
    apps.filter(a => a.installed).map(a => a.id)
  );
  const [search, setSearch] = useState('');

  const toggleInstall = (id) => {
    setInstalledApps(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const filtered = apps.filter(app => {
    const matchCat = activeCategory === 'All' || app.category === activeCategory;
    const matchSearch = app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const installed = apps.filter(a => installedApps.includes(a.id));

  return (
    <div style={s.page}>
      {/* Header */}
      <div style={s.header}>
        <div>
          <h3 style={s.title}>Apps &amp; Tools</h3>
          <p style={s.sub}>Extend your trading experience with powerful integrations</p>
        </div>
      </div>

      {/* Installed strip */}
      {installed.length > 0 && (
        <div style={s.installedSection}>
          <p style={s.sectionLabel}>✅ Installed ({installed.length})</p>
          <div style={s.chipRow}>
            {installed.map(app => (
              <div key={app.id} style={{ ...s.chip, background: app.color, color: app.accent }}>
                <span>{app.icon}</span>
                <span>{app.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search */}
      <input
        type="text"
        placeholder="Search apps..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={s.searchInput}
      />

      {/* Category pills */}
      <div style={s.pills}>
        {categories.map(cat => (
          <button
            key={cat}
            style={{ ...s.pill, ...(activeCategory === cat ? s.pillActive : {}) }}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Apps grid */}
      <div style={s.grid}>
        {filtered.length === 0 && (
          <p style={{ color: '#aaa', gridColumn: '1/-1' }}>No apps found.</p>
        )}
        {filtered.map(app => {
          const isInstalled = installedApps.includes(app.id);
          return (
            <div key={app.id} style={s.card}>
              {/* Icon */}
              <div style={{ ...s.iconBox, background: app.color }}>
                <span style={{ fontSize: '1.8rem' }}>{app.icon}</span>
              </div>

              <div style={s.cardBody}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h4 style={s.appName}>{app.name}</h4>
                    <span style={{ ...s.catBadge, background: app.color, color: app.accent }}>
                      {app.category}
                    </span>
                  </div>
                  <button
                    style={{
                      ...s.installBtn,
                      background: isInstalled ? '#f5f5f5' : '#4184f3',
                      color: isInstalled ? '#555' : '#fff',
                      border: isInstalled ? '1px solid #ddd' : 'none',
                    }}
                    onClick={() => toggleInstall(app.id)}
                  >
                    {isInstalled ? 'Installed ✓' : 'Install'}
                  </button>
                </div>
                <p style={s.desc}>{app.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const s = {
  page: { padding: '2% 3%', maxWidth: 900 },
  header: { marginBottom: 20 },
  title: { fontSize: '1.3rem', fontWeight: 300, color: '#474747', margin: 0 },
  sub: { fontSize: '0.82rem', color: '#aaa', marginTop: 4 },
  installedSection: {
    background: '#fafafa', border: '1px solid #f0f0f0',
    borderRadius: 10, padding: '12px 16px', marginBottom: 20,
  },
  sectionLabel: { fontSize: '0.78rem', fontWeight: 600, color: '#888', margin: '0 0 10px' },
  chipRow: { display: 'flex', gap: 8, flexWrap: 'wrap' },
  chip: {
    display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px',
    borderRadius: 99, fontSize: '0.78rem', fontWeight: 500,
  },
  searchInput: {
    width: '100%', boxSizing: 'border-box', border: '1px solid #e0e0e0',
    borderRadius: 8, padding: '10px 16px', fontSize: '0.88rem',
    outline: 'none', marginBottom: 16,
  },
  pills: { display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 },
  pill: {
    border: '1px solid #e0e0e0', background: '#fff', borderRadius: 99,
    padding: '5px 14px', fontSize: '0.8rem', cursor: 'pointer', color: '#555',
  },
  pillActive: { background: '#4184f3', color: '#fff', border: '1px solid #4184f3' },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: 16,
  },
  card: {
    background: '#fff', border: '1px solid #f0f0f0', borderRadius: 12,
    overflow: 'hidden', transition: 'box-shadow 0.2s',
    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
  },
  iconBox: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    height: 72, borderBottom: '1px solid rgba(0,0,0,0.04)',
  },
  cardBody: { padding: '14px 16px' },
  appName: { fontSize: '0.95rem', fontWeight: 600, color: '#2c2c2c', margin: '0 0 6px' },
  catBadge: {
    display: 'inline-block', fontSize: '0.68rem', fontWeight: 600,
    padding: '2px 8px', borderRadius: 99, marginBottom: 8,
  },
  desc: { fontSize: '0.8rem', color: '#777', lineHeight: 1.5, margin: '8px 0 0' },
  installBtn: {
    padding: '6px 14px', borderRadius: 6, fontSize: '0.78rem',
    fontWeight: 500, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
  },
};

export default AppPage;
