import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/productsData';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((product) => product.id === parseInt(id));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  // Carica l'immagine direttamente dal percorso basato sul nome del file specificato
  const productImage = require(`../img/${product.img}`);

  return (
    <div className="product-detail">
      <h1 className="product-title">{product.name}</h1>
      <img src={productImage} alt={product.name} className="product-image" />
      <p className="product-price">Prezzo: €{product.price}</p>
      <p className="product-description">Descrizione: {product.description}</p>
      <div className="quantity-container">
        <label>Quantità: </label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          className="quantity-input"
        />
      </div>
      <button onClick={handleAddToCart} className="add-to-cart-button">Aggiungi al Carrello</button>
    </div>
  );
}

export default ProductDetail;
