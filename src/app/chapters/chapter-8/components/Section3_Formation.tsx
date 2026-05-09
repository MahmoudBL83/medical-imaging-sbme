import React from 'react';
import { Target, Activity } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section3_Formation() {
  return (
    <section id="formation" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-red-400">Section 8.3</span>
        <h2 className="text-3xl font-bold text-white mt-2">Image Formation</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Planar scintigraphy produces a 2-D projection of the 3-D radiotracer distribution. The basic imaging equation incorporates both the physical geometry of the detector and the attenuation of gamma rays within the patient's body.
        </p>
      </header>

      {/* The Imaging Equation */}
      <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative">
         <h3 className="text-white font-bold mb-3 flex items-center gap-2">
            <Activity className="w-5 h-5 text-red-400" /> The Scintigraphy Imaging Equation
         </h3>
         <p className="text-sm text-slate-300 mb-4">
           Let <Latex formula="f(x, y, z)" /> be the 3-D radiotracer concentration. The camera looks down the <Latex formula="z" />-axis. The total count <Latex formula="g(x,y)" /> recorded at position <Latex formula="(x,y)" /> over time <Latex formula="T" /> is the line integral of the activity, weighted by tissue attenuation.
         </p>
         <div className="bg-slate-950 p-4 border border-slate-800 rounded text-center mb-4">
            <Latex formula="g(x,y) = K \cdot T \int f(x, y, z) \exp\left(-\int_{z}^{D} \mu(x,y,z') dz'\right) dz" displayMode />
         </div>
         <p className="text-xs text-slate-400">
           Where <Latex formula="K" /> represents the overall system sensitivity (collimator efficiency <Latex formula="\times" /> crystal efficiency), and the exponential term represents the probability that a photon survives attenuation from depth <Latex formula="z" /> to the surface <Latex formula="D" />.
         </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg flex flex-col justify-between">
            <div>
               <h4 className="text-white font-bold text-sm mb-2">The Attenuation Problem</h4>
               <p className="text-sm text-slate-300 mb-4">
                 Unlike CT where attenuation <em>is</em> the signal, in nuclear medicine, attenuation is a severe confounder. Activity deep within the body is heavily attenuated, making deep structures appear artificially cold (less active) compared to superficial structures.
               </p>
            </div>
            
            <svg viewBox="0 0 200 120" className="w-full h-32 bg-slate-950/50 rounded p-2 mt-auto">
               {/* Detector */}
               <rect x="0" y="0" width="200" height="10" className="fill-slate-700 stroke-indigo-400 stroke-1" />
               <text x="100" y="7" textAnchor="middle" className="fill-indigo-400 text-[6px]">Gamma Camera Detector</text>
               
               {/* Body Surface */}
               <path d="M 0,30 Q 100,20 200,30 L 200,120 L 0,120 Z" className="fill-slate-800/50 stroke-slate-500 stroke-1" />
               <text x="100" y="115" textAnchor="middle" className="fill-slate-500 text-[8px]">Tissue (Attenuation Medium)</text>
               
               {/* Superficial Tumor */}
               <circle cx="50" cy="40" r="5" className="fill-red-500" />
               <text x="20" y="42" className="fill-red-400 text-[6px]">Shallow</text>
               <g className="stroke-red-400 stroke-1 stroke-dashed" strokeDasharray="4 2">
                  <animate attributeName="stroke-dashoffset" from="6" to="0" dur="0.5s" repeatCount="indefinite" />
                  <line x1="45" y1="35" x2="35" y2="10" />
                  <line x1="50" y1="35" x2="50" y2="10" />
                  <line x1="55" y1="35" x2="65" y2="10" />
               </g>
               
               {/* Deep Tumor */}
               <circle cx="150" cy="90" r="5" className="fill-red-500" />
               <text x="160" y="92" className="fill-red-400 text-[6px]">Deep</text>
               
               {/* Absorbed photons */}
               <g className="stroke-red-400/50 stroke-1 stroke-dashed">
                  <line x1="145" y1="85" x2="135" y2="60" />
                  <circle cx="135" cy="60" r="1.5" className="fill-slate-400" /> {/* Absorbed */}
                  
                  <line x1="155" y1="85" x2="165" y2="50" />
                  <circle cx="165" cy="50" r="1.5" className="fill-slate-400" /> {/* Absorbed */}
               </g>
               
               {/* Only one makes it out */}
               <g className="stroke-red-400 stroke-1 stroke-dashed" strokeDasharray="4 2">
                  <animate attributeName="stroke-dashoffset" from="6" to="0" dur="1.2s" repeatCount="indefinite" />
                  <line x1="150" y1="85" x2="150" y2="10" />
               </g>
               
               {/* Intensity profiles on detector */}
               <rect x="30" y="12" width="40" height="2" className="fill-red-400" /> {/* Strong signal */}
               <rect x="145" y="12" width="10" height="2" className="fill-red-400/50" /> {/* Weak signal */}
               <text x="50" y="20" textAnchor="middle" className="fill-white text-[5px]">Hot</text>
               <text x="150" y="20" textAnchor="middle" className="fill-white/50 text-[5px]">Cold</text>
            </svg>
         </div>
         <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
            <h4 className="text-white font-bold text-sm mb-2">Collimator Blurring</h4>
            <p className="text-sm text-slate-300">
              The parallel-hole collimator accepts photons within a small acceptance cone. As the source-to-collimator distance increases, the cone spreads out. Therefore, <strong>spatial resolution degrades linearly with depth</strong>.
            </p>
         </div>
      </div>
    </section>
  );
}
