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

      setUserReady(true);
      fetchOrders();
    });

    return () => unsubscribe();
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
    <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-center text-pink-600 mb-8">
        📋 Admin Panel - Order History
      </h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders yet.</p>
      ) : (
        orders.map((order, index) => (
          <div
            key={order.id}
            className="border border-gray-300 bg-white rounded-2xl shadow-md p-6 mb-6"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-blue-700">
                📦 Order #{index + 1}
              </h3>
              <span className="text-xs text-gray-500">
                {order.createdAt?.toDate
                  ? order.createdAt.toDate().toLocaleString()
                  : "Unknown"}
              </span>
            </div>

            <div className="space-y-1 text-sm text-gray-700">
              <p>
                <strong>👤 Name:</strong> {order.customer?.name || "N/A"}
              </p>
              <p>
                <strong>📞 WhatsApp:</strong> {order.customer?.whatsapp || "N/A"}
              </p>
              <p>
                <strong>🏠 Address:</strong> {order.customer?.address || "N/A"}
              </p>
              {order.customer?.locationLink && (
                <p>
                  <strong>📍 Location:</strong>{" "}
                  <a
                    href={order.customer.locationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View on Map
                  </a>
                </p>
              )}
            </div>

            <div className="mt-4">
              <p className="font-semibold text-pink-600">🛍️ Items:</p>
              <ul className="list-disc ml-6 mt-1 text-gray-800">
                {order.cartItems?.length ? (
                  order.cartItems.map((item, i) => (
                    <li key={i}>
                      {item.name} — ₹{item.price}
                    </li>
                  ))
                ) : (
                  <li>No items</li>
                )}
              </ul>
            </div>

            <div className="mt-4 font-semibold text-green-700">
              💰 Total: ₹{order.total || 0}
            </div>
          </div>
        ))
      )}

      {orders.length > 0 && (
        <div className="text-center mt-8">
          <button
            onClick={() => window.print()}
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg shadow transition"
          >
            🖨️ Print All Orders
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
