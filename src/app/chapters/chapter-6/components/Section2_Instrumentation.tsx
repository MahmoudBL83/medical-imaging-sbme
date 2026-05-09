import React from 'react';
import { History, Target, Zap, Server, Shield } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section2_Instrumentation() {
  return (
    <section id="instrumentation" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-purple-400">Section 6.2</span>
        <h2 className="text-3xl font-bold text-white mt-2">CT Instrumentation & Generations</h2>
        <p className="text-slate-400 mt-4 leading-relaxed mb-8">
          The fundamental measurement required by a CT scanner is the x-ray attenuation along a line between the source and a detector. Seven generations of scanner designs have been developed to acquire this data.
        </p>

        <svg viewBox="0 0 400 150" className="w-full max-w-2xl mx-auto h-48 mb-8 bg-slate-900 border border-slate-700 rounded-lg p-2 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
           {/* 3rd Generation (Rotate-Rotate) */}
           <text x="100" y="20" textAnchor="middle" className="fill-purple-400 text-[10px] font-bold">3rd Gen (Rotate-Rotate)</text>
           
           <g transform="translate(100, 90)">
              {/* Patient */}
              <circle cx="0" cy="0" r="15" className="fill-purple-900/40 stroke-purple-700 stroke-1" />
              
              {/* Rotating Source and Detector */}
              <g>
                 <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="4s" repeatCount="indefinite" />
                 
                 {/* X-ray tube */}
                 <circle cx="0" cy="-45" r="5" className="fill-yellow-400" />
                 
                 {/* Fan beam */}
                 <path d="M 0,-45 L -25,35 L 25,35 Z" className="fill-yellow-400/20 stroke-yellow-400 stroke-1 stroke-dashed" />
                 
                 {/* Detector Arc */}
                 <path d="M -30,40 Q 0,50, 30,40" className="fill-none stroke-emerald-400 stroke-4" />
              </g>
              
              {/* Rotation arrows (Fixed) */}
              <path d="M -50,0 A 50 50 0 0 1 -35,-35" className="fill-none stroke-slate-400 stroke-1" />
              <polygon points="-35,-35 -38,-30 -32,-32" className="fill-slate-400" />
              
              <path d="M 50,0 A 50 50 0 0 1 35,35" className="fill-none stroke-slate-400 stroke-1" />
              <polygon points="35,35 38,30 32,32" className="fill-slate-400" />
           </g>

           {/* Divider */}
           <line x1="200" y1="10" x2="200" y2="140" className="stroke-slate-700 stroke-1 stroke-dashed" />

           {/* 4th Generation (Rotate-Fixed) */}
           <text x="300" y="20" textAnchor="middle" className="fill-purple-400 text-[10px] font-bold">4th Gen (Rotate-Fixed)</text>
           
           <g transform="translate(300, 90)">
              {/* Fixed Detector Ring */}
              <circle cx="0" cy="0" r="45" className="fill-none stroke-emerald-400 stroke-4 stroke-dasharray-[2,1]" />
              
              {/* Patient */}
              <circle cx="0" cy="0" r="15" className="fill-purple-900/40 stroke-purple-700 stroke-1" />
              
              {/* Rotating Source inside fixed detector */}
              <g>
                 <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="3s" repeatCount="indefinite" />
                 
                 {/* X-ray tube */}
                 <circle cx="0" cy="-40" r="5" className="fill-yellow-400" />
                 
                 {/* Fan beam (wide) */}
                 <path d="M 0,-40 L -35,25 A 45 45 0 0 0 35,25 Z" className="fill-yellow-400/20 stroke-yellow-400 stroke-1 stroke-dashed" />
              </g>
              
              {/* Tube Rotation arrow */}
              <path d="M -20,-45 A 50 50 0 0 1 20,-45" className="fill-none stroke-yellow-400/50 stroke-1" />
              <polygon points="20,-45 15,-43 17,-48" className="fill-yellow-400/50" />
           </g>
        </svg>
      </header>

      {/* Generations Table */}
      <div className="claude-panel overflow-x-auto p-4 bg-slate-900 border border-slate-700 rounded-xl mb-8">
        <table className="w-full text-left text-sm text-slate-300">
           <thead className="bg-slate-950 text-slate-200 border-b border-slate-800">
              <tr>
                 <th className="p-3 font-bold">Gen</th>
                 <th className="p-3 font-bold">Beam & Detectors</th>
                 <th className="p-3 font-bold">Motion</th>
                 <th className="p-3 font-bold">Pros / Cons</th>
              </tr>
           </thead>
           <tbody className="divide-y divide-slate-800">
              <tr className="hover:bg-slate-800/50">
                 <td className="p-3 font-bold text-white">1G</td>
                 <td className="p-3">Pencil beam, Single detector</td>
                 <td className="p-3">Linear translate, then rotate</td>
                 <td className="p-3 text-xs">Very slow / Great scatter rejection</td>
              </tr>
              <tr className="hover:bg-slate-800/50">
                 <td className="p-3 font-bold text-white">2G</td>
                 <td className="p-3">Narrow fan beam, Multiple detectors</td>
                 <td className="p-3">Linear translate, then rotate</td>
                 <td className="p-3 text-xs">Faster than 1G / Detectors must be collimated</td>
              </tr>
              <tr className="hover:bg-slate-800/50 border-l-2 border-l-purple-500">
                 <td className="p-3 font-bold text-purple-400">3G</td>
                 <td className="p-3">Wide fan beam, Large detector array</td>
                 <td className="p-3">Source & detectors rotate together</td>
                 <td className="p-3 text-xs text-purple-200">Continuous rotation (slip ring) / Sensitive to ring artifacts</td>
              </tr>
              <tr className="hover:bg-slate-800/50 border-l-2 border-l-purple-500">
                 <td className="p-3 font-bold text-purple-400">4G</td>
                 <td className="p-3">Wide fan beam, Full stationary ring of detectors</td>
                 <td className="p-3">Source rotates, detectors fixed</td>
                 <td className="p-3 text-xs text-purple-200">Higher efficiency / High scatter since detectors aren't collimated</td>
              </tr>
              <tr className="hover:bg-slate-800/50">
                 <td className="p-3 font-bold text-white">5G</td>
                 <td className="p-3">Electron Beam CT (EBCT), No x-ray tube</td>
                 <td className="p-3">No moving parts! Electromagnetic steering</td>
                 <td className="p-3 text-xs">Extremely fast (cardiac) / Extremely expensive</td>
              </tr>
              <tr className="hover:bg-slate-800/50 border-l-2 border-l-emerald-500 bg-emerald-950/20">
                 <td className="p-3 font-bold text-emerald-400">6G</td>
                 <td className="p-3">Helical CT (Based on 3G/4G)</td>
                 <td className="p-3">Continuous rotation + Patient table moves linearly</td>
                 <td className="p-3 text-xs text-emerald-200">Rapid 3D volumes. 30 sec full torso scan.</td>
              </tr>
              <tr className="hover:bg-slate-800/50 border-l-2 border-l-emerald-500 bg-emerald-950/20">
                 <td className="p-3 font-bold text-emerald-400">7G</td>
                 <td className="p-3">Multiple-Detector Row CT (MDCT) / Cone beam</td>
                 <td className="p-3">Helical motion</td>
                 <td className="p-3 text-xs text-emerald-200">Simultaneous thick slab acquisition. Current state-of-the-art.</td>
              </tr>
           </tbody>
        </table>
      </div>

      {/* Helical CT / Pitch */}
      <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl mb-8">
         <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <Server className="w-5 h-5 text-emerald-400" /> 6th Gen: Helical (Spiral) CT & Pitch
         </h3>
         <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 items-center">
            <div>
               <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                 Helical CT changed the game by continuously rotating the gantry while the patient table translates at a constant speed. This creates a spiral (helical) data acquisition path, allowing for extremely rapid 3D volume acquisition.
               </p>
               <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg">
                  <h4 className="text-emerald-400 font-bold mb-2">Pitch (<Latex formula="p" />)</h4>
                  <p className="text-xs text-slate-400 mb-2">
                    Pitch describes how tightly coiled the spiral is. It is the ratio of table travel per rotation to the x-ray beam width.
                  </p>
                  <div className="text-center text-slate-300 my-3">
                    <Latex formula="\text{Pitch} = \frac{\Delta d}{W}" displayMode />
                  </div>
                  <ul className="text-xs text-slate-400 mt-2 space-y-1">
                     <li><strong className="text-slate-300">p = 1</strong>: Contiguous spirals (perfect coverage)</li>
                     <li><strong className="text-slate-300">p &lt; 1</strong>: Overlapping spirals (higher dose, better spatial resolution)</li>
                     <li><strong className="text-slate-300">p &gt; 1</strong>: Gaps between spirals (faster scan, lower dose, potential artifacting)</li>
                  </ul>
               </div>
            </div>

            <svg viewBox="0 0 200 150" className="w-full h-40 bg-slate-950/50 rounded-lg p-2 border border-slate-700 shadow-inner">
               {/* 3D Cylinder / Patient */}
               <path d="M 50,40 L 150,40 A 20 40 0 0 1 150 120 L 50,120 A 20 40 0 0 1 50 40 Z" className="fill-slate-800/30 stroke-slate-500 stroke-1" />
               <ellipse cx="50" cy="80" rx="20" ry="40" className="fill-slate-800/50 stroke-slate-500 stroke-1" />
               <text x="100" y="83" textAnchor="middle" className="fill-slate-500 text-[8px] font-bold">Patient Translated</text>
               
               {/* Arrow indicating table movement */}
               <path d="M 50,135 L 150,135" className="stroke-slate-400 stroke-1 stroke-dashed" />
               <polygon points="150,135 145,132 145,138" className="fill-slate-400" />
               <text x="100" y="145" textAnchor="middle" className="fill-slate-400 text-[6px]">Table Feed (Δd)</text>

               {/* Helical Path */}
               <g className="stroke-emerald-400 stroke-[1.5] fill-none">
                 {/* Back spirals (dimmer) */}
                 <path d="M 60,40 Q 70,40 75,80 T 90,120" className="stroke-emerald-400/30" />
                 <path d="M 100,40 Q 110,40 115,80 T 130,120" className="stroke-emerald-400/30" />
                 
                 {/* Front spirals */}
                 <path d="M 50,120 Q 40,120 45,80 T 60,40" />
                 <path d="M 90,120 Q 80,120 85,80 T 100,40" />
                 <path d="M 130,120 Q 120,120 125,80 T 140,40" />
               </g>

               {/* Moving Tube along path */}
               <g>
                 <animateMotion path="M 50,120 Q 40,120 45,80 T 60,40 Q 70,40 75,80 T 90,120 Q 80,120 85,80 T 100,40 Q 110,40 115,80 T 130,120 Q 120,120 125,80 T 140,40" dur="5s" repeatCount="indefinite" />
                 <circle cx="0" cy="0" r="4" className="fill-yellow-400" />
               </g>
            </svg>
         </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
         {/* Hardware Innovations */}
         <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl flex flex-col justify-between">
            <div>
               <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-purple-400" /> Key Hardware Innovations
               </h3>
               <ul className="text-sm text-slate-300 space-y-4 mb-4">
                 <li>
                   <strong>Slip Rings:</strong> Replaced heavy cables, allowing continuous 360-degree rotation of the heavy gantry without needing to "rewind." Power is transferred via brushes on grooved cylinders, and data via optical links.
                 </li>
                 <li>
                   <strong>Solid-State Detectors:</strong> Scintillation crystals (e.g., cadmium tungstate, CsI) coupled with photodiodes. They have replaced old xenon gas chambers due to much higher detection efficiency.
                 </li>
               </ul>
            </div>
            
            <svg viewBox="0 0 200 120" className="w-full h-28 bg-slate-950/50 rounded-lg p-2 mt-auto">
               <style>
                 {`
                   @keyframes spark {
                     0%, 100% { opacity: 0; }
                     10%, 30% { opacity: 1; }
                     20% { opacity: 0.5; }
                   }
                 `}
               </style>
               {/* Fixed Brush Assembly */}
               <rect x="20" y="50" width="30" height="20" rx="2" className="fill-slate-700" />
               <rect x="50" y="55" width="10" height="10" className="fill-slate-500" />
               <text x="35" y="45" textAnchor="middle" className="fill-slate-400 text-[6px]">Stationary Brush</text>
               
               {/* Rotating Slip Ring */}
               <g transform="translate(140, 60)">
                  <ellipse cx="0" cy="0" rx="20" ry="50" className="fill-slate-800 stroke-slate-600 stroke-2" />
                  
                  {/* Conductive grooves */}
                  <ellipse cx="-5" cy="0" rx="20" ry="50" className="fill-none stroke-yellow-500/50 stroke-2" />
                  <ellipse cx="-10" cy="0" rx="20" ry="50" className="fill-none stroke-emerald-500/50 stroke-2" />
                  
                  <g>
                     <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="2s" repeatCount="indefinite" />
                     {/* Rotating connection point */}
                     <circle cx="-10" cy="50" r="3" className="fill-slate-400" />
                     <text x="0" y="65" textAnchor="middle" className="fill-slate-300 text-[6px]">Rotating Gantry</text>
                  </g>
               </g>
               
               {/* Contact Point / Spark */}
               <circle cx="115" cy="60" r="2" className="fill-yellow-400" style={{ animation: 'spark 0.5s infinite' }} />
               <path d="M 60,60 L 115,60" className="stroke-yellow-400 stroke-1" strokeDasharray="2 2" />
               <text x="85" y="55" textAnchor="middle" className="fill-yellow-400 text-[6px]">Continuous Power/Data</text>
            </svg>
         </div>

         {/* Dual Energy CT */}
         <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl flex flex-col justify-between">
            <div>
               <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-pink-400" /> Dual-Energy CT
               </h3>
               <p className="text-sm text-slate-300 mb-4">
                 Because linear attenuation depends on energy, scanning the patient at two different effective energies (e.g., 80 kVp and 140 kVp) provides vastly more information about tissue composition.
               </p>
               <p className="text-sm text-slate-300 mb-4">
                 Modern scanners use <strong>Dual Source CT</strong> (two separate x-ray tubes offset by 90 degrees) to acquire this data simultaneously without motion artifacts.
               </p>
            </div>
            
            <svg viewBox="0 0 200 120" className="w-full h-28 bg-slate-950/50 rounded-lg p-2 mt-auto">
               <g transform="translate(100, 60)">
                  {/* Patient */}
                  <circle cx="0" cy="0" r="15" className="fill-purple-900/40 stroke-purple-700 stroke-1" />
                  
                  {/* Rotating Dual Source System */}
                  <g>
                     <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="4s" repeatCount="indefinite" />
                     
                     {/* Tube A (Low Energy - Red) */}
                     <circle cx="0" cy="-40" r="4" className="fill-red-400" />
                     <path d="M 0,-40 L -25,35 L 25,35 Z" className="fill-red-400/20 stroke-red-400 stroke-1 stroke-dashed" />
                     <path d="M -30,40 Q 0,45 30,40" className="fill-none stroke-red-400 stroke-2" />
                     <text x="0" y="-48" textAnchor="middle" className="fill-red-400 text-[6px] font-bold">80 kVp</text>
                     
                     {/* Tube B (High Energy - Blue) Offset 90 deg */}
                     <circle cx="40" cy="0" r="4" className="fill-blue-400" />
                     <path d="M 40,0 L -35,-25 L -35,25 Z" className="fill-blue-400/20 stroke-blue-400 stroke-1 stroke-dashed" />
                     <path d="M -40,-30 Q -45,0 -40,30" className="fill-none stroke-blue-400 stroke-2" />
                     <text x="50" y="0" textAnchor="middle" className="fill-blue-400 text-[6px] font-bold" transform="rotate(90 50 0)">140 kVp</text>
                  </g>
               </g>
            </svg>
         </div>
      </div>
    </section>
  );
}
