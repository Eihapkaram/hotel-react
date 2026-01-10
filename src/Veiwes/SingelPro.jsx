import { useState } from "react";
import SctionSin2 from "/src/components/FixeingOrder/SctionSin2";
import "/src/Styles/ProjectsCards.css";

import { FaExternalLinkAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";

import { FaShower } from "react-icons/fa";
import { GiResize } from "react-icons/gi";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

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
  CardBody,
  CardTitle,
  CardSubtitle,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SingelPro() {
  const [avel, setavel] = useState("avelbel");
  function avelob() {
    if (avel == "avelbel") {
      return <span className="avelubl">متاح</span>;
    } else if (avel == "work") {
      return <span className="avelubl3">ينفذ </span>;
    } else if (avel == "selled") {
      return <span className="avelubl2">مباع </span>;
    }
  }
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    purchaseType: "",
    purpose: "",
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  // Dummy images for the carousel
  const images = [
    "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg",
    "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg",
    "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg",
  ];

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

      <Container fluid className="my-5" dir="rtl">
        <Row className="mb-4" style={{ marginTop: "100px" }}>
          <Col
            style={{
              justifyContent: "end",
              display: "flex",
              flexFlow: "column",
              alignItems: "flex-start",
            }}
          >
            <Row>
              <h2 style={{ fontWeight: 620 }} className="fw-bold">
                K-110
              </h2>
            </Row>

            <Row
              md={5}
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: "0px",
                paddingBlock: "30px",
                flexWrap: "nowrap",
                margin: "0px",
              }}
            >
              <Col
                style={{
                  width: "130px",
                }}
              >
                <span className="linkpro" style={{ fontSize: "bold" }}>
                  الرياض - النرجس
                </span>
              </Col>
              |
              <Col>
                <span style={{ color: "#d8c389" }}>للبيع</span>
              </Col>
              |
              <Col style={{ width: "130px" }}>
                <span className="linkpro">2024 Dec Sun</span>
              </Col>
            </Row>
            <Row>
              <div className="d-flex gap-3 flex-wrap">
                <span className="linkpro">🛏 4 غرف نوم</span>
                <span className="linkpro">🛁 4 حمام</span>
                <span className="linkpro">📐 150 م²</span>
              </div>
            </Row>
          </Col>
          <Col>
            <h2 style={{ fontWeight: 620 }}>SAR 0</h2>
          </Col>
        </Row>
        <SctionSin2 />

        <Row
          className="align-items-start"
          style={{ gap: "30px", paddingRight: "10px" }}
        >
          {/* Left Column – Overview */}
          <Col md={9}>
            <Card
              style={{ border: "0px solid  rgba(202, 188, 149, 0.12)" }}
              className="mb-4 shadow-sm"
            >
              <Card.Body>
                <h4 className="fw-bold mb-3">نظرة عامة</h4>
                <Row className="text-center mb-3">
                  <Col>
                    <Row>
                      <Col md={1}>
                        {" "}
                        <Card
                          style={{
                            border: "1px solid  rgba(202, 188, 149, 0.12)",
                            borderRadius: "15px",
                            height: "60px",
                            width: "60px",
                          }}
                          className="mb-4 shadow-sm"
                        >
                          <Card.Body>
                            <IoBedOutline size={30}></IoBedOutline>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        {" "}
                        غرف نوم <br />
                        <strong>4</strong>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col md={1}>
                        {" "}
                        <Card
                          style={{
                            border: "1px solid  rgba(202, 188, 149, 0.12)",
                            borderRadius: "15px",
                            height: "60px",
                            width: "60px",
                          }}
                          className="mb-4 shadow-sm"
                        >
                          <Card.Body>
                            <FaShower size={30}></FaShower>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        {" "}
                        حمام
                        <br />
                        <strong>3</strong>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col md={1}>
                        {" "}
                        <Card
                          style={{
                            border: "1px solid  rgba(202, 188, 149, 0.12)",
                            borderRadius: "15px",
                            height: "60px",
                            width: "60px",
                          }}
                          className="mb-4 shadow-sm"
                        >
                          <Card.Body>
                            <MdEmojiFoodBeverage
                              size={30}
                            ></MdEmojiFoodBeverage>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        {" "}
                        مطبخ
                        <br />
                        <strong>1</strong>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col md={1}>
                        {" "}
                        <Card
                          style={{
                            border: "1px solid  rgba(202, 188, 149, 0.12)",
                            borderRadius: "15px",
                            height: "60px",
                            width: "60px",
                          }}
                          className="mb-4 shadow-sm"
                        >
                          <Card.Body>
                            <GiResize size={30}></GiResize>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        {" "}
                        المساحة
                        <br />
                        <strong>200</strong>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card
              style={{ border: "0px solid  rgba(202, 188, 149, 0.12)" }}
              className="mb-4 shadow-sm"
            >
              <Card.Body>
                <h5 className="fw-bold">التفاصيل</h5>
                <p className="text-muted">
                  مشروع صفوة النرجس K-110 يقع في الرياض حي النرجس، بموقع
                  استراتيجي قريب من الخدمات والطرق الرئيسية، يضم المشروع أدوار
                  سكنية فاخرة تلبي احتياجات العائلة السعودية بتصاميم حديثة
                  وتوزيع مدروس.
                </p>
              </Card.Body>
            </Card>

            {/* Features */}
            <Card
              style={{ border: "0px solid  rgba(202, 188, 149, 0.12)" }}
              className="mb-4 shadow-sm"
            >
              <Card.Body>
                <h5 className="fw-bold mb-3">المميزات</h5>
                <Row>
                  {[
                    {
                      text: "سطح خاص",
                      img: "https://kaal.sa/assets/images/advantage/1694348679-7189.png",
                    },
                    {
                      text: "حوش خاص",
                      img: "https://kaal.sa/assets/images/advantage/1694348679-7189.png",
                    },
                    {
                      text: "مدخل خاص",
                      img: "https://kaal.sa/assets/images/advantage/1694348659-1496.png",
                    },
                    {
                      text: "جلسة خارجية",
                      img: "https://kaal.sa/assets/images/advantage/1694346319-1854.png",
                    },
                    {
                      text: "حديقة",
                      img: "https://kaal.sa/assets/images/advantage/1694346301-1334.png",
                    },
                    {
                      text: "مصعد",
                      img: "https://kaal.sa/assets/images/advantage/1694346267-5176.png",
                    },
                    {
                      text: "تكييف مركزي",
                      img: "https://kaal.sa/assets/images/advantage/1694344460-2811.png",
                    },
                  ].map((item, i) => (
                    <Col key={i} md={4} className="mb-2">
                      <Card
                        style={{
                          border: "1px solid  rgba(202, 188, 149, 0.12)",
                          borderRadius: "15px",
                          width: "fit-content",
                        }}
                        className="mb-4 shadow-sm"
                      >
                        <Card.Body>
                          <img src={item.img} width={"100px"} />
                        </Card.Body>
                        <Card.Title>
                          <strong> {item.text}</strong>
                        </Card.Title>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>

            {/* Guarantees */}
            <Card
              style={{ border: "0px solid  rgba(202, 188, 149, 0.12)" }}
              className="shadow-sm"
            >
              <Card.Body>
                <h5 className="fw-bold mb-3">الضمانات</h5>
                <Row className="text-center mb-3">
                  {[
                    {
                      text: "تأمين",
                      sub: "مدة 10 سنوات",
                      img: "https://kaal.sa/assets/images/warrantie/1694348789.9090.png",
                    },
                    {
                      text: "صيانة عامة",
                      sub: " لمدة سنة ",
                      img: "https://kaal.sa/assets/images/warrantie/1694349104.3673.png",
                    },
                    {
                      text: "العزل ",
                      sub: " لمدة 15 سنة ",
                      img: "https://kaal.sa/assets/images/warrantie/1694349130.3798.png",
                    },
                    {
                      text: "الكهرباء ",
                      sub: " لمدة 25 سنة ",
                      img: "https://kaal.sa/assets/images/warrantie/1694349156.679.png",
                    },
                    {
                      text: "التكييف",
                      sub: " لمدة سنتين ",
                      img: "https://kaal.sa/assets/images/warrantie/1694349179.3893.png",
                    },
                    {
                      text: "الالمنيوم",
                      sub: " لمدة سنتين ",
                      img: "https://kaal.sa/assets/images/warrantie/1694349210.9874.png",
                    },
                    {
                      text: " المصعد",
                      sub: " لمدة سنتين ",
                      img: "https://kaal.sa/assets/images/warrantie/1694349272.5035.png",
                    },
                    {
                      text: " الإنشائي",
                      sub: "  لمدة 10 سنوات ",
                      img: "https://kaal.sa/assets/images/warrantie/1694349593.6001.png",
                    },
                  ].map((item, i) => (
                    <Col
                      style={{ display: "flex", alignItems: "center" }}
                      key={i}
                      md={5}
                      className="mb-2"
                    >
                      <Card.Body>
                        <img src={item.img} width={"100px"} />
                      </Card.Body>

                      <Col>
                        {" "}
                        <strong> {item.text}</strong>
                        <br />
                        <span>{item.sub}</span>
                      </Col>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column – Carousel + Form */}
        </Row>

        {/* Similar Units */}
        <Row className="mt-5">
          <Col>
            <h4 className="fw-bold mb-3">وحدات مشابهة</h4>

            <div style={{ width: "100%", padding: "20px" }}>
              {/* Navigation Buttons */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <button ref={prevRef} className="nav-btn">
                  ←
                </button>
                <button ref={nextRef} className="nav-btn">
                  →
                </button>
              </div>

              {/* Swiper */}
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={4}
                breakpoints={{
                  0: {
                    slidesPerView: 1, // 📱 موبايل
                  },
                  576: {
                    slidesPerView: 2, // 📱 تابلت
                  },
                  992: {
                    slidesPerView: 4, // 💻 ديسكتوب
                  },
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
              >
                {[1, 2, 3, 4, 5].map((item) => (
                  <SwiperSlide key={item}>
                    <Card className="Card">
                      <Row className="avalicon">
                        <Col>
                          <span className="icon">
                            <FaExternalLinkAlt color="#fff" size={15} />
                          </span>
                        </Col>
                        <Col>{avelob()}</Col>
                      </Row>

                      <div className="zoom-img">
                        <img
                          src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg"
                          alt="unit"
                        />
                      </div>

                      <CardBody
                        style={{
                          direction: "rtl",
                          display: "flex",
                          flexFlow: "column",
                          alignItems: "start",
                          backgroundColor: "white",
                        }}
                      >
                        <CardTitle>
                          <Link
                            to="/unite/1"
                            style={{
                              textDecoration: "underline",
                              color: "black",
                            }}
                          >
                            K-110
                          </Link>
                        </CardTitle>

                        <CardSubtitle>الرياض - النرجس</CardSubtitle>

                        <ul
                          style={{
                            display: "flex",
                            gap: "15px",
                            listStyle: "none",
                            padding: 0,
                            marginTop: "10px",
                          }}
                        >
                          <li className="linkpro">
                            4 <IoBedOutline size={15} /> غرف
                          </li>
                          <li className="linkpro">
                            3 <FaShower size={15} /> حمام
                          </li>
                          <li className="linkpro">
                            1 <MdEmojiFoodBeverage size={15} /> مطبخ
                          </li>
                          <li className="linkpro">
                            200 <GiResize size={15} /> المساحة
                          </li>
                        </ul>
                      </CardBody>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
