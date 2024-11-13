import { Ifoods } from "@/helper/interfaces"
import Image from "next/image";

import CartMangment from "./CartMangment";

interface Icard {
  card:Ifoods
}
function Card({card}:Icard) {
  const {name,image,category,price}=card;
  return (
    <div>
      <Image src={image.desktop} alt="image.png" width={250} height={250} className="rounded-md mb-5 w-full h-auto" priority />
      <CartMangment  card={card}/>
      <div>
        <span className="text-gray-400">{category}</span>
        <p className="font-normal text-lg">{name}</p>
        <span className="text-orange-600 text-base">${price}</span>
      </div>
    </div>
  )
}

export default Card