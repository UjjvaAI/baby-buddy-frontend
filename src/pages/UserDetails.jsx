// src/pages/UserDetails.jsx
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { user, loading } = useUser();
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (user) {
        const ref = doc(db, "users", user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setDetails(snap.data());
        }
      }
    };
    fetchUserDetails();
  }, [user]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (!user) return <p className="p-4">Please login to view your profile.</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-pink-600 mb-4">👀 Profile Details</h2>
      <p className="mb-2"><strong>Email:</strong> {user.email}</p>
      <p className="mb-2"><strong>Name:</strong> {details?.name || "Not set"}</p>
      <p className="mb-2"><strong>Phone:</strong> {details?.phone || "Not set"}</p>
      <p className="mb-2"><strong>Address:</strong><br />{details?.address || "Not set"}</p>

      <button
        onClick={() => navigate("/profile")}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Edit Profile
      </button>
    </div>
  );
};

export default UserDetails;
