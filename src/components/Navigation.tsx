import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Radio, Sparkles, Code2, Zap } from 'lucide-react';
import { sound } from '../audio/soundEngine';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [isMuted, setIsMuted] = useState(sound.getMuted());
  const [isAmbient, setIsAmbient] = useState(sound.getIsAmbientPlaying());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    sound.setMuted(next);
    sound.playClick();
  };

  const toggleAmbientSound = () => {
    const active = sound.toggleAmbient();
    setIsAmbient(active);
    sound.playClick();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 py-4 transition-all duration-300">
      <nav
        className={`flex items-center justify-between gap-3 md:gap-6 px-4 md:px-6 py-2.5 rounded-full border transition-all duration-500 max-w-5xl w-full ${
          scrolled
            ? 'glass-panel-glow bg-[#080c14]/90 shadow-2xl shadow-cyan-950/40 border-cyan-500/30'
            : 'glass-panel bg-[#080c14]/60 border-white/10'
        }`}
      >
        <button
          onClick={() => {
            sound.playWarp();
            onNavigate('hero');
          }}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-pink-500 p-[1.5px] transition-transform duration-500 group-hover:rotate-180">
            <div className="w-full h-full bg-[#030508] rounded-full flex items-center justify-center">
              <span className="text-xs font-black tracking-wider text-cyan-400 group-hover:text-pink-400 transition-colors">
                TP
              </span>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="text-xs font-black tracking-widest uppercase text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <span>Tejaswini Padyala</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
            </div>
            <div className="text-[10px] text-slate-400 font-mono tracking-wider">
              Creative Technologist & Motion Dev
            </div>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {[
            { id: 'labs', label: '10 Animation Labs', icon: Sparkles },
            { id: 'benchmarks', label: 'Design DNA (10 Sites)', icon: Code2 },
            { id: 'works', label: 'Master Works', icon: Zap },
            { id: 'playground', label: 'Physics Arena', icon: Sparkles },
            { id: 'about', label: 'Bio & Accolades', icon: null },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  sound.playClick();
                  onNavigate(item.id);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleAmbientSound}
            onMouseEnter={() => sound.playHover()}
            title={isAmbient ? 'Stop Generative Ambient Drone' : 'Start Ethereal Generative Drone'}
            className={`p-2 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
              isAmbient
                ? 'border-pink-500/50 bg-pink-950/40 text-pink-300 shadow-[0_0_15px_rgba(255,0,127,0.3)]'
                : 'border-white/10 hover:border-white/30 text-slate-400 hover:text-white bg-white/5'
            }`}
          >
            <Radio className={`w-3.5 h-3.5 ${isAmbient ? 'animate-pulse text-pink-400' : ''}`} />
            {isAmbient && (
              <div className="flex items-center gap-0.5 h-2.5">
                <span className="w-0.5 bg-pink-400 h-2 animate-[pulse_0.4s_ease-in-out_infinite]" />
                <span className="w-0.5 bg-pink-400 h-3 animate-[pulse_0.7s_ease-in-out_infinite]" />
                <span className="w-0.5 bg-pink-400 h-1.5 animate-[pulse_0.5s_ease-in-out_infinite]" />
              </div>
            )}
          </button>

          <button
            onClick={toggleMute}
            onMouseEnter={() => sound.playHover()}
            title={isMuted ? 'Unmute UI Audio Haptics' : 'Mute UI Audio Haptics'}
            className={`p-2 rounded-full border transition-all cursor-pointer ${
              isMuted
                ? 'border-red-500/30 bg-red-950/20 text-red-400'
                : 'border-cyan-500/30 bg-cyan-950/30 text-cyan-400 hover:border-cyan-400'
            }`}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => {
              sound.playWarp();
              onNavigate('about');
            }}
            onMouseEnter={() => sound.playHover()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 rounded-full shadow-[0_0_18px_rgba(0,240,255,0.4)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Let&apos;s Build</span>
            <span className="text-[10px]">↗</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
