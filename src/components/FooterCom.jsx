import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer() {
  const links = [
    { title: "الرئيسية", url: "/" },
    { title: " من نحن", url: "/" },
    { title: "المشاريع", url: "/" },
    { title: "ماذا نقدم ؟", url: "/" },
    { title: "طلبات الصيانة", url: "/" },
    { title: "سجل اهتمامك", url: "/" },
    { title: "تواصل معنا", url: "/" },
  ];
  return (
    <div
      style={{
        backgroundColor: "#181A20",
        color: "white",
        marginTop: "40px",
        height: "fit-content",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "200px",
      }}
    >
      <Row
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "center",
          alignItems: "center",

          gap: "200px",
        }}
      >
        <Col
          style={{
            display: "flex",
            flexFlow: "column",
            marginTop: "50px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h5
            style={{
              display: "flex",
              flexFlow: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            روابط سريعة
          </h5>

          <ul style={{ listStyleType: "none", position: "relative" }}>
            {links.map((el) => (
              <li style={{ marginTop: "20px", opacity: "0.3" }} key={el.title}>
                {" "}
                <Link className="navbar-brand" to={el.url}>
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col>
          <h5>التواصل</h5>

          <h6 style={{ opacity: "0.3", marginBlock: "20px" }}>العنوان</h6>
          <span
            style={{
              display: "flex",
              flexFlow: "row",
              flexWrap: "wrap",
              width: "300px",
              position: "relative",
              left: "-150px",
            }}
          >
            المملكة العربية السعودية - حي الملقا - طريق الأمير تركي الأول
          </span>
          <h6 style={{ opacity: "0.3", marginBlock: "20px" }}>الهاتف</h6>
          <p
            style={{
              display: "flex",
              flexFlow: "row",
              flexWrap: "wrap",
              width: "300px",
              position: "relative",
              left: "50px",
            }}
          >
            920014071
          </p>
          <h6 style={{ opacity: "0.3", marginBlock: "20px" }}>
            البريد الالكتروني
          </h6>
          <p
            style={{
              display: "flex",
              flexFlow: "row",
              flexWrap: "wrap",
              width: "300px",
              position: "relative",
              left: "50px",
            }}
          >
            info@kaal.sa
          </p>
        </Col>
        <Col
          style={{
            display: "flex",
            flexFlow: "column",

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img width={"100px"} src="/src/assets/logo-white.svg" />
        </Col>
      </Row>
      <Row
        style={{
          display: "flex",
          flexFlow: "row",
          borderTop: "0.5px solid white",
          justifyContent: "center",
          position: "relative",
          paddingTop: "30px",
          alignItems: "center",
          top: "-30px",
          gap: "500px",
        }}
      >
        {" "}
        <Col
          style={{
            display: "flex",
            flexFlow: "row",
            justifyContent: "center",
            width: "300px",
            alignItems: "center",
          }}
        >
          <Row
            style={{
              display: "flex",
              flexFlow: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <Col style={{ cursor: "pointer" }}>
              {" "}
              <FaSquareXTwitter />{" "}
            </Col>
            <Col style={{ cursor: "pointer" }}>
              <FaYoutube />
            </Col>
            <Col style={{ cursor: "pointer" }}>
              <FaFacebookSquare />
            </Col>
            <Col>
              <h6> تابعنا علي </h6>
            </Col>
          </Row>
        </Col>
        <Col>
          <h6
            style={{
              display: "flex",
              flexFlow: "row",
              justifyContent: "center",
              width: "300px",
              alignItems: "center",
            }}
          >
            © كال KAAL - كل الحقوق محفوظة
          </h6>
        </Col>
      </Row>
    </div>
  );
}
export default Footer;
