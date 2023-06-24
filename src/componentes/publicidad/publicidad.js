import React, { useState, useEffect } from 'react';
import './publicidad.css';
import coca from '../../imagenes/cocacola.jpg';
import mcdonals from '../../imagenes/mcdonals.jpg';
import fanta from '../../imagenes/fanta.jpg';
import ypf from '../../imagenes/ypf.jpg';

const Publicidad = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [coca, mcdonals, fanta, ypf];
  const urls = ['https://www.coca-cola.com.ar/', 'https://www.mcdonalds.com.ar/', 'https://www.fantalatinamerica.com/ar/es/home', 'https://www.ypf.com'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="publicidad">
      <a href={urls[activeIndex]} target="_blank" rel="noopener noreferrer">
        <img src={images[activeIndex]} alt={`Image ${activeIndex}`} />
      </a>
    </div>
  );
};

export default Publicidad;
