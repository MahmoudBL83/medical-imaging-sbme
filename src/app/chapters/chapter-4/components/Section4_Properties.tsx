import React from 'react';
import { Target, Cpu, ActivitySquare, ScanLine } from 'lucide-react';
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
              <h5 className="text-white font-bold mb-3">Characteristic X-Rays</h5>
              
              <svg viewBox="0 0 200 120" className="w-full h-32 mb-4 bg-slate-900/50 rounded-lg p-2">
                <circle cx="100" cy="60" r="10" className="fill-teal-600" />
                <circle cx="100" cy="60" r="25" className="fill-none stroke-slate-600 stroke-2" />
                <circle cx="100" cy="60" r="45" className="fill-none stroke-slate-600 stroke-2" />
                
                {/* Inner Shell Vacancy filled by outer shell */}
                <circle cx="100" cy="35" r="4" className="fill-none stroke-red-400 stroke-2" strokeDasharray="2" />
                <circle cx="100" cy="15" r="3" className="fill-blue-400" />
                
                {/* Electron transition */}
                <path d="M 100 18 L 100 30" className="fill-none stroke-blue-400 stroke-2" />
                <polygon points="100,30 96,24 104,24" className="fill-blue-400" />
                
                {/* Characteristic X-ray emitted */}
                <path d="M 105 25 L 115 15 L 125 25 L 135 15 L 145 25 L 155 15 L 165 20" className="fill-none stroke-yellow-400 stroke-2" />
                <polygon points="165,20 157,18 161,26" className="fill-yellow-400" />
                
                <text x="60" y="10" className="fill-blue-400 text-[10px]">Outer e- drops down</text>
                <text x="150" y="10" className="fill-yellow-400 text-[10px]">Characteristic X-ray</text>
              </svg>

              <p className="text-sm text-slate-400">
                The incident electron ejects a K-shell electron. An outer-shell electron drops down to fill the hole, releasing an x-ray photon with energy exactly equal to the difference in binding energies. (Appears as spikes on the x-ray spectrum).
              </p>
           </div>

           <div className="border-l-4 border-slate-700 pl-4 py-2">
              <h5 className="text-white font-bold mb-3">Bremsstrahlung (Braking Radiation)</h5>
              
              <svg viewBox="0 0 200 120" className="w-full h-32 mb-4 bg-slate-900/50 rounded-lg p-2">
                <circle cx="100" cy="60" r="15" className="fill-indigo-600" />
                <text x="100" y="64" textAnchor="middle" className="fill-white text-[10px] font-bold">Nucleus</text>
                
                {/* Incident Electron path bending around nucleus */}
                <path d="M 20 20 Q 100 20, 150 90" className="fill-none stroke-blue-400 stroke-2" strokeDasharray="4" />
                <circle cx="20" cy="20" r="3" className="fill-blue-400" />
                <circle cx="150" cy="90" r="3" className="fill-blue-400" />
                <polygon points="150,90 145,82 140,88" className="fill-blue-400" />
                
                {/* Bremsstrahlung X-ray emitted */}
                <path d="M 100 35 L 110 25 L 120 35 L 130 25 L 140 35 L 150 25 L 160 30" className="fill-none stroke-yellow-400 stroke-2" />
                <polygon points="160,30 152,28 156,36" className="fill-yellow-400" />
                
                <text x="10" y="15" className="fill-blue-400 text-[10px]">Incident e-</text>
                <text x="160" y="20" className="fill-yellow-400 text-[10px]">X-ray Photon</text>
              </svg>

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
               
               <svg viewBox="0 0 200 120" className="w-full h-40 mb-6 bg-slate-950/50 rounded-lg p-2">
                 <circle cx="100" cy="60" r="12" className="fill-pink-600" />
                 <text x="100" y="64" textAnchor="middle" className="fill-white text-[10px] font-bold">Z</text>
                 <circle cx="100" cy="60" r="25" className="fill-none stroke-slate-600 stroke-2" />
                 <circle cx="100" cy="60" r="45" className="fill-none stroke-slate-600 stroke-2" />
                 
                 <circle cx="100" cy="35" r="3" className="fill-blue-400" />
                 <circle cx="100" cy="85" r="3" className="fill-blue-400" />
                 <circle cx="55" cy="60" r="3" className="fill-blue-400" />
                 <circle cx="145" cy="60" r="3" className="fill-blue-400" />
                 
                 <circle cx="75" cy="60" r="4" className="fill-blue-400" />
                 
                 <path d="M 10 60 L 20 50 L 30 70 L 40 50 L 50 70 L 60 50 L 70 60" className="fill-none stroke-yellow-400 stroke-2" />
                 <polygon points="70,60 62,55 62,65" className="fill-yellow-400" />
                 
                 <path d="M 75 60 L 30 20" className="fill-none stroke-blue-400 stroke-2" strokeDasharray="4" />
                 <polygon points="30,20 38,20 32,28" className="fill-blue-400" />
                 
                 <text x="10" y="45" className="fill-yellow-400 text-[10px]">Incident Photon</text>
                 <text x="10" y="15" className="fill-blue-400 text-[10px]">Ejected Photoelectron</text>
               </svg>

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
               
               <svg viewBox="0 0 200 120" className="w-full h-40 mb-6 bg-slate-950/50 rounded-lg p-2">
                 <circle cx="100" cy="60" r="12" className="fill-purple-600" />
                 <text x="100" y="64" textAnchor="middle" className="fill-white text-[10px] font-bold">Z</text>
                 <circle cx="100" cy="60" r="25" className="fill-none stroke-slate-600 stroke-2" />
                 <circle cx="100" cy="60" r="45" className="fill-none stroke-slate-600 stroke-2" />
                 
                 <circle cx="100" cy="35" r="3" className="fill-blue-400" />
                 <circle cx="100" cy="85" r="3" className="fill-blue-400" />
                 <circle cx="75" cy="60" r="3" className="fill-blue-400" />
                 <circle cx="125" cy="60" r="3" className="fill-blue-400" />
                 
                 <circle cx="55" cy="60" r="4" className="fill-blue-400" />
                 
                 <path d="M 10 60 L 15 55 L 20 65 L 25 55 L 30 65 L 35 55 L 40 65 L 45 55 L 50 60" className="fill-none stroke-yellow-400 stroke-2" />
                 <polygon points="50,60 44,56 44,64" className="fill-yellow-400" />
                 
                 <path d="M 55 60 L 20 90" className="fill-none stroke-blue-400 stroke-2" strokeDasharray="4" />
                 <polygon points="20,90 28,86 22,80" className="fill-blue-400" />
                 
                 <path d="M 55 60 L 65 40 L 70 50 L 80 30 L 85 40 L 95 20 L 100 30 L 110 10" className="fill-none stroke-yellow-400 stroke-2" />
                 <polygon points="110,10 102,12 106,18" className="fill-yellow-400" />
                 
                 <text x="10" y="45" className="fill-yellow-400 text-[10px]">Incident Photon</text>
                 <text x="10" y="105" className="fill-blue-400 text-[10px]">Recoil Electron</text>
                 <text x="120" y="20" className="fill-yellow-400 text-[10px]">Scattered Photon</text>
               </svg>

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
