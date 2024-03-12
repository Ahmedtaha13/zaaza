import React from 'react';
import Filter from './Filter'; 


const Filter = ({ onFilterChange }) => {
  const [title, setTitle] = React.useState('');
  const [rating, setRating] = React.useState(0);

  const handleFilterChange = () => {
    onFilterChange(title, rating);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        min={0}
        max={10}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={handleFilterChange}>Filter</button>
    </div>
  );
};

export default Filter;