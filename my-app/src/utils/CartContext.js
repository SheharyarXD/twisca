import React, { createContext, useState, useEffect } from 'react';
import { useContext } from 'react';
import { ProductContext } from './ProductsContext';

// Create the Cart Context
export const CartContext = createContext();

// CartProvider component to provide context values to child components
export const CartProvider = ({ children }) => {
    const basicUrl = 'http://localhost:3000'; 
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
    const { selectedProduct, 
      fetchProductById}=useContext(ProductContext)

  // Fetch cart data for a user from the backend
  const fetchCart = async (userId) => {
    setLoading(true);
    try {
      const response = await fetch(`${basicUrl}/api/cart/${userId}`);
      const data = await response.json();
      
      if (data.cartItems) {
          // For each cart item, fetch the product details
          const cartWithProducts = await Promise.all(data.cartItems.map(async (cartItem) => {
            const productDetails = await fetchProductById(cartItem.productid);
            return {
              ...cartItem, // Existing cart item data
              productName: productDetails ? productDetails.productname : 'Unknown Product', // Add product name
              price: productDetails ? productDetails.price : 'N/A' // Add product price
            };
          }));
          
          setCart(cartWithProducts);
          console.log(cartWithProducts);
      } else {
        console.error('No cart items found');
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };

  // Add item to the cart
  const addToCart = async (userId, productId, quantity) => {
    try {
      const response = await fetch(`${basicUrl}/api/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, productId, quantity }),
      });
      const data = await response.json();
      if (data.cartItem) {
        setCart((prevCart) => [...prevCart, data.cartItem]);
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  // Update item quantity in the cart
  const updateCartItem = async (cartId, quantity) => {
    try {
      const response = await fetch(`${basicUrl}/api/cart/${cartId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity }),
      });
      const data = await response.json();
      if (data.cartItem) {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.cartid === cartId ? { ...item, quantity: data.cartItem.quantity } : item
          )
        );
      }
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  // Delete an item from the cart
  const removeFromCart = async (cartId) => {
    try {
      const response = await fetch(`${basicUrl}/api/cart/${cartId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.cartItem) {
        setCart((prevCart) => prevCart.filter((item) => item.cartid !== cartId));
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  // Clear the entire cart for a user
  const clearCart = async (userId) => {
    try {
      const response = await fetch(`${basicUrl}/api/cart/user/${userId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.message) {
        setCart([]);
      }
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };



  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        updateCartItem,
        removeFromCart,
        fetchCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
