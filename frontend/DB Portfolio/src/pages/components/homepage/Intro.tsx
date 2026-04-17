import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowDown } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../../../components/icons';
import ProfilePicture from '../../../assets/ProfilePicture.jpg';

const roles = ['Software Engineer', 'AI/ML Builder', 'Backend Architect', 'Startup Founder'];

const Intro: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        {/* Profile picture */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
          className="relative inline-block mb-8"
        >
          <div className="w-28 h-28 rounded-full p-[2px] bg-gradient-to-r from-accent via-purple-500 to-pink-500 animate-float">
            <img
              src={ProfilePicture}
              alt="Divjot Bhogal"
              className="w-full h-full rounded-full object-cover border-2 border-gray-950"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-950" />
        </motion.div>

        {/* Chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <span className="chip">
            <MapPin size={12} className="mr-1" /> Toronto, ON, Canada
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl sm:text-7xl font-bold tracking-tight mb-4"
        >
          Divjot{' '}
          <span className="gradient-text">Bhogal</span>
        </motion.h1>

        {/* Rotating role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="h-10 mb-6 overflow-hidden"
        >
          <motion.p
            key={roleIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xl sm:text-2xl text-gray-400 font-medium"
          >
            {roles[roleIndex]}
          </motion.p>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed mb-10"
        >
          B.Math from University of Waterloo. I build scalable systems, AI-powered products, 
          and ship fast. Previously founding engineer at a healthcare AI startup serving 52+ clinics.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a href="/about" className="btn-primary">
            View My Work
            <ArrowDown size={16} className="animate-bounce" />
          </a>
          <a href="/contact" className="btn-outline">
            Get in Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://www.linkedin.com/in/divjot-bhogal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass text-gray-400 hover:text-accent-light hover:border-accent/30 transition-all duration-300"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href="https://github.com/AltraDiv"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass text-gray-400 hover:text-accent-light hover:border-accent/30 transition-all duration-300"
          >
            <GitHubIcon size={20} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-accent-light"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
