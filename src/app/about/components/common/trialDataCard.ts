import { StaticImageData } from "next/image";
import twiter from  "../../../../../public/twiter.png"  ;       
import facebok from "../../../../../public/logo_facebook.png";
import intagram from "../../../../../public/instagram2.png";
import linkdin from "../../../../../public/linkedin-icon(1).png";


export type TrialData = {
    twitter:string|StaticImageData
    facebook:string|StaticImageData
    instagram:string|StaticImageData
    linkdin:string|StaticImageData
}


const trialData: TrialData[] = [
    {
        twitter: twiter,
        facebook: facebok,
        instagram: intagram,
        linkdin:linkdin
    }
]

export default trialData