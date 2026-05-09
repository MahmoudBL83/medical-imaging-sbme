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
         <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden flex flex-col justify-between">
            <div>
               <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                  <Activity className="w-5 h-5 text-red-400" /> Quantum SNR
               </h3>
               <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                 Because photon detection follows Poisson statistics, the variance in the number of background photons <Latex formula="N_b" /> is proportional to <Latex formula="N_b" /> itself. For a structure with local contrast <Latex formula="C" />, the ideal SNR is:
               </p>
               <div className="bg-slate-950 border border-slate-800 p-3 rounded text-center mb-4">
                  <Latex formula="SNR = C \sqrt{N_b} = C \sqrt{\Phi A R t \eta}" displayMode />
               </div>
            </div>
            
            <svg viewBox="0 0 200 120" className="w-full h-28 mb-4 bg-slate-950/50 rounded-lg p-2 mt-auto">
               <style>
                 {`
                   @keyframes mottleFlicker {
                     0%, 100% { opacity: 0.8; }
                     50% { opacity: 0.3; }
                   }
                   @keyframes smoothFlicker {
                     0%, 100% { opacity: 0.9; }
                     50% { opacity: 0.7; }
                   }
                 `}
               </style>
               {/* Low Dose / Low SNR */}
               <text x="50" y="15" textAnchor="middle" className="fill-red-400 text-[8px] font-bold">Low Dose (Low N_b)</text>
               <rect x="20" y="25" width="60" height="60" className="fill-slate-800" />
               <circle cx="50" cy="55" r="15" className="fill-slate-700" /> {/* Target object */}
               {/* Simulate noisy pixels */}
               <g style={{ animation: 'mottleFlicker 0.2s infinite alternate' }}>
                  {Array.from({ length: 60 }).map((_, i) => (
                     <rect key={`low-${i}`} x={20 + Math.random() * 58} y={25 + Math.random() * 58} width="2" height="2" fill="#fff" opacity={Math.random() * 0.5} />
                  ))}
               </g>
               <text x="50" y="100" textAnchor="middle" className="fill-slate-400 text-[6px]">High Quantum Mottle</text>
               <text x="50" y="110" textAnchor="middle" className="fill-red-400 text-[6px] font-bold">Low SNR</text>
               
               {/* Divider */}
               <line x1="100" y1="20" x2="100" y2="100" className="stroke-slate-700 stroke-1 stroke-dashed" />
               
               {/* High Dose / High SNR */}
               <text x="150" y="15" textAnchor="middle" className="fill-emerald-400 text-[8px] font-bold">High Dose (High N_b)</text>
               <rect x="120" y="25" width="60" height="60" className="fill-slate-800" />
               <circle cx="150" cy="55" r="15" className="fill-slate-600" /> {/* Target object - clearer */}
               {/* Simulate smoother pixels (less relative noise) */}
               <g style={{ animation: 'smoothFlicker 0.5s infinite alternate' }}>
                  {Array.from({ length: 150 }).map((_, i) => (
                     <rect key={`high-${i}`} x={120 + Math.random() * 58} y={25 + Math.random() * 58} width="1.5" height="1.5" fill="#fff" opacity={Math.random() * 0.2} />
                  ))}
               </g>
               <text x="150" y="100" textAnchor="middle" className="fill-slate-400 text-[6px]">Smooth Image</text>
               <text x="150" y="110" textAnchor="middle" className="fill-emerald-400 text-[6px] font-bold">High SNR</text>
            </svg>

            <div className="text-[10px] text-slate-400 grid grid-cols-2 gap-x-2 gap-y-1 bg-slate-900 p-2 rounded">
               <p><strong><Latex formula="\Phi" /></strong>: Photons/Roentgen/cm²</p>
               <p><strong><Latex formula="A" /></strong>: Pixel area</p>
               <p><strong><Latex formula="R" /></strong>: Radiation Dose</p>
               <p><strong><Latex formula="t" /></strong>: Transmission</p>
               <p className="col-span-2"><strong><Latex formula="\eta" /></strong>: Detector efficiency</p>
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

      <div className="claude-surface p-8 mt-8 border-l-4 border-l-red-500">
         <h3 className="text-xl font-bold text-white mb-4">The Dual Penalty of Compton Scattering</h3>
         <p className="text-sm text-slate-300 mb-6">
           Scattered photons (<Latex formula="I_s" />) hit the detector in random locations, adding a uniform fog across both the target and background. This ruins both Contrast (<Latex formula="C" />) and SNR:
         </p>
         
         <svg viewBox="0 0 400 120" className="w-full max-w-2xl mx-auto h-40 mb-8 bg-slate-900 border border-slate-700 rounded-lg p-4 shadow-inner">
            <style>
              {`
                @keyframes noiseFlicker {
                  0% { opacity: 0.2; transform: translateY(0px); }
                  25% { opacity: 0.4; transform: translateY(-2px); }
                  50% { opacity: 0.3; transform: translateY(1px); }
                  75% { opacity: 0.5; transform: translateY(-1px); }
                  100% { opacity: 0.2; transform: translateY(0px); }
                }
                @keyframes signalPulse {
                  0%, 100% { stroke-width: 2; }
                  50% { stroke-width: 2.5; }
                }
              `}
            </style>
            
            {/* Ideal Signal (Left) */}
            <text x="100" y="20" textAnchor="middle" className="fill-white text-[12px] font-bold">Without Scatter</text>
            
            {/* Axis */}
            <line x1="20" y1="90" x2="180" y2="90" className="stroke-slate-500 stroke-1" />
            <text x="10" y="50" transform="rotate(-90 10 50)" className="fill-slate-400 text-[8px]">Intensity</text>
            
            {/* Background intensity */}
            <line x1="20" y1="80" x2="70" y2="80" className="stroke-emerald-400" style={{ animation: 'signalPulse 2s infinite' }} />
            <line x1="130" y1="80" x2="180" y2="80" className="stroke-emerald-400" style={{ animation: 'signalPulse 2s infinite' }} />
            
            {/* Target pulse */}
            <line x1="70" y1="80" x2="70" y2="40" className="stroke-emerald-400" style={{ animation: 'signalPulse 2s infinite' }} />
            <line x1="70" y1="40" x2="130" y2="40" className="stroke-emerald-400" style={{ animation: 'signalPulse 2s infinite' }} />
            <line x1="130" y1="40" x2="130" y2="80" className="stroke-emerald-400" style={{ animation: 'signalPulse 2s infinite' }} />
            
            <text x="100" y="65" textAnchor="middle" className="fill-emerald-400 text-[10px] font-bold">High Contrast</text>
            
            
            {/* Divider */}
            <line x1="200" y1="10" x2="200" y2="110" className="stroke-slate-700 stroke-1 stroke-dashed" />
            
            
            {/* With Scatter (Right) */}
            <text x="300" y="20" textAnchor="middle" className="fill-white text-[12px] font-bold">With Scatter Fog</text>
            
            {/* Axis */}
            <line x1="220" y1="90" x2="380" y2="90" className="stroke-slate-500 stroke-1" />
            
            {/* Added scatter fog background (animated noise overlay) */}
            <rect x="220" y="60" width="160" height="30" className="fill-red-900/30" />
            
            {/* Simulated noise particles */}
            <g style={{ animation: 'noiseFlicker 0.4s infinite alternate' }}>
              <circle cx="230" cy="70" r="1" fill="#f87171" opacity="0.8" />
              <circle cx="250" cy="85" r="1.5" fill="#f87171" opacity="0.6" />
              <circle cx="280" cy="65" r="1" fill="#f87171" opacity="0.9" />
              <circle cx="310" cy="80" r="1.2" fill="#f87171" opacity="0.5" />
              <circle cx="350" cy="75" r="1" fill="#f87171" opacity="0.7" />
              <circle cx="370" cy="65" r="1.5" fill="#f87171" opacity="0.8" />
              <circle cx="340" cy="85" r="1" fill="#f87171" opacity="0.6" />
              <circle cx="260" cy="75" r="1.2" fill="#f87171" opacity="0.7" />
            </g>
            <text x="300" y="80" textAnchor="middle" className="fill-red-400 text-[8px]">Scatter Fog (+Is)</text>
            
            {/* Background intensity (shifted up) */}
            <line x1="220" y1="60" x2="270" y2="60" className="stroke-red-400 stroke-2" />
            <line x1="330" y1="60" x2="380" y2="60" className="stroke-red-400 stroke-2" />
            
            {/* Target pulse (same amplitude, higher baseline) */}
            <line x1="270" y1="60" x2="270" y2="20" className="stroke-red-400 stroke-2" />
            <line x1="270" y1="20" x2="330" y2="20" className="stroke-red-400 stroke-2" />
            <line x1="330" y1="20" x2="330" y2="60" className="stroke-red-400 stroke-2" />
            
            {/* Contrast bracket */}
            <path d="M 335,20 L 340,20 L 340,60 L 335,60" className="fill-none stroke-slate-400 stroke-1" />
            <text x="345" y="43" className="fill-slate-300 text-[8px]">Same ΔI</text>
            <text x="300" y="45" textAnchor="middle" className="fill-red-400 text-[10px] font-bold">Low Contrast</text>
         </svg>

         <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
               <h4 className="text-red-400 font-bold text-sm mb-2">1. Contrast Degradation</h4>
               <Latex formula="C' = C \left( \frac{1}{1 + I_s/I_b} \right)" displayMode />
               <p className="text-xs text-slate-400 mt-2">
                 Contrast is reduced by the scatter-to-primary ratio (<Latex formula="I_s/I_b" />). The target signal difference remains the same, but the overall background is much brighter, washing out the image.
               </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
               <h4 className="text-red-400 font-bold text-sm mb-2">2. SNR Degradation</h4>
               <Latex formula="SNR' = SNR \left( \frac{1}{\sqrt{1 + I_s/I_b}} \right)" displayMode />
               <p className="text-xs text-slate-400 mt-2">
                 SNR is reduced by the square root of the scatter penalty, requiring significantly more radiation dose to recover the lost SNR.
               </p>
            </div>
         </div>
      </div>

    </section>
  );
}
