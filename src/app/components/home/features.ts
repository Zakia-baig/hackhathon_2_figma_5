import { StaticImageData } from "next/image";

import road from '../../../../public/road.png'
import car from '../../../../public/car.png'
import ambralas from '../../../../public/ambralas.png'
import time from '../../../../public/coolicon.png'
import comments from '../../../../public/comments.png'



type FeaturesData = {
  image: string | StaticImageData;
  google: string;
  treding: string;
  heading: string;
  newData:string,
  discreption: string;
  time: string | StaticImageData;
    comments: string | StaticImageData;
  more:string
};


const featureData: FeaturesData[] = [
  {
    image: road,
    google: "Google",
    treding: "Trending",
    newData: "New",
    heading: "Loudest à la Madison #1 (L'integral)",
    discreption:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away",
    time: time,
    comments: comments,
    more: "Learn More",
  },
  {
    image: car,
    google: "Google",
    treding: "Trending",
    newData: "New",
    heading: "Loudest à la Madison #1 (L'integral)",
    discreption:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away",
    time: time,
    comments: comments,
    more: "Learn More",
  },
  {
    image: ambralas,
    google: "Google",
    treding: "Trending",
    newData: "New",
    heading: "Loudest à la Madison #1 (L'integral)",
    discreption:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away",
    time: time,
    comments: comments,
    more: "Learn More",
  },
];


export default featureData