// src/Layout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom"; // ✅ added useLocation
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FestivalBanner from "./components/FestivalBanner";

const BANNER = {
  desktop: "/banners/main-desktop.jpg",
  tablet: "/banners/main-tablet.jpg",
  mobile: "/banners/main-mobile.jpg",
};

export default function Layout() {
  const { pathname } = useLocation();
  const showOnHomeOnly = true; // set false to show on all pages
  const shouldShowBanner = showOnHomeOnly ? pathname === "/" : true;

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

      {/* ✅ Banner shows below navbar */}
      {shouldShowBanner && (
        <div className="w-full">
          <FestivalBanner
            images={BANNER}
            alt="Happy Diwali from Baby Buddy!"
          />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
