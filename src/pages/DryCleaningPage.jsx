import React from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, Star, Sparkles, ShieldCheck, Clock, Leaf, Package, RefreshCw } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection, { staggerContainer, fadeUpItem } from '../components/AnimatedSection';

const garmentTypes = [
  { label: 'Business Suits & Blazers', detail: 'Wool, polyester, linen & blended fabrics' },
  { label: 'Evening Gowns & Formal Wear', detail: 'Beaded, sequined & structured garments' },
  { label: 'Wedding Dresses', detail: 'Cleaning & preservation available' },
  { label: 'Cashmere & Wool Coats', detail: 'Specialist low-temperature cleaning' },
  { label: 'Silk Blouses & Delicate Tops', detail: 'Gentle solvent process protects delicate fibres' },
  { label: 'Leather & Suede Garments', detail: 'Specialist conditioning treatment included' },
  { label: 'Curtains & Drapes', detail: 'All sizes, including bay, bay & ceiling height' },
  { label: 'Comforters & Duvets', detail: 'Down, synthetic & luxury fills' },
];

const whyDryCleaning = [
  {
    icon: Sparkles,
    title: 'Protects Delicate Fabrics',
    desc: 'Water-based washing can shrink, distort, or damage delicate fibres. Dry cleaning uses precise solvent chemistry that cleans without compromising the fabric structure.',
  },
  {
    icon: ShieldCheck,
    title: 'Superior Stain Removal',
    desc: 'Our trained technicians pre-treat each stain before cleaning, using specialist agents matched to the fabric type and stain composition.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Solvents',
    desc: 'We use modern, environmentally responsible solvents — effective, safe, and free of the harsh chemicals associated with older dry cleaning methods.',
  },
  {
    icon: Package,
    title: 'Pressed & Individually Wrapped',
    desc: 'Every item is carefully pressed, inspected, and returned individually wrapped in protective garment covers — ready to wear or store.',
  },
];

const pricingItems = [
  { item: 'Dress Shirt', price: '$6.00' },
  { item: 'Blouse', price: '$7.00' },
  { item: 'Trousers / Skirt', price: '$9.00' },
  { item: 'Suit (2-piece)', price: '$22.00' },
  { item: 'Suit (3-piece)', price: '$28.00' },
  { item: 'Dress (casual)', price: '$14.00' },
  { item: 'Dress (evening / formal)', price: '$28 – $55' },
  { item: 'Overcoat / Long Coat', price: '$28.00' },
  { item: 'Leather / Suede Jacket', price: 'From $55.00' },
  { item: 'Curtains (per pair)', price: 'From $35.00' },
  { item: 'Comforter / Duvet', price: 'From $28.00' },
  { item: 'Wedding Dress', price: 'Quoted on request' },
];

const process = [
  { step: '01', title: 'Garment Inspection', desc: 'Each item is examined for fabric type, existing damage, and stain composition before any cleaning begins.' },
  { step: '02', title: 'Stain Pre-Treatment', desc: 'Stains are individually pre-treated using specialist agents to maximise removal without damaging the fabric.' },
  { step: '03', title: 'Solvent Cleaning', desc: 'Garments are machine-cleaned using modern, eco-responsible solvents appropriate to each fabric category.' },
  { step: '04', title: 'Press, Inspect & Package', desc: 'Items are expertly pressed, quality inspected, and individually wrapped before delivery back to you.' },
];

const DryCleaningPage = () => (
  <div className="overflow-x-hidden">
    <Navbar />

    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#0a1628]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2040] to-[#0f2d5a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_50%,rgba(59,130,246,0.10),transparent)]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide mb-4">
            Premium Dry Cleaning
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Expert Dry Cleaning for Fine &amp; Delicate Garments in Chicago
          </h1>
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            Chicago's trusted specialist for suits, formal wear, delicate fabrics, and all garments that require professional solvent cleaning. Free pickup and delivery, with same-day express service available.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { icon: Clock, text: 'Standard 48hr Turnaround' },
              { icon: RefreshCw, text: 'Express 24hr Available' },
              { icon: Leaf, text: 'Eco-Friendly Solvents' },
              { icon: Star, text: 'Satisfaction Guaranteed' },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
                <Icon className="w-3.5 h-3.5 text-blue-300" />
                {text}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <RouterLink to="/#contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-full font-bold transition-colors shadow-lg"
              >
                Schedule a Pickup <ArrowRight className="w-5 h-5" />
              </motion.button>
            </RouterLink>
            <a href="tel:+12243456789">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border-2 border-blue-400/40 hover:border-blue-400 text-white px-7 py-3.5 rounded-full font-bold transition-all"
              >
                <Phone className="w-4 h-4" /> (224) 345-6789
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <AnimatedSection direction="right">
            <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">What We Clean</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-6">
              Specialist Care for Every Garment Type
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our trained dry cleaning technicians handle the full spectrum of garments and household textiles — from everyday office suits to the most delicate occasion wear.
            </p>
            <div className="space-y-3">
              {garmentTypes.map(({ label, detail }) => (
                <div key={label} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{label}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.1}>
            <div className="sticky top-28">
              <div className="bg-gray-900 rounded-2xl p-8 text-white mb-6">
                <h3 className="text-xl font-bold mb-1">Standard Price Guide</h3>
                <p className="text-gray-400 text-sm mb-6">All prices include free Chicago-area pickup and delivery.</p>
                <div className="space-y-0">
                  {pricingItems.map((item) => (
                    <div key={item.item} className="flex justify-between items-center py-3 border-b border-gray-800 last:border-0">
                      <span className="text-gray-300 text-sm">{item.item}</span>
                      <span className="text-blue-400 font-bold text-sm">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <p className="text-blue-800 font-semibold text-sm">Not sure about pricing?</p>
                <p className="text-blue-700 text-sm mt-1">We'll inspect your garments and provide an exact quote before any cleaning begins — no surprises.</p>
                <RouterLink to="/#contact">
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-full font-bold text-sm transition-colors">
                    Get a Free Quote
                  </button>
                </RouterLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">Why Professional Dry Cleaning</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            The Right Way to Care for Your Best Garments
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Dry cleaning isn't just for special occasions. It's the recommended care method for many fabrics and the best way to preserve the shape, colour, and quality of fine garments long-term.
          </p>
        </AnimatedSection>
        <motion.div
          className="grid sm:grid-cols-2 gap-7"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {whyDryCleaning.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={fadeUpItem} className="bg-white p-7 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow flex gap-5">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-blue-400 font-semibold uppercase tracking-widest text-sm">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-4">
            Precision Cleaning, Every Step of the Way
          </h2>
        </AnimatedSection>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {process.map(({ step, title, desc }) => (
            <motion.div key={step} variants={fadeUpItem}>
              <div className="text-5xl font-extrabold text-blue-800 mb-3">{step}</div>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-blue-300 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Your Garments Deserve Expert Care
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Schedule a free pickup today and experience Chicago's most trusted dry cleaning service. We collect from your home or office, clean to the highest standard, and return your items looking immaculate.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <RouterLink to="/#contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
              >
                Schedule Free Pickup <ArrowRight className="w-5 h-5" />
              </motion.button>
            </RouterLink>
            <a href="tel:+12243456789">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                <Phone className="w-5 h-5" /> Call (224) 345-6789
              </motion.button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </div>
);

export default DryCleaningPage;
