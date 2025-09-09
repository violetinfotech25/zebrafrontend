import React from 'react';
import '../assets/css/second_sec.css'; // Make sure to create this CSS file
import About from '../assets/images/about-img.avif';


const SecondSec = () => {
  return (
    <section className="tour-search">
      <div className="container new-layout">
        <div className="left-content">
          <h1 className="title">What we</h1>
          <p className="desc">
            At Zebra Sign World, we are passionate about transforming buildings into iconic landmarks through our expert ACP, GRT, and glass cladding services. With over 10 years of experience in the industry, we specialize in delivering precise, high-quality cladding solutions that combine strength, durability, and aesthetic appeal. Our skilled team works closely with clients to create custom designs tailored to their unique vision, enhancing both functionality and visual impact. From modern commercial facades to elegant residential exteriors, our work reflects creativity, craftsmanship, and attention to detail - making every project a statement of excellence across Coimbatore and all over South India.
          </p>
          <a href="./assets/images/zebra.pdf" className="download-btn" download>
            Download Brochure
          </a>
        </div>
        <div className="right-content">
          <img src={About} alt="Download Brochure"className="tour-image"/>
        </div>
      </div>
    </section>
  );
};

export default SecondSec;
