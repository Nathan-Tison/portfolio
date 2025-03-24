import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          &copy; {new Date().getFullYear()} Nathan Tison
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
