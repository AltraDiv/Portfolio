import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Rocket, Users } from 'lucide-react';

const hackathons = [
  { name: 'GenAI Genesis', role: 'Best Mentor (1,200+ applicants)', location: 'Toronto, ON', year: '2024' },
  { name: 'Hack the North', role: 'Participant', location: 'Waterloo, ON', year: '2023' },
  { name: 'Hawk Hacks', role: 'Participant', location: 'Waterloo, ON', year: '2024' },
  { name: 'NASA Space Apps Challenge', role: 'Participant', location: 'Global', year: '2023' },
  { name: 'GDSC University of Guelph', role: 'Participant', location: 'Guelph, ON', year: '2024' },
];

const awards = [
  {
    icon: Trophy,
    title: '2nd Place — York University Pitch Competition',
    description: 'Won $1,000 pitching with a team to a judging panel including representatives from Google. Competed against teams across Ontario.',
    year: '2024',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
  },
  {
    icon: Users,
    title: 'Best Mentor — Genesis GenAI Hackathon',
    description: 'Selected among top 1.25% of applicants (15 out of 1,200+). Mentored 300+ students on AI/ML, API integration, and product development.',
    year: '2024',
    color: 'text-accent-light',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
  },
  {
    icon: Rocket,
    title: 'Waterloo Rocketry — Canada\'s First Amateur Liquid Rocket',
    description: 'Propulsion engineer on Canada\'s first amateur liquid rocket launch, reaching ~1.2 km apogee. Directed inter-tank coupler design, nozzle machining, and static fire tests.',
    year: '2023–Present',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20',
  },
];

const Achievements: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-100px' }}
      transition={{ duration: 0.7 }}
      className="glass-dark rounded-2xl p-8 mb-8"
    >
      <h2 className="section-heading gradient-text mb-8">Achievements & Hackathons</h2>

      {/* Awards */}
      <div className="space-y-4 mb-10">
        {awards.map((award, i) => (
          <motion.div
            key={award.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`flex gap-4 p-5 rounded-xl border ${award.border} bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300`}
          >
            <div className={`p-3 rounded-xl ${award.bg} ${award.color} shrink-0 h-fit`}>
              <award.icon size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="text-white font-semibold text-sm">{award.title}</h3>
                <span className="chip !text-[10px] !px-2 !py-0.5 shrink-0">{award.year}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{award.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hackathons */}
      <div>
        <p className="font-mono text-xs tracking-[0.28em] text-accent uppercase mb-5">Hackathons</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {hackathons.map((h, i) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">{h.name}</p>
                <p className="text-gray-500 text-xs">{h.role} · {h.location} · {h.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;
