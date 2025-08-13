// src/pages/Home.jsx
import React from "react";
import Products from "./products"; // 👈 this uses your existing products.jsx
import FestivalBanner from "@/components/FestivalBanner";

const BANNERS = {
  rakshabandhan: {
    desktop: "/banners/main-desktop.jpg",
    tablet: "/banners/main-tablet.jpg",
    mobile: "/banners/main-mobile.jpg",
    alt: "Happy Diwali — Baby Buddy wishes all customers love & joy!",
  },
  default: {
    desktop: "/banners/default-desktop.jpg",
    tablet: "/banners/default-tablet.jpg",
    mobile: "/banners/default-mobile.jpg",
    alt: "Welcome to Baby Buddy — Newborn & kids store",
  },
};

const Home = () => {
  return (
    <div>
      <Products />
    </div>
  );
};

export default Home;
