import { Col, Row } from "react-bootstrap";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
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
        gap: "300px",
      }}
    >
      <Row
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "center",
          alignItems: "center",

          gap: "300px",
        }}
      >
        <Col
          style={{
            display: "flex",
            flexFlow: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4
            style={{
              display: "flex",
              flexFlow: "row",
              justifyContent: "center",
              width: "200px",
              alignItems: "center",
            }}
          >
            روابط سريعة
          </h4>
        </Col>
        <Col>
          <h4>التواصل</h4>
        </Col>
        <Col
          style={{
            display: "flex",
            flexFlow: "column",
            marginTop: "50px",

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
          paddingTop: "30px",
          alignItems: "center",
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
            <Col>
              {" "}
              <FaSquareXTwitter />{" "}
            </Col>
            <Col>
              <FaYoutube />
            </Col>
            <Col>
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
