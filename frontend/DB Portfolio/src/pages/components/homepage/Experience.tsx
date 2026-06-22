import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink } from 'lucide-react';

interface Card {
  title: string;
  detail: string;
}

interface Experience {
  company: string;
  title: string;
  location: string;
  duration: string;
  link?: string;
  summary: string;
  cards: Card[];
  tags: string[];
}

const experiences: Experience[] = [
  {
    company: 'PickUp Esports',
    title: 'Founder & Software Engineer',
    location: 'Waterloo, ON',
    duration: '2025 – Present',
    summary: 'Founded an esports platform partnered with the largest gaming cafes in Ontario. Running live tournaments and leagues with active paying customers.',
    cards: [
      { title: 'Ontario Partnerships', detail: 'Signed partnerships with largest gaming cafes across Ontario for venue hosting' },
      { title: 'Live Events', detail: 'Running active paid tournaments and leagues with real customers across multiple venues' },
      { title: 'Full Stack Platform', detail: 'React/Vite frontend, FastAPI backend, PostgreSQL with Alembic, deployed on AWS' },
    ],
    tags: ['React', 'FastAPI', 'PostgreSQL', 'AWS', 'Python'],
  },
  {
    company: 'Kindr',
    title: 'Founding Software Engineer',
    location: 'Calgary, AB (Remote)',
    duration: 'Apr 2025 – Jun 2026',
    summary: 'Founding engineer on a healthcare AI platform serving 52+ dental clinics. Owned end-to-end system architecture — from event-driven data pipelines to LLM infrastructure, database optimization, and platform tooling — with minimal guidance.',
    cards: [
      { title: 'Event-Driven Architecture', detail: 'Built ETL pipelines and an Apache Kafka event bus over Redis and PostgreSQL, decoupling services and significantly reducing database load under production traffic' },
      { title: 'System Design', detail: 'Gathered requirements directly from stakeholders, designed multi-service architecture, and delivered full solutions independently — no playbook, built from scratch' },
      { title: 'Database Optimization', detail: '45% query time reduction via indexing, query planning, and offloading hot reads to Redis; Alembic-versioned schema with zero-downtime migrations' },
      { title: 'LLM Infrastructure', detail: '40% latency drop via multi-provider load balancing across LLM APIs with RAG pipelines; 60% cost cut by migrating to open-source models (DeepSeek GLM)' },
      { title: 'Notification System', detail: 'No-code tool for the marketing team to design and automate platform-wide alerts without engineering involvement' },
      { title: 'Email Delivery Platform', detail: 'Drag-and-drop email builder for internal use, cutting third-party email costs and improving delivery reliability and design consistency' },
    ],
    tags: ['FastAPI', 'PostgreSQL', 'Kafka', 'Redis', 'Terraform', 'LLMs', 'RAG', 'Alembic'],
  },
  {
    company: 'CrackInterview',
    title: 'Backend Developer Intern',
    location: 'Toronto, ON',
    duration: 'Jul 2024 – Oct 2024',
    link: 'https://crackinterview.ai/',
    summary: 'Built AI-powered support tooling and real-time communication infrastructure for an interview prep platform serving hundreds of concurrent users.',
    cards: [
      { title: 'AI Chatbot', detail: 'DialoGPT/PyTorch chatbot boosting Tier-1 support throughput 30% at 95% accuracy' },
      { title: '500+ Concurrent Users', detail: 'Real-time peer-to-peer chat via WebSockets and asyncio' },
      { title: 'Video Conferencing', detail: 'WebRTC + SocketIO + PeerJS + TURN servers on AWS, +25% engagement' },
    ],
    tags: ['PyTorch', 'WebSockets', 'WebRTC', 'AWS', 'FastAPI'],
  },
  {
    company: 'Genesis GenAI',
    title: 'GenAI Mentor',
    location: 'Toronto, ON',
    duration: 'Mar 2024',
    summary: 'Selected among top 1.25% of 1,200+ applicants to mentor 300+ students at Canada\'s largest GenAI hackathon. Awarded "Best Mentor" for exceptional guidance.',
    cards: [
      { title: 'Top 1.25%', detail: '15 chosen out of 1,200+ applicants — recognized as "Best Mentor"' },
      { title: '300+ Students', detail: 'Mentored across API integration, debugging, prompt engineering, and ML techniques' },
      { title: '24h Hackathon', detail: 'Guided teams from idea to working AI product under competition conditions' },
    ],
    tags: ['LLMs', 'Mentorship', 'AI/ML', 'Python'],
  },
  {
    company: 'Waterloo Rocketry',
    title: 'Propulsion Engineer',
    location: 'Waterloo, ON',
    duration: 'Jun 2023 – 2024',
    summary: "Contributed to Canada's first amateur liquid rocket launch, reaching ~1.2 km apogee. Directed inter-tank coupler design, nozzle machining, and static fire tests ahead of LC competition.",
    cards: [
      { title: 'Historic Launch', detail: "Part of the team that achieved Canada's first amateur liquid rocket launch" },
      { title: 'Structural Design', detail: 'Stress analysis and CAD modeling of inter-tank coupler connecting rocket stages' },
      { title: 'Nozzle Machining', detail: 'Oversaw nozzle machining, cold flow tests, and weekly static fire coordination' },
    ],
    tags: ['SolidWorks', 'CAD', 'Propulsion', 'Stress Analysis'],
  },
  {
    company: 'Replic',
    title: 'Junior Full Stack Developer',
    location: 'Waterloo, ON',
    duration: 'Jul 2021 – May 2022',
    summary: 'Delivered full-stack features for an ASP.NET MVC web application, improving API performance and establishing automated testing and CI/CD pipelines.',
    cards: [
      { title: '20% Perf Boost', detail: 'Optimized backend controller logic in ASP.NET MVC/Core with C# and SQL Server' },
      { title: 'CI/CD Pipeline', detail: 'Added automated testing and CI/CD, cutting bugs by 30%' },
    ],
    tags: ['C#', 'ASP.NET', 'SQL Server', 'AWS RDS'],
  },
  {
    company: 'Trillium Health Partners',
    title: 'Jr. Software Engineer, BI',
    location: 'Mississauga, ON',
    duration: 'Aug 2019 – Feb 2020',
    summary: 'Built enterprise tools and dashboards for a major hospital network serving 1.75M+ annual patient visits, improving clinical efficiency and reporting.',
    cards: [
      { title: '35% Efficiency Gain', detail: 'Priority Tracking Tool for 1.75M+ annual patient visits across THP hospitals in the GTA' },
      { title: 'Clinical Dashboards', detail: 'Interactive dashboards using SQL, Oracle, and .NET with continued daily usage' },
    ],
    tags: ['SQL', 'Oracle', '.NET', 'ASP.NET', 'C#'],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="pb-16 overflow-x-clip">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-center pt-16 pb-20"
      >
        <p className="font-mono text-xs tracking-[0.28em] text-accent uppercase mb-3">Experience</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-white">A Timeline of My Work</h2>
      </motion.div>

      {/* Entries */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex flex-col lg:flex-row justify-start pt-16 lg:pt-28 gap-8 lg:gap-16 first:pt-0"
          >
            {/* Left — sticky company name */}
            <div className="lg:sticky lg:top-36 self-start lg:basis-[28%] shrink-0">
              <div className="flex items-center gap-3 lg:block">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">{exp.company.charAt(0)}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-white lg:mt-4 leading-tight">
                  {exp.company}
                </h3>
              </div>
            </div>

            {/* Right — content */}
            <div className="flex-1 min-w-0">
              {/* Role row */}
              <div className="flex flex-wrap items-start justify-between gap-2 mb-5">
                <div>
                  <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                  <p className="text-white/60 text-sm mt-0.5">
                    {exp.location}
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 ml-2 text-accent-light hover:text-accent transition-colors"
                      >
                        <ExternalLink size={11} />
                      </a>
                    )}
                    {' '}· {exp.duration}
                  </p>
                </div>
              </div>

              {/* Summary card */}
              <div className="rounded-2xl bg-white/[0.07] border border-white/12 p-5 flex gap-4 mb-4">
                <div className="p-2 rounded-xl bg-accent/15 text-accent-light shrink-0 h-fit">
                  <Sparkles size={18} />
                </div>
                <p className="text-white text-sm leading-relaxed">{exp.summary}</p>
              </div>

              {/* Highlight cards */}
              <div className={`grid gap-3 ${exp.cards.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                {exp.cards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl bg-white/[0.06] border border-white/10 p-4 hover:border-accent/30 hover:bg-white/[0.09] transition-all duration-300"
                  >
                    <p className="text-white font-semibold text-sm mb-1.5">{card.title}</p>
                    <p className="text-white/80 text-xs leading-relaxed">{card.detail}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {exp.tags.map((tag) => (
                  <span key={tag} className="chip !text-[10px] !px-2 !py-0.5">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
