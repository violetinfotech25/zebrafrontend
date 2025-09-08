import React from 'react';
import '../assets/css/About.css';
import Footernew from './Footer';

const clientLogos = [
  "https://www.zebrasignworld.com/images/images/20241211054347ganga1_1.png",
  "https://www.zebrasignworld.com/images/images/20241211054513FB1.png",
  "https://www.zebrasignworld.com/images/images/20241211051755CMC.png",
  "https://www.zebrasignworld.com/images/images/20241211052225L__T.png",
  "https://www.zebrasignworld.com/images/images/20241211054741T__G1.png",
  "https://www.zebrasignworld.com/images/images/20241211054750TVS1.png",
  "https://www.zebrasignworld.com/images/images/20241211052319volvo.png",
];

const Aboutsec = () => {
  return (
    <>
      <div className="aboutsec-container">
        <div className="aboutsec-left">
          <h2>Welcome to Zebra Sign World</h2>
        </div>

        <div className="aboutsec-center">
          <div className="dotted-line"></div>
        </div>

        <div className="aboutsec-right">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...
          </p>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested...
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="aboutsec-stats">
  <div className="stat-item">
    <h3>30+</h3>
    <p>Years of Experience</p>
  </div>
  <div className="stat-item">
    <h3>400+</h3>
    <p>Projects Completed</p>
  </div>
  <div className="stat-item">
    <h3>300+</h3>
    <p>Satisfied Clients</p>
  </div>
</div>

      {/* Clients Section */}
      <div className="aboutsec-clients">
        <h3>Our Top Clients</h3>
        <div className="clients-logos">
          {clientLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`Client ${index + 1}`} />
          ))}
        </div>
      </div>

      <Footernew />
    </>
  );
};

export default Aboutsec;
