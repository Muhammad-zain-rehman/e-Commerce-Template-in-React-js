import {createSlice} from "@reduxjs/toolkit";

//setting the states at here 
const initialState = {
        loading: true,
        hasError: false,
        products: [],
}

export const productSlice = createSlice({
        name: "products",
        initialState,
        reducers:{
                get_product:(state)=>{
                        state.loading=true;
                        return state;
                },
                get_product_success:(state, action)=>{
                        state.loading=false;
                        state.hasError=false;
                        state.products=action.payload;
                        return state;
                },
                get_product_failure: (state, action)=>{
                        state.loading=false;
                        state.hasError=action.payload;
                        return state;
                },
                reset_product: (state)=>{
                        state=initialState;
                        return state
                },
        },
})

export const {get_product, get_product_success, get_product_failure, reset_product}= productSlice.actions;
export default productSlice.reducer;