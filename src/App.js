import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './pages/HomePage';
import Footer from './pages/Footer';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login'; // Importa il Login
import Register from './pages/Register'; // Importa la Registrazione
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext'; // Importa il provider di autenticazione
import './App.css';
import Backend from './pages/backend';


function App() {
  return (
    <AuthProvider> {/* Aggiungi AuthProvider qui */}
      <CartProvider>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} /> {/* Rotta per il login */}
              <Route path="/register" element={<Register />} /> {/* Rotta per la registrazione */}
              <Route path="/backend" element={<Backend />} /> 
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
