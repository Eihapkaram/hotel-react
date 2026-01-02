import { Col, Row } from "react-bootstrap";
import "/src/Styles/SectionComStyle.css";
import BtnCom from "/src/components/BtnCom";
function SectionCare() {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row-reverse",
        backgroundColor: " rgba(202, 188, 149, 0.12)",
        marginTop: "50px",
        height: "330px",
      }}
    >
      <Col
        style={{
          display: "flex",
          flexFlow: "column",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        <h2>سجل اهتمامك</h2>
        <h4>نعمل ببراعة لنبني من الخيال سكن</h4>
        <BtnCom text="عرض التفاصيل" backcolor="black" color="white" />
      </Col>
      <Col>
        <img
          style={{
            position: "relative",
            left: "-120px",
            top: "-30px",
            height: "356px",
          }}
          width={"430px"}
          loading="lazy"
          src="/src/assets/hous.png"
        />
      </Col>
    </div>
  );
}
export default SectionCare;
