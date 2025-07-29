// src/pages/CartPage.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex items-center justify-center "> <span className="inline-block bg-blue-100 text-center text-sm md:text-lg lg:text-2xl font-bold text-blue-600">
    Your Cart
  </span></div> 

      {cartItems.length === 0 ? (
        <p className="text-gray-500">🛒 Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, i) => (
            <div key={i} className="mb-4 p-4 bg-gray-100 rounded shadow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">Color: {item.selectedColor}</p>
                  <p className="text-green-600 font-bold">₹{item.price}</p>
                </div>
                <button
                    onClick={() => removeFromCart(item.id, item.selectedColor)} // <-- optional color
                    className="text-red-500 hover:underline"
                     >
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right font-semibold text-lg">
            Total: ₹{total.toFixed(2)}
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
