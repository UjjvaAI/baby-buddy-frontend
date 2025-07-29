import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { useUser } from "../context/UserContext";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Profile = () => {
  const { user, loading } = useUser();
  const [profileData, setProfileData] = useState({ name: "", phone: "", address: "" });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        try {
          const ref = doc(db, "users", user.uid);
          const snap = await getDoc(ref);
          if (snap.exists()) {
            setProfileData(snap.data());
            setIsEditing(false); // always default to card view
          } else {
            setIsEditing(true); // new users can edit right away
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
      alert("✅ Profile updated!");
      setIsEditing(false); // switch back to view mode
    } catch (err) {
      console.error("Error saving profile:", err);
      alert("❌ Failed to save profile: " + err.message);
    }
  };

  if (loading) return <p className="p-4 text-center text-gray-500">Loading...</p>;
  if (!user) return <p className="p-4 text-center text-red-500">User not logged in.</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 p-4">
      <div className="bg-white shadow-2xl rounded-xl p-6 w-full max-w-md">
        <h2 className="flex items-center justify-center text-sm w-full font-bold text-center text-pink-600 mb-2 ml-2">👶 BabyBuddy Profile</h2>
        <p className="text-center text-sm text-gray-500 mb-4">Email: {user.email}</p>

        {isEditing ? (
          <div className="space-y-3">
            <input
              name="name"
              value={profileData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border border-pink-300 px-4 py-2 rounded"
            />
            <input
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border border-pink-300 px-4 py-2 rounded"
            />
            <textarea
              name="address"
              value={profileData.address}
              onChange={handleChange}
              placeholder="Shipping Address"
              rows="3"
              className="w-full border border-pink-300 px-4 py-2 rounded"
            />

            <button
              onClick={handleSave}
              className="w-full mt-4 bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600 transition"
            >
              Save Changes
            </button>
          </div>
        ) : (
          <div className="space-y-4 text-gray-700 text-left">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-semibold text-lg">{profileData.name || "Not provided"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-semibold text-lg">{profileData.phone || "Not provided"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-semibold text-lg whitespace-pre-line">{profileData.address || "Not provided"}</p>
            </div>

            <div className="text-center mt-6">
              <button
                onClick={() => setIsEditing(true)}
                className="text-sm text-pink-600 underline hover:text-pink-800"
              >
                ✏️ Edit Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
