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
  const [showForm, setShowForm] = useState(false);
  const [showInicioSesion, setShowInicioSesion] = useState(false);
  const [showCarousel, setShowCarousel] = useState(true);
  const [showDetailsMovie, setShowDetailsMovie] = useState(false);

  const handleFormVisibility = () => {
    setShowForm(true);
    setShowInicioSesion(false);
    setShowDetailsMovie(false);
  };

  const handleFormVisibilityInicioSesion = () => {
    setShowForm(false);
    setShowInicioSesion(true);
    setShowDetailsMovie(false);
  };

  const handleDetailsVisibility = () => {
    setShowDetailsMovie(true);
    setShowCarousel(false);
  };

  const handleBackClick = () => {
    setShowDetailsMovie(false);
    setShowCarousel(true);
  };

  return (
    <div>
      <Header
        handleFormVisibility={handleFormVisibility}
        handleFormVisibilityInicioSesion={handleFormVisibilityInicioSesion}
        handleDetailsVisibility={handleDetailsVisibility}
      />
      <div className="content-wrapper">
        {showForm ? (
          <Registro />
        ) : showInicioSesion ? (
          <InicioSesion />
        ) : showCarousel ? (
          <Carousel handleDetailsVisibility={handleDetailsVisibility} />
        ) : showDetailsMovie ? (
          <DetailsMovie handleBackClick={handleBackClick} />
        ) : null}
        {showCarousel && <Publicidad />}
      </div>
      <Footer />
    </div>
  );
};

export default App;





