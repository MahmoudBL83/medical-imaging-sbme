import React from 'react';
import { Layers, Activity } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section2_Formation() {
  return (
    <section id="formation" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-red-400">Section 9.2</span>
        <h2 className="text-3xl font-bold text-white mt-2">Image Formation</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          In both SPECT and PET, the mathematical goal is to reconstruct the 3-D radiotracer distribution <Latex formula="f(x,y,z)" /> from 1-D or 2-D projections, similar to X-ray CT. However, attenuation plays a much more destructive and mathematically complex role in emission tomography.
        </p>
      </header>

      {/* Attenuation in SPECT vs PET */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
         <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative flex flex-col justify-between">
            <div>
               <h3 className="text-white font-bold mb-3 text-lg text-red-400">Attenuation in SPECT</h3>
               <p className="text-sm text-slate-300 mb-4">
                  In SPECT, the probability that a photon survives to reach the detector depends on the <strong>depth of the source</strong> within the body.
               </p>
               <div className="bg-slate-950 p-3 rounded border border-slate-800 text-center text-xs mb-4">
                  <Latex formula="\text{Prob} = \exp\left(-\int_{z}^{D} \mu(x,y,z') dz'\right)" displayMode />
               </div>
               <p className="text-xs text-slate-400 mb-4">
                  Because the attenuation factor is inside the projection integral along with the unknown activity <Latex formula="f(x,y,z)" />, the Radon transform becomes the <strong>Attenuated Radon Transform</strong>, making exact analytical reconstruction (like FBP) nearly impossible without approximations.
               </p>
            </div>
            
            <svg viewBox="0 0 200 120" className="w-full h-32 bg-slate-950/50 rounded-lg p-2 mt-auto shadow-inner">
               {/* Body/Tissue */}
               <path d="M 0,40 Q 100,20 200,40 L 200,120 L 0,120 Z" className="fill-slate-800/50 stroke-slate-500 stroke-1" />
               <text x="100" y="115" textAnchor="middle" className="fill-slate-500 text-[6px]">Patient Tissue</text>
               
               {/* Detector */}
               <rect x="0" y="10" width="200" height="10" className="fill-slate-700 stroke-red-400 stroke-1" />
               <text x="100" y="17" textAnchor="middle" className="fill-red-400 text-[6px]">SPECT Detector</text>
               
               {/* Deep Source */}
               <circle cx="50" cy="90" r="4" className="fill-red-500" />
               <text x="50" y="100" textAnchor="middle" className="fill-red-400 text-[6px]">Deep</text>
               <line x1="50" y1="90" x2="50" y2="40" className="stroke-red-500/30 stroke-1" /> {/* Path */}
               <path d="M 50,90 L 50,60" className="stroke-red-400 stroke-1 stroke-dashed" strokeDasharray="4 2">
                  <animate attributeName="stroke-dashoffset" from="6" to="0" dur="0.8s" repeatCount="indefinite" />
               </path>
               <circle cx="50" cy="60" r="1.5" className="fill-slate-400" /> {/* Absorbed */}
               <text x="70" y="70" textAnchor="middle" className="fill-slate-400 text-[6px]">Absorbed</text>
               
               {/* Shallow Source */}
               <circle cx="150" cy="45" r="4" className="fill-red-500" />
               <text x="150" y="55" textAnchor="middle" className="fill-red-400 text-[6px]">Shallow</text>
               <path d="M 150,45 L 150,20" className="stroke-red-400 stroke-1 stroke-dashed" strokeDasharray="4 2">
                  <animate attributeName="stroke-dashoffset" from="6" to="0" dur="0.4s" repeatCount="indefinite" />
               </path>
               
               {/* Arrow indicating depth dependence */}
               <path d="M 100,85 Q 150,60 170,40" className="fill-none stroke-red-400/50 stroke-1" />
               <polygon points="170,40 165,42 168,45" className="fill-red-400/50" />
               <text x="140" y="80" textAnchor="middle" className="fill-red-400 text-[6px]">Higher Survival Prob.</text>
            </svg>
         </div>

         <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative flex flex-col justify-between">
            <div>
               <h3 className="text-white font-bold mb-3 text-lg text-purple-400">Attenuation in PET</h3>
               <p className="text-sm text-slate-300 mb-4">
                  In PET, <em>both</em> 511 keV photons must survive to be recorded as a coincidence. One travels distance <Latex formula="d_1" /> and the other travels <Latex formula="d_2" />. The total survival probability is their product.
               </p>
               <div className="bg-slate-950 p-3 rounded border border-slate-800 text-center text-xs mb-4">
                  <Latex formula="\text{Prob} = \exp\left(-\int \mu \cdot d_1\right) \cdot \exp\left(-\int \mu \cdot d_2\right) = \exp\left(-\int_{L} \mu(l) dl\right)" displayMode />
               </div>
               <p className="text-xs text-slate-400 mb-4">
                  Miraculously, the probability depends <strong>only on the total thickness of the body along the LOR</strong>, not on where the annihilation occurred! This means the attenuation factor is a constant for a given LOR and can be easily corrected if a transmission CT scan is acquired first (e.g., in PET/CT).
               </p>
            </div>
            
            <svg viewBox="0 0 200 120" className="w-full h-32 bg-slate-950/50 rounded-lg p-2 mt-auto shadow-inner">
               {/* Body/Tissue */}
               <circle cx="100" cy="60" r="40" className="fill-purple-900/30 stroke-purple-700 stroke-1" />
               <text x="100" y="28" textAnchor="middle" className="fill-purple-400/50 text-[6px]">Total Thickness L</text>
               
               {/* Detectors */}
               <path d="M 30,30 Q 15,60 30,90" className="fill-none stroke-purple-400 stroke-4" />
               <path d="M 170,30 Q 185,60 170,90" className="fill-none stroke-purple-400 stroke-4" />
               
               {/* Scenario 1: Deep Event */}
               <circle cx="100" cy="50" r="3" className="fill-yellow-400" />
               <line x1="100" y1="50" x2="63" y2="50" className="stroke-purple-400 stroke-[0.5]" />
               <text x="80" y="48" className="fill-purple-300 text-[5px]">d1</text>
               <line x1="100" y1="50" x2="137" y2="50" className="stroke-purple-400 stroke-[0.5]" />
               <text x="120" y="48" className="fill-purple-300 text-[5px]">d2</text>
               <g className="stroke-yellow-400 stroke-1 stroke-dashed" strokeDasharray="4 2">
                  <animate attributeName="stroke-dashoffset" from="6" to="0" dur="1s" repeatCount="indefinite" />
                  <line x1="100" y1="50" x2="25" y2="50" />
                  <line x1="100" y1="50" x2="175" y2="50" />
               </g>
               
               {/* Scenario 2: Shallow Event */}
               <circle cx="125" cy="70" r="3" className="fill-yellow-400" />
               <line x1="125" y1="70" x2="63" y2="70" className="stroke-purple-400 stroke-[0.5]" />
               <text x="90" y="68" className="fill-purple-300 text-[5px]">d1'</text>
               <line x1="125" y1="70" x2="137" y2="70" className="stroke-purple-400 stroke-[0.5]" />
               <text x="130" y="68" className="fill-purple-300 text-[5px]">d2'</text>
               <g className="stroke-yellow-400 stroke-1 stroke-dashed" strokeDasharray="4 2">
                  <animate attributeName="stroke-dashoffset" from="6" to="0" dur="1s" repeatCount="indefinite" />
                  <line x1="125" y1="70" x2="25" y2="70" />
                  <line x1="125" y1="70" x2="175" y2="70" />
               </g>
               
               <text x="100" y="115" textAnchor="middle" className="fill-purple-300 text-[6px]">d1 + d2 = d1' + d2' = L</text>
            </svg>
         </div>
      </div>

    </section>
  );
}
