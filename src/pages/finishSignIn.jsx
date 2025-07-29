// FinishSignIn.jsx
import React, { useEffect } from "react";
import { auth } from "../firebase";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

const FinishSignIn = () => {
  useEffect(() => {
    const signIn = async () => {
      const emailLink = window.location.href;

      if (isSignInWithEmailLink(auth, emailLink)) {
        let email = localStorage.getItem("emailForSignIn");
        if (!email) {
          email = window.prompt("Enter your email to complete sign-in:");
        }

        try {
          await signInWithEmailLink(auth, email, emailLink);
          localStorage.removeItem("emailForSignIn");
          alert("✅ Sign-in successful!");
        } catch (error) {
          alert("❌ Sign-in failed: " + error.message);
        }
      }
    };

    signIn();
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Completing Sign-In...</h2>
    </div>
  );
};

export default FinishSignIn;
