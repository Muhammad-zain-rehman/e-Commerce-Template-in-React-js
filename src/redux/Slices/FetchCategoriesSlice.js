import {createSlice} from "@reduxjs/toolkit";

//setting the states at here 
const initialState = {
        loading: true,
        hasError: false,
        categories: [],
}

export const categorySlice = createSlice({
        name: "categories",
        initialState,
        reducers:{
                get_categories:(state)=>{
                        state.loading=true;
                        return state;
                },
                get_categories_succes:(state, action)=>{
                        state.loading=false;
                        state.hasError=false;
                        state.categories=action.payload;
                        return state;
                },
                get_category_failure: (state, action)=>{
                        state.loading=false;
                        state.hasError=action.payload;
                        return state;
                },
                reset_category: (state)=>{
                        state=initialState;
                        return state
                },
        },
})

export const {get_categories, get_categories_succes, get_category_failure, reset_category}= categorySlice.actions;
export default categorySlice.reducer;