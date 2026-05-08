import React from 'react';
import { Waves, ArrowDownToLine, Maximize } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section5_Attenuation() {
  return (
    <section id="attenuation" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-blue-400">Section 4.5</span>
        <h2 className="text-3xl font-bold text-white mt-2">Attenuation of Electromagnetic Radiation</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Attenuation is the loss of strength of an x-ray beam as it passes through material. Tissue-dependent attenuation is the primary mechanism by which contrast is created in radiography.
        </p>
      </header>

      {/* Measures of Beam Strength */}
      <div className="claude-surface p-8">
        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
          <Waves className="w-5 h-5 text-indigo-400" /> Measures of Beam Strength
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
           <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
              <h4 className="text-indigo-400 font-bold mb-1 text-sm">Photon Fluence (<Latex formula="\Phi" />)</h4>
              <p className="text-xs text-slate-400 mb-2">Number of photons per unit area.</p>
              <Latex formula="\Phi = \frac{N}{A}" displayMode />
           </div>
           <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
              <h4 className="text-indigo-400 font-bold mb-1 text-sm">Energy Fluence Rate (Intensity, <Latex formula="I" />)</h4>
              <p className="text-xs text-slate-400 mb-2">Total energy per unit area per unit time.</p>
              <Latex formula="I = \frac{Nh\nu}{A\Delta t}" displayMode />
           </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
         {/* Narrow Beam Attenuation Law */}
         <div className="claude-surface p-8 border-t-4 border-t-blue-500">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
               <ArrowDownToLine className="w-5 h-5 text-blue-400" /> Narrow Beam Attenuation Law
            </h3>
            
            <svg viewBox="0 0 300 100" className="w-full h-40 mb-6 bg-slate-900/50 rounded-lg p-2 shadow-inner">
               {/* Source */}
               <circle cx="20" cy="50" r="5" className="fill-blue-500" />
               <text x="20" y="70" textAnchor="middle" className="fill-blue-400 text-[10px] font-bold">Source</text>
               
               {/* Material Block */}
               <rect x="120" y="20" width="40" height="60" className="fill-slate-800 stroke-slate-600 stroke-2" />
               <text x="140" y="15" textAnchor="middle" className="fill-slate-400 text-[10px]">Thickness Δx</text>
               <text x="140" y="54" textAnchor="middle" className="fill-white text-[14px] font-bold">μ</text>
               
               {/* Detector (Narrow) */}
               <rect x="260" y="40" width="10" height="20" className="fill-indigo-600" />
               <text x="265" y="75" textAnchor="middle" className="fill-indigo-400 text-[10px]">Narrow</text>
               <text x="265" y="85" textAnchor="middle" className="fill-indigo-400 text-[10px]">Detector</text>
               
               {/* Photons (Straight line passing through) */}
               <path d="M 25 50 L 115 50" className="stroke-blue-400 stroke-2" />
               <polygon points="115,50 105,46 105,54" className="fill-blue-400" />
               <text x="70" y="45" textAnchor="middle" className="fill-blue-400 text-[10px] font-bold">N₀</text>

               <path d="M 165 50 L 255 50" className="stroke-blue-400 stroke-2" />
               <polygon points="255,50 245,46 245,54" className="fill-blue-400" />
               <text x="210" y="45" textAnchor="middle" className="fill-blue-400 text-[10px] font-bold">N = N₀ e^(-μΔx)</text>

               {/* Scattered Photons missing the detector */}
               <path d="M 165 40 L 230 10" className="stroke-rose-400 stroke-[1.5] stroke-dashed" />
               <polygon points="230,10 223,15 220,9" className="fill-rose-400" />
               <path d="M 165 60 L 230 90" className="stroke-rose-400 stroke-[1.5] stroke-dashed" />
               <polygon points="230,90 220,91 223,85" className="fill-rose-400" />
               <text x="225" y="25" className="fill-rose-400 text-[10px] font-semibold">Scatter misses detector</text>
            </svg>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              In narrow beam geometry (where scatter away from the detector is not replaced by scatter from outside the beam), the reduction in photons is proportional to the thickness of the material <Latex formula="\Delta x" /> and the <strong>linear attenuation coefficient</strong> <Latex formula="\mu" />.
            </p>
            <div className="bg-slate-900 border border-blue-900/50 p-4 rounded text-center mb-6">
               <Latex formula="N = N_0 e^{-\mu \Delta x}" displayMode />
               <Latex formula="I = I_0 e^{-\mu \Delta x}" displayMode />
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4 py-2">
               <h4 className="text-blue-400 font-bold mb-1">Half Value Layer (HVL)</h4>
               <p className="text-sm text-slate-300 mb-2">
                 The thickness of material required to attenuate half of the incident photons.
               </p>
               <Latex formula="\text{HVL} = \frac{0.693}{\mu}" displayMode />
            </div>
         </div>

         {/* Broad Beam and Beam Softening */}
         <div className="claude-surface p-8 border-t-4 border-t-emerald-500">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
               <Maximize className="w-5 h-5 text-emerald-400" /> Broad Beam & Polyenergetic Effects
            </h3>

            <svg viewBox="0 0 300 100" className="w-full h-40 mb-6 bg-slate-900/50 rounded-lg p-2 shadow-inner">
               {/* Source */}
               <circle cx="20" cy="50" r="5" className="fill-emerald-500" />
               <text x="20" y="70" textAnchor="middle" className="fill-emerald-400 text-[10px] font-bold">Broad Source</text>
               
               {/* Material Block */}
               <rect x="120" y="10" width="40" height="80" className="fill-slate-800 stroke-slate-600 stroke-2" />
               <text x="140" y="54" textAnchor="middle" className="fill-white text-[14px] font-bold">μ</text>
               
               {/* Detector (Broad) */}
               <rect x="260" y="10" width="10" height="80" className="fill-indigo-600" />
               <text x="265" y="105" textAnchor="middle" className="fill-indigo-400 text-[10px]">Large Detector</text>
               
               {/* Primary Photon */}
               <path d="M 25 50 L 115 50" className="stroke-emerald-400 stroke-2" />
               <path d="M 165 50 L 255 50" className="stroke-emerald-400 stroke-2" />
               <polygon points="255,50 245,46 245,54" className="fill-emerald-400" />
               
               {/* Broad beam primary hitting off-center */}
               <path d="M 25 45 L 115 25" className="stroke-emerald-400 stroke-2" />
               <path d="M 165 25 L 255 25" className="stroke-emerald-400 stroke-[1.5]" />
               <polygon points="255,25 245,21 245,29" className="fill-emerald-400" />

               <path d="M 25 55 L 115 75" className="stroke-emerald-400 stroke-2" />
               <path d="M 165 75 L 255 75" className="stroke-emerald-400 stroke-[1.5]" />
               <polygon points="255,75 245,71 245,79" className="fill-emerald-400" />

               {/* Scattered Photons HITTING the detector */}
               <path d="M 165 25 L 255 40" className="stroke-rose-400 stroke-[1.5] stroke-dashed" />
               <polygon points="255,40 245,36 245,44" className="fill-rose-400" />
               <path d="M 165 75 L 255 60" className="stroke-rose-400 stroke-[1.5] stroke-dashed" />
               <polygon points="255,60 245,56 245,64" className="fill-rose-400" />

               <text x="220" y="15" className="fill-rose-400 text-[10px] font-semibold">Scatter hits detector!</text>
               <text x="220" y="85" className="fill-rose-400 text-[10px] font-semibold">I = B * I₀ e^(-μΔx)</text>
            </svg>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              A real x-ray beam is polyenergetic. Lower energy photons are attenuated much more quickly than higher energy photons. As a polyenergetic beam passes through tissue, the average energy of the remaining beam increases. This is called <strong>Beam Hardening</strong>.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              In broad beam geometry, photons scattered from outside the direct line of sight can still hit the detector, meaning more photons are detected than predicted by the narrow beam equation. Because these scattered photons have lost energy, this leads to <strong>Beam Softening</strong>.
            </p>
            <div className="bg-emerald-950/30 p-3 rounded border border-emerald-900/50 text-xs text-emerald-200 mt-6">
              <strong>Note:</strong> We assume narrow beam geometry for all imaging mathematics in this text, because modern systems use anti-scatter grids (collimators) to reject broad beam scatter.
            </div>
         </div>
      </div>
    </section>
  );
}
