import React, { useState, useEffect } from 'react';
import { Activity, Gauge, Eye, Play, FastForward, Cpu } from 'lucide-react';
import { sound } from '../audio/soundEngine';

interface PerformanceHUDProps {
  speed: number;
  setSpeed: (speed: number) => void;
  wireframe: boolean;
  setWireframe: (wf: boolean) => void;
}

export const PerformanceHUD: React.FC<PerformanceHUDProps> = ({
  speed,
  setSpeed,
  wireframe,
  setWireframe,
}) => {
  const [fps, setFps] = useState(60);
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<number[]>([60, 60, 59, 60, 60, 60, 58, 60]);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const measure = (now: number) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        const currentFps = Math.round((frameCount * 1000) / (now - lastTime));
        setFps(currentFps);
        setHistory((prev) => [...prev.slice(1), Math.min(60, currentFps)]);
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(measure);
    };

    animId = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-40 font-mono text-[11px] select-none">
      <button
        onClick={() => {
          sound.playClick();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={() => sound.playHover()}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
          isOpen
            ? 'glass-panel-glow border-cyan-400 bg-cyan-950/80 text-cyan-200'
            : 'glass-panel border-white/10 hover:border-cyan-500/40 bg-black/60 text-slate-300'
        }`}
      >
        <Activity className={`w-3.5 h-3.5 ${fps >= 55 ? 'text-emerald-400' : 'text-amber-400'} animate-pulse`} />
        <span className="font-bold">{fps} FPS</span>
        <span className="text-[10px] text-slate-400">|</span>
        <span className="text-slate-400 font-sans tracking-wide">HUD {isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="mt-2.5 p-3.5 rounded-2xl glass-panel-glow bg-[#080c14]/95 border border-cyan-500/30 w-72 shadow-2xl shadow-black/80 space-y-3 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5 text-cyan-300 font-bold">
              <Cpu className="w-3.5 h-3.5" />
              <span>GPU ENGINE METRICS</span>
            </div>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              OPTIMIZED
            </span>
          </div>

          <div>
            <div className="flex justify-between text-[10px] text-slate-400 mb-1">
              <span>Frame Latency</span>
              <span className="text-emerald-400">{(1000 / (fps || 60)).toFixed(1)} ms</span>
            </div>
            <div className="flex items-end gap-1 h-6 bg-black/50 p-1 rounded border border-white/5">
              {history.map((val, idx) => (
                <div
                  key={idx}
                  className="flex-1 bg-gradient-to-t from-cyan-600 to-cyan-300 rounded-t transition-all duration-300"
                  style={{ height: `${(val / 60) * 100}%` }}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5">
              <span className="flex items-center gap-1">
                <Gauge className="w-3 h-3 text-cyan-400" /> Time Dilation
              </span>
              <span className="text-cyan-300 font-bold">{speed}x Speed</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { label: '0.3x SloMo', val: 0.3, icon: Play },
                { label: '1.0x Normal', val: 1.0, icon: Play },
                { label: '2.0x Warp', val: 2.0, icon: FastForward },
              ].map((m) => (
                <button
                  key={m.label}
                  onClick={() => {
                    sound.playClick();
                    setSpeed(m.val);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`py-1 px-1 rounded text-center transition-all cursor-pointer ${
                    speed === m.val
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_10px_rgba(0,240,255,0.5)]'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-1 flex items-center justify-between border-t border-white/10">
            <span className="flex items-center gap-1 text-[10px] text-slate-400">
              <Eye className="w-3 h-3 text-violet-400" /> Shader Geometry Mode
            </span>
            <button
              onClick={() => {
                sound.playGlitch();
                setWireframe(!wireframe);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                wireframe
                  ? 'bg-pink-500 text-white shadow-[0_0_10px_rgba(255,0,127,0.5)]'
                  : 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
              }`}
            >
              {wireframe ? 'WIREFRAME' : 'SURFACE MESH'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
