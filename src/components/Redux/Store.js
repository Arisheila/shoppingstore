// store is the centralization of the app state 

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";


const store = configureStore({
    reducer: {
        products: productReducer,
    },

});

export default store;