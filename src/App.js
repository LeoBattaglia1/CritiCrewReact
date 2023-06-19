import React, { useState } from 'react';
import './App.css';
import Carousel from './componentes/carousel/carousel';
import Header from './componentes/header/header';
import Footer from './componentes/footer/footer';
import Publicidad from './componentes/publicidad/publicidad';
import Registro from './componentes/formulario/registro';
import InicioSesion from './componentes/formulario/InicioSesion';
import DetailsMovie from './componentes/details/detailsMovie';

const App = () => {
  const [showRegistro, setShowRegistro] = useState(false);
  const [showInicioSesion, setShowInicioSesion] = useState(false);
  const [showDetailsMovie, setShowDetailsMovie] = useState(false);
  const [showCarousel, setShowCarousel] = useState(true);

  const handleFormVisibilityRegistro = () => {
    setShowRegistro(true);
    setShowInicioSesion(false);
    setShowDetailsMovie(false);
    setShowCarousel(false);
  };

  const handleFormVisibilityInicioSesion = () => {
    setShowRegistro(false);
    setShowInicioSesion(true);
    setShowDetailsMovie(false);
    setShowCarousel(false);
  };

  const handleDetailsVisibility = () => {
    setShowRegistro(false);
    setShowInicioSesion(false);
    setShowDetailsMovie(true);
    setShowCarousel(false);
  };

  const handleBackClick = () => {
    setShowCarousel(true);
    setShowDetailsMovie(false);
    setShowRegistro(false);
    setShowInicioSesion(false);
  };

  return (
    <div>
      <Header
        handleFormVisibilityRegistro={handleFormVisibilityRegistro}
        handleFormVisibilityInicioSesion={handleFormVisibilityInicioSesion}
        handleDetailsVisibility={handleDetailsVisibility}
      />
      <div className="content-wrapper">
        {showRegistro ? (
          <Registro handleBackClick={handleBackClick} />
        ) : showInicioSesion ? (
          <InicioSesion handleBackClick={handleBackClick} />
        ) : showDetailsMovie ? (
          <DetailsMovie handleBackClick={handleBackClick} />
        ) : (
          <Carousel />
        )}
        <Publicidad />
      </div>
      <Footer />
    </div>
  );
};

export default App;





