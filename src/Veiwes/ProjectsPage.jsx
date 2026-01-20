// src/features/projects/ProjectsPage.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProjects } from "/src/Redux/Slices/projectsSlice";
import { useNavigate } from "react-router-dom";
export default function ProjectsPage() {
  function renderStatus(status) {
    switch (status) {
      case "available":
        return <span className="avelubl">متاح</span>;
      case "sale":
        return <span className="avelubl4">مباع</span>;
      case "under_construction":
        return <span className="avelubl3">ينفذ</span>;
      default:
        return null;
    }
  }

  const navigate = useNavigate();

  const dis = useDispatch();

  const { list: projects, loading, baseURL } = useSelector((s) => s.projects);

  useEffect(() => {
    dis(fetchProjects());
    console.log(projects);
  }, [dis]);
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
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
