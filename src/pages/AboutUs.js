import React from 'react';
import Modal from 'react-modal';
import '../index.css';

Modal.setAppElement('#root'); // Set the app element to avoid accessibility issues

const AboutUs = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="About Us"
      className="about-modal"
      overlayClassName="about-overlay"
    >
      <h2>About Us</h2>
      <p>
        Welcome to Mr J&K Tech! We are passionate about creating innovative solutions through apps, websites, and GIS-related projects. Our mission is to blend cutting-edge technology with creative design to meet your needs effectively.
      </p>
      <p>
        For any inquiries or to report a problem, please feel free to contact us through our social media channels:
      </p>
      <div className="social-icons">
        <a href="https://www.tiktok.com/@mr.j.k.tech?_t=8njlHrN9nT0&_r=1" 
           target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-tiktok"></i></a>
        <a href="https://www.instagram.com/mrjktech?igsh=MTJ5YnBtZ2R3c3d0bw==" 
           target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
        <a href="https://youtube.com/@mrjktech20?si=VLuc7Zbt5_fZtN1a" 
           target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-youtube"></i></a>
      </div>
      
      <button onClick={onRequestClose} className="close-button">Close</button>
    </Modal>
  );
};

export default AboutUs;
