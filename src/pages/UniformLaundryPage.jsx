import React from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, Star, Utensils, Stethoscope, HardHat, ShieldCheck, Tag, Truck, RefreshCw, Package } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection, { staggerContainer, fadeUpItem } from '../components/AnimatedSection';

const industries = [
  { icon: Utensils, label: 'Restaurants & Hospitality', desc: 'Chef coats, aprons, server shirts, table linen — all handled with care.' },
  { icon: Stethoscope, label: 'Healthcare & Medical', desc: 'Scrubs, lab coats, and clinical wear cleaned to strict hygiene standards.' },
  { icon: HardHat, label: 'Manufacturing & Trades', desc: 'Heavy-duty workwear, hi-vis vests, and overalls cleaned and returned crisp.' },
  { icon: ShieldCheck, label: 'Security & Corporate', desc: 'Formal uniforms, security blazers, and corporate attire maintained impeccably.' },
  { icon: Tag, label: 'Retail & Customer-Facing Staff', desc: 'Branded polos, vests, and staff outfits kept clean and professionally pressed.' },
  { icon: Star, label: 'Hotels & Leisure', desc: 'Front-of-house uniforms, concierge attire, and spa staff workwear.' },
];

const features = [
  { icon: ShieldCheck, title: 'Color-Safe, Fabric-Protective Washing', desc: 'Specialist detergents protect your brand colors and uniform fabric quality over hundreds of wash cycles.' },
  { icon: Tag, title: 'Emblem & Name Badge Protection', desc: 'Embroidered logos, heat-transfer badges, and name plates are protected through our careful washing process.' },
  { icon: Package, title: 'Sorted & Labeled Per Employee', desc: 'Garments returned individually bagged, labeled, and sorted — making distribution to your team effortless.' },
  { icon: RefreshCw, title: 'Regular Scheduled Routes', desc: 'Weekly or bi-weekly collection and delivery routes, aligned to your rota and operational schedule.' },
  { icon: Truck, title: 'Free Pickup & Delivery', desc: 'No transport costs. Our vehicles collect from and deliver to your premises anywhere in the Chicago area.' },
  { icon: Star, title: 'Volume Discounts Available', desc: 'The more uniforms we handle, the more you save. Transparent pricing with tiered discounts for larger accounts.' },
];

const includedItems = [
  'Work shirts & polos',
  'Chef coats & aprons',
  'Trousers & skirts',
  'Blazers & jackets',
  'Hi-vis vests & coveralls',
  'Scrubs & lab coats',
  'Fleeces & outerwear',
  'Embroidered corporate wear',
];

const UniformLaundryPage = () => (
  <div className="overflow-x-hidden">
    <Navbar />

    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#0a1628]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1e35] via-[#0d2040] to-[#0a2255]" />
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
            Corporate &amp; Commercial
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Professional Uniform Laundry Services for Chicago Businesses
          </h1>
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            Keep your team looking sharp, professional, and on-brand. Our corporate uniform laundry service delivers consistent results for businesses of all sizes — with scheduled pickup, sorted returns, and no hassle.
          </p>
          <div className="flex flex-wrap gap-4">
            <RouterLink to="/#contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-full font-bold transition-colors shadow-lg"
              >
                Get a Free Business Quote <ArrowRight className="w-5 h-5" />
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
        <AnimatedSection className="text-center mb-14">
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">Industries We Serve</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            Trusted by Businesses Across Every Sector
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Whether you're a restaurant group, a healthcare provider, or a corporate office — we deliver a uniform laundering solution that fits your industry's specific needs and standards.
          </p>
        </AnimatedSection>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {industries.map(({ icon: Icon, label, desc }) => (
            <motion.div
              key={label}
              variants={fadeUpItem}
              className="p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/40 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center text-blue-600 group-hover:text-white mb-4 transition-all">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1.5">{label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection direction="right">
            <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">Garment Types</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-6">
              All Workwear Categories, Handled in One Service
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              We launder all types of professional and workwear garments. Our processes are tailored to the specific fabric, construction, and care requirements of each uniform category.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {includedItems.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.1}>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">How Our Pricing Works</h3>
              <div className="space-y-4">
                {[
                  { type: 'Standard Workwear', price: 'From $3.50/piece', note: 'Shirts, trousers, aprons' },
                  { type: 'Outerwear & Jackets', price: 'From $6.00/piece', note: 'Blazers, coats, hi-vis jackets' },
                  { type: 'Bulk Accounts (20+ pieces/week)', price: 'Custom rate', note: 'Volume discount applies' },
                  { type: 'Express Processing', price: '+$2.00/piece', note: '24-hour guaranteed return' },
                ].map((item) => (
                  <div key={item.type} className="flex items-start justify-between py-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{item.type}</div>
                      <div className="text-gray-400 text-xs mt-0.5">{item.note}</div>
                    </div>
                    <div className="text-blue-600 font-bold text-sm ml-4 text-right">{item.price}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-5">
                * All prices exclude VAT where applicable. Final pricing confirmed on account setup.
              </p>
              <RouterLink to="/#contact">
                <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-bold text-sm transition-colors">
                  Request a Custom Quote
                </button>
              </RouterLink>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">What's Included</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            A Complete Managed Uniform Laundry Solution
          </h2>
        </AnimatedSection>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={fadeUpItem} className="bg-gray-50 p-7 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-5">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-blue-950 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Set Up Your Business Uniform Account Today
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Speak to our commercial team to discuss your uniform volumes, schedule, and requirements. We'll have a quote ready within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <RouterLink to="/#contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-900 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
              >
                Request a Quote <ArrowRight className="w-5 h-5" />
              </motion.button>
            </RouterLink>
            <a href="tel:+12243456789">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                <Phone className="w-5 h-5" /> Call Us Directly
              </motion.button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </div>
);

export default UniformLaundryPage;
