import React from "react";
import "./modal.css";

const Modal = ({ mensaje, handleClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{mensaje}</p>
        <button className="close-button" onClick={handleClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
