// EmailLinkSignIn.jsx
import React, { useState } from "react";
import { auth } from "../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";

const EmailLinkSignIn = () => {
  const [email, setEmail] = useState("ujjvastore@gmail.com");

  const actionCodeSettings = {
    url: "http://localhost:5173/finishSignIn",
    handleCodeInApp: true,
  };

  const sendLink = () => {
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        alert("✅ Email link sent!");
      })
      .catch((error) => {
        console.error("❌ Error:", error.message);
      });
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Sign in via Email Link</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="border p-2 w-full mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={sendLink}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send Sign-In Link
      </button>
    </div>
  );
};

export default EmailLinkSignIn;
