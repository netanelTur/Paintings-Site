import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Log In</h2>
      {error && <alert variant="danger">{error}</alert>}
      <form className="form2-container" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label for="email">Email</label>
          <input className="form2-input" type="email" ref={emailRef} required />
        </div>
        <div className="input-wrapper">
          <label for="password">Password</label>
          <input className="form2-input" type="password" ref={passwordRef} required />
        </div>
        <button className="form2-button" disabled={loading} type="submit">
              Log In
        </button>
      </form>
      <div className="forgot-link">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </div>	
  )
}

export default Login;