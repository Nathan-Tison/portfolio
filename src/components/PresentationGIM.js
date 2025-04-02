import React from "react";
import { Container, Row } from "react-bootstrap";
import PDFViewer from "./PDFViewer"; // Assurez-vous que ce fichier est bien dans le même dossier

function PresentationGIM() {
  const resumeSectionStyle = {
    position: "relative",
    top: "60px", // Ajustez cette valeur en fonction de la hauteur de votre navbar
    padding: "20px",
  };

  return (
    <Container fluid className="resume-section text-center py-4" style={resumeSectionStyle}>
      <Row className="d-flex justify-content-center mb-3">
        <h2>Présentation du BUT GIM</h2>
      </Row>
      {/* Assurez-vous que le lien vers le PDF est correct et accessible */}
      <PDFViewer 
        fileUrl="https://drive.google.com/file/d/1e_chSKM71kaS5-m8Y9TNuevZdVeIic3m/view?usp=drive_link" 
      />
    </Container>
  );
}

export default PresentationGIM;
