import { sumQuentity, totalPriceFa } from "@/helper/cart";
import { IinitialState } from "@/helper/interfaces";
import { createSlice } from "@reduxjs/toolkit";


const initialState:IinitialState={
    selectedProduct:[],
    totalPrice:0,
    quntity:0,
}
const cartSlice=createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
       addToCart:(state,actions)=>{
             const existed=state.selectedProduct.find(item=>item.id === actions.payload.id);
             if(existed) return;
             state.selectedProduct.push({...actions.payload, quentity:1});
             state.totalPrice=Number(totalPriceFa(state.selectedProduct));
             state.quntity=sumQuentity(state.selectedProduct);
       },
       increment:(state,actions)=>{
        const index=state.selectedProduct.findIndex(item=>item.id === actions.payload.id);
        if (index !== -1 && state.selectedProduct[index].quentity !== undefined) { state.selectedProduct[index].quentity++;}
        state.totalPrice=Number(totalPriceFa(state.selectedProduct));
        state.quntity=sumQuentity(state.selectedProduct);
       },  decrement:(state,actions)=>{
        const index=state.selectedProduct.findIndex(item=>item.id === actions.payload.id);
        if (index !== -1 && state.selectedProduct[index].quentity !== undefined) { state.selectedProduct[index].quentity--;}
        state.totalPrice=Number(totalPriceFa(state.selectedProduct));
        state.quntity=sumQuentity(state.selectedProduct);
       },
       removeItem:(state,actions)=>{
        const items=state.selectedProduct.filter(item=>item.id !== actions.payload.id);
        state.selectedProduct=items;
        state.totalPrice=Number(totalPriceFa(state.selectedProduct));
        state.quntity=sumQuentity(state.selectedProduct);
       },
       checkOut:(state)=>{
        state.selectedProduct=[];
        state.quntity=0;
        state.totalPrice=0;
       }
    }
})
export default cartSlice.reducer;
export const {increment,decrement,removeItem,addToCart,checkOut}=cartSlice.actions;
