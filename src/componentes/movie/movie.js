import React from 'react';
import './movie.css';

const Movie = ({ movie, handleDetailsVisibility }) => {
  if (!movie) {
    return (
      <div className="noMovie">
        <h2>Película no disponible</h2>
      </div>
    );
  }

  const handleClick = () => {
    handleDetailsVisibility(movie);
  };

  return (

      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} onClick={handleClick} alt={movie.title} className="imagen"/>

  );
};

export default Movie;

