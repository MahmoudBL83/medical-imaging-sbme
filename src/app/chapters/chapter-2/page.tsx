'use client';

import Link from 'next/link';
import { Network, Activity, Info, BarChart2, Waves, Cpu, AlignLeft } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Chapter2() {
  return (
    <div className="space-y-12 pb-20 fade-up">
      {/* Navigation */}
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 2</span>
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 pb-8 stagger">
        <span className="claude-kicker text-pink-500">Section 2.1 - 2.5</span>
        <h1 className="text-5xl font-extrabold text-white mt-3 mb-6 tracking-tight">
          Signals and Systems
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          The mathematical backbone of medical imaging. We model physical processes—like X-ray attenuation or tissue magnetization—as 2D functions, analyzing how imaging machines act as systems that transform these true signals into measured images.
        </p>
        <div className="flex gap-4 mt-6">
          <span className="claude-chip">
            <Waves className="w-4 h-4 mr-2 inline text-pink-400" /> Continuous Signals
          </span>
          <span className="claude-chip">
            <Network className="w-4 h-4 mr-2 inline text-indigo-400" /> Linear Systems
          </span>
        </div>
      </header>

      {/* Signal Types */}
      <section className="space-y-6 stagger">
        <span className="claude-kicker text-pink-400">Mathematical Abstractions</span>
        <h2 className="text-3xl font-bold text-white">Signal Definitions</h2>

        <div className="claude-surface p-8">
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            A signal is a mathematical function that models a physical process. The patient is mapped as an idealized continuous 2D or 3D signal, e.g., $\mu(x,y)$.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden flex flex-col items-center text-center">
               <h4 className="text-white font-bold text-sm mb-4">Continuous Signal</h4>
               <div className="bg-slate-950 py-3 px-4 w-full rounded border border-slate-800 shadow-inner text-sm mb-3">
                 <Latex formula="f(x, y)" />
               </div>
               <p className="text-xs text-slate-400 leading-relaxed">Defined for all real numbers $x, y \in (-\infty, \infty)$. Represents actual tissue properties before they hit the scanner.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden flex flex-col items-center text-center">
               <h4 className="text-white font-bold text-sm mb-4">Discrete Signal</h4>
               <div className="bg-slate-950 py-3 px-4 w-full rounded border border-slate-800 shadow-inner text-sm mb-3">
                 <Latex formula="f[n, m]" />
               </div>
               <p className="text-xs text-slate-400 leading-relaxed">Defined only at integer indices. Represents the final digital pixel array captured by a flat-panel or CCD detector.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden flex flex-col items-center text-center">
               <h4 className="text-white font-bold text-sm mb-4">Mixed Signal</h4>
               <div className="bg-slate-950 py-3 px-4 w-full rounded border border-slate-800 shadow-inner text-sm mb-3">
                 <Latex formula="g(\ell, \theta_k)" />
               </div>
               <p className="text-xs text-slate-400 leading-relaxed">Continuous in one domain and discrete in another. Example: A CT sinogram with continuous rays $\ell$ but discrete tube angles $\theta_k$.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impulse Functions */}
      <section className="space-y-6 stagger mt-12 border-t-2 border-slate-800 pt-10">
        <span className="claude-kicker text-indigo-400">Special Functions</span>
        <h2 className="text-3xl font-bold text-white">The Dirac Delta (Impulse)</h2>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
          <div className="claude-panel p-8 space-y-6">
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              To analyze the blurring caused by an imaging system, we use an idealized infinitesimal point of unit area, the <strong>Dirac Delta Function</strong> $\delta(x, y)$. While physically impossible, it acts as a stress-test for imaging machines.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-slate-900 border border-indigo-900/50 p-4 rounded-lg shadow-inner">
                  <span className="text-[10px] text-slate-400 block mb-2 font-bold uppercase">Basic Definition</span>
                  <Latex formula="\delta(x) = 0 \text{ for } x \neq 0" displayMode />
                  <Latex formula="\int_{-\infty}^{\infty} \delta(x) dx = 1" displayMode />
               </div>
               <div className="bg-slate-900 border border-indigo-900/50 p-4 rounded-lg shadow-inner">
                  <span className="text-[10px] text-slate-400 block mb-2 font-bold uppercase">Sifting Property</span>
                  <Latex formula="\int_{-\infty}^{\infty} f(x)\delta(x-x_0) dx = f(x_0)" displayMode />
               </div>
            </div>
            
            <div className="claude-note border-l-indigo-500 bg-indigo-950/20 text-indigo-200 mt-6 text-sm">
              <strong className="block mb-1 font-bold">The Sifting Property</strong> 
              Multiplying any function by a shifted impulse $\delta(x-x_0)$ and integrating will "sift out" and evaluate the function exactly at that single point $x_0$.
            </div>
          </div>

          <div className="claude-diagram flex flex-col p-6 bg-slate-900 border border-slate-700 relative rounded-xl h-full items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.1)]">
             <div className="w-[100px] h-[100px] bg-slate-800 rounded relative mb-4">
                {/* Visualizing 2D Delta */}
                <div className="absolute inset-x-0 top-1/2 h-0.5 bg-slate-600"></div>
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-slate-600"></div>
                <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1.5 -translate-y-1.5 shadow-[0_0_15px_#fff]"></div>
             </div>
             <p className="text-center font-mono text-sm text-indigo-400 mb-2">2D Point Impulse</p>
             <Latex formula="\delta(x,y) = \delta(x)\delta(y)" />
          </div>
        </div>
      </section>

      {/* Intro to Systems & Resolution */}
      <section className="claude-surface p-10 stagger mt-8">
        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide flex items-center gap-3">
           <Cpu className="text-blue-400" /> Linear Shift-Invariant Systems
        </h2>
        
        <p className="text-slate-300 text-sm leading-relaxed mb-8">
          A system <Latex formula="H\{\}" /> maps the true patient <Latex formula="f(x,y)" /> to the measured image <Latex formula="g(x,y)" />. Most medical imaging analysis assumes systems are Linear (they scale predictably) and Shift-Invariant (blurring is the same in the center vs edge of the image).
        </p>

        <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl flex items-center justify-between gap-6 px-10">
           {/* Point Impulse Input */}
           <div className="text-center w-1/4">
              <div className="w-12 h-12 bg-white rounded-full shadow-[0_0_10px_#fff] mx-auto mb-3 border-2 border-slate-400"></div>
              <p className="text-xs font-bold text-slate-300">Point Object</p>
              <Latex formula="\delta(x,y)" />
           </div>

           <div className="text-slate-500">
             <Latex formula="\xrightarrow{H\{\}}" />
           </div>

           {/* Point Spread Function Output */}
           <div className="text-center w-1/4">
              <div className="w-20 h-20 rounded-full mx-auto mb-3" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.1) 60%, transparent 100%)'}}></div>
              <p className="text-xs font-bold text-blue-400">Point Spread Function (PSF)</p>
              <Latex formula="h(x,y)" />
           </div>
        </div>
        
        <p className="text-[11px] text-slate-400 italic text-center mt-4">
           The PSF is the system's output when the input is a perfect point. It fundamentally describes the resolution/blur of the scanner.
        </p>
      </section>

    </div>
  );
}
