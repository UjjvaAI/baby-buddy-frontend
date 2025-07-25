// src/context/CartContext.j
import React, { createContext, useContext, useState } from "react";


// 1️⃣ Create the context
const CartContext = createContext();

// 2️⃣ Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ➕ Add item
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // ❌ Remove item
  const removeFromCart = (idToRemove, selectedColor) => {
  setCartItems((prev) =>
    prev.filter(item => !(item.id === idToRemove && item.selectedColor === selectedColor))
  );
};


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


// 3️⃣ Custom hook (keep in same file)
export const useCart = () => useContext(CartContext);
