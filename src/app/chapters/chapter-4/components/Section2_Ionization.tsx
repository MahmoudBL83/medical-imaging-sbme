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
              <p className="text-sm text-slate-300 leading-relaxed">
                 If the transferred energy is less than the binding energy, the electron is raised to a higher orbit but not ejected. Both excitation and ionization leave a "hole" in the inner shell that must be filled, which leads to secondary characteristic radiation.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
}
