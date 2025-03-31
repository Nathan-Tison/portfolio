import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import NavBar from "./components/Navbar";
import Home from "./components/Home/Home";
import PresentationGIM from "./components/PresentationGIM";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import R101 from "./components/SAEs/saes/R101";
import R102 from "./components/SAEs/saes/R102";
import R103 from "./components/SAEs/saes/R103";
import R104 from "./components/SAEs/saes/R104";
import R105 from "./components/SAEs/saes/R105";
import R201 from "./components/SAEs/saes/R201";
import R202 from "./components/SAEs/saes/R202";
import R203 from "./components/SAEs/saes/R203";
import R204 from "./components/SAEs/saes/R204";
import R205 from "./components/SAEs/saes/R205";
import R301 from "./components/SAEs/saes/R301";
import R302 from "./components/SAEs/saes/R302";
import R303 from "./components/SAEs/saes/R303";
import R304 from "./components/SAEs/saes/R304";
import R305 from "./components/SAEs/saes/R305";
import R401 from "./components/SAEs/saes/R401";
import R402 from "./components/SAEs/saes/R402";
import R403 from "./components/SAEs/saes/R403";
import R404 from "./components/SAEs/saes/R404";
import R405 from "./components/SAEs/saes/R405";
import R501 from "./components/SAEs/saes/R501";
import R502 from "./components/SAEs/saes/R502";
import R503 from "./components/SAEs/saes/R503";
import R504 from "./components/SAEs/saes/R504";
import R505 from "./components/SAEs/saes/R505";
import R601 from "./components/SAEs/saes/R601";
import R602 from "./components/SAEs/saes/R602";
import R603 from "./components/SAEs/saes/R603";
import R604 from "./components/SAEs/saes/R604";
import R605 from "./components/SAEs/saes/R605";
import Semestre1 from "./components/SAEs/semestres/semestre1";
import Semestre2 from "./components/SAEs/semestres/semestre2";
import Semestre3 from "./components/SAEs/semestres/semestre3";
import Semestre4 from "./components/SAEs/semestres/semestre4";
import Semestre5 from "./components/SAEs/semestres/semestre5";
import Semestre6 from "./components/SAEs/semestres/semestre6";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/presentation-gim" element={<PresentationGIM />} />
          <Route path="/sae/R1.01" element={<R101 />} />
          <Route path="/sae/R1.02" element={<R102 />} />
          <Route path="/sae/R1.03" element={<R103 />} />
          <Route path="/sae/R1.04" element={<R104 />} />
          <Route path="/sae/R1.05" element={<R105 />} />
          <Route path="/sae/R2.01" element={<R201 />} />
          <Route path="/sae/R2.02" element={<R202 />} />
          <Route path="/sae/R2.03" element={<R203 />} />
          <Route path="/sae/R2.04" element={<R204 />} />
          <Route path="/sae/R2.05" element={<R205 />} />
          <Route path="/sae/R3.01" element={<R301 />} />
          <Route path="/sae/R3.02" element={<R302 />} />
          <Route path="/sae/R3.03" element={<R303 />} />
          <Route path="/sae/R3.04" element={<R304 />} />
          <Route path="/sae/R3.05" element={<R305 />} />
          <Route path="/sae/R4.01" element={<R401 />} />
          <Route path="/sae/R4.02" element={<R402 />} />
          <Route path="/sae/R4.03" element={<R403 />} />
          <Route path="/sae/R4.04" element={<R404 />} />
          <Route path="/sae/R4.05" element={<R405 />} />
          <Route path="/sae/R5.01" element={<R501 />} />
          <Route path="/sae/R5.02" element={<R502 />} />
          <Route path="/sae/R5.03" element={<R503 />} />
          <Route path="/sae/R5.04" element={<R504 />} />
          <Route path="/sae/R5.05" element={<R505 />} />
          <Route path="/sae/R6.01" element={<R601 />} />
          <Route path="/sae/R6.02" element={<R602 />} />
          <Route path="/sae/R6.03" element={<R603 />} />
          <Route path="/sae/R6.04" element={<R604 />} />
          <Route path="/sae/R6.05" element={<R605 />} />
          <Route path="/courses/semestre-1" element={<Semestre1 />} />
          <Route path="/courses/semestre-2" element={<Semestre2 />} />
          <Route path="/courses/semestre-3" element={<Semestre3 />} />
          <Route path="/courses/semestre-4" element={<Semestre4 />} />
          <Route path="/courses/semestre-5" element={<Semestre5 />} />
          <Route path="/courses/semestre-6" element={<Semestre6 />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
