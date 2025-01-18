import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import single from "../../../../public/single-product-1-cover-2.png";
import single2 from "../../../../public/single-product-1-thumb-2.jpg";
import single3 from "../../../../public/single-product-1-thumb-1.jpg";
import star1 from "../../../../public/Vector(55).png";
import star2 from "../../../../public/Vector(6).png";
import vecter7 from "../../../../public/Vector(77).png";
import vecter8 from "../../../../public/Vector(88).png";
import vecter9 from "../../../../public/Vector(9).png";
import unplush from "../../../../public/unsplash_QANOF9iJlFs.png";
import ProductCard from "../../components/shop/product";
import Brand from "../../components/common/brand";
import Header from "../../../app/components/headr/header";
import Footer from "../../../app/components/footer/footer"

function Product() {
  return (
    <div id={styles.productPage}>
      {/* Header Section */}
      <Header />

      {/* Product Details Section */}
      <div id={styles.productItem} className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div id={styles.img} className="mb-4">
            <Image src={single} alt="Product Image" width={600} height={600} className="rounded-md" />
          </div>
          <div id={styles.innerImage} className="flex gap-4">
            <Image src={single2} alt="Thumbnail 1" width={100} height={100} className="cursor-pointer rounded-md" />
            <Image src={single3} alt="Thumbnail 2" width={100} height={100} className="cursor-pointer rounded-md" />
          </div>
        </div>

        {/* Product Info */}
        <div id={styles.item} className="space-y-4">
          <h1 className="text-2xl font-semibold">Floating Phone</h1>
          <div className="flex items-center space-x-2">
            {[...Array(4)].map((_, index) => (
              <Image key={index} src={star1} alt="Star" width={20} height={20} />
            ))}
            <Image src={star2} alt="Half Star" width={20} height={20} />
            <span id={styles.reviews} className="text-sm text-gray-500">10 Reviews</span>
          </div>
          <h2 className="text-xl font-bold text-black">$1,139.33</h2>
          <h3 className="text-md text-gray-700">Availability: <span className="text-blue-500 font-bold">In Stock</span></h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
            consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>
          <hr className="my-4" />
          {/* Color Options */}
          <div id={styles.color} className="flex gap-2">
            <div className={styles.colorsItem} id={styles.one}></div>
            <div className={styles.colorsItem} id={styles.two}></div>
            <div className={styles.colorsItem} id={styles.three}></div>
            <div className={styles.colorsItem} id={styles.four}></div>
          </div>
          {/* Actions */}
          <div id={styles.select} className="flex items-center gap-4 mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Select Options</button>
            <Image src={vecter7} alt="Icon 1" width={24} height={24} />
            <Image src={vecter8} alt="Icon 2" width={24} height={24} />
            <Image src={vecter9} alt="Icon 3" width={24} height={24} />
          </div>
        </div>
      </div>

      {/* Product Description Section */}
      <div id={styles.unplush} className="container mx-auto mt-12">
        <div id={styles.unplushHeading} className="flex justify-between items-center border-b">
          <h4 className="cursor-pointer text-lg font-medium">Description</h4>
          <h4 className="cursor-pointer text-lg font-medium">Additional Information</h4>
          <h4 className="cursor-pointer text-lg font-medium">Reviews (0)</h4>
        </div>
       

        <hr />
        <div id={styles.unplushContent}>
          <div>
            <Image src={unplush} alt=" " width={1200} height={1200} />
          </div>
          <div>
            <h2 className="font-bold text-lg">the quick fox jumps over</h2>
            <br />
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met
            </p>
            <br />
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met
            </p>
            <br />
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met
            </p>
            <br />
          </div>
          <div id={styles.jumps}>
            <h2 className="font-bold text-lg">the quick fox jumps over </h2>
            <h4>the quick fox jumps over the lazy dog</h4>
            <h4>the quick fox jumps over the lazy dog</h4>
            <h4>the quick fox jumps over the lazy dog</h4>
            <h4>the quick fox jumps over the lazy dog</h4>
            
            <h2 className="font-bold text-lg">the quick fox jumps over</h2>
            <h4>the quick fox jumps over the lazy dog</h4>
            <h4>the quick fox jumps over the lazy dog</h4>
            <h4>the quick fox jumps over the lazy dog</h4>
          </div>
        </div>
      </div>

      {/* product card section */}

      <div id={styles.seler}>
        <div>
          <h1 className="font-bold">BESTSELLER PRODUCTS</h1>
          <div id={styles.line}></div>
          <ProductCard />
          <Brand />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Product;





