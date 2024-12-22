import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../data';
import { Link } from 'react-router-dom';
import '../index.css'; // Add this line to import CSS

const MovieDetailsPage = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <h1>{movie.title} ({movie.year})</h1>
      <p>{movie.summary}</p>
      <div className="iframe-container">
        <iframe
          src={movie.trailer}
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link to={`/movie/${movie.id}`}>Read More</Link>
    </div>
  );
};

export default MovieDetailsPage;
