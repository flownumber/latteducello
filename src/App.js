import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import Backend from './pages/backend';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router basename="/latteducello">
          <div className="App">
            <Header />
            <Routes>
              {/* Reindirizza direttamente alla HomePage */}
              <Route path="/" element={<Navigate to="/homepage" replace />} />
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/backend" element={<Backend />} />
              {/* Redirect per rotte non definite */}
              <Route path="*" element={<Navigate to="/homepage" />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
