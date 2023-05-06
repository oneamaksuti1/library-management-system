import React, { useState } from 'react';
import './login.css';
import bookBackground from '../../assets/img/bookbackground.jpg';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you would typically send a request to a server to validate the user's credentials
    // and handle the response accordingly
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${bookBackground})`,
        backgroundSize: 'cover',
        height: '100vh'
      }}
    >
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>
        <div className="login-input-container">
          <label htmlFor="email" className="login-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="login-input"
          />
        </div>
        <div className="login-input-container">
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="login-input"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
