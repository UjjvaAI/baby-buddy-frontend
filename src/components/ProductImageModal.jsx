import React, { useState, useRef, useEffect } from "react";

const ProductImageModal = ({ isOpen, image, onClose }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startTouches, setStartTouches] = useState([]);
  const imgRef = useRef();

  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  const handleWheel = (e) => {
    e.preventDefault();
    let newScale = scale - e.deltaY * 0.001;
    newScale = Math.min(Math.max(newScale, 1), 3);
    setScale(newScale);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setStartTouches([{ x: e.clientX - position.x, y: e.clientY - position.y }]);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (startTouches.length === 1) {
      const newX = e.clientX - startTouches[0].x;
      const newY = e.clientY - startTouches[0].y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setStartTouches([]);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const distance = getDistance(e.touches[0], e.touches[1]);
      setStartTouches([
        { id: e.touches[0].identifier, x: e.touches[0].clientX, y: e.touches[0].clientY },
        { id: e.touches[1].identifier, x: e.touches[1].clientX, y: e.touches[1].clientY },
        distance,
      ]);
    } else if (e.touches.length === 1) {
      setStartTouches([{ x: e.touches[0].clientX - position.x, y: e.touches[0].clientY - position.y }]);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && startTouches.length === 3) {
      const newDistance = getDistance(e.touches[0], e.touches[1]);
      const scaleChange = newDistance / startTouches[2];
      let newScale = scaleChange * scale;
      newScale = Math.min(Math.max(newScale, 1), 3);
      setScale(newScale);
    } else if (e.touches.length === 1 && startTouches.length === 1) {
      const newX = e.touches[0].clientX - startTouches[0].x;
      const newY = e.touches[0].clientY - startTouches[0].y;
      setPosition({ x: newX, y: newY });
    }
  };

  const getDistance = (touch1, touch2) => {
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return (
    isOpen && (
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-3xl font-bold z-50"
        >
          ✕
        </button>
        <div
          ref={imgRef}
          onMouseDown={handleMouseDown}
          className="cursor-grab active:cursor-grabbing touch-none"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: "transform 0.2s ease",
          }}
        >
          <img
            src={image}
            alt="Zoomed Product"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            draggable="false"
          />
        </div>
      </div>
    )
  );
};

export default ProductImageModal;
