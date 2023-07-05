import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../movie/movie';
import Publicidad from '../publicidad/publicidad';
import DetailsMovie from '../details/detailsMovie';
import './carousel.css';

const Carousel = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const apiKey = '83bc0d3d812780eff004a2baed4eaf17';
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`);
      const moviesData = response.data.results;
      setMovies((prevMovies) => [...prevMovies, ...moviesData]);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  const handleDetailsVisibility = (movie) => {
    setSelectedMovie(movie);
    setShowDetails(true);
  };

  const handleBackClick = () => {
    setSelectedMovie(null);
    setShowDetails(false);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="carousel">
      {showDetails ? (
        <DetailsMovie movie={selectedMovie} handleBackClick={handleBackClick} />
      ) : (
        <>
          <div className="carousel-grid">
            {movies.map((movie) => (
              <div key={movie.id} className="carousel-content">
                <Movie movie={movie} handleDetailsVisibility={handleDetailsVisibility} />
              </div>
            ))}
          </div>
          {isLoading && <p>Loading...</p>}
          {!isLoading && (
            <div className="load-more-container">
              < Publicidad />
              <button className="load-more-button" onClick={handleLoadMore}>Ver Mas ↓</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Carousel;
