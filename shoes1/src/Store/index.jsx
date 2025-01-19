import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "./Cart"

export const store = configureStore({
    reducer:{
        cart: Cartreducer,
    }
})