import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import About from '../components/About';
import Process from '../components/Process';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => (
  <div className="overflow-x-hidden">
    <Navbar />
    <Hero />
    <Services />
    <WhyUs />
    <About />
    <Process />
    <Testimonial />
    <FAQ />
    <Contact />
    <Footer />
  </div>
);

export default Home;
