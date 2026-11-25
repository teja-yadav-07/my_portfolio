import React, { useState } from 'react';
import { ExternalLink, Award, Sparkles, Terminal, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { sound } from '../audio/soundEngine';

export const BenchmarkReferences: React.FC = () => {
  const [selectedSite, setSelectedSite] = useState<number>(0);

  const benchmarks = [
    {
      id: 1,
      name: 'Lusion',
      url: 'https://lusion.co',
      badge: 'FWA & Awwwards Site of the Year',
      category: 'Real-time WebGL & Fluid Dynamics',
      signature: 'Interactive particle storm, refractive glass shaders, fluid cursor dragging',
      breakdown:
        'Lusion revolutionized interactive 3D on the web by fusing compute-shader style particle simulation with tactile mouse repulsion. In Tejaswini’s portfolio, this is engineered using a custom vector-field attraction math model running at 60 FPS.',
      techStack: ['WebGL', 'GLSL Fragment Shaders', 'Three.js', 'Vector Turbulence'],
    },
    {
      id: 2,
      name: 'Active Theory',
      url: 'https://activetheory.net',
      badge: '100+ Awwwards & Digital Pioneer',
      category: 'Cyberpunk Aesthetic & Audio Reactivity',
      signature: 'Atmospheric volumetric wireframes, RGB split chromatic displacement, sound synthesis',
      breakdown:
        'Active Theory pioneers cinematic digital experiences where visual motion is tightly coupled to audio frequency spectrums. Tejaswini implements this with procedural Web Audio API synthesizers and post-processing glitch channels.',
      techStack: ['Web Audio API', 'Chromatic Aberration', 'Raymarching', 'Kinetic Shaders'],
    },
    {
      id: 3,
      name: 'Basement Studio',
      url: 'https://basement.studio',
      badge: 'Awwwards Studio of the Year',
      category: 'Brutalist Kinetic Typography',
      signature: 'Velocity-skew typography, split-character 3D flip rolls, high-fashion layout',
      breakdown:
        'Basement popularized aggressive brutalist motion where typography physically reacts to user scroll velocity and cursor physics. Tejaswini’s typography system features instantaneous momentum skewing and elastic snap springs.',
      techStack: ['Kinetic CSS', 'Matrix Transformations', 'Momentum Physics', 'SplitText'],
    },
    {
      id: 4,
      name: 'Studio Freight',
      url: 'https://studiofreight.com',
      badge: 'Lenis Smooth Scroll Authors',
      category: 'Momentum Scroll & Micro-Interactions',
      signature: 'Silky smooth momentum physics, decoupled multi-plane layers, refined spatial hierarchy',
      breakdown:
        'Studio Freight redefined web scrolling smoothness with Lenis. Tejaswini harnesses non-blocking momentum lerping and cubic-bezier interpolation for instantaneous tactile responsiveness.',
      techStack: ['Lenis Physics', 'Lerp Interpolation', 'Viewport Culling', 'CSS Variables'],
    },
    {
      id: 5,
      name: 'Locomotive',
      url: 'https://locomotive.ca',
      badge: 'Locomotive Scroll Creators',
      category: 'Depth Parallax & Mask Morphing',
      signature: 'Multi-layered 3.5D spatial cards, specular glare calculations, perspective warping',
      breakdown:
        'Locomotive masterfully exploits human depth perception by decomposing flat UI cards into independent Z-space layers with cursor-reactive incident glare angles.',
      techStack: ['Perspective 3D', 'Clip-path Morph', 'Layer Decoupling', 'Specular Math'],
    },
    {
      id: 6,
      name: 'Apple Pro Keynote & Vision Pro',
      url: 'https://apple.com/apple-vision-pro',
      badge: 'Spatial Computing Benchmark',
      category: 'Optical Refraction & Glassmorphism',
      signature: 'Hyper-realistic acrylic blur, specular light angle tracking, spatial UI elevation',
      breakdown:
        'Apple’s spatial design system sets the standard for physical glass: dynamic specular highlights that follow the incident light angle, subtle chromatic edges, and multi-tiered z-elevation.',
      techStack: ['Fresnel Equations', 'Dynamic Specular', 'Backdrop Filter', 'Light Vector Tracking'],
    },
    {
      id: 7,
      name: 'Linear',
      url: 'https://linear.app',
      badge: 'Dark Mode SaaS Motion Gold Standard',
      category: 'Micro-Haptics & Laser Illuminations',
      signature: 'Spotlight flashlight cursor, glowing animated border gradients, crisp spring feedback',
      breakdown:
        'Linear defined the aesthetic of modern developer tools: an obsidian dark palette illuminated by delicate cursor spotlights, precision millimeter borders, and sub-pixel spring haptics.',
      techStack: ['Radial Masking', 'Conic Gradients', 'Spring Physics', 'Micro-Haptics'],
    },
    {
      id: 8,
      name: 'Bruno Simon',
      url: 'https://bruno-simon.com',
      badge: 'Awwwards Site of the Year 2019/2020',
      category: 'Interactive 3D Physics Toy World',
      signature: 'Rigid body collisions, throw and toss physics, game-loop mechanics on the web',
      breakdown:
        'Bruno Simon turned the web portfolio into a playable playground. Tejaswini’s physics engine allows visitors to fling, bump, and bounce UI tokens with restitution, mass inertia, and collision chimes.',
      techStack: ['Rigid Body Engine', 'Verlet Integration', 'Collision Detection', 'Sound Triggers'],
    },
    {
      id: 9,
      name: 'Dogstudio',
      url: 'https://dogstudio.co',
      badge: 'Webby & Awwwards Agency',
      category: 'Organic 3D Mesh Deformation',
      signature: 'Simplex noise displacement, organic creature animations, responsive mesh ripples',
      breakdown:
        'Dogstudio blends narrative art with interactive 3D creatures that ripple when touched. Tejaswini integrates mathematical Simplex noise shaders to morph geometric meshes into fluid organisms.',
      techStack: ['Simplex Noise', 'Vertex Displacement', 'Normal Recalculation', 'Three.js'],
    },
    {
      id: 10,
      name: 'Cuberto',
      url: 'https://cuberto.com',
      badge: 'Masters of Fluid UI Motion',
      category: 'Elastic Jelly & Magnetic Docking',
      signature: 'Trailing jelly cursor, rubber-band button stretching, circular modal reveals',
      breakdown:
        'Cuberto leads the motion design world with tactile UI components that feel like viscous liquid: buttons that stretch towards the cursor, magnetic snap-ins, and gelatinous spring-backs.',
      techStack: ['Magnetic Lerp', 'SVG Liquid Filters', 'Spring Elasticity', 'Rubber-band Math'],
    },
  ];

  return (
    <section id="benchmarks" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-950/40 text-violet-300 text-xs font-mono mb-4">
          <Award className="w-3.5 h-3.5 text-violet-400" />
          <span>CURATED DESIGN DNA</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-6">
          Referenced From The <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400">Top 10 Peak Studios</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Award-winning design does not happen in isolation. Tejaswini Padyala’s work studies, references,
          and pushes forward the foundational techniques developed by these 10 legendary digital pioneers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left List */}
        <div className="lg:col-span-5 space-y-2">
          {benchmarks.map((site, index) => {
            const isSelected = selectedSite === index;
            return (
              <button
                key={site.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedSite(index);
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
                    0{site.id}
                  </span>
                  <div>
                    <h4
                      className={`text-sm font-bold transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {site.name}
                    </h4>
                    <p className="text-[11px] text-slate-400">{site.category}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 hidden sm:block">
                    {site.badge.split(' ')[0]}
                  </span>
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
                <span>STUDIO REFERENCE 0{benchmarks[selectedSite].id}</span>
                <span>•</span>
                <span className="text-pink-400">{benchmarks[selectedSite].badge}</span>
              </div>
              <h3 className="text-3xl font-black text-white font-display">
                {benchmarks[selectedSite].name}
              </h3>
            </div>

            <a
              href={benchmarks[selectedSite].url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playWarp()}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all cursor-pointer"
            >
              <span>Visit Official Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-6">
            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Signature Peak Innovation</span>
              </h5>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-slate-200">
                &ldquo;{benchmarks[selectedSite].signature}&rdquo;
              </div>
            </div>

            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-pink-400" />
                <span>Tejaswini&apos;s Engineering Adaptation</span>
              </h5>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {benchmarks[selectedSite].breakdown}
              </p>
            </div>

            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Core Shaders & Primitives Employed
              </h5>
              <div className="flex flex-wrap gap-2">
                {benchmarks[selectedSite].techStack.map((tech) => (
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
