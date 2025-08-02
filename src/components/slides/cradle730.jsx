// src/components/slides/RideOnSlide.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ZoomableImage from "../ZoomableImage";

import cradle01 from "../../assets/products/cradle730/images/cradle01.png";
import cradle02 from "../../assets/products/cradle730/images/cradle02.png";


const cradle730Images = [cradle01, cradle02,];



function Cradle730 ({ imageClass = "w-full h-48" }) {
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
      {cradle730Images.map((img, index) => (
        <SwiperSlide key={index}>
          <ZoomableImage
            src={img}
            alt={`cradle ${index + 1}`}
            className={`${imageClass} object-contain p-1 bg-white rounded-lg transition duration-300`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Cradle730;
