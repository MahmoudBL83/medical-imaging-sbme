import React from 'react';
import { Activity, ZapOff } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section4_Noise() {
  return (
    <section id="noise" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-red-500">Section 5.4</span>
        <h2 className="text-3xl font-bold text-white mt-2">Noise and Scattering</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          The discrete arrival of x-ray photons causes statistical fluctuations (Quantum Mottle). Additionally, Compton scattering degrades both contrast and Signal-to-Noise Ratio (SNR).
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
         {/* SNR and Quantum Mottle */}
         <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
               <Activity className="w-5 h-5 text-red-400" /> Quantum SNR
            </h3>
            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              Because photon detection follows Poisson statistics, the variance in the number of background photons <Latex formula="N_b" /> is proportional to <Latex formula="N_b" /> itself. For a structure with local contrast <Latex formula="C" />, the ideal SNR is:
            </p>
            <div className="bg-slate-950 border border-slate-800 p-3 rounded text-center mb-4">
               <Latex formula="SNR = C \sqrt{N_b} = C \sqrt{\Phi A R t \eta}" displayMode />
            </div>
            <div className="text-xs text-slate-400 space-y-2">
               <p><strong><Latex formula="\Phi" /></strong>: Photons per Roentgen per cm².</p>
               <p><strong><Latex formula="A" /></strong>: Pixel area.</p>
               <p><strong><Latex formula="R" /></strong>: Radiation exposure (Dose).</p>
               <p><strong><Latex formula="t" /></strong>: Transmission fraction through body.</p>
               <p><strong><Latex formula="\eta" /></strong>: Detector efficiency.</p>
            </div>
         </div>

         {/* Detective Quantum Efficiency (DQE) */}
         <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
               <ZapOff className="w-5 h-5 text-orange-400" /> Detective Quantum Efficiency
            </h3>
            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              While Quantum Efficiency (QE) just counts how many photons interact with the detector, <strong>DQE</strong> accounts for the variability in the detector's output signal (e.g., how much light is produced per photon). It measures the degradation of SNR:
            </p>
            <div className="bg-slate-950 border border-slate-800 p-3 rounded text-center mb-4">
               <Latex formula="DQE = \left( \frac{SNR_{out}}{SNR_{in}} \right)^2" displayMode />
            </div>
            <p className="text-xs text-slate-400">
               DQE is always <Latex formula="\leq QE \leq 1" />. A higher DQE means the detector uses the available x-ray dose more efficiently, allowing for lower patient doses while maintaining image quality.
            </p>
         </div>
      </div>

      {/* Effects of Compton Scattering */}
      <div className="claude-surface p-8 mt-8 border-l-4 border-l-red-500">
         <h3 className="text-xl font-bold text-white mb-4">The Dual Penalty of Compton Scattering</h3>
         <p className="text-sm text-slate-300 mb-4">
           Scattered photons (<Latex formula="I_s" />) hit the detector in random locations, adding a uniform fog across both the target and background. This ruins both Contrast (<Latex formula="C" />) and SNR:
         </p>
         
         <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
               <h4 className="text-red-400 font-bold text-sm mb-2">1. Contrast Degradation</h4>
               <Latex formula="C' = C \left( \frac{1}{1 + I_s/I_b} \right)" displayMode />
               <p className="text-xs text-slate-400 mt-2">
                 Contrast is reduced by the scatter-to-primary ratio (<Latex formula="I_s/I_b" />).
               </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
               <h4 className="text-red-400 font-bold text-sm mb-2">2. SNR Degradation</h4>
               <Latex formula="SNR' = SNR \left( \frac{1}{\sqrt{1 + I_s/I_b}} \right)" displayMode />
               <p className="text-xs text-slate-400 mt-2">
                 SNR is reduced by the square root of the scatter penalty.
               </p>
            </div>
         </div>
      </div>

    </section>
  );
}
