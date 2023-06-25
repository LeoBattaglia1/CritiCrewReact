
//export default Publicidad;
import React, { useEffect, useState } from 'react';
import './publicidad.css';

const Publicidad = () => {
  // Estado para controlar el índice de la diapositiva actual
  const [slideIndex, setSlideIndex] = useState(0);

  // Efecto para iniciar la reproducción automática y limpiar el intervalo al desmontar el componente
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      changeSlide(1);
    }, 2000);

    return () => {
      clearInterval(autoPlayInterval);
    };
  }, []);

  // Función para cambiar de diapositiva
  function changeSlide(n) {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;

      // Obtener todas las imágenes
      const slides = document.getElementsByTagName("img");

      // Si el nuevo índice es mayor o igual al número de imágenes, volver al inicio
      if (newIndex >= slides.length) {
        newIndex = 0;
      }

      // Si el nuevo índice es menor a 0, ir a la última imagen
      if (newIndex < 0) {
        newIndex = slides.length - 1;
      }

      // Ocultar todas las imágenes y mostrar la imagen correspondiente al nuevo índice
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[newIndex].style.display = "block";

      // Devolver el nuevo índice
      return newIndex;
    });
  }

  // Efecto para mostrar la diapositiva correspondiente al índice actual
  useEffect(() => {
    showSlide(slideIndex);
  }, [slideIndex]);

  // Función para mostrar una diapositiva específica
  function showSlide(n) {
    // Obtener todas las imágenes
    const slides = document.getElementsByTagName("img");

    // Ocultar todas las imágenes y mostrar la imagen correspondiente al índice n
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
  }

  return (
    <div className='publicidad'>
      
      <div className="slideshow-container">
      
        <img src="../../publicidad/img/imagen (1).jpg" alt="Imagen 1" />
        <img src="../../publicidad/img/imagen (2).jpg" alt="Imagen 2" />
        <img src="../../publicidad/img/imagen (3).jpg" alt="Imagen 3" />
        <img src="../../publicidad/img/imagen.jpg" alt="Imagen 4" />
        <img src="../../publicidad/img/images2.jpg" alt="Imagen 5" />
        <img src="../../publicidad/img/images3.jpg" alt="Imagen 6" />
        
      </div>
    </div>
  );
};

export default Publicidad;
