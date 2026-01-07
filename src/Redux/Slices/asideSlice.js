import { createSlice } from "@reduxjs/toolkit";

const asideSlice = createSlice({
  name: "aside",
  initialState: {
    open: false,
  },
  reducers: {
    toggleAside: (state) => {
      state.open = !state.open;
    },
    openAside: (state) => {
      state.open = true;
    },
    closeAside: (state) => {
      state.open = false;
    },
  },
});

export const { toggleAside, openAside, closeAside } = asideSlice.actions;
export default asideSlice.reducer;
