// src/components/slides/RideOnSlide.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ZoomableImage from "../ZoomableImage";

import cradle01 from "../../assets/products/cradlecv1100/images/cradle01.jpeg";
import cradle02 from "../../assets/products/cradlecv1100/images/cradle02.jpeg";
import cradle03 from "../../assets/products/cradlecv1100/images/cradle03.jpeg";



const cradlecv1100Images = [cradle01, cradle02, cradle03,];



function Cradlecv1100 ({ imageClass = "w-full h-48" }) {
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
      {cradlecv1100Images.map((img, index) => (
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

export default Cradlecv1100;
