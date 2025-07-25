import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Profile = () => {
  const { user, loading } = useUser();
  const [profileData, setProfileData] = useState({
    name: "",
    phone: "",
    address: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        try {
          const ref = doc(db, "users", user.uid);
          const snap = await getDoc(ref);
          if (snap.exists()) {
            setProfileData(snap.data());
          }
        } catch (err) {
          console.error("Error fetching profile:", err);
        }
      }
    };
    fetchProfile();
  }, [user]);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!user) return alert("Not logged in");

    try {
      const ref = doc(db, "users", user.uid);
      await setDoc(ref, profileData, { merge: true });
      alert("Profile updated!");
      navigate("/user-details");
    } catch (err) {
      console.error("Error saving profile:", err);
      alert("Failed to save profile: " + err.message);
    }
  };

 
  if (loading) return <p className="p-4">Loading...</p>;
  if (!user) return <p className="p-4">User not logged in.</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-pink-600 mb-4">👤 Your Profile</h2>
      <p className="text-sm text-gray-500 mb-4">Email: {user.email}</p>

      <input
        name="name"
        value={profileData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        name="phone"
        value={profileData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full border p-2 mb-2 rounded"
      />
      <textarea
        name="address"
        value={profileData.address}
        onChange={handleChange}
        placeholder="Shipping Address"
        className="w-full border p-2 mb-2 rounded"
      />

      <button onClick={handleSave} className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600">
        Save Changes
      </button>
     
    </div>
  );
};

export default Profile;
