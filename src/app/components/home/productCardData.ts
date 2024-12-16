import { StaticImageData } from "next/image";
import product1 from "../../../../public/fixed-height (19).png"
import product2 from "../../../../public/product-cover-5.png"
import product3 from "../../../../public/product-cover-5 (9).png"
import product4 from "../../../../public/product-cover-5 (10).png"
import product5 from "../../../../public/product-cover-5 (11).png"
import product6 from "../../../../public/product-cover-5 (12).png"
import product7 from "../../../../public/product-cover-5 (13).png"
import product8 from "../../../../public/fixed-height (20).png";


export type ProductCardData = {
    image: string | StaticImageData
    title: string,
    category: string,
    prices: string,
    newPrices:string,
}

export const productCard: ProductCardData[] = [
  {
    image: product1 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
  {
    image: product2 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
  {
    image: product3 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
  {
    image: product4 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
  {
    image: product5 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
  {
    image: product6,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
  {
    image: product7 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
  {
    image: product8 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
];