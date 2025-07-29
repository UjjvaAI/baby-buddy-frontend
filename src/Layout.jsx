// src/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-black">
      
      {/* Sticky Container */}
      <div className="sticky top-0 z-50">
        <div className="bg-black">
          <h1 className="text-green-400 font-bold text-center text-xs md:text-md lg:text-lg animate-marquee">
            🛍️ Visit our store for exciting baby offers!
          </h1>
        </div>

        <Navbar />
      </div>

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
