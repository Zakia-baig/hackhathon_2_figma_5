import React from 'react'
import Image from 'next/image'
import teamsData from './innerTeam';
import styles from "./innerTeamData.module.css"


function InnerTeam() {
  return (
    <div id={styles.teamCard}>
      {teamsData.map(({ image, instagram, facebook, twitter }, index) => (
        <div id={styles.teamsData} key={index}>
          < Image src={image} alt="" id={styles.img} width={1200} height={1200}  />
          <h3 className='font-bold text-center'>Username</h3>
          <h2 className='font-bold text-center text-slate-600' >
            
          Profession</h2>

          <div  id={styles.social} >
            <Image src={facebook} alt="" width={20} height={20}  />
            <Image src={instagram} alt="" width={20} height={20}  />
            <Image src={twitter} alt="" width={20} height={20}  />
          </div>
        </div>
      ))}
    </div>
  );
}

export default InnerTeam