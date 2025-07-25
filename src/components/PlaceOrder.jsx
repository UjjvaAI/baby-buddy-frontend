import { useState } from "react";
import { database, auth } from "../firebase";
import { ref, push } from "firebase/database";

const PlaceOrder = () => {
  const [item, setItem] = useState("");
  const [note, setNote] = useState("");
   const [address, setAddress] = useState(""); 

  const handleOrder = () => {
    const orderRef = ref(database, "orders/" + auth.currentUser.uid);
    push(orderRef, {
      item,
      note,
      address,
      timestamp: Date.now(),
    });
    setItem("");
    setNote("");
    alert("Order placed!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-green-600">🛒 Place an Order</h2>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Product name"
        className="border px-2 py-1 mr-2 mb-2 rounded"
      />
      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Note"
        className="border px-2 py-1 mr-2 mb-2 rounded"
      />
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Delivery Address"
        className="border px-2 py-1 mr-2 mb-2 rounded"
      />
      <button
        onClick={handleOrder}
        className="bg-green-500 text-white px-4 py-1 rounded"
      >
        Submit Order
      </button>
    </div>
  );
};

export default PlaceOrder;
