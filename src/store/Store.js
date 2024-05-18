import { configureStore } from "@reduxjs/toolkit";
import { carritoReducer } from "../slicers/carrito";

const Store = configureStore({
    reducer:{
        carrito: carritoReducer
    }
});

export default Store;
