import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutline,
  AiFill,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-SAEs-section" id="SAEs">
      <Container>
        <Row>
          <Col md={8} className="home-SAEs-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSE <span className="purple"> MOI </span> ME PRESENTER 🙂
            </h1>
            <p className="home-SAEs-body">
            Je serais un étudiant en 2e année de BUT Génie Industriel et Maintenance (BUT GIM)
            <br />
            <b className="purple">
            lors de la rentrée de septembre 2025. </b>
            <br />
            <br />
             j’aime bien l'industrie et tout ce qui touche à l'optimisation et à la maintenance en général.
            <br />
            <br />
            je souhaite découvrir le monde du travail et approfondir mes compétences vu au cours de ma première année.
            <br />
            Je suis à la recherche d'une alternance pour une durée de 24 mois afin de me préparer au métier de
            technicien de maintenance.
            <br />
            <br />
            <i>
            Ce contrat en alternance s'étalera sur mes
            <br />
                <b className="purple">
                2 dernières années de formation. </b>
              </i>
              <br />
              <br />
              💡 Mes soft skills et qualités personnelles
              <br />
              <i>
            <br />
                <b className="purple">
                ✨ Rigueur et organisation<br />
                ✨ Esprit d'analyse et résolution de problèmes<br />
                ✨ Adaptabilité et curiosité technique<br />
                ✨ Communication et travail en équipe<br />
                ✨ Gestion du stress et prise d'initiative </b>
              </i>
              <br />

              <br />
              🛠️ Mes Compétences techniques
              <br />
              <i>
            <br />
                <b className="purple">
                Bases solide dans les compétences cités- ci-dessous<br /><br />
              ✅ Maintenance industrielle : préventive, corrective, conditionnelle<br /><br />

              ✅ Automatisation et programmation : python, VAL3<br /><br />

              ✅ Électricité et électronique : diagnostic, câblage, lecture de schémas<br /><br />

              ✅ DAO/CAO : SolidWorks, AutoCAD, Inventor<br /><br />

              ✅ Gestion de projet : planification, organisation, résolution de problèmes<br /><br />

              ✅ Informatique : bureautique suite microsoft (Word, Excel, PowerPoint, Access) <br /><br />
              et suite libreoffice (Writer, Calc, Impress, Base)<br /><br />
              </b>
              </i>
              <br />
              🎯 Centres d’Intérêt & Activités
              <br />
              <i>
            <br />
                <b className="purple">
              💻 Informatique & développement<br />
              ⚙️ Veille technologiqu sur les dernières avancées<br />
              🛠️ Impression 3D & prototypage de petits projets personnels<br />
              🚴  Pratique du VTT et de la pétanque<br />
              🥋 Judo (ceinture bleue) pour sa rigueur et discipline<br />
                </b>
              </i>
              <br />

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-SAEs-social">
            <h1>RETROUVE MOI SUR MES RESEAUX</h1>
            <p>
            🙂 n'hésitez pas à me   <span className="purple">contacter </span>
            </p>
            <ul className="home-SAEs-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a></li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in//"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
