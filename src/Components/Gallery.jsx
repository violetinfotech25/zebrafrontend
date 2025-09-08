import React, { useState } from "react";
import "../assets/css/Nav.css";
import Footernew from "../Components/Footer";
import "../assets/css/gallery.css";
import jan2023 from "../assets/images/gallery/5star-1.JPG";
import feb2023 from "../assets/images/gallery/5star-2.JPG";
import march2023 from "../assets/images/gallery/IMG_2570.JPG";
import april2023 from "../assets/images/gallery/IMG_8797.JPG";
import may2023 from "../assets/images/gallery/karthika.jpeg";
import june2023 from "../assets/images/gallery/reimg3.jpeg";
import july2023 from "../assets/images/gallery/prestige.JPG";
import aug2023 from "../assets/images/gallery/reimg5.jpeg";
import sep2023 from "../assets/images/gallery/reimg6.jpeg";
import oct2023 from "../assets/images/gallery/nillalai.jpeg";
import nov2023 from "../assets/images/gallery/dolphin.jpg";
import dec2023 from "../assets/images/gallery/celebrity.jpg";

// Image data grouped by year & month
const imagesByYear = {
  2023: {
    January: [
      ,
      jan2023,
      feb2023,
      march2023,
      april2023,
      may2023,
      june2023,
      july2023,
      aug2023,
      sep2023,
      oct2023,
      nov2023,
      dec2023,
    ],
    February: [
    ],
    March: [
    ],
    April: [
    ],
  },
  2024: {
    March: [
      "/images/gallery/2023/FGIM2971.JPG",
      "https://www.zebrasignworld.com/static/images/reimg7.jpg",
      "https://www.zebrasignworld.com/images/images/20241210062220IMG_1281.JPG"
    ],
    April: [
      "/images/gallery/2023/IMG_7085-----1.jpg",
      "https://www.zebrasignworld.com/static/images/reimg2.jpeg",
      "images/gallery/2023/IMG_7350.JPG"
    ],
    May: [
      "https://www.zebrasignworld.com/static/images/reimg7.jpg",
      "/images/gallery/2023/FGIM2971.JPG",
      "https://www.zebrasignworld.com/static/images/reimg2.jpeg"
    ],
    June: [
      "https://www.zebrasignworld.com/static/images/reimg2.jpeg",
      "/images/gallery/2023/IMG_7085-----1.jpg",
      "https://www.zebrasignworld.com/static/images/reimg7.jpg",
    ],
    July: [
      "https://www.zebrasignworld.com/images/images/20241210062220IMG_1281.JPG",
      "/images/gallery/2023/FGIM2971.JPG",
      "images/gallery/2023/IMG_7350.JPG"
    ]
  },
  2025: {
    January: [
      "images/gallery/2023/CCLS5513.JPG",
      "images/gallery/2023/WhatsApp Image 2020-10-20 at 10.30.03 PM.jpeg",
      "images/gallery/2024/IMG_2107.JPG"
    ],
    February: [
      "images/gallery/2024/IMG_2916.JPG",
      "images/gallery/2024/IMG_4400.JPG",
      "images/gallery/2024/IMG_4919.JPG"
    ],
    June: [
      "images/gallery/2023/WhatsApp Image 2020-10-20 at 10.30.03 PM.jpeg",
      "images/gallery/2024/IMG_2107.JPG",
      "images/gallery/2024/IMG_9050---3.jpg"
    ],
    July: [
      "https://www.zebrasignworld.com/images/images/20241210062220IMG_1281.JPG",
      "images/gallery/2023/CCLS5513.JPG",
      "images/gallery/2024/IMG_4400.JPG",
    ]
  },
};

const logosRow1 = [
  { src: "https://www.zebrasignworld.com/images/images/20241211054347ganga1_1.png" },
  { src: "https://www.zebrasignworld.com/images/images/20241211054513FB1.png" },
  { src: "https://www.zebrasignworld.com/images/images/20241211051755CMC.png" },
  { src: "https://www.zebrasignworld.com/images/images/20241211052225L__T.png" },
  { src: "https://www.zebrasignworld.com/images/images/20241211054741T__G1.png" },
  { src: "https://www.zebrasignworld.com/images/images/20241211054750TVS1.png" },
  { src: "https://www.zebrasignworld.com/images/images/20241211052319volvo.png" }
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
        <h2 className="gallery-title">Image Gallery by Year</h2>

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
