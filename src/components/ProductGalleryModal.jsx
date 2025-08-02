import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/pagination";

const ProductGalleryModal = ({ isOpen, images, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 z-50 bg-black bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center text-white text-2xl font-bold"
      >
        ✕
      </button>

      <Swiper
        zoom={true}
        pagination={{ clickable: true }}
        modules={[Zoom, Pagination]}
        slidesPerView={1}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container flex items-center justify-center w-full h-full">
              <img
                src={img}
                alt={`Product ${index + 1}`}
                className="max-w-[90vw] max-h-[90vh] object-contain select-none"
                draggable="false"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductGalleryModal;
