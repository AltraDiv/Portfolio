import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    label: 'Languages',
    description: 'My bread and butter. Python and Go for backend, TypeScript when I have to touch the frontend.',
    items: ['Python', 'Go', 'TypeScript', 'JavaScript', 'C#', 'SQL', 'C'],
  },
  {
    label: 'Frameworks & APIs',
    description: "FastAPI is home. I've shipped production systems across the full stack.",
    items: ['FastAPI', 'React', 'Node.js', 'ASP.NET', 'Flask', 'WebSockets', 'WebRTC', 'TailwindCSS'],
  },
  {
    label: 'Infrastructure',
    description: 'I manage infra with code. Terraform, containers, queues, the boring stuff that keeps things running.',
    items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Redis', 'Kafka', 'PostgreSQL', 'MongoDB', 'Linux'],
  },
  {
    label: 'AI / ML',
    description: 'Building with LLMs before it was cool. RAG pipelines, voice AI, and now running inference locally.',
    items: ['LLMs', 'RAG Pipelines', 'PyTorch', 'Ultravox', 'LiveKit', 'Rime TTS', 'Llama'],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="py-24 border-b border-white/5" id="work">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.28em] text-accent uppercase mb-3">Tech Stack</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">The Building Blocks</h2>
        </motion.div>

        <div className="space-y-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.6 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-16">
                {/* Category label + description */}
                <div className="lg:w-64 shrink-0">
                  <h3 className="text-white font-semibold text-lg mb-2">{cat.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{cat.description}</p>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2.5 flex-1">
                  {cat.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.05 + ii * 0.04, duration: 0.3 }}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-gray-300 text-sm font-mono hover:border-accent/40 hover:text-accent transition-all duration-200 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>

              {ci < categories.length - 1 && (
                <div className="mt-16 h-px bg-white/5" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
