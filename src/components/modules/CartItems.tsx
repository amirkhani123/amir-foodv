import { Ifoods } from '@/helper/interfaces'
import { removeItem } from '@/redux/fetures/cartSlice'
import React from 'react'
import { CiCircleRemove } from 'react-icons/ci'
import { useDispatch } from 'react-redux'

interface Iprops{
    data:Ifoods
}

function CartItems({data}:Iprops) {
  const dispatch=useDispatch();
  return (
    <div className='bg-white rounded-lg p-1 flex items-center justify-between w-full shadow-xl my-2'>
        <div>
            <p className='text-base font-normal'>{data.name}</p>
            <div className='flex items-center gap-5'>
                <span className='font-medium text-orange-700'>{data.quentity}x</span>
                <p className='font-normal text-gray-700'>${data.price}</p>
                <p className='text-green-700'>${data.price * data.quentity}</p>
            </div>
        </div>
        <button onClick={()=>dispatch(removeItem(data))}><CiCircleRemove size={25} color='red'/></button>
    </div>
  )
}

export default CartItems