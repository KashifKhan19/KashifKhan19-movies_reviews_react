import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure CSS is properly imported

const MovieCard = ({ movie }) => {
  // Splitting genres into an array if it's a string
  const genres = typeof movie.genres === 'string' ? movie.genres.split(', ') : movie.genres;

  return (
    <div className="movie-card">
      <h3>{movie.title} ({movie.year})</h3>
      <h4>Genres: {genres.join(', ')}</h4> {/* Displaying genres as a comma-separated list */}
      <p>{movie.summary}</p>
      <iframe
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieCard;
