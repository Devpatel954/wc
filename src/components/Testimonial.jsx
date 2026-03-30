import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import AnimatedSection, { staggerContainer, fadeUpItem } from './AnimatedSection';
import user1 from '../assets/user1.webp';
import user2 from '../assets/usser2.webp';
import user3 from '../assets/user3.webp';

const testimonials = [
  {
    img: user1,
    name: 'Jane Smith',
    location: 'Chicago, IL',
    role: 'Hotel Manager',
    rating: 5,
    text: '"I have been using Windy City Laundry for months and the service is exceptional. They handle every delicate item with care and the turnaround is incredibly fast. Highly recommended!"',
  },
  {
    img: user2,
    name: 'Emily Johnson',
    location: 'Chicago, IL',
    role: 'Restaurant Owner',
    rating: 5,
    text: '"The team at Windy City Laundry made laundry day completely hassle-free. Fast, professional, and the results are always spotless. Attention to detail is truly unmatched!"',
  },
  {
    img: user3,
    name: 'John Doe',
    location: 'Chicago, IL',
    role: 'Corporate Client',
    rating: 5,
    text: '"I trust Windy City Laundry with all our uniform needs. Reliable, efficient, and they always exceed expectations. It\'s great to have a service we can count on week after week!"',
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

const Testimonial = () => (
  <section id="testimonials" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="text-center mb-16">
        <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">Testimonials</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">
          Thousands of satisfied customers across Chicago trust us every week.
        </p>
      </AnimatedSection>

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={fadeUpItem}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
          >
            <Stars count={t.rating} />
            <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">{t.text}</p>
            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100" />
              <div>
                <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                <div className="text-xs text-blue-600 font-medium">{t.role}</div>
                <div className="text-xs text-gray-400">{t.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatedSection className="mt-16 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm" delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '2,500+', label: 'Reviews Online' },
            { value: '10K+', label: 'Happy Customers' },
            { value: '99%', label: 'Repeat Business' },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-3xl font-extrabold text-blue-600">{item.value}</div>
              <div className="text-sm text-gray-500 mt-1 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Testimonial;

