import React from 'react';
import '../assets/css/Form.css'; // Import the CSS you shared

const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      serviceType: formData.get("serviceType"),
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/inquiries/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Inquiry sent successfully!");
        e.target.reset(); // clear form
      } else {
        const errorData = await response.json();
        alert("Submission failed: " + JSON.stringify(errorData));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="acp-cladding-section" id="acp-contact">
      <div className="acp-cladding-container">

        {/* Left Content */}
        <div className="acp-cladding-text">
          <p className="acp-cladding-subtitle">ACP Cladding Solutions</p>
          <h2 className="acp-cladding-title">
            Enhance Your Building's Appeal With Modern ACP Cladding
          </h2>
          <p className="acp-cladding-description">
            Transform your structure with durable, lightweight, and weather-resistant Aluminium Composite Panels.
            Perfect for commercial, residential, and industrial applications. Stylish, high-performance, and tailored to your vision.
          </p>
        </div>

        {/* Right Form */}
        <div className="acp-cladding-form-box">
          <form className="acp-cladding-form" onSubmit={handleSubmit}>
            <div className="acp-form-group">
              <label htmlFor="acp-name">Full Name *</label>
              <input type="text" id="acp-name" name="name" required />
            </div>

            <div className="acp-form-group">
              <label htmlFor="acp-phone">Phone Number *</label>
              <input type="tel"
       id="acp-phone"
       name="phone"
       required
       pattern="^\+[1-9]\d{9,14}$"
       placeholder="+919876543210"
       title="Enter a valid phone number in E.164 format(+ country code), e.g., +919876543210" />
            </div>

            <div className="acp-form-group">
              <label htmlFor="acp-address">Address *</label>
              <input type="text" id="acp-address" name="address" required />
            </div>

            <div className="acp-form-group">
              <label htmlFor="acp-service">Select Service *</label>
              <select id="acp-service" name="serviceType" required>
                <option value="">-- Select Service --</option>
                <option value="Residential">Residential Cladding</option>
                <option value="Commercial">Commercial Cladding</option>
                <option value="Industrial">Industrial Cladding</option>
              </select>
            </div>

            <button type="submit" className="acp-cladding-submit-btn">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
