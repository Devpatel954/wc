import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Chicago's Premier <br />Dry Cleaning Services</h1>
            <p>Experience top-notch laundry services with a commitment to quality and excellence. Fast, reliable, and affordable solutions!</p>
            <Link to="contact-container" smooth={true} offset={-260} duration={500}>
              <button className='btn'>Get Free Quote</button>
            </Link>
        </div>
    </div>
  );
}

export default Hero;
