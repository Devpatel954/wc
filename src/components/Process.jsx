import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, SortAsc, Sparkles, Home } from 'lucide-react';
import AnimatedSection, { staggerContainer, fadeUpItem } from './AnimatedSection';
import { Link } from 'react-scroll';

const steps = [
  {
    icon: CalendarCheck,
    title: 'Schedule a Pickup',
    description:
      'Book online or call us to schedule a convenient pickup time at your home, office, or hotel. We work around your schedule.',
  },
  {
    icon: SortAsc,
    title: 'We Collect & Sort',
    description:
      'Our team carefully sorts each item by fabric type, color, and cleaning requirement for optimal results.',
  },
  {
    icon: Sparkles,
    title: 'Professional Cleaning',
    description:
      'Your clothes are cleaned using advanced equipment, premium detergents, and specialized techniques for every fabric type.',
  },
  {
    icon: Home,
    title: 'Delivered to You',
    description:
      'Fresh, clean clothes delivered to your door — neatly folded or hung and wrapped, ready to wear.',
  },
];

const Process = () => (
  <section className="py-24 bg-blue-950 text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full translate-x-1/2 translate-y-1/2" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="text-center mb-16">
        <span className="text-blue-400 font-semibold uppercase tracking-widest text-sm">Simple Process</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">How It Works</h2>
        <p className="text-blue-200 max-w-2xl mx-auto text-lg">
          Getting your laundry done has never been easier — four simple steps and you're done.
        </p>
      </AnimatedSection>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {steps.map(({ icon: Icon, title, description }, index) => (
          <motion.div
            key={title}
            variants={fadeUpItem}
            className="relative text-center group"
          >
            <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-blue-800 border-2 border-blue-600 rounded-2xl flex items-center justify-center text-blue-300 group-hover:bg-blue-600 group-hover:border-blue-400 group-hover:text-white transition-all duration-300">
              <Icon className="w-8 h-8" />
              <span className="absolute -top-3 -right-3 bg-blue-600 group-hover:bg-blue-400 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center transition-colors">
                {index + 1}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
            <p className="text-blue-300 text-sm leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </motion.div>

      <AnimatedSection className="text-center mt-16" delay={0.2}>
        <p className="text-blue-200 mb-5 text-lg">Ready to experience the difference?</p>
        <Link to="contact" smooth offset={-80} duration={500}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-xl"
          >
            Book Your First Pickup — It's Free
          </motion.button>
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default Process;
