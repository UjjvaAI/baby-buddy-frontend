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



// git add . && git commit -m "🚀 Update: Production deployment changes" && git push origin main
//Command Part	Explanation
// git add .	Adds all modified files in the current repo
// &&	Executes next command only if previous succeeds
// git commit -m "your message"	Commits with a custom message
//  && git push origin main	Pushes changes to main branch on GitHub


// git add . && git commit -m "your-message" && git push
