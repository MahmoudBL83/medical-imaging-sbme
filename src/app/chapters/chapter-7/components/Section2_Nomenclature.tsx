import React from 'react';
import { HelpCircle, Network } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section2_Nomenclature() {
  return (
    <section id="nomenclature" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-indigo-400">Section 7.2</span>
        <h2 className="text-3xl font-bold text-white mt-2">Nomenclature</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          An atom consists of a nucleus of protons and neutrons (together called nucleons), surrounded by orbiting electrons. The atomic number <Latex formula="Z" /> equals the number of protons and defines the element. The mass number <Latex formula="A" /> equals the total number of nucleons.
        </p>
      </header>

      <div className="claude-surface p-8">
        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
          <Network className="w-5 h-5 text-purple-400" /> Atomic Relationships
        </h3>
        
        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
          The term <strong>nuclide</strong> refers to any unique combination of protons and neutrons. If it is radioactive, it is a <strong>radionuclide</strong>. Nuclides are typically denoted by <Latex formula="{}^A_Z\text{X}" /> or <Latex formula="\text{X-}A" /> (e.g., Carbon-11).
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
           {/* Isotopes */}
           <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg border-l-4 border-l-purple-500">
              <h4 className="text-purple-400 font-bold mb-2">Isotopes</h4>
              <p className="text-sm text-slate-300 mb-2">Same atomic number (<Latex formula="Z" />), different mass number (<Latex formula="A" />).</p>
              <div className="text-xs text-slate-500 italic">Example: Carbon-11 and Carbon-12. They are chemically identical.</div>
           </div>

           {/* Isobars */}
           <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg border-l-4 border-l-pink-500">
              <h4 className="text-pink-400 font-bold mb-2">Isobars</h4>
              <p className="text-sm text-slate-300 mb-2">Same mass number (<Latex formula="A" />), different atomic number (<Latex formula="Z" />).</p>
              <div className="text-xs text-slate-500 italic">Example: Carbon-11 decaying to Boron-11.</div>
           </div>

           {/* Isotones */}
           <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg border-l-4 border-l-blue-500">
              <h4 className="text-blue-400 font-bold mb-2">Isotones</h4>
              <p className="text-sm text-slate-300 mb-2">Same number of neutrons (<Latex formula="N = A - Z" />).</p>
           </div>

           {/* Isomers */}
           <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg border-l-4 border-l-emerald-500">
              <h4 className="text-emerald-400 font-bold mb-2">Isomers</h4>
              <p className="text-sm text-slate-300 mb-2">Same nuclide (same <Latex formula="A" /> and <Latex formula="Z" />), but different energy states.</p>
              <div className="text-xs text-slate-500 italic">Example: Technetium-99m decaying to Technetium-99.</div>
           </div>
        </div>

        <div className="mt-8 bg-slate-950 py-4 px-6 border border-slate-800 rounded-lg flex gap-4 items-start">
           <HelpCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
           <p className="text-sm text-slate-400">
             <strong>Memory Tip:</strong> Isoto<strong>p</strong>es have the same <strong>p</strong>rotons. Isoto<strong>n</strong>es have the same <strong>n</strong>eutrons. Iso<strong>b</strong>ars have the same mass num<strong>b</strong>er. Isom<strong>e</strong>rs have different <strong>e</strong>nergy.
           </p>
        </div>
      </div>
    </section>
  );
}
