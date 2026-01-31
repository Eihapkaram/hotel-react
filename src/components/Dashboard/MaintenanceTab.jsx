import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMaintenance } from "/src/Redux/Slices/maintenanceSlice";

export default function MaintenanceTab() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((s) => s.maintenance);

  useEffect(() => {
    dispatch(fetchMaintenance());
  }, [dispatch]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="card">
      <div className="card-header">Maintenance Requests</div>

      <table className="table mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Project</th>
            <th>Unit</th>
            <th>Request Type</th>
            <th>Unit Received</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {list.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center">
                No requests
              </td>
            </tr>
          )}

          {list.map((r, i) => (
            <tr key={r.id}>
              <td>{i + 1}</td>
              <td>{r.full_name}</td>
              <td>{r.phone}</td>
              <td>{r.project?.title ?? "-"}</td>
              <td>{r.unit ?? "-"}</td>
              <td>{r.request_type}</td>
              <td>{r.unit_received ? "Yes" : "No"}</td>
              <td>{r.message ?? "-"}</td>
              <td>{new Date(r.created_at).toLocaleDateString("ar-EG")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
