import React from 'react';
import { Grid3X3, Filter, AlertTriangle } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section6_Sampling() {
  return (
    <section id="sampling" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-teal-400">Section 3.6</span>
        <h2 className="text-3xl font-bold text-white mt-2">Sampling</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          To electronically sense, store, and process continuous signals, we must transform them into collections of numbers. This transformation is called discretization or sampling. We focus on <strong>rectangular sampling</strong>, where a continuous signal is replaced by a discrete signal on a 2-D rectangular grid.
        </p>
      </header>

      {/* Nyquist Theorem */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="claude-surface p-8">
           <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
              <Grid3X3 className="w-6 h-6 text-indigo-400" /> The Nyquist Theorem
           </h3>
           <p className="text-slate-300 leading-relaxed mb-4">
              If a continuous signal <Latex formula="f(x, y)" /> is <strong>band-limited</strong> with highest frequencies <Latex formula="U" /> and <Latex formula="V" /> in the x and y directions respectively, the Nyquist sampling theorem states that the signal can be perfectly reconstructed if and only if the sampling periods satisfy:
           </p>
           <div className="bg-slate-900 border border-indigo-900/50 p-4 rounded text-center mb-6 shadow-inner">
             <Latex formula="\Delta x \le \frac{1}{2U} \quad \text{and} \quad \Delta y \le \frac{1}{2V}" displayMode />
           </div>
           <p className="text-sm text-slate-400">
             These maximum allowed values are called the <strong>Nyquist sampling periods</strong>.
           </p>
        </div>

        {/* Aliasing */}
        <div className="claude-surface p-8 border-t-4 border-t-red-500">
           <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
              <AlertTriangle className="w-6 h-6 text-red-400" /> Aliasing
           </h3>
           <p className="text-slate-300 leading-relaxed mb-4">
              If a signal is sampled with too few samples (<Latex formula="\Delta x > 1/2U" />), high frequencies overlap and "take the alias of" lower frequencies. This causes artificial high-frequency textures that do not exist in reality.
           </p>
           <div className="bg-red-950/30 border border-red-900/50 p-4 rounded text-red-200 text-sm">
             <strong>Warning:</strong> An aliased signal can never be perfectly reconstructed. The diagnostic utility of the image is permanently compromised.
           </div>
        </div>
      </div>

      {/* Anti-Aliasing Filters */}
      <div className="space-y-6 mt-8">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <Filter className="w-6 h-6 text-cyan-400" /> Anti-Aliasing Filters
        </h3>
        
        <div className="claude-panel p-8 bg-slate-900 border border-slate-700 rounded-xl">
           <p className="text-slate-300 leading-relaxed mb-6">
             To prevent aliasing while keeping the number of samples low, the continuous signal must first be low-pass filtered. This is called an <strong>anti-aliasing filter</strong>. It introduces blurring (which is preferable to aliasing artifacts).
           </p>
           
           <div className="border-l-4 border-cyan-500 bg-cyan-950/20 p-6 rounded-r-lg">
             <h4 className="text-cyan-400 font-bold mb-2">Area Sampling</h4>
             <p className="text-sm text-slate-300 leading-relaxed">
               Most detectors naturally perform anti-aliasing because they are not infinitely small points. They integrate the signal over the area of the detector element. This area integration acts as a low-pass filter (a rect function).
               <br/><br/>
               If the detector has width <Latex formula="\Delta x" />, its transfer function is <Latex formula="\text{sinc}(\Delta x \cdot u)" />. The first zero is at <Latex formula="u = 1/\Delta x" />. Thus, to avoid aliasing, the sampling distance must satisfy <Latex formula="\Delta x \ge 2\Delta_{\text{sample}}" />.
             </p>
           </div>
        </div>
      </div>
    </section>
  );
}
