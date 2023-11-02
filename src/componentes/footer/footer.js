import React, { useState, useEffect } from "react";
import "./footer.css";
import instagram from "../../imagenes/instagram.png";
import facebook from "../../imagenes/facebook.png";
import x from "../../imagenes/x.png";

const Footer = ({ id }) => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // Verificar si hay un ID de usuario disponible

    fetch(`http://localhost:3010/usuario/${id}`, {
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
  }, [id]);

  return (
    <footer>
      <div className="copy">
        <p>&copy; 2023 CritiCrew Todos los derechos reservados.</p>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="#">Términos y condiciones</a>
          </li>
          <li>
            <a href="#">Ayuda</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Acerca de</a>
          </li>
        </ul>
      </div>

      {id && (
        <div className="nombre">
          <p>¡Hola, {username}!</p>
        </div>
      )}

      <a
        className="instagram"
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="logoRedes" src={instagram} alt="Instagram" />
      </a>
      <a
        className="facebook"
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="logoRedes" src={facebook} alt="facebook" />
      </a>
      <a
        className="x"
        href="https://www.x.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="logoRedes" src={x} alt="x" />
      </a>
    </footer>
  );
};

export default Footer;
