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
    <div className="movie">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <h2 onClick={handleClick} className="movie-title">{movie.title}</h2>
    </div>
  );
};

export default Movie;

