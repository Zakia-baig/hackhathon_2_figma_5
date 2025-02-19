import Image from "next/image";

import styles from "./page.module.css";
import Link from "next/link";
import Header from "./components/headr/header";
import ProductCard from "./components/home/productCard";
import Feature from "./components/home/feature";
import shopHero from "../../public/shop-hero-1-product-slide-1.png"
import shopHero2 from "../../public/shop-hero-2-png-picture-1.png"
import filter from "../../public/filter.png"
import filter2 from "../../public/filter (2).png"
import filter3 from "../../public/filter3.png"
import filter1 from "../../public/filter-1.png"
import asian from '../../public/asian-woman-man-with-winter-clothes 1.png'
import Footer from "./components/footer/footer"
import ProductCards from "./Products/page";

export default function Home() {
  return (
    <div id={styles.homePage}>
      {/* header section */}
      <div>
        <Header/>
      </div>

      {/* hero section start */}
      <div id={styles.hero}>
        <div>
          <Image src={shopHero} alt="hero" width={1200} height={1200} />
        </div>
        <div id={styles.textOverLay}>
          <h5>SUMMER 2020</h5>
          <h1>NEW COLLECTION</h1>
          <h4>
            We know how large objects will act,<br/> but things on a small scale.
          </h4>
          <button>
            <Link href={"/shop/product"}>
              <h3>SHOP NOW</h3>
            </Link>
          </button>
        </div>
      </div>

      {/* shop card section start */}
      <div id={styles.shopCard}>
        <div id={styles.mainContent}>
          <h2 className="font-bold">EDITOR’S PICK</h2>
          <p>Problems trying to resolve the conflict between </p>
        </div>
        <div id={styles.cards}>
          <div id={styles.filter}>
            <Image src={filter} alt="main" width={1200} height={1200} />
          </div>
          <div id={styles.filter1}>
            <Image src={filter1} alt="womain" width={1200} height={1200} />
          </div>
          <div id={styles.filter2}>
            <div>
              <Image
                src={filter2}
                alt="ACCESSORIES"
                width={1200}
                height={1200}
              />
            </div>
            <div>
              <Image src={filter3} alt="KIDS" width={1200} height={1200} />
            </div>
          </div>
        </div>
      </div>

      {/* product card section */}
      <div id={styles.product}>
        <div id={styles.heading}>
          <h2>Featured Products</h2>
          <h3>BESTSELLER PRODUCTS</h3>
          <p>Problems trying to resolve the conflict between</p>
        </div>
        <ProductCard />
      </div>

      {/* banner 2 section */}
      <div id={styles.banner}>
        <div id={styles.bannerHeadings}>
          <h5>SUMMER 2020</h5>
          <h1 className="font-bold text-5xl">Vita Classic<br/> Product</h1>
          <h4>
            We know how large objects will act, We know <br/> how are objects will
            act, We know
          </h4>
          <div id={styles.bannerbtn}>
            <h5>$16.48</h5>

            <button>ADD TO CART</button>
          </div>
        </div>
        <div>
          <Image src={shopHero2} alt="banner" width={1200} height={1200} />
        </div>
      </div>

      {/* asian persons section */}
      <div id={styles.univers}>
        <div id={styles.asian}>
          <Image src={asian} alt="woman" width={1200} height={1200} />
        </div>
        <div id={styles.universContent}>
          <h2 className="font-bold">SUMMER 2020</h2>
          <h3 className="font-bold">
            Part of the Neural <br /> Universe
          </h3>
          <h4>
            We know how large objects will act,
            <br /> but things on a small scale.
          </h4>
          <div id={styles.universBtn}>
            <button className="font-bold">BUY NOW</button>
            <button className="font-bold">READ MORE</button>
          </div>
        </div>
      </div>

      {/* Featured Posts section */}
      <div id={styles.feature}>
        <div id={styles.featureHeading}>
          <h2 className="font-bold">Practice Advice</h2>
          <h3 className="font-bold">Featured Posts</h3>
          <p>
            Problems trying to resolve the conflict between <br/>
            the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <Feature/>
        <ProductCards/>
      </div>

      
      <Footer/>
    </div>
  );
}

