import React, { useState, useEffect } from 'react';
import { Carousel, Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Nav.css';
import Logo from '../assets/images/zebra-elevation1.png';
import { Link } from 'react-router-dom';

function nav() {
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
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/About">About</Link>
      <Link className="nav-link" to="/Project">Project</Link>
      <Link className="nav-link" to="/Service">Service</Link>
      <Link className="nav-link" to="/Contact">Contact</Link>
    </Nav>

    {/* Navbar Toggle for mobile */}
    <Navbar.Toggle aria-controls="navbar-nav" />

    {/* Right side: Socials, Phone, Button */}
    <Navbar.Collapse id="navbar-nav" className="justify-content-end">
      {/* Show links in collapse for mobile */}
      <Nav className="d-lg-none text-end w-100">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/About">About</Link>
        <Link className="nav-link" to="/Project">Project</Link>
        <Link className="nav-link" to="/Service">Service</Link>
        <Link className="nav-link" to="/Contact">Contact</Link>
      </Nav>

      {/* Social Icons */}
      <div className="d-flex align-items-center social-icons text-dark ms-lg-4">
        <a href="#" className="me-2"><i className="fab fa-youtube"></i></a>
        <a href="#" className="me-2"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="me-2"><i className="fab fa-instagram"></i></a>
        <a href="https://wa.me/918807199880" target='blank' className="me-3"><i className="fab fa-whatsapp"></i></a>
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
    </>
  );
}

export default nav;