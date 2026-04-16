import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Portfolio from '../../../assets/Portfolio.png';
import Nasa from '../../../assets/Nasa.png';
import VitalSense from '../../../assets/VitalSense.png';
import Tetris from '../../../assets/Tetris.png';
import Driving from '../../../assets/Driving.jpg';
import Compiler from '../../../assets/Compiler.webp';

const projects = [
  {
    id: 1,
    title: 'PickUpESports',
    category: 'Full Stack / Founder',
    imgSrc: Portfolio,
    githubLink: 'https://github.com/AltraDiv/PickUpESports',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'AWS'],
  },
  {
    id: 2,
    title: 'VitalSense / VitalDrive',
    category: 'IoT / Cloud / Analytics',
    imgSrc: VitalSense,
    githubLink: 'https://github.com/AltraDiv/VitalSense',
    tags: ['IoT', 'Cloud APIs', 'Real-time'],
  },
  {
    id: 3,
    title: 'C# Compiler',
    category: 'Language Design',
    imgSrc: Compiler,
    githubLink: 'https://github.com/AltraDiv/CompilerProject',
    tags: ['C#', 'Lexer', 'Parser', 'Architecture'],
  },
  {
    id: 4,
    title: 'C++ Tetris (CS246)',
    category: 'OOP / Design Patterns',
    imgSrc: Tetris,
    githubLink: 'https://github.com/AltraDiv/Tetris-Game',
    tags: ['C++', 'OOP', 'Polymorphism'],
  },
  {
    id: 5,
    title: 'NASA Satellite Agri Tool',
    category: 'Data Science',
    imgSrc: Nasa,
    githubLink: 'https://github.com/AltraDiv/NasaSpaceApps',
    tags: ['Python', 'Data Science', 'NASA API'],
  },
  {
    id: 6,
    title: 'Impaired Driving Detection',
    category: 'Full Stack / AI',
    imgSrc: Driving,
    githubLink: 'https://github.com/AltraDiv/ImpairedDrivingDetector',
    tags: ['AI', 'Full Stack', 'Detection'],
  },
  {
    id: 7,
    title: 'Portfolio Website',
    category: 'Web Development',
    imgSrc: Portfolio,
    githubLink: 'https://github.com/Altradiv/portfolio',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
];

const Projects: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="section-heading text-center mb-12">
        Featured <span className="gradient-text">Projects</span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.a
            key={project.id}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group glass-dark rounded-2xl overflow-hidden card-hover block"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
              <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={14} />
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs text-accent-light uppercase tracking-wider mb-1">{project.category}</p>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-accent-light transition-colors">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip !text-[10px] !px-2 !py-0.5">{tag}</span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
