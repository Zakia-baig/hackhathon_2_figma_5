import { StaticImageData } from "next/image";

import cover1 from "../../../../public/product-cover-1.png"
import cover2 from "../../../../public/product-cover-2.png"
import cover3 from "../../../../public/product-cover-3.png"
import cover4 from "../../../../public/product-cover-4.png"
import cover5 from "../../../../public/product-c0ver5.png"
import cover6 from "../../../../public/product-cover6.png"
import cover7 from "../../../../public/product-cover-1.png"
import cover8 from "../../../../public/product-cover-2.png"

export type ProductData = {
    image: string | StaticImageData,
    title: string,
    discreption: string,
    price:string
}

const productData: ProductData[] = [
  {
    image: cover1,
    title: "Graphic Design",
    discreption: "English Department",
    price: "$16.48 $6.48",
  },
  {
    image: cover2,
    title: "Graphic Design",
    discreption: "English Department",
    price: "$16.48 $6.48",
  },
  {
    image: cover3,
    title: "Graphic Design",
    discreption: "English Department",
    price: "$16.48 $6.48",
  },
  {
    image: cover4,
    title: "Graphic Design",
    discreption: "English Department",
    price: "$16.48 $6.48",
  },
  {
    image: cover5,
    title: "Graphic Design",
    discreption: "English Department",
    price: "$16.48 $6.48",
  },
  {
    image: cover6,
    title: "Graphic Design",
    discreption: "English Department",
    price: "$16.48 $6.48",
  },
  {
    image: cover7,
    title: "Graphic Design",
    discreption: "English Department",
    price: "$16.48 $6.48",
  },
  {
    image: cover8,
    title: "Graphic Design",
    discreption: "English Department",
    price: "$16.48 $6.48",
  },
];

export default productData;