'use client';

import Link from 'next/link';
import { Camera, Box, ArrowRight, Layers, Target, Zap, Activity, Info } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Chapter8() {
  return (
    <div className="space-y-12 pb-20 fade-up">
      {/* Navigation */}
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 8</span>
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 pb-8 stagger">
        <span className="claude-kicker text-red-500">Section 8.1 - 8.3</span>
        <h1 className="text-5xl font-extrabold text-white mt-3 mb-6 tracking-tight">
          Planar Scintigraphy: The Anger Camera
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          The Hal Anger Camera captures 2D projections of in vivo radioactivity. It relies on precise geometric collimation, scintillation in a NaI(Tl) crystal, and complex positioning logic using photomultiplier tube (PMT) arrays.
        </p>
        <div className="flex gap-4 mt-6">
          <span className="claude-chip">
            <Camera className="w-4 h-4 mr-2 inline" /> Gamma Camera
          </span>
          <span className="claude-chip">
            <Box className="w-4 h-4 mr-2 inline" /> Instrumentation
          </span>
        </div>
      </header>

      {/* Overview Block */}
      <div className="claude-surface p-8 stagger">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-blue-400" /> The Scintillation Process
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          The Anger camera operates sequentially: <strong className="text-blue-400">Collimation</strong> limits incoming angles, <strong className="text-amber-400">Scintillation</strong> converts gammas to light photons, <strong className="text-emerald-400">PMT Amplification</strong> creates an electrical pulse, and <strong className="text-purple-400">Position Logic / PHA</strong> validates and positions the event.
        </p>
        
        {/* Process Diagram */}
        <div className="claude-diagram p-6 bg-slate-900/50 mb-8 overflow-x-auto rounded-xl">
          <div className="flex items-center justify-between min-w-[700px] gap-4">
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-24 bg-slate-800 border-4 border-slate-600 border-b-0 border-t-0 p-1 flex justify-between rounded-sm relative">
                <div className="w-2 h-full bg-slate-950"></div>
                <div className="w-2 h-full bg-slate-950"></div>
                <div className="w-2 h-full bg-slate-950"></div>
              </div>
              <span className="text-sm font-bold text-slate-300">1. Collimator</span>
            </div>
            <ArrowRight className="w-6 h-6 text-slate-600" />
            <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-6 bg-amber-950/40 border border-amber-500/50 rounded-sm relative overflow-hidden">
                <div className="absolute top-1/2 left-3 w-2 h-2 bg-amber-300 rounded-full animate-ping"></div>
              </div>
              <span className="text-sm font-bold text-amber-400">2. NaI(Tl) Crystal</span>
            </div>
            <ArrowRight className="w-6 h-6 text-slate-600" />
            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-1 justify-center">
                <div className="w-6 h-16 bg-blue-900 border border-blue-600 rounded-t-full rounded-b-sm"></div>
                <div className="w-6 h-16 bg-blue-900 border border-blue-600 rounded-t-full rounded-b-sm"></div>
                <div className="w-6 h-16 bg-blue-900 border border-blue-600 rounded-t-full rounded-b-sm"></div>
              </div>
              <span className="text-sm font-bold text-blue-400">3. PMT Array</span>
            </div>
            <ArrowRight className="w-6 h-6 text-slate-600" />
            <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-16 bg-slate-800 border border-slate-600 rounded flex items-center justify-center font-mono text-emerald-400 text-xs text-center p-2">
                Z, X, Y<br/>Logic
              </div>
              <span className="text-sm font-bold text-emerald-400">4. Processing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Collimators Section */}
      <section className="space-y-6 stagger">
        <span className="claude-kicker">Geometry & Resolution</span>
        <h2 className="text-3xl font-bold text-white">Types of Collimators</h2>
        
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="claude-panel p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">Parallel-Hole (Most Common)</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Holes are perpendicular to the detector face. Project object rays at a 1:1 ratio. No image magnification occurs regardless of distance.
            </p>
            <div className="claude-note border-l-blue-500 bg-blue-950/20 text-blue-200">
              <strong>Magnification factor:</strong> 1.0 (Constant)
            </div>
          </div>
          
          <div className="claude-panel p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">Pinhole Collimator</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Functions like a pinhole camera. The image is inverted. Often used for imaging small, shallow organs (e.g., the thyroid) due to its magnification effect.
            </p>
            <div className="claude-note border-l-purple-500 bg-purple-950/20 text-purple-200">
              <strong>Magnification (M):</strong> <Latex formula="M = \frac{z_f}{z}" />
            </div>
          </div>

          <div className="claude-panel p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">Converging Collimator</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Holes point inward toward a focal point located in front of the collimator. Project an enlarged image of a smaller field of view.
            </p>
            <div className="claude-diagram h-20 bg-slate-900 border border-slate-800 flex items-end justify-center pb-2 relative rounded">
               <div className="w-1 h-12 bg-emerald-500 absolute rotate-12 left-[38%]"></div>
               <div className="w-1 h-12 bg-emerald-500 absolute -rotate-12 right-[38%]"></div>
               <div className="w-16 h-4 bg-slate-700 absolute bottom-0 rounded-t"></div>
            </div>
          </div>

          <div className="claude-panel p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">Diverging Collimator</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Holes point away from a focal point behind the detector face. Creates a miniaturized image, allowing large anatomy to fit onto a standard detector.
            </p>
             <div className="claude-note border-l-orange-500 bg-orange-950/20 text-orange-200">
              <strong>Magnification (M):</strong> <Latex formula="M = \frac{z_f}{z+z_f}" />
            </div>
          </div>
        </div>
      </section>

      {/* PMT Cascade Process */}
      <section className="space-y-6 stagger">
        <span className="claude-kicker">Signal Amplification</span>
        <h2 className="text-3xl font-bold text-white">Photomultiplier Tube (PMT) Cascade</h2>
        
        <div className="claude-surface p-8">
          <p className="text-slate-300 mb-6 leading-relaxed">
            The conversion from light to a measurable electrical signal relies on a high-gain exponential cascade using an internal chain of electrodes called <strong>dynodes</strong>.
          </p>

          <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 items-center">
            <div className="space-y-4">
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <span className="claude-kicker">Stage 1: Photocathode</span>
                <p className="text-sm mt-2 text-slate-300">Converts incoming light photons into electrons (Photoelectric effect). Efficiency is low: about 1 electron for every 4-5 photons.</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <span className="claude-kicker">Stage 2: Dynode Cascade</span>
                <p className="text-sm mt-2 text-slate-300">Typically 10-14 dynode stages. Each dynode is held at a progressively higher positive voltage. Secondary emission releases 3-4 new electrons for every incident electron.</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-emerald-900/50">
                <span className="claude-kicker text-emerald-400">Stage 3: The Anode</span>
                <p className="text-sm mt-2 text-slate-300">Collects the massive avalanche of electrons to form a measurable current pulse. <strong>Total amplification: <Latex formula="10^6" /> to <Latex formula="10^8" /></strong></p>
              </div>
            </div>

            <div className="claude-diagram flex items-center justify-center p-8 bg-slate-900/80 relative rounded-xl h-full min-h-[300px]">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
               <div className="flex w-full flex-col items-center justify-between h-full relative z-10 py-4 max-w-[120px]">
                 {/* Light Input */}
                 <div className="text-xs text-blue-400 font-bold mb-2">LIGHT IN</div>
                 <div className="w-16 h-4 bg-blue-500/50 rounded shadow-[0_0_15px_rgba(59,130,246,0.5)] mb-4"></div>
                 
                 {/* Dynodes */}
                 <div className="flex flex-col gap-3 relative w-full items-center">
                   {/* Zig zag dynodes */}
                   {[...Array(6)].map((_, i) => (
                     <div key={i} className={`w-12 h-2 bg-amber-600/60 rounded-full shadow-[0_0_10px_rgba(217,119,6,0.3)] ${i % 2 === 0 ? 'ml-6' : 'mr-6'}`}></div>
                   ))}
                   {/* Connecting beam lines */}
                   <div className="absolute inset-0 flex flex-col justify-between py-1 px-4 pointer-events-none">
                     <svg className="w-full h-full opacity-30" preserveAspectRatio="none" viewBox="0 0 100 100">
                       <path d="M 60,10 L 40,25 L 60,40 L 40,55 L 60,70 L 40,85" fill="none" stroke="#fbbf24" strokeWidth="2" />
                     </svg>
                   </div>
                 </div>
                 
                 {/* Output */}
                 <div className="w-16 h-8 bg-emerald-600 rounded mt-4 flex items-center justify-center border-b-4 border-emerald-800">
                    <span className="text-[10px] font-bold text-white">ANODE</span>
                 </div>
                 <div className="text-xs text-emerald-400 font-bold mt-2">e⁻ AVALANCHE</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Position Logic & PMT Spectrum */}
      <section className="space-y-6 stagger">
        <span className="claude-kicker">Event Calculus</span>
        <h2 className="text-3xl font-bold text-white">Anger Positioning Logic & Energy Windows</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="claude-surface p-8 space-y-6">
            <p className="text-slate-300 leading-relaxed text-sm">
              Because PMT tubes are large compared to desired spatial resolution, Anger derived a center-of-mass algorithm. Total energy (Z-pulse) is the sum of all PMT signals, while spatial position is calculated by weighting each PMT's signal by its fixed coordinates.
            </p>
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-6 shadow-inner">
              <div>
                <span className="claude-kicker mb-2 block text-blue-400">Total Energy (Z-pulse)</span>
                <Latex displayMode formula="Z = \sum_{k=1}^K a_k" />
              </div>
              <div className="border-t border-slate-800 my-4"></div>
              <div>
                <span className="claude-kicker mb-2 block text-emerald-400">Center of Mass (X,Y)</span>
                <div className="space-y-4">
                  <Latex displayMode formula="X = \frac{1}{Z}\sum_{k=1}^K x_k a_k" />
                  <Latex displayMode formula="Y = \frac{1}{Z}\sum_{k=1}^K y_k a_k" />
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 italic">
              Where <Latex formula="a_k" /> is the amplitude of the signal from the k-th PMT, and <Latex formula="(x_k, y_k)" /> are its fixed coordinates. Higher amplitude implies the event happened closer to that specific PMT.
            </p>
          </div>

          <div className="space-y-6">
            <div className="claude-panel p-6 border-l-4 border-l-amber-500">
              <h3 className="text-amber-400 font-bold mb-2">The Pulse Height Spectrum</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Compton scattering inside the patient diverts photon direction and reduces its energy. If scattered photons are recorded, the position logic assigns an incorrect origin, degrading image contrast.
              </p>
              
              <div className="claude-diagram h-48 flex items-end px-4 pt-4 gap-1 border-b-2 border-l-2 border-slate-600 relative rounded">
                <div className="absolute bottom-[-24px] w-full text-center text-xs text-slate-500 font-mono">Energy (keV)</div>
                <div className="absolute left-[-30px] h-full flex items-center rotate-180 text-xs text-slate-500 font-mono" style={{writingMode: 'vertical-rl'}}>Counts</div>
                
                <div className="h-16 w-full bg-slate-800/80 rounded-t border-t border-slate-600 relative group flex-grow">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 opacity-60">Compton Plateau</span>
                </div>
                <div className="h-20 w-12 bg-slate-700/80 rounded-t border-t border-r border-slate-500 mr-6 relative group flex-shrink-0">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 opacity-60">Compton Edge</span>
                </div>
                <div className="h-36 w-20 bg-blue-500/30 rounded-t-2xl border border-blue-400 relative flex-shrink-0">
                   <div className="absolute inset-0 border-x border-t border-dashed border-white/50 m-1 rounded-t-xl"></div>
                   <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-400">Photopeak</span>
                </div>
                <div className="h-4 w-8 bg-slate-800/80 rounded-t border-t border-slate-600 ml-2"></div>
              </div>
            </div>

            <div className="claude-note border-l-emerald-500 bg-emerald-950/20">
              <strong className="text-emerald-400">Pulse Height Analyzer (PHA):</strong><br/> 
              Establishes an energy "window" (typically ±10% around the primary photopeak energy, e.g., 140 keV for Tc-99m) and discards any Z-pulse below this threshold, effectively rejecting Compton scattered "fog".
            </div>
          </div>
        </div>
      </section>

      {/* Resolution & Summary */}
      <section className="claude-surface p-10 stagger border-emerald-900 border-t-[3px]">
        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider text-emerald-400 flex items-center gap-3">
           System Resolution Math
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Overall system resolution <Latex formula="R_s" /> (spatial blurring) is the combination of Intrinsic Resolution <Latex formula="R_i" /> (due to PMT tracking/statistics) and Geometric Resolution <Latex formula="R_g" /> (due to collimator divergence).
            </p>
            <div className="bg-slate-950 px-6 py-4 rounded-xl border border-slate-800 w-full mb-6">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2 block">Total System Blur</span>
              <Latex displayMode formula="R_s = \sqrt{R_i^2 + R_g^2}" />
            </div>
            
             <div className="bg-slate-950 px-6 py-4 rounded-xl border border-slate-800 w-full">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2 block">Geometric Collimator Blur</span>
              <Latex displayMode formula="R_g = \frac{d(L + z)}{L}" />
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-400">
                <div><Latex formula="d" /> = Hole diameter</div>
                <div><Latex formula="L" /> = Hole length</div>
                <div className="col-span-2"><Latex formula="z" /> = Object-to-collimator distance</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="bg-orange-950/20 rounded-2xl p-6 border border-orange-900/50 relative overflow-hidden h-full">
               <div className="absolute top-0 right-0 w-24 h-24 bg-orange-600/10 rounded-bl-full"></div>
               <h3 className="font-bold text-orange-400 mb-3 flex items-center gap-2">
                 The Distance Trap
               </h3>
               <p className="text-slate-300 text-sm leading-relaxed relative z-10">
                 Because <Latex formula="z" /> is in the numerator, patient distance proportionally increases geometric blur. <strong>Conclusion: Image resolution rapidly deteriorates as the patient moves further away from the camera.</strong> Keep detectors as close as physically possible to the patient.
               </p>
            </div>
            <div className="claude-note bg-blue-900/20 border-l-blue-500 text-blue-200">
               <strong>The Sensitivity/Resolution Trade-off:</strong> Thicker NaI(Tl) crystals stop high-energy gammas better (improving counting sensitivity) but allow light photons to spread wider before hitting PMTs, degrading intrinsic resolution <Latex formula="R_i" />.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
