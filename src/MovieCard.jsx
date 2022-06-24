import React from "react";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img
          src={
            Poster !== "N/A"
              ? Poster
              : "https://via.placeholder.com/400"
          }
          alt={Title}
        />
      </div>

      <div>
        <span>{Title}</span>
        <h3>{Type}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
