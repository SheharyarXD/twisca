import logo from './logo.svg';
import './App.css';
import HomePage from './components/Homepage';
import LoginPage from './components/loginsignup';
import ProductPage from './components/ProductPage';
import ProductDetails from './components/ProductsDetails';
import CartList from './components/cartList';
import ShopByPreferences from './components/ShopByPreferences';
import Cart from './components/cart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/shopbypreference" element={<ShopByPreferences />} />
      <Route path="/products/productDetails" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<LoginPage showLogin={true} />} />
      <Route path="/signup" element={<LoginPage showLogin={false} />} />
    </Routes>
  </Router>
  );
}

export default App;
