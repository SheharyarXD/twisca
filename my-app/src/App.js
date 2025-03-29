import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/Homepage";
import LoginPage from "./components/loginsignup";
import ProductPage from "./components/ProductPage";
import ProductDetails from "./components/ProductsDetails";
import CartList from "./components/cartList";
import ShopByPreferences from "./components/ShopByPreferences";
import { AuthContext, AuthProvider } from "./utils/AuthContext";
import { ProductProvider } from "./utils/ProductsContext";
import OrdersPage from "./components/ordersStatus";
import Cart from "./components/cart";
import { ReviewsContext, ReviewsProvider } from "./utils/ReviewContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./utils/CartContext";
import Contact from "./components/contact";
import Shipment from "./components/Shippment";

function App() {
  return (
    <ProductProvider>
    <CartProvider>
      <ReviewsProvider>
          <AuthProvider>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/Shipment" element={<Shipment />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/shopbypreferences"
                  element={<ShopByPreferences />}
                />
               <Route path="/products/productDetails/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<LoginPage showLogin={true} />} />
                <Route
                  path="/signup"
                  element={<LoginPage showLogin={false} />}
                />
              </Routes>
            </Router>
          </AuthProvider>
      </ReviewsProvider>
    </CartProvider>
        </ProductProvider>
  );
}

export default App;
