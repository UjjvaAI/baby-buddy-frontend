// src/components/slides/RideOnSlide.jsx
import React from "react";
import SmartProductImage from "../SmartProductImage";


import cradle01 from "../../assets/products/cradle730/images/cradle01.png";
import cradle02 from "../../assets/products/cradle730/images/cradle02.png";


const cradle730Images = [cradle01, cradle02,];



function Cradle730 ({ imageClass = "w-full h-48" }) {
  return (

   <SmartProductImage images={cradle730Images} imageClass={imageClass} />
     );
   }
   
   export default Cradle730;
   