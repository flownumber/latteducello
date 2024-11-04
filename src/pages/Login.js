import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css';
import usersData from './users.json';

function Login() {
  const { login } = useAuth(); // Recupera la funzione di login dal contesto
  const [username, setUsername] = useState(''); // Stato per l'username
  const [password, setPassword] = useState(''); // Stato per la password
  const [rememberMe, setRememberMe] = useState(false); // Stato per il checkbox "Ricordami"
  const navigate = useNavigate(); // Hook per navigare tra le pagine

  const handleLogin = (e) => {
    e.preventDefault(); // Previene il comportamento predefinito del form

    // Trova l'utente in base a username e password
    const user = usersData.find(user => user.username === username && user.password === password);
    
    if (user) {
      // Crea un oggetto con le informazioni dell'utente
      const userData = {
        id: user.id,
        username: user.username,
        isAdmin: user.isAdmin,
      };

      // Salva le informazioni dell'utente nel localStorage o sessionStorage
      if (rememberMe) {
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        sessionStorage.setItem('user', JSON.stringify(userData));
      }

      login(userData); // Aggiorna lo stato globale dell'utente

      // Naviga verso la pagina appropriata in base al ruolo dell'utente
      if (user.isAdmin) {
        navigate('/backend'); // Reindirizza all'area admin
      } else {
        navigate('/'); // Reindirizza alla homepage per utenti normali
      }
    } else {
      // Mostra un messaggio di errore se l'autenticazione fallisce
      alert('Username o password non corretti!');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          <div>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label>Ricordami</label>
          </div>
          <input type="submit" value="Accedi" />
        </form>
      </div>
    </div>
  );
}

export default Login;
