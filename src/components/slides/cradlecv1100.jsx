// src/components/slides/RideOnSlide.jsx
import React from "react";
import SmartProductImage from "../SmartProductImage";

import cradle01 from "../../assets/products/cradlecv1100/images/cradle01.jpeg";
import cradle02 from "../../assets/products/cradlecv1100/images/cradle02.jpeg";
import cradle03 from "../../assets/products/cradlecv1100/images/cradle03.jpeg";



const cradlecv1100Images = [cradle01, cradle02, cradle03,];



function Cradlecv1100 ({ imageClass = "w-full h-48" }) {
  return (
    <SmartProductImage images={cradlecv1100Images} imageClass={imageClass} />
  );
}

export default Cradlecv1100;
