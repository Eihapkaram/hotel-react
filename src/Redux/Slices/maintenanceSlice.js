import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* ================= AXIOS INSTANCE ================= */
const axiosInstance = axios.create({
  baseURL: "https://realstateback-production.up.railway.app/api",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

/* ================= FETCH ================= */
export const fetchMaintenance = createAsyncThunk(
  "maintenance/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/maintenance-requests");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);

/* ================= ADD ================= */
export const addMaintenanceRequest = createAsyncThunk(
  "maintenance/add",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/maintenance-requests", data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);

/* ================= UPDATE ================= */
export const updateMaintenanceRequest = createAsyncThunk(
  "maintenance/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(`/maintenance-requests/${id}`, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);

/* ================= DELETE ================= */
export const deleteMaintenanceRequest = createAsyncThunk(
  "maintenance/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/maintenance-requests/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);

/* ================= SLICE ================= */
const maintenanceSlice = createSlice({
  name: "maintenance",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      /* FETCH */
      .addCase(fetchMaintenance.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMaintenance.fulfilled, (state, action) => {
        state.loading = false;
        if (Array.isArray(action.payload)) state.list = action.payload;
        else if (Array.isArray(action.payload.data))
          state.list = action.payload.data;
        else state.list = [];
      })
      .addCase(fetchMaintenance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ADD */
      .addCase(addMaintenanceRequest.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      })
      .addCase(addMaintenanceRequest.rejected, (state, action) => {
        state.error = action.payload;
      })

      /* UPDATE */
      .addCase(updateMaintenanceRequest.fulfilled, (state, action) => {
        const i = state.list.findIndex((r) => r.id === action.payload.id);
        if (i !== -1) state.list[i] = action.payload;
      })
      .addCase(updateMaintenanceRequest.rejected, (state, action) => {
        state.error = action.payload;
      })

      /* DELETE */
      .addCase(deleteMaintenanceRequest.fulfilled, (state, action) => {
        state.list = state.list.filter((r) => r.id !== action.payload);
      })
      .addCase(deleteMaintenanceRequest.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default maintenanceSlice.reducer;
