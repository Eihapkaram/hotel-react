import {
  Card,
  CardTitle,
  Col,
  Container,
  Form,
  Row,
  Button,
  FloatingLabel,
} from "react-bootstrap";

export default function Sin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("تم إرسال الطلب");
  };

  return (
    <Container fluid style={{ marginBlock: "40px" }}>
      <Row
        className="align-items-center"
        style={{ flexDirection: "row-reverse" }}
      >
        {/* Text Section */}
        <Col md={5} data-aos="fade-up" data-aos-delay="300">
          <h2 className="fw-bold mb-3">نعمل ببراعة لنبني من الخيال سكن.</h2>
          <p className="text-muted">
            يمكنك إرسال طلب الصيانة بسهولة وسيتم التواصل معك في أقرب وقت.
          </p>
        </Col>

        {/* Form Section */}
        <Col md={7}>
          <Row data-aos="fade-up" data-aos-delay="500">
            <Card className="border-0 shadow-lg rounded-4">
              <Card.Body className="p-4">
                <CardTitle
                  as="h4"
                  className="text-center fw-bold mb-4 position-relative"
                >
                  قدم طلب صيانة
                  <span
                    style={{
                      display: "block",
                      width: "60px",
                      height: "3px",
                      background: "#0d6efd",
                      margin: "10px auto 0",
                      borderRadius: "5px",
                    }}
                  />
                </CardTitle>

                <Form onSubmit={handleSubmit} dir="rtl">
                  <Row className="g-3 mb-3">
                    <Col md={6}>
                      <FloatingLabel label="الاسم كامل">
                        <Form.Control type="text" placeholder="الاسم كامل" />
                      </FloatingLabel>
                    </Col>

                    <Col md={6}>
                      <FloatingLabel label="رقم الهاتف">
                        <Form.Control type="tel" placeholder="رقم الهاتف" />
                      </FloatingLabel>
                    </Col>
                  </Row>

                  <Row className="g-3 mb-3">
                    <Col md={6}>
                      <FloatingLabel label="البريد الإلكتروني">
                        <Form.Control
                          type="email"
                          placeholder="البريد الإلكتروني"
                        />
                      </FloatingLabel>
                    </Col>

                    <Col md={6}>
                      <FloatingLabel label="اختر المشروع">
                        <Form.Select>
                          <option>اختر المشروع</option>
                          <option>مشروع 1</option>
                          <option>مشروع 2</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                  </Row>

                  <Row className="g-3 mb-3">
                    <Col md={6}>
                      <FloatingLabel label="اختر الوحدة">
                        <Form.Select>
                          <option>اختر الوحدة</option>
                          <option>وحدة 101</option>
                          <option>وحدة 102</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>

                    <Col md={6}>
                      <FloatingLabel label="نوع طلب الصيانة">
                        <Form.Select>
                          <option>اختر نوع الطلب</option>
                          <option>صيانة وإصلاح (كهرباء، سباكة)</option>
                          <option>أخرى (دهان، جبس، غير ذلك)</option>
                          <option>استلام وحدة</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                  </Row>

                  <FloatingLabel label="التفاصيل" className="mb-4">
                    <Form.Control
                      as="textarea"
                      placeholder="اكتب تفاصيل الطلب"
                      style={{ height: "120px" }}
                    />
                  </FloatingLabel>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100 py-2 fw-bold rounded-3"
                  >
                    إرسال الطلب
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
