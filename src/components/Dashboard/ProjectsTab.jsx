import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjects,
  addProject,
  updateProject,
  deleteProject,
  addProjectImages,
  deleteProjectImage,
  addProjectFeature,
  deleteProjectFeature,
  saveProjectLocation,
  deleteProjectLocation,
  addProjectWarranty,
  // 👇 الجديد
  addUnitType,
  addUnit,
  deleteProjectWarranty,
} from "/src/Redux/Slices/projectsSlice";

export default function ProjectsTab() {
  const dispatch = useDispatch();
  const { list: projects, loading } = useSelector((s) => s.projects);

  const closeProjectModal = useRef(null);
  const closeImagesModal = useRef(null);
  const closeLocationModal = useRef(null);
  const closeWarrantyModal = useRef(null);
  const closeFeatureModal = useRef(null);

  /* ================= EMPTY FORMS ================= */
  const emptyForm = {
    id: null,
    title: "",
    location: "",
    status: "available",
    main_image: null,
    description: "",
    overview_bedrooms: "",
    overview_bathrooms: "",
    overview_kitchens: "",
    area: "",
    date: "",
  };

  const emptyImagesForm = { project_id: null, images: [] };
  const emptyLocationForm = {
    project_id: null,
    city: "",
    district: "",
    address: "",
    map_link: "",
  };
  const emptyWarrantyForm = {
    project_id: null,
    warranty_name: "",
    duration: "",
  };
  const emptyFeatureForm = { project_id: null, name: "", image: null };
  const emptyUnitTypeForm = {
    project_id: null,
    name: "",
  };

  const emptyUnitForm = {
    unit_type_id: null,
    bedrooms: "",
    bathrooms: "", // 👈 جديد
    living_rooms: "",
    title: "",
    area: "",
    price: "",
    status: "available",
    description: "",
    floor: "",
  };

  const [unitTypeForm, setUnitTypeForm] = useState(emptyUnitTypeForm);
  const [unitForm, setUnitForm] = useState(emptyUnitForm);

  const [form, setForm] = useState(emptyForm);
  const [imagesForm, setImagesForm] = useState(emptyImagesForm);
  const [locationForm, setLocationForm] = useState(emptyLocationForm);
  const [warrantyForm, setWarrantyForm] = useState(emptyWarrantyForm);
  const [featureForm, setFeatureForm] = useState(emptyFeatureForm);

  useEffect(() => {
    dispatch(fetchProjects());
    console.log(projects);
  }, [dispatch]);

  /* ================= PROJECT ================= */
  const submitProject = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value !== null && key !== "id") data.append(key, value);
    });
    form.id
      ? dispatch(updateProject({ id: form.id, data }))
      : dispatch(addProject(data));
    setForm(emptyForm);
    closeProjectModal.current?.click();
  };

  const editProject = (p) => {
    setForm({
      id: p.id,
      title: p.title ?? "",
      location: p.location ?? "",
      status: p.status ?? "available",
      main_image: null,
      description: p.description ?? "",
      overview_bedrooms: p.overview_bedrooms ?? "",
      overview_bathrooms: p.overview_bathrooms ?? "",
      overview_kitchens: p.overview_kitchens ?? "",
      area: p.area ?? "",
      date: p.date ?? "",
    });
  };

  /* ================= IMAGES ================= */
  const openImagesModal = (project) =>
    setImagesForm({ project_id: project.id, images: [] });
  const submitImages = (e) => {
    e.preventDefault();
    if (imagesForm.images.length > 0) dispatch(addProjectImages(imagesForm));
    setImagesForm(emptyImagesForm);
    closeImagesModal.current?.click();
  };

  /* ================= LOCATION ================= */
  const openLocationModal = (project) => {
    setLocationForm({
      project_id: project.id,
      city: project.locationDetail?.city ?? "",
      district: project.locationDetail?.district ?? "",
      address: project.locationDetail?.address ?? "",
      map_link: project.locationDetail?.map_link ?? "",
    });
  };
  const submitLocation = (e) => {
    e.preventDefault();
    dispatch(saveProjectLocation(locationForm));
    setLocationForm(emptyLocationForm);
    closeLocationModal.current?.click();
  };

  /* ================= WARRANTY ================= */
  const openWarrantyModal = (project) =>
    setWarrantyForm({
      project_id: project.id,
      warranty_name: "",
      duration: "",
    });
  const submitWarranty = (e) => {
    e.preventDefault();
    dispatch(addProjectWarranty(warrantyForm));
    setWarrantyForm(emptyWarrantyForm);
    closeWarrantyModal.current?.click();
  };
  const openUnitTypeModal = (project) => {
    setUnitTypeForm({
      project_id: project.id,
      name: "",
    });
  };

  const openUnitModal = (unitType) => {
    setUnitForm({
      unit_type_id: unitType.id,
      title: "",
      bedrooms: "",
      bathrooms: "", // 👈
      living_rooms: "",
      area: "",
      price: "",
      floor: "",
      status: "available",
      description: "",
    });
  };

  const submitUnitType = (e) => {
    e.preventDefault();

    dispatch(addUnitType(unitTypeForm));

    setUnitTypeForm(emptyUnitTypeForm);
  };
  const submitUnit = (e) => {
    e.preventDefault();

    // إنشاء FormData
    const data = new FormData();
    Object.entries(unitForm).forEach(([key, value]) => {
      if (value !== null && value !== "") data.append(key, value);
    });

    dispatch(addUnit(data)); // بعت FormData بدل object

    setUnitForm(emptyUnitForm);
  };

  /* ================= FEATURES ================= */
  const openFeatureModal = (project) =>
    setFeatureForm({ project_id: project.id, name: "", image: null });

  // <-- تم تعديل هذا الجزء لإرسال الحقل "feature" بدل "name"
  const submitFeature = (e) => {
    e.preventDefault();

    dispatch(
      addProjectFeature({
        project_id: featureForm.project_id,
        feature: featureForm.name,
        image: featureForm.image,
      }),
    );

    setFeatureForm(emptyFeatureForm);
    closeFeatureModal.current?.click();
  };

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between">
        <span>Projects</span>
        <button
          className="btn btn-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#projectModal"
          onClick={() => setForm(emptyForm)}
        >
          Add Project
        </button>
      </div>

      {/* ================= TABLE ================= */}
      <table className="table mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Location</th>
            <th>Status</th>
            <th>Area</th>
            <th width="350">Actions</th>
          </tr>
        </thead>
        <tbody>
          {!loading &&
            Array.isArray(projects) &&
            projects.map((p, i) => (
              <tr key={p.id}>
                <td>{i + 1}</td>
                <td>{p.title}</td>
                <td>{p.location}</td>
                <td>
                  <span className="badge bg-secondary">{p.status}</span>
                </td>
                <td>{p.area} m²</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#projectModal"
                    onClick={() => editProject(p)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-info btn-sm me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#imagesModal"
                    onClick={() => openImagesModal(p)}
                  >
                    Images
                  </button>
                  <button
                    className="btn btn-success btn-sm me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#locationModal"
                    onClick={() => openLocationModal(p)}
                  >
                    Location
                  </button>
                  <button
                    className="btn btn-secondary btn-sm me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#warrantyModal"
                    onClick={() => openWarrantyModal(p)}
                  >
                    Warranty
                  </button>
                  <button
                    className="btn btn-dark btn-sm me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#featureModal"
                    onClick={() => openFeatureModal(p)}
                  >
                    Features
                  </button>
                  <button
                    className="btn btn-primary btn-sm me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#unitTypeModal"
                    onClick={() => openUnitTypeModal(p)}
                  >
                    Unittype
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(deleteProject(p.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          {projects
            .find((p) => p.id === unitTypeForm.project_id)
            ?.unit_types?.map((ut) => (
              <div key={ut.id} className="border p-2 mb-2">
                <strong>{ut.name}</strong>

                <button
                  className="btn btn-sm btn-success ms-2"
                  data-bs-toggle="modal"
                  data-bs-target="#unitModal"
                  onClick={() => openUnitModal(ut)}
                >
                  + Unit
                </button>

                <ul className="mt-2">
                  {ut.units?.map((u) => (
                    <li key={u.id}>
                      <strong>{u.title}</strong> – {u.bedrooms} Beds –{" "}
                      {u.bathrooms} Baths – {u.area} m² – {u.price} EGP
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </tbody>
      </table>
      <div className="modal fade" id="unitTypeModal" tabIndex="-1">
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={submitUnitType}>
            <div className="modal-header">
              <h5 className="modal-title">Add Unit Type</h5>
            </div>

            <div className="modal-body">
              <input
                className="form-control"
                placeholder="Unit type name (A, B, Ground Floor...)"
                value={unitTypeForm.name}
                onChange={(e) =>
                  setUnitTypeForm({ ...unitTypeForm, name: e.target.value })
                }
                required
              />
            </div>

            <div className="modal-footer">
              <button className="btn btn-primary">Add</button>
            </div>
          </form>
        </div>
      </div>
      <div className="modal fade" id="unitModal" tabIndex="-1">
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={submitUnit}>
            <div className="modal-header">
              <h5 className="modal-title">Add Unit</h5>
            </div>

            <div className="modal-body">
              <div className="modal-body">
                <textarea
                  className="form-control mb-2"
                  placeholder="Unit Description"
                  rows="3"
                  value={unitForm.description}
                  onChange={(e) =>
                    setUnitForm({ ...unitForm, description: e.target.value })
                  }
                />

                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Unit Title"
                  value={unitForm.title}
                  onChange={(e) =>
                    setUnitForm({ ...unitForm, title: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="floor"
                  value={unitForm.floor}
                  onChange={(e) =>
                    setUnitForm({ ...unitForm, floor: e.target.value })
                  }
                />

                <input
                  type="number"
                  className="form-control mb-2"
                  placeholder="Bathrooms"
                  value={unitForm.bathrooms}
                  onChange={(e) =>
                    setUnitForm({ ...unitForm, bathrooms: e.target.value })
                  }
                />

                <select
                  className="form-select mb-2"
                  value={unitForm.status}
                  onChange={(e) =>
                    setUnitForm({ ...unitForm, status: e.target.value })
                  }
                >
                  <option value="available">Available</option>
                  <option value="sold">Sold</option>
                  <option value="reserved">Reserved</option>
                </select>

                <input
                  type="number"
                  className="form-control mb-2"
                  placeholder="Bedrooms"
                  value={unitForm.bedrooms}
                  onChange={(e) =>
                    setUnitForm({ ...unitForm, bedrooms: e.target.value })
                  }
                />

                <input
                  type="number"
                  className="form-control mb-2"
                  placeholder="Living rooms"
                  value={unitForm.living_rooms}
                  onChange={(e) =>
                    setUnitForm({ ...unitForm, living_rooms: e.target.value })
                  }
                />

                <input
                  type="number"
                  className="form-control mb-2"
                  placeholder="Area"
                  value={unitForm.area}
                  onChange={(e) =>
                    setUnitForm({ ...unitForm, area: e.target.value })
                  }
                />

                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  value={unitForm.price}
                  onChange={(e) =>
                    setUnitForm({ ...unitForm, price: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-primary">Add Unit</button>
            </div>
          </form>
        </div>
      </div>

      {/* ================= PROJECT MODAL ================= */}
      <div className="modal fade" id="projectModal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <form className="modal-content" onSubmit={submitProject}>
            <div className="modal-header">
              <h5 className="modal-title">
                {form.id ? "Edit Project" : "Add Project"}
              </h5>
              <button
                ref={closeProjectModal}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body row g-3">
              <div className="col-md-6">
                <input
                  className="form-control"
                  placeholder="Title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form-control"
                  placeholder="Location"
                  value={form.location}
                  onChange={(e) =>
                    setForm({ ...form, location: e.target.value })
                  }
                />
              </div>
              <div className="col-md-6">
                <select
                  className="form-select"
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                >
                  <option value="available">Available</option>
                  <option value="sale">Sale</option>
                  <option value="under_construction">Under Construction</option>
                </select>
              </div>
              <div className="col-md-6">
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) =>
                    setForm({ ...form, main_image: e.target.files[0] })
                  }
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  placeholder="Description"
                  rows="3"
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
              </div>
              <div className="col-md-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Bedrooms"
                  value={form.overview_bedrooms}
                  onChange={(e) =>
                    setForm({ ...form, overview_bedrooms: e.target.value })
                  }
                />
              </div>
              <div className="col-md-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Bathrooms"
                  value={form.overview_bathrooms}
                  onChange={(e) =>
                    setForm({ ...form, overview_bathrooms: e.target.value })
                  }
                />
              </div>
              <div className="col-md-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Kitchens"
                  value={form.overview_kitchens}
                  onChange={(e) =>
                    setForm({ ...form, overview_kitchens: e.target.value })
                  }
                />
              </div>
              <div className="col-md-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Area"
                  value={form.area}
                  onChange={(e) => setForm({ ...form, area: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="date"
                  className="form-control"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary">
                {form.id ? "Update" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ================= IMAGES MODAL ================= */}
      <div className="modal fade" id="imagesModal" tabIndex="-1">
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={submitImages}>
            <div className="modal-header">
              <h5 className="modal-title">Upload Images</h5>
              <button
                ref={closeImagesModal}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="file"
                multiple
                className="form-control"
                onChange={(e) =>
                  setImagesForm({ ...imagesForm, images: [...e.target.files] })
                }
              />
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary">Upload</button>
            </div>
          </form>
        </div>
      </div>

      {/* ================= LOCATION MODAL ================= */}
      <div className="modal fade" id="locationModal" tabIndex="-1">
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={submitLocation}>
            <div className="modal-header">
              <h5 className="modal-title">Project Location</h5>
              <button
                ref={closeLocationModal}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <input
                className="form-control mb-2"
                placeholder="City"
                value={locationForm.city}
                onChange={(e) =>
                  setLocationForm({ ...locationForm, city: e.target.value })
                }
                required
              />
              <input
                className="form-control mb-2"
                placeholder="District"
                value={locationForm.district}
                onChange={(e) =>
                  setLocationForm({ ...locationForm, district: e.target.value })
                }
                required
              />
              <input
                className="form-control mb-2"
                placeholder="Address"
                value={locationForm.address}
                onChange={(e) =>
                  setLocationForm({ ...locationForm, address: e.target.value })
                }
              />
              <input
                className="form-control"
                placeholder="Map Link"
                value={locationForm.map_link}
                onChange={(e) =>
                  setLocationForm({ ...locationForm, map_link: e.target.value })
                }
              />
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary">Save Location</button>
            </div>
          </form>
        </div>
      </div>

      {/* ================= WARRANTY MODAL ================= */}
      <div className="modal fade" id="warrantyModal" tabIndex="-1">
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={submitWarranty}>
            <div className="modal-header">
              <h5 className="modal-title">Project Warranty</h5>
              <button
                ref={closeWarrantyModal}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <input
                className="form-control mb-2"
                placeholder="Warranty Name"
                value={warrantyForm.warranty_name}
                onChange={(e) =>
                  setWarrantyForm({
                    ...warrantyForm,
                    warranty_name: e.target.value,
                  })
                }
                required
              />
              <input
                className="form-control"
                placeholder="Duration"
                value={warrantyForm.duration}
                onChange={(e) =>
                  setWarrantyForm({ ...warrantyForm, duration: e.target.value })
                }
                required
              />
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary">Add Warranty</button>
            </div>
          </form>
        </div>
      </div>

      {/* ================= FEATURES MODAL ================= */}
      <div className="modal fade" id="featureModal" tabIndex="-1">
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={submitFeature}>
            <div className="modal-header">
              <h5 className="modal-title">Project Features</h5>
              <button
                ref={closeFeatureModal}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <input
                className="form-control mb-3"
                placeholder="Feature name"
                value={featureForm.name}
                onChange={(e) =>
                  setFeatureForm({ ...featureForm, name: e.target.value })
                }
                required
              />

              <input
                type="file"
                className="form-control mb-3"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  console.log("SELECTED FILE:", file);

                  setFeatureForm((prev) => ({
                    ...prev,
                    image: file,
                  }));
                }}
              />

              {projects
                .find((p) => p.id === featureForm.project_id)
                ?.features?.map((f) => (
                  <div
                    key={f.id}
                    className="d-flex justify-content-between border p-2 mb-1"
                  >
                    <span>{f.name}</span>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => dispatch(deleteProjectFeature(f.id))}
                    >
                      ×
                    </button>
                  </div>
                ))}
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary">Add Feature</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
