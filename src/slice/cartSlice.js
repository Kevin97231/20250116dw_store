import { createSlice } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
    },
  },
});

export const { addProduct } = counterSlice.actions;
export default cartSlice.reducer;
