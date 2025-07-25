import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold text-green-600 mb-2">🎉 Thank You!</h1>
      <p className="mb-4">Your order has been placed successfully. We’ll contact you soon.</p>
      <Link to="/" className="text-blue-600 underline">← Back to Home</Link>
    </div>
  );
};

export default ThankYou;
