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
import Col, { useCol } from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Products() {
  const [avel, setavel] = useState("avelbel");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function avelob() {
    if (avel == "avelbel") {
      return <span className="avelubl">متاح</span>;
    } else if (avel == "work") {
      return <span className="avelubl3">ينفذ </span>;
    } else if (avel == "selled") {
      return <span className="avelubl2">مباع </span>;
    }
  }
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="header2" style={{}}>
        <h2>المشاريع </h2>
        <ul className="filter-header" style={{}}></ul>
      </div>
      <div className="continer2">
        <Card className="Card">
          <Row className="avaliconP">
            <Col>
              <span className="icon">
                <FaExternalLinkAlt
                  color="#fffcfcff"
                  size={15}
                ></FaExternalLinkAlt>
              </span>
            </Col>
            <Col>{avelob()}</Col>
          </Row>
          <div className="zoom-img">
            <img src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg" />
          </div>

          <CardBody
            style={{
              direction: "rtl",
              display: "flex",
              flexFlow: "column",
              alignItems: "start",
              backgroundColor: "white",
              justifyContent: "end",
            }}
          >
            <CardTitle>
              <Link
                to="/unite/1"
                style={{ textDecoration: "underline", color: "black" }}
              >
                K-110
              </Link>
            </CardTitle>
            <CardSubtitle>الرياض - النرجس</CardSubtitle>

            <ul
              style={{
                display: "flex",
                gap: "20px",
                listStyle: "none",
                flexWrap: "nowrap",
                margin: "0px",
                marginTop: "10px",
                padding: "0px",
              }}
            >
              <li>
                <Link className="linkpro">
                  4 <IoBedOutline size={15}></IoBedOutline> غرف
                </Link>
              </li>
              <li>
                <Link className="linkpro">
                  3 <FaShower size={15}></FaShower> حمام
                </Link>
              </li>
              <li>
                <Link className="linkpro">
                  1 <MdEmojiFoodBeverage size={15}></MdEmojiFoodBeverage> مطبخ
                </Link>
              </li>
              <li>
                <Link className="linkpro">
                  200 <GiResize size={15}></GiResize> المساحة
                </Link>
              </li>
            </ul>
          </CardBody>
        </Card>
        <Card className="Card">
          <Row className="avaliconP">
            <Col>
              <span className="icon">
                <FaExternalLinkAlt
                  color="#fffcfcff"
                  size={15}
                ></FaExternalLinkAlt>
              </span>
            </Col>
            <Col>{avelob()}</Col>
          </Row>
          <div className="zoom-img">
            <img src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg" />
          </div>

          <CardBody
            style={{
              direction: "rtl",
              display: "flex",
              flexFlow: "column",
              alignItems: "start",
              backgroundColor: "white",
              justifyContent: "end",
            }}
          >
            <CardTitle>
              <Link style={{ textDecoration: "underline", color: "black" }}>
                K-110
              </Link>
            </CardTitle>
            <CardSubtitle>الرياض - النرجس</CardSubtitle>

            <ul
              style={{
                display: "flex",
                gap: "20px",
                listStyle: "none",
                flexWrap: "nowrap",
                margin: "0px",
                marginTop: "10px",
                padding: "0px",
              }}
            >
              <li>
                <Link className="linkpro">
                  4 <IoBedOutline size={15}></IoBedOutline> غرف
                </Link>
              </li>
              <li>
                <Link className="linkpro">
                  3 <FaShower size={15}></FaShower> حمام
                </Link>
              </li>
              <li>
                <Link className="linkpro">
                  1 <MdEmojiFoodBeverage size={15}></MdEmojiFoodBeverage> مطبخ
                </Link>
              </li>
              <li>
                <Link className="linkpro">
                  200 <GiResize size={15}></GiResize> المساحة
                </Link>
              </li>
            </ul>
          </CardBody>
        </Card>
        <Card className="Card">
          <Row className="avaliconP">
            <Col>
              <span className="icon">
                <FaExternalLinkAlt
                  color="#fffcfcff"
                  size={15}
                ></FaExternalLinkAlt>
              </span>
            </Col>
            <Col>{avelob()}</Col>
          </Row>
          <div className="zoom-img">
            <img src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg" />
          </div>

          <CardBody
            style={{
              direction: "rtl",
              display: "flex",
              flexFlow: "column",
              alignItems: "start",
              backgroundColor: "white",
              justifyContent: "end",
            }}
          >
            <CardTitle>
              <Link style={{ textDecoration: "underline", color: "black" }}>
                K-110
              </Link>
            </CardTitle>
            <CardSubtitle>الرياض - النرجس</CardSubtitle>

            <ul
              style={{
                display: "flex",
                gap: "20px",
                listStyle: "none",
                flexWrap: "nowrap",
                margin: "0px",
                marginTop: "10px",
                padding: "0px",
              }}
            >
              <li>
                <Link className="linkpro">
                  4 <IoBedOutline size={15}></IoBedOutline> غرف
                </Link>
              </li>
              <li>
                <Link className="linkpro">
                  3 <FaShower size={15}></FaShower> حمام
                </Link>
              </li>
              <li>
                <Link className="linkpro">
                  1 <MdEmojiFoodBeverage size={15}></MdEmojiFoodBeverage> مطبخ
                </Link>
              </li>
              <li>
                <Link className="linkpro">
                  200 <GiResize size={15}></GiResize> المساحة
                </Link>
              </li>
            </ul>
          </CardBody>
        </Card>
        <Card className="Card">
          <Row className="avaliconP">
            <Col>
              <span className="icon">
                <FaExternalLinkAlt
                  color="#fffcfcff"
                  size={15}
                ></FaExternalLinkAlt>
              </span>
            </Col>
            <Col>{avelob()}</Col>
          </Row>
          <div className="zoom-img">
            <img src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg" />
          </div>

          <CardBody
            style={{
              direction: "rtl",
              display: "flex",
              flexFlow: "column",
              alignItems: "start",
              backgroundColor: "white",
              justifyContent: "end",
            }}
          >
            <CardTitle>
              <Link style={{ textDecoration: "underline", color: "black" }}>
                K-110
              </Link>
            </CardTitle>
            <CardSubtitle>الرياض - النرجس</CardSubtitle>

            <ul
              style={{
                display: "flex",
                gap: "20px",
                listStyle: "none",
                flexWrap: "nowrap",
                margin: "0px",
                marginTop: "10px",
                padding: "0px",
              }}
            >
              <li>
                <Link className="linkpro">
                  4 <IoBedOutline size={15}></IoBedOutline> غرف
                </Link>
              </li>
              <li>
                <Link className="linkpro">
                  3 <FaShower size={15}></FaShower> حمام
                </Link>
              </li>
              <li>
                <Link className="linkpro">
                  1 <MdEmojiFoodBeverage size={15}></MdEmojiFoodBeverage> مطبخ
                </Link>
              </li>
              <li>
                <Link className="linkpro">
                  200 <GiResize size={15}></GiResize> المساحة
                </Link>
              </li>
            </ul>
          </CardBody>
        </Card>
        <Card className="Card">
          <Row className="avaliconP">
            <Col>
              <span className="icon">
                <FaExternalLinkAlt
                  color="#fffcfcff"
                  size={15}
                ></FaExternalLinkAlt>
              </span>
            </Col>
            <Col>{avelob()}</Col>
          </Row>
          <div className="zoom-img">
            <img src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg" />
          </div>

          <CardBody
            style={{
              direction: "rtl",
              display: "flex",
              flexFlow: "column",
              alignItems: "start",
              backgroundColor: "white",
              justifyContent: "end",
            }}
          >
            <CardTitle>
              <Link style={{ textDecoration: "underline", color: "black" }}>
                K-110
              </Link>
            </CardTitle>
            <CardSubtitle>الرياض - النرجس</CardSubtitle>

            <ul
              style={{
                display: "flex",
                gap: "20px",
                listStyle: "none",
                flexWrap: "nowrap",
                margin: "0px",
                marginTop: "10px",
                padding: "0px",
              }}
            >
              <li>
                <Link className="linkpro">
                  4 <IoBedOutline size={15}></IoBedOutline> غرف
                </Link>
              </li>
              <li>
                <Link className="linkpro">
                  3 <FaShower size={15}></FaShower> حمام
                </Link>
              </li>
              <li>
                <Link className="linkpro">
                  1 <MdEmojiFoodBeverage size={15}></MdEmojiFoodBeverage> مطبخ
                </Link>
              </li>
              <li>
                <Link className="linkpro">
                  200 <GiResize size={15}></GiResize> المساحة
                </Link>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Products;
