// src/components/Four.jsx
import React from 'react';
import '../assets/css/Four.css';
import Core from '../assets/images/core.jpg'
import Secimg from '../assets/images/sec-img.png'
import Thirdimg from '../assets/images/third-img.png'

const Four = () => {
  return (
    <section className="package" id="package">
      <div className="container">
        <h2 className="h2 section-title">Explore Highlights</h2>

        <p className="section-text">
          Our <strong>ACP cladding </strong> offers sleek, durable, and modern panels that enhance your building’s look and longevity, while <strong>GRT cladding</strong> provides strong, versatile solutions that add both elegance and structural strength to any facade. Complementing these, our <strong>glass cladding</strong> brings sophistication, transparency, and natural light to spaces, creating visually striking and contemporary exteriors. Together, these solutions transform buildings into iconic landmarks with style, durability, and lasting impact.
        </p>

        <ul className="package-list">
          <li>
            <div className="package-card">
              <figure className="card-banner">
                <img src="https://envitect.com/wp-content/uploads/2024/04/Banner-4.webp" alt="Experience The Great Holiday On Beach" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">Why Choose Zebra sign world?</h3>
                <p className="card-text">
                  With <strong>over 10 years of expertise</strong> in ACP, GRT, and glass cladding, Zebra Sign World delivers <strong>high-quality, custom-designed solutions</strong> that combine durability, style, and precision. Our dedicated team ensures every project enhances your building’s aesthetic appeal and leaves a lasting impression.
                </p>
              </div>
              <div className="card-price">
                <img src="https://cdn-icons-png.flaticon.com/128/7512/7512242.png" alt="Card Image" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </li>

          <li>
            <div className="package-card">
              <figure className="card-banner">
                <img src="https://www.hubspot.com/hubfs/company-mission-statements_9.webp" alt="Summer Holiday To The Oxolotan River" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">Vision and Mission</h3>
                <p className="card-text">
                  To provide a remarkable design that perfectly reflects your vision in reality. We focus on delivering exceptional ACP Cladding work with remarkable ACP sheet that elevate your brand with quality and providing the best support.
                </p>
              </div>
              <div className="card-price">
                <img src={Secimg} alt="Card Image" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </li>

          <li style={{ listStyle: 'none' }}>

            <div className="package-card">
              <figure className="card-banner">
                <img src={Core} alt="Santorini Island's Weekend Vacation" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">Values</h3>
                <p className="card-text">
                  At Zebra Sign World, we prioritize <strong>quality, innovation, and customer satisfaction,</strong> delivering durable and visually stunning ACP, GRT, and glass cladding solutions. With <strong>over 10 years of expertise,</strong> we uphold integrity, precision, and sustainable practices in every project.
                </p>
              </div>
              <div className="card-price">
                <img src={Thirdimg} alt="Card Image" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Four;
