import { Row } from "react-bootstrap";
import "/src/Styles/ProjectsCard2.css";
import Col, { useCol } from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
function Projects() {
  return (
    <div>
      <div className="header2home" style={{}}>
        <h2>المشاريع </h2>
        <ul className="filter-headerhome" style={{}}>
          <li>
            <button className="filter-header-btnhome" style={{}}>
              <Link path="/projects"> الكل</Link>
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
