import React from 'react'
import styles from "./page.module.css"         
import Link from 'next/link';
import Image from 'next/image';
import vector7 from '../../../../public/Vector(7).png'
import vector9 from '../../../../public/Vector(91).png'
import TrialData from  "../components/common/trialData"                
import Brand from '@/app/components/common/brand';
import Footer from "@/app/components/footer/footer"

function Pricing() {
  return (
    <div id={styles.pricingPage}>
      <div id={styles.pricing}>
        <h3 className='font-bold'>PRICING</h3>
        <h2 className='font-bold'>Simple Pricing</h2>
        <div id={styles.vector}>
          <Link href={"/about/"} className='font-bold text-black'>Home</Link>
          <Image src={vector7} alt="" />
          <Link href={"/about/pricing"} className='font-bold text-slate-600'>Pricing</Link>
        </div>
      </div>

      {/* monthly section card */}
      <div id={styles.monthly}>
        <h2 className='font-extrabold text-xl'>Pricing</h2>
        <h3>
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </h3>
        <div id={styles.icon}>
          <h6 className='font-bold'>Monthly</h6>
          <div id={styles.arow}>
            <h1></h1>
          </div>
          <h6 className='font-bold'>Yearly</h6>
          <h5 className='text-sky-300'>Save 25%</h5>
        </div>
      </div>

      {/* pricing save card */}
      <div id={styles.pricingSave}>
        <div id={styles.inner}>
          <h2 className='font-extrabold'>FREE</h2>
          <h4 className='font-bold text-slate-500'>
            Organize across all <br /> apps by hand
          </h4>
          <h3 className='font-extrabold text-xl'>
            0 <sup>$</sup> Per Month
          </h3>
          <div id={styles.innerSave}>
            <h6>
              <Image src={vector9} alt="" />{" "}
            </h6>{" "}
            <h5 className='font-bold'>Unlimited product updates</h5>
          </div>
        </div>
        <div id={styles.inner2}>
          <h2 className='font-extrabold'>  STANDARD</h2>
          <h4 className='font-bold'>
            Organize across all <br /> apps by hand
          </h4>
          <h3 className='font-extrabold text-xl text-sky-400'>
            9.99 <sup>$</sup> Per Month
          </h3>
          <div id={styles.innerSave}>
            <h6>
              <Image src={vector9} alt="" />{" "}
            </h6>{" "}
            <h5 className='font-bold'>Unlimited product updates</h5>
          </div >
          <div id={styles.innerSave}>
            <h6>
              <Image src={vector9} alt="" />{" "}
            </h6>{" "}
            <h5 className='font-bold'>Unlimited product updates</h5>
          </div>
        </div>
        <div id={styles.inner}>
          <h2 className='font-extrabold'>PREMIUM</h2>
          <h4 className='font-bold text-slate-500'>
            Organize across all <br /> apps by hand
          </h4>
          <h3 className='font-extrabold text-xl'>
            19.99 <sup>$</sup> Per Month
          </h3>
          <div id={styles.innerSave}>
            <h6>
              <Image src={vector9} alt="" />{" "}
            </h6>{" "}
            <h5 className='font-bold'>Unlimited product updates</h5>
          </div>
        </div>
      </div>

      {/* big component  */}
      <div id={styles.big}>
        <h3 className='font-bold text-lg text-slate-700'>Trusted By Over 4000 Big Companies</h3>

        <Brand />
      </div>

      {/* pricing faqs */}
      <div id={styles.faqs}>
        <h2 className='font-extrabold text-xl'>Pricing FAQs</h2>
        <div id={styles.faqsData}>
          <div>
            <Image
              src={vector7}
              alt="Greater Than Icon"
              width={20}
              height={20}
              className={styles.redIcon}
            />{" "}
            <h3 className='font-bold text-xl'>the quick fox jumps over the lazy dog</h3>
            <h4>
              Met minim Mollie non desert Alamo est sit cliquey<br/> dolor do met
              sent. RELIT official consequent door ENIM <br/> RELIT Mollie. Excitation
              venial consequent sent <br/>nostrum met.
            </h4>
          </div>
          <div>
            <Image
              src={vector7}
              alt="Greater Than Icon"
              width={20}
              height={20}
              className={styles.redIcon}
            />{" "}
            <h3 className='font-bold text-xl'>the quick fox jumps over the lazy dog</h3>
            <h4 className='text-slate-800'>
              Met minim Mollie non desert Alamo est sit cliquey dolor<br/> do met
              sent. RELIT official consequent door ENIM RELIT Mollie.<br/> Excitation
              venial consequent sent nostrum met.
            </h4>
          </div>
          <div>
            <Image
              src={vector7}
              alt="Greater Than Icon"
              width={20}
              height={20}
              className={styles.redIcon}
            />{" "}
            <h3 className='font-bold text-xl'>the quick fox jumps over the lazy dog</h3>
            <h4>
              Met minim Mollie non desert Alamo est sit cliquey <br/>dolor do met
              sent. RELIT official consequent door ENIM <br/>RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </h4>
          </div>
          <div>
            <Image
              src={vector7}
              alt="Greater Than Icon"
              width={20}
              height={20}
              className={styles.redIcon}
            />{" "}
            <h3 className='font-bold text-xl'>the quick fox jumps over the lazy dog</h3>
            <h4>
              Met minim Mollie non desert Alamo est sit cliquey dolor<br/> do met
              sent. RELIT official consequent door ENIM RELIT Mollie.<br/> Excitation
              venial consequent sent nostrum met.
            </h4>
          </div>
          <div>
            <Image
              src={vector7}
              alt="Greater Than Icon"
              width={20}
              height={20}
              className={styles.redIcon}
            />{" "}
            <h3 className='font-bold text-xl'>the quick fox jumps over the lazy dog</h3>
            <h4>
              Met minim Mollie non desert Alamo est sit cliquey <br/>dolor do met
              sent. RELIT official consequent door ENIM <br/>RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </h4>
          </div>
          <div>
            <Image
              src={vector7}
              alt="Greater Than Icon"
              width={20}
              height={20}
              className={styles.redIcon}
            />{" "}
            <h3 className='font-bold text-xl'>the quick fox jumps over the lazy dog</h3>
            <h4>
              Met minim Mollie non desert Alamo est sit cliquey dolor<br/> do met
              sent. RELIT official consequent door ENIM RELIT Mollie.<br/> Excitation
              venial consequent sent nostrum met.
            </h4>
          </div>
        </div>
        <h4 className='font-bold text-slate-500'>Haven t got your answer? Contact our support</h4>
      </div>

      {/* trial section */}
      <div>
        <TrialData/>
      </div>
      <Footer/>
    </div>
  );
}

export default Pricing