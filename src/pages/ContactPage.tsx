import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Mail, MessageSquare, Clock, Loader, CheckCircle2, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { BeamsBackground } from '../components/ui/beams-background';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    whatsappNumber: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required.';
    if (!formData.message.trim()) errs.message = 'Message cannot be empty.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus('idle');

    try {
      const response = await fetch(import.meta.env.VITE_CONTACT_WEBHOOK || '', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          formType: 'contact',
          ...formData
        })
      });

      const data = await response.json();
      if (response.ok && data.result === 'success') {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          whatsappNumber: '',
          subject: 'General Enquiry',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-x-hidden bg-bg text-dark selection:bg-accent selection:text-bg min-h-screen">
      <SEO
        title="Contact Us"
        description="Get in touch with the 4ARKS team. We respond to every message within 24 hours to help you solve your AI automation challenges."
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: HERO
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <BeamsBackground className="relative text-bg min-h-[40vh] flex flex-col justify-center items-center py-28 px-6 text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-accent text-dark text-label px-3.5 py-1.5 rounded-full font-semibold"
          >
            Contact
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-normal text-bg text-3xl md:text-5xl leading-tight max-w-4xl mx-auto tracking-tight"
          >
            Let's talk about what AI<br/> can do for your business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-bg/60 text-[18px] max-w-[480px] mx-auto font-sans leading-relaxed"
          >
            We respond to every message within 24 hours.
          </motion.p>
        </div>
      </BeamsBackground>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2: MAIN CONTENT (2-COLUMN GRID)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 px-6 md:px-12 bg-bg">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT (60%): CONTACT FORM */}
          <div className="w-full lg:w-[60%] bg-white-soft border border-dark/8 rounded-2xl p-8 md:p-10 shadow-sm text-left">
            <h3 className="text-2xl font-serif text-dark font-normal mb-6">Send a message</h3>

            {status === 'success' && (
              <div className="mb-6 bg-accent/15 border border-accent/40 p-4 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="text-accent shrink-0" size={20} />
                <p className="text-sm font-sans text-dark font-medium">Thank you! Your message has been sent successfully. We will respond within 24 hours.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 bg-red-950/10 border border-red-500/40 p-4 rounded-xl flex items-center gap-3">
                <AlertCircle className="text-red-500 shrink-0" size={20} />
                <p className="text-sm font-sans text-red-600">Something went wrong. Please check your network or try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 font-sans">
              {/* First Name + Last Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-bold text-dark mb-1.5">
                    First Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className={`w-full bg-bg text-dark border-[1.5px] rounded-[10px] px-4 py-3.5 text-[16px] outline-none transition-all ${errors.firstName ? 'border-red-500' : 'border-dark/15 focus:border-accent focus:ring-3 focus:ring-accent/15'
                      }`}
                  />
                  {errors.firstName && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.firstName}</span>}
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-dark mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full bg-bg text-dark border-[1.5px] border-dark/15 rounded-[10px] px-4 py-3.5 text-[16px] outline-none focus:border-accent focus:ring-3 focus:ring-accent/15 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[13px] font-bold text-dark mb-1.5">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full bg-bg text-dark border-[1.5px] rounded-[10px] px-4 py-3.5 text-[16px] outline-none transition-all ${errors.email ? 'border-red-500' : 'border-dark/15 focus:border-accent focus:ring-3 focus:ring-accent/15'
                    }`}
                />
                {errors.email && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.email}</span>}
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-[13px] font-bold text-dark mb-1.5">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  placeholder="+91 98765 43210 (optional)"
                  className="w-full bg-bg text-dark border-[1.5px] border-dark/15 rounded-[10px] px-4 py-3.5 text-[16px] outline-none focus:border-accent focus:ring-3 focus:ring-accent/15 transition-all"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-[13px] font-bold text-dark mb-1.5">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-bg text-dark border-[1.5px] border-dark/15 rounded-[10px] px-4 py-3.5 text-[16px] outline-none focus:border-accent focus:ring-3 focus:ring-accent/15 transition-all appearance-none"
                >
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Project Quote">Project Quote</option>
                  <option value="Support">Support</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[13px] font-bold text-dark mb-1.5">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help your business?"
                  className={`w-full bg-bg text-dark border-[1.5px] rounded-[10px] px-4 py-3.5 text-[16px] outline-none transition-all resize-none ${errors.message ? 'border-red-500' : 'border-dark/15 focus:border-accent focus:ring-3 focus:ring-accent/15'
                    }`}
                />
                {errors.message && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="cta-button w-full bg-accent text-dark font-sans font-semibold text-[17px] py-4 px-8 rounded-full hover:bg-accent-warm active:scale-[0.99] transition-all shadow-md flex items-center justify-center cursor-pointer disabled:opacity-75"
                >
                  {loading ? (
                    <>
                      <Loader size={20} className="animate-spin mr-2" /> Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT (36%): CALENDAR CARD + CONTACT INFO */}
          <div className="w-full lg:w-[36%] space-y-8 text-left">
            {/* Calendar Card */}
            <div className="bg-dark text-bg rounded-2xl p-9 shadow-md space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <Calendar size={36} className="text-accent" />
                <h3 className="text-2xl font-serif text-bg font-normal">Book a Strategy Call</h3>
                <p className="text-bg/60 text-[15px] leading-relaxed font-sans">
                  Skip the form — jump straight into a 30-minute call. Leave with a clear AI roadmap for your business.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button inline-flex items-center justify-center bg-accent text-dark text-sm font-sans font-semibold px-6 py-3.5 rounded-full hover:bg-accent-warm active:scale-95 transition-all shadow-md w-full"
                >
                  Check Availability →
                </a>
                <p className="text-[12px] text-bg/50 text-center font-sans">
                  Pick a time that works for you · No commitment
                </p>
              </div>
            </div>

            {/* Contact Info Rows */}
            <div className="bg-white-soft border border-dark/8 rounded-2xl p-7 shadow-sm space-y-5 text-sm font-sans text-dark">
              <div className="flex items-center gap-3.5">
                <Mail size={20} className="text-accent shrink-0" />
                <span className="font-medium break-all">fourarksofficial@gmail.com</span>
              </div>
              <div className="flex items-center gap-3.5">
                <MessageSquare size={20} className="text-accent shrink-0" />
                <span className="font-medium">WhatsApp — preferred for fast responses</span>
              </div>
              <div className="flex items-center gap-3.5">
                <Clock size={20} className="text-accent shrink-0" />
                <span className="font-medium text-text-muted">Response time — within 24 hours</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3: CTA REDIRECT
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-accent/30 text-dark py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <h2 className="font-serif text-2xl md:text-3xl text-dark font-normal">
            Have a project in mind? Fill in a complete brief →
          </h2>
          <Link
            to="/get-started"
            className="cta-button bg-dark text-bg rounded-full px-8 py-4 font-sans font-semibold hover:bg-dark-deep active:scale-95 transition-all shadow-md shrink-0 inline-block"
          >
            Go to Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
