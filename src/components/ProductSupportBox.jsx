import React from "react";

const ProductSupportBox = () => {
  return (
    <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-3 text-sm space-y-2 mt-4">
      <p className="text-gray-800">
        🚚 <b>Free Delivery</b> on orders over ₹1000!
      </p>
      <p className="text-gray-800">
        📸 Want to see <b>more product images?</b> Have questions about this product?
      </p>
      <p className="text-gray-800">
        📞 <b>Call or WhatsApp us:</b>{" "}
        <a
          href="https://wa.me/916281626128"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 underline"
        >
          +91 62816 26128
        </a>
      </p>
    </div>
  );
};

export default ProductSupportBox;
