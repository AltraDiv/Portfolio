import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '10+', label: 'Projects shipped' },
  { value: '3', label: 'Startups built for' },
  { value: '4+', label: 'Years of experience' },
  { value: 'B.Math', label: 'University of Waterloo' },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-gray-900/50 border-y border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        {/* Metrics row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div
                className="font-black text-white leading-none mb-3"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
              >
                {s.value}
              </div>
              <div className="text-gray-500 text-sm tracking-wide font-mono uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto"
        >
          I'm a backend engineer with a math background, I care about{' '}
          <span className="text-white font-medium">systems that scale</span>,{' '}
          <span className="text-white font-medium">AI that ships</span>, and{' '}
          <span className="text-white font-medium">infrastructure that doesn't break at 3am</span>.
          Currently building my own local AI inference server, think Jarvis, but actually mine.
        </motion.p>

      </div>
    </section>
  );
};

export default Stats;
