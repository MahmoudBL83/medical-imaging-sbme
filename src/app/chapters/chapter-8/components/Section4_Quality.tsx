import React from 'react';
import { EyeOff, AlertTriangle } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section4_Quality() {
  return (
    <section id="quality" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-orange-400">Section 8.4</span>
        <h2 className="text-3xl font-bold text-white mt-2">Image Quality & Trade-offs</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Nuclear medicine suffers from notoriously poor spatial resolution and high noise compared to CT or MRI. Designing an Anger camera involves fighting a brutal trade-off between sensitivity and resolution.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
         {/* Resolution */}
         <div className="claude-surface p-6 border-l-4 border-l-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
               <EyeOff className="w-5 h-5 text-orange-400" /> System Resolution
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Overall system resolution <Latex formula="R_{sys}" /> is the combination of intrinsic resolution <Latex formula="R_{int}" /> (from the crystal/PMTs) and collimator resolution <Latex formula="R_{col}" />:
            </p>
            <div className="bg-slate-900 p-3 rounded border border-slate-800 text-center mb-4">
               <Latex formula="R_{sys} = \sqrt{R_{int}^2 + R_{col}^2}" displayMode />
            </div>
            
            <h4 className="text-orange-400 font-bold mb-2 mt-6">Depth-Dependent Resolution</h4>
            <div className="grid md:grid-cols-2 gap-4 items-center mb-4">
               <p className="text-sm text-slate-300 leading-relaxed">
                 Collimator resolution is the dominant source of blur. Crucially, <strong>spatial resolution degrades linearly with distance from the collimator</strong>. A source close to the camera projects a small, sharp spot. A source far away projects a wide, blurred spot because the lead septa accept rays over a wider solid angle.
               </p>
               <svg viewBox="0 0 200 120" className="w-full h-32 bg-slate-900 border border-slate-700 rounded p-2 shadow-inner">
                  {/* Crystal/Detector */}
                  <rect x="20" y="20" width="160" height="10" className="fill-blue-500/20 stroke-blue-400 stroke-1" />
                  <text x="100" y="15" textAnchor="middle" className="fill-blue-400 text-[8px]">Detector</text>
                  
                  {/* Collimator */}
                  <rect x="20" y="30" width="160" height="15" className="fill-slate-800" />
                  <g className="stroke-slate-950 stroke-[3]">
                     <line x1="30" y1="30" x2="30" y2="45" />
                     <line x1="50" y1="30" x2="50" y2="45" />
                     <line x1="70" y1="30" x2="70" y2="45" />
                     <line x1="90" y1="30" x2="90" y2="45" />
                     <line x1="110" y1="30" x2="110" y2="45" />
                     <line x1="130" y1="30" x2="130" y2="45" />
                     <line x1="150" y1="30" x2="150" y2="45" />
                     <line x1="170" y1="30" x2="170" y2="45" />
                  </g>
                  
                  {/* Source Close (Sharp) */}
                  <circle cx="60" cy="55" r="3" className="fill-red-400" />
                  <text x="60" y="65" textAnchor="middle" className="fill-red-400 text-[6px]">Close</text>
                  <path d="M 60,55 L 52,30 L 68,30 Z" className="fill-red-400/30 stroke-red-400 stroke-1 stroke-dashed">
                     <animate attributeName="opacity" values="0.3; 0.8; 0.3" dur="2s" repeatCount="indefinite" />
                  </path>
                  {/* Blurry Spot on Detector */}
                  <rect x="52" y="20" width="16" height="10" className="fill-red-500/50" />
                  <text x="60" y="27" textAnchor="middle" className="fill-white text-[6px] font-bold">Sharp</text>
                  
                  {/* Source Far (Blurry) */}
                  <circle cx="140" cy="100" r="3" className="fill-orange-400" />
                  <text x="140" y="110" textAnchor="middle" className="fill-orange-400 text-[6px]">Far</text>
                  <path d="M 140,100 L 115,30 L 165,30 Z" className="fill-orange-400/30 stroke-orange-400 stroke-1 stroke-dashed">
                     <animate attributeName="opacity" values="0.3; 0.8; 0.3" dur="2s" repeatCount="indefinite" />
                  </path>
                  {/* Blurry Spot on Detector */}
                  <rect x="115" y="20" width="50" height="10" className="fill-orange-500/50" />
                  <text x="140" y="27" textAnchor="middle" className="fill-white text-[6px] font-bold">Blurry</text>
               </svg>
            </div>
            
            <p className="text-xs text-slate-400">
               <em>Clinical Tip: Always position the patient as close to the camera face as physically possible!</em>
            </p>
         </div>

         {/* Sensitivity and Noise */}
         <div className="claude-surface p-6 border-l-4 border-l-yellow-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
               <AlertTriangle className="w-5 h-5 text-yellow-400" /> Noise and Sensitivity
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Nuclear imaging is extremely <strong>photon-starved</strong>. With so few photons reaching the detector, the image is dominated by Poisson quantum noise.
            </p>
            <p className="text-sm text-slate-300 mb-4">
              To decrease noise, we must increase the number of recorded counts (<Latex formula="N" />). SNR is proportional to <Latex formula="\sqrt{N}" />.
            </p>
            <p className="text-xs text-slate-400">
              If we want to double the resolution by making collimator holes smaller, sensitivity plummets, requiring unacceptably long scan times or dangerous patient doses to recover the SNR.
            </p>
         </div>
      </div>
    </section>
  );
}
