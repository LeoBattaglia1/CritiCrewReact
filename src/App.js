import React, { useState } from 'react';
import './App.css';
import Carousel from './componentes/carousel/carousel';
import Header from './componentes/header/header';
import Footer from './componentes/footer/footer';
import Publicidad from './componentes/publicidad/publicidad';
import Registro from './componentes/formulario/registro';
import InicioSesion from './componentes/formulario/InicioSesion';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [showInicioSesion, setShowInicioSesion] = useState(false);

  const handleFormVisibility = () => {
    setShowForm(true);
    setShowInicioSesion(false);
  };

  const handleFormVisibilityInicioSesion = () => {
    setShowForm(false);
    setShowInicioSesion(true);
  };

  return (
    <div>
      <Header handleFormVisibility={handleFormVisibility} handleFormVisibilityInicioSesion={handleFormVisibilityInicioSesion} />
      <div className="content-wrapper">
        {showForm ? <Registro /> : showInicioSesion ? <InicioSesion /> : <Carousel />}
        <Publicidad />
      </div>
      <Footer />
    </div>
  );
};

export default App;



