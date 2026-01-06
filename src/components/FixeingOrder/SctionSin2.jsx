import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Carousel,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { BsImage, BsMap, BsYoutube } from "react-icons/bs";

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export default function SingelPro() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    purchaseType: "",
    purpose: "",
  });
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [displayMode, setDisplayMode] = useState("carousel"); // carousel | map | video

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "الاسم مطلوب";
    if (!formData.phone) newErrors.phone = "رقم الهاتف مطلوب";
    if (!formData.email) newErrors.email = "البريد الإلكتروني مطلوب";
    if (!formData.purchaseType) newErrors.purchaseType = "اختر نوع الشراء";
    if (!formData.purpose) newErrors.purpose = "الغرض مطلوب";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("تم إرسال الطلب:", formData);

    setShowToast(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      purchaseType: "",
      purpose: "",
    });
    setErrors({});
  };

  const images = [
    "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg",
    "https://images.pexels.com/photos/221451/pexels-photo-221451.jpeg",
    "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
  ];

  const propertyLocation = [24.774265, 46.738586]; // Riyadh example

  return (
    <Container fluid style={{ marginBlock: "40px" }}>
      {/* Toast */}
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

      <Row className="align-items-start" style={{ marginTop: "150px" }}>
        {/* Main Display Column */}
        <Col md={9}>
          <Card className="mb-3 shadow-sm p-4 position-relative">
            {/* Icon Buttons Overlay */}
            <div
              className="d-flex gap-2 position-absolute"
              style={{
                top: "30px",
                left: "30px",
                zIndex: 30,
              }}
            >
              <Button
                variant={displayMode === "carousel" ? "primary" : "light"}
                size="sm"
                onClick={() => setDisplayMode("carousel")}
              >
                <BsImage color="#d8c389" size={30} />
              </Button>
              <Button
                variant={displayMode === "map" ? "primary" : "light"}
                size="sm"
                onClick={() => setDisplayMode("map")}
              >
                <BsMap color="#d8c389" size={30} />
              </Button>
              <Button
                variant={displayMode === "video" ? "primary" : "light"}
                size="sm"
                onClick={() => setDisplayMode("video")}
              >
                <BsYoutube color="#d8c389" size={30} />
              </Button>
            </div>

            {/* Display Content */}
            {displayMode === "carousel" && (
              <Carousel>
                {images.map((img, i) => (
                  <Carousel.Item key={i}>
                    <img
                      className="d-block w-100"
                      src={img}
                      alt={`Property ${i + 1}`}
                      style={{ height: "600px", objectFit: "cover" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            )}

            {displayMode === "map" && (
              <MapContainer
                center={propertyLocation}
                zoom={14}
                style={{ height: "500px", width: "100%", zIndex: "5" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={propertyLocation}>
                  <Popup>K-110 - الرياض</Popup>
                </Marker>
              </MapContainer>
            )}

            {displayMode === "video" && (
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </Card>
        </Col>

        {/* Form Section */}
        <Col md={3}>
          <Card className="shadow-sm p-3">
            <h5 className="fw-bold mb-3 text-center">سجل اهتمامك</h5>
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group className="mb-2">
                <Form.Control
                  placeholder="الاسم"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Control
                  placeholder="الهاتف"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Control
                  type="email"
                  placeholder="البريد الإلكتروني"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Select
                  name="purchaseType"
                  value={formData.purchaseType}
                  onChange={handleChange}
                  isInvalid={!!errors.purchaseType}
                >
                  <option value="">نوع الشراء</option>
                  <option>سكن</option>
                  <option>استثمار</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.purchaseType}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  placeholder="الغرض"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  isInvalid={!!errors.purpose}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.purpose}
                </Form.Control.Feedback>
              </Form.Group>

              <Button className="w-100" type="submit">
                إرسال الطلب
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
