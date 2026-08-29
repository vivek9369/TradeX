import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Funds = () => {
  const [funds, setFunds] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addAmount, setAddAmount] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [adding, setAdding] = useState(false);
  const [toast, setToast] = useState('');

  const fetchFunds = () => {
    setLoading(true);
    axios.get('/allFunds')
      .then(res => { setFunds(res.data); setLoading(false); })
      .catch(() => setLoading(false));
  };

  useEffect(() => { fetchFunds(); }, []);

  const handleAddFunds = () => {
    const amt = parseFloat(addAmount);
    if (!amt || amt <= 0) return;
    setAdding(true);
    axios.post('/addFunds', { amount: amt })
      .then(() => {
        setToast(`₹${amt.toLocaleString('en-IN', { minimumFractionDigits: 2 })} added!`);
        setAddAmount('');
        setShowInput(false);
        fetchFunds();
        setTimeout(() => setToast(''), 3000);
      })
      .catch(() => setToast('Failed to add funds.'))
      .finally(() => setAdding(false));
  };

  if (loading) {
    return (
      <div style={s.page}>
        <div style={s.spinner} /><style>{spin}</style>
      </div>
    );
  }

  if (!funds) {
    return (
      <div style={s.page}>
        <p style={{ color: '#aaa' }}>Unable to load funds. Is the server running?</p>
      </div>
    );
  }

  const total = funds.availableMargin + funds.usedMargin;
  const usedPct = total > 0 ? Math.round((funds.usedMargin / total) * 100) : 0;
  const fmt = (n) => `₹${Number(n).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;

  return (
    <div style={s.page}>
      {/* Header */}
      <div style={s.header}>
        <div>
          <h3 style={s.title}>Funds &amp; Margins</h3>
          <p style={s.sub}>Equity · NSE / BSE</p>
        </div>
        <button style={s.addBtn} onClick={() => setShowInput(!showInput)}>
          + Add Funds
        </button>
      </div>

      {/* Toast */}
      {toast && <div style={s.toast}>{toast}</div>}

      {/* Add Funds panel */}
      {showInput && (
        <div style={s.addPanel}>
          <input
            type="number"
            placeholder="Enter amount (₹)"
            value={addAmount}
            onChange={e => setAddAmount(e.target.value)}
            style={s.input}
            onKeyDown={e => e.key === 'Enter' && handleAddFunds()}
            autoFocus
          />
          <button style={{ ...s.addBtn, marginLeft: 10, opacity: adding ? 0.6 : 1 }}
            onClick={handleAddFunds} disabled={adding}>
            {adding ? 'Adding...' : 'Confirm'}
          </button>
          <button style={s.cancelBtn} onClick={() => setShowInput(false)}>Cancel</button>
        </div>
      )}

      {/* Hero cards */}
      <div style={s.heroRow}>
        <div style={{ ...s.heroCard, background: 'linear-gradient(135deg,#e8f5e9,#f0f4ff)' }}>
          <p style={s.heroLabel}>Available Margin</p>
          <h2 style={{ ...s.heroVal, color: '#2e7d32' }}>{fmt(funds.availableMargin)}</h2>
        </div>
        <div style={{ ...s.heroCard, background: 'linear-gradient(135deg,#fff3e0,#fce4ec)' }}>
          <p style={s.heroLabel}>Used Margin</p>
          <h2 style={{ ...s.heroVal, color: '#e53935' }}>{fmt(funds.usedMargin)}</h2>
        </div>
        <div style={{ ...s.heroCard, background: 'linear-gradient(135deg,#e3f2fd,#ede7f6)' }}>
          <p style={s.heroLabel}>Opening Balance</p>
          <h2 style={{ ...s.heroVal, color: '#1565c0' }}>{fmt(funds.openingBalance)}</h2>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#999', marginBottom: 6 }}>
          <span>Margin utilization</span>
          <span style={{ color: usedPct > 70 ? '#e53935' : '#555' }}>{usedPct}% used</span>
        </div>
        <div style={s.track}>
          <div style={{
            ...s.fill,
            width: `${usedPct}%`,
            background: usedPct > 70 ? 'linear-gradient(90deg,#ff7043,#e53935)' : 'linear-gradient(90deg,#4184f3,#42a5f5)'
          }} />
        </div>
      </div>

      {/* Breakdown table */}
      <div style={s.grid}>
        <div style={s.gridHeader}>
          <span>Margin Breakdown</span>
        </div>
        {[
          { label: 'Payin', value: fmt(funds.payin), positive: true },
          { label: 'SPAN Margin', value: fmt(funds.span) },
          { label: 'Delivery Margin', value: fmt(funds.deliveryMargin) },
          { label: 'Exposure Margin', value: fmt(funds.exposure) },
          { label: 'Options Premium', value: fmt(funds.optionsPremium) },
        ].map(({ label, value, positive }) => (
          <div key={label} style={s.row}>
            <span style={s.rowLabel}>{label}</span>
            <span style={{ ...s.rowVal, color: positive ? '#2e7d32' : '#444' }}>{value}</span>
          </div>
        ))}
      </div>

      <p style={{ color: '#ccc', fontSize: '0.72rem', marginTop: 16 }}>
        Last updated: {new Date(funds.updatedAt).toLocaleString('en-IN')}
      </p>

      <style>{spin}</style>
    </div>
  );
};

const spin = `@keyframes spin { to { transform: rotate(360deg); } }`;

const s = {
  page: { padding: '2% 3%', maxWidth: 760 },
  spinner: {
    width: 36, height: 36, border: '3px solid #eee',
    borderTop: '3px solid #4184f3', borderRadius: '50%',
    animation: 'spin 0.8s linear infinite', margin: '15% auto',
  },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 },
  title: { fontSize: '1.3rem', fontWeight: 300, color: '#474747', margin: 0 },
  sub: { fontSize: '0.78rem', color: '#aaa', marginTop: 4 },
  addBtn: {
    background: '#4184f3', color: '#fff', border: 'none',
    padding: '9px 18px', borderRadius: 6, fontSize: '0.82rem',
    fontWeight: 500, cursor: 'pointer',
  },
  cancelBtn: {
    background: '#f5f5f5', color: '#555', border: '1px solid #ddd',
    padding: '9px 16px', borderRadius: 6, fontSize: '0.82rem', cursor: 'pointer', marginLeft: 8,
  },
  addPanel: {
    display: 'flex', alignItems: 'center', background: '#f9f9f9',
    border: '1px solid #eee', borderRadius: 8, padding: '14px 16px', marginBottom: 20,
  },
  input: {
    flex: 1, border: '1px solid #ddd', borderRadius: 6,
    padding: '9px 14px', fontSize: '0.9rem', outline: 'none',
  },
  toast: {
    background: '#e8f5e9', color: '#2e7d32', border: '1px solid #c8e6c9',
    borderRadius: 6, padding: '10px 16px', fontSize: '0.85rem', marginBottom: 16,
  },
  heroRow: { display: 'flex', gap: 14, marginBottom: 24, flexWrap: 'wrap' },
  heroCard: {
    flex: 1, minWidth: 180, borderRadius: 12, padding: '18px 20px',
    border: '1px solid #e8edf5',
  },
  heroLabel: { fontSize: '0.75rem', color: '#888', margin: '0 0 6px' },
  heroVal: { fontSize: '1.6rem', fontWeight: 300, margin: 0 },
  track: { height: 8, background: '#eee', borderRadius: 99, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: 99, transition: 'width 0.5s ease' },
  grid: { background: '#fff', border: '1px solid #f0f0f0', borderRadius: 10, overflow: 'hidden' },
  gridHeader: {
    padding: '12px 18px', background: '#fafafa',
    borderBottom: '1px solid #f0f0f0', fontSize: '0.78rem',
    fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em',
  },
  row: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '13px 18px', borderBottom: '1px solid #f5f5f5',
  },
  rowLabel: { fontSize: '0.85rem', color: '#777' },
  rowVal: { fontSize: '0.9rem', fontWeight: 500 },
};

export default Funds;
