import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.webp';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

   
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={`container ${sticky ? 'navd' : ''}`}>
            <img src={logo} alt="Logo" className='logo' />
            <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <li><Link to='hero container' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Home</Link></li>
                <li><Link to='services' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Services</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={closeMenu}>About Us</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Testimonials</Link></li>
                <li>
                    <Link to="contact-container" smooth={true} offset={-260} duration={500} onClick={closeMenu}>
                        <button className={`btn ${sticky ? 'btn-sticky' : ''}`}>Contact Us</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;





