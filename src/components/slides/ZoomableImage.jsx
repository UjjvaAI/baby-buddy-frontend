import React, { useState } from "react";

const ZoomableImage = (props) => {
  const { src, alt, className } = props;
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className={`relative overflow-hidden rounded-lg border ${isZoomed ? "z-50" : ""}`}>
      <img
        src={src}
        alt={alt}
        onClick={toggleZoom}
        onTouchEnd={toggleZoom}
        className={`w-full h-auto object-contain cursor-zoom-in transform transition-transform duration-300 ease-in-out ${className || ""} ${isZoomed ? "scale-150" : "scale-100"}`}
        style={{ transformOrigin: "center center" }}
      />
    </div>
  );
};

export default ZoomableImage;
