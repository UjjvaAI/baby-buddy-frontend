// src/components/slides/RideOnSlide.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ZoomableImage from "../ZoomableImage";

import frock1 from "../../assets/products/frocks/images/frock1.png";
import frock2 from "../../assets/products/frocks/images/frock2.png";
import frock3 from "../../assets/products/frocks/images/frock3.png";
import frock4 from "../../assets/products/frocks/images/frock4.png";

const frockImages = [frock1, frock2, frock3, frock4];



function FrockSlide ({ imageClass = "w-full h-48" }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="rounded-lg"
    >
      {frockImages.map((img, index) => (
        <SwiperSlide key={index}>
          <ZoomableImage
            src={img}
            alt={`frocks ${index + 1}`}
            className={`${imageClass} object-contain p-1 bg-white rounded-lg transition duration-300`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default FrockSlide;
