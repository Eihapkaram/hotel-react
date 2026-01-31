import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* ================= AXIOS INSTANCE ================= */
export const axiosInstance = axios.create({
  baseURL: "https://realstateback-production.up.railway.app/api",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

/* ================= PROJECTS ================= */
/* ================= PROJECT INTERESTS ================= */
/* ================= MAINTENANCE REQUEST ================= */

export const addMaintenanceRequest = createAsyncThunk(
  "projects/addMaintenanceRequest",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/maintenance-requests", {
        full_name: data.full_name,
        phone: data.phone,
        email: data.email,
        project_id: data.project_id,
        unit: data.unit,
        request_type: data.request_type,
        unit_received: data.unit_received ?? false,
        message: data.message,
      });

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

export const fetchMaintenanceRequests = createAsyncThunk(
  "projects/fetchMaintenanceRequests",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/maintenance-requests");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);
export const fetchMaintenanceRequest = createAsyncThunk(
  "projects/fetchMaintenanceRequest",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/maintenance-requests/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

export const fetchGeneralInterests = createAsyncThunk(
  "projects/fetchGeneralInterests",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/general-interests");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

/* FETCH ALL */
export const fetchProjectInterests = createAsyncThunk(
  "projects/fetchInterests",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/project-interests");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);
/* ================= GENERAL INTERESTS ================= */

/* ADD GENERAL INTEREST */
export const addGeneralInterest = createAsyncThunk(
  "projects/addGeneralInterest",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/general-interests", {
        name: data.name,
        phone: data.phone,
        max_price: data.price,
        property_type: data.type,
        finance_type: data.finance,
        district: data.district,
        beds: data.beds,
        baths: data.baths,
      });
      return res.data.data ?? res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

/* ADD */
export const addProjectInterest = createAsyncThunk(
  "projects/addInterest",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/project-interests", data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

/* SHOW ONE */
export const fetchProjectInterest = createAsyncThunk(
  "projects/fetchInterest",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/project-interests/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

/* DELETE */
export const deleteProjectInterest = createAsyncThunk(
  "projects/deleteInterest",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/project-interests/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

/* FETCH */
/* ================= FETCH UNITS BY TYPE ================= */

export const fetchUnitsByType = createAsyncThunk(
  "projects/fetchUnitsByType",
  async (unitTypeId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/unit-types/${unitTypeId}/units`);
      return {
        unitTypeId,
        units: res.data,
      };
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

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
export const fetchProject = createAsyncThunk(
  "projects/{project}",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/project/${id}`);
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
  async ({ project_id, feature, image }, { rejectWithValue }) => {
    const formData = new FormData();
    formData.append("project_id", project_id);
    formData.append("feature", feature);

    if (image) formData.append("image", image);

    const res = await axiosInstance.post("/project-features", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return res.data;
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
/* ================= UNIT TYPES ================= */

export const addUnitType = createAsyncThunk(
  "projects/addUnitType",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/unit-types", data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

export const deleteUnitType = createAsyncThunk(
  "projects/deleteUnitType",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/unit-types/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

/* ================= UNITS ================= */

export const addUnit = createAsyncThunk(
  "projects/addUnit",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/units", data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

export const deleteUnit = createAsyncThunk(
  "projects/deleteUnit",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/units/${id}`);
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
    baseURL: "http://127.0.0.1:8000/api",
    pro: "",
    loading: false,
    interests: [], // ✅ كل الاهتمامات
    interest: null, // ✅ اهتمام واحد
    generalInterests: [], // ✅ الاهتمامات العامة
    generalInterest: null,

    maintenanceRequests: [], // ✅
    maintenanceRequest: null, // ✅
    units: "",
    unitsLoading: {}, // 🔥 مهم
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      /* ================= PROJECT INTERESTS ================= */

      .addCase(fetchProjectInterests.pending, (s) => {
        s.loading = true;
      })
      .addCase(fetchProjectInterests.fulfilled, (s, a) => {
        s.loading = false;
        s.interests = a.payload;
      })
      .addCase(fetchProjectInterests.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      })

      .addCase(addProjectInterest.fulfilled, (s, a) => {
        s.interests.unshift(a.payload);

        // لو الاهتمام بالمشروع المفتوح
        if (s.pro?.id === a.payload.project_id) {
          s.pro.interests = [...(s.pro.interests || []), a.payload];
        }
      })

      .addCase(fetchProjectInterest.fulfilled, (s, a) => {
        s.interest = a.payload;
      })

      .addCase(deleteProjectInterest.fulfilled, (s, a) => {
        s.interests = s.interests.filter((i) => i.id !== a.payload);

        if (s.pro?.interests) {
          s.pro.interests = s.pro.interests.filter((i) => i.id !== a.payload);
        }
      })

      /* FETCH */
      .addCase(fetchProject.fulfilled, (s, a) => {
        s.pro = a.payload;
      })
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
      })
      /* ================= UNIT TYPES ================= */

      .addCase(addUnitType.fulfilled, (s, a) => {
        const project = s.list.find((p) => p.id === a.payload.project_id);
        if (project) {
          project.unit_types = [
            ...(project.unit_types || []),
            {
              ...a.payload,
              units: [],
            },
          ];
        }
      })

      .addCase(deleteUnitType.fulfilled, (s, a) => {
        s.list.forEach((p) => {
          if (p.unit_types) {
            p.unit_types = p.unit_types.filter((t) => t.id !== a.payload);
          }
        });
      })

      /* ================= UNITS ================= */

      .addCase(addUnit.fulfilled, (s, a) => {
        s.list.forEach((project) => {
          project.unit_types?.forEach((type) => {
            if (type.id === a.payload.unit_type_id) {
              type.units = [...(type.units || []), a.payload];
              project.units_count = (project.units_count || 0) + 1;
            }
          });
        });
      })

      /* ================= FETCH UNITS ================= */

      .addCase(fetchUnitsByType.pending, (s, a) => {
        s.unitsLoading[a.meta.arg] = true;
      })

      .addCase(fetchUnitsByType.fulfilled, (s, a) => {
        const { unitTypeId, units } = a.payload;
        s.units = a.payload;

        s.unitsLoading[unitTypeId] = false;

        if (s.pro?.unit_types) {
          const type = s.pro.unit_types.find((t) => t.id === unitTypeId);
          if (type) {
            type.units = units;
          }
        }
      })

      .addCase(fetchUnitsByType.rejected, (s, a) => {
        s.unitsLoading[a.meta.arg] = false;
      })

      .addCase(deleteUnit.fulfilled, (s, a) => {
        s.list.forEach((project) => {
          project.unit_types?.forEach((type) => {
            if (type.units) {
              const before = type.units.length;
              type.units = type.units.filter((u) => u.id !== a.payload);
              if (before !== type.units.length) {
                project.units_count = Math.max(
                  (project.units_count || 1) - 1,
                  0,
                );
              }
            }
          });
        });
      })
      /* ================= GENERAL INTERESTS ================= */

      .addCase(addGeneralInterest.pending, (s) => {
        s.loading = true;
      })

      .addCase(addGeneralInterest.fulfilled, (s, a) => {
        s.loading = false;
        s.generalInterests.unshift(a.payload);
      })

      .addCase(addGeneralInterest.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      })
      .addCase(fetchGeneralInterests.pending, (s) => {
        s.loading = true;
      })
      .addCase(fetchGeneralInterests.fulfilled, (s, a) => {
        s.loading = false;
        s.generalInterests = Array.isArray(a.payload)
          ? a.payload
          : (a.payload?.data ?? []);
      })
      .addCase(fetchGeneralInterests.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      })
      .addCase(fetchMaintenanceRequests.pending, (s) => {
        s.loading = true;
      })
      .addCase(fetchMaintenanceRequests.fulfilled, (s, a) => {
        s.loading = false;
        s.maintenanceRequests = Array.isArray(a.payload)
          ? a.payload
          : (a.payload?.data ?? []);
      })
      .addCase(fetchMaintenanceRequests.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      })
      .addCase(fetchMaintenanceRequest.fulfilled, (s, a) => {
        s.maintenanceRequest = a.payload;
      })
      /* ================= ADD MAINTENANCE REQUEST ================= */

      .addCase(addMaintenanceRequest.pending, (s) => {
        s.loading = true;
      })

      .addCase(addMaintenanceRequest.fulfilled, (s, a) => {
        s.loading = false;
        s.maintenanceRequests.unshift(a.payload);
      })

      .addCase(addMaintenanceRequest.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      });
  },
});

export default projectsSlice.reducer;
