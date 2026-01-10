import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

/* =========================
   Login
========================= */
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API_URL}/login`, formData);
      console.log("done");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

/* =========================
   Get Auth User
========================= */
export const getAuthUser = createAsyncThunk(
  "auth/getAuthUser",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.user;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

/* =========================
   Logout
========================= */
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${API_URL}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return true;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

/* =========================
   Slice
========================= */
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      /* LOGIN */
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;

        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "فشل تسجيل الدخول";
      })

      /* GET USER */
      .addCase(getAuthUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })

      /* LOGOUT */
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      });
  },
});

export default authSlice.reducer;
