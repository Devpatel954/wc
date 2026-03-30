import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { staggerContainer, fadeUpItem } from './AnimatedSection';
import AnimatedSection from './AnimatedSection';
import { Link as RouterLink } from 'react-router-dom';
import hotellaundry from '../assets/hotellaundry.avif';
import uniform from '../assets/uniform.avif';
import drycleaning from '../assets/drycleaning.avif';

const services = [
  {
    image: hotellaundry,
    title: 'Hotel & Hospitality Laundry',
    badge: 'Most Popular',
    slug: 'hotel-laundry',
    description:
      'Reliable, high-volume laundry solutions for hotels, resorts, and bed & breakfasts across Chicago — consistent quality with every delivery.',
    features: [
      'Bed linens, towels & table linen',
      'Same-day & next-day turnaround',
      'Custom folding to your brand standards',
      'Dedicated account manager',
    ],
  },
  {
    image: uniform,
    title: 'Corporate Uniform Laundry',
    badge: 'Business Accounts',
    slug: 'uniform-laundry',
    description:
      'Keep your team looking sharp and professional. We handle workwear for restaurants, healthcare, manufacturing, security, and more.',
    features: [
      'Color-safe & emblem-protective wash',
      'Scheduled weekly or bi-weekly routes',
      'Sorted & labeled per employee',
      'Volume discounts for large teams',
    ],
  },
  {
    image: drycleaning,
    title: 'Expert Dry Cleaning',
    badge: 'Premium Service',
    slug: 'dry-cleaning',
    description:
      'Specialist-grade dry cleaning for suits, formal wear, delicate fabrics, and garments that demand professional solvent care.',
    features: [
      'Suits, blazers & formal gowns',
      'Wedding dresses & occasion wear',
      'Cashmere, wool & silk garments',
      'Express 24-hour service available',
    ],
  },
];

const Services = () => (
  <section id="services" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="text-center mb-16">
        <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">Our Services</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
          Professional Cleaning for Every Need
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          From hotel linen operations to individual dry cleaning — we deliver consistent, professional results with free pickup and delivery throughout Chicago.
        </p>
      </AnimatedSection>

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeUpItem}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col"
          >
            <div className="relative overflow-hidden h-56">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                {service.badge}
              </span>
            </div>
            <div className="p-7 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
              <ul className="space-y-2 flex-1">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <RouterLink to={`/services/${service.slug}`}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-full font-semibold text-sm transition-colors duration-200"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </motion.button>
              </RouterLink>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Services;


