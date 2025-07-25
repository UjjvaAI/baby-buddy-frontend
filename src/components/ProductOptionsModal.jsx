// src/components/ProductOptionsModal.jsx
import React, { useState } from "react";

const ProductOptionsModal = ({ product, onClose, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState(""); // ✅ Add size state

  const handleAdd = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select both color and size.");
      return;
    }

    onAddToCart({
      ...product,
      selectedColor,
      selectedSize,
      quantity: 1,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h3 className="font-bold text-lg mb-4 text-center">Choose Options</h3>

        {/* Color Options */}
        <p className="mb-1">Color:</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {product.colors?.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`px-3 py-1 border rounded-full ${
                selectedColor === color
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {color}
            </button>
          ))}
        </div>

        {/* Size Options */}
        {product.sizes && (
          <>
            <p className="mb-1">Size:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded-full ${
                    selectedSize === size
                      ? "bg-pink-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Buttons */}
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
        >
          Add to Cart
        </button>

        <button
          onClick={onClose}
          className="text-red-600 text-sm mt-2 underline block w-full text-center"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ProductOptionsModal;
