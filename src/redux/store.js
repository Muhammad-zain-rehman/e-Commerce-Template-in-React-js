import { configureStore } from "@reduxjs/toolkit";
import FetchProductSlice from "./Slices/FetchProductSlice";
import FetchCategoriesSlice from "./Slices/FetchCategoriesSlice";


export default configureStore({
  reducer: {
    rack_fecth_products: FetchProductSlice,
    rack_fecth_categories: FetchCategoriesSlice,
  },
});