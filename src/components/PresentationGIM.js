import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function PresentationGIM() {
  return (
    <Container fluid className="resume-section text-center py-4">
      <Row className="d-flex justify-content-center mb-3">
        <Button variant="primary" style={{ maxWidth: "250px" }}>
          📄 Télécharger la Présentation du BUT GIM
        </Button>
      </Row>
    </Container>
  );
}

export default PresentationGIM;
