import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

// This page is the landing point after signup/login from the frontend.
// The frontend redirects here with ?token=...&name=...&email=...
// We read those params, call login() to store in localStorage, then go to /

const AuthCallback = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const name = params.get('name');
    const email = params.get('email');

    if (token && name) {
      login(token, { name, email });
      navigate('/', { replace: true });
    } else {
      // No token — go to dashboard login
      navigate('/login', { replace: true });
    }
  }, [location.search, login, navigate]);

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      height: '100vh', fontFamily: "'Segoe UI', sans-serif"
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: '44px', height: '44px', border: '3px solid #e0e0e0',
          borderTop: '3px solid #4184f3', borderRadius: '50%',
          animation: 'spin 0.8s linear infinite', margin: '0 auto 16px'
        }} />
        <p style={{ color: '#888', fontSize: '0.9rem' }}>Signing you in...</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
};

export default AuthCallback;
