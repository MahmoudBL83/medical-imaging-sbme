import React from 'react';
import { Target, Zap, Server, Shield } from 'lucide-react';
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
