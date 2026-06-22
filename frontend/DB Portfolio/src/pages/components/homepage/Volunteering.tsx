import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar } from 'lucide-react';

const volunteer = [
  {
    org: 'YMCA',
    role: 'Community Volunteer',
    duration: '2017',
    hours: '80+',
    description: 'Contributed 80+ volunteer hours supporting community programs and youth initiatives at the YMCA.',
  },
];

const Volunteering: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-100px' }}
      transition={{ duration: 0.7 }}
      className="glass-dark rounded-2xl p-8 mb-8"
    >
      <h2 className="section-heading gradient-text mb-8">Volunteering</h2>

      <div className="space-y-4">
        {volunteer.map((v, i) => (
          <motion.div
            key={v.org}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent/20 transition-all duration-300"
          >
            <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400 shrink-0 h-fit">
              <Heart size={20} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  <h3 className="text-white font-semibold">{v.org}</h3>
                  <p className="text-accent-light text-sm">{v.role}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="chip !bg-rose-500/10 !text-rose-400 !border-rose-500/20 !text-[10px] !px-2 !py-0.5">
                    {v.hours} hrs
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar size={11} />
                    {v.duration}
                  </span>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Volunteering;
