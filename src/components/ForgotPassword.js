import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
	const emailRef = useRef();
	const { resetPassword } = useAuth();
	const [error, setError] = useState("");
  const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
	  e.preventDefault();
  
	  try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
	  } catch {
		  setError("Failed to reset password");
	  }
  
	  setLoading(false);
	}
  
	return (
	  <div className="forgot-container">
      <h2 className="login-title">Password Reset</h2>
      {error && <alert variant="danger">{error}</alert>}
      {message && <alert variant="success">{message}</alert>}
      <form className="form2-container" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label for="email">Email</label>
          <input className="form2-input" type="email" ref={emailRef} required />
        </div>
        <button className="form2-button" disabled={loading} type="submit">
          Reset Password
        </button>
      </form>
      <div className="forgot-link">
        <Link to="/login">Login</Link>
      </div>
	  </div>	
	)
}

export default ForgotPassword;