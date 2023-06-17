import React, { useState } from 'react';
import './App.css';
import Carousel from './componentes/carousel/carousel';
import Header from './componentes/header/header';
import Footer from './componentes/footer/footer';
import Publicidad from './componentes/publicidad/publicidad';

const App = () => {
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <Carousel />
        <Publicidad />
      </div>
      <Footer />
    </div>
  );
};

export default App;



