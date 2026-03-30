import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import about from '../assets/about.jpg';

const highlights = [
  'State-of-the-art cleaning equipment',
  'Eco-friendly, biodegradable detergents',
  'Free pickup & delivery across Chicago',
  'Insured and bonded professionals',
  '24-hour turnaround for most items',
  'Specialized care for delicate fabrics',
];

const stats = [
  { number: '15+', label: 'Years in Business' },
  { number: '10K+', label: 'Garments Cleaned Daily' },
  { number: '500+', label: 'Business Clients' },
];

const About = () => (
  <section id="about" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection direction="right">
          <div className="relative">
            <motion.img
              src={about}
              alt="Windy City Laundry facility"
              className="rounded-2xl w-full h-auto object-cover shadow-2xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-5 -right-5 bg-blue-600 text-white rounded-2xl p-5 shadow-xl hidden md:block"
            >
              <div className="text-4xl font-extrabold leading-none">15+</div>
              <div className="text-xs text-blue-100 mt-1 font-medium">Years of Excellence</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-5 -left-5 bg-white rounded-2xl p-4 shadow-xl hidden md:block border border-gray-100"
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-gray-700">Open 7 Days a Week</span>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.1}>
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">About Us</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight">
            The Professional Approach to{' '}
            <span className="text-blue-600">Laundry</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-4">
            At Windy City Laundry, we take pride in providing exceptional laundry services tailored to the needs of our clients. Every garment is treated with the utmost care by our dedicated team.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Our state-of-the-art facilities and advanced techniques handle all types of laundry with precision — delicate fabrics, tough stains, or bulk orders — with outstanding results every time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-600 text-sm font-medium">{h}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-blue-600">{s.number}</div>
                <div className="text-xs text-gray-500 mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default About;
