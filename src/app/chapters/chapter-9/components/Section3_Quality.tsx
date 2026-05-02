import React from 'react';
import { ShieldAlert, Maximize2 } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section3_Quality() {
  return (
    <section id="quality" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-orange-400">Section 9.3</span>
        <h2 className="text-3xl font-bold text-white mt-2">Image Quality in SPECT and PET</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          While PET boasts significantly higher sensitivity than SPECT (due to the lack of lead collimators), both modalities suffer from unique physical limitations that degrade spatial resolution and introduce noise.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
         {/* PET Resolution Limits */}
         <div className="claude-surface p-6 border-l-4 border-l-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
               <Maximize2 className="w-5 h-5 text-orange-400" /> Fundamental PET Resolution Limits
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Even with a perfect detector, PET spatial resolution is fundamentally limited by physics:
            </p>
            <ul className="space-y-3">
               <li className="bg-slate-900 p-3 rounded border border-slate-800 text-sm text-slate-300">
                  <strong className="text-orange-300 block mb-1">1. Positron Range</strong>
                  Before annihilating, the positron travels a short, random distance from the nucleus (e.g., ~1mm for F-18, up to several mm for other isotopes). The scanner localizes the annihilation event, not the actual tracer molecule.
               </li>
               <li className="bg-slate-900 p-3 rounded border border-slate-800 text-sm text-slate-300">
                  <strong className="text-orange-300 block mb-1">2. Non-Collinearity</strong>
                  Because the positron and electron have small residual momentum when they annihilate, the two gamma photons are not emitted exactly 180° apart (usually off by ~0.25°). In a scanner with a large ring diameter, this small angular deviation causes significant positioning error.
               </li>
            </ul>
         </div>

         {/* False Coincidences */}
         <div className="claude-surface p-6 border-l-4 border-l-yellow-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
               <ShieldAlert className="w-5 h-5 text-yellow-400" /> False Coincidences in PET
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Electronic collimation is sensitive to three types of coincidence events:
            </p>
            <div className="space-y-3 text-sm text-slate-300">
               <div>
                  <strong className="text-green-400">True Coincidences:</strong> Two unscattered photons from the same annihilation event hit opposing detectors simultaneously. (The good signal).
               </div>
               <div>
                  <strong className="text-yellow-400">Scatter Coincidences:</strong> One or both photons undergo Compton scattering in the body, changing direction. They hit the ring simultaneously, but the resulting Line of Response (LOR) is completely wrong, adding a low-frequency background haze.
               </div>
               <div>
                  <strong className="text-red-400">Random Coincidences:</strong> Two completely unrelated annihilations occur at the exact same time. One photon from each event hits the ring. The scanner mistakenly draws an LOR between them. This increases at high count rates.
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}
