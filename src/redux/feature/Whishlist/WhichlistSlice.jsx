import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  homes: [],
};

const wishlistSlice = createSlice({
  name: "whishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const existing = state.homes.find((h) => h._id === action.payload._id);

      if (existing) {
        console.log("home already added in wishlist");
      } else {
        state.homes.push(action.payload);
      }
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
