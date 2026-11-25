import React, { useState } from 'react';
import { Cpu, Sparkles, Terminal, Code2, ArrowUpRight, CheckCircle2, Zap, Atom } from 'lucide-react';
import { sound } from '../audio/soundEngine';

export const MotionArchitectures: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<number>(0);

  const architectures = [
    {
      id: 1,
      name: 'Vector-Field Fluid Dynamics',
      tagline: 'Autonomous Particle Swarms & Centrifugal Curl Noise',
      category: 'GPU Compute & Particle Simulation',
      algorithm: 'F_total = F_centrifugal + (v_curl × ∇P) - γ(v_current)',
      description:
        'A vector-field simulation framework calculating continuous velocity damping and tangential perpendicular swirl vectors on 2,500+ particles at 60 FPS, creating viscous fluid streams that react elastically to pointer velocity.',
      techStack: ['Three.js InstancedBuffer', 'Curl Noise Vector Fields', 'GPU Particle Shaders', 'Euler Integration'],
      codeSnippet: `// Centrifugal Particle Force Calculation
const dist = Math.hypot(dx, dy);
const force = 0.8 / Math.max(dist * 0.05, 1.0);
p.vx += (dx / dist) * force * 0.4 + (-dy / dist) * force * 1.2;
p.vy += (dy / dist) * force * 0.4 + (dx / dist) * force * 1.2;
p.vx *= 0.96; p.vy *= 0.96; // Viscous damping`,
    },
    {
      id: 2,
      name: 'Volumetric Chromatic Displacement',
      tagline: 'Multi-Channel RGB Spatial Separation',
      category: 'GLSL Post-Processing & Glitch Optics',
      algorithm: 'C_out = vec4(T(u + δ_r).r, T(u).g, T(u + δ_b).b, 1.0)',
      description:
        'A multi-pass fragment shader pipeline that decouples color channels based on user velocity vectors and synthesized audio transients, creating realistic physical prism dispersion across high-contrast typography.',
      techStack: ['GLSL Fragment Pipeline', 'Bilinear Screen Sampling', 'Audio Frequency Modulation', 'Scanline Shaders'],
      codeSnippet: `// Multi-Pass RGB Split Offset
vec2 uv = gl_FragCoord.xy / u_resolution;
float split = sin(u_time * 8.0) * u_intensity * 0.015;
float r = texture2D(u_texture, uv + vec2(-split, split)).r;
float g = texture2D(u_texture, uv).g;
float b = texture2D(u_texture, uv + vec2(split, -split)).b;
gl_FragColor = vec4(r, g, b, 1.0);`,
    },
    {
      id: 3,
      name: 'Momentum Kinetic Typography Matrix',
      tagline: 'Velocity Skewing & 3D Split Character Flip',
      category: 'Interactive CSS Matrix Physics',
      algorithm: 'θ_skew = clamp((v_cursor / w_viewport) * k_elastic, -14°, 14°)',
      description:
        'A momentum-based typography engine that converts pointer travel velocity into physical geometric skewing angles and split-character 3D flip rolls with non-linear spring return damping.',
      techStack: ['CSS Matrix Transformations', 'Momentum Tracking', 'SplitText Geometry', 'Spring Restitution'],
      codeSnippet: `// Velocity-to-Skew Interpolation
const currentSkew = (deltaX / (containerWidth / 2)) * 14.0;
textElement.style.transform = \`skewX(\${currentSkew.toFixed(2)}deg)\`;
// Elastic spring rebound when velocity reaches threshold`,
    },
    {
      id: 4,
      name: 'Decoupled Spatial 3.5D Parallax',
      tagline: 'Gyroscopic Multi-Plane Coordinate Separation',
      category: 'Spatial Optics & Perspective Mathematics',
      algorithm: 'R_card(x,y) = rotateX((y - 0.5) * -24°) · rotateY((x - 0.5) * 28°)',
      description:
        'Decomposes flat UI elements into distinct spatial z-axis planes (Z: 0px, 25px, 40px, 50px). Computes real-time incident glare angles and specular highlight positions following cursor coordinates.',
      techStack: ['3D Perspective Matrix', 'Incident Glare Angle Math', 'Z-Plane Decoupling', 'Specular Highlights'],
      codeSnippet: `// Gyroscopic Parallax Coordinates
const rotX = (mouseY - 0.5) * -24.0;
const rotY = (mouseX - 0.5) * 28.0;
card.style.transform = \`rotateX(\${rotX}deg) rotateY(\${rotY}deg)\`;
sheen.style.background = \`radial-gradient(circle at \${mouseX * 100}% \${mouseY * 100}%, ...)\`;`,
    },
    {
      id: 5,
      name: 'Optical Glass Refraction & Fresnel',
      tagline: 'Incident Light Vector Acrylic Reflection',
      category: 'Physical Surface Simulation',
      algorithm: 'R(θ) = R_0 + (1 - R_0)(1 - cos θ)^5',
      description:
        'A physical surface simulation implementing Schlick’s approximation of the Fresnel equations. Generates dynamic acrylic backdrop blur, specular highlights, and chromatic edge thresholds on glass cards.',
      techStack: ['Fresnel Equations', 'Dynamic Specular Tracing', 'Backdrop Filter Kernels', 'Light Angle Coordinates'],
      codeSnippet: `// Fresnel Incident Light Highlight
const lightAngleX = (cursorX / cardWidth) * 100;
const lightAngleY = (cursorY / cardHeight) * 100;
glassCard.style.background = \`radial-gradient(circle at \${lightAngleX}% \${lightAngleY}%,
  rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 50%, rgba(0,0,0,0.4) 100%)\`;`,
    },
    {
      id: 6,
      name: 'Procedural Web Audio Haptics',
      tagline: 'Mathematical Sound Synthesis with Zero External Assets',
      category: 'Native Web Audio API Engine',
      algorithm: 'f(t) = f_0 · e^(-t / τ),   Gain(t) = G_0 · (1 - t / T)',
      description:
        'A self-contained audio synthesizer creating spatial haptics using native Web Audio API oscillators. Features exponential frequency sweeps, sub-bass click punches, digital glitch bursts, and a generative dual-oscillator ambient chord drone.',
      techStack: ['Web Audio API', 'OscillatorNode Synthesis', 'BiquadFilter Lowpass', 'Detuned Frequency Beating'],
      codeSnippet: `// Procedural Generative Drone (Detuned Perfect Fifth)
const osc1 = ctx.createOscillator(); osc1.frequency.value = 110.0; // A2
const osc2 = ctx.createOscillator(); osc2.frequency.value = 165.5; // E3 + 0.5Hz beat
const filter = ctx.createBiquadFilter(); filter.frequency.value = 380;
osc1.connect(filter); osc2.connect(filter); filter.connect(gain);`,
    },
  ];

  return (
    <section id="benchmarks" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-950/40 text-violet-300 text-xs font-mono mb-4">
          <Cpu className="w-3.5 h-3.5 text-violet-400" />
          <span>PROPRIETARY MOTION FRAMEWORKS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-6">
          Core Animation <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400">Architectures</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          The algorithmic animation systems designed by Tejaswini Padyala. Deep mathematical modeling,
          custom compute shaders, and micro-haptics engineered for award-winning digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left List of Systems */}
        <div className="lg:col-span-5 space-y-2">
          {architectures.map((arch, index) => {
            const isSelected = selectedSystem === index;
            return (
              <button
                key={arch.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedSystem(index);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                  isSelected
                    ? 'glass-panel-glow border-cyan-400/80 bg-cyan-950/60 shadow-[0_0_25px_rgba(0,240,255,0.2)]'
                    : 'glass-panel border-white/5 hover:border-white/20 bg-black/40 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-cyan-400 text-slate-950' : 'bg-white/10 text-slate-400 group-hover:text-white'
                    }`}
                  >
                    0{arch.id}
                  </span>
                  <div>
                    <h4
                      className={`text-sm font-bold transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {arch.name}
                    </h4>
                    <p className="text-[11px] text-slate-400">{arch.category}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-cyan-400 translate-x-0.5 -translate-y-0.5' : 'text-slate-500'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Active Deep Dive Card */}
        <div className="lg:col-span-7 glass-panel-glow rounded-3xl p-6 sm:p-8 border border-cyan-500/30 sticky top-24">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <span>SYSTEM SPECIFICATION 0{architectures[selectedSystem].id}</span>
                <span>•</span>
                <span className="text-pink-400">{architectures[selectedSystem].category}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                {architectures[selectedSystem].name}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {architectures[selectedSystem].tagline}
              </p>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              60 FPS GPU Pipeline
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Atom className="w-3.5 h-3.5 text-cyan-400" />
                <span>Mathematical Foundation</span>
              </h5>
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-xs sm:text-sm font-mono font-bold text-cyan-300">
                {architectures[selectedSystem].algorithm}
              </div>
            </div>

            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-pink-400" />
                <span>Architectural Overview</span>
              </h5>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {architectures[selectedSystem].description}
              </p>
            </div>

            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Core Implementation Logic</span>
              </h5>
              <pre className="p-3.5 rounded-xl bg-[#030508] border border-white/10 text-[11px] font-mono text-slate-300 overflow-x-auto">
                <code>{architectures[selectedSystem].codeSnippet}</code>
              </pre>
            </div>

            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Key Primitives & Shaders
              </h5>
              <div className="flex flex-wrap gap-2">
                {architectures[selectedSystem].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono"
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
