import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Propulsion Engineer',
    company: 'Waterloo Rocketry Design Team',
    location: 'Waterloo, ON',
    duration: 'Jun 2023 - Present',
    link: null,
    highlights: [
      "Contributed to Canada's first amateur liquid rocket launch, achieving a ~1.2 km apogee",
      'Directed design and stress analysis of the inter-tank coupler assembly connecting rocket stages; coordinated CAD modeling and machining to ensure structural integrity during launch',
      'Created detailed SolidWorks CAD models; oversaw nozzle machining operations and facilitated cold flow and static fire tests through weekly team coordination ahead of LC competition',
    ],
    tags: ['SolidWorks', 'CAD', 'Propulsion', 'Stress Analysis', 'Static Fire'],
  },
  {
    title: 'Founding Software Engineer',
    company: 'Kindr',
    location: 'Calgary, AB (Remote)',
    duration: 'Apr 2025 - Jun 2026',
    link: null,
    highlights: [
      'Built healthcare AI agents (Ultravox, LiveKit, Rime TTS) serving 2,200+ calls/mo across 52+ clinics',
      'Designed AI orchestration with RAG pipelines and multi-provider LLM load balancing, cutting latency 40%',
      'Led migration to open-source models (DeepSeek GLM), cutting inference costs 60% and eliminating vendor lock-in',
      'Managed infrastructure with Terraform, Redis, Kafka, Alembic, and Application Insights',
    ],
    tags: ['Python', 'FastAPI', 'LLMs', 'Terraform', 'Redis', 'Kafka'],
  },
  {
    title: 'Founder & Software Engineer',
    company: 'PickUp Esports',
    location: 'Waterloo, ON',
    duration: '2025 - Present',
    link: null,
    highlights: [
      'Building a full-stack esports platform (React/Vite, FastAPI, PostgreSQL) deployed on AWS',
      'Partnered with the largest gaming cafes in Ontario to host live tournaments and leagues',
      'Running active paid events with real customers across multiple venues',
      'Designed relational data models for events, participants, and venues with RESTful booking APIs',
    ],
    tags: ['React', 'FastAPI', 'PostgreSQL', 'AWS', 'Python'],
  },
  {
    title: 'Backend Developer Intern',
    company: 'CrackInterview',
    location: 'Toronto, ON',
    duration: 'Jul 2024 - Oct 2024',
    link: 'https://crackinterview.ai/',
    highlights: [
      'Trained and deployed an AI chatbot (DialoGPT, PyTorch) boosting Tier-1 support throughput 30% with 95% accuracy',
      'Built real-time peer-to-peer chat with WebSockets and asyncio, supporting 500+ concurrent users',
      'Integrated video conferencing (WebRTC, SocketIO, PeerJS, TURN) on AWS, increasing engagement 25%',
    ],
    tags: ['PyTorch', 'WebSockets', 'AWS', 'WebRTC'],
  },
  {
    title: 'GenAI Mentor',
    company: 'Genesis GenAI Hackathon',
    location: 'Toronto, ON',
    duration: 'Mar 2024',
    link: null,
    highlights: [
      'Selected among top 1.25% of applicants — 15 chosen out of 1,200+ — and recognized as "Best Mentor"',
      'Mentored 300+ students across API integration, debugging, prompt engineering, and ML techniques',
      'Guided teams building AI-powered products under 24-hour hackathon conditions',
    ],
    tags: ['LLMs', 'Mentorship', 'AI/ML', 'Python'],
  },
  {
    title: 'Junior Full Stack Developer',
    company: 'Replic',
    location: 'Waterloo, ON',
    duration: 'Jul 2021 - May 2022',
    link: null,
    highlights: [
      'Delivered features in ASP.NET MVC/Core with C# and SQL Server (AWS RDS)',
      'Optimized API performance by 20%; added unit testing and CI/CD, cutting bugs 30%',
    ],
    tags: ['C#', 'ASP.NET', 'SQL Server', 'AWS RDS'],
  },
  {
    title: 'Jr. Software Engineer, BI',
    company: 'Trillium Health Partners',
    location: 'Mississauga, ON',
    duration: 'Aug 2019 - Feb 2020',
    link: null,
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
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-blue-500/50 to-transparent" />

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
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors inline-flex items-center gap-1"
                        >
                          {exp.company}
                          <ExternalLink size={11} />
                        </a>
                      ) : (
                        exp.company
                      )}
                      , {exp.location}
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
