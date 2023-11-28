import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../../imagenes/logo.png";
import axios from "axios";

const Header = ({
  id,
  handleFormVisibilityRegistro,
  handleFormVisibilityInicioSesion,
  handleDetailsVisibility,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!id); // Verifica si hay un ID de usuario
  console.log("el di es ", id);

  const handleLogout = () => {
    //maneja el boton de cerrar sesion
    window.location.reload();
  };

  useEffect(() => {
    setIsLoggedIn(!!id); //cambia el estado del id
  }, [id]);

  const handleLogoClick = () => {
    window.location.reload(); // Recargar la página al hacer clic en el logo
  };

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=83bc0d3d812780eff004a2baed4eaf17&query=${value}&language=es`
      );

      const movieData = response.data.results.slice(0, 5); // Limitar a 5 sugerencias
      setSuggestions(movieData);
      setShowSuggestions(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      //se encarga de ocultar las sugerencias al hacer click en cualquier parte del body
      if (e.target.closest(".suggestions") === null) {
        setShowSuggestions(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSuggestionClick = (movieData) => {
    setInputValue(movieData.title);
    setShowSuggestions(false);
    handleDetailsVisibility(movieData);
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
          onChange={handleInputChange}
        />
      </div>

      {showSuggestions && (
        <ul className="suggestions">
          {suggestions.map((movieData) => (
            <li
              key={movieData.id}
              className="suggestion"
              onClick={() => handleSuggestionClick(movieData)}
            >
              {movieData.title}
            </li>
          ))}
        </ul>
      )}
      <div className="login">
        {isLoggedIn ? (
          <button className="dropbtn" onClick={handleLogout}>
            Cerrar sesión
          </button>
        ) : (
          <a className="dropbtn">Iniciar sesión / Registrarse</a>
        )}
        <div className="login-content">
          {!isLoggedIn && (
            <>
              <button onClick={handleFormVisibilityInicioSesion}>Inicio</button>
              <button onClick={handleFormVisibilityRegistro}>
                Registrarse
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
