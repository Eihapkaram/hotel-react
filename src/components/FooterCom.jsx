import { Col, Row } from "react-bootstrap";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "/src/Styles/FooterStyle.css";
import myimg from "/src/assets/logo-white.svg";

function Footer() {
  const links = [
    { title: "الرئيسية", url: "/" },
    { title: "من نحن", url: "/" },
    { title: "المشاريع", url: "/" },
    { title: "ماذا نقدم ؟", url: "/" },
    { title: "طلبات الصيانة", url: "/" },
    { title: "سجل اهتمامك", url: "/" },
    { title: "تواصل معنا", url: "/" },
  ];

  return (
    <div className="FootCon">
      <Row className="FootRow">
        <Col className="FootCol1">
          <h5 className="FootHLink">روابط سريعة</h5>
          <ul className="Footul">
            {links.map((el) => (
              <li key={el.title}>
                <Link to={el.url}>{el.title}</Link>
              </li>
            ))}
          </ul>
        </Col>

        <Col className="FootCol2">
          <h5>التواصل</h5>

          <h6 className="FootCol2subtitle">العنوان</h6>
          <span className="FootAddress">
            المملكة العربية السعودية - حي الملقا - طريق الأمير تركي الأول
          </span>

          <h6 className="FootCol2subtitle">الهاتف</h6>
          <p className="FootCol2p">920014071</p>

          <h6 className="FootCol2subtitle">البريد الالكتروني</h6>
          <p className="FootCol2p">info@kaal.sa</p>
        </Col>

        <Col className="FootCol3">
          <img src={myimg} alt="logo" />
        </Col>
      </Row>

      <Row className="Row2end">
        <Col className="Row2endCol1">
          <Row className="Row2endCol1Row">
            <Col className="Row2endCol1Rowcolicon">
              <FaSquareXTwitter />
            </Col>
            <Col className="Row2endCol1Rowcolicon">
              <FaYoutube />
            </Col>
            <Col className="Row2endCol1Rowcolicon">
              <FaFacebookSquare />
            </Col>
            <Col>
              <h6>تابعنا علي</h6>
            </Col>
          </Row>
        </Col>

        <Col className="Row2endCol1Rowcol2">
          <h6 className="Row2endCol1Rowcol2text">
            © كال KAAL - كل الحقوق محفوظة
          </h6>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
