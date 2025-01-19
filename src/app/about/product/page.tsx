import React from "react";
import Link from 'next/link';
import styles from "./page.module.css";
import ProductCard from "../components/product/product";
import Image from "next/image";
import vector7 from '../../../../public/Vector(7).png'
import unplush2 from "../../../../public/unplush(2).png";
import InnerTeam from "../components/product/innerTeamData";
import TrialData from "../components/common/trialData";
import Footer from "@/app/components/footer/footer"

function Product() {
  return (
    <div id={styles.productPage}>
      <div id={styles.head}>
        <h3 className="font-semibold text-slate-500">WHAT WE DO</h3>
        <h2 className="font-extrabold">Innovation tailored for you</h2>
      </div>
      <div id={styles.vector}>
          <Link href={"/about/"} className='font-bold text-black'>Home</Link>
          <Image src={vector7} alt="" />
          <Link href={"/about/Team"} className='font-bold text-slate-600'>Team</Link>
        </div>
      <div id={styles.unplush}>
        <div>
          <Image src={unplush2} alt="" width={1200} height={1200} />
        </div>
        <div>
          <ProductCard />
        </div>
      </div>

      {/* team section */}
      <div id={styles.teamMeet}>
        <h2 className="font-bold">Meet Our Team</h2>
        <div>
          <InnerTeam/>
        </div>
      </div>

      {/*  */}
      <div>
        <TrialData/>
      </div>
      <Footer/>
    </div>
  );
}

export default Product;