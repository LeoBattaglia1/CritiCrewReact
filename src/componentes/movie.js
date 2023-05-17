import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showRating, setShowRating] = useState(false);



  const fetchMovie = async () => {
    try {
      const movieId = Math.floor(Math.random() * 150) + 1;
      const apiKey = '83bc0d3d812780eff004a2baed4eaf17';
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
      );

      setMovie(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);


  //////manejadores de botones//
  const verDetalle = () => {
    setShowDetails(!showDetails);
  };

  const verCalificacion = (event) => {
    setShowRating(!showRating);
  };
////////////////////////

  if (!movie) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="card">
      <img
        className="card-image"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="card-content">
        <h1 className="card-title">{movie.title}</h1>

        <button className="card-button" onClick={verDetalle}>
          Ver más
        </button>
        <button className="card-button" onClick={verCalificacion}>
        Calificar
      </button>

        {showDetails && (
          <div class="sinopsi">
            <h4>Sinopsis</h4>
            <p>{movie.overview}</p>
          </div>
        )}

        {showRating && (
          <div class="calificar">
            <p>Elige una calificación:</p>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="rating"
                  value={value}
                />
                {value}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Movie;



