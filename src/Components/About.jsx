import React, { useState, useEffect } from 'react';
import { Carousel,Nav as BootstrapNav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../Components/Nav2';
import '../assets/css/Nav.css';
import '../assets/css/About.css';
import aboutImg from '../assets/images/about.jpg';
import  Aboutsecc  from '../Components/Aboutsec'; 

function About() {
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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <>
     <Nav />

      {/* Carousel */}
      <div className="carousel-wrapper">
        <Carousel fade controls indicators>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={aboutImg}
              alt="Slide 1"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <Aboutsecc />
    </>
  );
}

export default About;
