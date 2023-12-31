import { configureStore } from "@reduxjs/toolkit";
import heartSlice from "./wishlist";
import cart from "./cart";
import proReload from "./proReload";

export const store = configureStore({
  reducer: {
    heart: heartSlice,
    cart,
    proReload,
  },
});
