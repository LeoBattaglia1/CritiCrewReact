import React, { useState } from 'react';
import './header.css';
import logo from '../../imagenes/logo.png';
import axios from 'axios';

const Header = ({ 
  handleFormVisibilityRegistro, 
  handleFormVisibilityInicioSesion,
  handleDetailsVisibility 
}) => {
  const [inputValue, setInputValue] = useState("");

  
  const handleLogoClick = () => {
    window.location.reload(); // Recargar la página al hacer clic en el logo
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = async () => {
    const movieData = await handleSearchByName(inputValue);
    if (movieData) {
      handleDetailsVisibility(movieData); // Llama a handleDetailsVisibility si se encontró la película
    }
  };

  const handleSearchByName = async (movieName) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=83bc0d3d812780eff004a2baed4eaf17&query=${movieName}`
      );
      const movieData = response.data.results[0];
      return movieData; // Devuelve la información de la película
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <header>
      <div className="logoDiv">
        <button className="logoButton" onClick={handleLogoClick}>
          <img className="logoHeader" src={logo} alt="Logo" />
        </button>
      </div>

      <div className="input-group">
        <input
          type="text"
          className="form-control input-lg"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={inputValue}
          onChange={handleInputChange} // Manejar cambios en el input
        />
        <button
          className="btn btn-outline-secondary btn-lg"
          type="button"
          onClick={handleSearchClick}
        >
          Buscar
        </button>
      </div>

      <div className="login">
        <a className="dropbtn">Iniciar sesión / Registrarse</a>
        <div className="login-content">
          <button onClick={handleFormVisibilityInicioSesion}>Inicio</button>
          <button onClick={handleFormVisibilityRegistro}>Registrarse</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
