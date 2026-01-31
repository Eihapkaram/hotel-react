import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGeneralInterests } from "/src/Redux/Slices/projectsSlice";

export default function GeneralInterestsTab() {
  const dispatch = useDispatch();
  const { generalInterests, loading } = useSelector((s) => s.projects);

  useEffect(() => {
    dispatch(fetchGeneralInterests());
  }, [dispatch]);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="card">
      <div className="card-header">General Interests</div>

      <table className="table mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Max Price</th>
            <th>Type</th>
            <th>District</th>
          </tr>
        </thead>

        <tbody>
          {generalInterests.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center">
                No interests
              </td>
            </tr>
          )}

          {generalInterests.map((i, index) => (
            <tr key={i.id}>
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{i.phone}</td>
              <td>{i.max_price ?? "-"}</td>
              <td>{i.property_type ?? "-"}</td>
              <td>{i.district ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
