// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"; 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3WXoRWC_SsdoOfcrFd02XKJvMm1ggecs",
  authDomain: "baby-buddy-67564.firebaseapp.com",
  databaseURL: "https://baby-buddy-67564-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "baby-buddy-67564",
  storageBucket: "baby-buddy-67564.firebasestorage.app",
  messagingSenderId: "334419564898",
  appId: "1:334419564898:web:3ab25466e658988051743b"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize services
const auth = getAuth(app);
const db = getFirestore(app); // ✅ Correct name for Firestore
const database = getDatabase(app); // ✅ Realtime Database instance
export { auth, db, database }; // ✅ 'database' added here