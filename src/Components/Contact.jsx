import React, { useState, useEffect } from 'react';
import Nav from '../Components/Nav2';
import { Carousel, Nav as BootstrapNav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Nav.css';
import '../assets/css/About.css';
import Contactsec from '../Components/Contactsec'

function Contact() {
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
              src='https://av.sc.com/corp-en/nr/content/images/man-texting-on-phone-contact-us-hero-image-2-scaled.jpg'
              alt="Slide 1"
            />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.alstoneindia.com/sites/default/files/2024-03/LOUVERS.jpg"
              alt="Slide 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.alstoneindia.com/sites/default/files/2024-03/Zinc-final.webp"
              alt="Slide 3"
            />
          </Carousel.Item> */}
        </Carousel>
        <Contactsec />
      </div>
    </>
  );
}

export default Contact;
