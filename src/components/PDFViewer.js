import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { pdfjs } from "react-pdf";

// Corrigez l'URL du worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs`;

function PDFViewer({ fileUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.0);
  const [error, setError] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    console.log(`Le PDF a été chargé avec succès. Nombre de pages: ${numPages}`);
  };

  const onDocumentLoadError = (error) => {
    setError("🚫 Oups ! Une erreur s'est produite lors du chargement du PDF. 📂");
    console.error("Erreur lors du chargement du PDF:", error);
    console.warn("Vérifiez si l'URL du fichier PDF est correcte ou si le fichier est corrompu.");
  };

  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.1, 2.0)); // Max zoom: 200%
  };

  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.5)); // Min zoom: 50%
  };

  return (
    <Container fluid className="pdf-viewer text-center py-4">
      <Row className="mb-3">
        <Col>
          <Button onClick={zoomOut} variant="secondary" className="mr-2">-</Button>
          <span>{Math.round(scale * 100)}%</span>
          <Button onClick={zoomIn} variant="secondary" className="ml-2">+</Button>
        </Col>
      </Row>
      {error ? (
        <Row>
          <Col>
            <div style={{ color: 'red', fontSize: '1.2em', marginTop: '20px' }}>
              {error} <a href="/help" style={{ color: 'blue', textDecoration: 'underline' }}>Obtenir de l'aide 🆘</a>
            </div>
          </Col>
        </Row>
      ) : (
        <Row>
          <Document 
            file={fileUrl} 
            onLoadSuccess={onDocumentLoadSuccess} 
            onLoadError={onDocumentLoadError}
            loading={<div>Chargement...</div>}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={scale} />
            ))}
          </Document>
        </Row>
      )}
    </Container>
  );
}

export default PDFViewer;
