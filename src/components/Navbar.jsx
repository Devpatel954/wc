import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/logo.webp';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Services', to: 'services' },
  { label: 'About Us', to: 'about' },
  { label: 'Testimonials', to: 'testimonials' },
  { label: 'FAQ', to: 'faq' },
  { label: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const alwaysSticky = !isHome;

  const navBg = alwaysSticky || sticky
    ? 'bg-white/97 backdrop-blur-md shadow-lg shadow-black/5'
    : 'bg-transparent';
  const textColor = alwaysSticky || sticky ? 'text-gray-600' : 'text-white/90';
  const logoFilter = alwaysSticky || sticky ? '' : 'brightness-0 invert';

  const NavItem = ({ link }) => {
    const cls = `cursor-pointer block px-3 py-2 font-medium text-sm rounded-lg transition-colors hover:bg-blue-50 hover:text-blue-600 ${textColor} ${!isHome && !sticky ? 'hover:bg-blue-50' : ''}`;
    if (isHome) {
      return (
        <ScrollLink to={link.to} smooth offset={-80} duration={500} className={cls}>
          {link.label}
        </ScrollLink>
      );
    }
    return (
      <RouterLink to={`/#${link.to}`} className={cls}>
        {link.label}
      </RouterLink>
    );
  };

  const BookButton = ({ mobile = false }) => {
    const cls = mobile
      ? 'w-full bg-blue-600 text-white py-3 rounded-full font-bold text-sm'
      : 'bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-colors shadow-md';
    if (isHome) {
      return (
        <ScrollLink to="contact" smooth offset={-80} duration={500}>
          <motion.button whileHover={!mobile ? { scale: 1.04 } : {}} whileTap={{ scale: 0.97 }} className={cls}>
            Request a Quote
          </motion.button>
        </ScrollLink>
      );
    }
    return (
      <RouterLink to="/#contact">
        <motion.button whileHover={!mobile ? { scale: 1.04 } : {}} whileTap={{ scale: 0.97 }} className={cls}>
          Request a Quote
        </motion.button>
      </RouterLink>
    );
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <RouterLink to="/" className="cursor-pointer flex-shrink-0">
            <img
              src={logo}
              alt="Windy City Laundry"
              className={`h-14 md:h-16 w-auto transition-all duration-300 ${logoFilter}`}
            />
          </RouterLink>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavItem link={link} />
              </li>
            ))}
            <li className="ml-2 hidden lg:flex items-center gap-1.5 text-sm font-medium">
              <Phone className={`w-3.5 h-3.5 ${alwaysSticky || sticky ? 'text-blue-600' : 'text-blue-300'}`} />
              <a
                href="tel:+12243456789"
                className={`${alwaysSticky || sticky ? 'text-gray-700' : 'text-white/90'} hover:text-blue-600 transition-colors font-semibold`}
              >
                (224) 345-6789
              </a>
            </li>
            <li className="ml-3">
              <BookButton />
            </li>
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            className={`md:hidden p-2 rounded-lg transition-colors ${
              alwaysSticky || sticky ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <ul className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  {isHome ? (
                    <ScrollLink
                      to={link.to}
                      smooth
                      offset={-80}
                      duration={500}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2.5 px-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors text-sm"
                    >
                      {link.label}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={`/#${link.to}`}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2.5 px-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                    >
                      {link.label}
                    </RouterLink>
                  )}
                </li>
              ))}
              <li className="flex items-center gap-2 py-2 px-3 text-gray-600 text-sm font-medium">
                <Phone className="w-4 h-4 text-blue-600" />
                <a href="tel:+12243456789" className="hover:text-blue-600">(224) 345-6789</a>
              </li>
              <li className="pt-2">
                <BookButton mobile />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;




