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
         <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
               <Rotate3D className="w-5 h-5 text-indigo-400" /> SPECT Instrumentation
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              SPECT systems are essentially 1, 2, or 3 Anger cameras mounted on a rotating gantry. They physically rotate around the patient, stopping at discrete angles to acquire 2-D projections.
            </p>
            <p className="text-xs text-slate-400">
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
               <circle cx="90" cy="95" r="3" className="fill-yellow-400" />
               <text x="80" y="85" className="fill-yellow-400 text-[6px]">β⁺/e⁻</text>
               
               {/* Line of Response (LOR) */}
               <line x1="26" y1="65" x2="154" y2="125" className="stroke-emerald-400 stroke-1 stroke-dashed" />
               
               {/* Gamma Photons */}
               <path d="M 90,95 L 45,75" className="stroke-emerald-400 stroke-1" />
               <polygon points="45,75 48,78 42,75" className="fill-emerald-400" transform="rotate(-65 45 75)" />
               <path d="M 90,95 L 135,115" className="stroke-emerald-400 stroke-1" />
               <polygon points="135,115 132,112 138,115" className="fill-emerald-400" transform="rotate(-65 135 115)" />
               
               {/* Lit Detectors */}
               <circle cx="26" cy="65" r="4" className="fill-emerald-400" />
               <circle cx="154" cy="125" r="4" className="fill-emerald-400" />
               
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
