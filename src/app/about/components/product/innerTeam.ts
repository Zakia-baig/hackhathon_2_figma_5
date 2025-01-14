import { StaticImageData } from "next/image";
import teams6 from  "../../../../../public/team-user-1.jpg" ;       
import teams4 from "../../../../../public/team-1-user-3.png";
import teams1 from "../../../../../public/team-1-user-11.png";
import teams3 from "../../../../../public/team-user-3.jpg";
import teams2 from "../../../../../public/team-user-4.jpg";
import teams7 from "../../../../../public/team-1-user-2.png";
import teams5 from "../../../../../public/team-user-2(1).jpg";
import teams8 from "../../../../../public/team-user-2(2).jpg";
import teams9 from "../../../../../public/team-user-3(2).png";
import facebook from "../../../../../public/facebok.png";
import instagram from "../../../../../public/intagram.png";
import twitter from "../../../../../public/twiter.png";



export type TeamData = {
  image: string | StaticImageData;
  facebook: string | StaticImageData;
  instagram: string | StaticImageData;
  twitter: string | StaticImageData;
};

const teamsData: TeamData[] = [
  {
    image: teams1,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
  {
    image: teams2,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
  {
    image: teams3,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
  {
    image: teams4,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
  {
    image: teams5,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
  {
    image: teams6,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
  {
    image: teams7,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
  {
    image: teams8,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
  {
    image: teams9,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
];

export default teamsData