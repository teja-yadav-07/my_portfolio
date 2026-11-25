import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, RefreshCw, Zap, Flame, Compass } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../audio/soundEngine';

export const InteractivePlayground: React.FC = () => {
  const [pulseCount, setPulseCount] = useState(0);
  const [rubberOffset, setRubberOffset] = useState({ x: 0, y: 0 });
  const [isPulling, setIsPulling] = useState(false);

  const fireConfetti = () => {
    sound.playWarp();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#ff007f', '#8a2be2', '#ffd700'],
    });
  };

  const handleMouseDown = () => setIsPulling(true);
  const handleMouseUp = () => {
    setIsPulling(false);
    setRubberOffset({ x: 0, y: 0 });
    sound.playClick();
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPulling) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRubberOffset({
      x: Math.max(-100, Math.min(100, x)),
      y: Math.max(-60, Math.min(60, y)),
    });
  };

  return (
    <section id="playground" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs font-mono mb-4">
          <Zap className="w-3.5 h-3.5 text-emerald-400" />
          <span>TACTILE EXPERIMENTATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-6">
          The Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400">Physics Arena</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Test tactile motion dynamics: rubber elasticity, chromatic shockwaves, synthesized acoustic haptics,
          and particle explosions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Rubber Band Elastic Toy */}
        <div
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="glass-panel rounded-3xl p-6 border border-white/10 flex flex-col items-center justify-between h-72 cursor-grab active:cursor-grabbing select-none relative overflow-hidden group"
        >
          <div className="w-full flex justify-between text-xs font-mono text-cyan-400">
            <span>ELASTIC SPRING TENSOR</span>
            <span>HOOKES LAW</span>
          </div>

          <div
            className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-slate-950 font-bold shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-transform duration-75"
            style={{
              transform: `translate(${rubberOffset.x}px, ${rubberOffset.y}px) rotate(${rubberOffset.x * 0.15}deg)`,
            }}
          >
            <Compass className="w-10 h-10 text-slate-950" />
          </div>

          <p className="text-xs font-mono text-slate-400 text-center">
            Pull and release rubber-band mass
          </p>
        </div>

        {/* Shockwave Generator */}
        <div
          onClick={() => {
            sound.playClick();
            setPulseCount((c) => c + 1);
          }}
          onMouseEnter={() => sound.playHover()}
          className="glass-panel rounded-3xl p-6 border border-white/10 flex flex-col items-center justify-between h-72 cursor-pointer relative overflow-hidden group hover:border-pink-500/40 transition-all"
        >
          <div className="w-full flex justify-between text-xs font-mono text-pink-400">
            <span>ACOUSTIC SHOCKWAVE</span>
            <span>PULSE #{pulseCount}</span>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-pink-500/20 border border-pink-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Flame className="w-8 h-8 text-pink-400" />
            </div>
            {pulseCount > 0 && (
              <span
                key={pulseCount}
                className="absolute inset-0 rounded-full border-2 border-pink-400 animate-ping"
              />
            )}
          </div>

          <p className="text-xs font-mono text-slate-400 text-center">
            Click to propagate sonic shockwave
          </p>
        </div>

        {/* Confetti Explosion Blast */}
        <div
          onClick={fireConfetti}
          onMouseEnter={() => sound.playHover()}
          className="glass-panel rounded-3xl p-6 border border-white/10 flex flex-col items-center justify-between h-72 cursor-pointer relative overflow-hidden group hover:border-violet-500/40 transition-all"
        >
          <div className="w-full flex justify-between text-xs font-mono text-violet-400">
            <span>PARTICLE EXPLOSION</span>
            <span>VECTOR BLAST</span>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-violet-600 to-pink-500 flex items-center justify-center text-white shadow-[0_0_30px_rgba(138,43,226,0.4)] group-hover:rotate-12 transition-transform">
              <Sparkles className="w-8 h-8" />
            </div>
          </div>

          <p className="text-xs font-mono text-slate-400 text-center">
            Click for celebration particle cannon
          </p>
        </div>
      </div>
    </section>
  );
};

