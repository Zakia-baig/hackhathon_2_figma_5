import { StaticImageData } from "next/image";
import team1 from "../../../../../public/team-1-user-1.jpg"
import team3 from "../../../../../public/team-1-user-3.jpg"
import team4 from "../../../../../public/team-1-user-11.jpg"
import team5 from "../../../../../public/team-1-user-3.jpg"
import team6 from "../../../../../public/team-1-user-2.jpg"
import team7 from "../../../../../public/team-1-user-2.jpg"
import team8 from "../../../../../public/team-1-user-2(1).jpg"
import team10 from "../../../../../public/team-1-user-2(2).jpg"
import team9 from "../../../../../public/team-1-user-3(2).jpg"
import facebook from "../../../../../public/facebok.png"
import instagram from "../../../../../public/intagram.png"
import twitter from "../../../../../public/twiter.png"



export type TeamData = {
  image: string | StaticImageData;
  facebook: string | StaticImageData;
  instagram: string | StaticImageData;
  twitter: string | StaticImageData;
};

const teamData: TeamData[] = [
  {
    image: team4,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
  {
    image: team6,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
  {
    image: team5,
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
  {
    image: team8,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
  {
    image: team1,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
  {
    image: team7,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
  {
    image: team10,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
  {
    image: team9,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
];

export default teamData