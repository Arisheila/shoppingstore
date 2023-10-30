import { createSlice } from "@reduxjs/toolkit";

const initalState ={
    items:[],
    status:null,
    
}

const productSlice = createSlice({
    name: "products",
    initalState,

    reducers:{
        sampleReducer:(state, action) => {
                state.items = action.payload
        }
    },

})

export default productSlice.reducer 