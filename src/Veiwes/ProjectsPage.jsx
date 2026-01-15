// src/features/projects/ProjectsPage.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, deleteProject } from "./projectsSlice";

export default function ProjectsPage() {
  const dispatch = useDispatch();
  const projects = useSelector((s) => s.projects.list);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <div>
      <h4>Projects</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Status</th>
            <th></th>
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
    </div>
  );
}
