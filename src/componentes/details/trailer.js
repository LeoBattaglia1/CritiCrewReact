import React from 'react';
import YouTube from 'react-youtube';

const Trailers = ({ trailers }) => {
  return (
    <div className="trailers-container">
      <h3>Trailers:</h3>
      {trailers.map((trailer) => (
        <div key={trailer.id} className="trailer">
          <YouTube videoId={trailer.key} opts={{/* Opciones de YouTube */}} />
        </div>
      ))}
    </div>
  );
};

export default Trailers;

