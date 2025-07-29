import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase"; // ✅ Adjust if needed

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // ✅ Save to localStorage
      localStorage.setItem("user", JSON.stringify({
        uid: user.uid,
        email: user.email,
        name: user.displayName,
      }));

      alert(`✅ Welcome, ${user.displayName || user.email}!`);
      navigate("/");
    } catch (err) {
      console.error("Google login failed:", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="flex items-center justify-center w-full text-sm md:text-xl lg:text-2xl font-bold text-center text-pink-600 ml-1 mb-6">
          👶 Baby Buddy Login
        </h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
