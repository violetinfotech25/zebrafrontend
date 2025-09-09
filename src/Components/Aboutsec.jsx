import '../assets/css/About.css';
import Footernew from './Footer';
import aldura from '../assets/images/brands/aldura.jpg';
import alstone from '../assets/images/brands/alstone.png';
import aludecor from '../assets/images/brands/aludecor.png';
import alumaze from '../assets/images/brands/alumaze.png';
import alutech from '../assets/images/brands/alutech.png';
import aluwall from '../assets/images/brands/aluwall.webp';
import citybond from '../assets/images/brands/citybond.avif';
import eurobond from '../assets/images/brands/eurobond.png';
// import flexibond from '../assets/images/brands/flexibond.png';
// import mapl from '../assets/images/brands/mapl.webp';
import virgo from '../assets/images/brands/virgo.png';
import viva from '../assets/images/brands/viva.png';
import saintgobain from '../assets/images/brands/saint-gobain.jpg';
import jindal from '../assets/images/brands/jindal.jpg';
import ais from '../assets/images/brands/ais.jpg';
import dowsil from '../assets/images/brands/dowsil.jpg';

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
           Your trusted partner for <strong>ACP, GRT, and glass cladding solutions</strong> that blend strength, style, and precision. With <strong>over 10 years of expertise,</strong> we specialize in creating modern facades that enhance brand identity and transform spaces.
          </p>
          <p>
            Our commitment to quality, creativity, and customer satisfaction ensures every project stands as a landmark of excellence.
          </p>
        </div>
      </div>
      {/* How we are */}
      <div className='aboutsec-how container'>
        <h1 className='aboutsec-how-title'>How we are</h1>
        <p className='aboutsec-how-content'>At Zebra Sign World, we believe that strong partnerships build stronger projects. We collaborate with trusted suppliers to source the finest <strong>ACP, GRT, and glass cladding materials,</strong> ensuring durability and unmatched quality in every project. Our partners share our commitment to excellence, innovation, and timely delivery. By working together, we guarantee that each facade reflects precision, creativity, and long-lasting value. These partnerships enable us to transform ideas into iconic structures across Coimbatore and South India.</p>
      </div>
      {/* Clients Section */}
      <div className="aboutsec-clients">
        <h1 className='clients-title'>Our Top Clients</h1>
        <div className="clients-logos">
          {clientLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`Client ${index + 1}`} />
          ))}
        </div>
      </div>
      {/* Stats Section */}
      <div className="aboutsec-stats container-fluid">
  <div className="stat-item">
    <h3>10+</h3>
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
{/* Brands */}
<div className='aboutbrand'>
  <h1 className='brand-title'>Our Brands</h1>
  <div className='brand-logos'>
    <img src = {saintgobain} alt=" Saint Gobain" />
    <img src = {eurobond} alt="Eurobond" />
    <img src = {viva} alt="Viva" />
    <img src = {aludecor} alt="Aludecor" />
    <img src = {alumaze} alt="Alumaze" />
    <img src = {alstone} alt="Alstone" />
    <img src = {jindal} alt=" Jindal" />
    <img src = {ais} alt="AIS" />
    <img src = {dowsil} alt="Dowsil" />
    <img src = {aldura} alt=" Aldura" />
    <img src = {alutech} alt="Alutech" />
    <img src = {aluwall} alt="Aluwall" />
    <img src = {citybond} alt="Citybond" />
    {/* <img src = {flexibond} alt="Flexibond" />
    <img src = {mapl} alt="Mapl" /> */}
    <img src = {virgo} alt="Virgo" />
    
  </div>
</div>

      <Footernew />
    </>
  );
};

export default Aboutsec;
