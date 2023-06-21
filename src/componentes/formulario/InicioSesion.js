import React, {  } from 'react';
import './formulario.css';

const InicioSesion = ({handleBackClick}) => {
  


  return (
   
    <form className="formulario">
      <div className="contenedor">
        <h1>Iniciar sesión</h1>
        <div className="input-contenedor">
          <i className="fa-solid fa-envelope icon"></i>
          <input type="text" placeholder="Correo Electronico" />
        </div>
        <div className="input-contenedor">
          <i className="fa-solid fa-key icon"></i>
          <input type="password" placeholder="Contraseña" />
        </div>
        <div className="button-container">
          <button className="button-submit" type="submit">Entrar</button>
          <button className="button-back" onClick={handleBackClick}>Volver</button>
        </div>
      </div>
    </form>
  );
};

export default InicioSesion;

