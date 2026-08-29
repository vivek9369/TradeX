import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:8000/login', form);
      const { token, name } = res.data;
      // Store token directly since we're already on the dashboard origin
      login(token, { name, email: form.email });
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        {/* Logo / Header */}
        <div style={styles.header}>
          <div style={styles.logoRing}>T</div>
          <h2 style={styles.title}>TradeX</h2>
          <p style={styles.subtitle}>Sign in to your dashboard</p>
        </div>

        {/* Error */}
        {error && (
          <div style={styles.errorBox}>
            <span>⚠ </span>{error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label} htmlFor="login-email">Email Address</label>
            <input
              id="login-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label} htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={{ ...styles.submitBtn, opacity: loading ? 0.7 : 1 }} disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p style={styles.footer}>
          Don't have an account?{' '}
          <a href="http://localhost:3000/signUp" style={styles.link}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #e8f0fe 100%)',
    fontFamily: "'Segoe UI', sans-serif",
    padding: '20px',
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    padding: '40px 36px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 8px 32px rgba(65, 132, 243, 0.12)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '28px',
  },
  logoRing: {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #4184f3, #6ea8fe)',
    color: '#fff',
    fontSize: '1.4rem',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 12px',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#1a1a2e',
    margin: '0 0 4px',
  },
  subtitle: {
    fontSize: '0.85rem',
    color: '#888',
    margin: 0,
  },
  errorBox: {
    background: '#fff0f0',
    border: '1px solid #ffcdd2',
    color: '#c62828',
    borderRadius: '8px',
    padding: '10px 14px',
    fontSize: '0.83rem',
    marginBottom: '16px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '0.82rem',
    fontWeight: 600,
    color: '#444',
  },
  input: {
    border: '1px solid #dde1e7',
    borderRadius: '8px',
    padding: '11px 14px',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border 0.2s',
  },
  submitBtn: {
    marginTop: '8px',
    background: 'linear-gradient(135deg, #4184f3, #6ea8fe)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '13px',
    fontSize: '0.95rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
  footer: {
    textAlign: 'center',
    fontSize: '0.82rem',
    color: '#888',
    marginTop: '20px',
    marginBottom: 0,
  },
  link: {
    color: '#4184f3',
    fontWeight: 600,
    textDecoration: 'none',
  },
};

export default Login;
