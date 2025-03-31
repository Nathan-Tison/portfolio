import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { AiFillStar, AiOutlineHome } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import logo from "../Assets/logo.png";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    updateNavbar(window.scrollY >= 20);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" style={{ width: "50px", height: "auto" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => updateExpanded(!expand)} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
              <AiOutlineHome style={{ marginBottom: "2px" }} /> Menu
            </Nav.Link>
            <NavDropdown title="Mes SAÉs" id="saes-dropdown">
              <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                {[...Array(30)].map((_, i) => {
                  const saeNumber = Math.floor(i / 5) + 1;
                  const saeIndex = (i % 5) + 1;
                  return (
                    <NavDropdown.Item
                      key={`sae-R${saeNumber}.${saeIndex}`}
                      as={Link}
                      to={`/sae/R${saeNumber}.0${saeIndex}`}
                      onClick={() => updateExpanded(false)}
                    >
                      SAÉ R{saeNumber}.0{saeIndex}
                    </NavDropdown.Item>
                  );
                })}
              </div>
            </NavDropdown>
            <NavDropdown title="Mes Cours/Ressources" id="courses-dropdown">
              <div style={{ maxHeight: "100px", overflowY: "auto" }}>
                {[...Array(6)].map((_, i) => (
                  <NavDropdown.Item
                    key={`semestre-${i + 1}`}
                    as={Link}
                    to={`/courses/semestre-${i + 1}`}
                    onClick={() => updateExpanded(false)}
                  >
                    Semestre {i + 1}
                  </NavDropdown.Item>
                ))}
              </div>
            </NavDropdown>
            <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
              <CgFileDocument style={{ marginBottom: "2px" }} /> Mon CV
            </Nav.Link>
            <Nav.Link as={Link} to="/presentation-gim" onClick={() => updateExpanded(false)}>
              Présentation du BUT GIM
            </Nav.Link>
            <Nav.Link href="https://github.com/Nathan-Tison/portfolio" target="_blank" className="fork-btn-inner">
              <CgGitFork style={{ fontSize: "1.2em" }} /> <AiFillStar style={{ fontSize: "1.1em" }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
