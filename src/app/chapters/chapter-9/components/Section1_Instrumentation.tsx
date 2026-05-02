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
