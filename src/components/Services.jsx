import React from 'react';
import './Services.css';
import hotellaundry from '../assets/hotellaundry.avif';
import uniform from '../assets/uniform.avif';
import drycleaning from '../assets/drycleaning.avif';

const Services = () => {
  return (
    <div className="services">
     
      <div className="service-container">
        <div className="service">
          <img src={hotellaundry} alt="Hotel Laundry" className="service-image"/>
          <div className="service-description">
            <h3>Hotel Laundry</h3>
            <p>Ensure your guests experience the highest quality with our professional hotel laundry services, tailored to your establishment's needs.</p>
          </div>
        </div>
        <div className="service">
          <img src={uniform} alt="Uniform Laundry" className="service-image"/>
          <div className="service-description">
            <h3>Uniform Laundry</h3>
            <p>We provide crisp, clean uniforms for your team, keeping your business looking professional and organized at all times.</p>
          </div>
        </div>
        <div className="service">
          <img src={drycleaning} alt="Dry Cleaning" className="service-image"/>
          <div className="service-description">
            <h3>Dry Cleaning</h3>
            <p>Experience top-notch dry cleaning for delicate fabrics, ensuring your garments are well cared for and looking brand new.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

