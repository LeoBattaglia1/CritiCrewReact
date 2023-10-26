import React, { useState } from 'react';
import Modal from '../modal/modal'; 
import './puntuacion.css';

const Puntuacion = ({ idUsuario, movieId }) => {
  const [puntuacion, setPuntuacion] = useState(1);
  const [mensajeModal, setMensajeModal] = useState(null);

  const handleClose = () => {
    setMensajeModal(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3010/puntuacion/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({usuario_id: idUsuario, puntuacion, id_pelicula: movieId}),
        
      });
    
      
      if (!response.ok) {
        const errorData = await response.json(); 
        throw new Error(errorData.message);
      }else{
        setMensajeModal("Su puntuacion fue cargada exitosamente");
      } 
        
    } catch (error) {
      console.error('Error:', error);
      setMensajeModal(error.message);
      console.log(error.message)
    }
  };

  return (
    <>
    <div className="rating-container">
      <h3>Califica esta película</h3>
      <form onSubmit={handleSubmit}> 
        <div className="rating-inputs">
          <input 
            type="range" 
            min="1" 
            max="5" 
            step="1" 
            className="slider" 
            id="ratingSlider"
            value={puntuacion}
            onChange={(e) => setPuntuacion(e.target.value)}
          />
        </div>

        <div className="button">
          <button type="submit" className="vote">Votar</button>
        </div>
      </form>
    </div>
    {mensajeModal && <Modal mensaje={mensajeModal} handleClose={handleClose} />}
    </>
  );
};

export default Puntuacion;
