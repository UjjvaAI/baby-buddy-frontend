// src/data/productData.jsx
import RideOnSlide from "../components/slides/RideOnSlide";
import FrockSlide from "../components/slides/FrockSlide";
import CradleSlide from "../components/slides/cradleslide";
import Cradle603 from "../components/slides/cradle603";
import Cradle730 from "../components/slides/cradle730";
import Cradlecv1100 from "../components/slides/cradlecv1100";




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
      colors: ["Pink", "Sky Blue"],
      sizes: ["0-18m"],
      imageSlider: <CradleSlide />,
  },
  cradle603: {
    id: "cradle603",
    name: "Cradle 603",
    mrp: 4000,
    price: 2999,
    description: "Stylish and sturdy cradle with a modern design.",
    colors: ["blue", "Pink"],
    sizes: ["0-24m"],
    imageSlider: <Cradle603 />,
  },

  cradle730: {
    id: "cradle730",
    name: "Cradle 730",
    mrp: 4000,
    price: 3999,
    description: "Elegant cradle with a soothing rocking feature.",
    colors: ["blue", "pink"],
    sizes: ["0-18m"],
    imageSlider: <Cradle730 />,
  },

  cradlecv1100: {
    id: "cradlecv1100",
    name: "Cradle CV1100",
    mrp: 4000,
    price: 2999,
    description : "Premium cradle with a classic design and comfortable padding.",
    colors: ["blue", "pink"],
    sizes: ["0-18m"],
    imageSlider: <Cradlecv1100 />,
  },








};

export default productData;
