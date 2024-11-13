
import { Ifoods, IinitialState } from "./interfaces";

const totalPriceFa=(selectedProduct:Ifoods[])=>{
    return selectedProduct.reduce((total,product)=>total + product.price * product.quentity ,0).toFixed(2);
}
const sumQuentity=(selectedProduct:Ifoods[])=>{
    return selectedProduct.reduce((total,product)=>total + product.quentity,0)
}
const getQentity=(state:IinitialState,card:Ifoods):number=>{
   const index=state.selectedProduct.findIndex(item=>item.id === card.id);
   if(index >=0){
       const  sumQuentity=state.selectedProduct[index].quentity as number;
       return sumQuentity;
   }else
   {
    return 0;
   }
}
export {totalPriceFa,sumQuentity,getQentity};