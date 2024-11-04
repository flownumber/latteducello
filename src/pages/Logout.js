// src/pages/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Rimuove i dati dell'utente
    navigate('/login'); // Reindirizza al login
  };

  return (
    <div>
      <h2>Sei stato disconnesso.</h2>
      <button onClick={handleLogout}>Login</button>
    </div>
  );
}

export default Logout;
