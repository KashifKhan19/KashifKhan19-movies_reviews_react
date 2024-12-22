import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { movies } from '../data';
import MovieList from '../components/MovieList';
import '../index.css';

const GenreSelector = () => {
    const [selectedGenre, setSelectedGenre] = useState('Action');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items per page

    const pageDescription = "Explore a curated collection of movies across genres like Action, Adventure, Drama, and more. Discover movie details, trailers, and reviews. Stay updated with the latest releases. Your ultimate movie destination."

    const handleGenreSelect = (genre) => {
        setSelectedGenre(genre);
        setCurrentPage(1); // Reset to first page when genre changes
    };

    // Filtered movies based on selected genre
    const filteredMovies = selectedGenre
        ? movies.filter((movie) => movie.genres.includes(selectedGenre)).sort((a, b) => b.year - a.year)
        : [];

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredMovies.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);

    // Pagination functions
    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Function to generate array of page numbers to display
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5; // Maximum number of visible page numbers

        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage < maxVisiblePages - 1) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        if (startPage > 1) {
            pageNumbers.push(1);
            if (startPage > 2) {
                pageNumbers.push('...');
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pageNumbers.push('...');
            }
            pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };

    return (
        <div className="genre-selector">
            <Helmet>
                <title>{selectedGenre} Movies - J&K Movies</title>
                <meta name="description" content={pageDescription} />
            </Helmet>
            <h2>Select a Genre</h2>
            <div className="genre-buttons">
                {/* Genre buttons */}
                {['Action', 'Adventure', 'Thriller', 'Biography', 'Drama', 'History', 'Sci-Fi', 'Comedy', 'Fantasy', 'Romance', 'Mystery', 'Horror'].map((genre) => (
                    <button
                        key={genre}
                        className={`genre-button ${selectedGenre === genre ? 'active' : ''}`}
                        onClick={() => handleGenreSelect(genre)}
                    >
                        {genre}
                    </button>
                ))}
            </div>
            <MovieList movies={currentItems} />
            {/* Pagination */}
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                {getPageNumbers().map((page, index) => (
                    <button
                        key={index}
                        onClick={() => typeof page === 'number' ? goToPage(page) : null}
                        className={currentPage === page ? 'active' : ''}
                    >
                        {page}
                    </button>
                ))}
                <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default GenreSelector;
