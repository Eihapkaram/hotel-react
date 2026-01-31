import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardSubtitle,
  CardTitle,
  Row,
} from "react-bootstrap";
import "/src/Styles/ProjectsCard.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa";
import { GiResize } from "react-icons/gi";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { fetchProjects } from "/src/Redux/Slices/projectsSlice";
import Col, { useCol } from "react-bootstrap/esm/Col";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function Products() {
  const [avel, setavel] = useState("avelbel");

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
    window.scrollTo(0, 0);
    dis(fetchProjects());
    console.log(projects);
  }, [dis]);
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="header2" style={{}}>
        <h2>المشاريع </h2>
        <ul className="filter-header" style={{}}></ul>
      </div>
      <div className="continer2">
        {projects.map((item) => (
          <Card key={item.id} className="Card">
            <Row className="avaliconP">
              <Col>
                <span onClick={() => navigate(`/unite/${item.id}`)} className="icon">
                  <FaExternalLinkAlt
                    color="#fffcfcff"
                    size={15}
                  ></FaExternalLinkAlt>
                </span>
              </Col>
              <Col>{renderStatus(item.status)}</Col>
            </Row>

            <div className="zoom-img">
              <img src={item.main_image_url} alt="unit" />
            </div>

            <CardBody
              style={{
                direction: "rtl",
                display: "flex",
                flexFlow: "column",
                alignItems: "start",
                backgroundColor: "white",
              }}
            >
              <CardTitle>
                <Link
                  to={`/unite/${item.id}`}
                  style={{
                    textDecoration: "underline",
                    color: "black",
                  }}
                >
                  {item.title}
                </Link>
              </CardTitle>

              <CardSubtitle> {item.location} </CardSubtitle>

              <ul
                style={{
                  display: "flex",
                  gap: "15px",
                  listStyle: "none",
                  padding: 0,
                  marginTop: "10px",
                }}
              >
                <li className="linkpro">
                  {item.overview_bedrooms} <IoBedOutline size={15} /> غرف
                </li>
                <li className="linkpro">
                  {item.overview_bathrooms} <FaShower size={15} /> حمام
                </li>
                <li className="linkpro">
                  {item.overview_kitchens} <MdEmojiFoodBeverage size={15} />{" "}
                  مطبخ
                </li>
                <li className="linkpro">
                  {item.area} <GiResize size={15} /> المساحة
                </li>
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Products;
