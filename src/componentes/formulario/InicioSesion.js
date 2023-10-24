import React, { useState } from 'react';
import Modal from '../modal/modal'; 
import './formulario.css';


const InicioSesion = ({ handleBackClick, handleSetUserId }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensajeModal, setMensajeModal] = useState(null);
    
  const handleClose = () => {
    setMensajeModal(null);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const response = await fetch('http://localhost:3010/usuario/autenticar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo: email, contraseña: password }),
      });

      const data = await response.json();
      if (data.message) {
     
        setMensajeModal(data.message);
      } else {
        handleSetUserId(data)
        handleBackClick();
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="contenedor">
        <h1>Iniciar sesión</h1>
        <div className="input-contenedor">
          <i className="fa-solid fa-envelope icon"></i>
          <input type="text" placeholder="Correo Electronico" value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="input-contenedor">
          <i className="fa-solid fa-key icon"></i>
          <input type="password" placeholder="Contraseña" value={password}
          onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="button-container">
          <button className="button-submit" type="submit">Entrar</button>
          <button className="button-back" onClick={handleBackClick}>Volver</button>
        </div>   
      </div>
    </form>
        
    {mensajeModal && <Modal mensaje={mensajeModal} handleClose={handleClose} />}
      
    </>
    
  );
};

export default InicioSesion;