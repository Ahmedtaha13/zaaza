import React, { useState } from 'react';
import MovieList from './MovieList';
import MovieCard from './MovieCard';
import Filter from './Filter';


  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = (title, rating) => {
    // Filter movies based on title and rating
    const filtered = movies.filter((movie) => {
      const titleMatch = movie.title.toLowerCase().includes(title.toLowerCase());
      const ratingMatch = movie.rating >= rating;
      return titleMatch && ratingMatch;
    });
    setFilteredMovies(filtered);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <MovieList movies={filteredMovies} onFilterChange={handleFilterChange} />
    </div>
  );
};

export default App;