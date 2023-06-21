import React, { useState } from 'react';
import './comentarios.css';

const Comentarios = () => {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState('');

  const enviarComentario = (event) => {
    setNuevoComentario(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nuevoComentario.trim() !== '') {
      setComentarios([...comentarios, nuevoComentario]);
      setNuevoComentario('');
    }
  };

  return (
    <div className="comentarios">
      <div className="chat">
        <h3>Comentarios</h3>
      <p>• Es muy mala, al final el tipo mata a la mujer.</p>
      <p>• Gracias por contar el final. Payaso.</p>
        {comentarios.map((comentario, index) => (
          <div key={index} className="mensaje">
           • {comentario}
          </div>
        ))}
        
      </div>
 
      <form className="formulario-comentario" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe un comentario"
          value={nuevoComentario}
          onChange={enviarComentario}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Comentarios;
