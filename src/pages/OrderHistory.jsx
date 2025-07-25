import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { useUser } from "../context/UserContext";
import { collection, getDocs, query, where } from "firebase/firestore";

const OrderHistory = () => {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        const ref = collection(db, "orders");
        const q = query(ref, where("userId", "==", user.uid));
        const snap = await getDocs(q);
        setOrders(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      }
    };
    fetchOrders();
  }, [user]);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold text-pink-600 mb-4">📦 Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="space-y-3">
          {orders.map(order => (
            <li key={order.id} className="p-4 border rounded">
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Total:</strong> ₹{order.total}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Date:</strong> {new Date(order.timestamp).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
