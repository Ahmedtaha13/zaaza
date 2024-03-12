import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onFilterChange }) => {
  return (
    <div className="movie-list">
      <Filter onFilterChange={onFilterChange} />
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;