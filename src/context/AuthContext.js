// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Controlla se c'è un utente nel localStorage o sessionStorage all'avvio
    const savedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    // Il salvataggio nei storage dovrebbe già essere gestito nel Login.js
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Rimuovi l'utente dal localStorage
    sessionStorage.removeItem('user'); // Rimuovi l'utente dal sessionStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
