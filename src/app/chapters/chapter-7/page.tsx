'use client';

import Link from 'next/link';
import { Target, Zap, Activity, Info, Radiation, Layers, Shield, Clock, BoxIcon } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Chapter7() {
  return (
    <div className="space-y-12 pb-20 fade-up">
      {/* Navigation */}
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 7</span>
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 pb-8 stagger">
        <span className="claude-kicker text-red-500">Section 7.1 - 7.6</span>
        <h1 className="text-5xl font-extrabold text-white mt-3 mb-6 tracking-tight">
          Physics of Nuclear Medicine
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          Delving into the energetic heart of matter. We explore radioactive decay mechanisms,
          the mathematics of halflives, and the behavior of the radiotracers that power
          scintigraphy, SPECT, and PET imaging.
        </p>
        <div className="flex gap-4 mt-6">
          <span className="claude-chip">
            <Radiation className="w-4 h-4 mr-2 inline text-red-400" /> Radioactivity
          </span>
          <span className="claude-chip">
            <Clock className="w-4 h-4 mr-2 inline text-amber-400" /> Decay Law
          </span>
        </div>
      </header>

      {/* Atomic Nomenclature & Mass Defect */}
      <section className="space-y-6 stagger">
        <span className="claude-kicker text-amber-400">Atomic Properties</span>
        <h2 className="text-3xl font-bold text-white">Nuclides & The Mass Defect</h2>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
          <div className="claude-surface p-8 space-y-6">
             <p className="text-slate-300 text-sm leading-relaxed mb-6">
               Atoms are defined by their mass number (<Latex formula="A = Z + N" />) where <Latex formula="Z" /> is protons and <Latex formula="N" /> is neutrons. Nuclei are kept stable by the strong nuclear force overcoming electrostatic repulsion. 
             </p>
             <h3 className="font-bold text-amber-400 text-sm uppercase tracking-widest mb-3 border-b border-slate-700 pb-2">Terminology</h3>
             <ul className="text-sm text-slate-300 space-y-3">
               <li><strong className="text-white font-mono bg-slate-800 px-1 rounded">Isotopes</strong>: Same protons (Z), different neutrons. (e.g., C-12 vs C-14)</li>
               <li><strong className="text-white font-mono bg-slate-800 px-1 rounded">Isobars</strong>: Same mass number (A), different protons.</li>
               <li><strong className="text-white font-mono bg-slate-800 px-1 rounded">Isotones</strong>: Same neutrons (N), different protons.</li>
               <li><strong className="text-white font-mono bg-slate-800 px-1 rounded">Isomers</strong>: Same nucleus (same A, Z, N), different energy state (e.g., Tc-99m vs Tc-99).</li>
             </ul>
          </div>

          <div className="claude-panel p-8 border-l-4 border-l-red-500 flex flex-col justify-center bg-red-950/10">
             <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2">
               <Zap className="w-4 h-4" /> The Mass Defect
             </h3>
             <p className="text-xs text-slate-400 leading-relaxed mb-6">
               The actual mass of a nucleus is <em>less</em> than the sum of its individual protons and neutrons. This missing mass (<Latex formula="\Delta m" />) has been converted into nuclear binding energy holding the atom together.
             </p>
             <div className="bg-slate-900 border border-red-900/50 p-4 rounded text-center shadow-inner">
                <Latex formula="E = \Delta m c^2" displayMode />
             </div>
             <p className="text-[10px] text-slate-500 mt-4 text-center">
               Nuclei with excess energy shed it through radioactive decay to return to the Line of Stability.
             </p>
          </div>
        </div>
      </section>

      {/* Law of Radioactive Decay */}
      <section className="space-y-6 stagger mt-12">
        <span className="claude-kicker text-blue-400">Kinetics</span>
        <h2 className="text-3xl font-bold text-white">The Decay Law & Activity</h2>

        <div className="claude-surface p-8">
          <p className="text-slate-300 text-sm leading-relaxed mb-8">
            Radioactive decay is a fundamentally random process modeled by Poisson statistics. 
            The number of atoms decaying per unit time is proportional to the total number of unstable atoms present (<Latex formula="N" />), scaled by a decay constant <Latex formula="\lambda" />.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative overflow-hidden flex flex-col justify-center">
               <h4 className="text-blue-400 font-bold text-sm mb-4 uppercase tracking-widest text-center">Population Equation</h4>
               <div className="bg-slate-950 py-4 rounded border border-slate-800 shadow-inner">
                 <Latex formula="\frac{dN}{dt} = -\lambda N \quad \Longrightarrow \quad N(t) = N_0 e^{-\lambda t}" displayMode />
               </div>
               <p className="text-xs text-slate-400 leading-relaxed mt-6">
                 Here, <Latex formula="N_0" /> is the starting quantity at <Latex formula="t=0" />.
               </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative overflow-hidden flex flex-col justify-center">
               <h4 className="text-emerald-400 font-bold text-sm mb-4 uppercase tracking-widest text-center">Activity & Half-Life</h4>
               <div className="bg-slate-950 py-4 rounded border border-slate-800 shadow-inner mb-4">
                 <Latex formula="A(t) = \lambda N(t) = A_0 e^{-\lambda t}" displayMode />
               </div>
               <div className="bg-slate-950 py-4 rounded border border-slate-800 shadow-inner">
                 <Latex formula="T_{1/2} = \frac{\ln(2)}{\lambda} \approx \frac{0.693}{\lambda}" displayMode />
               </div>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-950/20 p-4 rounded-xl border border-blue-900/50 flex gap-4 items-start">
             <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
             <div className="text-sm">
                <strong className="text-blue-400 block mb-1">Poisson Counting Statistics</strong>
                <p className="text-slate-300">
                  Because decay events are random, if we measure <Latex formula="N" /> counts from a detector, the variance is exactly equal to the mean. Therefore, the standard deviation is <Latex formula="\sigma = \sqrt{N}" />. To lower SNR and get higher resolution images, we must collect vastly more counts.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Modes of Decay Flow */}
      <section className="claude-surface p-10 stagger mt-8 border-t-[3px] border-purple-900">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
           <Layers className="text-purple-400" /> Modes of Decay
        </h2>
        
        <p className="text-slate-300 text-sm leading-relaxed mb-8">
          Unstable nuclides attempt to reach stability through distinct quantum mechanisms depending on whether they have too many neutrons, too many protons, or simply too much bulk energy.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
           <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 relative">
              <div className="absolute top-0 right-0 bg-yellow-500/20 text-yellow-400 text-[10px] font-bold px-2 py-1 rounded-bl-lg">Neutron Heavy</div>
              <h3 className="text-white font-bold mb-3 mt-4"><Latex formula="\beta^-" /> Decay</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed h-16">
                 A neutron converts into a proton, ejecting an electron (<Latex formula="\beta^-" />) and an antineutrino.
              </p>
              <div className="border-t border-slate-800 pt-4 text-center">
                 <Latex formula="{}^{A}_{Z}X \rightarrow \! {}^{A}_{Z+1}Y + e^- \!+ \bar{\nu}" />
              </div>
           </div>

           <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 relative">
              <div className="absolute top-0 right-0 bg-blue-500/20 text-blue-400 text-[10px] font-bold px-2 py-1 rounded-bl-lg">Proton Heavy</div>
              <h3 className="text-white font-bold mb-3 mt-4"><Latex formula="\beta^+" /> Decay (PET)</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed h-16">
                 A proton converts into a neutron, ejecting a positron (<Latex formula="\beta^+" />). The positron later annihilates with an electron yielding two 511 keV gamma rays.
              </p>
              <div className="border-t border-slate-800 pt-4 text-center">
                 <Latex formula="{}^{A}_{Z}X \rightarrow \! {}^{A}_{Z-1}Y + e^+ \!+ \nu" />
              </div>
           </div>

           <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 relative border-b-4 border-b-purple-500 shadow-[0_4px_15px_rgba(168,85,247,0.15)]">
              <div className="absolute top-0 right-0 bg-purple-500/20 text-purple-400 text-[10px] font-bold px-2 py-1 rounded-bl-lg">High Energy State</div>
              <h3 className="text-white font-bold mb-3 mt-4">Isomeric Transition</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed h-16">
                 A metastable nucleus drops to the ground state by emitting a pure gamma ray, with no change to Z or N. <strong>Crucial for SPECT.</strong>
              </p>
              <div className="border-t border-slate-800 pt-4 text-center">
                 <Latex formula="{}^{A}_{Z}X^m \rightarrow \! {}^{A}_{Z}X + \gamma" />
              </div>
           </div>
        </div>
      </section>

      {/* Radiotracers */}
      <section className="space-y-6 stagger mt-12 pb-10">
        <span className="claude-kicker text-pink-400">Clinical Agents</span>
        <h2 className="text-3xl font-bold text-white">Medical Radiotracers</h2>

        <div className="claude-panel p-8 space-y-6 bg-gradient-to-br from-slate-900 to-slate-950">
           <p className="text-slate-300 text-sm leading-relaxed mb-2">
             Ideal diagnostic radiotracers share specific characteristics to maximize image quality while minimizing patient dose:
           </p>
           <ul className="text-xs text-slate-400 space-y-2 list-disc pl-6 mb-6">
             <li>Emit purely Gamma rays (Alpha/Beta particles cause severe tissue damage without exiting the body).</li>
             <li>Optimal decay energy (100–200 keV) to easily escape the body but still interact fully with detectors.</li>
             <li>Physical half-life matching the biological examination time (hours, not days).</li>
           </ul>

           <div className="grid md:grid-cols-2 gap-4">
             <div className="bg-slate-800/50 p-4 border border-slate-700 rounded-xl">
                <h4 className="font-bold text-pink-400 mb-2 flex items-center justify-between">
                  Technetium-99m (Tc-99m)
                  <span className="text-[10px] bg-slate-900 px-2 py-1 rounded">SPECT</span>
                </h4>
                <p className="text-xs text-slate-300 mb-1"><strong>Energy:</strong> 140 keV (Almost ideal)</p>
                <p className="text-xs text-slate-300 mb-1"><strong>Half-life:</strong> 6.02 Hours</p>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2">Eluted daily from a Molybdenum-99 generator. Decays purely via Isomeric Transition.</p>
             </div>
             
             <div className="bg-slate-800/50 p-4 border border-slate-700 rounded-xl">
                <h4 className="font-bold text-blue-400 mb-2 flex items-center justify-between">
                  Fluorine-18 (F-18 / FDG)
                  <span className="text-[10px] bg-slate-900 px-2 py-1 rounded">PET</span>
                </h4>
                <p className="text-xs text-slate-300 mb-1"><strong>Interaction:</strong> 511 keV annihilation pairs</p>
                <p className="text-xs text-slate-300 mb-1"><strong>Half-life:</strong> 110 Minutes</p>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2">Attached to glucose (FDG) to map rapid cellular metabolism, especially powerful for oncology.</p>
             </div>
           </div>
        </div>
      </section>

    </div>
  );
}
