import React, { useState } from 'react';
import { InteractiveCursor } from './components/InteractiveCursor';
import { Navigation } from './components/Navigation';
import { Hero3DCanvas } from './components/Hero3DCanvas';
import { PerformanceHUD } from './components/PerformanceHUD';
import { AnimationLabs } from './components/AnimationLabs';
import { MotionArchitectures } from './components/MotionArchitectures';
import { FeaturedWorks } from './components/FeaturedWorks';
import { InteractivePlayground } from './components/InteractivePlayground';
import { AboutAndAccolades } from './components/AboutAndAccolades';
import { Footer } from './components/Footer';
import { Sparkles, ArrowDown, Play, Zap } from 'lucide-react';
import { sound } from './audio/soundEngine';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [speed, setSpeed] = useState(1.0);
  const [wireframe, setWireframe] = useState(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030508] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Custom Physics Magnetic Cursor */}
      <InteractiveCursor />

      {/* Navigation Header */}
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Floating Studio Performance HUD */}
      <PerformanceHUD
        speed={speed}
        setSpeed={setSpeed}
        wireframe={wireframe}
        setWireframe={setWireframe}
      />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Realtime 3D WebGL Three.js Canvas */}
        <Hero3DCanvas speed={speed} wireframe={wireframe} />

        {/* Hero Foreground Content */}
        <div className="relative z-10 pointer-events-none text-center px-4 max-w-5xl mx-auto flex flex-col items-center select-none">
          {/* Status Badge */}
          <div className="pointer-events-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-black/60 backdrop-blur-md text-cyan-300 text-xs font-mono mb-8 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-bold">TEJASWINI PADYALA</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">CREATIVE TECHNOLOGIST & MOTION ARCHITECT</span>
          </div>

          {/* Massive Display Title */}
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black font-display tracking-tight text-white leading-none uppercase mb-6">
            ELITE <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400">
              ANIMATION
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl leading-relaxed mb-10 font-sans">
            High-performance real-time 3D WebGL, procedural GLSL shaders, kinetic typography,
            and synthesized acoustic haptics. Engineered for award-winning digital experiences.
          </p>

          {/* Action Triggers */}
          <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                sound.playWarp();
                handleNavigate('labs');
              }}
              onMouseEnter={() => sound.playHover()}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 text-slate-950 font-black text-xs font-mono tracking-wider uppercase shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Explore 10 Animation Labs</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                handleNavigate('benchmarks');
              }}
              onMouseEnter={() => sound.playHover()}
              className="px-8 py-4 rounded-full border border-white/20 bg-black/40 hover:bg-white/10 text-white font-bold text-xs font-mono tracking-wider uppercase backdrop-blur-md hover:border-cyan-400/50 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Motion Science</span>
            </button>
          </div>
        </div>

        {/* Scroll down indicator */}
        <button
          onClick={() => {
            sound.playClick();
            handleNavigate('labs');
          }}
          className="absolute bottom-8 z-10 text-slate-400 hover:text-cyan-400 transition-colors flex flex-col items-center gap-2 text-xs font-mono cursor-pointer"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </section>

      {/* 10 Dedicated Interactive Labs */}
      <AnimationLabs />

      {/* 6 Core Motion Science Architectures */}
      <MotionArchitectures />

      {/* Flagship Works Showcase */}
      <FeaturedWorks />

      {/* Interactive Physics Playground */}
      <InteractivePlayground />

      {/* About & Terminal Console */}
      <AboutAndAccolades />

      {/* Footer with Kinetic Marquee */}
      <Footer />
    </div>
  );
};

export default App;
