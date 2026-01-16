import { useState } from "react";
import ProjectsTab from "../components/Dashboard/ProjectsTab";
import MaintenanceTab from "../components/Dashboard/MaintenanceTab";

export default function Dashboard() {
  const [tab, setTab] = useState("projects");

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Admin Dashboard</h3>

      {/* Tabs */}
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${tab === "projects" && "active"}`}
            onClick={() => setTab("projects")}
          >
            Projects
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${tab === "maintenance" && "active"}`}
            onClick={() => setTab("maintenance")}
          >
            Maintenance
          </button>
        </li>
      </ul>

      {/* Content */}
      {tab === "projects" && <ProjectsTab />}
      {tab === "maintenance" && <MaintenanceTab />}
    </div>
  );
}
