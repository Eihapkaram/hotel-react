import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://127.0.0.1:8000/api/projects";

/* ================= FETCH ================= */
export const fetchProjects = createAsyncThunk(
  "projects/fetch",
  async () => (await axios.get(API)).data
);

/* ================= ADD ================= */
export const addProject = createAsyncThunk(
  "projects/add",
  async (formData) =>
    (
      await axios.post(API, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
    ).data
);

/* ================= UPDATE ================= */
export const updateProject = createAsyncThunk(
  "projects/update",
  async ({ id, data }) =>
    (await axios.post(`${API}/${id}?_method=PUT`, data)).data
);

/* ================= DELETE ================= */
export const deleteProject = createAsyncThunk("projects/delete", async (id) => {
  await axios.delete(`${API}/${id}`);
  return id;
});

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    list: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      /* FETCH */
      .addCase(fetchProjects.fulfilled, (s, a) => {
        s.list = Array.isArray(a.payload) ? a.payload : a.payload.data ?? [];
      })

      /* ADD */
      .addCase(addProject.fulfilled, (s, a) => {
        s.list.unshift(a.payload);
      })

      /* UPDATE */
      .addCase(updateProject.fulfilled, (s, a) => {
        const index = s.list.findIndex((p) => p.id === a.payload.id);
        if (index !== -1) s.list[index] = a.payload;
      })

      /* DELETE */
      .addCase(deleteProject.fulfilled, (s, a) => {
        s.list = s.list.filter((p) => p.id !== a.payload);
      });
  },
});

export default projectsSlice.reducer;
