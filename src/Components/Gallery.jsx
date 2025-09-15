import React, { useState } from "react";
import "../assets/css/Nav.css";
import Footernew from "../Components/Footer";
import "../assets/css/gallery.css";
import march2025 from "../assets/images/gallery/IMG_2570.JPG";
import april2025 from "../assets/images/gallery/IMG_8797.JPG";
import june2023 from "../assets/images/gallery/reimg3.jpeg";
import aug2023 from "../assets/images/gallery/reimg5.jpeg";
import jan2025 from "../assets/images/2.jpg";
import feb2025 from "../assets/images/gallery/genesis.jpg";
import mar2025 from "../assets/images/gallery/pukra.jpg";
import apl2025 from "../assets/images/gallery/ganga.jpg";
import ssandavar from "../assets/images/gallery/ssandavar.jpg";
import velancoffee from "../assets/images/gallery/velan_coffee.webp";
import thalassery from "../assets/images/gallery/thalassery.jpg";
import cheran from "../assets/images/gallery/cheran.jpg";
import gangalogo from "../assets/images/clients/ganga.png";
import LTlogo from "../assets/images/clients/LT.png";
import FBlogo from "../assets/images/clients/FB.png";
import TVSlogo from "../assets/images/clients/TVS.png";
import TGlogo from "../assets/images/clients/TG.png";
import volvologo from "../assets/images/clients/volvo.png";
import CMClogo from "../assets/images/clients/CMC.png";
// import jan2023 from "../assets/images/gallery/5star-1.JPG";
// import feb2023 from "../assets/images/gallery/5star-2.JPG";
// import sep2023 from "../assets/images/gallery/reimg6.jpeg";
// import oct2023 from "../assets/images/gallery/nillalai.jpeg";
// import nov2023 from "../assets/images/gallery/dolphin.jpg";
// import dec2023 from "../assets/images/gallery/celebrity.jpg";
// import july2023 from "../assets/images/gallery/prestige.JPG";
// import may2023 from "../assets/images/gallery/karthika.jpeg";

// Image data grouped by year & month
const imagesByYear = {
  // SignBoard: {
  //   January: [
  //     jan2023,
  //     feb2023,
  //     may2023,
  //     july2023,
  //     sep2023,
  //     oct2023,
  //     nov2023,
  //     dec2023,
  //   ],
  //   February: [
  //     "/images/gallery/2023/FGIM2971.JPG",
  //     "https://www.zebrasignworld.com/static/images/reimg7.jpg",
  //     "https://www.zebrasignworld.com/images/images/20241210062220IMG_1281.JPG"
  //   ],
  //   March: [
  //     "https://www.zebrasignworld.com/static/images/reimg2.jpeg",
  //     "images/gallery/2023/IMG_7350.JPG"
  //   ],
  //   April: [
  //   ],
  // },
  ACP: {
    January: [
      mar2025,
      cheran,
      jan2025,
      feb2025,
      apl2025,
      march2025,
      april2025,
      june2023,
      aug2023,
      ssandavar,
      velancoffee,
      "/images/gallery/2023/IMG_7085-----1.jpg",
      thalassery,
    ]
  },
};

const logosRow1 = [
  { src: gangalogo },
  { src: LTlogo },
  { src: FBlogo },
  { src: TVSlogo },
  { src: TGlogo },
  { src: volvologo },
  { src: CMClogo }
];

const logosRow2 = [...logosRow1];

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setSelectedImage(null);
  };

  const getPreviewImage = (year) => {
    const months = Object.keys(imagesByYear[year]);
    return imagesByYear[year][months[0]][0];
  };

  return (
    <>
      <div className="gallery-container">
        <h2 className="gallery-title">OUR WORKS</h2>

        {/* Step 1: Show years as image tiles */}
        {!selectedYear && (
          <div className="grid-gallery">
            {Object.keys(imagesByYear).map((year) => (
              <div key={year} className="grid-item" onClick={() => handleYearClick(year)}>
                <img src={getPreviewImage(year)} alt={`Preview for ${year}`} className="grid-img" />
                <div className="overlay">
                  <span className="month-label">{year}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 2: Show all images from selected year */}
        {selectedYear && (
          <>
            <h3>{selectedYear} Collections</h3>
            <div className="grid-gallery">
              {Object.entries(imagesByYear[selectedYear]).flatMap(([month, images]) =>
                images.map((src, index) => (
                  <div key={`${month}-${index}`} className="grid-item" onClick={() => setSelectedImage(src)}>
                    <img src={src} alt={`${month} ${index}`} className="grid-img" />
                  </div>
                ))
              )}
            </div>
            <button onClick={() => setSelectedYear(null)} className="back-btn">← Back to Years</button>
          </>
        )}

        {/* Fullscreen Image View */}
        {selectedImage && (
          <div className="fullscreen-overlay" onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt="Full view" className="fullscreen-img" />
          </div>
        )}
      </div>

      {/* Marquee section */}
      <div className="marquee-wrapper">
        <h3>Our Top Clients</h3>
        <div className="marquee left-to-right">
          {[...logosRow1, ...logosRow1].map((logo, index) => (
            <img key={index} src={logo.src} alt={`Logo ${index}`} className="marquee-logo" />
          ))}
        </div>
        <div className="marquee right-to-left">
          {[...logosRow2, ...logosRow2].map((logo, index) => (
            <img key={index} src={logo.src} alt={`Logo ${index}`} className="marquee-logo" />
          ))}
        </div>
      </div>

      <Footernew />
    </>
  );
}
