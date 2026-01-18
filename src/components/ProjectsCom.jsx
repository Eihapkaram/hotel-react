import { Row } from "react-bootstrap";
import "/src/Styles/ProjectsCard2.css";
import Col from "react-bootstrap/esm/Col";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProjects } from "/src/Redux/Slices/projectsSlice";

function Projects() {
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
      <div className="header2home" style={{}}>
        <h2>المشاريع </h2>

        <ul
          style={{ zIndex: "50", cursor: "pointer" }}
          className="filter-headerhome"
        >
          <li>
            <button
              onClick={() => navigate("/projects")}
              className="filter-header-btnhome"
              style={{ zIndex: "50", cursor: "pointer" }}
            >
              الكل
            </button>
          </li>
        </ul>
      </div>

      <div className="continer2home">
        {projects.map((el) => {
          return (
            <div
              key={el.id}
              className="Cardhome"
              style={{
                backgroundImage: `url(${el.main_image_url})`,
              }}
            >
              <Row className="avaliconhome">
                <Col>
                  <span className="iconhome">غير</span>
                </Col>
                <Col>
                  <span className="avelublhome">{renderStatus(el.status)}</span>
                </Col>
              </Row>

              <Row className="caption2home" style={{}}>
                <Col>
                  <div className="caption-text2home" style={{}}>
                    <h5>{el.title}</h5>
                    <h6> {el.location} </h6>
                  </div>
                </Col>

                <Col>
                  <button className="caption-btn2home" style={{}}>
                    عدد الوحدات : 51
                  </button>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
