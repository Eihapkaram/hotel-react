import { Col, Row } from "react-bootstrap";
import "/src/Styles/SectionComStyle.css";
import BtnCom from "/src/components/BtnCom";
function SectionThere() {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row-reverse",
        backgroundColor: " rgba(202, 188, 149, 0.12)",
        marginTop: "50px",
        borderRadius: "20px",
        height: "330px",
      }}
    >
      <Col
        data-aos="fade"
        data-aos-delay="300"
        style={{
          display: "flex",
          flexFlow: "column",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        <h2> ما نقدمه في كال.</h2>
        <p>
          تطوير الأراضي السكنية أو التجارية السكنية أو التجارية إلى شقق ,فلل
          ,مكاتب.
        </p>
      </Col>
      <Col
        data-aos="fade"
        data-aos-delay="500"
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexFlow: "column",
        }}
      >
        <Row>
          <Col>
            <BtnCom s="el2" text="6467674675" backcolor="black" color="white" />
          </Col>
          <Col>
            <BtnCom
              s="el1"
              text="تواصل معنا  "
              backcolor="white"
              color="black"
            />
          </Col>
        </Row>
      </Col>
    </div>
  );
}
export default SectionThere;
