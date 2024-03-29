import React, { useState, useEffect } from "react";
import Modal from "../modal/modal";
import "./comentarios.css";

const Comentarios = ({ idUsuario, movieId }) => {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [mensajeModal, setMensajeModal] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3010/comentario/${movieId}`
        );
        const data = await response.json();
        setComentarios(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [movieId]);

  useEffect(() => {
    if (idUsuario) {
      //busca el nombre del usuario por su id
      fetch(`http://localhost:3010/usuario/${idUsuario}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.nombre) {
            setUsername(data.nombre);
          }
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [idUsuario]);

  const handleClose = () => {
    setMensajeModal(null);
  };

  const enviarComentario = (event) => {
    setNuevoComentario(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3010/comentario/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario_id: idUsuario,
          comentario: `${username}: ${nuevoComentario}`,
          id_pelicula: movieId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setMensajeModal(error.message);
    }

    if (nuevoComentario.trim() !== "") {
      const nuevoComentarioObj = {
        usuario_id: idUsuario,
        comentario: `${username}: ${nuevoComentario}`,
        id_pelicula: movieId,
      };

      setComentarios([...comentarios, nuevoComentarioObj]);
      setNuevoComentario("");
    }
  };

  return (
    <>
      <div className="comentarios">
        <div className="chat">
          <h3>Comentarios</h3>
          {comentarios.length > 0 ? (
            comentarios.map((comentario, index) => (
              <div key={index} className="mensaje">
                • {comentario.comentario}
              </div>
            ))
          ) : (
            <p>No hay comentarios disponibles.</p>
          )}
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
      {mensajeModal && (
        <Modal mensaje={mensajeModal} handleClose={handleClose} />
      )}
    </>
  );
};

export default Comentarios;
