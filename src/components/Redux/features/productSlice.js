import { createSlice } from "@reduxjs/toolkit";

const initalState ={
    items:[],
    status:null,
    
}

const productSlice = createSlice({
    name: "products",
    initalState,
    reducers:{},

})

export default productSlice.reducer 