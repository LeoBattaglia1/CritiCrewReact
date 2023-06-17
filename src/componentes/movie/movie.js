import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './movie.css';

const Movie = () => {
  const [movie, setMovie] = useState(null);

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

  if (!movie) {
    return (
      <div className="noMovie">
      <h2>Pelicula no disponible</h2>
    </div>
    ); 
  }

  return (
    <div className="movie">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
    </div>
  );
};

export default Movie;
