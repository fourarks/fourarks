import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Clock, Calendar, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import { BeamsBackground } from '../components/ui/beams-background';

const ThankYouPage: React.FC = () => {
  const location = useLocation();
  const formData = location.state?.formData;

  return (
    <div className="relative overflow-x-hidden bg-bg text-dark selection:bg-accent selection:text-bg min-h-screen">
      <SEO
        title="Brief Received — Thank You"
        description="We have received your strategy brief. The 4ARKS team is reviewing your business requirements and will reach out within 24 hours."
      />

      {/* Hero Section */}
      <BeamsBackground className="relative text-bg py-24 px-6 text-center overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 15, stiffness: 200 }}
            className="w-20 h-20 bg-accent/20 border-2 border-accent text-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <CheckCircle2 size={44} strokeWidth={2.5} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif font-normal text-bg text-[clamp(40px,6vw,64px)] leading-tight tracking-tight"
          >
            Brief Received! What's Next?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-bg/60 text-[18px] max-w-[520px] mx-auto font-sans leading-relaxed"
          >
            Thank you {formData?.contactName ? `, ${formData.contactName}` : ''}! Our team is reviewing your brief and building your tailored AI roadmap.
          </motion.p>
        </div>
      </BeamsBackground>

      {/* Details & Action Section */}
      <section className="py-20 px-6 bg-bg">
        <div className="max-w-3xl mx-auto space-y-8 text-left">
          <div className="bg-white-soft border border-dark/10 rounded-2xl p-8 md:p-10 shadow-sm space-y-6">
            <h3 className="text-2xl font-serif text-dark font-normal">Our 24-Hour Guarantee</h3>
            
            <p className="text-text-muted text-[16px] leading-relaxed font-sans">
              We know your time is valuable. A 4ARKS AI specialist will examine your requirements for <strong className="text-dark font-semibold">{formData?.businessName || 'your business'}</strong> and reach out on your preferred channel (<strong className="text-dark font-semibold">{formData?.preferredContact || 'WhatsApp / Email'}</strong>) with a complete proposal.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-dark/10">
              <div className="flex items-center gap-3 text-sm font-sans text-dark/80">
                <Clock size={18} className="text-accent shrink-0" />
                <span>Response expected within 24 hours</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-sans text-dark/80">
                <Mail size={18} className="text-accent shrink-0" />
                <span className="break-all">fourarksofficial@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark text-bg rounded-2xl p-8 space-y-4 flex flex-col justify-between">
              <div>
                <Calendar className="text-accent mb-3" size={28} />
                <h4 className="text-xl font-serif text-bg font-normal">Want to talk immediately?</h4>
                <p className="text-bg/60 text-sm mt-2 leading-relaxed font-sans">
                  Skip the wait and book a direct 30-minute discovery session with our senior automation architect.
                </p>
              </div>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent text-dark font-sans font-semibold py-3 px-6 rounded-full hover:bg-accent-warm active:scale-95 transition-all text-sm mt-4 shadow-md"
              >
                Book Discovery Call →
              </a>
            </div>

            <div className="bg-white-soft border border-dark/10 rounded-2xl p-8 space-y-4 flex flex-col justify-between">
              <div>
                <CheckCircle2 className="text-accent mb-3" size={28} />
                <h4 className="text-xl font-serif text-dark font-normal">Explore our AI capabilities</h4>
                <p className="text-text-muted text-sm mt-2 leading-relaxed font-sans">
                  Check out our 5 core automation systems while we prepare your custom strategy proposal.
                </p>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center justify-center border border-dark text-dark font-sans font-semibold py-3 px-6 rounded-full hover:bg-dark/5 active:scale-95 transition-all text-sm mt-4"
              >
                View Services <ArrowRight size={14} className="ml-1.5" />
              </Link>
            </div>
          </div>

          <div className="text-center pt-8">
            <Link to="/" className="text-sm font-sans font-semibold text-text-muted hover:text-dark underline transition-colors">
              ← Return to Home Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYouPage;
