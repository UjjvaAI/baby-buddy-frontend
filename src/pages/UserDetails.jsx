import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useUser } from "../context/UserContext";

const UserDetails = () => {
  const { user, loading } = useUser();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (user) {
        const ref = doc(db, "users", user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setProfile(snap.data());
        }
      }
    };
    fetchUser();
  }, [user]);

  if (loading) return <p className="p-4 text-center text-gray-500">Loading...</p>;
  if (!user) return <p className="p-4 text-center text-red-500">User not logged in.</p>;
  if (!profile) return <p className="p-4 text-center text-gray-500">No profile data found.</p>;

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md">
        <h2 className="inline-block text-2xl font-bold text-center text-pink-600 ">👶 Baby Buddy Profile</h2>

        <div className="space-y-4 text-gray-700">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-semibold text-lg">{profile.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold text-lg">{user.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-semibold text-lg">{profile.phone || "Not provided"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-semibold text-lg whitespace-pre-line">
              {profile.address || "Not provided"}
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/profile"
            className="inline-block text-sm text-pink-600 font-medium underline hover:text-pink-800"
          >
            ✏️ Edit Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
