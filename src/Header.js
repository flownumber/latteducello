import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './context/CartContext';
import { useAuth } from './context/AuthContext'; 
import './Header.css';
import logo from './img/logo.jpg';
import cartIcon from './img/cart.png';
import logIcon from './img/log.png';
import productsData from './data/productsData'; // Importa i dati dei prodotti

function Header() {
  const { cartItems, updateQuantity } = useCart();
  const { user, logout } = useAuth(); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => navigate('/');

  // Funzione per aprire/chiudere il dropdown del carrello
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Funzione per aprire/chiudere il dropdown del profilo utente
  const toggleLoginDropdown = () => setIsLoginDropdownOpen((prev) => !prev);

  const handleLoginClick = () => navigate('/login');

  const handleRegisterClick = () => navigate('/register');

  const handleLogoutClick = () => {
    logout();
    console.log("Utente disconnesso");
  };

  // Funzione per ottenere l'immagine del prodotto dal suo ID
  const getProductImage = (productId) => {
    const product = productsData.find((p) => p.id === productId);
    return product ? require(`./img/${product.img}`) : null; // Carica l'immagine in base al nome del file
  };

  return (
    <header className="header">
      <div className="header-left" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="site-name">Latteducello</h1>
      </div>
      <div className="header-right">
        <div className="cart-container" onClick={toggleDropdown}>
          <img src={cartIcon} alt="Carrello" className="cart-icon" />
          {cartItems.length > 0 && (
            <span className="cart-count">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
          {isDropdownOpen && (
            <div className="cart-dropdown" onClick={(e) => e.stopPropagation()}>
              <h4>Articoli nel Carrello:</h4>
              {cartItems.length === 0 ? (
                <p>Il carrello è vuoto</p>
              ) : (
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={index} className="cart-item">
                      <img src={getProductImage(item.id)} alt="Immagine Articolo" className="cart-item-image" />
                      <div className="cart-item-details">
                        <span>{item.name}</span>
                        <span>€{item.price} x {item.quantity}</span>
                      </div>
                      <div className="cart-item-controls">
                        <button onClick={(e) => { e.stopPropagation(); updateQuantity(item.id, 1); }}>+</button>
                        <button onClick={(e) => { e.stopPropagation(); updateQuantity(item.id, -1); }}>-</button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <Link to="/cart" className="view-cart-button" onClick={(e) => e.stopPropagation()}>
                Vai al Carrello
              </Link>
            </div>
          )}
        </div>
        <div className="login-container" onClick={toggleLoginDropdown}>
          <img src={logIcon} alt="Login" className="login-icon" />
          {isLoginDropdownOpen && (
            <div className="login-dropdown" onClick={(e) => e.stopPropagation()}>
              {user ? (
                <div>
                  <p>Benvenuto, {user.username}!</p>
                  <button onClick={handleLogoutClick}>Logout</button>
                </div>
              ) : (
                <div>
                  <button onClick={handleLoginClick}>Accedi</button>
                  <button onClick={handleRegisterClick}>Registrati</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
