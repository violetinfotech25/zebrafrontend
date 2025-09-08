import React, { useState, useEffect } from 'react';
import Nav from '../Components/Nav2';
import { Carousel, Navbar, Nav as BootstrapNav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Nav.css';
import '../assets/css/About.css';
import Logo from '../assets/images/zebra-elevation1.png';
import { Link } from 'react-router-dom';
import Servicesec1 from '../Components/Servicesec'

function Service() {
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setShowHeader(currentScrollPos === 0); // Only show at top
    setIsScrolled(currentScrollPos > 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <>
      <Nav />

      {/* Carousel */}
      <div className="carousel-wrapper">
        <Carousel fade controls indicators>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='https://www.electricexcellence.com/images/essi-network-background.jpg'
              alt="Slide 1"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <Servicesec1 />
    </>
  );
}

export default Service;
