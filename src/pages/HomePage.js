import React, { useState } from 'react';
import { movies } from '../data';
import MovieList from '../components/MovieList';
import '../index.css'; // Add this line to import CSS
import { Helmet } from 'react-helmet';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5;

  const pageTitle = "J&K Movies - Your Ultimate Movie Destination";
  const pageDescription = "Discover the latest movies in various genres. Watch trailers, read reviews, and stay updated with J&K Movies.";


  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  // Display up to 5 page numbers centered around the current page
  const maxPageButtons = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  let endPage = Math.min(
    startPage + maxPageButtons - 1,
    Math.ceil(movies.length / moviesPerPage)
  );

  if (endPage - startPage + 1 < maxPageButtons) {
    startPage = Math.max(1, endPage - maxPageButtons + 1);
  }

  const displayedPages = pageNumbers.slice(startPage - 1, endPage);

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <MovieList movies={currentMovies} />
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
        )}
        {displayedPages.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={number === currentPage ? 'active' : ''}
          >
            {number}
          </button>
        ))}
        {currentPage < Math.ceil(movies.length / moviesPerPage) && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
