// src/components/slides/RideOnSlide.jsx
import React from "react";
import SmartProductImage from "../SmartProductImage";

import frock1 from "../../assets/products/frocks/images/frock1.png";
import frock2 from "../../assets/products/frocks/images/frock2.png";
import frock3 from "../../assets/products/frocks/images/frock3.png";
import frock4 from "../../assets/products/frocks/images/frock4.png";

const frockImages = [frock1, frock2, frock3, frock4];


function frockslide({ imageClass = "w-full h-48" }) {
  return (
    <SmartProductImage images={frockImages} imageClass={imageClass} />
  );
}

export default frockslide;
