import React from 'react';
import { Camera, Zap, Cpu, Grid } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section2_Instrumentation() {
  return (
    <section id="instrumentation" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-indigo-400">Section 8.2</span>
        <h2 className="text-3xl font-bold text-white mt-2">The Anger Camera</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          The primary instrument for planar scintigraphy is the Anger scintillation camera (invented by Hal Anger in the 1950s). It consists of a collimator, a large scintillation crystal, an array of photomultiplier tubes (PMTs), and positioning logic circuitry.
        </p>
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
