'use client';

import Link from 'next/link';
import { AreaChart, Eye, Search, Zap, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Chapter3() {
  return (
    <div className="space-y-12 pb-20 fade-up">
      {/* Navigation */}
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 3</span>
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 pb-8 stagger">
        <span className="claude-kicker text-teal-500">Section 3.1 - 3.6</span>
        <h1 className="text-5xl font-extrabold text-white mt-3 mb-6 tracking-tight">
          Image Quality
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          How do we objectively define a "good" image? We explore the mathematical frameworks 
          measuring Contrast, Resolution, Noise, and the clinical tradeoff (ROC Curves) 
          involved in diagnosing truth.
        </p>
        <div className="flex gap-4 mt-6">
          <span className="claude-chip">
            <AreaChart className="w-4 h-4 mr-2 inline text-teal-400" /> Modulation Transfer (MTF)
          </span>
          <span className="claude-chip">
            <Search className="w-4 h-4 mr-2 inline text-emerald-400" /> SNR
          </span>
        </div>
      </header>

      {/* The Six Factors */}
      <section className="space-y-6 stagger">
        <span className="claude-kicker text-teal-400">Diagnostic Metrics</span>
        <h2 className="text-3xl font-bold text-white">The Six Pillars of Image Quality</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
           {/* Contrast */}
           <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl border-t-2 border-t-white">
              <h3 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                 <Eye className="w-4 h-4 text-slate-400" /> Contrast
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                 The difference in image intensity between an object of interest and the background. Without contrast, structures are functionally invisible.
              </p>
           </div>
           
           {/* Resolution */}
           <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl border-t-2 border-t-white">
              <h3 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                 <Search className="w-4 h-4 text-slate-400" /> Resolution
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                 The ability of the system to depict fine spatial details. Directly tied to the Point Spread Function (PSF).
              </p>
           </div>
           
           {/* Noise */}
           <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl border-t-2 border-t-white">
              <h3 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                 <Zap className="w-4 h-4 text-slate-400" /> Noise
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                 Random, unpredictable fluctuations (like quantum mottle in X-ray) that obscure real anatomy. Often measured via Signal-to-Noise Ratio (SNR).
              </p>
           </div>

           {/* Artifacts */}
           <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl border-t-2 border-t-slate-700">
              <h3 className="text-slate-300 font-bold text-sm mb-2 flex items-center gap-2">
                 <ShieldAlert className="w-4 h-4 text-slate-500" /> Artifacts
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                 Artificial features in the final image that do not exist in the patient (e.g., metal streaks in CT).
              </p>
           </div>

           {/* Distortion */}
           <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl border-t-2 border-t-slate-700">
              <h3 className="text-slate-300 font-bold text-sm mb-2 flex items-center gap-2">
                 <Cpu className="w-4 h-4 text-slate-500" /> Distortion
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                 Geometric misrepresentation of an object's size, shape, or relative position (e.g., magnification).
              </p>
           </div>

           {/* Accuracy */}
           <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl border-t-2 border-t-slate-700">
              <h3 className="text-slate-300 font-bold text-sm mb-2 flex items-center gap-2">
                 <CheckCircle2 className="w-4 h-4 text-slate-500" /> Accuracy
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                 Conformity to the truth. Does the pixel intensity linearly track with the true chemical/physical property of the tissue?
              </p>
           </div>
        </div>
      </section>

      {/* Modulation and MTF */}
      <section className="space-y-6 stagger mt-12 border-t-2 border-slate-800 pt-10">
        <span className="claude-kicker text-emerald-400">Frequency Domain</span>
        <h2 className="text-3xl font-bold text-white">Modulation Transfer Function (MTF)</h2>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
          <div className="claude-panel p-8 space-y-6 bg-gradient-to-br from-slate-900 to-slate-950">
            <h3 className="text-xl font-bold text-emerald-400 flex items-center gap-2">
              Modulation ($m_f$)
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              If we image an idealized sinusoidal grid with amplitude $B$ and mean background $A$, its base contrast (Modulation) is defined as:
            </p>
            <div className="bg-slate-900 border border-emerald-900/50 p-4 rounded text-center shadow-inner">
               <Latex formula="m_f = \frac{f_{\text{max}} - f_{\text{min}}}{f_{\text{max}} + f_{\text{min}}} = \frac{B}{A}" displayMode />
            </div>
            
            <div className="claude-note border-l-emerald-500 bg-emerald-950/20 text-emerald-200 mt-6 text-sm">
              <strong>The MTF Core Concept:</strong> Due to blur (the Point Spread Function), the output image will <em>always</em> have less modulation than the input. The MTF tracks how much contrast is preserved at different spatial frequencies (low vs high detail).
            </div>
          </div>

          <div className="claude-diagram flex flex-col pt-10 px-6 pb-6 bg-slate-900 border border-slate-700 relative rounded-xl h-full items-end justify-end">
            <h3 className="absolute top-4 left-6 text-sm font-bold text-slate-300">Typical System MTF Curve</h3>
            <div className="absolute bottom-4 right-1/4 text-xs font-bold text-slate-400">Spatial Frequency ($u$)</div>
            <div className="absolute top-1/2 -left-[45px] text-xs font-bold text-slate-400 -rotate-90">MTF % Preseved</div>
            
            {/* Chart Graph */}
            <div className="w-[85%] h-[200px] border-l-2 border-b-2 border-slate-600 relative flex items-end shadow-inner mb-4">
               {/* 1.0 Marker */}
               <div className="absolute left-[-25px] top-0 text-[10px] text-slate-500">1.0</div>
               {/* 0.0 Marker */}
               <div className="absolute left-[-25px] bottom-[-5px] text-[10px] text-slate-500">0.0</div>
               
               {/* System A Curve (Good Resolution) */}
               <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                 <path d="M 0 0 C 80 0, 150 50, 250 200" fill="none" stroke="#10b981" strokeWidth="3" />
               </svg>
               
               {/* System B Curve (Poor Resolution) */}
               <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                 <path d="M 0 0 C 20 0, 60 100, 200 200" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" />
               </svg>
               
               <span className="absolute top-[30px] right-[80px] text-[10px] text-emerald-400 font-bold bg-slate-900 px-1">System A (Sharper)</span>
               <span className="absolute top-[130px] left-[50px] text-[10px] text-slate-400 font-bold bg-slate-900 px-1">System B (Blurrier)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tradeoffs */}
      <section className="claude-surface p-10 stagger mt-8 border-l-4 border-l-red-500">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
           Clinical Engineering Trade-offs
        </h2>
        
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          In physics, you rarely get something for nothing. Optimizing one parameter often severely degrades another. For example, <strong>Nuclear Medicine (PET/SPECT)</strong> has exquisite Contrast (highlighting specific metabolism) but atrocious Spatial Resolution and high Noise. <strong>CT</strong> has excellent Spatial Resolution, but poor soft-tissue Contrast.
        </p>

        <div className="bg-slate-950 border border-red-900/50 py-4 px-6 rounded text-center text-sm font-mono text-red-200">
          Receiver Operating Characteristic (ROC) curves quantify this diagnostic performance, graphing True Positive Rate against False Positive Rate to determine the clinical utility of the imaging system.
        </div>
      </section>

    </div>
  );
}
