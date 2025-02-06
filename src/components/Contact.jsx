import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <div className="contact-container">
      
      <div className="contact-info">
        <h3>Contact Us 
          <span className="material-symbols-outlined mail-icon" 
                onClick={() => handleIconClick('mail')}>
            mail
          </span>
        </h3>
        <p>Feel free to reach out to us for any inquiries or assistance.</p>
        <ul>
          <li onClick={() => handleIconClick('contact_mail')} className={activeIcon === 'contact_mail' ? 'active' : ''}>
            <span className="material-symbols-outlined">contact_mail</span> contact@windycitylaundry.com
          </li>
          <li onClick={() => handleIconClick('call')} className={activeIcon === 'call' ? 'active' : ''}>
            <span className="material-symbols-outlined">call</span> +1 224-345-67
          </li>
          <li onClick={() => handleIconClick('location_on')} className={activeIcon === 'location_on' ? 'active' : ''}>
            <span className="material-symbols-outlined">location_on</span> 2643 W 19th St, Chicago, IL
          </li>
        </ul>
      </div>

    
      <div className="contact-form">
        <form>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" required />

          <label>Enter Your Message Here</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

          <button type="submit" className="btn">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

