import React, { useState } from 'react';
import Modal from '../modal/modal'; 
import './formulario.css';



const Registro = ({ handleBackClick }) => {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [generosFavoritos, setGenerosFavoritos] = useState([]);
  const [mensajeModal, setMensajeModal] = useState(null);

  const handleGeneroChange = (event) => {
    const generoSeleccionado = parseInt(event.target.value, 10);
  
    if (event.target.checked) {
      setGenerosFavoritos([...generosFavoritos, generoSeleccionado]);
    } else {
      setGenerosFavoritos(generosFavoritos.filter((numero) => numero !== generoSeleccionado));
    }
  };
  
  const handleClose = () => {
    setMensajeModal(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3010/usuario/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({nombre: nombreCompleto, correo: correoElectronico, contraseña: contrasena,  genero: generosFavoritos,}),
      });
    
      if (!response.ok) {
        const errorData = await response.json(); 
        throw new Error(errorData.message); 
        
    }else{
      handleBackClick();
    }} catch (error) {
      console.error('Error:', error);
      setMensajeModal(error.message);
    }
  };
  
  

  return (
    <>
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
                value="1"
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
                value="2"
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
                value="3"
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
                value="4"
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
                value="5"
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
                value="6"
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
                value="7"
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

{mensajeModal && <Modal mensaje={mensajeModal} handleClose={handleClose} />}
</>
  );
};

export default Registro;


