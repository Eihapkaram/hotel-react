import { configureStore } from "@reduxjs/toolkit";
import Productslice from "./Slices/ProductSlice";
import Cartbank from "./Slices/CartSlice";
import asideReducer from "./Slices/asideSlice";
import authReducer from "./Slices/authSlice";
export const Store = configureStore({
  reducer: {
    pro: Productslice,
    Cart: Cartbank,
    aside: asideReducer,
    auth: authReducer,
  },
});
