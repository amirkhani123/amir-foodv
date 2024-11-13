import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./fetures/cartSlice"
const store=configureStore({
    reducer:{
        cart:cartSlice
    }
})
export default store;
export type RootState = ReturnType<typeof store.getState>