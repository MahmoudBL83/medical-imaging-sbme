import React from 'react';
import { Target, CircleDot, Zap } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section4_Modes() {
  return (
    <section id="modes" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-teal-400">Section 7.4</span>
        <h2 className="text-3xl font-bold text-white mt-2">Modes of Decay</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          The mode of radioactive decay governs the type of ionizing radiation produced. In nuclear medicine imaging, we are primarily concerned with positrons (for PET) and gamma rays (for planar scintigraphy and SPECT).
        </p>
      </header>

      <div className="space-y-6">
        
        {/* Positron Decay */}
        <div className="claude-surface p-8">
           <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-emerald-400" /> Positron Decay (<Latex formula="\beta^+" />)
           </h3>
           <p className="text-slate-300 text-sm leading-relaxed mb-4">
             A nuclide with too few neutrons for stability can transform a proton into a neutron, emitting a positron (<Latex formula="\beta^+" />) and a neutrino (<Latex formula="\nu" />).
           </p>
           <div className="bg-slate-900 border border-slate-800 p-4 rounded text-center mb-6">
             <Latex formula="\text{p} \rightarrow \text{n} + \beta^+ + \nu" displayMode />
           </div>
           
           <div className="border-l-4 border-emerald-500 bg-emerald-950/20 p-6 rounded-r-lg">
              <h4 className="text-emerald-400 font-bold mb-2">Annihilation Reaction</h4>
              <p className="text-sm text-slate-300">
                A positron is an antimatter electron. It travels a short distance (millimeters), deposits kinetic energy, and then meets a free electron. The positron and electron annihilate each other. From conservation of energy (<Latex formula="E=mc^2" />), two 511 keV annihilation photons appear. From conservation of momentum, they are emitted 180° back-to-back. This forms the basis of PET imaging.
              </p>
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Electron Capture */}
          <div className="claude-surface p-8">
             <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                <CircleDot className="w-5 h-5 text-orange-400" /> Electron Capture
             </h3>
             <p className="text-slate-300 text-sm leading-relaxed mb-4">
               An alternative to positron decay. The nucleus captures an inner shell (K or L shell) orbiting electron.
             </p>
             <div className="bg-slate-900 border border-slate-800 p-4 rounded text-center">
               <Latex formula="\text{p} + \text{e}^- \rightarrow \text{n} + \nu" displayMode />
             </div>
             <p className="text-xs text-slate-400 mt-4 italic">
               A given atom will undergo either positron decay OR electron capture, but never both.
             </p>
          </div>

          {/* Isomeric Transition */}
          <div className="claude-surface p-8">
             <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-yellow-400" /> Isomeric Transition
             </h3>
             <p className="text-slate-300 text-sm leading-relaxed mb-4">
               A parent in a transient, metastable state decays to a daughter of the exact same element and isotope, releasing excess energy as a <strong>gamma ray (<Latex formula="\gamma" />)</strong>.
             </p>
             <div className="bg-slate-900 border border-slate-800 p-4 rounded text-center">
               <Latex formula="\text{Cs-137} \rightarrow \text{Ba-137m} \rightarrow \text{Ba-137} + \gamma" displayMode />
             </div>
             <p className="text-xs text-slate-400 mt-4 italic">
               Note: The "m" in Ba-137m stands for metastable.
             </p>
          </div>
        </div>

      </div>
    </section>
  );
}
