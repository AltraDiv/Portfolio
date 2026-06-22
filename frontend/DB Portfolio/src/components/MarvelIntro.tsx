import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

import Hospital from '../assets/Hospital.jpg';
import CrackInterview from '../assets/CrackInterview.jpg';
import Kindr from '../assets/Kindr.jpg';
import Replic from '../assets/Replic.jpg';
import WaterlooProp from '../assets/WaterlooProp.jpg';
import TrackingTool from '../assets/TrackingTool.jpeg';
import PriorityTrackingTool from '../assets/PriorityTrackingTool.jpg';
import Tetris from '../assets/Tetris.png';
import Nasa from '../assets/Nasa.png';
// @ts-ignore
import RoboticHand from '../assets/RoboticHand.mov';

const SOURCE = [
  CrackInterview, Hospital, Replic, Kindr, WaterlooProp,
  TrackingTool, PriorityTrackingTool, Nasa, Tetris, RoboticHand,
];

const TOTAL = 56;
const FRAMES = Array.from({ length: TOTAL }, (_, i) => SOURCE[i % SOURCE.length]);

// Speed ramp that mirrors the Marvel pacing: slow → fast → hold
const frameDelay = (frame: number): number => {
  const p = frame / TOTAL;
  if (p < 0.10) return 420;
  if (p < 0.22) return 260;
  if (p < 0.48) return 125;
  if (p < 0.78) return 90;
  return 150;
};

interface Props {
  onComplete: () => void;
}


export const MarvelIntro: React.FC<Props> = ({ onComplete }) => {
  const [frame, setFrame] = useState(0);
  const frameRef = useRef(0);

  // Recursive image flipper
  useEffect(() => {
    let tid: ReturnType<typeof setTimeout>;
    const tick = () => {
      frameRef.current += 1;
      setFrame(frameRef.current);
      if (frameRef.current < TOTAL) {
        tid = setTimeout(tick, frameDelay(frameRef.current));
      }
    };
    tid = setTimeout(tick, frameDelay(0));
    return () => clearTimeout(tid);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => onComplete(), 7100);
    return () => clearTimeout(t);
  }, [onComplete]);

  const src = FRAMES[Math.min(frame, FRAMES.length - 1)];
  const isVideo = typeof src === 'string' && (src.endsWith('.mov') || src.endsWith('.mp4') || src.endsWith('.webm'));

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[999] overflow-hidden bg-black select-none"
      style={{ height: '100dvh' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.2, ease: 'easeInOut' }}
    >
      {/* ── 3D zooming image/video + name , all share the same transform ── */}
      <motion.div
        className="absolute inset-0"
        style={{ transformStyle: 'preserve-3d', perspective: '1100px' }}
        initial={{ scale: 2.6, rotateX: -7 }}
        animate={{ scale: 1.0, rotateX: 0 }}
        transition={{ duration: 7.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {isVideo ? (
          <video
            key={src}
            src={src}
            autoPlay
            muted
            playsInline
            loop
            className="absolute inset-0 w-full h-full object-contain"
          />
        ) : (
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${src})` }}
          />
        )}

        {/* Name lives inside the 3D layer , zooms and tilts with the images */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2, ease: 'easeOut' }}
          style={{ mixBlendMode: 'screen' }}
        >
          <h1
            className="text-5xl sm:text-7xl font-bold tracking-tight text-center"
            style={{ textShadow: '0 0 80px rgba(96,165,250,0.9), 0 0 160px rgba(59,130,246,0.5)' }}
          >
            <span style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #dbeafe 30%, #60a5fa 60%, #3b82f6 80%, #2563eb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Divjot
            </span>
            {' '}
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Bhogal
            </span>
          </h1>
        </motion.div>
      </motion.div>

      {/* Colour grade , darkens as images slow to a stop */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.38 }}
        transition={{ duration: 6.5 }}
      />

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 75% at 50% 50%, transparent 25%, rgba(0,0,0,0.52) 72%, rgba(0,0,0,0.92) 100%)',
        }}
      />

      {/* Scanlines , subtle texture that screams "real film" */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 6px)',
        }}
      />


      {/* Bottom left , tiny "skip" affordance */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={onComplete}
        className="absolute bottom-3 right-4 text-white/30 text-xs tracking-widest uppercase hover:text-white/60 transition-colors"
        style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.25em' }}
      >
        skip
      </motion.button>
    </motion.div>
  );
};
