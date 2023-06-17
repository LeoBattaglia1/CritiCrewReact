import React, { useState } from 'react';
import './detailsMovie.css';

const DetailsMovie = ({ movie }) => {
  const { title, release_date, genres, overview } = movie;
  const [showDetails, setShowDetails] = useState(true);

  const handleBackClick = () => {
    setShowDetails(false);
  };

  if (!showDetails) {
    return null; // Oculta el componente DetailsMovie si showDetails es false
  }

  return (
    <div className='detalle'>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={title} />
      <div className='contenido'>
        <h2>{title}</h2>
        <p>
          <strong>Fecha de estreno:</strong> {release_date}
        </p>
        <p>
          <strong>Género:</strong> {genres.map((genre) => genre.name).join(', ')}
        </p>
        <p>
          <strong>Sinopsis:</strong> {overview}
        </p>
      
        <div className="rating-container">
          <h3>Califica esta película:</h3>
          <div className="rating-inputs">
            <label>
              <input
                type="radio"
                name="rating"
                value={1}
                
              />
              1
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value={2}
               
              />
              2
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value={3}
                
              />
              3
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value={4}
                
              />
              4
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value={5}
                
              />
              5
            </label>
          </div>
        </div>
        <div className="button-container">
          <button className="vote-button" >Votar</button>
          <button className="back-button" onClick={handleBackClick}>Volver</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsMovie;
