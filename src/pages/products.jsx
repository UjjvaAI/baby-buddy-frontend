// src/pages/Products.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import RideOnSlide from "../components/slides/RideOnSlide";
import FrockSlide from "../components/slides/FrockSlide";
import CradleSlide from "../components/slides/cradleslide";
import Cradle603 from "../components/slides/cradle603";
import Cradle730 from "../components/slides/cradle730";
import ProductOptionsModal from "../components/ProductOptionsModal";
import { useCart } from "../context/CartContext";
import Categories from "../components/Categories";
import Cradlecv1100 from "../components/slides/cradlecv1100";

import "swiper/css";
import "swiper/css/pagination";









const Products = () => {
  const [likedProducts, setLikedProducts] = useState([]);
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
      mrp: 11000,
      price: 9999,
      slug: "cradle001",
      imageSlider: <CradleSlide />,
      colors: ["Pink", "White", "Sky Blue"],
      sizes: ["0-12m"],
    },
      {
      id: "cradle603",
      name: "cradle 603",
      category: "Cradles",
      mrp: 4000,
      price: 3200,
      slug: "cradle603",
      imageSlider: <Cradle603 />,
      colors: ["blue", "pink"],
      sizes: ["0-12m"],
    }, 
     
    {      
      id: "cradle730",
      name: "cradle 730",
      category: "Cradles",
      mrp: 4000,
      price: 3200,
      slug: "cradle730",
      imageSlider: <Cradle730 />, // Assuming Cradle603 is the component for cradle 730
      colors: ["blue", "pink"],
      sizes: ["0-18m"],
    },

    {
      id: "cradlecv1100",
      name: "cradle cv1100",
      category: "Cradles",
      mrp: 4000,
      price: 3200,
      slug: "cradlecv1100",
      imageSlider: <Cradlecv1100 />,
      colors: ["blue", "pink"],
      sizes: ["0-12m"],
     // Assuming Cradle603 is the component


    },











  ];



const toggleLike = (id) => {
  setLikedProducts((prev) =>
    prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
  );
};

const handleShare = (slug) => {
  const shareUrl = `${window.location.origin}/product/${slug}`;
  if (navigator.share) {
    navigator.share({
      title: "Check this product on Baby Buddy",
      url: shareUrl,
    });
  } else {
    navigator.clipboard.writeText(shareUrl);
    alert("🔗 Product link copied to clipboard!");
  }
};





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
     <section className="bg-gray-100 text-xs md:text-sm lg:text-md font-semibold">
      {/* 🍼 Category Scroll Menu */}
       <Categories selected={selectedCategory} onSelect={setSelectedCategory} />

      {/* 🛍️ Product Grid */}
<div className="flex items-center justify-center mt-2 mb-2">
  <span className="inline-block bg-blue-100 text-center text-xs md:text-md lg:text-lg font-bold text-blue-600">
    Our Products
  </span>
</div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-blue-100 max-w-xs rounded-xl border shadow-md overflow-hidden">
             <div className="relative">
            <Link to={`/product/${product.slug}`} className="block hover:shadow-xl transition">
                {product.imageSlider ? (
                  product.imageSlider
                ) : (
              
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mx-auto h-40 object-cover"
                  />
                )}
                </Link>
                  {/* Like & Share Buttons */}
    <div className="absolute top right-1 bottom flex space-x-1 z-10">
      
      <button onClick={() => toggleLike(product.id)}
      className="bg-white/80 hover:bg-white p-2 rounded-full shadow transition">
      <span className={likedProducts.includes(product.id) ? "text-red-500" : "text-gray-400"}>
           ❤️
           </span>
      </button>
      <button   onClick={() => handleShare(product.slug)} 
      className="bg-white/80 hover:bg-white p-2 rounded-full shadow transition">
        🔗
      </button>
    </div>
  </div>

  {/* Product Details */}
  <div className="p-2">
    {/* Rating */}
    
              
  
     <h3 className="text-sm md:text-sm lg:text-md font-semibold text-gray-800 mt-2 truncate">{product.name}</h3>
                      
    <p className="text-blue-600 text-xs md:text-sm lg:text-md font-bold  ">Offer Price ₹{product.price}</p>  
    <p><span className="text-pink-600 line-through text-xxs md:text-xs lg:text-md font-bold" >MRP ₹{product.mrp}</span></p>
    <h4 className="text-blue-600 text-xs md:text-sm lg:text-md font-bold text-md mb-2">Visit Our Store</h4>

            <a
              href="//www.google.com/maps/place/BABY+BUDDY+-+NEW+BORN+STORE/@17.4077928,78.5961763,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9f411addb86d:0xbc3aa6c68b613cc9!8m2!3d17.4077928!4d78.5961763!16s%2Fg%2F11t0p_j5q4?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-500 text-white text-xxs md:text-sm lg:text-md px-2 py-2 rounded hover:bg-pink-600 transition"
            >
              📍 Location
            </a>

            <button
              onClick={() => handleOpenModal(product)}
              className="inline-block bg-blue-500 text-white text-xxs md:text-sm lg:text-md px-2 py-2 rounded hover:bg-pink-600 transition"
            >
              Add to Cart
            </button>
          </div>
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
