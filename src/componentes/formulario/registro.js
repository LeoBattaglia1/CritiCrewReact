import React, { useState } from 'react';
import './formulario.css';



const Registro = ({ handleBackClick }) => {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [generosFavoritos, setGenerosFavoritos] = useState([]);

  const handleGeneroChange = (event) => {
    // Obtener el valor (nombre del género) del checkbox seleccionado
    const generoSeleccionado = event.target.value;
    
    // Obtener el número asociado del atributo "data-numero" del checkbox
    const numeroAsociado = parseInt(event.target.dataset.numero, 10);
  
    if (event.target.checked) {
      // Si el checkbox está marcado, agregar el género a la lista de favoritos
      setGenerosFavoritos([...generosFavoritos, { genero: generoSeleccionado, numero: numeroAsociado }]);
    } else {
      // Si el checkbox está desmarcado, remover el género de la lista de favoritos
      setGenerosFavoritos(generosFavoritos.filter((genero) => genero.genero !== generoSeleccionado));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const data = {
      nombre: nombreCompleto,
      correo: correoElectronico,
      contraseña: contrasena,
      generos: generosFavoritos,
    };
  
    try {
      const response = await fetch('/api/usuario', {
        method: 'POST',
        headers: { 'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Error al registrar el usuario');
      }else{
        console.log(response.json)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
   
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="contenedor">
        <h1>Registrate</h1>
        <div className="input-contenedor">
          <i className="fas fa-user icon"></i>
          <input type="text" id="nombreCompleto" placeholder="Nombre de Usuario" value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
          />
        </div>
        <div className="input-contenedor">
          <i className="fas fa-envelope icon"></i>
          <input type="text" id="correoElectronico" placeholder="Correo Electrónico" value={correoElectronico}
            onChange={(e) => setCorreoElectronico(e.target.value)} />
        </div>
        <div className="input-contenedor">
          <i className="fas fa-key icon"></i>
          <input type="password" id="contrasena" placeholder="Contraseña"  value={contrasena}
            onChange={(e) => setContrasena(e.target.value)} />
        </div>

         <h2>Generos favoritos</h2>
        <div className="input-group input-group mb-3">
          <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Accion"
                data-numero="1"
                onChange={handleGeneroChange}
              />
              <label className="checkbox-label" htmlFor="inlineCheckbox1">
                Accion
              </label>
          </div>
          <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="Animacion"
                data-numero="2"
                onChange={handleGeneroChange}
              />
              <label className="checkbox-label" htmlFor="inlineCheckbox2">
                Animacion
              </label>
          </div>
          <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="Comedia"
                data-numero="3"
                onChange={handleGeneroChange}
              />
              <label className="checkbox-label" htmlFor="inlineCheckbox3">
                Comedia
              </label>
          </div>
          <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox4"
                value="Drama"
                data-numero="4"
                onChange={handleGeneroChange}
              />
              <label className="checkbox-label" htmlFor="inlineCheckbox4">
                Drama
              </label>
          </div>
          <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox5"
                value="Fantasia"
                data-numero="5"
                onChange={handleGeneroChange}
              />
              <label className="checkbox-label" htmlFor="inlineCheckbox5">
                Fantasia
              </label>
          </div>
          <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox6"
                value="Terror"
                data-numero="6"
                onChange={handleGeneroChange}
              />
              <label className="checkbox-label" htmlFor="inlineCheckbox6">
                Terror
              </label>
          </div>
          <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox7"
                value="Ciencia Ficcion"
                data-numero="7"
                onChange={handleGeneroChange}
              />
              <label className="checkbox-label" htmlFor="inlineCheckbox7">
                Ciencia Ficcion
              </label>
          </div>

        
        </div> 
        <div className="button-container">
        <button className="button-submit" type="submit" >Registrarse</button>
          <button className="button-back" onClick={handleBackClick}>Volver</button>
        </div>
      </div>
    </form>
  );
};

export default Registro;


