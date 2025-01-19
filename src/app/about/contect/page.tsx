import styles from   "./page.module.css"                    //"/page.module.css";
import Image from "next/image";
import twitter from "../../../../public/Vector(111).png";
import facebook from "../../../../public/facebok1.png";
import instagram from "../../../../public/Vector(13).png";
import linkdin from "../../../../public/linkdin_1.png";
import technology from "../../../../public/technology1.png";
import arow from "../../../../public/Arrow2.png";
import phone from "../../../../public/Vector_5.png";
import location from "../../../../public/location.png";
import email from "../../../../public/email1.png";
import Footer from "@/app/components/footer/footer"

import React from "react";

function Contect() {
  return (
    <div id={styles.contectPage}>
      <div id={styles.contect}>
        <div id={styles.contectData}>
          <h4 className="font-semibold">CONTACT US</h4>
          <h2 className="font-extrabold">Get in touch <br/>today!</h2>
          <h3>
            We know how large objects will act,<br/> but things on a small scale
          </h3>
          <h5 className="font-bold">Phone ; +451 215 215 </h5>
          <h5 className="font-bold">Fax : +451 215 215</h5>
          <div id={styles.socialLinks}>
            <Image src={twitter} alt="" />
            <Image src={facebook} alt="" />
            <Image src={instagram} alt="" />
            <Image src={linkdin} alt="" />
          </div>
        </div>
        <div  id={styles.image}>
          <Image src={technology} alt="" width={1100} height={1100} />
        </div>
      </div>

      <div id={styles.visit}>
        <h3 className="font-semibold">VISIT OUR OFFICE</h3>
        <h2 className="font-bold">
          We help small businesses <br /> with big ideas
        </h2>
        <div id={styles.contectStep}>
          <div className={styles.vector}>
            <Image src={phone} alt="" />
            <h5 className="font-bold">georgia.young@example.com</h5>
            <h5 className="font-bold">georgia.young@ple.com</h5>
            <h5 className="font-bold">Get Support</h5>
            <button className="font-bold">Submit Request</button>
          </div>

          <div id={styles.location}>
            <Image src={location} alt="" />
            <h5 className="font-bold">georgia.young@example.com</h5>
            <h5 className="font-bold">georgia.young@ple.com</h5>
            <h5 className="font-bold">Get Support</h5>
            <button>Submit Request</button>
          </div>

          <div className={styles.vector}>
            <Image src={email} alt="" />
            <h5 className="font-bold">georgia.young@example.com</h5>
            <h5 className="font-bold">georgia.young@ple.com</h5>
            <h5 className="font-bold">Get Support</h5>
            
            <button className="font-bold">Submit Request</button>
          </div>
        </div>

        <div id={styles.arow}>
          <Image src={arow} alt="" />
          <h3 className="font-bold text-black">WE Can&apos;t WAIT TO MEET YOU</h3>
          <h2 className="font-extrabold">Let&apos;s Talk</h2>
          <button>Try it free now</button>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}

export default Contect;