'use client';

import Link from 'next/link';
import { Atom, Zap, Shield, Activity, Info, AlertCircle, Layers, Fingerprint } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Chapter4() {
  return (
    <div className="space-y-12 pb-20 fade-up">
      {/* Navigation */}
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 4</span>
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 pb-8 stagger">
        <span className="claude-kicker text-blue-500">Section 4.1 - 4.6</span>
        <h1 className="text-5xl font-extrabold text-white mt-3 mb-6 tracking-tight">
          Physics of Radiography
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          The underlying laws of electromagnetic radiation. Discover atomic structure, 
          bremsstrahlung interactions, exponential attenuation, and the vital principles 
          of radiation dosimetry.
        </p>
        <div className="flex gap-4 mt-6">
          <span className="claude-chip">
            <Atom className="w-4 h-4 mr-2 inline text-blue-400" /> Atom Mechanics
          </span>
          <span className="claude-chip">
            <Shield className="w-4 h-4 mr-2 inline text-emerald-400" /> Dosimetry
          </span>
        </div>
      </header>

      {/* Atom Mechanics & Energy */}
      <section className="space-y-6 stagger">
        <span className="claude-kicker text-blue-400">Basic Physics</span>
        <h2 className="text-3xl font-bold text-white">Ionization & Atomic Structure</h2>

        <div className="claude-surface p-8">
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Medical imaging manipulates high-energy interactions. At the atomic scale, electrons occupy specific binding shells (K, L, M). Ejecting an inner electron requires energy exceeding its binding energy, leading to <strong>ionization</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden flex flex-col justify-center">
                 <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest text-center">Mass-Energy Equivalence</h4>
                 <div className="bg-slate-950 py-4 rounded border border-slate-800 shadow-inner">
                   <Latex formula="E = mc^2 \quad \text{or} \quad E = h\nu = \frac{hc}{\lambda}" displayMode />
                 </div>
                 <p className="text-xs text-slate-400 leading-relaxed mt-4 text-center">
                   A <Latex formula="1 \text{ amu}" /> mass precisely converts to <Latex formula="931 \text{ MeV}" /> of energy.
                 </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden flex flex-col justify-center">
                 <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest text-center">Kinetic Energy of Electrons</h4>
                 <div className="bg-slate-950 py-4 rounded border border-slate-800 shadow-inner mb-2">
                   <div className="text-[10px] text-slate-500 mb-1 text-center">Classical ($v \ll c$):</div>
                   <Latex formula="\text{KE} = \frac{1}{2} m_0 v^2" displayMode />
                 </div>
                 <div className="bg-slate-950 py-4 rounded border border-slate-800 shadow-inner">
                   <div className="text-[10px] text-slate-500 mb-1 text-center">Relativistic (X-ray tubes):</div>
                   <Latex formula="\text{KE} = mc^2 - m_0 c^2" displayMode />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attenuation Mechanisms */}
      <section className="space-y-6 stagger mt-12 border-t-2 border-slate-800 pt-10">
        <span className="claude-kicker text-purple-400">Photon Mechanics</span>
        <h2 className="text-3xl font-bold text-white">X-ray Attenuation</h2>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <div className="claude-panel p-8 space-y-6 bg-gradient-to-br from-slate-900 to-slate-950">
            <h3 className="text-xl font-bold text-purple-400 flex items-center gap-2">
              Exponential Decay Law
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              When a narrow, monoenergetic beam of intensity <Latex formula="I_0" /> passes through a material of thickness <Latex formula="x" />, the intensity drops exponentially based on the linear attenuation coefficient <Latex formula="\mu" />.
            </p>
            <div className="bg-slate-900 border border-purple-900/50 p-6 rounded-lg text-center shadow-xl">
               <Latex formula="I(x) = I_0 e^{-\mu x}" displayMode />
            </div>
            
            <div className="claude-note border-l-purple-500 bg-purple-950/20 text-purple-200 mt-6">
              <strong>Polyenergetic Beams:</strong> Real X-ray beams possess a spectrum of energies. Low-energy photons attenuate rapidly, leaving predominantly high-energy photons—a phenomenon uniquely termed <em>Beam Hardening</em>.
            </div>
          </div>

          <div className="claude-diagram flex flex-col px-6 pt-10 pb-6 bg-slate-900 border border-slate-700 relative rounded-xl h-full items-end justify-end">
            <h3 className="absolute top-4 left-6 text-sm font-bold text-slate-300">Attenuation vs Thickness (HVL)</h3>
            <div className="absolute top-10 left-6 text-xs text-slate-500">Half-Value Layer (HVL): $x = 0.693 / \mu$</div>
            <div className="absolute bottom-4 right-1/2 text-xs font-bold text-slate-400">Tissue Thickness (x)</div>
            <div className="absolute top-1/2 -left-6 text-xs font-bold text-slate-400 -rotate-90">Intensity $(I)$</div>
            
            {/* Chart Graph */}
            <div className="w-[90%] h-[200px] border-l-2 border-b-2 border-slate-600 relative flex items-end shadow-inner mb-4 ml-6">
               <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                 <path d="M 0 0 Q 30 150 200 190" fill="none" stroke="#a855f7" strokeWidth="3" />
               </svg>
               {/* 1 HVL Marker */}
               <div className="absolute left-[30px] bottom-0 w-0 h-full border-l border-dashed border-slate-500 flex flex-col justify-end pb-2">
                 <span className="text-[10px] text-slate-400 -ml-2 mb-1">1 HVL</span>
                 <span className="absolute top-[100px] -left-[30px] text-[10px] text-purple-400 bg-slate-900 px-1">50%</span>
               </div>
               {/* 2 HVL Marker */}
               <div className="absolute left-[70px] bottom-0 w-0 h-full border-l border-dashed border-slate-500 flex flex-col justify-end pb-2">
                 <span className="text-[10px] text-slate-400 -ml-2 mb-1">2 HVL</span>
                 <span className="absolute top-[150px] -left-[30px] text-[10px] text-purple-400 bg-slate-900 px-1">25%</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dosimetry */}
      <section className="claude-surface p-10 stagger mt-8 border-t-[3px] border-emerald-900">
        <div className="flex items-center gap-3 mb-6">
           <Shield className="text-emerald-400 w-8 h-8" />
           <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Radiation Dosimetry</h2>
        </div>
        
        <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-3xl">
          Understanding the biological impact of radiation requires mapping raw physical energy into biological equivalents. We progress from mere exposure to clinically predictive effective doses.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
           {/* Absorbed Dose */}
           <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl flex items-start gap-4">
              <div className="bg-slate-800 p-2 rounded shrink-0">
                 <Activity className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">Absorbed Dose (D)</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  The physical energy deposited per unit mass of tissue. 
                </p>
                <div className="bg-slate-950 px-3 py-1 rounded inline-block text-[10px] font-mono text-emerald-300">
                  1 Gray (Gy) = 1 Joule / kg
                </div>
              </div>
           </div>

           {/* Dose Equivalent */}
           <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl flex items-start gap-4">
              <div className="bg-slate-800 p-2 rounded shrink-0">
                 <Zap className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">Equivalent Dose (H)</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  Absorbed dose scaled by a radiation weighting factor ($w_R$) to account for radiation type (e.g., Alpha particles are more damaging than X-rays).
                </p>
                <div className="bg-slate-950 px-3 py-1 rounded inline-block text-[10px] font-mono text-yellow-300">
                  1 Sievert (Sv) = Gy × w_R
                </div>
              </div>
           </div>

           {/* Effective Dose */}
           <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl flex items-start gap-4 md:col-span-2">
              <div className="bg-slate-800 p-2 rounded shrink-0">
                 <Fingerprint className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">Effective Dose (E)</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  Equivalent dose scaled by tissue-specific weighting factors ($w_T$). This provides a single number representing global stochastic risk (e.g., cancer probability), regardless of which body part was irradiated.
                </p>
                <div className="bg-slate-950 p-4 border border-slate-800 rounded text-center">
                  <Latex formula="E = \sum_T w_T H_T" displayMode />
                </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}
