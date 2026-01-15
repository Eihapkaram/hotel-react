import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProjects = createAsyncThunk(
  "projects/fetch",
  async () => (await axios.get("/projects")).data
);

const slice = createSlice({
  name: "projects",
  initialState: { list: [] },
  extraReducers: (b) => {
    b.addCase(fetchProjects.fulfilled, (s, a) => {
      s.list = a.payload;
    });
  },
});

export default slice.reducer;
