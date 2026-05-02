import React from 'react';
import { Activity, MoveHorizontal, Box } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section1_Signals() {
  return (
    <section id="signals" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-teal-400">Section 2.1 & 2.2</span>
        <h2 className="text-3xl font-bold text-white mt-2">Signals in Medical Imaging</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Signals are mathematical functions of independent variables that model physical processes. In medical imaging, the input signal is the physical property of the patient, and the output signal is the image produced by the system.
        </p>
      </header>

      {/* The Point Impulse */}
      <div className="claude-surface p-8 border-l-4 border-l-teal-500 relative overflow-hidden mb-8">
         <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-teal-400" /> The Point Impulse (Dirac Delta)
         </h3>
         <p className="text-slate-300 text-sm leading-relaxed mb-4">
           The 2-D point impulse, <Latex formula="\delta(x,y)" />, models an ideal point source with infinitesimal width and unit volume. It is characterized by two properties:
         </p>
         <div className="bg-slate-900 border border-slate-800 p-4 rounded text-center mb-4 text-sm text-slate-300">
            <Latex formula="\delta(x, y) = 0, \quad (x,y) \neq (0,0)" displayMode />
            <Latex formula="\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(x,y)\delta(x,y) dx dy = f(0,0)" displayMode />
         </div>
         <p className="text-xs text-slate-400">
           <strong>Sifting Property:</strong> A shifted point impulse <Latex formula="\delta(x-\xi, y-\eta)" /> "picks off" the value of a function at <Latex formula="(\xi, \eta)" />.
         </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
         {/* Sampling & Comb */}
         <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
            <h4 className="text-white font-bold flex items-center gap-2 mb-3">
               <Box className="w-4 h-4 text-indigo-400" /> Sampling & Comb Functions
            </h4>
            <p className="text-sm text-slate-300 mb-4">
              Real-world systems digitize continuous signals into matrices (e.g., 1024x1024 CT grids). The <strong>Comb Function</strong> is a sequence of infinite point impulses:
            </p>
            <Latex formula="\text{comb}(x, y) = \sum_{m=-\infty}^{\infty} \sum_{n=-\infty}^{\infty} \delta(x-m, y-n)" displayMode />
            <p className="text-xs text-slate-400 mt-2">
              Scaling this grid by <Latex formula="\Delta x" /> and <Latex formula="\Delta y" /> creates the <strong>Sampling Function</strong>, which is critical for converting continuous models into discrete matrices.
            </p>
         </div>

         {/* Rect and Sinc */}
         <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
            <h4 className="text-white font-bold flex items-center gap-2 mb-3">
               <MoveHorizontal className="w-4 h-4 text-blue-400" /> Rect and Sinc Functions
            </h4>
            <p className="text-sm text-slate-300 mb-4">
              The <strong>rect</strong> function models a signal concentrated over a unit square. It is used to select a finite region of an image.
            </p>
            <p className="text-sm text-slate-300 mb-4">
              The <strong>sinc</strong> function alternating between positive and negative values, and is defined as:
            </p>
            <Latex formula="\text{sinc}(x) = \frac{\sin(\pi x)}{\pi x}" displayMode />
            <p className="text-xs text-slate-400 mt-2">
              These are separable signals (e.g. <Latex formula="\text{rect}(x,y) = \text{rect}(x)\text{rect}(y)" />).
            </p>
         </div>
      </div>

    </section>
  );
}
