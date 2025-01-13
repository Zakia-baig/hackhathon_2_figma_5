import {StaticImageData} from "next/image";
import team1 from  "../../../../public/team-user-1.jpg" ;                                               //"@/public/team-1-user-1.jpg"                   //"/public/team-1-user-1.jpg";
import team2 from "../../../../public/team-1-user-2.png"
import team3 from "../../../../public/team-1-user-3.png"
import facebook from "../../../../public/facebook(2).png"
import instagram from "../../../../public/intagram.png"
import twitter from "../../../../public/twiter.png"


export type TeamData = {
  image: string | StaticImageData;
  
  facebook: string | StaticImageData;
  instagram: string | StaticImageData;
  twitter: string | StaticImageData;
};

const teamData: TeamData[] = [
  {
    image: team1,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
  {
    image: team2,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
  {
    image: team3,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
];

export default teamData