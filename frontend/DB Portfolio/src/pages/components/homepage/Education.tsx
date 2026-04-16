import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7 }}
      className="glass-dark rounded-2xl p-8 mb-8"
    >
      <h2 className="section-heading gradient-text mb-8">Education</h2>

      <div className="space-y-6">
        {/* University */}
        <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent/20 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent/10 text-accent-light shrink-0">
              <GraduationCap size={24} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">Bachelor of Mathematics</h3>
                  <p className="text-accent-light text-sm">University of Waterloo</p>
                </div>
                <span className="chip">2020 - 2025</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">Computational Mathematics, Minor in Computing</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {['DS&A', 'ML', 'Neural Networks', 'OOP (CS246)', 'Cryptography', 'Optimization', 'OS'].map((c) => (
                  <span key={c} className="chip !text-[10px] !px-2 !py-0.5">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* High School */}
        <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent/20 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
              <Award size={24} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">High School Diploma</h3>
                  <p className="text-purple-400 text-sm">Father Michael Goetz Secondary School</p>
                </div>
                <span className="chip !bg-purple-500/10 !text-purple-400 !border-purple-500/20">2017 - 2020</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">92% average · ICT SHSM Certificate Red Emblem</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
