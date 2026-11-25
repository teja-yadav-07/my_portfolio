import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Layers,
  Move,
  Eye,
  Sliders,
  Zap,
  RotateCcw,
  Maximize2,
  Atom,
  Flame,
  Volume2
} from 'lucide-react';
import { sound } from '../audio/soundEngine';

export const AnimationLabs: React.FC = () => {
  const [activeLab, setActiveLab] = useState<number>(0);

  const labs = [
    {
      id: 0,
      title: 'Centrifugal Particle Vortex',
      engine: 'Autonomous Vector-Field Fluid Simulation',
      badge: 'Fluid Dynamics & Particles',
      description:
        'Real-time mouse-repelling particle storm with custom turbulence noise, dynamic drag velocity, and chromatic persistence trail.',
      tags: ['Particle Physics', 'Turbulence Field', 'Velocity Vectors'],
    },
    {
      id: 1,
      title: 'Cybernetic Chromatic Pulse',
      engine: 'Real-Time Chromatic GLSL Displacement',
      badge: 'Chromatic Aberration & Audio Reactive',
      description:
        'Volumetric cyber grid with real-time RGB split displacement, dynamic glitch pulses, and synthesized audio frequencies.',
      tags: ['RGB Split', 'GLSL Glitch', 'Audio Synthesizer'],
    },
    {
      id: 2,
      title: 'Momentum Kinetic Typography',
      engine: 'Velocity-Driven Kinetic Typography Matrix',
      badge: 'Velocity Skew & Split Flip',
      description:
        'High-fashion brutalist typography with mouse-velocity skewing, 3D character roll-over, and magnetic rebound springs.',
      tags: ['Kinetic Text', 'Velocity Skew', 'Split Text 3D'],
    },
    {
      id: 3,
      title: 'Multi-Planar Spatial Parallax',
      engine: 'Decoupled Multi-Plane Gyroscopic Parallax',
      badge: 'Multi-Plane Perspective Tilt',
      description:
        'Layered spatial card stack with gyroscopic mouse coordinates, dynamic specular sheen angle, and decoupled z-axis planes.',
      tags: ['Depth Parallax', 'Specular Sheen', 'Perspective 3D'],
    },
    {
      id: 4,
      title: 'Spatial Optical Glass Refraction',
      engine: 'Incident Light Fresnel Dispersion & Acrylic Blur',
      badge: 'Optical Refraction & Specular Light',
      description:
        'Hyper-realistic spatial glass with dynamic light angle tracking, acrylic blur, chromatic dispersion rims, and tactile elevation.',
      tags: ['Optical Refraction', 'Acrylic Blur', 'Dynamic Specular'],
    },
    {
      id: 5,
      title: 'Sub-Pixel Laser Illuminator',
      engine: 'Sub-Pixel Circuit Tracing & Radial Flashlight Mask',
      badge: 'Cursor Flashlight & Circuit Grid',
      description:
        'Interactive cursor ray tracking across a dark micro-grid, illuminating hidden electrical traces with metallic edge highlights.',
      tags: ['Ray Tracing', 'Grid Illumination', 'Micro-Haptics'],
    },
    {
      id: 6,
      title: 'Harmonic Gradient Silk',
      engine: 'Continuous Sine-Cosine Wave Interference',
      badge: 'Procedural Wave Shader',
      description:
        'Continuous fluid mesh undulation with mathematical Sine/Cosine interference, mouse velocity friction, and iridescent color palettes.',
      tags: ['Wave Interference', 'Gradient Mesh', 'Smooth Damping'],
    },
    {
      id: 7,
      title: 'Verlet Rigid Body Physics',
      engine: 'Verlet Particle Dynamics with Collision Audio Chimes',
      badge: 'Interactive Rigid Body Physics',
      description:
        'Throw, bump, and juggle floating physics elements with gravity restitution, mass inertia, and procedural collision chimes.',
      tags: ['Rigid Physics', 'Collision Sound', 'Verlet / Euler'],
    },
    {
      id: 8,
      title: 'Simplex Organic Mesh Deformer',
      engine: 'Perlin Surface Ripple & Viscous Wave Tensor',
      badge: 'Perlin Surface Ripple & Deformation',
      description:
        'Interactive organic blob mesh that deforms under cursor pressure, generating radial waves that bounce off boundaries.',
      tags: ['Mesh Deformation', 'Perlin Noise', 'Surface Waves'],
    },
    {
      id: 9,
      title: 'Elastic Jelly Tensor Dock',
      engine: 'Non-Linear Spring Restitution & Liquid Morphing',
      badge: 'Elastic Spring & Liquid Morphing',
      description:
        'Gelatinous magnetic buttons that stretch along pull vectors with rubber-band spring dampening and liquid blob merging.',
      tags: ['Elastic Springs', 'Magnetic Pull', 'Liquid Morph'],
    },
  ];

  return (
    <section id="labs" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5 animate-spin-slow text-cyan-400" />
          <span>ORIGINAL INTERACTIVE EXPERIMENTS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-6">
          10 Peak Animation <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400">Masterclasses</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Engineered from scratch by Tejaswini Padyala. Each lab represents a distinct algorithmic animation paradigm
          combining GLSL shaders, mathematical physics, kinetic typography, and procedural audio.
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none justify-start lg:justify-center">
        {labs.map((lab) => {
          const isActive = activeLab === lab.id;
          return (
            <button
              key={lab.id}
              onClick={() => {
                sound.playClick();
                setActiveLab(lab.id);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`flex-shrink-0 px-4 py-2 rounded-xl border text-xs font-mono transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'border-cyan-400 bg-cyan-950/60 text-cyan-200 shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                  : 'border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-cyan-400 animate-ping' : 'bg-slate-500'}`} />
              <span className="font-bold">0{lab.id + 1}</span>
              <span className="font-sans font-medium">{lab.title.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-cyan-500/30 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono text-cyan-400 font-bold">LAB 0{labs[activeLab].id + 1}</span>
              <span className="text-slate-500">•</span>
              <span className="text-xs font-medium text-pink-400">{labs[activeLab].engine}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {labs[activeLab].title}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
              {labs[activeLab].description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {labs[activeLab].tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full h-[450px] sm:h-[520px] rounded-2xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center">
          {activeLab === 0 && <LabLusionVortex />}
          {activeLab === 1 && <LabActiveTheoryGlitch />}
          {activeLab === 2 && <LabBasementTypography />}
          {activeLab === 3 && <LabLocomotiveParallax />}
          {activeLab === 4 && <LabAppleVisionSpatial />}
          {activeLab === 5 && <LabLinearIlluminator />}
          {activeLab === 6 && <LabStripeGradient />}
          {activeLab === 7 && <LabBrunoSimonPhysics />}
          {activeLab === 8 && <LabDogstudioDeformer />}
          {activeLab === 9 && <LabCubertoElastic />}
        </div>
      </div>
    </section>
  );
};

/* LAB 01 */
const LabLusionVortex: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, px: 0, py: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }[] = [];

    const colors = ['#00f0ff', '#ff007f', '#8a2be2', '#00ffcc', '#ffffff'];

    for (let i = 0; i < 400; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handlePointerMove);

    let animId: number;

    const render = () => {
      ctx.fillStyle = 'rgba(5, 7, 12, 0.18)';
      ctx.fillRect(0, 0, width, height);

      const mx = mouseRef.current.x || width / 2;
      const my = mouseRef.current.y || height / 2;

      for (const p of particles) {
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 5) {
          const force = 0.8 / Math.max(dist * 0.05, 1);
          p.vx += (dx / dist) * force * 0.4 + (-dy / dist) * force * 1.2;
          p.vy += (dy / dist) * force * 0.4 + (dx / dist) * force * 1.2;
        }

        p.vx *= 0.96;
        p.vy *= 0.96;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', handlePointerMove);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center cursor-crosshair">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 pointer-events-none text-center bg-black/60 px-6 py-3 rounded-full border border-cyan-500/30 backdrop-blur-md">
        <p className="text-xs font-mono text-cyan-300">
          🌀 Move cursor around to generate dynamic centrifugal particle swirl
        </p>
      </div>
    </div>
  );
};

/* LAB 02 */
const LabActiveTheoryGlitch: React.FC = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [sliceCount, setSliceCount] = useState(6);

  const triggerGlitch = () => {
    sound.playGlitch();
    setGlitchActive(true);
    setSliceCount(Math.floor(Math.random() * 8) + 4);
    setTimeout(() => setGlitchActive(false), 400);
  };

  return (
    <div
      onMouseMove={triggerGlitch}
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden cursor-pointer group bg-gradient-to-b from-[#080d1a] to-[#030508]"
    >
      <div className="absolute inset-0 bg-cyber-grid opacity-30 transform perspective-1000 rotate-x-60 scale-150" />

      <div className="relative z-10 flex flex-col items-center p-8 text-center select-none">
        <div className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase mb-2 flex items-center gap-2">
          <Atom className="w-4 h-4 animate-spin text-pink-400" />
          <span>CYBERNETIC RGB CHROMATIC DISPLACEMENT ENGINE</span>
        </div>

        <div className="relative text-5xl sm:text-7xl font-black font-display tracking-wider uppercase text-white">
          <span className={glitchActive ? 'text-transparent' : 'text-white'}>
            HYPER MATRIX
          </span>

          {glitchActive && (
            <>
              <span
                className="absolute inset-0 text-cyan-400 select-none mix-blend-screen opacity-90 transition-transform"
                style={{ transform: `translate(${-sliceCount * 1.5}px, ${sliceCount}px)` }}
              >
                HYPER MATRIX
              </span>
              <span
                className="absolute inset-0 text-pink-500 select-none mix-blend-screen opacity-90 transition-transform"
                style={{ transform: `translate(${sliceCount * 1.5}px, ${-sliceCount}px)` }}
              >
                HYPER MATRIX
              </span>
              <div
                className="absolute w-full h-2 bg-white/40 left-0"
                style={{ top: `${Math.random() * 100}%` }}
              />
            </>
          )}
        </div>

        <p className="text-xs font-mono text-slate-400 mt-4 max-w-md">
          Active pointer movement triggers real-time RGB split shaders and procedural FM frequency sweeps.
        </p>

        <button
          onClick={triggerGlitch}
          className="mt-6 px-4 py-2 rounded-full border border-pink-500/40 bg-pink-950/40 text-pink-300 text-xs font-mono hover:bg-pink-900/60 transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(255,0,127,0.3)]"
        >
          <Zap className="w-3.5 h-3.5" /> Overdrive Pulse
        </button>
      </div>
    </div>
  );
};

/* LAB 03 */
const LabBasementTypography: React.FC = () => {
  const [skew, setSkew] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const computedSkew = (x / (rect.width / 2)) * 14;
    setSkew(computedSkew);
  };

  const handleMouseLeave = () => {
    setSkew(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden bg-black p-6 cursor-ew-resize select-none"
    >
      <div
        className="transition-transform duration-150 ease-out flex flex-col items-center gap-3"
        style={{ transform: `skewX(${skew}deg)` }}
      >
        <div className="text-4xl sm:text-7xl font-black font-display tracking-tighter uppercase text-stroke hover:text-cyan-400 transition-colors">
          TEJASWINI
        </div>
        <div className="text-4xl sm:text-7xl font-black font-display tracking-tighter uppercase text-white">
          EXPERIENCE
        </div>
        <div className="text-4xl sm:text-7xl font-black font-display tracking-tighter uppercase text-stroke hover:text-pink-400 transition-colors">
          DESIGN LAB
        </div>
      </div>

      <div className="absolute bottom-6 flex items-center gap-4 text-xs font-mono text-cyan-400 bg-black/70 px-4 py-2 rounded-full border border-white/10">
        <span>Current Velocity Skew:</span>
        <span className="font-bold text-white">{skew.toFixed(1)}°</span>
      </div>
    </div>
  );
};

/* LAB 04 */
const LabLocomotiveParallax: React.FC = () => {
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [sheen, setSheen] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setRot({
      x: (y - 0.5) * -24,
      y: (x - 0.5) * 28,
    });
    setSheen({
      x: x * 100,
      y: y * 100,
    });
  };

  const handleMouseLeave = () => {
    setRot({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full flex items-center justify-center perspective-1000 p-8 cursor-pointer"
    >
      <div
        className="relative w-80 sm:w-96 h-64 sm:h-72 rounded-3xl p-6 transition-transform duration-200 ease-out border border-cyan-500/30 shadow-2xl overflow-hidden glass-panel-glow"
        style={{
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40 transition-opacity"
          style={{
            background: `radial-gradient(circle at ${sheen.x}% ${sheen.y}%, rgba(0,240,255,0.4) 0%, rgba(255,0,127,0.15) 35%, transparent 70%)`,
          }}
        />

        <div style={{ transform: 'translateZ(40px)' }} className="transition-transform">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-300 mb-4">
            <span>SPATIAL 3.5D ENGINE</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          </div>
          <h4 className="text-2xl font-black text-white font-display">
            Decoupled Spatial Plane
          </h4>
        </div>

        <div style={{ transform: 'translateZ(25px)' }} className="mt-4 transition-transform">
          <p className="text-xs text-slate-300 leading-relaxed">
            Multi-planar parallax tracking separates the foreground geometry, mid-ground copy, and specular reflection for natural depth perception.
          </p>
        </div>

        <div
          style={{ transform: 'translateZ(50px)' }}
          className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/10 pt-3"
        >
          <span>Rot X: {rot.x.toFixed(1)}°</span>
          <span>Rot Y: {rot.y.toFixed(1)}°</span>
          <span className="text-cyan-400">Depth: 50px</span>
        </div>
      </div>
    </div>
  );
};

/* LAB 05 */
const LabAppleVisionSpatial: React.FC = () => {
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLightPos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full h-full flex items-center justify-center p-8 bg-gradient-to-tr from-[#05070e] via-[#091024] to-[#04060c] cursor-pointer"
    >
      <div className="absolute w-60 h-60 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 blur-3xl opacity-30 animate-pulse" />

      <div
        className="relative z-10 w-80 sm:w-96 rounded-3xl p-7 border border-white/20 backdrop-blur-2xl shadow-2xl transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${lightPos.x}% ${lightPos.y}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 50%, rgba(0,0,0,0.4) 100%)`,
          boxShadow: `0 20px 50px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.4)`,
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-cyan-400" />
          <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
            Spatial Acrylic Refraction Shader
          </span>
        </div>
        <h4 className="text-xl font-extrabold text-white mb-2">
          Holographic Glass Element
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed mb-6">
          Specular reflection tracks the dynamic incident light vector across the surface plane with continuous Fresnel dispersion.
        </p>

        <div className="flex items-center justify-between text-xs font-mono text-slate-400 bg-white/5 p-3 rounded-xl border border-white/10">
          <span>Incident Angle:</span>
          <span className="text-cyan-300 font-bold">
            {lightPos.x.toFixed(0)}%, {lightPos.y.toFixed(0)}%
          </span>
        </div>
      </div>
    </div>
  );
};

/* LAB 06 */
const LabLinearIlluminator: React.FC = () => {
  const [spot, setSpot] = useState({ x: -200, y: -200 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpot({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full h-full bg-[#05070a] overflow-hidden p-8 flex items-center justify-center cursor-none"
    >
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />

      <div
        className="pointer-events-none absolute w-96 h-96 rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          left: spot.x,
          top: spot.y,
          background: 'radial-gradient(circle, rgba(0,240,255,0.22) 0%, rgba(138,43,226,0.12) 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10 grid grid-cols-3 gap-6 max-w-lg w-full">
        {['AUTH_KEY', 'VECTOR_INDEX', 'SHADER_PIPE', 'GPU_TENSOR', 'STREAM_SYNC', 'CACHE_HITS'].map(
          (name, i) => (
            <div
              key={name}
              className="p-4 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] group"
            >
              <div className="text-[10px] font-mono text-slate-500 group-hover:text-cyan-400">
                MODULE 0{i + 1}
              </div>
              <div className="text-xs font-bold font-mono text-slate-300 group-hover:text-white mt-1">
                {name}
              </div>
            </div>
          )
        )}
      </div>

      <div className="absolute bottom-4 text-xs font-mono text-slate-500">
        Flashlight coordinates: X={spot.x.toFixed(0)} Y={spot.y.toFixed(0)}
      </div>
    </div>
  );
};

/* LAB 07 */
const LabStripeGradient: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    let t = 0;
    let animId: number;

    const render = () => {
      t += 0.02;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < 5; i++) {
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, `hsla(${(t * 20 + i * 40) % 360}, 85%, 55%, 0.4)`);
        grad.addColorStop(0.5, `hsla(${(t * 20 + i * 40 + 60) % 360}, 85%, 50%, 0.3)`);
        grad.addColorStop(1, `hsla(${(t * 20 + i * 40 + 120) % 360}, 90%, 60%, 0.4)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 30) {
          const y =
            height * 0.5 +
            Math.sin(x * 0.005 + t + i) * 60 +
            Math.cos(x * 0.01 - t * 0.5 + i * 2) * 40;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 glass-panel px-6 py-4 rounded-2xl border border-white/20 text-center">
        <h4 className="text-lg font-bold text-white mb-1">Procedural Harmonic Mesh</h4>
        <p className="text-xs text-slate-300">Continuous sine-cosine harmonic wave interference</p>
      </div>
    </div>
  );
};

/* LAB 08 */
const LabBrunoSimonPhysics: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    interface Ball {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      label: string;
    }

    const balls: Ball[] = [
      { x: 150, y: 80, vx: 3, vy: 1, radius: 28, color: '#00f0ff', label: 'THREE.JS' },
      { x: 280, y: 120, vx: -2, vy: 2, radius: 34, color: '#ff007f', label: 'GLSL' },
      { x: 420, y: 70, vx: 2, vy: -1, radius: 30, color: '#8a2be2', label: 'MOTION' },
      { x: 550, y: 140, vx: -3, vy: 2, radius: 32, color: '#00ffcc', label: 'PHYSICS' },
    ];

    let dragIndex = -1;

    const handleMouseDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      balls.forEach((b, i) => {
        const dist = Math.hypot(b.x - mx, b.y - my);
        if (dist < b.radius) {
          dragIndex = i;
          sound.playClick();
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (dragIndex === -1) return;
      const rect = canvas.getBoundingClientRect();
      balls[dragIndex].x = e.clientX - rect.left;
      balls[dragIndex].y = e.clientY - rect.top;
      balls[dragIndex].vx = 0;
      balls[dragIndex].vy = 0;
    };

    const handleMouseUp = () => {
      if (dragIndex !== -1) {
        balls[dragIndex].vx = (Math.random() - 0.5) * 8;
        balls[dragIndex].vy = -5;
        dragIndex = -1;
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    let animId: number;
    const gravity = 0.28;
    const bounce = 0.78;

    const update = () => {
      ctx.fillStyle = '#06080e';
      ctx.fillRect(0, 0, width, height);

      balls.forEach((b, i) => {
        if (i !== dragIndex) {
          b.vy += gravity;
          b.x += b.vx;
          b.y += b.vy;

          if (b.y + b.radius > height) {
            b.y = height - b.radius;
            b.vy = -b.vy * bounce;
            b.vx *= 0.98;
            if (Math.abs(b.vy) > 1.5) sound.playClink(0.9 + i * 0.2);
          }
          if (b.x - b.radius < 0) {
            b.x = b.radius;
            b.vx = -b.vx * bounce;
          } else if (b.x + b.radius > width) {
            b.x = width - b.radius;
            b.vx = -b.vx * bounce;
          }
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.shadowColor = b.color;
        ctx.shadowBlur = 18;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.fillStyle = '#030508';
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(b.label, b.x, b.y);
        ctx.restore();
      });

      animId = requestAnimationFrame(update);
    };

    update();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="relative w-full h-full cursor-grab active:cursor-grabbing">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute top-4 left-4 bg-black/60 px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono text-cyan-300">
        👆 Grab and fling the rigid physics tokens
      </div>
    </div>
  );
};

/* LAB 09 */
const LabDogstudioDeformer: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    setOffset({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden cursor-pointer"
    >
      <div
        className="w-64 h-64 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-600 to-pink-500 blur-md transition-all duration-300 animate-pulse-slow"
        style={{
          borderRadius: `${50 + offset.x}% ${50 - offset.x}% ${50 + offset.y}% ${50 - offset.y}% / ${50 - offset.y}% ${50 + offset.x}% ${50 - offset.x}% ${50 + offset.y}%`,
          transform: `translate(${offset.x * 2}px, ${offset.y * 2}px) scale(1.15)`,
          boxShadow: '0 0 60px rgba(0,240,255,0.4)',
        }}
      />
      <div className="absolute pointer-events-none text-center">
        <h4 className="text-xl font-black font-display text-white">Dynamic Organic Blob</h4>
        <p className="text-xs font-mono text-cyan-300 mt-1">Simplex Deformation Tensor</p>
      </div>
    </div>
  );
};

/* LAB 10 */
const LabCubertoElastic: React.FC = () => {
  const [pull, setPull] = useState({ x: 0, y: 0 });
  const [isPulling, setIsPulling] = useState(false);

  const handleMouseDown = () => setIsPulling(true);
  const handleMouseUp = () => {
    setIsPulling(false);
    setPull({ x: 0, y: 0 });
    sound.playWarp();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPulling) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPull({ x: Math.max(-120, Math.min(120, x)), y: Math.max(-120, Math.min(120, y)) });
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="relative w-full h-full flex items-center justify-center bg-[#070b14] select-none cursor-grab active:cursor-grabbing"
    >
      <div
        className="px-8 py-5 rounded-3xl bg-gradient-to-r from-cyan-500 to-pink-500 text-slate-950 font-black text-sm tracking-wider uppercase shadow-[0_0_35px_rgba(0,240,255,0.5)] transition-all duration-75 flex items-center gap-3"
        style={{
          transform: `translate(${pull.x}px, ${pull.y}px) rotate(${pull.x * 0.1}deg)`,
        }}
      >
        <span>Elastic Rubber Dock</span>
        <Flame className="w-4 h-4 text-white" />
      </div>

      <div className="absolute bottom-6 text-xs font-mono text-slate-400">
        Pull and release button to test elastic spring dampening
      </div>
    </div>
  );
};
