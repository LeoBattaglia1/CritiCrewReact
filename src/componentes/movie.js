import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

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

  const verDetalle = () => {
    setShowDetails(!showDetails);
  };

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
        <button className="card-button">Calificar</button>
        {showDetails && (
          <div>
            <h4>Sinopsis</h4>
            <p>{movie.overview}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movie;



