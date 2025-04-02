import React from "react";
import { Container, Row } from "react-bootstrap";
import PDFViewer from "../PDFViewer"; // Assurez-vous que ce fichier est bien dans le même dossier

function ResumeNew() {
  const resumeStyle = {
    position: "relative",
    top: "60px", // Ajustez en fonction de la hauteur de la navbar
    padding: "20px",
  };

  return (
    <Container fluid className="resume-container text-center py-4" style={resumeStyle}>
      <Row className="d-flex justify-content-center mb-3">
        <h2>Mon CV</h2>
      </Row>
      <PDFViewer fileUrl={"cv.pdf"} />
    </Container>
  );
}

export default ResumeNew;
