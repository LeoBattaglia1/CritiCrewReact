import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../movie/movie';
import './carousel.css';

const Carousel = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const movieIds = Array.from({ length: 4 }, () => Math.floor(Math.random() * 150) + 1);
      const apiKey = '83bc0d3d812780eff004a2baed4eaf17';
      const promises = movieIds.map((movieId) =>
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      );
      const responses = await Promise.all(promises);
      const moviesData = responses.map((response) => response.data);
      setMovies(moviesData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="carousel">
      {movies.map((movie) => (
        <div className="carousel-content" key={movie.id}>
          <Movie movie={movie} />
        </div>
      ))}
      <button className="boton" onClick={fetchMovies}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;



