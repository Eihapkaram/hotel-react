import { Card, Col, Container, Row } from "react-bootstrap";

import Icon from "./IconCrcile";

import "/src/Styles/CrcileIcon.css";

function Sctiontow() {
  return (
    <Container fluid>
      <Row
        style={{
          display: "flex",
          flexFlow: "row",
          backgroundColor: " rgba(202, 188, 149, 0.12)",
          direction: "ltr",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          marginBlock: "80px",
          height: "330px",
        }}
      >
        <Col
          data-aos="fade-out"
          data-aos-delay="800"
          className="cardico"
          style={{
            display: "flex",
            flexFlow: "row-reverse",
            alignItems: "end",
            justifyContent: "end",
          }}
        >
          <Icon s="el3" />

          <Card.Text style={{ width: "fit-content" }}>
            <Card.Title
              style={{
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "end",
                fontSize: "20px",
                fontWeight: "bold",
                margin: "10px",
              }}
            >
              إيماننا
            </Card.Title>
            نحن ملتزمون بتحقيق رؤيتنا من خلال توفير كل ما يلزم لضمان راحة
            عملائنا ونقيس نجاحنا من خلال النتائج المقدمة لكم.{" "}
          </Card.Text>
        </Col>
        <Col
          data-aos="fade-out"
          data-aos-delay="500"
          className="cardico"
          style={{
            display: "flex",
            flexFlow: "row-reverse",
            alignItems: "end",
            justifyContent: "end",
          }}
        >
          <Icon s="el2" />

          <Card.Text style={{ width: "fit-content" }}>
            <Card.Title
              style={{
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "end",
                fontSize: "20px",
                fontWeight: "bold",
                margin: "10px",
              }}
            >
              رؤيتنا
            </Card.Title>
            دور أوضح للسكن في رفع جودة الحياة.
          </Card.Text>
        </Col>
        <Col
          data-aos="fade-out"
          data-aos-delay="300"
          className="cardico"
          style={{
            display: "flex",
            flexFlow: "row-reverse",
            alignItems: "end",
            justifyContent: "end",
          }}
        >
          <Icon s="el1" />

          <Card.Text style={{ width: "fit-content" }}>
            <Card.Title
              style={{
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "end",
                fontSize: "20px",
                fontWeight: "bold",
                margin: "10px",
              }}
            >
              رسالتنا
            </Card.Title>
            تقديم نموذج عصري رائد في مجال التطوير العقاري
          </Card.Text>
        </Col>
      </Row>
    </Container>
  );
}

export default Sctiontow;
