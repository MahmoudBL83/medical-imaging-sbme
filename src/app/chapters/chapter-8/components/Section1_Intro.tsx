import React from 'react';
import { Target, AlertCircle } from 'lucide-react';

export default function Section1_Intro() {
  return (
    <section id="introduction" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-green-400">Section 8.1</span>
        <h2 className="text-3xl font-bold text-white mt-2">Introduction to Planar Scintigraphy</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Nuclear medicine imaging relies on radiotracers labeled with radioactive atoms that decay and emit gamma photons from within the patient. Planar scintigraphy is the foundational 2-D projection method of nuclear imaging, utilizing the Anger scintillation camera to capture these emissions.
        </p>
      </header>

      <div className="claude-surface p-8 border-l-4 border-l-green-500 relative overflow-hidden">
         <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-green-400" /> Emission vs. Transmission
         </h3>
         
         <div className="grid lg:grid-cols-2 gap-8 items-start mb-6">
            <div>
               <p className="text-slate-300 text-sm leading-relaxed mb-4">
                 Unlike X-ray imaging (which is a <strong>transmission</strong> modality where an external source shines through the patient), nuclear medicine is an <strong>emission</strong> modality. The patient <em>is</em> the source. 
               </p>
               <div className="bg-slate-900 border border-slate-700 p-4 rounded text-sm text-slate-300">
                  <div className="flex items-center gap-2 mb-2">
                     <AlertCircle className="w-4 h-4 text-green-400" /> <strong>Key Distinctions:</strong>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-400">
                     <li>There is no external X-ray tube.</li>
                     <li>Photons are emitted isotropically (in all directions) from the radiotracer distribution inside the body.</li>
                     <li>The imaging system maps functional physiology (where the tracer goes) rather than pure structural anatomy.</li>
                  </ul>
               </div>
            </div>

            <svg viewBox="0 0 250 150" className="w-full h-48 bg-slate-900 border border-slate-700 rounded-lg p-2 shadow-inner">
               {/* Left: Transmission (X-Ray) */}
               <g transform="translate(30, 20)">
                  <text x="30" y="0" textAnchor="middle" className="fill-blue-400 text-[8px] font-bold">Transmission (X-ray)</text>
                  
                  {/* X-ray Tube */}
                  <rect x="20" y="10" width="20" height="10" className="fill-slate-600 stroke-slate-400 stroke-1" />
                  <text x="30" y="16" textAnchor="middle" className="fill-white text-[5px]">Tube</text>
                  
                  {/* Patient */}
                  <circle cx="30" cy="60" r="20" className="fill-slate-800/80 stroke-slate-500 stroke-1" />
                  <circle cx="30" cy="60" r="8" className="fill-slate-600" /> {/* Bone */}
                  
                  {/* Rays */}
                  <g className="stroke-yellow-400 stroke-1 stroke-dashed" strokeDasharray="4 2">
                     <animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.5s" repeatCount="indefinite" />
                     {/* Passes through */}
                     <line x1="20" y1="20" x2="10" y2="100" />
                     <line x1="40" y1="20" x2="50" y2="100" />
                     {/* Blocked by bone */}
                     <line x1="30" y1="20" x2="30" y2="52" />
                  </g>
                  
                  {/* Detector */}
                  <rect x="0" y="100" width="60" height="6" className="fill-slate-700 stroke-emerald-400 stroke-1" />
                  <text x="30" y="115" textAnchor="middle" className="fill-emerald-400 text-[6px]">Detector Array</text>
               </g>

               {/* Divider */}
               <line x1="125" y1="10" x2="125" y2="140" className="stroke-slate-700 stroke-1 stroke-dashed" />

               {/* Right: Emission (Nuclear) */}
               <g transform="translate(160, 20)">
                  <text x="30" y="0" textAnchor="middle" className="fill-green-400 text-[8px] font-bold">Emission (NM)</text>
                  
                  {/* Patient */}
                  <circle cx="30" cy="60" r="20" className="fill-slate-800/80 stroke-slate-500 stroke-1" />
                  
                  {/* Radiotracer Source inside Patient */}
                  <circle cx="35" cy="55" r="4" className="fill-green-400">
                     <animate attributeName="opacity" values="0.4; 1; 0.4" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  <text x="50" y="50" className="fill-green-400 text-[5px]">Tracer</text>
                  
                  {/* Isotropic Emissions */}
                  <g className="stroke-green-400 stroke-1 stroke-dashed" strokeDasharray="4 2">
                     <animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.8s" repeatCount="indefinite" />
                     <line x1="35" y1="55" x2="35" y2="20" /> {/* Up */}
                     <line x1="35" y1="55" x2="70" y2="55" /> {/* Right */}
                     <line x1="35" y1="55" x2="0" y2="65" /> {/* Left-ish */}
                     <line x1="35" y1="55" x2="25" y2="100" /> {/* Down-left hit detector */}
                     <line x1="35" y1="55" x2="45" y2="100" /> {/* Down-right hit detector */}
                  </g>
                  
                  {/* Detector (Gamma Camera) */}
                  <rect x="0" y="100" width="60" height="6" className="fill-slate-700 stroke-indigo-400 stroke-1" />
                  <text x="30" y="115" textAnchor="middle" className="fill-indigo-400 text-[6px]">Anger Camera</text>
               </g>
            </svg>
         </div>
      </div>
    </section>
  );
}
