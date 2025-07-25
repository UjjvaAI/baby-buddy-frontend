import { useEffect, useState } from "react";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";

const SellerDashboard = () => {
  const [orders, setOrders] = useState({});

  useEffect(() => {
    const ordersRef = ref(database, "orders/");
    onValue(ordersRef, (snapshot) => {
      const data = snapshot.val() || {};
      setOrders(data);
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">🧾 Seller Order Dashboard</h2>
      {Object.entries(orders).map(([userId, userOrders]) => (
        <div key={userId} className="mb-6 p-4 bg-gray-100 rounded shadow">
          <h3 className="font-bold">User ID: {userId}</h3>
          <ul className="mt-2 space-y-2">
            {Object.values(userOrders).map((order, idx) => (
              <li key={idx} className="p-2 bg-white border rounded">
                🛒 <strong>Item:</strong> {order.item} <br />
                💬 <strong>Note:</strong> {order.note} <br />
                🏠 <strong>Address:</strong> {order.address || "Not provided"} <br />
                📆 <strong>Date:</strong> {new Date(order.timestamp).toLocaleString()}
                  

              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SellerDashboard;
