import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homes: [],
};

const wishlistSlice = createSlice({
  name: "whishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.homes.push(action.payload);
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
