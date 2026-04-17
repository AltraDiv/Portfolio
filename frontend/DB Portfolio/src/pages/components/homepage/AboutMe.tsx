import React from 'react';
import { motion } from 'framer-motion';
import { Download, FolderOpen, Briefcase, Code2, Rocket } from 'lucide-react';
import pdfFile from '../../../assets/Divjot_Bhogal_2026.pdf';

const stats = [
  { icon: Code2, value: '10+', label: 'Projects' },
  { icon: Briefcase, value: '3+', label: 'Years Experience' },
  { icon: Rocket, value: '52+', label: 'Clinics Served' },
];
// hi
const AboutMe: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7 }}
      className="glass-dark rounded-2xl p-8 mb-8"
    >
      <h2 className="section-heading gradient-text mb-6">About Me</h2>
      <p className="text-gray-400 leading-relaxed mb-8 text-lg">
        Hi, I'm Divjot Bhogal — a Software Engineer with a B.Math in Computational Mathematics 
        (Minor in Computing) from the University of Waterloo. I specialize in building scalable 
        backend systems, AI-powered products, and real-time infrastructure. Most recently, I was 
        a Founding Software Engineer at Kindr, where I built healthcare AI agents serving 2,200+ 
        calls/mo across 52+ clinics. I'm passionate about large-scale systems, AI/ML integration, 
        and shipping impactful features fast.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/5">
            <stat.icon size={20} className="mx-auto text-accent-light mb-2" />
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4">
        <a
          href={pdfFile}
          target="_blank"
          rel="noopener noreferrer"
          download="Divjot_Bhogal_2026.pdf"
          className="btn-primary"
        >
          <Download size={16} />
          Resume
        </a>
        <a href="/about" className="btn-outline">
          <FolderOpen size={16} />
          Projects
        </a>
      </div>
    </motion.section>
  );
};

export default AboutMe;
