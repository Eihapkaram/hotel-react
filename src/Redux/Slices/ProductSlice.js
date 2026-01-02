import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getProduct = createAsyncThunk("products/getProduct", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});
const Products = createSlice({
  initialState: {
    items: [],
  },
  name: "products",
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    add: (state, action) => {
      state.items.push({ title: "ttt" });
      localStorage.setItem("todo2", JSON.stringify(state.items));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.items = [...state.items, ...action.payload];
    });
  },
});
export const { addProduct, add } = Products.actions;
export default Products.reducer;
