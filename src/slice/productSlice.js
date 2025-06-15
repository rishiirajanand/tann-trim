import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedProduct: [],
  cartProduct: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartProduct.push(action.payload);
    },
    setSaveProduct: (state, action) => {
      state.savedProduct.push(action.payload);
    },
    setRemoveFromCart: (state, action) => {
      const updatedProduct = state.cartProduct.filter(
        (p) => p.id !== action.payload
      );
      state.cartProduct = updatedProduct;
    },
  },
});

export const { addToCart, setSaveProduct, setRemoveFromCart } =
  productSlice.actions;
export default productSlice.reducer;
