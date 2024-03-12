import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <span>Rating: {movie.rating}</span>
      </div>
    </div>
  );
};

export default MovieCard;