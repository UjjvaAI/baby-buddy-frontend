// src/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-black">
      
      {/* Sticky Marquee + Navbar */}
      <header className="sticky top-0 z-50 mt-0">
        <div className="bg-black">
          <p className="text-green-400 font-bold text-center text-xs md:text-sm lg:text-base animate-marquee overflow-hidden">
            🛍️ Visit our store for exciting baby offers!
          </p>
        </div>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;


// git status git add .git commit -m "Modified files update" git push



// git add -u
// git commit -m "Modified files update"
//git push
