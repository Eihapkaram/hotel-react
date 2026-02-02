import { Col } from "react-bootstrap";
import BtnCom from "/src/components/BtnCom";
import "/src/Styles/SectionCare.css";
import { Link, useNavigate } from "react-router-dom";
import myimg from "/src/assets/hous.png";

function SectionCare() {
  const navigate = useNavigate();
  return (
    <div className="section-care">
      <Col
        className="section-care-content"
        data-aos="fade"
        data-aos-delay="500"
      >
        <h2 className="section-care-title">سجل اهتمامك</h2>
        <h4 className="section-care-subtitle">
          نعمل ببراعة لنبني من الخيال سكن
        </h4>
        <BtnCom
          s="el1"
          text="من هنا "
          backcolor="black"
          type="button"
          color="white"
          onClick={() => {
            navigate(`/intersted`);
          }}
        />
      </Col>

      <Col
        className="section-care-image-wrapper"
        data-aos="fade"
        data-aos-delay="800"
      >
        <img
          className="section-care-image"
          src={myimg}
          loading="lazy"
          alt="house"
        />
      </Col>
    </div>
  );
}

export default SectionCare;
