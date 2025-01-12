

import { StaticImageData } from "next/image";

import product1 from "../../../../public/filter.png";
import product2 from "../../../../public/filter-1.png";
import product3 from "../../../../public/cover3.png";
import product4 from "../../../../public/filter3.png";
import product5 from "../../../../public/cover5.png";
import product6 from "../../../../public/cover6.png";
import product7 from "../../../../public/cover7.png";
import product8 from "../../../../public/unsplash.png"; 
import product9 from "../../../../public/cover8.png";
import product10 from "../../../../public/cover9.png";
import product11 from "../../../../public/cover10.png";
import product12 from "../../../../public/cover11.png";

export type ShopCardData = {
  image: StaticImageData; // Enforce consistent type
  title: string;
  category: string;
  prices: string;
  newPrices: string;
};

export const shopCard: ShopCardData[] = [
  {
    image: product1,
    title: "Graphic Design",
    category: "English Department",
    prices: "$16.48",
    newPrices: "$6.48",
  },
  {
    image: product2,
    title: "Graphic Design",
    category: "English Department",
    prices: "$16.48",
    newPrices: "$6.48",
  },
  {
    image: product3,
    title: "Graphic Design",
    category: "English Department",
    prices: "$16.48",
    newPrices: "$6.48",
  },
  {
    image: product4,
    title: "Graphic Design",
    category: "English Department",
    prices: "$16.48",
    newPrices: "$6.48",
  },
  {
    image: product5,
    title: "Graphic Design",
    category: "English Department",
    prices: "$16.48",
    newPrices: "$6.48",
  },
  {
    image: product6,
    title: "Graphic Design",
    category: "English Department",
    prices: "$16.48",
    newPrices: "$6.48",
  },
  {
    image: product7,
    title: "Graphic Design",
    category: "English Department",
    prices: "$16.48",
    newPrices: "$6.48",
  },
  {
    image: product8, // Fixed typo in import path
    title: "Graphic Design",
    category: "English Department",
    prices: "$16.48",
    newPrices: "$6.48",
  },
  {
    image: product9,
    title: "Graphic Design",
    category: "English Department",
    prices: "$16.48",
    newPrices: "$6.48",
  },
  {
    image: product10,
    title: "Graphic Design",
    category: "English Department",
    prices: "$16.48",
    newPrices: "$6.48",
  },
  {
    image: product11,
    title: "Graphic Design",
    category: "English Department",
    prices: "$16.48",
    newPrices: "$6.48",
  },
  {
    image: product12,
    title: "Graphic Design",
    category: "English Department",
    prices: "$16.48",
    newPrices: "$6.48",
  },
];
