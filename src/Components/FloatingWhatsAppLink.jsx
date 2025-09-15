import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../assets/css/floatingwhatsapp.css";

const FloatingWhatsAppLink = () => {
  const phoneNumber = "9843099624"; // Replace with your number (no + or spaces)
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: "white" }} />
    </a>
  );
};

export default FloatingWhatsAppLink;