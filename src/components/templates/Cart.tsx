"use client"
import { RootState } from "@/redux/store"
import Image from "next/image";
import { useSelector } from "react-redux"
import CartItems from "../modules/CartItems";
import {  useState } from "react";
import ModalCart from "../modules/ModalCart";

function Cart() {
    const state=useSelector((state:RootState)=>state.cart);
    const [isShow,setIsShow]=useState(false);
  return (
    <div className="w-[450px] min-h-[400px] bg-white rounded-lg p-3 max-md:w-full ">
      <p className="text-orange-700 text-xl font-medium my-3">Your Cart ({state.quntity})</p>
      {!state.selectedProduct.length ?(
        <div className="flex items-center justify-center flex-col gap-8">
          <Image src="/images/illustration-empty-cart.svg" alt="image.png" width={350} height={350} priority className="w-auto h-auto"/>
           <p className="text-lg font-normal text-gray-700">you add items will appear here</p>
        </div>
      ) : (
        <div>
          {state.selectedProduct.map(item=> <CartItems data={item} key={item.id}/>)}
          <span className="w-full h-px bg-gray-300 mt-3 inline-block"></span>
          <div className="flex items-center justify-between">
            <p className="text-lg font-normal">Order Total </p>
            <p className="text-lg font-normal">${state.totalPrice}</p>
          </div>
          <button className="w-full h-14 mt-2 text-lg font-normal bg-orange-600 rounded-lg text-white my-hover hover:bg-white hover:text-orange-600 hover:border-orange-600 border " onClick={()=>setIsShow(!isShow)}>Confirm Order</button> 
          {isShow && <ModalCart setIsShow={setIsShow}/>}َ
        </div>
      )}
    </div>
  )
}

export default Cart