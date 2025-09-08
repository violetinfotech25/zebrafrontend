import React, { useRef, useEffect, useState } from 'react';
import '../assets/css/third-sec.css';

import beforeImage1 from '../assets/images/before&after/kar-b.jpg';
import afterImage1 from '../assets/images/before&after/kar-a.jpg';
import beforeImage2 from '../assets/images/before&after/sub-a.jpg';
import afterImage2 from '../assets/images/before&after/sub-b.jpg';
import beforeImage3 from '../assets/images/images/before-2.webp';
import afterImage3 from '../assets/images/images/after-2.webp';

const imagePairs = [
  { before: beforeImage1, after: afterImage1 },
  { before: beforeImage2, after: afterImage2 },
  { before: beforeImage3, after: afterImage3 },
];

const ThirdSec = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const imgFilterRef = useRef(null);
  const afterImageRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const [currentBefore, setCurrentBefore] = useState(beforeImage1);
  const [currentAfter, setCurrentAfter] = useState(afterImage1);

  const moveSlider = (x) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const position = Math.max(0, Math.min(x - rect.left, container.offsetWidth));
    imgFilterRef.current.style.width = `${position}px`;
    sliderRef.current.style.left = `${position}px`;
    afterImageRef.current.style.clip = `rect(0, ${position}px, 400px, 0)`;
  };

  useEffect(() => {
    const container = containerRef.current;
    const center = container.offsetWidth / 2;
    imgFilterRef.current.style.width = `${center}px`;
    sliderRef.current.style.left = `${center}px`;
    afterImageRef.current.style.clip = `rect(0, ${center}px, 400px, 0)`;

    const handleMouseMove = (e) => isDragging && moveSlider(e.clientX);
    const handleTouchMove = (e) => isDragging && moveSlider(e.touches[0].clientX);
    const stopDragging = () => setIsDragging(false);

    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchend', stopDragging);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('mouseup', stopDragging);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchend', stopDragging);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging, currentBefore, currentAfter]);

  const handleBefore = () => {
    const width = containerRef.current.offsetWidth;
    imgFilterRef.current.style.width = `${width}px`;
    sliderRef.current.style.left = `${width}px`;
    afterImageRef.current.style.clip = `rect(0, ${width}px, 400px, 0)`;
  };

  const handleAfter = () => {
    imgFilterRef.current.style.width = `0px`;
    sliderRef.current.style.left = `0px`;
    afterImageRef.current.style.clip = `rect(0, 0px, 400px, 0)`;
  };

  const handleImageSwap = (before, after) => {
    setCurrentBefore(before);
    setCurrentAfter(after);
  };

  return (
    <section className="compare-section">
      <div className="container">
        <div className="image-compare" ref={containerRef}>
          <img src={currentBefore} alt="Before" className="before-image" />
          <img src={currentAfter} alt="After" className="after-image" ref={afterImageRef} />
          <div className="img-filter" ref={imgFilterRef}></div>
          <div
            className="slider"
            ref={sliderRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/5166/5166150.png"
              alt="Slider Icon"
            />
          </div>
        </div>

        {/* Thumbnails */}
        <div className="thumbnails">
          {imagePairs.map((pair, idx) => (
            <img
              key={idx}
              src={pair.before}
              alt={`Thumbnail ${idx}`}
              className="thumbnail"
              onClick={() => handleImageSwap(pair.before, pair.after)}
            />
          ))}
        </div>

        <div className="buttons">
          <button className="btn-left" onClick={handleBefore}>Before</button>
          <button className="btn-right" onClick={handleAfter}>After</button>
        </div>
      </div>
    </section>
  );
};

export default ThirdSec;
