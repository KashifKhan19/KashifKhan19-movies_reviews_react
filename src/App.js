import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import SearchPage from './pages/SearchPage';
import AboutUs from './pages/AboutUs'; 
import GenreSelector from './pages/GenreSelector';
import Footer from './pages/Footer';
import logoImage from './Sitelogo.png';

const App = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const openAboutModal = () => {
    setIsAboutOpen(true);
  };

  const closeAboutModal = () => {
    setIsAboutOpen(false);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul className="nav-list">
            <li className="nav-item-left">
              <Link to="/"><img src={logoImage} alt="Logo" className="nav-logo" /></Link>
            </li>
            <li className="nav-item-center">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/search" className="nav-link">Search</Link>
              <Link to="/genres" className="nav-link">Genres</Link>
              <button onClick={openAboutModal} className="nav-link-button">About Us</button>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/genres" element={<GenreSelector />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
        <AboutUs isOpen={isAboutOpen} onRequestClose={closeAboutModal} />
      </div>
    </Router>
  );
};

export default App;
