'use client';

import Link from 'next/link';
import { Radio, Zap, RefreshCw, Box, Layers, Info, Filter, Clock, ArrowRight } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Chapter9() {
  return (
    <div className="space-y-12 pb-20 fade-up">
      {/* Navigation */}
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 9</span>
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 pb-8 stagger">
        <span className="claude-kicker text-blue-500">Section 9.1 - 9.4</span>
        <h1 className="text-5xl font-extrabold text-white mt-3 mb-6 tracking-tight">
          Emission Computed Tomography
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          Extending planar scintigraphy into the third dimension. SPECT and PET shift focus from 2D projections of anatomy to reconstructing the exact 3D distribution of a radiotracer, visualizing <strong>metabolic function</strong> in vivo.
        </p>
        <div className="flex gap-4 mt-6">
          <span className="claude-chip">
            <Radio className="w-4 h-4 mr-2 inline text-emerald-400" /> SPECT
          </span>
          <span className="claude-chip">
            <Zap className="w-4 h-4 mr-2 inline text-purple-400" /> PET
          </span>
          <span className="claude-chip">
            <RefreshCw className="w-4 h-4 mr-2 inline text-blue-400" /> Iterative Recon
          </span>
        </div>
      </header>

      {/* SPECT Section */}
      <section className="space-y-6 stagger">
        <span className="claude-kicker text-emerald-400">Single Photon ECT</span>
        <h2 className="text-3xl font-bold text-white">SPECT: Rotating Camera Geometry</h2>

        <div className="claude-surface p-8">
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            SPECT uses one or more Anger cameras rotating around the patient (either 180° or 360° coverage). It acquires 1D projections from multiple angles to mathematically reconstruct cross-sectional slices.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-emerald-900/30">
                  <RefreshCw className="w-32 h-32" />
                </div>
                <h3 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
                  <Box className="w-4 h-4" /> Multi-head Advantage
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Dual or triple-head systems multiply sensitivity. This gain allows for a crucial trade-off: <strong>you can either shorten the scan time significantly, or swap to higher-resolution collimators while keeping scan time the same.</strong>
                </p>
              </div>

              <div className="claude-note border-l-red-500 bg-red-950/20 text-red-200">
                <strong className="text-red-400">Nonuniformity Warning:</strong><br/>
                Unlike planar imaging, SPECT requires extreme uniformity (&lt; 1% error). Even a tiny PMT miscalibration forms ring artifacts in reconstructed slices. To fix this, 30 to 120 million count reference flood fields are required (due to Poisson noise limits: <Latex formula="\Delta N / N = 1/\sqrt{N}" />).
              </div>
            </div>

            <div className="claude-panel p-6 border-slate-700">
               <h3 className="text-white font-bold mb-4">Attenuation Correction in SPECT</h3>
               <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                 Attenuation depends heavily on the distance the photon travels through tissue. The correction is non-exact and modeled as an inverse "cup" multiplier <Latex formula="a(x,y)" /> applied to the uncorrected image <Latex formula="\hat{f}(x,y)" />.
               </p>
               <div className="bg-slate-950 p-4 border border-slate-800 rounded-lg flex justify-center mt-6">
                  <div className="text-center">
                    <Latex displayMode formula="\hat{f}_c(x,y) \approx \frac{\hat{f}(x,y)}{a(x,y)}" />
                    <span className="text-[10px] text-slate-500 uppercase">Approximate Pixel division</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* PET Section */}
      <section className="space-y-6 stagger mt-12">
        <span className="claude-kicker text-purple-400">Positron ECT</span>
        <h2 className="text-3xl font-bold text-white">PET: Annihilation & Coincidence</h2>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
          <div className="claude-surface p-8 space-y-6">
             <h3 className="text-xl font-bold text-white mb-2">Positron Physics</h3>
             <p className="text-slate-300 text-sm leading-relaxed">
               Isotopes like F-18 emit a positron (<Latex formula="\beta^+" />). It travels a short random distance (<em>positron range</em>) before annihilating with an electron, yielding two 511 keV photons traveling almost exactly 180° apart.
             </p>

            <div className="claude-diagram flex items-center justify-center p-8 bg-slate-950 rounded-xl relative my-6">
              {/* Detector Ring Mockup */}
              <div className="absolute inset-0 border-[20px] rounded-full border-slate-800 border-dashed opacity-50 m-4"></div>
              {/* LOR Line */}
              <div className="w-full max-w-[250px] border-t-2 border-purple-500 absolute rotate-[-20deg] shadow-[0_0_10px_#a855f7]"></div>
              
              {/* Annihilation event */}
              <div className="w-4 h-4 bg-white rounded-full z-10 shadow-[0_0_20px_white]"></div>
              <span className="absolute bottom-1/4 left-1/4 text-xs font-mono text-purple-300 transform -rotate-12 bg-slate-950 px-2 rounded">Line of Response (LOR)</span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-800 p-4 rounded border border-slate-700">
                <span className="text-purple-400 text-xs font-bold block mb-1">Electronic Collimation</span>
                <p className="text-[11px] text-slate-400">
                  Because we detect pairs simultaneously, we drop the lead collimators. This multiplies sensitivity enormously compared to SPECT.
                </p>
              </div>
              <div className="bg-slate-800 p-4 rounded border border-slate-700">
                <span className="text-purple-400 text-xs font-bold block mb-1">Time-of-Flight (TOF)</span>
                <p className="text-[11px] text-slate-400">
                  Measuring the picosecond delay between hits tells us exactly where on the LOR the annihilation happened, boosting SNR drastically. <Latex formula="SNR_{TOF} = \sqrt{\frac{2D}{c\Delta t}} SNR_{non-TOF}" />
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
             <div className="claude-panel p-6 border-l-amber-500 bg-amber-950/10">
                <h3 className="text-amber-400 font-bold mb-4">Random Coincidences</h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  A wide detection window (<Latex formula="2\tau" />) increases sensitivity but captures "Randoms": two independent gamma rays hitting detectors within the window.
                </p>
                <div className="bg-slate-900 border border-slate-700 px-4 py-3 rounded text-center mb-2">
                  <Latex formula="R = 2\tau S^+ S^-" displayMode />
                </div>
                <p className="text-[10px] text-slate-500 italic text-center">
                  Because true coincidences scale linearly with dose, but randoms scale <strong>quadratically</strong>, giving the patient too much tracer actively ruins the image.
                </p>
             </div>

             <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 border-l-emerald-500">
                <h3 className="text-emerald-400 font-bold mb-4 text-sm">The Exact Attenuation Miracle</h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  In PET, both photons must survive the exact same chord through the body. The total attenuation factorizes perfectly:
                </p>
                <Latex formula="P_{atten} = e^{-\int_{LOR} \mu(l) dl}" displayMode />
                <p className="text-[10px] text-slate-500 mt-4 leading-relaxed">
                  The attenuation factor for PET is extreme (often reducing signals by 50x in a 40cm patient) but because the equation is exact and position-independent along the chord, we can restore quantitative voxel accuracy using a CT transmission map.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Iterative Reconstruction */}
      <section className="claude-surface p-10 stagger border-blue-900 border-t-[3px]">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
           <Filter className="text-blue-400" /> Iterative Reconstruction (ART & MLEM)
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Filtered Backprojection (FBP) assumes ideal physics. In reality, emission data suffers from Poisson noise, scatter, randoms, and resolution blurring. Iterative algorithms incorporate the physics of the camera and statistical models into the reconstruction loop.
            </p>
            
             <div className="claude-diagram bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col gap-4">
                <div className="flex items-center gap-4 text-xs font-mono">
                   <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">1</div>
                   <div>Guess Image <Latex formula="\hat{f}_j" /></div>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono ml-6">
                   <ArrowRight className="w-4 h-4 text-slate-600" />
                   <div className="text-blue-400">Forward Project (Simulate scanner physics)</div>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                   <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">2</div>
                   <div>Compare simulated data with true sinogram</div>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono ml-6">
                   <ArrowRight className="w-4 h-4 text-slate-600" />
                   <div className="text-amber-400">Calculate ratio/gradient</div>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                   <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">3</div>
                   <div>Update Guess Image and repeat</div>
                </div>
             </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 border border-slate-700 rounded-xl relative">
              <h3 className="text-white font-bold text-sm mb-2">Maximum Likelihood Expectation Maximization</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                 ML-EM natively models Poisson noise. Projection bins are calculated as:
              </p>
              <Latex formula="\hat{n}_i = \sum_{j} a_{ij} \hat{f}_j + r_i + s_i" displayMode />
              <p className="text-[10px] text-slate-500 mt-2">
                Where <Latex formula="a_{ij}" /> is the probability matrix (system matrix), <Latex formula="r_i" /> are randoms, and <Latex formula="s_i" /> scatter. MLEM thrives in low-count noise limits but is computationally heavy.
              </p>
            </div>

            <div className="claude-note border-l-emerald-500 bg-emerald-950/20">
               <strong>Resolution Cascade:</strong><br/>
               Total PET resolution blurring merges the Positron Range, Detector Block Width tracking, and Reconstruction filter response. Because of positron range, a PET scan can never have theoretically perfect resolution compared to an X-ray CT.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
