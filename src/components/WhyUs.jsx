import React from 'react';
import { motion } from 'framer-motion';
import { Package, Clock, Leaf, ShieldCheck, DollarSign, Users } from 'lucide-react';
import AnimatedSection, { staggerContainer, fadeUpItem } from './AnimatedSection';

const features = [
  {
    icon: Package,
    title: 'Free Pickup & Delivery',
    description:
      'We come to you. Schedule a free pickup and delivery anywhere in Chicago — zero hassle, zero extra cost.',
    color: 'blue',
  },
  {
    icon: Clock,
    title: '24-Hour Turnaround',
    description:
      'Urgent laundry? We offer same-day and next-day turnaround for most services so you never wait too long.',
    color: 'indigo',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Cleaning',
    description:
      'Biodegradable detergents, water-saving machines, and green packaging to protect our planet without compromise.',
    color: 'green',
  },
  {
    icon: ShieldCheck,
    title: '100% Satisfaction Guarantee',
    description:
      "Not happy? We'll re-clean your items at no extra charge. Your satisfaction is our top priority, always.",
    color: 'blue',
  },
  {
    icon: DollarSign,
    title: 'Affordable Transparent Pricing',
    description:
      'No hidden fees. Competitive rates with flexible plans for individuals, families, and business clients.',
    color: 'indigo',
  },
  {
    icon: Users,
    title: 'Expert Trained Staff',
    description:
      'Our team undergoes rigorous training in fabric care, stain removal, and customer service — every item handled with expertise.',
    color: 'green',
  },
];

const colorMap = {
  blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
  indigo: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
  green: 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
};

const WhyUs = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="text-center mb-16">
        <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">Why Choose Us</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
          The Windy City Difference
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          We go beyond just washing clothes — here's what makes us the trusted choice across Chicago.
        </p>
      </AnimatedSection>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {features.map(({ icon: Icon, title, description, color }) => (
          <motion.div
            key={title}
            variants={fadeUpItem}
            whileHover={{ y: -4 }}
            className="group p-7 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300 hover:shadow-lg cursor-default"
          >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${colorMap[color]}`}>
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhyUs;
