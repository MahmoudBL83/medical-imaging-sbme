import React from 'react';
import { Cpu, Combine, Maximize } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section2_Systems() {
  return (
    <section id="systems" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-purple-400">Section 2.3</span>
        <h2 className="text-3xl font-bold text-white mt-2">Linear Shift-Invariant (LSI) Systems</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          A continuous system <Latex formula="S" /> transforms an input signal <Latex formula="f(x,y)" /> into an output signal <Latex formula="g(x,y) = S[f(x,y)]" />. To make mathematical analysis tractable, we model imaging instruments as Linear and Shift-Invariant (LSI) systems.
        </p>
      </header>

      {/* Linearity and Shift-Invariance */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
         <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative">
            <div className="absolute top-0 right-0 bg-purple-600/20 text-purple-400 text-xs font-bold px-3 py-1 rounded-bl-lg">Property 1</div>
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
               <Combine className="w-5 h-5 text-purple-400" /> Linearity
            </h3>
            <p className="text-sm text-slate-300">
               If the input is a weighted sum of several signals, the output is the same weighted sum of the responses to each individual signal.
            </p>
         </div>

         <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative">
            <div className="absolute top-0 right-0 bg-blue-600/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-bl-lg">Property 2</div>
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
               <Maximize className="w-5 h-5 text-blue-400" /> Shift-Invariance
            </h3>
            <p className="text-sm text-slate-300">
               Translating the input signal simply results in an identically translated output signal, with no other distortion.
            </p>
         </div>
      </div>

      {/* Impulse Response and Convolution */}
      <div className="claude-surface p-8 border-l-4 border-l-pink-500 relative overflow-hidden">
         <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
            <Cpu className="w-6 h-6 text-pink-400" /> Impulse Response (PSF) and Convolution
         </h3>
         <p className="text-slate-300 text-sm leading-relaxed mb-4">
           The output of a system to a point impulse is its <strong>Point Spread Function (PSF)</strong>, denoted <Latex formula="h(x,y)" />. If a system is both linear and shift-invariant, its output for <em>any</em> arbitrary input <Latex formula="f(x,y)" /> can be completely determined by the convolution of the input with the PSF.
         </p>
         <div className="bg-slate-950 p-4 border border-slate-800 rounded text-center mb-4">
            <Latex formula="g(x,y) = h(x,y) * f(x,y) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(\xi, \eta)h(x-\xi, y-\eta) d\xi d\eta" displayMode />
         </div>
         <p className="text-xs text-slate-400">
           <strong>Why this matters:</strong> Treating an imaging system as LSI means we only need to measure its response to a single point source (the PSF) to predict how it will image any complex patient anatomy!
         </p>
      </div>

    </section>
  );
}
