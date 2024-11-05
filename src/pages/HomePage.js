import React, { useState } from 'react';
import productsData from '../data/productsData';
import './HomePage.css'; // Assicurati di avere questo file per lo stile dei prodotti

// Component per la pagina di introduzione
const IntroPage = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1 className="site-name-intro">Il Mondo delle Lampadine</h1>
        <p className="site-description">
          Trova la lampadina perfetta per ogni tua esigenza, dalle moderne LED alle classiche alogene.
        </p>
        <button 
          className="enter-button" 
          onClick={() => document.getElementById('product-list').scrollIntoView({ behavior: 'smooth' })}
        >
          Entra nel Catalogo
        </button>
      </div>
    </div>
  );
};

function HomePage() {
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const filterProducts = (category) => {
    const results = productsData.filter((product) => product.category === category);
    setFilteredProducts(results);
  };

  return (
    <div className="home-page">
      {/* Video in loop impostato come sfondo */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={require('../img/intro.mp4')} type="video/mp4" />
        Il tuo browser non supporta il video HTML5.
      </video>

      {/* Aggiungi la pagina di introduzione sopra il catalogo */}
      <IntroPage />
      
      <h1 className="catalogo">Catalogo Lampadine</h1>
      <div className="filter-buttons">
        <button onClick={() => filterProducts('led')}>LED</button>
        <button onClick={() => filterProducts('xenon')}>Xenon</button>
        <button onClick={() => filterProducts('alogena')}>Alogena</button>
        <button onClick={() => setFilteredProducts(productsData)}>Tutti</button>
      </div>
      <div id="product-list" className="product-list">
        {filteredProducts.map((product) => {
          const productImage = require(`../img/${product.img}`);
          
          return (
            <div key={product.id} className="product">
              <img src={productImage} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              <p>Prezzo: €{product.price}</p>
              <a href={`/product/${product.id}`} className="details-button">Dettagli</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
