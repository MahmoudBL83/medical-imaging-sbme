import React from 'react';
import { Target, Cpu, ActivitySquare } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section4_Properties() {
  return (
    <section id="properties" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-red-400">Section 4.4</span>
        <h2 className="text-3xl font-bold text-white mt-2">Nature & Properties of Ionizing Radiation</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          How do these radiations interact with matter? We must divide the interactions into two types: energetic electron interactions (which create x-rays) and EM photon interactions (which create the radiographic image).
        </p>
      </header>

      {/* Primary Energetic Electron Interactions */}
      <div className="claude-surface p-8">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
          <Cpu className="w-6 h-6 text-purple-400" /> Energetic Electron Interactions
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          When an electron from the cathode hits the anode in an x-ray tube, it transfers energy in two ways:
        </p>
        
        <div className="grid lg:grid-cols-2 gap-6">
           <div className="bg-slate-900 border border-purple-900/50 p-6 rounded-lg">
              <h4 className="text-purple-400 font-bold mb-2">1. Collisional Transfer</h4>
              <p className="text-sm text-slate-300 mb-2">
                The incident electron collides with an outer-shell electron of the target, causing excitation and infrared radiation.
              </p>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Result: Heat (99% of energy)</div>
           </div>

           <div className="bg-slate-900 border border-purple-900/50 p-6 rounded-lg">
              <h4 className="text-purple-400 font-bold mb-2">2. Radiative Transfer</h4>
              <p className="text-sm text-slate-300 mb-2">
                The incident electron interacts directly with inner shells or the nucleus.
              </p>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Result: X-Rays (1% of energy)</div>
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
           <div className="border-l-4 border-slate-700 pl-4 py-2">
              <h5 className="text-white font-bold mb-1">Characteristic X-Rays</h5>
              <p className="text-sm text-slate-400">
                The incident electron ejects a K-shell electron. An outer-shell electron drops down to fill the hole, releasing an x-ray photon with energy exactly equal to the difference in binding energies. (Appears as spikes on the x-ray spectrum).
              </p>
           </div>
           <div className="border-l-4 border-slate-700 pl-4 py-2">
              <h5 className="text-white font-bold mb-1">Bremsstrahlung (Braking Radiation)</h5>
              <p className="text-sm text-slate-400">
                The incident electron passes close to the nucleus. The positive charge of the nucleus bends the electron's path and slows it down. The lost kinetic energy is emitted as an x-ray. (Creates a continuous spectrum of energies).
              </p>
           </div>
        </div>
      </div>

      {/* Primary EM Radiation Interactions */}
      <div className="claude-panel p-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 rounded-xl mt-8">
         <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
            <ActivitySquare className="w-6 h-6 text-pink-400" /> Electromagnetic Radiation Interactions
         </h3>
         <p className="text-slate-300 text-sm leading-relaxed mb-6">
           When the generated x-ray photon travels through the patient, it interacts with tissue via two main mechanisms:
         </p>

         <div className="grid lg:grid-cols-2 gap-8">
            {/* Photoelectric Effect */}
            <div className="bg-slate-900 border border-pink-900/50 p-6 rounded-lg">
               <h4 className="text-pink-400 font-bold text-lg flex items-center gap-2 mb-3">
                 <Target className="w-5 h-5" /> Photoelectric Effect
               </h4>
               <p className="text-sm text-slate-300 mb-4">
                 The incident photon interacts with an inner-shell electron and is <strong>completely absorbed</strong>. The electron is ejected as a photoelectron. This is the primary mechanism that provides contrast in an image.
               </p>
               <div className="bg-slate-950 p-3 border border-slate-800 rounded text-center mb-4">
                 <Latex formula="\text{Prob} \propto \frac{Z_{\text{eff}}^4}{(h\nu)^3}" displayMode />
               </div>
               <p className="text-xs text-slate-400">
                 Probability sharply increases with atomic number (Z), making Bone (high Z) or Contrast Agents (Iodine/Barium) absorb completely and appear white on x-rays.
               </p>
            </div>

            {/* Compton Scatter */}
            <div className="bg-slate-900 border border-pink-900/50 p-6 rounded-lg">
               <h4 className="text-pink-400 font-bold text-lg flex items-center gap-2 mb-3">
                 <ScanLine className="w-5 h-5" /> Compton Scatter
               </h4>
               <p className="text-sm text-slate-300 mb-4">
                 The incident photon interacts with an outer-shell electron, ejecting it, and the photon is deflected with reduced energy. The photon is <strong>not absorbed</strong>.
               </p>
               <div className="bg-slate-950 p-3 border border-slate-800 rounded text-center mb-4">
                 <Latex formula="\text{Prob} \propto \text{Electron Density (ED)}" displayMode />
               </div>
               <p className="text-xs text-slate-400">
                 Probability is nearly independent of atomic number. Scatter degrades image resolution because the deflected photons strike the detector at incorrect locations, adding noise.
               </p>
            </div>
         </div>
      </div>
    </section>
  );
}
