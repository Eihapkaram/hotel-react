import { Container, Row, Col, Card, Placeholder } from "react-bootstrap";

export default function SingleProjectSkeleton() {
  return (
    <Container fluid className="my-5" dir="rtl">
      {/* Title */}
      <Row className="mb-4">
        <Col>
          <Placeholder as="h2" animation="wave">
            <Placeholder xs={6} />
          </Placeholder>

          <Placeholder animation="wave">
            <Placeholder xs={4} /> | <Placeholder xs={2} /> |{" "}
            <Placeholder xs={3} />
          </Placeholder>
        </Col>
      </Row>

      {/* Overview */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Placeholder as="h4" animation="wave">
            <Placeholder xs={3} />
          </Placeholder>

          <Row className="text-center">
            {[1, 2, 3, 4].map((i) => (
              <Col key={i}>
                <Card className="p-3">
                  <Placeholder animation="wave">
                    <Placeholder xs={8} />
                  </Placeholder>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Description */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Placeholder animation="wave">
            <Placeholder xs={10} />
            <Placeholder xs={9} />
            <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>

      {/* Units Tabs */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Row className="mb-3">
            {[1, 2, 3].map((i) => (
              <Col key={i} xs="auto">
                <Placeholder.Button
                  animation="wave"
                  variant="secondary"
                  xs={4}
                />
              </Col>
            ))}
          </Row>

          <Row>
            {[1, 2].map((i) => (
              <Col md={5} key={i}>
                <Card className="p-3 mb-3">
                  <Placeholder animation="wave">
                    <Placeholder xs={6} />
                    <Placeholder xs={4} />
                    <Placeholder xs={5} />
                  </Placeholder>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
