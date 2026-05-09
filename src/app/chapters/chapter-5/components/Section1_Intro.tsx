import React from 'react';
import { Camera, SunDim, Layers } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section1_Intro() {
  return (
    <section id="introduction" className="space-y-6 stagger scroll-mt-24">
      <span className="claude-kicker text-orange-400">Section 5.1</span>
      <h2 className="text-3xl font-bold text-white">Introduction to Projection Radiography</h2>

      <div className="claude-surface p-8 mb-8">
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Projection radiography (conventional radiography) is the most commonly used method of medical imaging utilizing x-rays. It represents a projection of the three-dimensional volume of the body onto a two-dimensional imaging surface. 
        </p>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Conceptually, it is useful to think of a projection radiograph as a <strong>shadow cast by a semitransparent body illuminated by x-rays</strong>.
        </p>

        <div className="mb-8 w-full max-w-2xl mx-auto">
           <svg viewBox="0 0 400 300" className="w-full h-auto bg-slate-900/50 border border-slate-700 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] p-4">
              <defs>
                 <linearGradient id="beamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#facc15" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#facc15" stopOpacity="0.1" />
                 </linearGradient>
                 <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                       <feMergeNode in="coloredBlur"/>
                       <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                 </filter>
              </defs>

              {/* Point Source */}
              <circle cx="200" cy="30" r="6" className="fill-yellow-400 animate-pulse" filter="url(#glow)" />
              <text x="215" y="35" className="fill-yellow-400 text-xs font-bold tracking-wide">X-Ray Source</text>
              
              {/* Diverging Beams (Background) */}
              <polygon points="200,30 60,250 340,250" fill="url(#beamGrad)" className="opacity-30" />
              <path d="M 200,35 L 50,250 M 200,35 L 100,250 M 200,35 L 300,250 M 200,35 L 350,250 M 200,35 L 200,250" className="stroke-yellow-400/20 stroke-1" strokeDasharray="4 4" />
              
              <g className="animate-[pulse_4s_ease-in-out_infinite]">
                 {/* Attenuating Object (e.g., Bone/Tissue) */}
                 <ellipse cx="200" cy="140" rx="60" ry="30" className="fill-purple-500/30 stroke-purple-400 stroke-2 backdrop-blur-sm" />
                 <ellipse cx="220" cy="140" rx="20" ry="10" className="fill-purple-900/80 stroke-purple-700 stroke-1" /> {/* Denser part */}
                 <text x="280" y="145" className="fill-purple-300 text-xs font-medium">Patient Tissue</text>
              </g>

              {/* Detector Plane */}
              <rect x="40" y="250" width="320" height="15" rx="4" className="fill-slate-800 stroke-slate-600 stroke-2 shadow-xl" />
              <text x="365" y="262" className="fill-emerald-400 text-xs font-bold">Detector</text>

              {/* Projected Shadow on Detector */}
              {/* Outer light shadow */}
              <ellipse cx="200" cy="250" rx="90" ry="6" className="fill-slate-900/90 blur-[1px]" />
              {/* Inner dark shadow */}
              <ellipse cx="230" cy="250" rx="30" ry="4" className="fill-black blur-[2px]" /> 
              
              {/* Animated Photons passing through */}
              <circle cx="125" cy="125" r="2" className="fill-yellow-300 animate-[ping_2s_linear_infinite]" />
              <circle cx="275" cy="160" r="2" className="fill-yellow-300 animate-[ping_2.5s_linear_infinite]" />
              <circle cx="180" cy="80" r="2" className="fill-yellow-300 animate-[ping_1.8s_linear_infinite]" />
           </svg>
           <p className="text-center text-xs text-slate-500 mt-3 font-medium">Fig 1: 3D to 2D projection casting a shadow based on tissue density.</p>
        </div>        <div className="grid md:grid-cols-3 gap-6">
           <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
              <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                 <Camera className="w-4 h-4 text-orange-400" /> Advantages
              </h3>
              <ul className="text-sm text-slate-400 space-y-2">
                 <li>• Very short exposure time (0.1 seconds)</li>
                 <li>• Large area imaging (e.g., 14 x 17 inches)</li>
                 <li>• High spatial resolution and low cost</li>
              </ul>
           </div>

           <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
              <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                 <SunDim className="w-4 h-4 text-yellow-400" /> Low Dose
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                 A chest x-ray requires about 3-4 mR, which is roughly equivalent to only one-hundredth of the annual background radiation dose.
              </p>
           </div>

           <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl border-l-4 border-l-red-500">
              <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                 <Layers className="w-4 h-4 text-red-400" /> Major Limitation
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                 Lack of depth resolution. Superimpositions of shadows from overlying and underlying tissues hide details and limit contrast.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}
