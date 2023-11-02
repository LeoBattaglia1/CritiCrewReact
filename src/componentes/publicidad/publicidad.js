/* eslint-disable jsx-a11y/img-redundant-alt */

import "./publicidad.css";
import coca from "../../imagenes/cocacola.jpg";
import mcdonals from "../../imagenes/mcdonals.jpg";
import ypf from "../../imagenes/ypf.jpg";

const Publicidad = () => {
  const images = [coca, ypf, mcdonals];
  const urls = [
    "https://www.coca-cola.com.ar/",
    "https://www.ypf.com",
    "https://www.mcdonalds.com.ar/",
  ];

  return (
    <div className="publicidad-container">
      {images.map((image, index) => (
        <a
          key={index}
          href={urls[index]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="publicidad-item">
            <img
              src={image}
              alt={`Image ${index}`}
              style={{ height: "250px" }}
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Publicidad;
