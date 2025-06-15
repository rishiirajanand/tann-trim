import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../src/slice/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
