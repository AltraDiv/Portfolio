import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Founding Software Engineer',
    company: 'Kindr',
    location: 'Calgary, AB (Remote)',
    duration: 'Apr 2025 - Apr 2026',
    highlights: [
      'Built healthcare AI agents (Ultravox, LiveKit, Rime TTS) serving 2,200+ calls/mo across 52+ clinics',
      'Designed AI orchestration with RAG pipelines and multi-provider LLM load balancing',
      'Built versioned FastAPI microservices with auth, validation, and zero-downtime releases',
      'Managed infrastructure with Terraform, Redis, Kafka, and Application Insights',
    ],
    tags: ['Python', 'FastAPI', 'LLMs', 'Terraform', 'Redis', 'Kafka'],
  },
  {
    title: 'Backend Developer Intern',
    company: 'CrackInterview',
    location: 'Mississauga, ON',
    duration: 'Jul 2024 - Oct 2024',
    highlights: [
      'Built AI chatbot (DialoGPT, PyTorch) boosting Tier-1 support throughput 30%',
      'Built real-time messaging with WebSockets and asyncio',
      'Integrated video conferencing via WebRTC with secure AWS deployment',
    ],
    tags: ['PyTorch', 'WebSockets', 'AWS', 'WebRTC'],
  },
  {
    title: 'Junior Full Stack Developer',
    company: 'Replic',
    location: 'Waterloo, ON',
    duration: 'Jul 2021 - May 2022',
    highlights: [
      'Delivered features in ASP.NET MVC/Core with C# and SQL Server (AWS RDS)',
      'Optimized API performance by 20%; added unit testing and CI/CD',
    ],
    tags: ['C#', 'ASP.NET', 'SQL Server', 'AWS RDS'],
  },
  {
    title: 'Jr. Software Engineer, BI',
    company: 'Trillium Health Partners',
    location: 'Mississauga, ON',
    duration: 'Aug 2019 - Feb 2020',
    highlights: [
      'Built Priority Tracking Tool for 1.75M+ annual patient visits, improving efficiency 35%',
      'Developed dashboards using SQL, Oracle, and .NET for clinical reporting',
    ],
    tags: ['SQL', 'Oracle', '.NET', 'ETL'],
  },
];

const Experience: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7 }}
      className="glass-dark rounded-2xl p-8 mb-8"
    >
      <h2 className="section-heading gradient-text mb-8">Experience</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-purple-500/50 to-transparent" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full bg-gray-950 border-2 border-accent flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent-light" />
              </div>

              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent/20 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                    <p className="text-accent-light flex items-center gap-1.5 text-sm">
                      <Building2 size={14} />
                      {exp.company} — {exp.location}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 flex items-center gap-1 whitespace-nowrap">
                    <Calendar size={12} />
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-1.5 mb-3">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-gray-400 text-sm flex gap-2">
                      <span className="text-accent-light mt-1.5 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="chip !text-[10px] !px-2 !py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
