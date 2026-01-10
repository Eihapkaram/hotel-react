import { Row } from "react-bootstrap";
import "/src/Styles/ProjectsCard2.css";
import Col, { useCol } from "react-bootstrap/esm/Col";
import { Link, useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

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
        <div className="Cardhome" style={{}}>
          <Row className="avaliconhome">
            <Col>
              <span className="iconhome">غير</span>
            </Col>
            <Col>
              <span className="avelublhome">متاح</span>
            </Col>
          </Row>

          <Row className="caption2home" style={{}}>
            <Col>
              <div className="caption-text2home" style={{}}>
                <h5>K-110</h5>
                <h6>الرياض - النرجس</h6>
              </div>
            </Col>

            <Col>
              <button className="caption-btn2home" style={{}}>
                عدد الوحدات : 51
              </button>
            </Col>
          </Row>
        </div>
        <div className="Cardhome" style={{}}>
          <Row className="avaliconhome">
            <Col>
              <span className="iconhome">غير</span>
            </Col>
            <Col>
              <span className="avelublhome">متاح</span>
            </Col>
          </Row>

          <Row className="caption2home" style={{}}>
            <Col>
              <div className="caption-text2home" style={{}}>
                <h5>K-110</h5>
                <h6>الرياض - النرجس</h6>
              </div>
            </Col>

            <Col>
              <button className="caption-btn2home" style={{}}>
                عدد الوحدات : 51
              </button>
            </Col>
          </Row>
        </div>
        <div className="Cardhome" style={{}}>
          <Row className="avaliconhome">
            <Col>
              <span className="iconhome">غير</span>
            </Col>
            <Col>
              <span className="avelublhome">متاح</span>
            </Col>
          </Row>

          <Row className="caption2home" style={{}}>
            <Col>
              <div className="caption-text2home" style={{}}>
                <h5>K-110</h5>
                <h6>الرياض - النرجس</h6>
              </div>
            </Col>

            <Col>
              <button className="caption-btn2home" style={{}}>
                عدد الوحدات : 51
              </button>
            </Col>
          </Row>
        </div>
        <div className="Cardhome" style={{}}>
          <Row className="avaliconhome">
            <Col>
              <span className="iconhome">غير</span>
            </Col>
            <Col>
              <span className="avelublhome">متاح</span>
            </Col>
          </Row>

          <Row className="caption2home" style={{}}>
            <Col>
              <div className="caption-text2home" style={{}}>
                <h5>K-110</h5>
                <h6>الرياض - النرجس</h6>
              </div>
            </Col>

            <Col>
              <button className="caption-btn2home" style={{}}>
                عدد الوحدات : 51
              </button>
            </Col>
          </Row>
        </div>
        <div className="Cardhome" style={{}}>
          <Row className="avaliconhome">
            <Col>
              <span className="iconhome">غير</span>
            </Col>
            <Col>
              <span className="avelublhome">متاح</span>
            </Col>
          </Row>

          <Row className="caption2home" style={{}}>
            <Col>
              <div className="caption-text2home" style={{}}>
                <h5>K-110</h5>
                <h6>الرياض - النرجس</h6>
              </div>
            </Col>

            <Col>
              <button className="caption-btn2home" style={{}}>
                عدد الوحدات : 51
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default Projects;
