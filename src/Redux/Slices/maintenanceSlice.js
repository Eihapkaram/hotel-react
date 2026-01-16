import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMaintenance = createAsyncThunk(
  "maintenance/fetch",
  async () => {
    const res = await axios.get(
      "http://127.0.0.1:8000/api/maintenance-requests"
    );
    return res.data;
  }
);

const maintenanceSlice = createSlice({
  name: "maintenance",
  initialState: {
    list: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMaintenance.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMaintenance.fulfilled, (state, action) => {
        state.loading = false;

        // ✅ نفس الحل الذهبي
        if (Array.isArray(action.payload)) {
          state.list = action.payload;
        } else if (Array.isArray(action.payload.data)) {
          state.list = action.payload.data;
        } else {
          state.list = [];
        }
      });
  },
});

export default maintenanceSlice.reducer;
