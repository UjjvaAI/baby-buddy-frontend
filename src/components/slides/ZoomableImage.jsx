// src/components/ZoomableImage.jsx
import React, { useState } from "react";

const ZoomableImage = ({ src, alt, className = "" }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };
  console.log("Loading image:", src);


  return (
    <img
      src={src}
      alt={alt}
      onClick={toggleZoom}
      onTouchEnd={toggleZoom}
      className={`${className} transition-transform duration-300 ease-in-out cursor-zoom-in ${
        isZoomed ? "scale-125 z-50" : "scale-100"
      }`}
    />
  );
};

export default ZoomableImage;
