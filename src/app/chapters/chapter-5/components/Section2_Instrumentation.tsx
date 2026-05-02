import React from 'react';
import { Target, Zap, Server, Shield, Camera } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section2_Instrumentation() {
  return (
    <section id="instrumentation" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-yellow-400">Section 5.2</span>
        <h2 className="text-3xl font-bold text-white mt-2">Instrumentation</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          A conventional system consists of an x-ray tube, collimator, patient table, grid, and a large-area detector.
        </p>
      </header>

      {/* X-Ray Tubes */}
      <div className="claude-surface p-8 mb-8 border-l-4 border-l-yellow-500">
         <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-yellow-400" /> 1. X-Ray Tubes
         </h3>
         
         <svg viewBox="0 0 400 150" className="w-full max-w-2xl mx-auto h-48 mb-6 bg-slate-900 border border-slate-700 rounded-lg p-4 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
            {/* Glass Envelope */}
            <path d="M 50,75 C 50,30 100,20 150,20 L 250,20 C 300,20 350,30 350,75 C 350,120 300,130 250,130 L 150,130 C 100,130 50,120 50,75" className="fill-none stroke-slate-500 stroke-2" />
            <text x="200" y="35" textAnchor="middle" className="fill-slate-400 text-[10px]">Vacuum Glass Envelope</text>
            
            {/* Cathode (-) */}
            <rect x="70" y="60" width="30" height="30" rx="2" className="fill-slate-700" />
            <path d="M 95,65 Q 110,75 95,85" className="fill-none stroke-yellow-400 stroke-2" /> {/* Filament */}
            <circle cx="102" cy="75" r="8" className="fill-none stroke-red-500 stroke-1 stroke-dashed" /> {/* Focusing cup */}
            <text x="85" y="105" textAnchor="middle" className="fill-slate-300 text-[10px] font-bold">Cathode (-)</text>
            <text x="85" y="115" textAnchor="middle" className="fill-yellow-400 text-[8px]">Filament</text>
            
            {/* Anode (+) */}
            <rect x="280" y="40" width="20" height="70" className="fill-slate-600" /> {/* Rotor/Stem */}
            <polygon points="260,50 280,50 280,100 240,100" className="fill-purple-800" /> {/* Beveled Target */}
            <text x="290" y="125" textAnchor="middle" className="fill-slate-300 text-[10px] font-bold">Anode (+)</text>
            <text x="290" y="135" textAnchor="middle" className="fill-purple-400 text-[8px]">Tungsten Target</text>
            
            {/* Electron Beam */}
            <path d="M 105,75 L 245,75" className="stroke-blue-400 stroke-2 stroke-dashed" />
            <polygon points="245,75 238,71 238,79" className="fill-blue-400" />
            <text x="175" y="68" textAnchor="middle" className="fill-blue-400 text-[10px] font-bold">High Velocity Electrons</text>
            
            {/* X-Ray Beam Emitted Downwards */}
            <path d="M 250,85 L 230,140" className="stroke-yellow-400 stroke-2" />
            <path d="M 250,85 L 210,135" className="stroke-yellow-400 stroke-2" />
            <path d="M 250,85 L 270,140" className="stroke-yellow-400 stroke-2" />
            <text x="240" y="145" textAnchor="middle" className="fill-yellow-400 text-[10px] font-bold">Useful X-Ray Beam</text>
            
            {/* High Voltage Source */}
            <path d="M 70,75 L 20,75 L 20,10" className="stroke-slate-500 stroke-1" />
            <path d="M 300,75 L 380,75 L 380,10" className="stroke-slate-500 stroke-1" />
            <text x="200" y="10" textAnchor="middle" className="fill-red-400 text-[10px] font-bold">High Voltage (kVp)</text>
         </svg>

         <p className="text-slate-300 text-sm leading-relaxed mb-4">
           A current heats a tungsten filament (cathode) causing thermionic emission of electrons. A high voltage (kVp) accelerates them toward a rotating molybdenum/tungsten anode.
         </p>
         <ul className="space-y-3 text-sm text-slate-400">
           <li>• <strong>mA (Tube Current):</strong> Controls filament heat and the number of electrons (photon quantity).</li>
           <li>• <strong>kVp (Tube Voltage):</strong> Controls electron kinetic energy (photon quality/penetration). Ranges from 30-150 kVp.</li>
           <li>• <strong>mAs:</strong> The product of tube current and exposure time. Determines total exposure.</li>
           <li>• <strong>Rotating Anode:</strong> 99% of energy becomes heat. The anode must rotate (3,200 rpm) to prevent melting.</li>
         </ul>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
         {/* Filtration & Restriction */}
         <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
               <Shield className="w-4 h-4 text-blue-400" /> 2. Filtration & Restriction
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              <strong>Filtration</strong> absorbs low-energy x-rays that would otherwise be absorbed by the patient without reaching the detector. It "hardens" the beam and lowers patient dose (e.g., using Aluminum/Copper).
            </p>
            <p className="text-sm text-slate-300">
              <strong>Restriction (Collimation)</strong> shapes the beam to the exact field of view, minimizing dose and reducing scatter.
            </p>
         </div>

         {/* Contrast Agents */}
         <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
               <Target className="w-4 h-4 text-pink-400" /> 3. Contrast Agents
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Materials introduced to increase differential attenuation. 
            </p>
            <div className="bg-slate-950 p-3 rounded border border-slate-800 text-xs text-slate-400 mb-2">
              <strong>Iodine (<Latex formula="Z=53" />):</strong> Intravascular injection. K-edge = 33.2 keV.<br/>
              <strong>Barium (<Latex formula="Z=56" />):</strong> GI tract ingestion. K-edge = 37.4 keV.
            </div>
            <p className="text-xs text-slate-500 italic">
              Their K-shell binding energies perfectly align with diagnostic x-ray energies to maximize the photoelectric effect.
            </p>
         </div>
      </div>

      {/* Grids and Detectors */}
      <div className="grid lg:grid-cols-2 gap-8">
         <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
               <Server className="w-4 h-4 text-indigo-400" /> 4. Anti-Scatter Grids
            </h3>
            
            <svg viewBox="0 0 200 120" className="w-full h-32 mb-4 bg-slate-950/50 rounded-lg p-2">
               {/* Source */}
               <circle cx="100" cy="10" r="3" className="fill-yellow-400" />
               <text x="110" y="15" className="fill-yellow-400 text-[8px]">X-ray Source</text>
               
               {/* Patient Object */}
               <ellipse cx="100" cy="45" rx="60" ry="15" className="fill-purple-900/40 stroke-purple-700 stroke-1" />
               <text x="100" y="48" textAnchor="middle" className="fill-purple-300 text-[8px]">Patient Tissue</text>
               
               {/* Primary Photons (Straight) */}
               <line x1="100" y1="13" x2="100" y2="85" className="stroke-yellow-400 stroke-1" />
               <line x1="100" y1="13" x2="80" y2="85" className="stroke-yellow-400 stroke-1" />
               <line x1="100" y1="13" x2="120" y2="85" className="stroke-yellow-400 stroke-1" />
               
               {/* Scattering Event */}
               <circle cx="100" cy="45" r="2" className="fill-blue-400" />
               <path d="M 100,45 L 75,85" className="stroke-blue-400 stroke-1 stroke-dashed" />
               <path d="M 100,45 L 125,85" className="stroke-blue-400 stroke-1 stroke-dashed" />
               <text x="125" y="60" className="fill-blue-400 text-[6px]">Scattered</text>
               
               {/* Anti-Scatter Grid (Lead Septa focused to source) */}
               <g className="stroke-slate-500 stroke-2">
                 <line x1="80" y1="85" x2="80" y2="105" />
                 <line x1="90" y1="85" x2="90" y2="105" />
                 <line x1="100" y1="85" x2="100" y2="105" />
                 <line x1="110" y1="85" x2="110" y2="105" />
                 <line x1="120" y1="85" x2="120" y2="105" />
               </g>
               <text x="40" y="98" className="fill-slate-400 text-[8px]">Lead Grid</text>
               
               {/* Primary passes through */}
               <line x1="100" y1="105" x2="100" y2="115" className="stroke-yellow-400 stroke-1" />
               <line x1="80" y1="105" x2="78" y2="115" className="stroke-yellow-400 stroke-1" />
               <line x1="120" y1="105" x2="122" y2="115" className="stroke-yellow-400 stroke-1" />
               
               {/* Detector */}
               <line x1="50" y1="115" x2="150" y2="115" className="stroke-emerald-400 stroke-2" />
            </svg>

            <p className="text-sm text-slate-300 mb-4">
              Scatter creates a random "fog" over the image, destroying contrast. Grids consist of alternating lead strips and radiolucent interspace material focused toward the source.
            </p>
            <Latex formula="\text{Grid Ratio} = \frac{h}{b}" displayMode />
            <p className="text-xs text-slate-400 mt-2">
              They block off-axis scatter but also block some primary photons, necessitating an increase in patient dose (Grid Conversion Factor).
            </p>
         </div>

         <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
               <Camera className="w-4 h-4 text-emerald-400" /> 5. Digital Detectors
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Replacing film-screen systems.
            </p>
            <ul className="text-xs text-slate-400 space-y-2">
               <li>• <strong>Computed Radiography (CR):</strong> Uses Photostimulable Phosphors (PSPs). Electrons get trapped in europium "holes". A red laser liberates them, emitting blue light to form the image.</li>
               <li>• <strong>Direct Digital:</strong> Uses flat panel TFT arrays or CCDs for instant readout.</li>
            </ul>
         </div>
      </div>
    </section>
  );
}
