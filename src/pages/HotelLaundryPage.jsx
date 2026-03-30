import React from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, Star, Building2, Bed, Utensils, Users, Clock, ShieldCheck, BadgeCheck, Truck } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection, { staggerContainer, fadeUpItem } from '../components/AnimatedSection';

const whatWeHandle = [
  'Bed sheets & pillow cases',
  'Bath towels & hand towels',
  'Bath mats & robes',
  'Table linen & napkins',
  'Restaurant & dining wear',
  'Staff & management uniforms',
  'Pool & spa towels',
  'Duvet covers & blankets',
];

const benefits = [
  {
    icon: BadgeCheck,
    title: 'Dedicated Account Manager',
    description: 'Every hospitality client is assigned a dedicated point of contact who understands your property\'s specific requirements.',
  },
  {
    icon: Clock,
    title: '24-Hour Turnaround Guarantee',
    description: 'We understand that hospitality never sleeps. Our operations run seven days a week to ensure linen is returned on time, every time.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygienic High-Temp Processing',
    description: 'All linen processed at certified hygiene temperatures, meeting hospitality industry and health authority standards.',
  },
  {
    icon: Truck,
    title: 'Flexible Scheduled Routes',
    description: 'We work around your occupancy levels and peak seasons — pickup and delivery on a schedule that suits your operation.',
  },
  {
    icon: Star,
    title: 'Consistent Quality Standards',
    description: 'Multi-point quality inspection before every delivery. Fresh, pressed, and packaged to your property\'s presentation standards.',
  },
  {
    icon: Users,
    title: 'Scalable for Any Size',
    description: 'From boutique bed & breakfasts to large hotel chains — our capacity scales with your needs without compromising quality.',
  },
];

const industries = [
  { icon: Building2, label: 'Hotels & Resorts' },
  { icon: Bed, label: 'Bed & Breakfasts' },
  { icon: Utensils, label: 'Restaurants & Dining' },
  { icon: Star, label: 'Luxury Properties' },
];

const process = [
  { step: '01', title: 'Consultation', desc: 'We assess your linen volume, specific requirements, and agree on a pickup and delivery schedule tailored to your property.' },
  { step: '02', title: 'Scheduled Collection', desc: 'Our uniformed team arrives at your designated time, carefully collecting, bagging, and inventorying all items.' },
  { step: '03', title: 'Professional Processing', desc: 'Items are sorted, washed at certified temperatures, dried, pressed, and inspected at our Chicago facility.' },
  { step: '04', title: 'On-Time Delivery', desc: 'Clean, packaged linen is returned on your agreed schedule — folded, pressed, and ready for immediate use.' },
];

const HotelLaundryPage = () => (
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
            Hotel &amp; Hospitality
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Commercial Laundry Services for Chicago's Hospitality Industry
          </h1>
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            Reliable, high-volume linen processing for hotels, resorts, restaurants, and bed &amp; breakfasts. Consistent quality, certified hygiene standards, and on-time delivery — so you can focus on delivering exceptional guest experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <RouterLink to="/#contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-full font-bold transition-colors shadow-lg"
              >
                Request a Free Consultation <ArrowRight className="w-5 h-5" />
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

    <section className="bg-blue-600 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {industries.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-white font-medium text-sm">
              <Icon className="w-5 h-5 text-blue-200" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection direction="right">
            <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">What We Launder</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-6">
              Complete Linen Care for Your Entire Property
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              We handle every category of hospitality linen — from guest room bedding and bathroom terry to food and beverage table linen and staff workwear. One trusted partner for all your laundry needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whatWeHandle.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-blue-800 font-semibold text-sm">Don't see your specific linen category?</p>
              <p className="text-blue-700 text-sm mt-1">Contact our hospitality team — we accommodate custom requirements for all property types.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.1}>
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Why Windy City Laundry?</h3>
              <div className="space-y-5">
                {[
                  { metric: '500+', label: 'Hospitality clients currently served' },
                  { metric: '24hr', label: 'Standard turnaround time' },
                  { metric: '15+', label: 'Years serving Chicago hospitality' },
                  { metric: '100%', label: 'Satisfaction guarantee on every order' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 border-b border-gray-700 pb-5 last:border-0 last:pb-0">
                    <div className="text-3xl font-extrabold text-blue-400 w-24 flex-shrink-0">{item.metric}</div>
                    <div className="text-gray-300 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">Service Benefits</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            Built for the Demands of Hospitality
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We understand that your guests' comfort depends on impeccable linen. Our entire operation is designed around the reliability and quality standards the hospitality industry requires.
          </p>
        </AnimatedSection>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {benefits.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUpItem}
              className="bg-white p-7 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-5">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
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
            Seamless from Collection to Delivery
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            A structured, professionally managed process ensures no item is ever lost, delayed, or returned below your standards.
          </p>
        </AnimatedSection>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {process.map(({ step, title, desc }) => (
            <motion.div key={step} variants={fadeUpItem} className="relative">
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
            Ready to Streamline Your Property's Laundry Operations?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Speak with our hospitality laundry specialists today. We'll design a custom service plan around your property's schedule, volume, and standards.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <RouterLink to="/#contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
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

export default HotelLaundryPage;
