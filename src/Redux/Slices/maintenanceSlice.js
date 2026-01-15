import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchMaintenance = createAsyncThunk(
  "maintenance/fetch",
  async () => (await axios.get("/maintenance-requests")).data
);

const slice = createSlice({
  name: "maintenance",
  initialState: { list: [] },
  extraReducers: (b) => {
    b.addCase(fetchMaintenance.fulfilled, (s, a) => {
      s.list = a.payload;
    });
  },
});

export default slice.reducer;
