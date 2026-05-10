import React from 'react';
import { Target, Rotate3D, ActivitySquare } from 'lucide-react';

export default function Section1_Instrumentation() {
  return (
    <section id="instrumentation" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-indigo-400">Section 9.1</span>
        <h2 className="text-3xl font-bold text-white mt-2">SPECT and PET Instrumentation</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          While planar scintigraphy suffers from severe depth-dependent attenuation, Emission Computed Tomography solves this by acquiring projections from multiple angles. This section covers the two major modalities: Single Photon Emission Computed Tomography (SPECT) and Positron Emission Tomography (PET).
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
         {/* SPECT */}
         <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl flex flex-col justify-between">
            <div>
               <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <Rotate3D className="w-5 h-5 text-indigo-400" /> SPECT Instrumentation
               </h3>
               <p className="text-sm text-slate-300 mb-4">
                 SPECT systems are essentially 1, 2, or 3 Anger cameras mounted on a rotating gantry. They physically rotate around the patient, stopping at discrete angles to acquire 2-D projections.
               </p>
            </div>
            
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] mx-auto h-40 mb-4 bg-slate-950/50 rounded-lg p-2 shadow-inner">
               {/* Fixed Patient */}
               <ellipse cx="100" cy="100" rx="25" ry="20" className="fill-purple-900/30 stroke-purple-700 stroke-1" />
               <circle cx="105" cy="95" r="3" className="fill-red-400" /> {/* Tumor */}
               
               {/* Emission rays */}
               <g className="stroke-red-400 stroke-1 stroke-dashed" strokeDasharray="2 2">
                 <animate attributeName="stroke-dashoffset" from="4" to="0" dur="0.5s" repeatCount="indefinite" />
                 <line x1="105" y1="95" x2="105" y2="45" />
                 <line x1="105" y1="95" x2="105" y2="155" />
               </g>

               {/* Rotating Gantry with Dual Detectors */}
               <g>
                  <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite" />
                  
                  {/* Circular Gantry Track */}
                  <circle cx="100" cy="100" r="65" className="fill-none stroke-slate-700 stroke-2 stroke-dashed" />
                  
                  {/* Detector 1 (Top) */}
                  <g transform="translate(100, 35)">
                     <rect x="-30" y="-10" width="60" height="20" className="fill-slate-800 stroke-indigo-400 stroke-1" />
                     {/* Collimator lines */}
                     <g className="stroke-slate-950 stroke-1">
                       <line x1="-25" y1="10" x2="-25" y2="0" />
                       <line x1="-15" y1="10" x2="-15" y2="0" />
                       <line x1="-5" y1="10" x2="-5" y2="0" />
                       <line x1="5" y1="10" x2="5" y2="0" />
                       <line x1="15" y1="10" x2="15" y2="0" />
                       <line x1="25" y1="10" x2="25" y2="0" />
                     </g>
                  </g>
                  
                  {/* Detector 2 (Bottom) */}
                  <g transform="translate(100, 165)">
                     <rect x="-30" y="-10" width="60" height="20" className="fill-slate-800 stroke-indigo-400 stroke-1" />
                     {/* Collimator lines */}
                     <g className="stroke-slate-950 stroke-1">
                       <line x1="-25" y1="-10" x2="-25" y2="0" />
                       <line x1="-15" y1="-10" x2="-15" y2="0" />
                       <line x1="-5" y1="-10" x2="-5" y2="0" />
                       <line x1="5" y1="-10" x2="5" y2="0" />
                       <line x1="15" y1="-10" x2="15" y2="0" />
                       <line x1="25" y1="-10" x2="25" y2="0" />
                     </g>
                  </g>
               </g>
               <text x="100" y="15" textAnchor="middle" className="fill-indigo-400 text-[8px] font-bold">Dual-Head SPECT</text>
               <text x="100" y="195" textAnchor="middle" className="fill-slate-400 text-[6px]">Mechanical Rotation</text>
            </svg>
            
            <p className="text-xs text-slate-400 mt-auto">
              Because they still rely on lead collimators (usually parallel-hole), SPECT suffers from the same brutal resolution/sensitivity trade-offs as planar scintigraphy. Only a tiny fraction of emitted photons are actually recorded.
            </p>
         </div>

         {/* PET */}
         <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl border-t-4 border-t-purple-500">
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
               <ActivitySquare className="w-5 h-5 text-purple-400" /> PET Instrumentation
            </h3>
            
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] mx-auto h-40 mb-4 bg-slate-950/50 rounded-lg p-2 shadow-inner">
               {/* Detector Ring */}
               <circle cx="100" cy="100" r="80" className="fill-none stroke-slate-700 stroke-[10] stroke-dasharray-[6,2]" />
               
               {/* Patient */}
               <ellipse cx="100" cy="100" rx="40" ry="30" className="fill-purple-900/30 stroke-purple-700 stroke-1" />
               
               {/* Annihilation Event */}
               <circle cx="90" cy="95" r="3" className="fill-yellow-400">
                  <animate attributeName="r" values="0; 6; 0" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0; 1; 0" dur="2s" repeatCount="indefinite" />
               </circle>
               <text x="80" y="85" className="fill-yellow-400 text-[6px]">β⁺/e⁻</text>
               
               {/* Line of Response (LOR) */}
               <line x1="26" y1="65" x2="154" y2="125" className="stroke-emerald-400/30 stroke-1 stroke-dashed" />
               
               {/* Gamma Photons */}
               <g>
                 <animate attributeName="opacity" values="0; 1; 0" dur="2s" repeatCount="indefinite" />
                 <path d="M 90,95 L 26,65" className="stroke-emerald-400 stroke-1" strokeDasharray="70" strokeDashoffset="70">
                    <animate attributeName="stroke-dashoffset" values="70; 0; 0" dur="2s" repeatCount="indefinite" />
                 </path>
                 <path d="M 90,95 L 154,125" className="stroke-emerald-400 stroke-1" strokeDasharray="70" strokeDashoffset="70">
                    <animate attributeName="stroke-dashoffset" values="70; 0; 0" dur="2s" repeatCount="indefinite" />
                 </path>
               </g>
               
               {/* Lit Detectors */}
               <circle cx="26" cy="65" r="4" className="fill-emerald-400">
                  <animate attributeName="opacity" values="0; 0; 1; 0" keyTimes="0; 0.4; 0.5; 1" dur="2s" repeatCount="indefinite" />
               </circle>
               <circle cx="154" cy="125" r="4" className="fill-emerald-400">
                  <animate attributeName="opacity" values="0; 0; 1; 0" keyTimes="0; 0.4; 0.5; 1" dur="2s" repeatCount="indefinite" />
               </circle>
               
               <text x="165" y="140" className="fill-emerald-400 text-[6px]">Hits in coincidence</text>
               <text x="25" y="55" className="fill-slate-400 text-[6px]">(within ~5ns)</text>
               
               <text x="100" y="105" textAnchor="middle" className="fill-emerald-400 text-[6px]">Line of Response (LOR)</text>
            </svg>

            <p className="text-sm text-slate-300 mb-4">
              PET utilizes radiotracers that undergo <strong className="text-purple-300">Positron (<Target className="w-3 h-3 inline" />\beta^+) Decay</strong>. When a positron is emitted, it travels a short distance, collides with an electron, and <strong>annihilates</strong>.
            </p>
            <p className="text-sm text-slate-300 mb-4">
              The mass of the two particles is converted into two 511 keV gamma photons that fly off in exactly <strong>opposite directions (180 degrees apart)</strong>.
            </p>
            <div className="bg-purple-950/30 p-3 rounded text-xs text-purple-200">
               A PET scanner consists of a full ring of detectors without lead collimators. Instead, it relies on <strong>Electronic Collimation (Coincidence Detection)</strong>. If two detectors on opposite sides of the ring register a 511 keV photon within a tiny time window (e.g., 5-10 nanoseconds), the system assumes the annihilation occurred somewhere along the line connecting them (the Line of Response, or LOR).
            </div>
         </div>
      </div>
    </section>
  );
}
