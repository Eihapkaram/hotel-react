import { Card, Col, Container, Row } from "react-bootstrap";
import Icon from "./IconCrcile";
import "/src/Styles/CrcileIcon.css";

function Sctiontow() {
  return (
    <Container fluid className="section-two">
      <Row className="section-two-row">
        {/* Card 1 */}
        <Col
          data-aos="fade-out"
          data-aos-delay="800"
          className="section-two-col cardico"
        >
          <div className="section-two-card">
            <Icon s="el3" />
            <Card.Text className="section-two-text">
              <Card.Title className="section-two-title">إيماننا</Card.Title>
              نحن ملتزمون بتحقيق رؤيتنا من خلال توفير كل ما يلزم لضمان راحة
              عملائنا ونقيس نجاحنا من خلال النتائج المقدمة لكم.
            </Card.Text>
          </div>
        </Col>

        {/* Card 2 */}
        <Col
          data-aos="fade-out"
          data-aos-delay="500"
          className="section-two-col cardico"
        >
          <div className="section-two-card">
            <Icon s="el2" />
            <Card.Text className="section-two-text">
              <Card.Title className="section-two-title">رؤيتنا</Card.Title>
              دور أوضح للسكن في رفع جودة الحياة.
            </Card.Text>
          </div>
        </Col>

        {/* Card 3 */}
        <Col
          data-aos="fade-out"
          data-aos-delay="300"
          className="section-two-col cardico"
        >
          <div className="section-two-card">
            <Icon s="el1" />
            <Card.Text className="section-two-text">
              <Card.Title className="section-two-title">رسالتنا</Card.Title>
              تقديم نموذج عصري رائد في مجال التطوير العقاري
            </Card.Text>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Sctiontow;
