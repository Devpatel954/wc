import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, ChevronDown, ShieldCheck, Truck, Clock, Leaf } from 'lucide-react';

const stats = [
  { number: '15+', label: 'Years Serving Chicago' },
  { number: '10,000+', label: 'Satisfied Clients' },
  { number: '500+', label: 'Business Accounts' },
  { number: '99%', label: 'On-Time Delivery' },
];

const badges = [
  { icon: ShieldCheck, text: 'Insured & Bonded' },
  { icon: Truck, text: 'Free Pickup & Delivery' },
  { icon: Clock, text: '24-Hour Turnaround' },
  { icon: Leaf, text: 'Eco-Friendly Process' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const Hero = () => (
  <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1628]">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2040] to-[#0f2d5a]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_50%,rgba(59,130,246,0.12),transparent)]" />
    <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
    <motion.div
      className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
        {badges.map(({ icon: Icon, text }) => (
          <span
            key={text}
            className="inline-flex items-center gap-1.5 bg-blue-500/15 border border-blue-400/30 text-blue-100 px-3 py-1.5 rounded-full text-xs font-medium"
          >
            <Icon className="w-3.5 h-3.5 text-blue-400" />
            {text}
          </span>
        ))}
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6 max-w-3xl"
      >
        Chicago's Trusted<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
          Laundry &amp; Dry Cleaning
        </span>
        <br />Specialists
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed"
      >
        Serving hotels, restaurants, businesses, and households across Chicago since 2009.
        Professional cleaning, free pickup and delivery, and results you can count on — every time.
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-20">
        <Link to="contact" smooth offset={-80} duration={500}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg shadow-blue-900/50"
          >
            Schedule a Free Pickup <ArrowRight className="w-5 h-5" />
          </motion.button>
        </Link>
        <Link to="services" smooth offset={-80} duration={500}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border-2 border-blue-400/40 hover:border-blue-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-blue-500/10"
          >
            Explore Our Services
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-blue-800/60 pt-8 max-w-3xl"
      >
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl md:text-4xl font-extrabold text-blue-300">{s.number}</div>
            <div className="text-sm text-gray-300 mt-1 font-medium">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>

    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 8, 0] }}
      transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
    >
      <span className="text-white/35 text-xs tracking-widest uppercase">Scroll</span>
      <ChevronDown className="w-5 h-5 text-blue-500/50" />
    </motion.div>
  </section>
);

export default Hero;

