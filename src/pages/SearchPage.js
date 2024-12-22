import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { movies } from '../data';
import MovieList from '../components/MovieList';
import '../index.css'; // Add this line to import CSS

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const pageDescription = "Find your favorite movies by searching through our extensive collection. J&K Movies offers a wide selection of films to explore.";

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-page">
      <Helmet>
        <title>Search Movies - J&K Movies</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default SearchPage;
