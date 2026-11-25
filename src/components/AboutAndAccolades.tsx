import React, { useState } from 'react';
import { Terminal, Award, Sparkles, Check, Copy, ArrowRight, Code } from 'lucide-react';
import { sound } from '../audio/soundEngine';

export const AboutAndAccolades: React.FC = () => {
  const [command, setCommand] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    'Welcome to Tejaswini Padyala Motion OS v3.8.0',
    'Type "help" to list available commands (skills, awards, stack, contact, clear)',
  ]);
  const [copied, setCopied] = useState(false);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = command.trim().toLowerCase();
    sound.playClick();

    let reply = '';
    if (cmd === 'help') {
      reply = 'Available commands: skills, awards, stack, contact, clear';
    } else if (cmd === 'skills') {
      reply = 'Skills: Real-Time 3D WebGL, GLSL Compute Shaders, Three.js, Mathematical Physics, Kinetic Typography, Procedural Audio Synthesis, Tailwind CSS, React, TypeScript';
    } else if (cmd === 'awards') {
      reply = 'Awards: Awwwards Site of the Day Candidate, FWA of the Day Benchmark, Mobile Excellence, Developer Award Top Tier';
    } else if (cmd === 'stack') {
      reply = 'Stack: Three.js, GLSL, React 18, Vite, Web Audio API, Canvas 2D, Tailwind CSS, TypeScript';
    } else if (cmd === 'contact') {
      reply = 'Contact: tejaswini.padyala@gmail.com | github.com/teja-yadav-07';
    } else if (cmd === 'clear') {
      setTerminalOutput([]);
      setCommand('');
      return;
    } else {
      reply = `Command not recognized: "${cmd}". Type "help" for valid commands.`;
    }

    setTerminalOutput((prev) => [...prev, `> ${command}`, reply]);
    setCommand('');
  };

  const copyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText('tejaswini.padyala@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bio & Credentials */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>CREATIVE TECHNOLOGIST & MOTION ARCHITECT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-tight">
            Tejaswini <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400">Padyala</span>
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            I craft digital experiences at the intersection of mathematical physics, real-time 3D shaders,
            and high-fashion typography. My mission is to elevate web interfaces from static documents into
            visceral, tactile, award-winning interactive art.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
            {[
              { label: '60+ FPS', desc: 'GPU Optimized' },
              { label: '10 Peak Labs', desc: 'Awwwards Referrals' },
              { label: '0 External Audio', desc: 'Pure Synthesizer' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl font-black font-mono text-cyan-400">{stat.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{stat.desc}</div>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={copyEmail}
              onMouseEnter={() => sound.playHover()}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Direct Email'}</span>
            </button>

            <a
              href="https://github.com/teja-yadav-07"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playWarp()}
              className="px-6 py-3 rounded-full border border-white/10 hover:border-cyan-400/40 bg-white/5 text-slate-300 hover:text-white text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>GitHub Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Console */}
        <div className="lg:col-span-6">
          <div className="glass-panel-glow rounded-3xl border border-cyan-500/30 overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-black/60 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400">tejaswini@motion-engine:~</span>
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            </div>

            {/* Terminal Screen */}
            <div className="p-5 font-mono text-xs text-slate-300 space-y-2 h-72 overflow-y-auto scrollbar-thin">
              {terminalOutput.map((line, idx) => (
                <div
                  key={idx}
                  className={line.startsWith('>') ? 'text-cyan-400 font-bold' : 'text-slate-300'}
                >
                  {line}
                </div>
              ))}
            </div>

            {/* Terminal Input */}
            <form onSubmit={handleCommandSubmit} className="flex border-t border-white/10 bg-black/40">
              <span className="px-3 py-2 text-cyan-400 font-mono text-xs select-none">$</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                placeholder="type 'help', 'skills', 'awards'..."
                className="w-full bg-transparent px-1 py-2 font-mono text-xs text-white focus:outline-none placeholder:text-slate-600"
              />
              <button
                type="submit"
                className="px-4 py-2 font-mono text-xs text-cyan-400 hover:text-white transition-colors cursor-pointer"
              >
                Enter
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
