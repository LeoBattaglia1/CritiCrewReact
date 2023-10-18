import React from 'react';
import './footer.css';
import instagram from '../../imagenes/instagram.png';
import facebook from '../../imagenes/facebook.png';
import x from '../../imagenes/x.png';

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
              <li><a href="#">Acerca de</a></li>
            </ul>
          </div>

          <a className="instagram" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img className="logoRedes" src={instagram} alt="Instagram" />
          </a>
          <a className="facebook" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img className="logoRedes" src={facebook} alt="facebook" />
          </a>
          <a className="x" href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <img className="logoRedes" src={x} alt="x" />
          </a>

    </footer>
  );
};

export default Footer;
