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
              <h4 className="text-emerald-400 font-bold mb-4">Annihilation Reaction</h4>
              
              <svg viewBox="0 0 300 120" className="w-full max-w-[300px] mx-auto h-32 mb-6 bg-slate-900 border border-slate-700 rounded-lg p-3 shadow-inner">
                 {/* Incoming Electron */}
                 <circle cx="120" cy="30" r="4" className="fill-blue-400" />
                 <text x="110" y="25" className="fill-blue-400 text-[10px] font-bold">e⁻</text>
                 <path d="M 125,35 L 140,50" className="stroke-blue-400 stroke-1 stroke-dashed" />
                 <polygon points="140,50 135,48 138,45" className="fill-blue-400" transform="rotate(45 140 50)" />
                 
                 {/* Incoming Positron */}
                 <circle cx="180" cy="30" r="4" className="fill-red-400" />
                 <text x="180" y="25" className="fill-red-400 text-[10px] font-bold">β⁺</text>
                 <path d="M 175,35 L 160,50" className="stroke-red-400 stroke-1 stroke-dashed" />
                 <polygon points="160,50 162,45 165,48" className="fill-red-400" transform="rotate(-45 160 50)" />
                 
                 {/* Annihilation point */}
                 <circle cx="150" cy="60" r="6" className="fill-yellow-400" />
                 <path d="M 140,50 L 160,70 M 160,50 L 140,70 M 150,45 L 150,75 M 135,60 L 165,60" className="stroke-yellow-400 stroke-2" />
                 
                 {/* 511 keV Gamma 1 (Left) */}
                 <path d="M 140,60 Q 120,50, 100,60 T 60,60 T 20,60" className="fill-none stroke-emerald-400 stroke-2" />
                 <polygon points="20,60 25,57 25,63" className="fill-emerald-400" />
                 <text x="40" y="50" className="fill-emerald-400 text-[10px] font-bold">511 keV γ</text>
                 
                 {/* 511 keV Gamma 2 (Right) */}
                 <path d="M 160,60 Q 180,70, 200,60 T 240,60 T 280,60" className="fill-none stroke-emerald-400 stroke-2" />
                 <polygon points="280,60 275,57 275,63" className="fill-emerald-400" />
                 <text x="220" y="50" className="fill-emerald-400 text-[10px] font-bold">511 keV γ</text>
                 
                 {/* 180 Degree Angle Arc */}
                 <path d="M 70,60 A 80 80 0 0 1 230 60" className="fill-none stroke-slate-500 stroke-1 stroke-dashed" />
                 <text x="150" y="95" textAnchor="middle" className="fill-slate-400 text-[10px]">180° Back-to-Back</text>
              </svg>

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
