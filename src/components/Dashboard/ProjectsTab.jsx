import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjects,
  addProject,
  updateProject,
  deleteProject,
} from "/src/Redux/Slices/projectsSlice";

export default function ProjectsTab() {
  const dispatch = useDispatch();
  const projects = useSelector((s) => s.projects.list);

  const [form, setForm] = useState({
    id: null,
    title: "",
    status: "",
  });

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  /* ================= SUBMIT ================= */
  const submit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", form.title);
    data.append("status", form.status);

    if (form.id) {
      dispatch(updateProject({ id: form.id, data }));
    } else {
      dispatch(addProject(data));
    }

    setForm({ id: null, title: "", status: "" });
  };

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between">
        <span>Projects</span>
        <button
          className="btn btn-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#projectModal"
        >
          Add
        </button>
      </div>

      {/* TABLE */}
      <table className="table mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Status</th>
            <th width="150">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p, i) => (
            <tr key={p.id}>
              <td>{i + 1}</td>
              <td>{p.title}</td>
              <td>{p.status}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#projectModal"
                  onClick={() =>
                    setForm({ id: p.id, title: p.title, status: p.status })
                  }
                >
                  Edit
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
        </tbody>
      </table>

      {/* MODAL */}
      <div className="modal fade" id="projectModal">
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={submit}>
            <div className="modal-header">
              <h5 className="modal-title">
                {form.id ? "Edit Project" : "Add Project"}
              </h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              <input
                className="form-control mb-2"
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
              <input
                className="form-control"
                placeholder="Status"
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
              />
            </div>

            <div className="modal-footer">
              <button className="btn btn-primary">
                {form.id ? "Update" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
