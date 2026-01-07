import { Col, Row } from "react-bootstrap";
import BtnCom from "/src/components/BtnCom";
import "/src/Styles/SectionThere.css";

function SectionThere() {
  return (
    <div className="section-there">
      {/* النص */}
      <Col data-aos="fade" data-aos-delay="300" className="section-there-text">
        <h2 className="section-there-title">ما نقدمه في كال.</h2>
        <p className="section-there-desc">
          تطوير الأراضي السكنية أو التجارية السكنية أو التجارية إلى شقق، فلل،
          مكاتب.
        </p>
      </Col>

      {/* الأزرار */}
      <Col data-aos="fade" data-aos-delay="500" className="section-there-btns">
        <Row className="section-there-btns-row">
          <Col className="section-there-btn-col">
            <BtnCom s="el2" text="6467674675" backcolor="black" color="white" />
          </Col>
          <Col className="section-there-btn-col">
            <BtnCom
              s="el1"
              text="تواصل معنا"
              backcolor=""
              color="transform"
              bord="1px solid black"
            />
          </Col>
        </Row>
      </Col>
    </div>
  );
}

export default SectionThere;
