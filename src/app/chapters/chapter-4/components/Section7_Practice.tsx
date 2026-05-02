import React from 'react';
import { HelpCircle, BookOpen, AlertCircle } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section7_Practice() {
  return (
    <section id="practice" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-indigo-400">Section 4.7</span>
        <h2 className="text-3xl font-bold text-white mt-2">Summary & Exam Practice</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Test your understanding of ionizing radiation, attenuation, and dosimetry with these selected practice problems.
        </p>
      </header>

      {/* Key Concepts Summary */}
      <div className="border-l-4 border-indigo-500 bg-indigo-950/20 p-8 rounded-r-xl shadow-lg mb-8">
         <h3 className="text-xl font-bold text-indigo-400 flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6" /> Core Takeaways
         </h3>
         <ul className="space-y-3 text-sm text-indigo-200">
           <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">•</span>
              <span><strong>Energetic Electrons</strong> create x-rays via bremsstrahlung (continuous spectrum) and characteristic (discrete spikes) interactions at the anode.</span>
           </li>
           <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">•</span>
              <span><strong>Photons</strong> interact with tissue via the photoelectric effect (creates contrast, depends on <Latex formula="Z^4" />) and Compton scatter (degrades image, depends on electron density).</span>
           </li>
           <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">•</span>
              <span><strong>Attenuation</strong> follows the exponential decay law: <Latex formula="N = N_0 e^{-\mu x}" />.</span>
           </li>
           <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">•</span>
              <span><strong>Dosimetry</strong> tracks radiation safety. Exposure (Roentgen) is ionization in air. Dose (Gray/rad) is energy absorbed in tissue.</span>
           </li>
         </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Problem 1 */}
        <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Problem 4.1
           </div>
           <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-blue-400" /> Ionization Capacity
           </h3>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             Suppose an electron is accelerated within a vacuum from a heated cathode held at ground potential to a tungsten anode held at 120 kV. If the average binding energy of tungsten is 4 keV, what is the maximum number of tungsten atoms that can be ionized on average?
           </p>
           <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded text-sm text-slate-400">
             <div className="flex items-center gap-2 mb-2 text-slate-300">
                <AlertCircle className="w-4 h-4 text-blue-400" /> <strong>Hint:</strong>
             </div>
             The electron gains kinetic energy equal to the potential difference in keV. Divide the total kinetic energy by the binding energy per atom.
           </div>
        </div>

        {/* Problem 2 */}
        <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Problem 4.5
           </div>
           <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-emerald-400" /> Attenuation and HVL
           </h3>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             Assume that the Half Value Layer (HVL) of a sodium iodide crystal at 140 keV is 0.3 cm. What percentage of gamma rays will pass right through a 1.2 cm thick crystal?
           </p>
           <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded text-sm text-slate-400">
             <div className="flex items-center gap-2 mb-2 text-slate-300">
                <AlertCircle className="w-4 h-4 text-emerald-400" /> <strong>Hint:</strong>
             </div>
             Calculate <Latex formula="\mu" /> from the HVL (<Latex formula="\mu = 0.693 / \text{HVL}" />). Then use the attenuation equation <Latex formula="N/N_0 = e^{-\mu x}" /> with <Latex formula="x = 1.2 \text{ cm}" />.
           </div>
        </div>

      </div>
    </section>
  );
}
