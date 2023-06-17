import React from 'react';
import './footer.css';


const Footer = () => {
  return (
    <footer>
          
      <div className="copy">
        <p>&copy; 2023 CritiCrew Todos los derechos reservados.</p>
      </div>
      <div className="links">
        <ul>
          <li><a href="#">Términos y condiciones</a></li>
          <li><a href="#">Ayuda</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Redes</a></li>
          <li><a href="#">Acerca de</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
