import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectInterests } from "/src/Redux/Slices/projectsSlice";

export default function ProjectInterestsTab() {
  const dispatch = useDispatch();
  const { interests, loading } = useSelector((s) => s.projects);

  useEffect(() => {
    dispatch(fetchProjectInterests());
  }, [dispatch]);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="card">
      <div className="card-header">Project / Unit Interests</div>

      <table className="table mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Project</th>
            <th>Unit</th>
          </tr>
        </thead>

        <tbody>
          {interests.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center">
                No interests
              </td>
            </tr>
          )}

          {interests.map((i, index) => (
            <tr key={i.id}>
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{i.phone}</td>
              <td>{i.project?.title ?? "-"}</td>
              <td>{i.unit ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
