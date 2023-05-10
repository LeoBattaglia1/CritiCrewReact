import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Movie = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const apiKey = '83bc0d3d812780eff004a2baed4eaf17';
        const movieId = '1402';
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, []);


  if (!movie) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="card">
      <img className="card-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="card-content">
        <h2 className="card-title">{movie.title}</h2>
        <p className="card-description">{movie.overview}</p>
      </div>
    </div>

  );
};

export default Movie;


