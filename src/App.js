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
        <Router basename="/latteducello"> {/* Imposta il basename */}
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/backend" element={<Backend />} />
              <Route path="*" element={<Navigate to="/" />} /> {/* Redirect per percorsi non definiti */}
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
