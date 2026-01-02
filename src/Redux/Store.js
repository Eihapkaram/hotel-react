import { configureStore } from "@reduxjs/toolkit";
import Productslice from "./Slices/ProductSlice";
import Cartbank from "./Slices/CartSlice";
export const Store = configureStore({
  reducer: {
    pro: Productslice,
    Cart: Cartbank,
  },
});
