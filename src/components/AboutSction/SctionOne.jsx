import { Card, Col, Container, Row } from "react-bootstrap";
import Icon from "./IconCrcile";
import "/src/Styles/CrcileIcon.css";
function SctionOne() {
  return (
    <div>
      <Container fluid style={{ marginBlock: "20px" }}>
        <h3
          style={{
            position: "relative",
            direction: "ltr",
            fontSize: "30px",
            marginTop: "20px",
          }}
        >
          عن الشركة{" "}
        </h3>
        <br />
        <br />
        <br />
        <Row style={{ display: "flex", flexDirection: "row-reverse" }}>
          <Col data-aos="fade-up" data-aos-delay="300">
            <h2>نعمل ببراعة لنبني من الخيال سكن.</h2>
          </Col>
          <Col>
            <Row data-aos="fade-up" data-aos-delay="500">
              <h5>
                كـال هي شركة للتطوير العقاري تعمل على إبتكار منتجات عقارية
                مستدامة تلبي رغبة عملائها
              </h5>
            </Row>
            <Row
              style={{
                display: "flex",
                flexFlow: "row ",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Col
                data-aos="fade-up"
                data-aos-delay="800"
                className="cardico"
                style={{
                  display: "flex",
                  flexFlow: "column ",
                  alignItems: "end",
                  justifyContent: "end",
                }}
              >
                <Icon s="el6" />

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
                  الإتقان
                </Card.Title>
                <Card.Text style={{ width: "250px" }}>
                  نعتقد في كال إنك إذا كنت ستفعل شيئًا ما يجب أن تكون الأفضل فيه
                  لا نقبل بأن نكون في المتوسط بل أن نكون إستثنائيين ومميزين,
                  نتجاوز دائمًا المتوقع وننطلق إلى ما بعد ذلك
                </Card.Text>
              </Col>
              <Col
                data-aos="fade-up"
                data-aos-delay="1000"
                className="cardico"
                style={{
                  display: "flex",
                  flexFlow: "column ",
                  alignItems: "end",
                  justifyContent: "end",
                }}
              >
                <Icon s="el7" />

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
                  الرفاهية
                </Card.Title>
                <Card.Text style={{ width: "250px" }}>
                  إن سعادة عملائنا هي سعادتنا فالتفاؤل والفرح هما ما نسعى لنشره
                  وتحقيقه وأن نملأ السكن بالجمال لتملؤوه أنتم بالحياة
                </Card.Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default SctionOne;
