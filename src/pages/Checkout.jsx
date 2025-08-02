// src/pages/Checkout.jsx
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { db } from "../firebase";
import { addDoc, collection, Timestamp, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // ✅ Make sure you have this

const Checkout = () => {
  const { cartItems } = useCart();
  const { user,} = useUser(); // ✅ Authenticated user
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    whatsapp: "",
    address: "",
    locationLink: "",
  });

  // ✅ Auto-fill from Firestore user profile
  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        try {
          const ref = doc(db, "users", user.uid);
          const snap = await getDoc(ref);
          if (snap.exists()) {
            const data = snap.data();
            setCustomer((prev) => ({
              ...prev,
              name: data.name || "",
              whatsapp: data.phone || "",
              address: data.address || "",
            }));
          }
        } catch (err) {
          console.error("❌ Failed to load profile:", err.message);
        }
      }
    };

    fetchProfile();
  }, [user]);

  const total = cartItems.reduce((sum, item) => sum + Number(item.price), 0);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const link = `https://www.google.com/maps?q=${lat},${lng}`;
        setCustomer((prev) => ({ ...prev, locationLink: link }));
      });
    } else {
      alert("Geolocation is not supported by your browser");
    }
  };

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!customer.name || !customer.whatsapp || !customer.address) {
      alert("Please fill all required details");
      return;
    }

    const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    try {
      const result = await axios.post("https://baby-buddy-backend.onrender.com/create-order", {
        amount: total,
      });

      const { id: order_id, amount, currency } = result.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount,
        currency,
        name: "Baby Buddy Store",
        description: "Order Payment",
        order_id,
        handler: async function (response) {
          try {
            const cleanCartItems = cartItems.map(item => ({
              name: item.name,
              price: item.price,
            }));

            const cleanCustomer = {
              name: customer.name,
              whatsapp: customer.whatsapp,
              address: customer.address,
              locationLink: customer.locationLink,
            };

            const orderData = {
              customer: cleanCustomer,
              cartItems: cleanCartItems,
              total,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              createdAt: Timestamp.now(),
            };

            console.log("✅ OrderData:", orderData);
            await addDoc(collection(db, "orders"), orderData);

            alert("✅ Order & Payment Successful!");
            navigate("/thank-you");
          } catch (err) {
            console.error("Firestore Error:", err.message);
            alert("❌ Failed to save order: " + err.message);
          }
        },
        prefill: {
          name: customer.name,
          email: "user@example.com",
          contact: customer.whatsapp,
        },
        theme: {
          color: "#f97316",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error("Payment Error:", err.message);
      alert("❌ Payment Error: " + err.message);
    }
  };

  return (
    <div className="p-2 max-w-2xl mx-auto">
      <h2 className="flex items-center justify-center w-full text-2xl font-bold text-center text-pink-600 ml-1 mt-4 mb-6">
        🧾 Checkout
      </h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <h3 className="text-lg font-semibold mb-2">🛍️ Order Summary</h3>
          {cartItems.map((item, i) => (
            <div key={i} className="flex justify-between border-b py-2">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}
          <div className="text-right font-bold text-lg mt-2">Total: ₹{total.toFixed(2)}</div>

          <h3 className="text-lg font-semibold mt-6 mb-2">📦 Delivery Details</h3>
          <input
            type="text"
            name="name"
            placeholder="Customer Name"
            value={customer.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mb-2"
          />
          <input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp Number"
            value={customer.whatsapp}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mb-2"
          />
          <textarea
            name="address"
            placeholder="Full Address"
            value={customer.address}
            onChange={handleChange}
            rows={3}
            className="w-full border px-3 py-2 rounded mb-2"
          ></textarea>

          <button onClick={getLocation} className="text-blue-600 underline text-sm mb-2">
            📍 Detect My Location
          </button>

          {customer.locationLink && (
            <p className="mb-2 text-sm">
              📌 Location:{" "}
              <a href={customer.locationLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                View on Google Maps
              </a>
            </p>
          )}

          <button
            onClick={handlePayment}
            className="bg-green-600 text-white w-full py-2 rounded mt-4 hover:bg-green-700"
          >
            ✅ Proceed to Pay
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
