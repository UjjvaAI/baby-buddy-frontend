import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProductGalleryModal from "./ProductGalleryModal";

const SmartProductImage = ({ images, imageClass = "w-full h-[50vh] md:h-[70vh]" }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsGalleryOpen(true)} className="cursor-zoom-in">
        {images.length === 1 ? (
          <img
            src={images[0]}
            alt="Product"
            className={`${imageClass} object-contain bg-white rounded-lg`}
          />
        ) : (
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            slidesPerView={1}
            className="rounded-xl"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Product ${index + 1}`}
                  className={`${imageClass} object-contain bg-white rounded-xl`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <ProductGalleryModal
        isOpen={isGalleryOpen}
        images={images}
        onClose={() => setIsGalleryOpen(false)}
      />
    </>
  );
};

export default SmartProductImage;
