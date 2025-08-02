import React from "react";
import SmartProductImage from "../SmartProductImage";


import cradle from "../../assets/products/cradle/images/cradle.png";

const cradleImages = [cradle];  // Can add more images here

function Cradle ({ imageClass = "w-full h-48" }) {
  return (
    <SmartProductImage images={cradleImages} imageClass={imageClass} />
  );
}

export default Cradle;
