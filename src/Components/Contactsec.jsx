import React, { useState } from 'react';
import '../assets/css/contact.css';
import Footernew from '../Components/Footer';

const Contactsec = () => {
  const [text, setText] = useState('Get in Touch');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://127.0.0.1:8000/api/contact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("Message sent! We'll be in touch soon.");
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-left">
          <div className='contact-content'>
  <h1>Zebra Sign World</h1>
  <p>Feel free to contact us, let’s work together and develop dreams</p>

  <div className="contact-info">
    <i className="fas fa-phone-alt fa-flip-horizontal contact-icon"></i>
    <a href="tel:+919843099624">+91 98430 99624</a> |
    <a href="tel:+918807199880">+91 88071 99880</a>

    <br />

    <i className="fas fa-envelope contact-icon"></i>
    <a href="mailto:zebrasignworld@gmail.com">zebrasignworld@gmail.com</a>

    <br />

    <i className="fas fa-map-marker-alt contact-icon"></i>
    <address>15A1, Subbiyan Layout, Ramanathapuram, Coimbatore – 641045</address>
  </div>

  <div className="social-links">
    <a target='blank' href="https://www.facebook.com/profile.php?id=61560964190153"><i className="fab fa-facebook-f"></i></a>
    <a target='blank' href="https://www.instagram.com/zebra_sign_world/"><i className="fab fa-instagram"></i></a>
    <a target='blank' href="https://wa.me/918807199880"><i className="fab fa-whatsapp"></i></a>
    <a target='blank' href="https://www.youtube.com/@zebrasignworld"><i className="fab fa-youtube"></i></a>
  </div>
</div>
        </div>

        <div className="contact-right">
          <h1>{text}</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone Number" pattern="^\+[1-9]\d{9,14}$" value={formData.phone} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footernew />
    </>
  );
};

export default Contactsec;
