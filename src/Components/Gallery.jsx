import React, { useState } from "react";
import "../assets/css/gallery.css";
import Footernew from "../Components/Footer";
import gangalogo from "../assets/images/clients/ganga.png";
import LTlogo from "../assets/images/clients/LT.png";
import FBlogo from "../assets/images/clients/FB.png";
import TVSlogo from "../assets/images/clients/TVS.png";
import TGlogo from "../assets/images/clients/TG.png";
import volvologo from "../assets/images/clients/volvo.png";
import CMClogo from "../assets/images/clients/CMC.png";

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
import thalassery from "../assets/images/gallery/thalassery.JPG";
import cheran from "../assets/images/gallery/cheran.JPG";

// Image data grouped by year & month
const imagesByYear = {
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
    ],
  },
};

// Clients logos array
const logosRow1 = [
  { src: gangalogo },
  { src: LTlogo },
  { src: FBlogo },
  { src: TVSlogo },
  { src: TGlogo },
  { src: volvologo },
  { src: CMClogo },
];

const logosRow2 = [...logosRow1];

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // When a year is clicked, reset selected image and index
  const handleYearClick = (year) => {
    setSelectedYear(year);
    setSelectedImage(null);
    setSelectedIndex(null);
  };

  // Flatten images array for the selected year for easier navigation
  const imagesForYear = selectedYear
    ? Object.entries(imagesByYear[selectedYear]).flatMap(([month, images]) => images)
    : [];

  // Get preview image for the year (first image of first month)
  const getPreviewImage = (year) => {
    const months = Object.keys(imagesByYear[year]);
    return imagesByYear[year][months[0]][0];
  };

  // Open fullscreen image and set index
  const openImage = (src, index) => {
    setSelectedImage(src);
    setSelectedIndex(index);
  };

  // Show previous image in fullscreen carousel
  const showPrevious = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => {
      const newIndex = prev === 0 ? imagesForYear.length - 1 : prev - 1;
      setSelectedImage(imagesForYear[newIndex]);
      return newIndex;
    });
  };

  // Show next image in fullscreen carousel
  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => {
      const newIndex = prev === imagesForYear.length - 1 ? 0 : prev + 1;
      setSelectedImage(imagesForYear[newIndex]);
      return newIndex;
    });
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
        {selectedYear && !selectedImage && (
          <>
            <h3>{selectedYear} Collections</h3>
            <div className="grid-gallery">
              {imagesForYear.map((src, index) => (
                <div
                  key={index}
                  className="grid-item"
                  onClick={() => openImage(src, index)}
                >
                  <img src={src} alt={`Image ${index}`} className="grid-img" />
                </div>
              ))}
            </div>
            <button onClick={() => setSelectedYear(null)} className="back-btn">
              ← Back
            </button>
          </>
        )}

        {/* Fullscreen Image View with navigation arrows */}
        {selectedImage && (
          <div className="fullscreen-overlay" onClick={() => setSelectedImage(null)}>
            <button className="nav-arrow left" onClick={showPrevious}>
              ‹
            </button>
            <img src={selectedImage} alt="Full view" className="fullscreen-img" />
            <button className="nav-arrow right" onClick={showNext}>
              ›
            </button>
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
