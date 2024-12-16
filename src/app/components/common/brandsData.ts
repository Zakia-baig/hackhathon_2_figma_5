import { StaticImageData } from "next/image";
import dectop from '@/public/Vector (7).png'
import aws from '@/public/Vector (8).png'
import stripe from '@/public/Vector (9).png'
import flo from '@/public/Vector (10).png'
import lya from '@/public/Vector (11).png'
import hooli from '@/public/Vector (12).png'


export type Brandsdata = {
    image:string | StaticImageData
}

const brandData: Brandsdata[] = [
    {
        image:hooli
    },
    {
        image:lya
    },
    {
        image:flo
    },
    {
        image:stripe
    },
    {
        image:aws
    },
    {
        image:dectop
    },
]

export default brandData