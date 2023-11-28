import React, { useState, useEffect } from "react";
import Modal from "../modal/modal";
import "./puntuacion.css";

const Puntuacion = ({ idUsuario, movieId }) => {
  const [puntuacion, setPuntuacion] = useState(1);
  const [mensajeModal, setMensajeModal] = useState(null);
  const [calificacion, setCalificacion] = useState(Number);

  const handleClose = () => {
    setMensajeModal(null);
  };

  useEffect(() => {
    fetch(`http://localhost:3010/puntuacion/${movieId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCalificacion(data);
      });
  }, [movieId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3010/puntuacion/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario_id: idUsuario,
          puntuacion,
          id_pelicula: movieId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      } else {
        setMensajeModal("Su puntuacion fue cargada exitosamente");

        // Actualizar la calificación después de enviar la puntuación
        const calificacionResponse = await fetch(
          `http://localhost:3010/puntuacion/${movieId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const calificacionData = await calificacionResponse.json();
        setCalificacion(calificacionData);
      }
    } catch (error) {
      console.error("Error:", error);
      setMensajeModal(error.message);
    }
  };

  return (
    <>
      <div className="rating-container">
        <h3>Califica esta película</h3>
        <form onSubmit={handleSubmit}>
          <div className="rating-inputs">
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              className="slider"
              id="ratingSlider"
              value={puntuacion}
              onChange={(e) => setPuntuacion(e.target.value)}
            />
          </div>

          <div className="button">
            <button type="submit" className="vote">
              Votar
            </button>
          </div>
        </form>
      </div>
      <h3 className="centered-text">
        {" "}
        {calificacion !== null
          ? calificacion === 0
            ? "Aun no ha sido calificada"
            : "Calificacion promedio: " + calificacion
          : ""}
      </h3>

      {mensajeModal && (
        <Modal mensaje={mensajeModal} handleClose={handleClose} />
      )}
    </>
  );
};

export default Puntuacion;
