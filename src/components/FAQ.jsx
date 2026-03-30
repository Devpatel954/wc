import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import AnimatedSection, { staggerContainer, fadeUpItem } from './AnimatedSection';

const faqs = [
  {
    q: 'How does the free pickup and delivery work?',
    a: 'Simply book a pickup through our contact form or call us directly. We\'ll schedule a convenient time to collect your laundry at your home, office, or hotel — completely free within our service area. Once cleaned, we deliver it back to your door.',
  },
  {
    q: 'What is your turnaround time?',
    a: 'Our standard turnaround is 48 hours. We also offer a 24-hour express service for an additional fee. For hotel and bulk orders, we work to your schedule and can accommodate same-day processing for regular clients.',
  },
  {
    q: 'How do you handle delicate or special-care items?',
    a: 'Every item is inspected and sorted by fabric type before cleaning. Delicate items — silk, cashmere, embroidered pieces, beaded garments — are hand-cleaned or dry cleaned using specialized solvents and techniques. We follow every care label instruction precisely.',
  },
  {
    q: 'Are your cleaning products safe for sensitive skin?',
    a: 'Yes! We offer hypoallergenic and fragrance-free detergent options at no extra cost. All our detergents are biodegradable, non-toxic, and dermatologist-approved. Just let us know your preference when booking.',
  },
  {
    q: 'What if I\'m not satisfied with the results?',
    a: 'We offer a 100% satisfaction guarantee. If you\'re not happy with the results, just contact us within 24 hours of delivery and we\'ll re-clean your items at absolutely no charge. Your satisfaction is our top priority.',
  },
  {
    q: 'How do you price your services?',
    a: 'Our pricing is per-pound for wash & fold and hotel laundry, and per-item for dry cleaning and ironing. There are no hidden fees. Minimum order is $25. Contact us for a full price list.',
  },
  {
    q: 'Do you serve areas outside Chicago?',
    a: 'We currently serve Chicago and surrounding suburbs including Evanston, Oak Park, Cicero, Berwyn, and communities within approximately a 25-mile radius. Contact us to check if your area is covered.',
  },
  {
    q: 'Are my clothes insured while in your care?',
    a: 'Yes. All garments in our care are fully insured. In the rare event of damage or loss, we handle each claim promptly and fairly based on the item\'s current market value. We take full responsibility for every item entrusted to us.',
  },
  {
    q: 'Do you offer subscription or recurring plans?',
    a: 'Yes! We offer weekly and bi-weekly subscription plans for both residential and business clients. Subscribers get priority scheduling, free express service once a month, and up to 15% off standard rates. Contact us to set up a plan.',
  },
  {
    q: 'How do I track my laundry order?',
    a: 'After your order is placed, you\'ll receive a confirmation with an order number. Use the Order Tracking section on this page to check your status in real time — from pickup through cleaning to delivery.',
  },
];

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeUpItem}
      className="border border-gray-100 rounded-xl overflow-hidden hover:border-blue-100 transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50/60 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 pr-6 text-sm md:text-base leading-snug">
          <span className="text-blue-500 mr-3 font-bold">
            {String(index + 1).padStart(2, '0')}.
          </span>
          {faq.q}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${isOpen ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4 bg-blue-50/20">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => (
  <section id="faq" className="py-24 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="text-center mb-16">
        <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">FAQ</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">
          Everything you need to know about our services. Can't find an answer? Just contact us.
        </p>
      </AnimatedSection>

      <motion.div
        className="space-y-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} index={i} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default FAQ;
