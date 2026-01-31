import {
  Card,
  CardTitle,
  Col,
  Container,
  Form,
  Row,
  Button,
  FloatingLabel,
  Spinner,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjects,
  fetchUnitsByType,
} from "/src/Redux/Slices/projectsSlice";
import { addMaintenanceRequest } from "/src/Redux/Slices/projectsSlice";

export default function Sin() {
  const dispatch = useDispatch();
  const { list: projects, loading } = useSelector((s) => s.projects);
  const unitsLoading = useSelector((s) => s.projects.units);
  const [selectedProject, setSelectedProject] = useState(null);

  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    project_id: "",
    unit: "",
    request_type: "",
    message: "",
  });

  /* ================= FETCH PROJECTS ================= */

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
  useEffect(() => {
    if (form.project_id) {
      dispatch(fetchUnitsByType(form.project_id));
    }
  }, [form.project_id]);

  /* ================= HANDLERS ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleProjectChange = (e) => {
    const projectId = e.target.value;

    const project = projects.find((p) => p.id == projectId);

    setSelectedProject(project || null);

    setForm({
      ...form,
      project_id: projectId,
      unit: "",
    });
  };

  /* ================= UNITS ================= */

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      unit: form.unit || null, // 👈 هنا الحل
    };

    dispatch(addMaintenanceRequest(payload))
      .unwrap()
      .then(() => {
        console.log("✅ تم إرسال الطلب بنجاح");

        // 👇 تفريغ الفورم
        setForm({
          full_name: "",
          phone: "",
          email: "",
          project_id: "",
          unit: "",
          request_type: "",
          message: "",
        });

        setSelectedProject(null);
      })
      .catch((err) => {
        console.log("❌ خطأ", err);
      });
  };

  return (
    <Container fluid style={{ marginBlock: "40px" }}>
      <Row
        className="align-items-center"
        style={{ flexDirection: "row-reverse" }}
      >
        {/* TEXT */}
        <Col md={5}>
          <h2 className="fw-bold mb-3">نعمل ببراعة لنبني من الخيال سكن.</h2>
          <p className="text-muted">
            يمكنك إرسال طلب الصيانة بسهولة وسيتم التواصل معك في أقرب وقت.
          </p>
        </Col>

        {/* FORM */}
        <Col md={7}>
          <Card className="border-0 shadow-lg rounded-4">
            <Card.Body className="p-4">
              <CardTitle as="h4" className="text-center fw-bold mb-4">
                قدم طلب صيانة
              </CardTitle>

              <Form onSubmit={handleSubmit} dir="rtl">
                {/* NAME + PHONE */}
                <Row className="g-3 mb-3">
                  <Col md={6}>
                    <FloatingLabel label="الاسم كامل">
                      <Form.Control
                        name="full_name"
                        value={form.full_name}
                        onChange={handleChange}
                        required
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md={6}>
                    <FloatingLabel label="رقم الهاتف">
                      <Form.Control
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                </Row>

                {/* EMAIL + PROJECT */}
                <Row className="g-3 mb-3">
                  <Col md={6}>
                    <FloatingLabel label="البريد الإلكتروني">
                      <Form.Control
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md={6}>
                    <FloatingLabel label="اختر المشروع">
                      <Form.Select
                        name="project_id"
                        value={form.project_id}
                        onChange={handleProjectChange}
                        required
                      >
                        <option value="">اختر المشروع</option>

                        {loading && <option>جاري التحميل...</option>}

                        {projects.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.title}
                          </option>
                        ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>

                {/* UNIT + TYPE */}

                <Row className="g-3 mb-3">
                  <Col md={6}>
                    <FloatingLabel label="اختر الوحدة">
                      <Form.Select
                        name="unit"
                        value={form.unit}
                        onChange={handleChange}
                        disabled={!selectedProject}
                      >
                        <option value="">اختر الوحدة</option>

                        {unitsLoading
                          ? unitsLoading.units.map((u) => (
                              <option key={u.id} value={u.id}>
                                {u.title || `وحدة ${u.number}`}
                              </option>
                            ))
                          : null}
                      </Form.Select>
                    </FloatingLabel>

                    {!selectedProject && (
                      <small className="text-muted">اختر مشروع أولًا</small>
                    )}
                  </Col>

                  <Col md={6}>
                    <FloatingLabel label="نوع طلب الصيانة">
                      <Form.Select
                        name="request_type"
                        value={form.request_type}
                        onChange={handleChange}
                        required
                      >
                        <option value="">اختر نوع الطلب</option>
                        <option value="صيانة وإصلاح">صيانة وإصلاح</option>
                        <option value="أخرى">أخرى</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>

                {/* MESSAGE */}
                <FloatingLabel label="التفاصيل" className="mb-4">
                  <Form.Control
                    as="textarea"
                    style={{ height: "120px" }}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                  />
                </FloatingLabel>

                <Button type="submit" className="w-100 py-2 fw-bold">
                  إرسال الطلب
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
