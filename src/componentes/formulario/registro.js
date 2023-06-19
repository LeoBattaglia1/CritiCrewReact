import React, { } from 'react';
import './formulario.css';

const Registro = ({handleBackClick}) => {
 

  return (
   
    <form className="formulario">
      <div className="contenedor">
        <h1>Registrate</h1>
        <div className="input-contenedor">
          <i className="fas fa-user icon"></i>
          <input type="text" id="nombreCompleto" placeholder="Nombre de Usuario" />
        </div>
        <div className="input-contenedor">
          <i className="fas fa-envelope icon"></i>
          <input type="text" id="correoElectronico" placeholder="Correo Electrónico" />
        </div>
        <div className="input-contenedor">
          <i className="fas fa-key icon"></i>
          <input type="password" id="contrasena" placeholder="Contraseña" />
        </div>

        <h2>Generos favoritos</h2>
        <div className="input-group input-group mb-3">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Comedia" />
            <label className="checkbox-label" htmlFor="inlineCheckbox1">Comedia</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Drama" />
            <label className="checkbox-label" htmlFor="inlineCheckbox2">Drama</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Terror" />
            <label className="checkbox-label" htmlFor="inlineCheckbox3">Terror</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="Romantica" />
            <label className="checkbox-label" htmlFor="inlineCheckbox4">Romantica</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="Ficcion" />
            <label className="checkbox-label" htmlFor="inlineCheckbox5">Ficcion</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="Otro" />
            <label className="checkbox-label" htmlFor="inlineCheckbox6">Otro</label>
          </div>
        </div>
        <div className="button-container">
          <input type="submit" value="Registrarse" className="button" />
          <button className="back-button" onClick={handleBackClick}>Volver</button>
        </div>
        <p>Al Registrarte, aceptas nuestras Condiciones de uso y Políticas de privacidad.</p>
      </div>
    </form>
  );
};

export default Registro;