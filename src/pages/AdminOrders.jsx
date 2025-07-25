// src/pages/AdminOrders.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const snapshot = await getDocs(collection(db, "orders"));
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">📋 All Orders</h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders yet.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="border p-4 rounded mb-4 bg-white shadow">
            <h3 className="text-lg font-bold mb-1">📦 Order #{index + 1}</h3>
            <p><strong>Name:</strong> {order.customer?.name || "N/A"}</p>
            <p><strong>WhatsApp:</strong> {order.customer?.whatsapp || "N/A"}</p>
            <p><strong>Address:</strong> {order.customer?.address || "N/A"}</p>
            {order.customer?.locationLink && (
              <p><strong>Location:</strong>{" "}
                <a href={order.customer.locationLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  View on Map
                </a>
              </p>
            )}

            <p className="mt-2 font-semibold">🛍️ Items:</p>
            <ul className="list-disc ml-6">
              {order.cartItems?.map((item, i) => (
                <li key={i}>{item.name} — ₹{item.price}</li>
              )) || <li>No items</li>}
            </ul>

            <p className="mt-2"><strong>Total:</strong> ₹{order.total}</p>
            <p><strong>Date:</strong> {order.createdAt?.toDate?.().toLocaleString() || "Unknown"}</p>
          </div>
        ))
      )}
      <button onClick={() => window.print()} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
  🖨️ Print Orders
</button>

    </div>
    
  );
};

export default AdminOrders;
