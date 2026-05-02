import React from 'react';
import { ShieldAlert, HeartPulse, Stethoscope } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section6_Dosimetry() {
  return (
    <section id="dosimetry" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-red-500">Section 4.6</span>
        <h2 className="text-3xl font-bold text-white mt-2">Radiation Dosimetry</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          While previous sections focused on what radiation <em>is</em> (for creating images), dosimetry focuses on what radiation <em>does</em> to the body. High doses cause burns; low doses increase cancer risk.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Exposure */}
        <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl hover:bg-slate-800/80 transition-colors">
           <h3 className="text-white font-bold mb-3 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-orange-400" /> Exposure (<Latex formula="X" />)
           </h3>
           <p className="text-sm text-slate-300 mb-3">
             The number of ion pairs produced in a specific volume of <strong>air</strong>.
           </p>
           <p className="text-xs text-slate-400">
             <strong>Unit:</strong> Roentgen (R) = <Latex formula="2.58 \times 10^{-4} \text{ C/kg}" />
           </p>
        </div>

        {/* Absorbed Dose */}
        <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl hover:bg-slate-800/80 transition-colors border-t-2 border-t-red-500">
           <h3 className="text-white font-bold mb-3 flex items-center gap-2">
              <HeartPulse className="w-4 h-4 text-red-400" /> Absorbed Dose (<Latex formula="D" />)
           </h3>
           <p className="text-sm text-slate-300 mb-3">
             Energy deposited per unit mass of material (by photoelectric effect and Compton scatter).
           </p>
           <p className="text-xs text-slate-400 mb-2">
             <strong>SI Unit:</strong> Gray (Gy) = 1 J/kg = 100 rads.
           </p>
           <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
             Note: Kerma is effectively equivalent to Dose at diagnostic energies.
           </div>
        </div>

        {/* Dose Equivalent */}
        <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl hover:bg-slate-800/80 transition-colors">
           <h3 className="text-white font-bold mb-3 flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-purple-400" /> Dose Equivalent (<Latex formula="H" />)
           </h3>
           <p className="text-sm text-slate-300 mb-3">
             Accounts for biological damage. <Latex formula="H = D \times Q" /> (Quality factor). For x-rays/gamma rays, <Latex formula="Q \approx 1" />. For alpha particles, <Latex formula="Q \approx 20" />.
           </p>
           <p className="text-xs text-slate-400">
             <strong>SI Unit:</strong> Sievert (Sv)
           </p>
        </div>
      </div>

      <div className="claude-panel p-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 rounded-xl mt-8">
         <div className="grid lg:grid-cols-2 gap-8">
            <div>
               <h4 className="text-white font-bold mb-2">Effective Dose</h4>
               <p className="text-sm text-slate-300 mb-4">
                 Used to relate partial-body radiation to whole-body risk. It is the sum of dose equivalents to different organs weighted by their sensitivity to radiation (<Latex formula="w_j" />).
               </p>
               <div className="bg-slate-900 p-3 rounded border border-slate-800 text-center">
                 <Latex formula="D_{\text{effective}} = \sum_{\text{organs}} H_j w_j" displayMode />
               </div>
            </div>
            
            <div className="border-l-4 border-slate-700 pl-6">
               <h4 className="text-white font-bold mb-2">The <Latex formula="f" />-Factor</h4>
               <p className="text-sm text-slate-300 mb-4">
                 Converts exposure measured in air to dose absorbed in tissue.
               </p>
               <div className="bg-slate-900 p-3 rounded border border-slate-800 text-center mb-4">
                 <Latex formula="D = fX \quad \text{where} \quad f = 0.87 \frac{(\mu/\rho)_{\text{tissue}}}{(\mu/\rho)_{\text{air}}}" displayMode />
               </div>
               <p className="text-xs text-slate-400 italic">
                 1 Roentgen of exposure roughly equals 1 rad of dose in soft tissue.
               </p>
            </div>
         </div>
      </div>
    </section>
  );
}
