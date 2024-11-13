"use client"
import { checkOut } from "@/redux/fetures/cartSlice";
import { RootState } from "@/redux/store"
import Image from "next/image";
import toast from "react-hot-toast";
import { GiConfirmed } from "react-icons/gi"
import { useDispatch, useSelector } from "react-redux"
interface Iprops{
    setIsShow:React.Dispatch<React.SetStateAction<boolean>>
}
function ModalCart({setIsShow}:Iprops) {
    const state=useSelector((state:RootState)=> state.cart);
    const dispatch=useDispatch();
    const checkOutFa=()=>{
        dispatch(checkOut());
        setIsShow(false);
        toast.success("Thank you ❤️ ");
    };
    if(document.body.offsetWidth >= 769){
        return (
            <div  className="w-[100vw]  left-0 top-0 h-[100vh]  fixed  flex items-center justify-center my-animation" >
                <div className="bg-white w-[450px] min-h-[400px] p-4 rounded-2xl shadow-2xl">
                <GiConfirmed size={35} color="#06b6d4"/>
                <h4 className="text-lg mt-3 font-normal">Order Confirmed</h4>
                <span className="text-gray-600 text-base font-light" >we hope you enjoy your food 😋</span>
                <div className="bg-orange-100 p-2 rounded-lg">
                 {state.selectedProduct.map(item=>(<div key={item.id} >
                              <div className="flex justify-between">
                                <div className="flex p-1">
                                    <Image alt="icon.png" width={40} height={40} src={`${item.image.desktop}`} className="w-auto h-auth rounded-md mr-2"/>
                                    <div>
                                        <p className="font-normal">{item.name}</p>
                                        <div>
                                            <span className="text-orange-600 mr-2">{item.quentity} x</span>
                                            <span className="text-gray-600">${item.price}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-base font-light">
                                    ${item.price * item.quentity}
                                </p>
                              </div>
                        <span className="inline-block w-full h-[1px] bg-gray-400"></span>
                 </div>))}
                 <div className="flex  justify-between items-center">
                 <p className="font-light ">Order Total </p>
                 <span className="font-medium text-lg ">${state.totalPrice}</span>
                 </div>
                </div>
                 <button onClick={checkOutFa} className="w-full h-[65px] my-2 rounded-2xl  bg-orange-700 text-white my-hover hover:bg-white hover:text-orange-700 hover:border-orange-700 border">Start New Order</button>
                </div>
            </div>
          )
    }else
    { 
        return(
        <div className=" w-[100vw]  left-0 bottom-0 h-[75vh] bg-white  fixed   border-t rounded-2xl my-animation p-2">
        <GiConfirmed size={55} color="#06b6d4"/>
                <h4 className="text-xl mt-5 font-normal">Order Confirmed</h4>
                <span className="text-gray-600 text-base font-light" >we hope you enjoy your food 😋</span>
                <div className="bg-orange-100 p-2 rounded-lg my-5">
                 {state.selectedProduct.map(item=>(<div key={item.id} >
                              <div className="flex justify-between">
                                <div className="flex p-1">
                                    <Image alt="icon.png" width={40} height={40} src={`${item.image.desktop}`} className="w-auto h-auth rounded-md mr-2"/>
                                    <div>
                                        <p className="font-normal">{item.name}</p>
                                        <div>
                                            <span className="text-orange-600 mr-2">{item.quentity} x</span>
                                            <span className="text-gray-600">${item.price}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-base font-light">
                                    ${item.price * item.quentity}
                                </p>
                              </div>
                        <span className="inline-block w-full h-[1px] bg-gray-400"></span>
                 </div>))}
                 <div className="flex  justify-between items-center">
                 <p className="font-light ">Order Total </p>
                 <span className="font-medium text-lg ">${state.totalPrice}</span>
                 </div>
                </div>
                 <button onClick={checkOutFa} className="w-full h-[65px] my-2 rounded-2xl  bg-orange-700 text-white my-hover hover:bg-white hover:text-orange-700 hover:border-orange-700 border">Start New Order</button>

        </div>)
    }
 
}

export default ModalCart