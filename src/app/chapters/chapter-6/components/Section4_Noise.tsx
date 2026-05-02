import React from 'react';
import { AlertTriangle, Activity, EyeOff } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section4_Noise() {
  return (
    <section id="noise" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-red-500">Section 6.4</span>
        <h2 className="text-3xl font-bold text-white mt-2">Image Quality & Artifacts</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          CT resolution is limited by finite detector width and noise from Poisson photon statistics. Additionally, several physical realities introduce characteristic artifacts into the reconstructed image.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
         {/* Noise and SNR */}
         <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
               <Activity className="w-5 h-5 text-red-400" /> Noise and SNR
            </h3>
            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              Assuming a monoenergetic beam, the number of detected photons <Latex formula="N_{ij}" /> follows a Poisson distribution. The variance of the reconstructed image depends on the number of projections <Latex formula="M" />, the photons per detector <Latex formula="N" />, and the detector spacing <Latex formula="T" />.
            </p>
            <div className="bg-slate-950 border border-slate-800 p-3 rounded text-center mb-4">
               <Latex formula="\sigma_\mu^2 \approx \frac{2\pi^2}{3} \rho_0^3 \frac{1}{M} \frac{1}{N/T}" displayMode />
            </div>
            <p className="text-xs text-slate-400">
               To improve SNR, we must increase the dose (photon count <Latex formula="N" />) or use wider detectors (sacrificing spatial resolution). Interestingly, in fan-beam systems, increasing the number of detectors actually <em>lowers</em> SNR because the ramp filter couples noise across adjacent detectors.
            </p>
         </div>

         {/* Aliasing and Resolution */}
         <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
               <EyeOff className="w-5 h-5 text-orange-400" /> Resolution Constraints
            </h3>
            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              Resolution is limited by the finite width of the detectors (which act as a boxcar low-pass filter) and the chosen window for the Ramp filter.
            </p>
            <p className="text-sm text-slate-300">
              <strong>Aliasing:</strong> If the projections are undersampled (too few detectors) or if too few angles are acquired, high-frequency structures will alias into lower frequencies. This manifests as bright or dark <strong>streaks</strong> emanating from sharp edges.
            </p>
         </div>
      </div>

      {/* Characteristic Artifacts */}
      <div className="claude-surface p-8 mt-8 border-l-4 border-l-red-500">
         <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-500" /> Characteristic CT Artifacts
         </h3>
         
         <div className="grid md:grid-cols-3 gap-6 mb-6">
            <svg viewBox="0 0 150 150" className="w-full h-32 bg-slate-950/50 rounded-lg p-2 border border-slate-700">
               {/* Beam Hardening */}
               <text x="75" y="15" textAnchor="middle" className="fill-red-400 text-[10px] font-bold">Beam Hardening</text>
               <circle cx="75" cy="80" r="40" className="fill-slate-600" /> {/* Brain */}
               <circle cx="75" cy="80" r="45" className="fill-none stroke-white stroke-[8]" /> {/* Dense Skull */}
               {/* Dark Halo */}
               <circle cx="75" cy="80" r="35" className="fill-none stroke-slate-900 stroke-[8]" />
               <path d="M 75 40 L 75 25" className="stroke-red-400 stroke-1" />
               <polygon points="75,40 73,35 77,35" className="fill-red-400" />
               <text x="75" y="22" textAnchor="middle" className="fill-red-400 text-[8px]">Dark Halo</text>
            </svg>
            
            <svg viewBox="0 0 150 150" className="w-full h-32 bg-slate-950/50 rounded-lg p-2 border border-slate-700">
               {/* Ring Artifact */}
               <text x="75" y="15" textAnchor="middle" className="fill-red-400 text-[10px] font-bold">Ring Artifact (3rd Gen)</text>
               <circle cx="75" cy="80" r="40" className="fill-slate-600" /> {/* Brain */}
               <circle cx="75" cy="80" r="20" className="fill-none stroke-white stroke-[2]" /> {/* Bright Ring */}
               <path d="M 95 80 L 115 80" className="stroke-red-400 stroke-1" />
               <polygon points="95,80 100,78 100,82" className="fill-red-400" />
               <text x="118" y="83" className="fill-red-400 text-[8px]">Bad Detector</text>
            </svg>
            
            <svg viewBox="0 0 150 150" className="w-full h-32 bg-slate-950/50 rounded-lg p-2 border border-slate-700">
               {/* Motion Artifact */}
               <text x="75" y="15" textAnchor="middle" className="fill-red-400 text-[10px] font-bold">Motion Artifact</text>
               <circle cx="75" cy="80" r="20" className="fill-white" />
               {/* Streaks */}
               <line x1="55" y1="80" x2="10" y2="80" className="stroke-white stroke-2 opacity-50" />
               <line x1="95" y1="80" x2="140" y2="80" className="stroke-white stroke-2 opacity-50" />
               <line x1="75" y1="60" x2="75" y2="20" className="stroke-white stroke-2 opacity-50" />
               <line x1="75" y1="100" x2="75" y2="140" className="stroke-white stroke-2 opacity-50" />
               <line x1="60" y1="65" x2="30" y2="35" className="stroke-white stroke-1 opacity-40" />
               <line x1="90" y1="95" x2="120" y2="125" className="stroke-white stroke-1 opacity-40" />
               <text x="75" y="145" textAnchor="middle" className="fill-red-400 text-[8px]">Streaking</text>
            </svg>
         </div>

         <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
               <h4 className="text-red-400 font-bold text-sm mb-2">Beam Hardening</h4>
               <p className="text-xs text-slate-400">
                 Lower energy x-rays are absorbed first, so the beam becomes "harder" (higher average energy) as it penetrates. This violates the monoenergetic assumption, causing the <strong>interpetrous lucency artifact</strong> (a dark halo, often seen around the dense skull bone).
               </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
               <h4 className="text-red-400 font-bold text-sm mb-2">System Drift (Ring Artifacts)</h4>
               <p className="text-xs text-slate-400">
                 If a single detector goes bad or miscalibrates in a 3G (rotating detector) system, it traces out a circle during the scan. This produces a bright or dark <strong>ring artifact</strong> centered at the isocenter.
               </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
               <h4 className="text-red-400 font-bold text-sm mb-2">Motion Artifacts</h4>
               <p className="text-xs text-slate-400">
                 Because a scan takes time, patient motion (breathing, cardiac) causes severe blurring and streaks. Solved by gating (ECG) or extremely fast scanners (5G EBCT, 6G/7G).
               </p>
            </div>
         </div>
      </div>

    </section>
  );
}
