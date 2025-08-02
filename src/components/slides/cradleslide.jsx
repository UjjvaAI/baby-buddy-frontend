import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import ZoomableImage from "../ZoomableImage";


import cradle from "../../assets/products/cradle/images/cradle.png";

const cradleImages = [cradle];  // Can add more images here

function CradleSlide({ imageClass = "w-full h-48" }) {
  const isLoopEnabled = cradleImages.length > 1;
  const isAutoplayEnabled = cradleImages.length > 1;

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      loop={isLoopEnabled}
      autoplay={isAutoplayEnabled ? { delay: 3000, disableOnInteraction: false } : false}
      pagination={isLoopEnabled ? { clickable: true } : false}
      className="rounded-lg"
    >
      {cradleImages.map((img, index) => (
        <SwiperSlide key={index}>
          <ZoomableImage
            src={img}
            alt={`Cradle ${index + 1}`}
            className={`${imageClass} object-contain p-1 bg-white rounded-lg transition duration-300`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CradleSlide;
