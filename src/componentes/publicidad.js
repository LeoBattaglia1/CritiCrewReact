import React from 'react';
import Carousel from './Carousel';

const Publicidad = () => {
  const images = [
    { src: "", alt: 'Imagen 1' },
    { src: 'imagen2.jpg', alt: 'Imagen 2' },
    { src: 'imagen3.jpg', alt: 'Imagen 3' }
  ];

  return (
    <div>
      <h1>Carousel Example</h1>
      <Carousel images={images} interval={3000} />
    </div>
  );
};

export default Publicidad;
