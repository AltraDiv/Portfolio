import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../../../components/icons';
import { Tooltip } from '../../../components/Tooltip';
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

      {/* Photo, transparent PNG floating on the animated background */}
      <div className="hidden lg:flex absolute right-0 bottom-0 h-[88%] w-[46%] pointer-events-none select-none items-end justify-end">
        {/* Soft halo behind the subject */}
        <div
          className="absolute bottom-0 right-[6%] w-[70%] h-[80%] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 65%)',
            filter: 'blur(40px)',
          }}
        />
        <img
          src={ProfilePicture}
          alt="Divjot Bhogal"
          className="relative h-full w-auto object-contain object-bottom drop-shadow-2xl"
        />
        {/* Gentle ground fade so the figure grounds into the page */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-950/80 to-transparent" />
      </div>

      {/* Left content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pt-20 pb-8">
        <div className="max-w-full lg:max-w-[56%]">

          {/* Label */}
          <motion.div {...fade(0.1)} className="flex items-center gap-3 mb-5">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs tracking-[0.3em] text-gray-400 uppercase">
              Software Engineer · Toronto, ON
            </span>
          </motion.div>

          {/* Name */}
          <div className="mb-1">
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
          <div className="mb-6">
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
            className="text-xl text-gray-400 font-light mb-3 tracking-wide"
          >
            Software Engineer
          </motion.p>

          {/* One-liner */}
          <motion.p
            {...fade(0.5)}
            className="text-gray-500 text-base leading-relaxed mb-6 max-w-md"
          >
            I build scalable backend systems and AI-powered products. Founding engineer
            at Kindr and founder of PickUp Esports, with a B.Math from Waterloo.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.6)} className="flex items-center gap-4 mb-6 flex-wrap">
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
            <Tooltip content="LinkedIn">
              <a
                href="https://www.linkedin.com/in/divjot-bhogal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent transition-colors duration-200"
              >
                <LinkedInIcon size={22} />
              </a>
            </Tooltip>
            <Tooltip content="GitHub">
              <a
                href="https://github.com/AltraDiv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent transition-colors duration-200"
              >
                <GitHubIcon size={22} />
              </a>
            </Tooltip>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Intro;
