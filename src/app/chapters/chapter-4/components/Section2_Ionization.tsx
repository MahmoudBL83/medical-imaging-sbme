import React from 'react';
import { Target, Zap, CircleDashed } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section2_Ionization() {
  return (
    <section id="ionization" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-yellow-400">Section 4.2</span>
        <h2 className="text-3xl font-bold text-white mt-2">Ionization</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Ionization is the ejection of an electron from an atom, creating a free electron and a positively charged ion. We must first understand atomic structure to understand this process.
        </p>
      </header>

      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8">
        
        {/* Atomic Structure */}
        <div className="claude-surface p-8">
           <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <CircleDashed className="w-5 h-5 text-indigo-400" /> Atomic Structure
           </h3>
           
           <svg viewBox="0 0 200 200" className="w-full max-w-[200px] mx-auto h-40 mb-6 bg-slate-900 border border-slate-700 rounded-lg p-2 shadow-inner">
              {/* Nucleus */}
              <circle cx="100" cy="100" r="10" className="fill-purple-600" />
              <text x="100" y="103" textAnchor="middle" className="fill-white text-[8px] font-bold">Z</text>
              
              {/* Shells */}
              <circle cx="100" cy="100" r="30" className="fill-none stroke-slate-500 stroke-2" />
              <circle cx="100" cy="100" r="55" className="fill-none stroke-slate-600 stroke-2" />
              <circle cx="100" cy="100" r="80" className="fill-none stroke-slate-700 stroke-2" />
              
              {/* Electrons */}
              <circle cx="100" cy="70" r="3" className="fill-blue-400" />
              <circle cx="100" cy="130" r="3" className="fill-blue-400" />
              <text x="80" y="65" className="fill-blue-400 text-[8px]">K-Shell</text>
              
              <circle cx="155" cy="100" r="3" className="fill-blue-400" />
              <circle cx="45" cy="100" r="3" className="fill-blue-400" />
              <text x="145" y="90" className="fill-blue-400 text-[8px]">L-Shell</text>
              
              <circle cx="100" cy="20" r="3" className="fill-blue-400" />
              <text x="80" y="15" className="fill-blue-400 text-[8px]">M-Shell</text>
              
              {/* Binding Energy Arrow */}
              <line x1="100" y1="100" x2="190" y2="100" className="stroke-indigo-400 stroke-1 stroke-dashed" />
              <polygon points="190,100 185,97 185,103" className="fill-indigo-400" />
              <text x="130" y="115" className="fill-indigo-400 text-[8px]">Decreasing Binding Energy</text>
           </svg>

           <p className="text-slate-300 text-sm leading-relaxed mb-4">
             Based on the planetary model, an atom consists of a nucleus (protons and neutrons) surrounded by orbiting electrons in shells (K, L, M, N). 
           </p>
           <ul className="space-y-2 text-sm text-slate-400 mb-6">
             <li>• The K shell is closest to the nucleus.</li>
             <li>• Maximum electrons per shell = <Latex formula="2n^2" />.</li>
             <li>• Ground state is nature's lowest energy configuration.</li>
           </ul>

           <h4 className="text-white font-bold text-sm mb-2">Electron Binding Energy (<Latex formula="E_B" />)</h4>
           <p className="text-slate-300 text-sm leading-relaxed mb-4">
             The energy required to completely remove an electron from its orbit. It decreases with increasing shell number (K-shell electrons are bound the tightest). 
           </p>
           <div className="bg-slate-900 border border-slate-700 p-3 rounded text-center text-xs text-slate-400">
             Average <Latex formula="E_B" /> for Tungsten is ~4 keV, while Hydrogen is only 13.6 eV.
           </div>
        </div>

        {/* Excitation vs Ionization */}
        <div className="space-y-6">
           <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                 Energy &gt; <Latex formula="E_B" />
              </div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
                 <Zap className="w-5 h-5 text-red-400" /> Ionization
              </h3>
              
              <svg viewBox="0 0 200 100" className="w-full h-24 mb-4 bg-slate-950/50 rounded p-2">
                 {/* Nucleus */}
                 <circle cx="50" cy="50" r="8" className="fill-purple-600" />
                 {/* Shells */}
                 <circle cx="50" cy="50" r="20" className="fill-none stroke-slate-600 stroke-1" />
                 <circle cx="50" cy="50" r="35" className="fill-none stroke-slate-700 stroke-1" />
                 
                 {/* Incoming Radiation */}
                 <path d="M 10 50 L 15 45 L 20 55 L 25 45 L 30 50" className="stroke-yellow-400 stroke-2 fill-none" />
                 <polygon points="30,50 26,46 26,54" className="fill-yellow-400" />
                 
                 {/* Ejected Electron */}
                 <circle cx="30" cy="50" r="2" className="fill-red-400" /> {/* Hole */}
                 <circle cx="30" cy="50" r="3" className="fill-none stroke-red-400 stroke-1 stroke-dashed" />
                 <circle cx="90" cy="20" r="3" className="fill-blue-400" />
                 <path d="M 30 50 L 85 22" className="stroke-blue-400 stroke-1 stroke-dashed" />
                 <polygon points="85,22 80,26 86,28" className="fill-blue-400" />
                 
                 <text x="100" y="25" className="fill-blue-400 text-[8px]">Ejected (Free) e-</text>
                 <text x="10" y="35" className="fill-yellow-400 text-[8px]">Incident Photon</text>
                 <text x="50" y="80" textAnchor="middle" className="fill-slate-400 text-[8px]">Atom becomes positive Ion</text>
              </svg>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                 If radiation transfers energy to an orbiting electron that is greater than or equal to its binding energy, the electron is ejected. The ejected electron + the ion = an <strong>ion pair</strong>.
              </p>
              <div className="bg-slate-950 p-3 rounded border border-slate-800 text-xs text-slate-400 italic">
                A single 120 keV x-ray can ionize up to 30 Tungsten atoms before its energy is exhausted (120 keV / 4 keV = 30).
              </div>
           </div>

           <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                 Energy &lt; <Latex formula="E_B" />
              </div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
                 <Target className="w-5 h-5 text-yellow-400" /> Excitation
              </h3>
              
              <svg viewBox="0 0 200 100" className="w-full h-24 mb-4 bg-slate-950/50 rounded p-2">
                 {/* Nucleus */}
                 <circle cx="100" cy="80" r="8" className="fill-purple-600" />
                 {/* Shells (Partial arc) */}
                 <path d="M 50 80 A 50 50 0 0 1 150 80" className="fill-none stroke-slate-600 stroke-1" />
                 <path d="M 30 80 A 70 70 0 0 1 170 80" className="fill-none stroke-slate-700 stroke-1" />
                 
                 {/* Incoming Radiation (Low Energy) */}
                 <path d="M 20 60 Q 35 45, 50 60" className="stroke-orange-400 stroke-1 fill-none" />
                 <polygon points="50,60 45,55 45,65" className="fill-orange-400" />
                 
                 {/* Electron Jump */}
                 <circle cx="50" cy="60" r="2" className="fill-yellow-400" /> {/* Hole */}
                 <circle cx="50" cy="60" r="3" className="fill-none stroke-yellow-400 stroke-1 stroke-dashed" />
                 <circle cx="120" cy="30" r="3" className="fill-blue-400" />
                 <path d="M 50 60 Q 80 20, 115 30" className="stroke-blue-400 stroke-1 stroke-dashed" />
                 <polygon points="115,30 110,25 110,35" className="fill-blue-400" />
                 
                 <text x="130" y="30" className="fill-blue-400 text-[8px]">Moves to higher shell</text>
                 <text x="10" y="50" className="fill-orange-400 text-[8px]">Low E Photon</text>
              </svg>

              <p className="text-sm text-slate-300 leading-relaxed">
                 If the transferred energy is less than the binding energy, the electron is raised to a higher orbit but not ejected. Both excitation and ionization leave a "hole" in the inner shell that must be filled, which leads to secondary characteristic radiation.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
}
