import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Clock, ExternalLink } from 'lucide-react';
// @ts-ignore
import RoboticHandVideo from '../../../assets/RoboticHand.mov';
import NasaImg from '../../../assets/Nasa.png';
import TetrisImg from '../../../assets/Tetris.png';

const projects = [
  {
    title: 'Robotic Hand',
    description: 'Designed and built a fully articulated robotic hand using servo motors and custom 3D-printed joints, controlled via Arduino with real-time finger-position feedback.',
    tags: ['C++', 'Arduino', 'CAD', 'Servo Control', 'Embedded Systems'],
    video: RoboticHandVideo,
    image: null,
    link: null,
    wip: false,
  },
  {
    title: 'AgriTech — NASA Space Apps Challenge',
    description: 'AI-driven analytics tool built for NASA\'s Space Apps Challenge. Processed MODIS and Landsat satellite imagery to accurately predict groundwater levels and precipitation patterns.',
    tags: ['Python', 'AI/ML', 'MODIS', 'Landsat', 'Satellite Data', 'NASA'],
    video: null,
    image: NasaImg,
    link: null,
    wip: false,
  },
  {
    title: 'C++ Tetris',
    description: 'Engineered a fully interactive Tetris game in C++ using OOP principles including polymorphism and inheritance. Features five adjustable difficulty levels and a dynamic scoring system.',
    tags: ['C++', 'OOP', 'Polymorphism', 'Game Dev'],
    video: null,
    image: TetrisImg,
    link: null,
    wip: false,
  },
  {
    title: 'C# Compiler',
    description: 'Programmed a fully functional custom compiler for C#, implementing lexical analysis, tokenization algorithms, syntax parsing, and error-handling mechanisms from scratch.',
    tags: ['C#', 'Compilers', 'Lexer', 'Parser', 'Tokenization'],
    video: null,
    image: null,
    link: null,
    wip: false,
  },
  {
    title: 'Hovercraft',
    description: 'Built a functional hovercraft from scratch by overpowering small computer fans with 24V of batteries wired in parallel to generate enough lift to float off the ground.',
    tags: ['Hardware', 'Electronics', 'DC Motors', '24V Battery Array'],
    video: null,
    image: null,
    link: null,
    wip: false,
  },
  {
    title: 'Jarvis — Local AI Inference Server',
    description: 'Building a private home AI server that runs open-source models (Llama, Mistral) entirely on local hardware. No cloud, no data leaving the machine.',
    tags: ['Python', 'Llama', 'Ollama', 'Linux', 'Local Inference', 'Self-hosted'],
    video: null,
    image: null,
    link: null,
    wip: true,
  },
];

const VideoCard: React.FC<{ video: string }> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden cursor-pointer group" onClick={toggle}>
      <video
        ref={videoRef}
        src={video}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
      />
      <div className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-200 ${playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
          {playing ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white ml-1" />}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7 }}
      className="glass-dark rounded-2xl p-8 mb-8"
    >
      <h2 className="section-heading gradient-text mb-8">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent/20 transition-all duration-300 flex flex-col gap-4"
          >
            {/* Media */}
            {project.video ? (
              <VideoCard video={project.video} />
            ) : project.image ? (
              <div
                className="aspect-video rounded-xl bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            ) : (
              <div className="aspect-video rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center">
                <span className="text-gray-700 text-xs font-mono tracking-widest uppercase">No preview</span>
              </div>
            )}

            {/* Info */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-white font-semibold text-base flex-1">{project.title}</h3>
                {project.wip && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 shrink-0">
                    <Clock size={9} /> WIP
                  </span>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-accent transition-colors shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-3 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip !text-[10px] !px-2 !py-0.5">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
