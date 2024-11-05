// src/pages/Register.js
import React, { useState } from 'react';
import './Auth.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Logica di registrazione qui
    console.log('Utente registrato:', { username, password });
    // Redirigere a login o home dopo la registrazione
    // Puoi utilizzare un hook come useNavigate per redirigere
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Registrazione</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input type="submit" value="Registrati" />
        </form>
        <div className="footer-reg">
          <p>Hai già un account? <a href="/login">Accedi qui</a></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
