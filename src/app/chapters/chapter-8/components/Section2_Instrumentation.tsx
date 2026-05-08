import React from 'react';
import { Camera, Zap, Cpu, Grid } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section2_Instrumentation() {
  return (
    <section id="instrumentation" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-indigo-400">Section 8.2</span>
        <h2 className="text-3xl font-bold text-white mt-2">The Anger Camera</h2>
        <p className="text-slate-400 mt-4 leading-relaxed mb-6">
          The primary instrument for planar scintigraphy is the Anger scintillation camera (invented by Hal Anger in the 1950s). It consists of a collimator, a large scintillation crystal, an array of photomultiplier tubes (PMTs), and positioning logic circuitry.
        </p>
        
        <svg viewBox="0 0 400 200" className="w-full max-w-2xl mx-auto h-48 mb-8 bg-slate-900 border border-slate-700 rounded-lg p-2 shadow-inner">
           {/* Patient / Source */}
           <path d="M 120,180 Q 200,160, 280,180" className="fill-none stroke-purple-700 stroke-[10]" />
           <circle cx="200" cy="170" r="5" className="fill-red-400" /> {/* Tumor / Hotspot */}
           <text x="215" y="175" className="fill-red-400 text-[10px]">Source</text>
           
           {/* Gamma Rays */}
           <path d="M 200,165 L 200,125" className="stroke-red-400 stroke-1 stroke-dashed" strokeDasharray="4 2">
             <animate attributeName="stroke-dashoffset" from="6" to="0" dur="0.8s" repeatCount="indefinite" />
           </path> {/* Straight */}
           <path d="M 200,165 L 160,125" className="stroke-red-400 stroke-1 stroke-dashed" strokeDasharray="4 2">
             <animate attributeName="stroke-dashoffset" from="6" to="0" dur="0.8s" repeatCount="indefinite" />
           </path> {/* Angled */}
           <path d="M 200,165 L 240,125" className="stroke-red-400 stroke-1 stroke-dashed" strokeDasharray="4 2">
             <animate attributeName="stroke-dashoffset" from="6" to="0" dur="0.8s" repeatCount="indefinite" />
           </path> {/* Angled */}
           
           {/* Collimator (Lead Septa) */}
           <rect x="100" y="100" width="200" height="25" className="fill-slate-800" />
           {/* Holes */}
           <g className="stroke-slate-950 stroke-[4]">
              <line x1="120" y1="100" x2="120" y2="125" />
              <line x1="140" y1="100" x2="140" y2="125" />
              <line x1="160" y1="100" x2="160" y2="125" />
              <line x1="180" y1="100" x2="180" y2="125" />
              <line x1="200" y1="100" x2="200" y2="125" /> {/* Open path */}
              <line x1="220" y1="100" x2="220" y2="125" />
              <line x1="240" y1="100" x2="240" y2="125" />
              <line x1="260" y1="100" x2="260" y2="125" />
              <line x1="280" y1="100" x2="280" y2="125" />
           </g>
           
           {/* Gamma Ray blocked */}
           <circle cx="160" cy="125" r="2" className="fill-red-500" />
           <circle cx="240" cy="125" r="2" className="fill-red-500" />
           
           {/* Gamma Ray passes */}
           <path d="M 200,100 L 200,85" className="stroke-red-400 stroke-1 stroke-dashed" strokeDasharray="4 2">
             <animate attributeName="stroke-dashoffset" from="6" to="0" dur="0.8s" repeatCount="indefinite" />
           </path>
           
           {/* Scintillation Crystal NaI(Tl) */}
           <rect x="100" y="70" width="200" height="15" className="fill-yellow-400/20 stroke-yellow-400 stroke-1" />
           <text x="310" y="80" className="fill-yellow-400 text-[10px]">NaI(Tl) Crystal</text>
           <text x="310" y="115" className="fill-slate-400 text-[10px]">Lead Collimator</text>
           
           {/* Light Flash */}
           <circle cx="200" cy="80" r="4" className="fill-yellow-400">
             <animate attributeName="r" values="0; 6; 0" dur="0.8s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="0; 1; 0" dur="0.8s" repeatCount="indefinite" />
           </circle>
           <g className="stroke-blue-300 stroke-1">
             <animate attributeName="opacity" values="0; 1; 0" dur="0.8s" repeatCount="indefinite" />
             <path d="M 200,75 L 200,65 M 195,75 L 180,65 M 205,75 L 220,65" />
           </g>
           
           {/* Light Pipe (Optional) - skipped for simplicity */}
           
           {/* PMTs */}
           <g className="fill-blue-900/30 stroke-blue-500 stroke-1">
              <rect x="110" y="20" width="30" height="40" />
              <rect x="150" y="20" width="30" height="40" />
              <rect x="190" y="20" width="20" height="40" /> {/* Center PMT directly above hit */}
              <rect x="220" y="20" width="30" height="40" />
              <rect x="260" y="20" width="30" height="40" />
           </g>
           <text x="310" y="45" className="fill-blue-400 text-[10px]">PMT Array</text>
           
           {/* Signals to Logic */}
           <g strokeDasharray="4 2">
             <animate attributeName="stroke-dashoffset" from="6" to="0" dur="0.4s" repeatCount="indefinite" />
             <path d="M 200,20 L 200,10 L 280,10" className="stroke-blue-400 stroke-1 stroke-dashed" />
             <path d="M 165,20 L 165,15 L 280,15" className="stroke-blue-400 stroke-1 stroke-dashed" />
             <path d="M 235,20 L 235,15 L 280,15" className="stroke-blue-400 stroke-1 stroke-dashed" />
           </g>
           
           {/* Logic Circuit Box */}
           <rect x="280" y="5" width="40" height="20" className="fill-slate-800 stroke-slate-500 stroke-1" />
           <text x="300" y="17" textAnchor="middle" className="fill-slate-300 text-[8px]">Anger Logic</text>
        </svg>
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
         {/* Collimator */}
         <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
               <Grid className="w-5 h-5 text-indigo-400" /> 1. Collimators
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Because gamma rays are emitted isotropically, a lens cannot focus them. We must use absorptive collimation (a thick lead plate with thousands of tiny holes).
            </p>
            <p className="text-sm text-slate-300 mb-4">
              <strong>Parallel-Hole Collimator:</strong> The most common type. It only allows photons traveling perpendicular to the camera face to pass through. All off-axis photons are absorbed by the lead septa.
            </p>
            <p className="text-xs text-slate-400">
              <em>Note: Collimators are horribly inefficient. They absorb ~99.9% of all emitted photons!</em>
            </p>
         </div>

         {/* Scintillation Crystal */}
         <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
               <Zap className="w-5 h-5 text-yellow-400" /> 2. Scintillation Crystal
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              A large, single crystal of <strong>Thallium-activated Sodium Iodide, NaI(Tl)</strong>, sits right behind the collimator.
            </p>
            <p className="text-sm text-slate-300">
              When a high-energy gamma photon strikes the crystal, it undergoes photoelectric absorption or Compton scattering, generating a flash of visible blue light (scintillation) proportional to the energy deposited.
            </p>
         </div>

         {/* Photomultiplier Tubes */}
         <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl lg:col-span-2">
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
               <Cpu className="w-5 h-5 text-blue-400" /> 3. PMTs and Positioning Logic
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              An array of Photomultiplier Tubes (PMTs) is optically coupled to the back of the crystal. The visible light flash spreads out and hits multiple PMTs simultaneously.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
               <div className="bg-slate-950 p-4 border border-slate-800 rounded">
                  <h4 className="text-blue-400 font-bold text-sm mb-2">Positioning (X, Y)</h4>
                  <p className="text-xs text-slate-400">
                     The Anger logic circuit calculates the exact (x, y) coordinates of the event by taking a weighted centroid of the signals from all the PMTs. The PMT closest to the flash produces the strongest signal.
                  </p>
               </div>
               <div className="bg-slate-950 p-4 border border-slate-800 rounded">
                  <h4 className="text-blue-400 font-bold text-sm mb-2">Energy Selection (Z)</h4>
                  <p className="text-xs text-slate-400">
                     The signals from all PMTs are summed to produce a total energy signal, <Latex formula="Z" />. A Pulse Height Analyzer (PHA) accepts only events whose <Latex formula="Z" /> signal falls within a narrow photopeak window (e.g., 140 keV ± 10% for Tc-99m) to reject scatter.
                  </p>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}
