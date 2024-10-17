import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./createSlice";
import productReducer from "./productSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});
