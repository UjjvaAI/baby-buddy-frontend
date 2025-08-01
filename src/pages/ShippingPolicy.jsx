import React from 'react';

const ShippingPolicy = () => (
  <div className="p-6 max-w-3xl mx-auto">
    <h1 className="text-2xl font-bold mb-4">Shipping Policy</h1>
    <ul className="list-disc ml-6 space-y-2">
      <li>🚚 Delivery Time: 1–3 business days</li>
      <li>📦 Shipping Charges: Free for orders above ₹1000; ₹50 flat below</li>
      <li>📍 Shipping Areas: near Boduppal,Uppal,Peerzadiguda,Ghatkesar,Pocham,Narapally,Medipally,Nacharam,Habsiguda</li>
      <li>📦 Order Tracking: You'll receive a tracking link after dispatch</li>
    </ul>
    <p className="mt-4 text-sm text-gray-600">If your area is unserviceable, we will contact you for alternate options.</p>
  </div>
);

export default ShippingPolicy;