// src/components/CartModal.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";




const CartModal = ({ onClose }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-xl w-80 max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2 items-center">
              <div>
                <p>{item.title}</p>
                <p className="text-sm text-gray-500">{item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 font-bold"
              >
                ×
              </button>
            </div>
          ))
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
