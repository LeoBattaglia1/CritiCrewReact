import React, { useState } from 'react';
import './App.css';
import Carousel from './componentes/carousel/carousel';
import Header from './componentes/header/header';
import Footer from './componentes/footer/footer';
import Registro from './componentes/formulario/registro';
import InicioSesion from './componentes/formulario/InicioSesion';
import DetailsMovie from './componentes/details/detailsMovie';

const App = () => {
  const [showCarousel, setShowCarousel] = useState(true);
  const [showRegistro, setShowRegistro] = useState(false);
  const [showInicioSesion, setShowInicioSesion] = useState(false);
  const [showDetailsMovie, setShowDetailsMovie] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleFormVisibilityRegistro = () => {
    setShowRegistro(true);
    setShowInicioSesion(false);
    setShowDetailsMovie(false);
  };

  const handleFormVisibilityInicioSesion = () => {
    setShowRegistro(false);
    setShowInicioSesion(true);
    setShowDetailsMovie(false);
  };

  const handleDetailsVisibility = (movieId) => {
    setSelectedMovieId(movieId);
    setShowRegistro(false);
    setShowInicioSesion(false);
    setShowDetailsMovie(true);
  };

  const handleBackClick = () => {
    setShowRegistro(false);
    setShowInicioSesion(false);
    setShowDetailsMovie(false);
  };

  return (
    <div>
      <Header
        handleFormVisibilityRegistro={handleFormVisibilityRegistro}
        handleFormVisibilityInicioSesion={handleFormVisibilityInicioSesion}
        handleDetailsVisibility={handleDetailsVisibility}
      />
      {showRegistro ? (
        <Registro handleBackClick={handleBackClick} />
      ) : showInicioSesion ? (
        <InicioSesion handleBackClick={handleBackClick} />
      ) : showDetailsMovie ? (
        <DetailsMovie
          movie={selectedMovieId}
          handleBackClick={handleBackClick}
          showDetailsMovie={showDetailsMovie}
          />
          ) : showCarousel ? (
            <Carousel handleDetailsVisibility={handleDetailsVisibility} />
          ) : null}
          <Footer />
        </div>
      );
    };

export default App;
