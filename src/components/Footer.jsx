import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.webp'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="footer-logo-img" />
          <p>&copy; 2025 Windy City Laundry. All Rights Reserved.</p>
          <p className="footer-tagline">Dev Solutions: Empowering Innovation, One Line of Code at a Time.</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#program">Program</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#testimonial">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li><span>📞</span> +1 224-345-6789</li>
            <li><span>📧</span> contact@windycitylaundry.com</li>
            <li><span>📍</span> 2643 W 19th St, Chicago, IL</li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
