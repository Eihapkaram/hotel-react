import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* ================= AXIOS INSTANCE ================= */
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

/* ================= PROJECTS ================= */

/* FETCH */
export const fetchProjects = createAsyncThunk(
  "projects/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/projects");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

/* ADD */
export const addProject = createAsyncThunk(
  "projects/add",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/projects", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

/* UPDATE */
export const updateProject = createAsyncThunk(
  "projects/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(
        `/projects/${id}?_method=PUT`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

/* DELETE */
export const deleteProject = createAsyncThunk(
  "projects/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/projects/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

/* ================= PROJECT IMAGES ================= */

export const addProjectImages = createAsyncThunk(
  "projects/addImages",
  async ({ project_id, images }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("project_id", project_id);
      images.forEach((img) => formData.append("images[]", img));

      const res = await axiosInstance.post("/project-images", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return { project_id, images: res.data };
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

export const deleteProjectImage = createAsyncThunk(
  "projects/deleteImage",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/project-images/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

/* ================= PROJECT LOCATION ================= */

export const saveProjectLocation = createAsyncThunk(
  "projects/saveLocation",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/project-locations", data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

export const deleteProjectLocation = createAsyncThunk(
  "projects/deleteLocation",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/project-locations/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

/* ================= PROJECT WARRANTY ================= */

export const addProjectWarranty = createAsyncThunk(
  "projects/addWarranty",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/project-warranties", data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

export const deleteProjectWarranty = createAsyncThunk(
  "projects/deleteWarranty",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/project-warranties/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

/* ================= PROJECT FEATURES ================= */

export const addProjectFeature = createAsyncThunk(
  "projects/addFeature",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/project-features", data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

export const updateProjectFeature = createAsyncThunk(
  "projects/updateFeature",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(`/project-features/${id}`, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

export const deleteProjectFeature = createAsyncThunk(
  "projects/deleteFeature",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/project-features/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

/* ================= SLICE ================= */

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      /* FETCH */
      .addCase(fetchProjects.pending, (s) => {
        s.loading = true;
      })
      .addCase(fetchProjects.fulfilled, (s, a) => {
        s.loading = false;
        s.list = Array.isArray(a.payload) ? a.payload : (a.payload?.data ?? []);
      })
      .addCase(fetchProjects.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      })

      /* PROJECT */
      .addCase(addProject.fulfilled, (s, a) => {
        s.list.unshift(a.payload);
      })
      .addCase(updateProject.fulfilled, (s, a) => {
        const i = s.list.findIndex((p) => p.id === a.payload.id);
        if (i !== -1) s.list[i] = a.payload;
      })
      .addCase(deleteProject.fulfilled, (s, a) => {
        s.list = s.list.filter((p) => p.id !== a.payload);
      })

      /* IMAGES */
      .addCase(addProjectImages.fulfilled, (s, a) => {
        const project = s.list.find((p) => p.id === a.payload.project_id);
        if (project) {
          project.images = [...(project.images || []), ...a.payload.images];
        }
      })
      .addCase(deleteProjectImage.fulfilled, (s, a) => {
        s.list.forEach((p) => {
          if (p.images) {
            p.images = p.images.filter((img) => img.id !== a.payload);
          }
        });
      })

      /* LOCATION */
      .addCase(saveProjectLocation.fulfilled, (s, a) => {
        const project = s.list.find((p) => p.id === a.payload.project_id);
        if (project) project.locationDetail = a.payload;
      })
      .addCase(deleteProjectLocation.fulfilled, (s, a) => {
        s.list.forEach((p) => {
          if (p.locationDetail?.id === a.payload) {
            p.locationDetail = null;
          }
        });
      })

      /* WARRANTY */
      .addCase(addProjectWarranty.fulfilled, (s, a) => {
        const project = s.list.find((p) => p.id === a.payload.project_id);
        if (project) {
          project.warranties = [...(project.warranties || []), a.payload];
        }
      })
      .addCase(deleteProjectWarranty.fulfilled, (s, a) => {
        s.list.forEach((p) => {
          if (p.warranties) {
            p.warranties = p.warranties.filter((w) => w.id !== a.payload);
          }
        });
      })

      /* FEATURES */
      .addCase(addProjectFeature.fulfilled, (s, a) => {
        const project = s.list.find((p) => p.id === a.payload.project_id);
        if (project) {
          project.features = [...(project.features || []), a.payload];
        }
      })
      .addCase(updateProjectFeature.fulfilled, (s, a) => {
        s.list.forEach((p) => {
          if (p.features) {
            const i = p.features.findIndex((f) => f.id === a.payload.id);
            if (i !== -1) p.features[i] = a.payload;
          }
        });
      })
      .addCase(deleteProjectFeature.fulfilled, (s, a) => {
        s.list.forEach((p) => {
          if (p.features) {
            p.features = p.features.filter((f) => f.id !== a.payload);
          }
        });
      });
  },
});

export default projectsSlice.reducer;
