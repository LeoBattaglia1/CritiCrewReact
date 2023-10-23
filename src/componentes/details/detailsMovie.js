import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import './detailsMovie.css';
import Comentarios from '../comentarios/comentarios';
import Puntuacion from '../puntuacion/puntuacion';

const DetailsMovie = ({ movie, handleBackClick }) => {
  const { title, overview } = movie;
  const [trailerId, setTrailerId] = useState(null);
  const [verMas, setVerMas] = useState(false);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const apiKey = '83bc0d3d812780eff004a2baed4eaf17';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}`
        );
        const trailerData = response.data;
        const trailer = trailerData.results.find((result) => result.site === 'YouTube');
        if (trailer) {
          setTrailerId(trailer.key);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrailer();
  }, [movie.id]);

  const handleToggleOverview = () => {
    setVerMas(!verMas);
  };

  return (
    <div className='detalle'>
      <div className='trailer'>
        <YouTube videoId={trailerId} opts={{ width: '500px', height: '350px' }} />
        <button className="volver" onClick={handleBackClick}> ← Volver</button>
      </div>

      <div className='contenido'>
        <h2>{title}</h2>
        <p>
          <strong>Sinopsis:</strong>{' '}
          {verMas ? overview : `${overview?.slice(0, 150)}...`}
          {overview && overview.length > 300 && (
            <a href="#!" onClick={handleToggleOverview}>
              {verMas ? 'Ver menos' : 'Ver más'}
            </a>
          )}
        </p>
        <div className="puntuacion">
          <Puntuacion />
        </div>
      </div>

      <div className="chatComentarios">
        <Comentarios />
      </div>
      
    </div>
  );
};

export default DetailsMovie;
