import React from 'react';
import { Activity, Flame, Scale, TrendingDown } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section3_Decay() {
  return (
    <section id="decay" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-red-400">Section 7.3</span>
        <h2 className="text-3xl font-bold text-white mt-2">Radioactive Decay</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Radioactive decay is the spontaneous process by which an atom rearranges its constituent protons and neutrons to achieve a state of lower inherent energy. Energy is released in this process.
        </p>
      </header>

      {/* Mass Defect and Binding Energy */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="claude-surface p-8">
           <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <Scale className="w-5 h-5 text-yellow-400" /> Mass Defect & Binding Energy
           </h3>
           <p className="text-slate-300 text-sm leading-relaxed mb-4">
             The sum of the masses of the constituents of an atom is greater than the atom's actual mass. This difference is the <strong>mass defect</strong> (<Latex formula="\Delta m" />).
           </p>
           <div className="bg-slate-900 border border-slate-800 p-4 rounded text-center mb-4">
             <Latex formula="E = \Delta m c^2" displayMode />
           </div>
           <p className="text-slate-300 text-sm leading-relaxed mb-4">
             This "missing" energy is the <strong>binding energy</strong>—the energy required to separate the nucleus into its constituents. Because 1 atomic mass unit (<Latex formula="\text{u}" />) is equivalent to 931 MeV, we can easily calculate binding energy.
           </p>
           <div className="claude-note border-l-yellow-500 bg-yellow-950/20 text-yellow-200 text-sm">
             <strong>The Goal of Decay:</strong> The daughter atom will <em>always</em> have a higher binding energy per nucleon than the parent atom. Decay is an atom's attempt to increase its stability.
           </div>
        </div>

        {/* Line of Stability */}
        <div className="claude-surface p-8">
           <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-blue-400" /> Line of Stability
           </h3>
           
           <svg viewBox="0 0 250 180" className="w-full max-w-[250px] mx-auto h-40 mb-6 bg-slate-900 border border-slate-700 rounded-lg p-3 shadow-inner">
              {/* Axes */}
              <line x1="30" y1="150" x2="230" y2="150" className="stroke-slate-500 stroke-1" />
              <line x1="30" y1="150" x2="30" y2="10" className="stroke-slate-500 stroke-1" />
              <text x="220" y="165" className="fill-slate-400 text-[8px]">Protons (Z)</text>
              <text x="5" y="20" className="fill-slate-400 text-[8px]" transform="rotate(-90 15 20)">Neutrons (N)</text>
              
              {/* N = Z Line */}
              <line x1="30" y1="150" x2="160" y2="20" className="stroke-slate-600 stroke-1 stroke-dashed" />
              <text x="165" y="25" className="fill-slate-500 text-[8px]">N = Z</text>
              
              {/* Line of Stability Curve */}
              <path d="M 30,150 Q 100,80 150,10" className="fill-none stroke-blue-500 stroke-2" />
              <text x="100" y="50" className="fill-blue-400 text-[8px] font-bold" transform="rotate(-55 100 50)">Line of Stability</text>
              
              {/* Radionuclide */}
              <circle cx="70" cy="50" r="3" className="fill-red-400" />
              <text x="75" y="45" className="fill-red-400 text-[8px]">Radionuclide</text>
              
              {/* Decay Arrow */}
              <path d="M 72,52 L 85,65" className="stroke-red-400 stroke-1 stroke-dashed" />
              <polygon points="85,65 82,60 87,60" className="fill-red-400" transform="rotate(-45 85 65)" />
              <text x="85" y="75" className="fill-red-400 text-[6px]">Decay</text>
           </svg>

           <p className="text-slate-300 text-sm leading-relaxed mb-4">
             If we plot the number of neutrons (<Latex formula="N" />) vs. protons (<Latex formula="Z" />) for all stable nuclides, they form a curve called the <strong>line of stability</strong>.
           </p>
           <ul className="space-y-3 text-sm text-slate-400">
             <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>At low atomic numbers, <Latex formula="N \approx Z" />.</span>
             </li>
             <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>At high atomic numbers, <Latex formula="N > Z" /> (more neutrons are needed to overcome proton-proton repulsion).</span>
             </li>
           </ul>
           <p className="text-slate-300 text-sm leading-relaxed mt-4">
             Radionuclides fall off this line. Radioactive decay is simply an atom's attempt to change its proton-to-neutron ratio to move toward the line of stability.
           </p>
        </div>
      </div>

      {/* Radioactivity & Decay Law */}
      <div className="claude-panel p-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 rounded-xl mt-8">
         <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
            <TrendingDown className="w-6 h-6 text-red-400" /> The Radioactive Decay Law
         </h3>
         
         <div className="grid md:grid-cols-2 gap-8">
            <div>
               <h4 className="text-red-400 font-bold mb-2">Radioactivity (A)</h4>
               <p className="text-sm text-slate-300 mb-4">
                 Describes how many radioactive atoms decay every second. It does not indicate the type or energy of the radiation.
               </p>
               <div className="bg-slate-900 border border-slate-800 p-3 rounded mb-4 text-center">
                 <span className="text-slate-300">1 Curie (Ci) = <Latex formula="3.7 \times 10^{10}" /> dps</span><br/>
                 <span className="text-slate-300">1 Becquerel (Bq) = 1 dps</span>
               </div>
            </div>

            <div>
               <h4 className="text-red-400 font-bold mb-2">The Decay Law Equation</h4>
               <p className="text-sm text-slate-300 mb-4">
                 The loss of atoms per unit time is proportional to the number of radioactive atoms present.
               </p>
               <div className="bg-slate-900 border border-slate-800 p-3 rounded mb-4 text-center">
                 <Latex formula="A_t = A_0 e^{-\lambda t}" displayMode />
                 <Latex formula="N_t = N_0 e^{-\lambda t}" displayMode />
               </div>
               <p className="text-xs text-slate-400 text-center">Where <Latex formula="\lambda" /> is the decay constant.</p>
            </div>
         </div>

         <div className="mt-6 border-t border-slate-800 pt-6 flex items-center justify-between">
            <div className="flex-1 pr-6 border-r border-slate-800">
               <h4 className="text-white font-bold mb-1 flex items-center gap-2">
                 <Flame className="w-4 h-4 text-orange-400" /> Half-Life (<Latex formula="t_{1/2}" />)
               </h4>
               <p className="text-sm text-slate-400">The time it takes for radioactivity to decrease by a factor of 2.</p>
            </div>
            <div className="flex-1 pl-6 text-center">
               <Latex formula="t_{1/2} = \frac{0.693}{\lambda}" displayMode />
            </div>
         </div>
      </div>
    </section>
  );
}
