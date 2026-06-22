import React from 'react';

/**
 * Liquid gradient background , blobs orbit around offset pivots and merge
 * through an SVG "goo" filter for a fluid, lava-lamp feel. Tuned for a dark
 * theme with a blue/indigo/cyan/violet palette.
 */
const GradientBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
      {/* Base wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 80% at 75% 20%, rgba(37,99,235,0.14) 0%, transparent 60%), radial-gradient(ellipse 70% 70% at 15% 90%, rgba(99,102,241,0.10) 0%, transparent 60%)',
        }}
      />

      {/* SVG goo filter , merges nearby blobs into liquid metaballs */}
      <svg className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Blob field */}
      <div
        className="absolute inset-0"
        style={{ filter: 'url(#goo) blur(50px)' }}
      >
        {/* blue , vertical drift */}
        <div
          className="absolute w-[70%] h-[70%] top-[calc(50%-35%)] left-[calc(50%-35%)] mix-blend-screen blob-vertical"
          style={{
            background: 'radial-gradient(circle at center, rgba(59,130,246,0.7) 0%, rgba(59,130,246,0) 50%)',
            transformOrigin: 'center center',
          }}
        />
        {/* indigo , orbit tight */}
        <div
          className="absolute w-[70%] h-[70%] top-[calc(50%-35%)] left-[calc(50%-35%)] mix-blend-screen blob-circle-rev"
          style={{
            background: 'radial-gradient(circle at center, rgba(99,102,241,0.65) 0%, rgba(99,102,241,0) 50%)',
            transformOrigin: 'calc(50% - 380px)',
          }}
        />
        {/* cyan , orbit wide */}
        <div
          className="absolute w-[70%] h-[70%] top-[calc(50%-35%+180px)] left-[calc(50%-35%-420px)] mix-blend-screen blob-circle"
          style={{
            background: 'radial-gradient(circle at center, rgba(6,182,212,0.6) 0%, rgba(6,182,212,0) 50%)',
            transformOrigin: 'calc(50% + 380px)',
          }}
        />
        {/* violet , horizontal sweep */}
        <div
          className="absolute w-[70%] h-[70%] top-[calc(50%-35%)] left-[calc(50%-35%)] mix-blend-screen blob-horizontal"
          style={{
            background: 'radial-gradient(circle at center, rgba(139,92,246,0.5) 0%, rgba(139,92,246,0) 50%)',
            transformOrigin: 'calc(50% - 220px)',
          }}
        />
        {/* deep blue , large slow orbit */}
        <div
          className="absolute w-[90%] h-[90%] top-[calc(50%-45%)] left-[calc(50%-45%)] mix-blend-screen blob-circle-slow"
          style={{
            background: 'radial-gradient(circle at center, rgba(37,99,235,0.55) 0%, rgba(37,99,235,0) 50%)',
            transformOrigin: 'calc(50% - 600px) calc(50% + 400px)',
          }}
        />
      </div>

      {/* Masked grid for depth */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />
    </div>
  );
};

export default GradientBackground;
