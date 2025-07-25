// src/components/Categories.jsx
import React from "react";

const categories = [
  "All",
  "Ride-Ons",
  "Frocks",
  "Cradles",
  "Toys",
  "Walkers",
  "Care",
  "Clothing",
  "Shoes",
];

const Categories = ({ selected, onSelect }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-2 px-4 bg-white shadow-sm">
      <div className="inline-flex gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-4 py-2 rounded-full border ${
              selected === cat
                ? "bg-pink-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
