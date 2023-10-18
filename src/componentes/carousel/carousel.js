import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../movie/movie';
import Publicidad from '../publicidad/publicidad';
import DetailsMovie from '../details/detailsMovie';
import Menu from '../menu/menu';
import './carousel.css';

const Carousel = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showMenu, setShowMenu] = useState(true); // Nuevo estado para controlar la visibilidad del menú
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [genres, setGenres] = useState([
    { id: 0, name: 'Todos' },
    { id: 28, name: 'Acción' },
    { id: 16, name: 'Animación' },
    { id: 35, name: 'Comedia' },
    { id: 18, name: 'Drama' },
    { id: 14, name: 'Fantasia' },
    { id: 27, name: 'Terror' },
    { id: 878, name: 'Ciencia Ficcion' },
  ]);

  const [selectedGenreId, setSelectedGenreId] = useState(null);

  const fetchMovies = async (genreId = null) => {
    setIsLoading(true);
    try {
      const apiKey = '83bc0d3d812780eff004a2baed4eaf17';
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}&with_genres=${genreId || ''}`
      );
      const moviesData = response.data.results;
      setMovies((prevMovies) => [...prevMovies, ...moviesData]);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(selectedGenreId);
  }, [page, selectedGenreId]);

  const handleDetailsVisibility = (movie) => {
    setSelectedMovie(movie);
    setShowDetails(true);
    setShowMenu(false); // Oculta el menú cuando se muestra DetailsMovie
  };

  const handleBackClick = () => {
    setSelectedMovie(null);
    setShowDetails(false);
    setShowMenu(true); // Muestra el menú cuando vuelves atrás desde DetailsMovie
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleGenreClick = (genreId) => {
    setSelectedGenreId(genreId);
    setMovies([]);
    setPage(1);
  };

  return (
    <div className="carousel">
      {showMenu && <Menu genres={genres} handleGenreClick={handleGenreClick} />}

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
              <Publicidad />
              <button className="load-more-button" onClick={handleLoadMore}>
                Ver Mas ↓
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Carousel;
