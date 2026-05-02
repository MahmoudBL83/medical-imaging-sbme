import React from 'react';
import { BookOpen, HelpCircle, AlertCircle } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section4_Practice() {
  return (
    <section id="practice" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-blue-400">Section 2.8</span>
        <h2 className="text-3xl font-bold text-white mt-2">Summary & Exam Practice</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Test your understanding of linear shift-invariant systems, convolution, and Fourier properties.
        </p>
      </header>

      {/* Key Concepts Summary */}
      <div className="border-l-4 border-blue-500 bg-blue-950/20 p-8 rounded-r-xl shadow-lg mb-8">
         <h3 className="text-xl font-bold text-blue-400 flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6" /> Core Takeaways
         </h3>
         <ul className="space-y-3 text-sm text-blue-100">
           <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong>Point Spread Function (PSF):</strong> The response of a system to a single point impulse. It characterizes how much the system blurs an ideal point.</span>
           </li>
           <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong>Convolution:</strong> LSI systems are fully modeled by the convolution of the input signal with the system's PSF. This mathematically smears the input object according to the system's blurring characteristics.</span>
           </li>
           <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span><strong>Fourier Transform:</strong> Converts complex convolution integrals in the spatial domain into simple multiplications in the frequency domain. The FT of the PSF is the Transfer Function.</span>
           </li>
         </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Problem 1 */}
        <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Problem 2.4
           </div>
           <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-teal-400" /> Cascade Systems
           </h3>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             Two LSI systems are connected in cascade with PSFs <Latex formula="h_1(x,y)" /> and <Latex formula="h_2(x,y)" />. Show that the overall system is LSI, and specify its PSF.
           </p>
           <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded text-sm text-slate-400">
             <div className="flex items-center gap-2 mb-2 text-slate-300">
                <AlertCircle className="w-4 h-4 text-teal-400" /> <strong>Solution:</strong>
             </div>
             By the associativity property of convolution, passing signal <Latex formula="f" /> through <Latex formula="h_1" /> then <Latex formula="h_2" /> is equivalent to convolving <Latex formula="f" /> with <Latex formula="(h_1 * h_2)" />. Therefore, the cascade system is LSI, and its overall PSF is exactly <Latex formula="h(x,y) = h_1(x,y) * h_2(x,y)" />.
           </div>
        </div>

        {/* Problem 2 */}
        <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Problem 2.8
           </div>
           <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-blue-400" /> Separable Signals
           </h3>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             Determine whether the signal <Latex formula="f(x,y) = \text{rect}(x-2)\text{sinc}(y)" /> is separable.
           </p>
           <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded text-sm text-slate-400">
             <div className="flex items-center gap-2 mb-2 text-slate-300">
                <AlertCircle className="w-4 h-4 text-blue-400" /> <strong>Solution:</strong>
             </div>
             Yes. A signal is separable if it can be written as <Latex formula="f_1(x)f_2(y)" />. Here, <Latex formula="f_1(x) = \text{rect}(x-2)" /> is solely a function of <Latex formula="x" />, and <Latex formula="f_2(y) = \text{sinc}(y)" /> is solely a function of <Latex formula="y" />.
           </div>
        </div>

      </div>
    </section>
  );
}
