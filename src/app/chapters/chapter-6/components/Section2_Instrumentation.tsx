import React from 'react';
import { History, Target, Zap, Server, Shield } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section2_Instrumentation() {
  return (
    <section id="instrumentation" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-purple-400">Section 6.2</span>
        <h2 className="text-3xl font-bold text-white mt-2">CT Instrumentation & Generations</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          The fundamental measurement required by a CT scanner is the x-ray attenuation along a line between the source and a detector. Seven generations of scanner designs have been developed to acquire this data.
        </p>
      </header>

      {/* Generations Table */}
      <div className="claude-panel overflow-x-auto p-4 bg-slate-900 border border-slate-700 rounded-xl mb-8">
        <table className="w-full text-left text-sm text-slate-300">
           <thead className="bg-slate-950 text-slate-200 border-b border-slate-800">
              <tr>
                 <th className="p-3 font-bold">Gen</th>
                 <th className="p-3 font-bold">Beam & Detectors</th>
                 <th className="p-3 font-bold">Motion</th>
                 <th className="p-3 font-bold">Pros / Cons</th>
              </tr>
           </thead>
           <tbody className="divide-y divide-slate-800">
              <tr className="hover:bg-slate-800/50">
                 <td className="p-3 font-bold text-white">1G</td>
                 <td className="p-3">Pencil beam, Single detector</td>
                 <td className="p-3">Linear translate, then rotate</td>
                 <td className="p-3 text-xs">Very slow / Great scatter rejection</td>
              </tr>
              <tr className="hover:bg-slate-800/50">
                 <td className="p-3 font-bold text-white">2G</td>
                 <td className="p-3">Narrow fan beam, Multiple detectors</td>
                 <td className="p-3">Linear translate, then rotate</td>
                 <td className="p-3 text-xs">Faster than 1G / Detectors must be collimated</td>
              </tr>
              <tr className="hover:bg-slate-800/50 border-l-2 border-l-purple-500">
                 <td className="p-3 font-bold text-purple-400">3G</td>
                 <td className="p-3">Wide fan beam, Large detector array</td>
                 <td className="p-3">Source & detectors rotate together</td>
                 <td className="p-3 text-xs text-purple-200">Continuous rotation (slip ring) / Sensitive to ring artifacts</td>
              </tr>
              <tr className="hover:bg-slate-800/50 border-l-2 border-l-purple-500">
                 <td className="p-3 font-bold text-purple-400">4G</td>
                 <td className="p-3">Wide fan beam, Full stationary ring of detectors</td>
                 <td className="p-3">Source rotates, detectors fixed</td>
                 <td className="p-3 text-xs text-purple-200">Higher efficiency / High scatter since detectors aren't collimated</td>
              </tr>
              <tr className="hover:bg-slate-800/50">
                 <td className="p-3 font-bold text-white">5G</td>
                 <td className="p-3">Electron Beam CT (EBCT), No x-ray tube</td>
                 <td className="p-3">No moving parts! Electromagnetic steering</td>
                 <td className="p-3 text-xs">Extremely fast (cardiac) / Extremely expensive</td>
              </tr>
              <tr className="hover:bg-slate-800/50 border-l-2 border-l-emerald-500 bg-emerald-950/20">
                 <td className="p-3 font-bold text-emerald-400">6G</td>
                 <td className="p-3">Helical CT (Based on 3G/4G)</td>
                 <td className="p-3">Continuous rotation + Patient table moves linearly</td>
                 <td className="p-3 text-xs text-emerald-200">Rapid 3D volumes. 30 sec full torso scan.</td>
              </tr>
              <tr className="hover:bg-slate-800/50 border-l-2 border-l-emerald-500 bg-emerald-950/20">
                 <td className="p-3 font-bold text-emerald-400">7G</td>
                 <td className="p-3">Multiple-Detector Row CT (MDCT) / Cone beam</td>
                 <td className="p-3">Helical motion</td>
                 <td className="p-3 text-xs text-emerald-200">Simultaneous thick slab acquisition. Current state-of-the-art.</td>
              </tr>
           </tbody>
        </table>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
         {/* Hardware Innovations */}
         <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
               <Zap className="w-4 h-4 text-purple-400" /> Key Hardware Innovations
            </h3>
            <ul className="text-sm text-slate-300 space-y-4">
              <li>
                <strong>Slip Rings:</strong> Replaced heavy cables, allowing continuous 360-degree rotation of the heavy gantry without needing to "rewind." Power is transferred via brushes on grooved cylinders, and data via optical links.
              </li>
              <li>
                <strong>Solid-State Detectors:</strong> Scintillation crystals (e.g., cadmium tungstate, CsI) coupled with photodiodes. They have replaced old xenon gas chambers due to much higher detection efficiency.
              </li>
            </ul>
         </div>

         {/* Dual Energy CT */}
         <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
               <Target className="w-4 h-4 text-pink-400" /> Dual-Energy CT
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Because linear attenuation depends on energy, scanning the patient at two different effective energies (e.g., 80 kVp and 140 kVp) provides vastly more information about tissue composition.
            </p>
            <p className="text-sm text-slate-300">
              Modern scanners use <strong>Dual Source CT</strong> (two separate x-ray tubes offset by 90 degrees) to acquire this data simultaneously without motion artifacts.
            </p>
         </div>
      </div>
    </section>
  );
}
