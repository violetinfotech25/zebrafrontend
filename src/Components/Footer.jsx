import React, { useState } from 'react';
import '../assets/css/Footer.css';
import { IonIcon } from 'react-ion-icon';
import Zebralogo from '../assets/images/zebra-elevation1.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed with email:', email);
      setEmail('');
      alert("Thank you for subscribing!");
    }
  };

  return (
    <footer className="footer" id="footer">
      <ul className="footer__nav">
        {/* Branding */}
        <li className="nav__item">
          <a href="/">
            <img src={Zebralogo} alt="Zebra Sign World Logo" style={{ width: "120px" }} />
          </a>
          <p>
            We specialize in high-quality ACP cladding services that elevate the look and durability of your buildings.
            Trust us for sleek modern facades and weather-resistant installations.
          </p>
        </li>

        {/* Contact Info */}
        <li className="nav__item nav__item--extra">
          <h4 className="contact-title">Contact Us</h4>
          <p className="contact-text">Feel free to contact and reach us!</p>
          <p className="contact-text"><strong>Zebra Sign World</strong></p>
          <ul className="nav__ul nav__ul--extra">
            <li>
              <i className="fas fa-phone-alt contact-icon"></i>
              <a href="tel:+919843099624" className="contact-link">+91 98430 99624</a> |
              <a href="tel:+918807199880" className="contact-link">+91 88071 99880</a>
            </li>
            <li>
              <i className="fas fa-envelope contact-icon"></i>
              <a href="mailto:zebrasignworld@gmail.com" className="contact-link">zebrasignworld@gmail.com</a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <address>15A1, Subbiyan Layout, Ramanathapuram, Coimbatore – 641045</address>
            </li>
          </ul>

          {/* Social Icons */}
          <ul className="footer-social-icons">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a target='blank' href="https://wa.me/918807199880"><i className="fab fa-whatsapp"></i></a></li>
            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
          </ul>
        </li>

        {/* Newsletter + Map */}
        <li className="nav__item">
          <p className="form-text">Subscribe to our newsletter for updates & offers!</p>

          <form className="form-wrapper" onSubmit={handleSubscribe}>
            <input
              type="email"
              name="email"
              className="input-field"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button type="submit" className="btn btn-secondary subscribe">Subscribe</button>
          </form>

          <div className="footer-map" style={{ marginTop: '1rem' }}>
            <iframe
              title="Zebra Sign World Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5931458781324!2d76.99626507502833!3d10.994050855141934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8598c9b7997a7%3A0xea5924e45236bbc7!2sZebra%20Sign%20World!5e0!3m2!1sen!2sin!4v1752134012645!5m2!1sen!2sin"
              width="100%"
              height="180"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </li>
      </ul>

      {/* Legal Section */}
      <div className="legal">
        <p className="copyright">
          &copy; {new Date().getFullYear()} <a href="/">Zebra Sign World</a>. All rights reserved.
        </p>
        <ul className="footer-bottom-list">
          <li><a href="#" className="footer-bottom-link">Privacy Policy</a></li>
          <li><a href="#" className="footer-bottom-link">Terms & Conditions</a></li>
          <li><a href="#" className="footer-bottom-link">FAQ</a></li>
        </ul>
      </div>

      {/* Scroll to Top */}
      <a href="#top" className="go-top" aria-label="Back to top">
        <IonIcon name="chevron-up-outline" />
      </a>
    </footer>
  );
};

export default Footer;
