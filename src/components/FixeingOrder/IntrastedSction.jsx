import { useState } from "react";
import {
  Card,
  CardTitle,
  Col,
  Container,
  Form,
  Row,
  Button,
  FloatingLabel,
  Toast,
  ToastContainer,
} from "react-bootstrap";

export default function InterestForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    price: "",
    type: "",
    finance: "",
    district: "",
    beds: "",
    baths: "",
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "الاسم مطلوب";
    if (!formData.phone) newErrors.phone = "رقم الجوال مطلوب";
    if (!formData.price) newErrors.price = "حد السعر مطلوب";
    if (!formData.type) newErrors.type = "اختر نوع العقار";
    if (!formData.finance) newErrors.finance = "اختر طريقة التمويل";
    if (!formData.district) newErrors.district = "اختر الحي";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setShowToast(true);
    setFormData({
      name: "",
      phone: "",
      price: "",
      type: "",
      finance: "",
      district: "",
      beds: "",
      baths: "",
    });
    setErrors({});
  };

  return (
    <>
      {/* Success Toast */}
      <ToastContainer position="top-start" className="p-3">
        <Toast
          bg="success"
          show={showToast}
          delay={3000}
          autohide
          onClose={() => setShowToast(false)}
        >
          <Toast.Body className="text-white fw-bold">
            ✅ تم إرسال طلبك بنجاح
          </Toast.Body>
        </Toast>
      </ToastContainer>

      <Container fluid style={{ marginBlock: "60px" }}>
        <Row
          className="align-items-center"
          style={{ flexDirection: "row-reverse" }}
        >
          {/* Text Section */}
          <Col
            md={6}
            className="mb-4 mb-md-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="fw-bold mb-3">نعمل ببراعة لنبني من الخيال سكن.</h2>
            <p className="text-muted fs-5">
              يمكنك إرسال طلب الصيانة بسهولة وسيتم التواصل معك في أقرب وقت.
            </p>
          </Col>

          {/* Form Section */}
          <Col md={6} data-aos="fade-up" data-aos-delay="500">
            <Card className="border-0 shadow-lg rounded-4">
              <Card.Body className="p-4">
                <CardTitle as="h4" className="text-center fw-bold mb-4">
                  سجل اهتمامك
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

                <Form onSubmit={handleSubmit} dir="rtl" noValidate>
                  <Row className="g-3 mb-3">
                    <Col md={6}>
                      <FloatingLabel label="الاسم">
                        <Form.Control
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>

                    <Col md={6}>
                      <FloatingLabel label="رقم الجوال">
                        <Form.Control
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>
                  </Row>

                  <Row className="g-3 mb-3">
                    <Col md={6}>
                      <FloatingLabel label="حد السعر">
                        <Form.Control
                          type="number"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          isInvalid={!!errors.price}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.price}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>

                    <Col md={6}>
                      <FloatingLabel label="نوع العقار">
                        <Form.Select
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                          isInvalid={!!errors.type}
                        >
                          <option value="">اختر نوع العقار</option>
                          <option>شقة</option>
                          <option>فيلا</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.type}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>
                  </Row>

                  <Row className="g-3 mb-3">
                    <Col md={6}>
                      <FloatingLabel label="طريقة التمويل">
                        <Form.Select
                          name="finance"
                          value={formData.finance}
                          onChange={handleChange}
                          isInvalid={!!errors.finance}
                        >
                          <option value="">اختر طريقة التمويل</option>
                          <option>كاش</option>
                          <option>تمويل بنكي</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.finance}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>

                    <Col md={6}>
                      <FloatingLabel label="الحي">
                        <Form.Select
                          name="district"
                          value={formData.district}
                          onChange={handleChange}
                          isInvalid={!!errors.district}
                        >
                          <option value="">اختر الحي</option>
                          <option>النرجس</option>
                          <option>الياسمين</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.district}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>
                  </Row>

                  <Button
                    type="submit"
                    className="w-100 py-2 fw-bold rounded-3"
                  >
                    إرسال الطلب
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
