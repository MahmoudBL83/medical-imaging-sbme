'use client';

import Link from 'next/link';
import { Target, Zap, Activity, Info, Settings, Maximize, Layers, AlertCircle, RefreshCw, Hexagon } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Chapter6() {
  return (
    <div className="space-y-12 pb-20 fade-up">
      {/* Navigation */}
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 6</span>
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 pb-8 stagger">
        <span className="claude-kicker text-indigo-500">Section 6.1 - 6.5</span>
        <h1 className="text-5xl font-extrabold text-white mt-3 mb-6 tracking-tight">
          Computed Tomography (CT)
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          Reconstructing slices of the human body from thousands of 1D X-ray projections. We explore scanner evolution, the mathematics of the Radon transform, and Filtered Backprojection.
        </p>
        <div className="flex gap-4 mt-6">
          <span className="claude-chip">
            <Hexagon className="w-4 h-4 mr-2 inline text-indigo-400" /> Tomographic Math
          </span>
          <span className="claude-chip">
            <RefreshCw className="w-4 h-4 mr-2 inline text-blue-400" /> FBP Algorithm
          </span>
        </div>
      </header>

      {/* Generations & Detector Geometry */}
      <section className="space-y-6 stagger">
        <span className="claude-kicker text-indigo-400">Hardware Evolution</span>
        <h2 className="text-3xl font-bold text-white">Scanner Generations & Geometries</h2>

        <div className="claude-surface p-8">
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            The fundamental CT data point is a <strong>Line Integral</strong>. Each detector measures the total attenuation of an X-ray beam along a single chord through the patient.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden">
               <h3 className="text-white font-bold mb-2">1st Gen: Pencil Beam</h3>
               <p className="text-xs text-slate-400 leading-relaxed mb-4">
                 Translate-rotate motion. A single detector and tight pencil beam. 
               </p>
               <div className="claude-divider mb-3"></div>
               <span className="text-[10px] text-blue-400 font-bold uppercase">Pros/Cons</span>
               <p className="text-xs text-slate-300 mt-1">Excellent scatter rejection, but incredibly slow (~6 mins/slice).</p>
            </div>

            <div className="bg-slate-900 border border-blue-900/50 p-6 rounded-xl relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.1)]">
               <h3 className="text-blue-400 font-bold mb-2 italic">3rd Gen: Fan Beam</h3>
               <p className="text-xs text-slate-400 leading-relaxed mb-4">
                 Tube and detector arc rotate together. <strong>This is the modern standard.</strong>
               </p>
               <div className="claude-divider border-blue-900/50 mb-3"></div>
               <span className="text-[10px] text-blue-400 font-bold uppercase">Pros/Cons</span>
               <p className="text-xs text-slate-300 mt-1">Fast (sub-second slices). However, highly susceptible to dead-detector <strong>ring artifacts</strong>.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden">
               <h3 className="text-white font-bold mb-2">7th Gen: MDCT Cone Beam</h3>
               <p className="text-xs text-slate-400 leading-relaxed mb-4">
                 Multi-detector row CT. Continuous helical rotation over a 2D detector array.
               </p>
               <div className="claude-divider mb-3"></div>
               <span className="text-[10px] text-blue-400 font-bold uppercase">Pros/Cons</span>
               <p className="text-xs text-slate-300 mt-1">Volumetric 3D scanning (320+ rows). Requires complex cone-beam reconstruction math.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Math of CT */}
      <section className="space-y-6 stagger mt-12">
        <span className="claude-kicker text-emerald-400">Core Mathematics</span>
        <h2 className="text-3xl font-bold text-white">Line Integrals & Hounsfield Units</h2>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8">
          <div className="claude-surface p-8 space-y-6">
             <h3 className="text-xl font-bold text-white mb-2">The Forward Problem</h3>
             <p className="text-slate-300 text-sm leading-relaxed mb-4">
               According to Beer's law, the transmitted intensity <Latex formula="I_d" /> depends on the integral of the attenuation coefficient <Latex formula="\mu" /> along path <Latex formula="s" />. Taking the negative natural log isolates this line integral:
             </p>
             <div className="bg-slate-950 p-4 border border-slate-800 rounded-lg text-center shadow-inner">
                <Latex formula="g_d = -\ln\left(\frac{I_d}{I_0}\right) = \int_0^d \mu(s) ds" displayMode />
             </div>
             
             <div className="claude-note border-l-emerald-500 bg-emerald-950/20 text-emerald-200 text-xs mt-6">
               <strong>The Sinogram:</strong> Plotting thousands of these 1D line integrals <Latex formula="g(\ell, \theta)" /> across all angles <Latex formula="\theta" /> yields the <strong>Radon Transform</strong>. A single point in the patient traces a perfect sine wave in the sinogram domain.
             </div>
          </div>

          <div className="space-y-6">
            <div className="claude-panel p-8 border-l-4 border-l-amber-500 h-full flex flex-col justify-center">
              <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2">
                Hounsfield Units (CT Numbers)
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Raw <Latex formula="\mu" /> values depend on the specific kVp used. To create a universal, machine-independent scale, we normalize pixels against water to create <strong>Hounsfield Units (HU)</strong>:
              </p>
              <div className="bg-slate-900 border border-slate-700 px-6 py-4 rounded text-center shadow-xl">
                <Latex formula="\text{HU} = 1000 \times \frac{\mu_{\text{tissue}} - \mu_{\text{water}}}{\mu_{\text{water}}}" displayMode />
              </div>
              
              <div className="grid grid-cols-3 gap-2 mt-8 text-center text-xs font-mono">
                <div className="bg-slate-800 border-b-4 border-slate-950 p-2 rounded">
                  <div className="text-slate-400">Air</div>
                  <div className="font-bold text-white mt-1">-1000 HU</div>
                </div>
                <div className="bg-slate-700 border-b-4 border-blue-500 p-2 rounded">
                  <div className="text-blue-300">Water</div>
                  <div className="font-bold text-white mt-1">0 HU</div>
                </div>
                <div className="bg-slate-600 border-b-4 border-slate-300 p-2 rounded">
                  <div className="text-slate-200">Bone</div>
                  <div className="font-bold text-white mt-1">+1000 HU</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtered Backprojection Flow */}
      <section className="claude-surface p-10 stagger mt-8 border-blue-900 border-t-[3px]">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
           <RefreshCw className="text-blue-400" /> Filtered Backprojection (FBP)
        </h2>
        
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Naive backprojection simply "smears" the acquired 1D data back across the image grid. However, this produces a heavily blurred image mathematically equivalent to convolving the real image with <Latex formula="1/r" />.
            </p>
            <h3 className="font-bold text-blue-400 text-sm uppercase tracking-widest mb-3">Projection-Slice Theorem</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              The 1D Fourier Transform of a projection at angle <Latex formula="\theta" /> is perfectly equal to a slice through the origin of the 2D Fourier Transform of the object at that same angle. This proves that scanning from 0 to 180° fills the entire frequency space.
            </p>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative overflow-hidden flex flex-col justify-center">
             <h4 className="text-white font-bold text-sm mb-6 text-center uppercase tracking-widest">The FBP Algorithm</h4>
             
             {/* Flowchart Diagram */}
             <div className="flex items-center justify-between gap-2 text-xs font-mono">
                {/* Step 1 */}
                <div className="flex flex-col items-center gap-3 w-1/4">
                   <div className="w-16 h-16 bg-slate-800 rounded flex items-center justify-center border-b-2 border-slate-600 shadow-md">
                     <span className="text-slate-500 text-[10px]">Sinogram</span>
                   </div>
                   <span className="text-slate-400 text-[10px] text-center"><Latex formula="g(\ell, \theta)" /></span>
                </div>
                
                <div className="text-blue-500">→</div>
                
                {/* Step 2 */}
                <div className="flex flex-col items-center gap-3 w-1/4">
                   <div className="w-16 h-16 bg-blue-900/30 rounded flex items-center justify-center border border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                      {/* V shape for Ram-Lak filter */}
                      <svg className="w-10 h-10 opacity-70" viewBox="0 0 100 100">
                        <path d="M 10 90 L 50 10 L 90 90" fill="none" stroke="#60a5fa" strokeWidth="6" />
                      </svg>
                   </div>
                   <span className="text-blue-400 font-bold text-[10px] text-center text-balance">1. Ramp Filter<br/>(&times; <Latex formula="|\rho|" />)</span>
                </div>
                
                <div className="text-blue-500">→</div>
                
                {/* Step 3 */}
                <div className="flex flex-col items-center gap-3 w-1/4">
                   <div className="w-16 h-16 bg-slate-800 rounded flex items-center justify-center border-b-2 border-slate-600 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 border-t-2 border-dashed border-slate-500 rotate-45 transform origin-center"></div>
                        <div className="w-24 border-t-2 border-dashed border-slate-500 -rotate-12 transform origin-center"></div>
                      </div>
                   </div>
                   <span className="text-slate-400 text-[10px] text-center">2. Backproject<br/>across <Latex formula="\theta" /></span>
                </div>
                
                <div className="text-blue-500">→</div>
                
                {/* Step 4 */}
                <div className="flex flex-col items-center gap-3 w-1/4">
                   <div className="w-16 h-16 bg-emerald-900/30 rounded-full flex items-center justify-center border-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                      <span className="text-emerald-400 font-bold tracking-widest leading-none">CT<br/>IMG</span>
                   </div>
                   <span className="text-emerald-400 font-bold text-[10px] text-center">3. Sum Slices<br/><Latex formula="f(x,y)" /></span>
                </div>
             </div>

             <div className="mt-8 bg-blue-950/20 p-3 rounded-lg border border-blue-900/50 text-[10px] text-slate-400 italic text-center">
                The high-pass Ramp Filter <Latex formula="|\rho|" /> amplifies high frequencies to exactingly cancel out the <Latex formula="1/r" /> blurring introduced during the backprojection smearing phase.
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
