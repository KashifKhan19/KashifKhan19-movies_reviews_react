import React from 'react';
import '../index.css';

const Footer = () => {
  return (
    <footer >
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.tiktok.com/@mr.j.k.tech?_t=8njlHrN9nT0&_r=1" 
             target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-tiktok"></i></a>
          <a href="https://www.instagram.com/mrjktech?igsh=MTJ5YnBtZ2R3c3d0bw==" 
             target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="https://youtube.com/@mrjktech20?si=VLuc7Zbt5_fZtN1a" 
             target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-youtube"></i></a>
        </div>
        <p>&copy; 2024 J&K's Movie Reviews. All rights reserved.</p>
        <p>By J&K Tech</p>
      </div>
    </footer>
  );
};

export default Footer;