import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../movie/movie';
import DetailsMovie from '../details/detailsMovie';
import Publicidad from '../publicidad/publicidad';
import './carousel.css';

const Carousel = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const fetchMovies = async () => {
    try {
      const movieIds = Array.from({ length: 4 }, () => Math.floor(Math.random() * 550) + 1);
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

  const handleDetailsVisibility = (movie) => {
    setSelectedMovie(movie);
    setShowDetails(true);
  };

  const handleBackClick = () => {
    setSelectedMovie(null);
    setShowDetails(false);
  };

  return (
    <div className="carousel">
      {showDetails ? (
        <DetailsMovie movie={selectedMovie} handleBackClick={handleBackClick} />
      ) : (
        <>
          {movies.map((movie) => (
            <div key={movie.id} className="carousel-content">
              <Movie movie={movie} handleDetailsVisibility={handleDetailsVisibility} />
            </div>
          ))}
          <button className="boton" onClick={fetchMovies}>
            &gt;
          </button>
          <Publicidad />
        </>
      )}
    </div>
  );
};

export default Carousel;
