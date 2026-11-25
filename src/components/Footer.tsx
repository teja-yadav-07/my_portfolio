import React from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
import { sound } from '../audio/soundEngine';

export const Footer: React.FC = () => {
  const triggerBlast = () => {
    sound.playWarp();
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#ff007f', '#8a2be2'],
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#030508] pt-16 pb-12 overflow-hidden">
      {/* Running Kinetic Ticker */}
      <div className="border-b border-white/10 pb-8 mb-12 overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-stroke hover:text-cyan-400 transition-colors">
          <span>TEJASWINI PADYALA</span>
          <span className="text-cyan-400">✦</span>
          <span>CREATIVE TECHNOLOGIST</span>
          <span className="text-pink-400">✦</span>
          <span>AWARD WINNING MOTION</span>
          <span className="text-violet-400">✦</span>
          <span>REAL-TIME 3D WEBGL</span>
          <span className="text-emerald-400">✦</span>
          <span>GLSL SHADERS</span>
          <span className="text-cyan-400">✦</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-400">
        <div>
          <span>Designed & Engineered by </span>
          <span className="font-bold text-white">Tejaswini Padyala</span>
          <span className="text-slate-600"> • </span>
          <span>All Rights Reserved © 2026</span>
        </div>

        <button
          onClick={triggerBlast}
          onMouseEnter={() => sound.playHover()}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 hover:border-cyan-400 transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Launch Grand Finale Confetti</span>
        </button>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/teja-yadav-07/my_portfolio"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playWarp()}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            GitHub Repo
          </a>
          <span>•</span>
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            60 FPS Ready
          </span>
        </div>
      </div>
    </footer>
  );
};
