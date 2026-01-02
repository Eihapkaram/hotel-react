import { createSlice } from "@reduxjs/toolkit";
const Cart = createSlice({
  initialState: JSON.parse(localStorage.getItem("Cart")) || [],
  name: "Cart",
  reducers: {
    addCart: (state, action) => {
      const pro = state.find((el) => el.id === action.payload.id);

      if (pro) {
        pro.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("Cart", JSON.stringify(state));
    },
    removone: (state, action) => {
      const con = state.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("Cart", JSON.stringify(con));
      return con;
    },
    emptyCart: (state, action) => {
      state = [];
      localStorage.removeItem("Cart");
    },
    Update: (state, action) => {
      return JSON.parse(localStorage.getItem("Cart")) || [];
    },
  },
  //extraReducers: (builder) {}
});
export default Cart.reducer;
export const { addCart, removone, emptyCart, Update } = Cart.actions;
