import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { BeamsBackground } from '../components/ui/beams-background';

const NotFound: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden bg-bg text-dark selection:bg-accent selection:text-bg min-h-screen flex flex-col justify-between">
      <SEO
        title="404 — Page Not Found"
        description="The page you're looking for doesn't exist."
      />

      <BeamsBackground className="relative text-bg min-h-screen flex flex-col justify-center items-center py-28 px-6 text-center overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="inline-block bg-accent text-dark text-label px-3.5 py-1.5 rounded-full font-semibold">
              404 Error
            </span>
            <h1 className="font-serif font-normal text-bg text-4xl md:text-6xl leading-tight tracking-tight">
              Page not found
            </h1>
            <p className="text-bg/60 text-lg max-w-md mx-auto font-sans leading-relaxed">
              The page you are looking for does not exist or has been moved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Link
              to="/"
              className="cta-button inline-block bg-accent text-dark font-sans font-semibold py-4 px-8 rounded-full hover:bg-accent-warm active:scale-[0.99] transition-all shadow-md"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </BeamsBackground>
    </div>
  );
};

export default NotFound;
