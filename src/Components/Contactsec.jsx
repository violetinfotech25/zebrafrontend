import React, { useState } from 'react';
import '../assets/css/About.css';
import Footernew from '../Components/Footer';

const Contactsec = () => {
  const [text, setText] = useState('Contact Page');
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
          <img 
            src="https://quanutrition.com/wp-content/uploads/2024/01/Contact-Us-3.png" 
            alt="Contact" 
            className="contact-image"
          />
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
