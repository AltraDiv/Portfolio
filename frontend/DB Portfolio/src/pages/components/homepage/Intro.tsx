import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../../../components/icons';
import ProfilePicture from '../../../assets/ProfilePicture2.png';
import pdfFile from '../../../assets/Divjot_Bhogal_2026.pdf';

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const Intro: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden flex items-center">

      {/* Subtle warm glow behind photo */}
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-blue-500/10 via-transparent to-transparent" />
      </div>

      {/* Photo , natural size, anchored to bottom-right */}
      <div className="hidden lg:flex absolute right-0 bottom-0 h-[85%] w-[45%] pointer-events-none select-none items-end justify-end">
        <img
          src={ProfilePicture}
          alt="Divjot Bhogal"
          className="h-full w-auto object-contain object-bottom"
        />
        {/* Left edge blend */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-gray-950 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-gray-950 to-transparent" />
      </div>

      {/* Left content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pt-24">
        <div className="max-w-full lg:max-w-[56%]">

          {/* Label */}
          <motion.div {...fade(0.1)} className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs tracking-[0.3em] text-gray-400 uppercase">
              Software Engineer · Toronto, ON
            </span>
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-white leading-none font-extralight"
              style={{ fontSize: 'clamp(2.8rem, 12vw, 8.5rem)', letterSpacing: '0.01em' }}
            >
              Divjot
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.27, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-white leading-none font-extralight"
              style={{ fontSize: 'clamp(2.8rem, 12vw, 8.5rem)', letterSpacing: '0.01em' }}
            >
              Bhogal
            </motion.h1>
          </div>

          {/* Role */}
          <motion.p
            {...fade(0.4)}
            className="text-xl text-gray-400 font-light mb-6 tracking-wide"
          >
            Software Engineer
          </motion.p>


          {/* One-liner */}
          <motion.p
            {...fade(0.5)}
            className="text-gray-500 text-base leading-relaxed mb-10 max-w-md"
          >
            I build scalable backend systems and AI-powered products.
            Previously founding engineer at a healthcare AI startup.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.6)} className="flex items-center gap-4 mb-10 flex-wrap">
            <a href="#work" className="btn-primary">
              <ArrowDown size={16} /> Learn More
            </a>
            <a
              href={pdfFile}
              download="Divjot_Bhogal_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Download size={16} /> Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div {...fade(0.7)} className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/divjot-bhogal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent transition-colors duration-200"
            >
              <LinkedInIcon size={22} />
            </a>
            <a
              href="https://github.com/AltraDiv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent transition-colors duration-200"
            >
              <GitHubIcon size={22} />
            </a>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Intro;
