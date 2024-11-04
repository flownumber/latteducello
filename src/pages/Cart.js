import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import productsData from '../data/productsData'; // Importa i dati dei prodotti
import './Cart.css';

function Cart() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleBackToCatalog = () => {
    navigate('/');
  };

  // Calcola il totale
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Funzione per ottenere l'immagine del prodotto dal suo ID
  const getProductImage = (productId) => {
    const product = productsData.find((p) => p.id === productId);
    return product ? require(`../img/${product.img}`) : null; // Carica l'immagine in base al nome del file
  };

  return (
    <div className="cart-container-cart">
      <h1>Riepilogo Ordine</h1>
      {cartItems.length === 0 ? (
        <p>Il carrello è vuoto</p>
      ) : (
        <div className="order-summary">
          <ul className="cart-items-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={getProductImage(item.id)} alt={item.name} className="cart-item-image" />
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-quantity">Quantità: {item.quantity}</span>
                <span className="cart-item-price">€{item.price.toFixed(2)}</span>
                <span className="cart-item-total">€{(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <h2 className="order-total">Totale Ordine: €{calculateTotal()}</h2>
        </div>
      )}
      <button onClick={handleBackToCatalog} className="back-to-catalog-button">Torna al Catalogo</button>
    </div>
  );
}

export default Cart;
