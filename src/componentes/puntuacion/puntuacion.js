import React from 'react';
import './puntuacion.css';

const Puntuacion = () => {
  return (
    <div className="rating-container">
      <h3>Califica esta película</h3>
      <div className="rating-inputs">
        
  <input type="range" min="1" max="5" step="1" className="slider" id="ratingSlider" />

</div>

      <div className="button">
          <button className="vote">Votar</button>
         
        </div>
    </div>
  );
};

export default Puntuacion;
