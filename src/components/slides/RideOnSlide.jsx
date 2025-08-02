import React from "react";
import SmartProductImage from "../SmartProductImage";

import rideon1 from "../../assets/products/rideon/images/rideon1.png";
import rideon2 from "../../assets/products/rideon/images/rideon2.png";
import rideon3 from "../../assets/products/rideon/images/rideon3.png";
import rideon4 from "../../assets/products/rideon/images/rideon4.png";
import rideon5 from "../../assets/products/rideon/images/rideon5.png";

const rideonImages = [rideon1, rideon2, rideon3, rideon4, rideon5];

function RideonSlide({ imageClass = "w-full h-48" }) {
  return (
    <SmartProductImage images={rideonImages} imageClass={imageClass} />
  );
}

export default RideonSlide;
