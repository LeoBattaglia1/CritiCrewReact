import React from "react";
import "./menu.css";

const Menu = ({ genres, handleGenreClick }) => {
  return (
    <div className="genre-cord">
      <h3>Generos:</h3>
      {genres.map((genre) => (
        <button key={genre.id} onClick={() => handleGenreClick(genre.id)}>
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default Menu;
