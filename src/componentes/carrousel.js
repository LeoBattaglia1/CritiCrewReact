import React, { useState, useEffect } from 'react';

const Carousel = ({ images, interval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval);
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
