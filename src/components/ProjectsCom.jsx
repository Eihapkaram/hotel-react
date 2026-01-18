import { Row } from "react-bootstrap";
import "/src/Styles/ProjectsCard2.css";
import Col, { useCol } from "react-bootstrap/esm/Col";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { fetchProjects } from "/src/Redux/Slices/projectsSlice";

function Projects() {
  const [avel, setavel] = useState();
  function avelob() {
    if (avel == "available") {
      return <span className="avelubl">متاح</span>;
    } else if (avel == "under_construction") {
      return <span className="avelubl3">ينفذ </span>;
    } else if (avel == "sale") {
      return <span className="avelubl2">مباع </span>;
    }
  }
  const navigate = useNavigate();
  const dis = useDispatch();

  const { list: projects, loading } = useSelector((s) => s.projects);
  useEffect(() => {
    dis(fetchProjects());
    console.log(projects);
    projects.map((el) => {
      setavel(el.status);
    });
  }, [projects]);

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
            <div key={el.id} className="Cardhome" style={{}}>
              <Row className="avaliconhome">
                <Col>
                  <span className="iconhome">غير</span>
                </Col>
                <Col>
                  <span className="avelublhome">{avelob()}</span>
                </Col>
              </Row>

              <Row className="caption2home" style={{}}>
                <Col>
                  <div className="caption-text2home" style={{}}>
                    <h5>{el.title}</h5>
                    <h6> {el.location} </h6>
                  </div>
                  ;
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
