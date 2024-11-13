"use client"
import { getQentity } from '@/helper/cart';
import { Ifoods } from '@/helper/interfaces';
import { addToCart, decrement, increment, removeItem } from '@/redux/fetures/cartSlice';
import { RootState } from '@/redux/store';

import { CiCirclePlus, CiCircleRemove } from 'react-icons/ci';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { MdAddShoppingCart } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

interface Icard {
  card:Ifoods
}
function CartMangment({card}:Icard) {
    const state=useSelector((state:RootState)=>state.cart);
    const dispatch=useDispatch();
    const exsited=state.selectedProduct.find(item=>item.id === card.id);
    const quentity:number=getQentity(state,card);
  return (
    <div className="relative">
      {
        ! exsited ?  (<button className="flex p-2  w-[140px] gap-2 border rounded-2xl border-gray-400 absolute bottom-3 left-10 bg-white my-hover hover:border-orange-600 hover:text-orange-600 max-md:left-12" onClick={()=> dispatch(addToCart(card))}>
        <MdAddShoppingCart size={20} className="text-orange-600" />
        Add to cart
        </button>): (<div className="flex p-2 w-[140px] gap-2 border rounded-2xl border-gray-400 absolute bottom-3 left-10 bg-white items-center justify-between max-md:left-12">
       {
        quentity === 1 ? ( <button onClick={()=>dispatch(removeItem(card))}>
        <CiCircleRemove  size={25} className="text-red-500" />
    </button>) :( <button onClick={()=>dispatch(decrement(card))}>
              <IoMdRemoveCircleOutline size={25} className="text-red-500" />
          </button>)
       }
          <span>{quentity}</span>
          <button onClick={()=>dispatch(increment(card))}>
          <CiCirclePlus size={25} className="text-green-500" />
         </button>
        </div>)
      }
  </div>
  )
}

export default CartMangment