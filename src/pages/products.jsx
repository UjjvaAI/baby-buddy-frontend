// src/pages/Products.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import RideOnSlide from "../components/slides/RideOnSlide"; ✅
import FrockSlide from "../components/slides/FrockSlide";
import CradleSlide from "../components/slides/cradleslide";
import ProductOptionsModal from "../components/ProductOptionsModal";
import { useCart } from "../context/CartContext";
import Categories from "../components/Categories";

import "swiper/css";
import "swiper/css/pagination";









const Products = () => {
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Dummy product list
  const products = [
    {
      id: "rideon001",
      name: "Rideon Car",
      category: "Ride-Ons",
      mrp: 3000,
      price:2400,
      slug: "rideon001",
      imageSlider: <RideOnSlide />,
      colors: ["Red", "Blue", "Yellow"],
      sizes: ["Small", "Medium", "Large"],

    },
    {
      id: "frock001",
      name: "Baby Frock",
      category: "Frocks",
      mrp: 500,
      price: 399,
      slug: "frock001",
      imageSlider: <FrockSlide />,
      colors: ["Pink", "White", "Sky Blue"],
      sizes: ["0-6m", "6-12m", "12-18m"],
    },

     {
      id: "cradle001",
      name: "baby cradle",
      category: "Cradles",
      mrp: 9999,
      price: 7999,
      slug: "cradle001",
      imageSlider: <CradleSlide />,
      colors: ["Pink", "White", "Sky Blue"],
      sizes: ["0-18m"],
    },











  ];








const filteredProducts =
  !selectedCategory || selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);


  // 🧩 Open modal
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
     <section className="bg-gray-100">
      {/* 🍼 Category Scroll Menu */}
       <Categories selected={selectedCategory} onSelect={setSelectedCategory} />

      {/* 🛍️ Product Grid */}
<div className="flex items-center justify-center mt-2 mb-2">
  <span className="inline-block bg-blue-100 text-center text-sm md:text-lg lg:text-2xl font-bold text-blue-600">
    Our Products
  </span>
</div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-blue-100 rounded-xl shadow-lg p-2 text-center">
            <Link to={`/product/${product.slug}`} className="block hover:shadow-xl transition">
              <div className="mb-2">
                {product.imageSlider ? (
                  product.imageSlider
                ) : (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mx-auto h-40 object-cover"
                  />
                )}
              </div>
              <h3 className="text-sm md:text-lg lg:text-2xl font-semibold text-gray-800 mb-1">{product.name}</h3>
            </Link>

            <p className="text-pink-600 text-sm md:text-lg lg:text-2xl font-bold line-through mb-1">MRP ₹{product.mrp}</p>
            <p className="text-blue-600 text-sm md:text-lg lg:text-2xl font-bold">Offer Price ₹{product.price}</p>
            <h4 className="text-pink-600 text-sm md:text-lg lg:text-2xl font-bold text-md mb-2">Visit Our Store</h4>

            <a
              href="//www.google.com/maps/place/BABY+BUDDY+-+NEW+BORN+STORE/@17.4077928,78.5961763,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9f411addb86d:0xbc3aa6c68b613cc9!8m2!3d17.4077928!4d78.5961763!16s%2Fg%2F11t0p_j5q4?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-500 text-white text-xs md:text-lg lg:text-2xl px-2 py-2 rounded hover:bg-pink-600 transition"
            >
              📍 Location
            </a>

            <button
              onClick={() => handleOpenModal(product)}
              className="inline-block bg-blue-500 text-white text-xs md:text-lg lg:text-2xl px-2 py-2 rounded hover:bg-pink-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* 📦 Options Modal */}
      {showModal && selectedProduct && (
        <ProductOptionsModal
          product={selectedProduct}
          onClose={() => setShowModal(false)}
          onAddToCart={addToCart}
        />
      )}
    </section>
  );
};

export default Products;
