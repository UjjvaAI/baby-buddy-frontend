import React from "react";
import SmartProductImage from "../SmartProductImage";

import cradle01 from "../../assets/products/cradle603/images/cradle01.png";
import cradle02 from "../../assets/products/cradle603/images/cradle02.png";
import cradle03 from "../../assets/products/cradle603/images/cradle03.png";
import cradle04 from "../../assets/products/cradle603/images/cradle04.png";

const cradle603Images = [cradle01, cradle02, cradle03, cradle04];

function Cradle603({ imageClass = "w-full h-48" }) {
  return (
    <SmartProductImage images={cradle603Images} imageClass={imageClass} />
  );
}

export default Cradle603;
