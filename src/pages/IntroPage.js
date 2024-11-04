import React from 'react';
import './IntroPage.css';

function IntroPage() {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1 className="site-name">Il Mondo delle Lampadine</h1>
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
}

export default IntroPage;
