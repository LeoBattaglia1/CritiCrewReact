
import React from 'react';
import './App.css';
import Serie from './componentes/serie.js';




const App = () => {
  return (
    <div>
      <Serie
        title="Título de la película"
        image="URL_DE_LA_IMAGEN"
        description="Descripción de la película"
      />
    </div>
    
    
  );
};

export default App;

