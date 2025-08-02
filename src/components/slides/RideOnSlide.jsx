import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ZoomableImage from "../ZoomableImage";

import rideon1 from "../../assets/products/rideon/images/rideon1.png";
import rideon2 from "../../assets/products/rideon/images/rideon2.png";
import rideon3 from "../../assets/products/rideon/images/rideon3.png";
import rideon4 from "../../assets/products/rideon/images/rideon4.png";
import rideon5 from "../../assets/products/rideon/images/rideon5.png";

const rideonImages = [rideon1, rideon2, rideon3, rideon4, rideon5];

function RideOnSlide({ imageClass = "w-full h-48" }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      className="rounded-lg"
    >
      {rideonImages.map((src, index) => (
        <SwiperSlide key={index}>
          <ZoomableImage
            src={src}
            alt={`Ride-on ${index + 1}`}
            className={`${imageClass} object-contain p-1 bg-white rounded-lg transition duration-300`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default RideOnSlide;
