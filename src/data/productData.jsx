// src/data/productData.jsx
import RideOnSlide from "../components/slides/RideOnSlide";
import FrockSlide from "../components/slides/FrockSlide";
import CradleSlide from "../components/slides/cradleslide";




const productData = {
  rideon001: {
    id: "rideon001",
    name: "Ride-On Toy Car",
    mrp: 3999,
    price: 2400,
    description:
      "Fun and safe ride-on toy for kids. Includes music, headlights, and rechargeable battery.",
    colors: ["Red", "Blue", "Yellow"],
    sizes: ["Small", "Medium", "Large"],
    imageSlider: <RideOnSlide />,
  },

  frock001: {
    id: "frock001",
    name: "Baby Frock",
    mrp: 599,
    price: 499,
    description: "Beautiful cotton frock for babies with soft fabric.",
    colors: ["Pink", "White", "Blue"],
    sizes: ["0-6M", "6-12M", "1-2Y"],
    imageSlider: <FrockSlide />,
  },

  cradle001: {
      id: "cradle001",
      name: "baby cradle",
      mrp: 9999,
      price: 7999,
      description: "Comfortable cradle for your baby with adjustable height.",
      colors: ["Pink", "White", "Sky Blue"],
      sizes: ["0-18m"],
      imageSlider: <CradleSlide />,
  },









};

export default productData;
