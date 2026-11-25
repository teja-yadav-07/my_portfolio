import React, { useState } from 'react';
import { ExternalLink, Layers, Cpu, Compass, Sparkles, X, ChevronRight, Play } from 'lucide-react';
import { sound } from '../audio/soundEngine';

export const FeaturedWorks: React.FC = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const works = [
    {
      id: 0,
      title: 'Aether OS Spatial Environment',
      category: 'Spatial UI & Window Inertia',
      timeline: '2026 Flagship',
      imageGradient: 'from-cyan-500/20 via-blue-600/10 to-indigo-950/40',
      description:
        'A spatial operating system interface featuring friction-based drag physics, volumetric glass refraction, and multi-threaded window collision calculations.',
      tags: ['Three.js', 'Spatial Glass', 'Verlet Physics', 'Web Audio'],
      blueprint: {
        easing: 'cubic-bezier(0.16, 1, 0.3, 1) [Apple Fluid]',
        frameBudget: '16.6ms Target (Consistently 60+ FPS)',
        shaders: ['Fresnel Glass Refraction', 'Bilinear Chromatic Filter', 'Drop Shadows'],
        interaction: 'Window inertia with edge rubber-band resistance and velocity damping',
      },
    },
    {
      id: 1,
      title: 'Chronos Kinetic Timepiece',
      category: 'WebGL Exploded Mechanics',
      timeline: 'Interactive 3D',
      imageGradient: 'from-amber-500/20 via-orange-600/10 to-slate-950/40',
      description:
        'Scroll-driven mechanical watch assembly with 120+ interlocking gears, real-time metal anisotropic reflections, and escapement ticking audio synthesis.',
      tags: ['GLSL Shaders', 'Three.js Gears', 'Scroll-driven', 'Procedural Audio'],
      blueprint: {
        easing: 'cubic-bezier(0.25, 1, 0.5, 1) [Chronos Mechanical]',
        frameBudget: '14.2ms GPU Draw Time',
        shaders: ['Anisotropic Metal Sheen', 'PBR Roughness Mapping', 'Ambient Occlusion'],
        interaction: 'Mouse scroll controls exploded mechanical gear view and zoom depth',
      },
    },
    {
      id: 2,
      title: 'NeuroFlow Synaptic Mesh',
      category: 'Generative AI Pulse Visualizer',
      timeline: '50,000 Instanced Particles',
      imageGradient: 'from-pink-500/20 via-violet-600/10 to-purple-950/40',
      description:
        'High-density instanced neural network visualization representing real-time synaptic pulse transmissions with dynamic curve interpolation.',
      tags: ['InstancedMesh', 'CatmullRom Splines', 'Noise Vectors', 'GLSL Compute'],
      blueprint: {
        easing: 'cubic-bezier(0.05, 0.7, 0.1, 1) [Synaptic Pulse]',
        frameBudget: '50,000 Particles @ 60 FPS via GPU Instancing',
        shaders: ['Instanced Transform Matrix Buffer', 'Glow Bloom BloomPass', 'Additive Blending'],
        interaction: 'Pointer hover triggers synaptic neurotransmitter firing across clusters',
      },
    },
    {
      id: 3,
      title: 'Velocita Hypercar Studio',
      category: 'Real-Time Automotive Configurator',
      timeline: 'PBR Shaders & Specular Light',
      imageGradient: 'from-emerald-500/20 via-teal-600/10 to-black',
      description:
        'Photorealistic carbon fiber and metallic pearl clearcoat simulation with studio HDR reflection maps and dynamic aerodynamic smoke streamlines.',
      tags: ['Clearcoat PBR', 'HDRI Reflection', 'Smoke Particles', 'WebGL 2.0'],
      blueprint: {
        easing: 'cubic-bezier(0.77, 0, 0.175, 1) [Velocita Acceleration]',
        frameBudget: 'Multi-pass rendering with HDR bloom tone-mapping',
        shaders: ['Clearcoat Iridescence', 'Carbon Weave Normal Mapping', 'Specular Flare'],
        interaction: '360° orbital camera turntable with dynamic lighting direction keys',
      },
    },
    {
      id: 4,
      title: 'Verve Generative Sound Sculptor',
      category: 'Audio-Reactive 3D Geometry',
      timeline: 'Real-time FFT Synthesis',
      imageGradient: 'from-violet-500/20 via-fuchsia-600/10 to-slate-950/40',
      description:
        'Interactive audio visualizer where 3D geometry deforms and pulses in direct mathematical synchronization with synthesized harmonic frequencies.',
      tags: ['Fast Fourier Transform', 'Web Audio API', 'Mesh Morphing', 'Wireframe'],
      blueprint: {
        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1) [Acoustic Spring]',
        frameBudget: 'Audio analyser node running at 1024 FFT bins',
        shaders: ['Frequency Displacement Vertex Shader', 'Dynamic Color Temperature Matrix'],
        interaction: 'Live interactive sound pads that manipulate 3D topology',
      },
    },
    {
      id: 5,
      title: 'NeoTokyo Editorial Zine',
      category: 'Kinetic Brutalist Publishing',
      timeline: 'Liquid SVG Distortions',
      imageGradient: 'from-red-500/20 via-rose-600/10 to-black',
      description:
        'Horizontal infinite gallery with SVG feDisplacementMap liquid transitions, vertical text marquee skewing, and high-fashion micro-typography.',
      tags: ['SVG Filters', 'Horizontal Scroll', 'Typography Matrix', 'Sound Design'],
      blueprint: {
        easing: 'cubic-bezier(0.19, 1, 0.22, 1) [Editorial Expo]',
        frameBudget: 'Hardware-accelerated CSS transforms and SVG filter kernels',
        shaders: ['feDisplacementMap Liquid Filter', 'High-Contrast Chromatic Threshold'],
        interaction: 'Drag-to-pan horizontal gallery with rubber-band bounds',
      },
    },
  ];

  return (
    <section id="works" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-950/40 text-pink-300 text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>FLAGSHIP PORTFOLIO WORKS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-6">
          Architected For <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-cyan-400 to-emerald-400">Pure Flex</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Deep-dive case studies showcasing technical animation blueprints, GPU compute shaders,
          easing mathematics, and interaction design systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work) => (
          <div
            key={work.id}
            className="group relative rounded-3xl p-6 glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer"
            onClick={() => {
              sound.playClick();
              setActiveModal(work.id);
            }}
            onMouseEnter={() => sound.playHover()}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${work.imageGradient} opacity-40 group-hover:opacity-70 transition-opacity duration-500`}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="text-cyan-400 font-bold">PROJECT 0{work.id + 1}</span>
                <span>{work.timeline}</span>
              </div>

              <h3 className="text-2xl font-black text-white font-display group-hover:text-cyan-300 transition-colors mb-2">
                {work.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {work.description}
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col gap-3">
              <div className="flex flex-wrap gap-1.5">
                {work.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                className="w-full py-2.5 rounded-xl border border-cyan-500/30 bg-cyan-950/30 group-hover:bg-cyan-500 group-hover:text-slate-950 text-cyan-300 text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                <span>View Animation Blueprint</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeModal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl glass-panel-glow bg-[#080c14] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/60 text-slate-200 space-y-6">
            <button
              onClick={() => {
                sound.playClick();
                setActiveModal(null);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <span>ANIMATION BLUEPRINT SPECIFICATION</span>
                <span>•</span>
                <span className="text-pink-400">PROJECT 0{works[activeModal].id + 1}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                {works[activeModal].title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {works[activeModal].category}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[10px] font-mono text-cyan-400 uppercase">Kinetic Easing Curve</div>
                <div className="text-xs font-mono font-bold text-white">
                  {works[activeModal].blueprint.easing}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[10px] font-mono text-emerald-400 uppercase">GPU Performance Budget</div>
                <div className="text-xs font-mono font-bold text-white">
                  {works[activeModal].blueprint.frameBudget}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-[10px] font-mono text-pink-400 uppercase">GLSL Compute & Shaders</div>
              <div className="flex flex-wrap gap-2">
                {works[activeModal].blueprint.shaders.map((sh) => (
                  <span
                    key={sh}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-pink-950/40 border border-pink-500/30 text-pink-300"
                  >
                    {sh}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-[10px] font-mono text-violet-400 uppercase">Physical Micro-Interactions</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {works[activeModal].blueprint.interaction}
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveModal(null);
                }}
                className="px-5 py-2 rounded-full text-xs font-mono font-bold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-all cursor-pointer"
              >
                Close Specification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

