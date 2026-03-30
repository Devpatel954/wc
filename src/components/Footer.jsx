import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYelp } from 'react-icons/fa';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import logo from '../assets/logo.webp';

const footerServices = [
  { label: 'Hotel & Hospitality Laundry', slug: 'hotel-laundry' },
  { label: 'Corporate Uniform Laundry', slug: 'uniform-laundry' },
  { label: 'Expert Dry Cleaning', slug: 'dry-cleaning' },
  { label: 'Residential Laundry', slug: null },
  { label: 'Stain Removal Specialists', slug: null },
  { label: 'Free Pickup & Delivery', slug: null },
];

const Footer = () => (
  <footer className="bg-gray-950 text-gray-400">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


        <div className="lg:col-span-1">
          <RouterLink to="/">
            <img src={logo} alt="Windy City Laundry" className="h-12 w-auto mb-4 brightness-0 invert" />
          </RouterLink>
          <p className="text-sm leading-relaxed mb-2">
            Chicago's premier laundry and dry cleaning service since 2009.
          </p>
          <p className="text-sm leading-relaxed mb-6">
            Trusted by thousands of households, hotels, and businesses throughout the greater Chicago area.
          </p>
          <div className="flex gap-3">
            {[
              { icon: <FaFacebook className="w-4 h-4" />, href: '#', label: 'Facebook' },
              { icon: <FaInstagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
              { icon: <FaTwitter className="w-4 h-4" />, href: '#', label: 'Twitter' },
              { icon: <FaLinkedin className="w-4 h-4" />, href: '#', label: 'LinkedIn' },
              { icon: <FaYelp className="w-4 h-4" />, href: '#', label: 'Yelp' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: 'Home', to: '/', isRouter: true },
              { label: 'Our Services', to: '/#services', isRouter: true },
              { label: 'About Us', to: '/#about', isRouter: true },
              { label: 'Testimonials', to: '/#testimonials', isRouter: true },
              { label: 'FAQ', to: '/#faq', isRouter: true },
              { label: 'Contact Us', to: '/#contact', isRouter: true },
            ].map((link) => (
              <li key={link.label}>
                <RouterLink
                  to={link.to}
                  className="text-sm hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span className="text-blue-500">›</span> {link.label}
                </RouterLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Our Services</h4>
          <ul className="space-y-3">
            {footerServices.map((s) => (
              <li key={s.label}>
                {s.slug ? (
                  <RouterLink
                    to={`/services/${s.slug}`}
                    className="text-sm hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span className="text-blue-500">›</span> {s.label}
                  </RouterLink>
                ) : (
                  <span className="text-sm inline-flex items-center gap-1 cursor-default">
                    <span className="text-blue-500">›</span> {s.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <span>2643 W 19th St, Chicago, IL 60608</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <a href="tel:+12243456789" className="hover:text-white transition-colors">(224) 345-6789</a>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <a href="mailto:info@windycitylaundry.com" className="hover:text-white transition-colors break-all">
                info@windycitylaundry.com
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <Clock className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <span>
                Mon–Fri: 6:00am – 9:00pm<br />
                Sat: 7:00am – 8:00pm<br />
                Sun: 8:00am – 5:00pm
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Windy City Laundry LLC. All Rights Reserved.
        </p>
        <div className="flex gap-4 text-xs">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

