import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'contact@windycitylaundry.com',
    href: 'mailto:contact@windycitylaundry.com',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+1 224-345-6789',
    href: 'tel:+12243456789',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '2643 W 19th St, Chicago, IL 60608',
    href: 'https://maps.google.com/?q=2643+W+19th+St+Chicago+IL',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon–Fri: 6am–9pm | Sat: 7am–8pm | Sun: 8am–5pm',
    href: null,
  },
];

const timeSlots = [
  '7:00 AM – 9:00 AM',
  '9:00 AM – 11:00 AM',
  '11:00 AM – 1:00 PM',
  '1:00 PM – 3:00 PM',
  '3:00 PM – 5:00 PM',
  '5:00 PM – 7:00 PM',
];

const initialForm = {
  name: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    toast.success(
      `Thanks ${formData.name.split(' ')[0]}! We've received your request and will confirm your pickup shortly.`,
      {
        duration: 5000,
        style: {
          borderRadius: '12px',
          background: '#0f172a',
          color: '#fff',
          fontSize: '14px',
          maxWidth: '420px',
        },
        iconTheme: { primary: '#3b82f6', secondary: '#fff' },
      }
    );

    setFormData(initialForm);
    setSubmitting(false);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            Book Your Pickup
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Schedule a free pickup in under 2 minutes. We'll take it from there.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection direction="right" delay={0.1}>
            <div className="bg-blue-950 rounded-2xl p-8 text-white mb-6">
              <h3 className="text-2xl font-bold mb-2">Let's Talk</h3>
              <p className="text-blue-200 text-sm mb-8">
                Available 7 days a week to answer questions and schedule pickups.
              </p>
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-800 rounded-xl flex items-center justify-center text-blue-300 flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-400 uppercase tracking-wide font-semibold mb-0.5">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-white text-sm hover:text-blue-300 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-white text-sm">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Service Area
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                We serve Chicago, Evanston, Oak Park, Cicero, Berwyn, and surrounding communities within a 25-mile radius.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.15}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Schedule a Pickup</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-gray-900 text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (312) 000-0000"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-gray-900 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-gray-700 text-sm transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="wash">Wash &amp; Fold</option>
                    <option value="dry">Dry Cleaning</option>
                    <option value="iron">Ironing</option>
                    <option value="hotel">Hotel / Bulk Laundry</option>
                    <option value="uniform">Uniform Laundry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Pickup Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={today}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-gray-700 text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Time</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-gray-700 text-sm transition-all bg-white"
                    >
                      <option value="">Select a time slot...</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Additional Notes
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any special instructions or fabric care notes..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-gray-900 text-sm transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: submitting ? 1 : 1.02 }}
                  whileTap={{ scale: submitting ? 1 : 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-blue-200"
                >
                  {submitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Scheduling Pickup...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Schedule Free Pickup
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-gray-400 text-center">
                  We confirm within 1 hour during business hours. Free pickup &amp; delivery included.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;


