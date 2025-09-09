import React, { useState, useEffect } from 'react';
import { Carousel, Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Nav.css';
import Logo from '../assets/images/zebra-elevation2.png';
import { NavLink, Link } from 'react-router-dom';
import Carouselfir from '../assets/images/HPL.jpg';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsScrolled(currentScrollPos > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className={`main-navbar py-3 ${isScrolled ? 'navbar-scrolled shadow fixed-top' : ''}`}
      >
        <Container fluid>
          {/* Left Logo */}
          <Navbar.Brand as={Link} to="/" className="me-3">
            <img src={Logo} alt="Zebra Logo" className="navbar-logo" />
          </Navbar.Brand>

          {/* Navigation Links - right after logo */}
          <Nav className="text-end d-none d-lg-flex">
            <NavLink className="nav-link" to="/" end>
              Home
            </NavLink>
            <NavLink className="nav-link" to="/About">
              About
            </NavLink>
            <NavLink className="nav-link" to="/Project">
              Project
            </NavLink>
            <NavLink className="nav-link" to="/Service">
              Service
            </NavLink>
            <NavLink className="nav-link" to="/Contact">
              Contact
            </NavLink>
          </Nav>

          {/* Navbar Toggle for mobile */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* Right side: Socials, Phone, Button */}
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            {/* Show links in collapse for mobile */}
            <Nav className="d-lg-none text-end w-100">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
              <NavLink className="nav-link" to="/Project">
                Project
              </NavLink>
              <NavLink className="nav-link" to="/Service">
                Service
              </NavLink>
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
            </Nav>

            {/* Social Icons */}
            <div className="d-flex align-items-center social-icons text-dark ms-lg-4">
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@zebrasignworld" className="me-2">
                <i className="fab fa-youtube"></i>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61560964190153" className="me-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/zebra_sign_world/" className="me-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://wa.me/918807199880" className="me-3">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>

            {/* Phone Number */}
            <div className="phone-number text-dark fw-bold ms-3 me-3">
              +91 88071 99880 | +91 98430 99624
            </div>

            {/* Contact Button */}
            <div className="d-flex ms-2">
              <Button variant="danger" className="rounded-pill" as={Link} to="/Contact">
                Get in Touch
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carousel */}
      <div className="carousel-wrapper">
        <Carousel fade controls indicators>
          <Carousel.Item>
            <img className="d-block w-100 img-fluid" src={Carouselfir} alt="Slide 1" />
            <Carousel.Caption>
              <h3>Shine, Strength, Style.</h3>
              <p>The Future Of Facades Is Here</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src="https://www.alstoneindia.com/sites/default/files/2024-03/LOUVERS.jpg"
              alt="Slide 2"
            />
            <Carousel.Caption>
              <h3>Glass, GRC, ACP</h3>
              <p>More Than Covering, It’s Crafting Identity</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src="https://www.alstoneindia.com/sites/default/files/2024-03/Zinc-final.webp"
              alt="Slide 3"
            />
            <Carousel.Caption>
              <h3>Panels of GRT, Sheets of ACP</h3>
              <p>
                Designs that define modern <br />
                architecture perfectly
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default App;