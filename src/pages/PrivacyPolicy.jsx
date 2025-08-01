import React from 'react';

const PrivacyPolicy = () => (
  <div className="p-6 max-w-3xl mx-auto">
    <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
    <ul className="list-disc ml-6 space-y-2">
      <li>We collect basic info like name, phone, and address for orders</li>
      <li>We don’t sell or share your data with third parties</li>
      <li>Payments are handled securely via Razorpay</li>
    </ul>
    <p className="mt-4 text-sm text-gray-600">For any privacy concerns, contact: <strong>ujjvastore@gmail.com</strong></p>
  </div>
);

export default PrivacyPolicy;