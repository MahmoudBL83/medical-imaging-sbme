import React from 'react';
import { AlertTriangle, Activity, EyeOff, Cuboid } from 'lucide-react';
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
         <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden flex flex-col justify-between">
            <div>
               <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                  <Activity className="w-5 h-5 text-red-400" /> Noise and SNR
               </h3>
               <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                 Assuming a monoenergetic beam, the number of detected photons <Latex formula="N_{ij}" /> follows a Poisson distribution. The variance of the reconstructed image depends on the number of projections <Latex formula="M" />, the photons per detector <Latex formula="N" />, and the detector spacing <Latex formula="T" />.
               </p>
               <div className="bg-slate-950 border border-slate-800 p-3 rounded text-center mb-4">
                  <Latex formula="\sigma_\mu^2 \approx \frac{2\pi^2}{3} \rho_0^3 \frac{1}{M} \frac{1}{N/T}" displayMode />
               </div>
            </div>
            
            <svg viewBox="0 0 250 150" className="w-full h-32 mb-4 bg-slate-950/50 rounded-lg p-2 mt-auto">
               <style>
                 {`
                   @keyframes heavyFlicker {
                     0%, 100% { opacity: 0.3; }
                     50% { opacity: 0.9; }
                   }
                   @keyframes lightFlicker {
                     0%, 100% { opacity: 0.7; }
                     50% { opacity: 0.9; }
                   }
                 `}
               </style>
               {/* Left: Narrow Detector (High Res, High Noise) */}
               <g transform="translate(30, 10)">
                  <text x="30" y="0" textAnchor="middle" className="fill-blue-400 text-[8px] font-bold">Narrow Detectors</text>
                  
                  {/* Object Profile */}
                  <path d="M 0,20 L 20,20 L 20,10 L 40,10 L 40,20 L 60,20" className="fill-none stroke-purple-400 stroke-1 stroke-dashed" />
                  
                  {/* Rays */}
                  <path d="M 10,20 L 10,50 M 30,10 L 30,50 M 50,20 L 50,50" className="stroke-yellow-400/30 stroke-1" />
                  
                  {/* Narrow Detectors */}
                  <rect x="0" y="50" width="12" height="6" className="fill-slate-600 stroke-slate-400 stroke-[0.5]" />
                  <rect x="12" y="50" width="12" height="6" className="fill-slate-600 stroke-slate-400 stroke-[0.5]" />
                  <rect x="24" y="50" width="12" height="6" className="fill-slate-600 stroke-slate-400 stroke-[0.5]" />
                  <rect x="36" y="50" width="12" height="6" className="fill-slate-600 stroke-slate-400 stroke-[0.5]" />
                  <rect x="48" y="50" width="12" height="6" className="fill-slate-600 stroke-slate-400 stroke-[0.5]" />
                  <text x="65" y="55" className="fill-slate-400 text-[5px]">Low N</text>
                  
                  {/* Output Signal (Noisy but sharp edges) */}
                  <path d="M 0,80 L 12,80 L 12,65 L 24,65 L 24,60 L 36,60 L 36,80 L 48,80 L 48,85 L 60,85" className="fill-none stroke-red-400 stroke-1" style={{ animation: 'heavyFlicker 0.2s infinite' }} />
                  
                  <text x="30" y="100" textAnchor="middle" className="fill-emerald-400 text-[6px]">High Spatial Resolution</text>
                  <text x="30" y="110" textAnchor="middle" className="fill-red-400 text-[6px]">High Noise (Low SNR)</text>
               </g>

               {/* Divider */}
               <line x1="125" y1="10" x2="125" y2="130" className="stroke-slate-700 stroke-1 stroke-dashed" />

               {/* Right: Wide Detector (Low Res, Low Noise) */}
               <g transform="translate(150, 10)">
                  <text x="30" y="0" textAnchor="middle" className="fill-blue-400 text-[8px] font-bold">Wide Detectors</text>
                  
                  {/* Object Profile */}
                  <path d="M 0,20 L 20,20 L 20,10 L 40,10 L 40,20 L 60,20" className="fill-none stroke-purple-400 stroke-1 stroke-dashed" />
                  
                  {/* Rays */}
                  <path d="M 10,20 L 10,50 M 30,10 L 30,50 M 50,20 L 50,50" className="stroke-yellow-400/30 stroke-1" />
                  
                  {/* Wide Detectors */}
                  <rect x="0" y="50" width="30" height="6" className="fill-slate-600 stroke-slate-400 stroke-[0.5]" />
                  <rect x="30" y="50" width="30" height="6" className="fill-slate-600 stroke-slate-400 stroke-[0.5]" />
                  <text x="65" y="55" className="fill-slate-400 text-[5px]">High N</text>
                  
                  {/* Output Signal (Smooth but blurred edges) */}
                  <path d="M 0,75 L 30,75 L 30,68 L 60,68" className="fill-none stroke-emerald-400 stroke-[1.5]" style={{ animation: 'lightFlicker 0.5s infinite' }} />
                  
                  <text x="30" y="100" textAnchor="middle" className="fill-red-400 text-[6px]">Low Spatial Resolution (Blurred)</text>
                  <text x="30" y="110" textAnchor="middle" className="fill-emerald-400 text-[6px]">Low Noise (High SNR)</text>
               </g>
            </svg>

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

      {/* Partial Volume Effect */}
      <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden mt-8">
         <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <Cuboid className="w-5 h-5 text-indigo-400" /> Partial Volume Effect
         </h3>
         <div className="grid md:grid-cols-[1.5fr_1fr] gap-6 items-center">
            <div>
               <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                 A CT image is composed of 3D pixels called <strong>voxels</strong>. The thickness of the voxel depends on the physical slice thickness of the x-ray beam. 
               </p>
               <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                 If a single voxel contains multiple tissue types (e.g., half dense bone, half water), the resulting Hounsfield Unit assigned to that pixel will be a <strong>weighted average</strong> of all tissues inside it. This blurs sharp edges and can completely obscure small lesions.
               </p>
               <div className="bg-slate-950 border border-slate-800 p-3 rounded text-center">
                  <span className="text-slate-300 text-xs">Voxel Volume = Pixel Area × Slice Thickness</span>
               </div>
            </div>
            <svg viewBox="0 0 200 120" className="w-full h-32 bg-slate-950/50 rounded-lg p-2 border border-slate-700 shadow-inner">
               {/* Grid / Voxel */}
               <rect x="50" y="20" width="100" height="80" className="fill-slate-800 stroke-slate-500 stroke-2" />
               
               {/* Bone partial */}
               <path d="M 50 100 L 150 100 L 150 60 L 50 60 Z" className="fill-white/80" />
               <text x="100" y="85" textAnchor="middle" className="fill-slate-900 text-[10px] font-bold">Bone (+1000 HU)</text>
               
               {/* Water partial */}
               <path d="M 50 20 L 150 20 L 150 60 L 50 60 Z" className="fill-blue-500/50" />
               <text x="100" y="45" textAnchor="middle" className="fill-white text-[10px] font-bold">Water (0 HU)</text>
               
               {/* Result Arrow */}
               <path d="M 160 60 L 175 60" className="stroke-slate-400 stroke-2" />
               <polygon points="175,60 170,57 170,63" className="fill-slate-400" />
               
               {/* Resulting Displayed Pixel */}
               <rect x="180" y="45" width="25" height="30" className="fill-slate-400 stroke-white stroke-1" />
               <text x="192.5" y="62" textAnchor="middle" className="fill-slate-900 text-[8px] font-bold">+500</text>
            </svg>
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
               <circle cx="75" cy="80" r="35" className="fill-none stroke-slate-950 stroke-[10]">
                 <animate attributeName="opacity" values="0; 0.8; 0" dur="3s" repeatCount="indefinite" />
               </circle>
               <path d="M 75 40 L 75 25" className="stroke-red-400 stroke-1" />
               <polygon points="75,40 73,35 77,35" className="fill-red-400" />
               <text x="75" y="22" textAnchor="middle" className="fill-red-400 text-[8px]">Pulsating Dark Halo</text>
            </svg>
            
            <svg viewBox="0 0 150 150" className="w-full h-32 bg-slate-950/50 rounded-lg p-2 border border-slate-700">
               {/* Ring Artifact */}
               <text x="75" y="15" textAnchor="middle" className="fill-red-400 text-[10px] font-bold">Ring Artifact (3rd Gen)</text>
               <circle cx="75" cy="80" r="40" className="fill-slate-600" /> {/* Brain */}
               <circle cx="75" cy="80" r="20" className="fill-none stroke-white stroke-[2]" strokeDasharray="126" strokeDashoffset="126">
                 <animate attributeName="stroke-dashoffset" from="126" to="0" dur="2s" repeatCount="indefinite" />
               </circle>
               <g>
                 <animateTransform attributeName="transform" type="rotate" from="0 75 80" to="360 75 80" dur="2s" repeatCount="indefinite" />
                 <path d="M 95 80 L 125 80" className="stroke-red-400 stroke-1 stroke-dashed" />
                 <polygon points="95,80 100,78 100,82" className="fill-red-400" />
                 <text x="135" y="83" textAnchor="middle" className="fill-red-400 text-[8px]" transform="rotate(-90 135 83)">Bad Detector</text>
               </g>
            </svg>
            
            <svg viewBox="0 0 150 150" className="w-full h-32 bg-slate-950/50 rounded-lg p-2 border border-slate-700">
               {/* Motion Artifact */}
               <text x="75" y="15" textAnchor="middle" className="fill-red-400 text-[10px] font-bold">Motion Artifact</text>
               <g>
                 <animateTransform attributeName="transform" type="translate" values="-5 0; 5 0; -5 0" dur="0.2s" repeatCount="indefinite" />
                 <circle cx="75" cy="80" r="20" className="fill-white" />
               </g>
               {/* Streaks */}
               <g>
                 <animate attributeName="opacity" values="0; 1; 0" dur="0.2s" repeatCount="indefinite" />
                 <line x1="55" y1="80" x2="10" y2="80" className="stroke-white stroke-2 opacity-50" />
                 <line x1="95" y1="80" x2="140" y2="80" className="stroke-white stroke-2 opacity-50" />
                 <line x1="75" y1="60" x2="75" y2="20" className="stroke-white stroke-2 opacity-50" />
                 <line x1="75" y1="100" x2="75" y2="140" className="stroke-white stroke-2 opacity-50" />
                 <line x1="60" y1="65" x2="30" y2="35" className="stroke-white stroke-1 opacity-40" />
                 <line x1="90" y1="95" x2="120" y2="125" className="stroke-white stroke-1 opacity-40" />
               </g>
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
