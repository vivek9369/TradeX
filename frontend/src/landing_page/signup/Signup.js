import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:8000/signup', form);
      if (res.status === 201) {
        const { token, name } = res.data;
        // Pass token to dashboard via URL so it can store it in its own localStorage
        window.location.href = `http://localhost:3001/auth-callback?token=${encodeURIComponent(token)}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(form.email)}`;
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
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
            <h2 className="fw-bold">Create your account</h2>
            <p className="text-muted">Start investing in minutes</p>
          </div>

          {error && (
            <div className="alert alert-danger py-2" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="p-4 border rounded-3 shadow-sm bg-white">
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-medium">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-medium">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-medium">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Min. 8 characters"
                value={form.password}
                onChange={handleChange}
                minLength={8}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 py-2"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>

            <p className="text-center text-muted mt-3 mb-0" style={{ fontSize: '0.85rem' }}>
              Already have an account?{' '}
              <Link to="/login" className="text-primary text-decoration-none fw-medium">Log in</Link>
            </p>
          </form>

          <p className="text-center text-muted mt-3" style={{ fontSize: '0.75rem' }}>
            By creating an account, you agree to our Terms of Service &amp; Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
