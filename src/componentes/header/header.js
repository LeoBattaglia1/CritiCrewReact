import React, { useState } from 'react';
import './header.css';
import logo from '../../imagenes/logo.png';

const Header = () => {
  return (
    <header>
      <div className="logoDiv">
        <img className="logoHeader" src={logo} alt="Logo" />
      </div>

      <div className="input-group">
        <input type="text" className="form-control input-lg" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary btn-lg" type="button">Buscar</button>
      </div>

      <div className="login">
        <a className="dropbtn">Iniciar sesión / Registrarse</a>
        <div className="login-content">
          <button>Inicio</button>
          <button>Registrarse</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

