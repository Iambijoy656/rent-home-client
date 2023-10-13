import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./feature/Whishlist/WhichlistSlice";

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});

export default store;
