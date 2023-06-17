import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './movie.css';

const Movie = ({ movie, handleMovieClick }) => {
  if (!movie) {
    return (
      <div className="noMovie">
        <h2>Película no disponible</h2>
      </div>
    );
  }

  return (
    <div className="movie">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <h2 onClick={() => handleMovieClick(movie)} className="movie-title">{movie.title}</h2>
    </div>
  );
};

export default Movie;
