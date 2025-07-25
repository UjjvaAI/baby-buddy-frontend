// src/pages/ProductDetail.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import productData from "../data/productData"; 


const ProductDetail = () => {
  const { slug } = useParams();
  const product = productData[slug];
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState("");
const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    return <p className="text-center p-6 text-red-600">Product not found!</p>;
  }

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) return alert("Please select a color first");
    addToCart({ ...product, selectedColor, selectedSize,quantity: 1 });
    alert("Added to cart!");
  };

  const handleBuyNow = () => {
    if (!selectedColor || !selectedSize) return alert("Please select a color first");
    addToCart({ ...product, selectedColor, selectedSize, quantity: 1 });
    navigate("/checkout");
  };

  return (
    <section className="p-2 md:p-6 max-w-4xl mx-auto">
      <h1 className="text-sm md:text-2xl lg:text-4xl font-bold mb-4 text-center">{product.name}</h1>
        
        
        <div className="mb-4">
  {product.imageSlider ? (
    product.imageSlider
  ) : (
    <p className="text-red-600">No imageSlider found!</p>
  )}
</div>


   

      <p className="font-semibold mb-1">Choose Color:</p>
      <div className="flex gap-2 mb-4">
        {product.colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`px-3 py-1 rounded-full border ${
              selectedColor === color
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {color}
          </button>
        ))}
      </div>
      {/* Choose Size */}
<p className="font-semibold mb-1 mt-4">Choose Size:</p>
<div className="flex gap-2 mb-4">
  {product.sizes.map((size) => (
    <button
      key={size}
      onClick={() => setSelectedSize(size)}
      className={`px-3 py-1 rounded-full border ${
        selectedSize === size
          ? "bg-pink-600 text-white"
          : "bg-gray-200 hover:bg-gray-300"
      }`}
    >
      {size}
    </button>
  ))}
</div>



      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-pink-600 text-sm md:text-lg lg:text-2xl font-bold line-through mb-1">MRP ₹{product.mrp}</p>
      <p className="text-green-600 font-bold text-xl mb-4">Offer Price ₹{product.price}</p>

      <button
        onClick={handleAddToCart}
        disabled={!selectedColor}
        className={`mr-2 px-6 py-2 rounded ${
          selectedColor
            ? "bg-blue-600 text-white"
            : "bg-gray-400 text-white cursor-not-allowed"
        }`}
      >
        Add to Cart
      </button>
      <button
        onClick={handleBuyNow}
        disabled={!selectedColor}
        className={`px-6 py-2 rounded ${
          selectedColor
            ? "bg-green-600 text-white"
            : "bg-gray-400 text-white cursor-not-allowed"
            
        }`}
      >
        Buy Now
      </button>
    </section>
  );
};

export default ProductDetail;
