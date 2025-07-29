import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ADMIN_UID = "llBIqhEd4GW5ysxNxeOuXnbSAbc2";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [userReady, setUserReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        alert("❌ Access denied - Not logged in");
        navigate("/");
        return;
      }

      if (user.uid !== ADMIN_UID) {
        alert("❌ Access denied - Not admin");
        navigate("/");
        return;
      }

      // ✅ Admin confirmed
      setUserReady(true);
      fetchOrders(); // fetch only if admin
    });

    return () => unsubscribe(); // cleanup
  }, [navigate]);

  const fetchOrders = async () => {
    try {
      const snapshot = await getDocs(collection(db, "orders"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(data);
    } catch (err) {
      console.error("❌ Error fetching orders:", err);
    }
  };

  if (!userReady) return null;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className=" flex item-center w-full text-sm font-bold text-center text-blue-600 bg-white mb-6 ml-2">
        📋 All Orders
      </h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders yet.</p>
      ) : (
        orders.map((order, index) => (
          <div key={order.id} className="border p-4 rounded mb-4 bg-white shadow">
            <h3 className="text-lg font-bold mb-2">📦 Order #{index + 1}</h3>
            <p><strong>Name:</strong> {order.customer?.name || "N/A"}</p>
            <p><strong>WhatsApp:</strong> {order.customer?.whatsapp || "N/A"}</p>
            <p><strong>Address:</strong> {order.customer?.address || "N/A"}</p>
            {order.customer?.locationLink && (
              <p><strong>Location:</strong> <a href={order.customer.locationLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on Map</a></p>
            )}

            <p className="mt-3 font-semibold">🛍️ Items:</p>
            <ul className="list-disc ml-6">
              {order.cartItems?.length ? (
                order.cartItems.map((item, i) => (
                  <li key={i}>{item.name} — ₹{item.price}</li>
                ))
              ) : (
                <li>No items</li>
              )}
            </ul>

            <p className="mt-2"><strong>Total:</strong> ₹{order.total || 0}</p>
            <p><strong>Date:</strong> {order.createdAt?.toDate ? order.createdAt.toDate().toLocaleString() : "Unknown"}</p>
          </div>
        ))
      )}

      <div className="text-center mt-6">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded shadow"
        >
          🖨️ Print Orders
        </button>
      </div>
    </div>
  );
};

export default AdminOrders;
