import { StaticImageData } from "next/image";
import cloth1 from "../../../../public/col-md-4.png"
import cloth2 from "../../../../public/card-item.png"
import cloth3 from "../../../../public/card-item(1).png"
import cloth4 from "../../../../public/card-item(2).png"
import cloth5 from "../../../../public/card-item(3).png"


export type ClothData = {
    image:string | StaticImageData
}

const clothData: ClothData[] = [
    {
        image:cloth1
    },
    {
        image:cloth2
    },
    {
        image:cloth3
    },
    {
        image:cloth4
    },
    {
        image:cloth5
    },
]

export default clothData