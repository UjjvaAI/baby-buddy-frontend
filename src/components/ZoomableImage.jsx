import React, { useState } from "react";

const ZoomableImage = ({ src, alt, className = "" }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div
      className={`relative overflow-hidden cursor-zoom-in ${
        isZoomed ? "cursor-zoom-out" : ""
      }`}
      onClick={toggleZoom}
    >
      <img
        src={src}
        alt={alt}
        className={`${className} transition-transform duration-300 ${
          isZoomed ? "scale-150" : "scale-100"
        }`}
      />
    </div>
  );
};

export default ZoomableImage;
