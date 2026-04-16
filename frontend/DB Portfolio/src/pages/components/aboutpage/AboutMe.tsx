import React from 'react';
import { motion } from 'framer-motion';
import Projects from './Projects';

const skills = [
  { category: 'Languages', items: ['Python', 'TypeScript', 'C#', 'C++', 'SQL'] },
  { category: 'AI/ML', items: ['OpenAI', 'Claude', 'DeepSeek', 'RAG', 'PyTorch', 'MLOps'] },
  { category: 'Backend', items: ['FastAPI', 'REST APIs', 'WebSockets', 'Docker', 'Redis', 'Kafka'] },
  { category: 'Cloud', items: ['AWS', 'Azure', 'Terraform', 'CI/CD', 'Microservices'] },
];

const AboutMe: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Software Engineer with a B.Math from the University of Waterloo. I specialize in backend 
            systems, AI/ML integration, and cloud infrastructure. I've built healthcare AI agents at 
            scale, designed RAG pipelines with multi-provider LLM orchestration, and shipped production 
            microservices serving thousands of users.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h2 className="section-heading text-center mb-10">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark rounded-2xl p-6 card-hover"
              >
                <h3 className="text-sm font-semibold text-accent-light uppercase tracking-wider mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-dark rounded-2xl p-8 mb-20"
        >
          <h2 className="section-heading mb-6">
            Beyond <span className="gradient-text">Code</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <p className="text-2xl mb-2">🚀</p>
              <h3 className="text-white font-semibold mb-1">Waterloo Rocketry</h3>
              <p className="text-gray-500 text-sm">Propulsion engineer; contributed to Canada's first amateur liquid rocket launch</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <p className="text-2xl mb-2">🏆</p>
              <h3 className="text-white font-semibold mb-1">GenAI Hackathon</h3>
              <p className="text-gray-500 text-sm">Best mentor of 1,200+ applicants; mentored 300 students on AI/ML</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <p className="text-2xl mb-2">🎮</p>
              <h3 className="text-white font-semibold mb-1">PickUpESports</h3>
              <p className="text-gray-500 text-sm">Founder — React/Vite + FastAPI + PostgreSQL platform deployed on AWS</p>
            </div>
          </div>
        </motion.div>

        <Projects />
      </div>
    </section>
  );
};

export default AboutMe;
