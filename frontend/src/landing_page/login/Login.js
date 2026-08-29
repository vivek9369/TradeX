import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
      // Redirect to dashboard, passing token via URL
      window.location.href = `http://localhost:3001/auth-callback?token=${encodeURIComponent(token)}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(form.email)}`;
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5 col-sm-8 col-11">

          <div className="text-center mb-4">
            <img src="/media/images/Trade_X-logo.png" alt="TradeX" style={{ width: '140px', marginBottom: '12px' }} />
            <h2 className="fw-bold">Welcome back</h2>
            <p className="text-muted">Sign in to your TradeX account</p>
          </div>

          {error && (
            <div className="alert alert-danger py-2" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="p-4 border rounded-3 shadow-sm bg-white">
            <div className="mb-3">
              <label htmlFor="login-email" className="form-label fw-medium">Email Address</label>
              <input
                type="email"
                id="login-email"
                name="email"
                className="form-control"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="login-password" className="form-label fw-medium">Password</label>
              <input
                type="password"
                id="login-password"
                name="password"
                className="form-control"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 py-2"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>

            <p className="text-center text-muted mt-3 mb-0" style={{ fontSize: '0.85rem' }}>
              Don't have an account?{' '}
              <Link to="/signUp" className="text-primary text-decoration-none fw-medium">Sign Up</Link>
            </p>
          </form>

          <p className="text-center text-muted mt-3" style={{ fontSize: '0.75rem' }}>
            Protected by 256-bit encryption.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
