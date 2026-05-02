import React from 'react';
import { Waves, Zap, RefreshCw } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section3_Fourier() {
  return (
    <section id="fourier" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-orange-400">Section 2.4 - 2.7</span>
        <h2 className="text-3xl font-bold text-white mt-2">Fourier Transforms & Transfer Functions</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          The Fourier Transform converts a spatial signal <Latex formula="f(x,y)" /> into its frequency representation <Latex formula="F(u,v)" />. By transforming convolution in the spatial domain into multiplication in the frequency domain, it massively simplifies LSI system analysis.
        </p>
      </header>

      {/* The 2-D Fourier Transform */}
      <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl mb-8 relative">
         <h3 className="text-white font-bold mb-3 flex items-center gap-2">
            <Waves className="w-5 h-5 text-orange-400" /> The 2-D Fourier Transform
         </h3>
         <p className="text-sm text-slate-300 mb-4">
           The 2-D continuous Fourier Transform (FT) is defined as:
         </p>
         <div className="bg-slate-950 p-4 rounded border border-slate-800 text-center mb-4">
            <Latex formula="F(u,v) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(x,y) e^{-j2\pi(ux+vy)} dx dy" displayMode />
         </div>
         <p className="text-xs text-slate-400">
           The variables <Latex formula="u" /> and <Latex formula="v" /> are spatial frequencies (e.g., cycles/mm). The Inverse Fourier Transform reconstructs the spatial signal from its frequency components using <Latex formula="e^{+j2\pi(ux+vy)}" />.
         </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
         {/* Properties */}
         <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
               <RefreshCw className="w-5 h-5 text-yellow-400" /> Key FT Properties
            </h3>
            <ul className="space-y-4">
               <li className="bg-slate-900 p-4 border border-slate-800 rounded-lg">
                  <strong className="text-yellow-400 text-sm block mb-1">Scaling Property</strong>
                  <div className="text-xs text-slate-300 mb-1"><Latex formula="f(ax, by) \leftrightarrow \frac{1}{|ab|}F(u/a, v/b)" /></div>
                  <span className="text-xs text-slate-500">Compression in space leads to expansion in frequency.</span>
               </li>
               <li className="bg-slate-900 p-4 border border-slate-800 rounded-lg">
                  <strong className="text-yellow-400 text-sm block mb-1">Shift & Modulation</strong>
                  <div className="text-xs text-slate-300 mb-1"><Latex formula="f(x-x_0, y-y_0) \leftrightarrow F(u,v)e^{-j2\pi(ux_0+vy_0)}" /></div>
                  <span className="text-xs text-slate-500">A translation in space adds a linear phase shift in frequency.</span>
               </li>
            </ul>
         </div>

         {/* Transfer Function */}
         <div className="claude-surface p-6 border-l-4 border-l-orange-500">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
               <Zap className="w-5 h-5 text-orange-400" /> Transfer Function & Convolution Theorem
            </h3>
            <p className="text-sm text-slate-300 mb-4">
               The Convolution Theorem states that convolution in the spatial domain is equivalent to multiplication in the frequency domain:
            </p>
            <div className="bg-slate-900 p-3 rounded text-center mb-4 text-orange-200">
               <Latex formula="h(x,y) * f(x,y) \longleftrightarrow H(u,v) \cdot F(u,v)" displayMode />
            </div>
            <p className="text-sm text-slate-300">
               <Latex formula="H(u,v)" />, the Fourier Transform of the PSF <Latex formula="h(x,y)" />, is called the <strong>Transfer Function</strong>. For imaging systems, the normalized magnitude of the transfer function is the Modulation Transfer Function (MTF).
            </p>
         </div>
      </div>

      {/* Fourier Transform Tables */}
      <div className="claude-panel p-8 bg-slate-900 border border-slate-700 rounded-xl relative overflow-x-auto">
         <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
            <Waves className="w-5 h-5 text-blue-400" /> Selected Fourier Transform Pairs (Table 2.1)
         </h3>
         <table className="w-full text-left text-sm text-slate-300 border-collapse">
            <thead>
               <tr className="border-b border-slate-700 text-slate-400">
                  <th className="pb-3 font-semibold">Signal <Latex formula="f(x,y)" /></th>
                  <th className="pb-3 font-semibold">Fourier Transform <Latex formula="F(u,v)" /></th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
               <tr>
                  <td className="py-3"><Latex formula="\text{rect}(x,y)" /></td>
                  <td className="py-3"><Latex formula="\text{sinc}(u,v)" /></td>
               </tr>
               <tr>
                  <td className="py-3"><Latex formula="\text{sinc}(x,y)" /></td>
                  <td className="py-3"><Latex formula="\text{rect}(u,v)" /></td>
               </tr>
               <tr>
                  <td className="py-3"><Latex formula="\text{comb}(x,y)" /></td>
                  <td className="py-3"><Latex formula="\text{comb}(u,v)" /></td>
               </tr>
               <tr>
                  <td className="py-3"><Latex formula="\exp(-\pi(x^2+y^2))" /></td>
                  <td className="py-3"><Latex formula="\exp(-\pi(u^2+v^2))" /></td>
               </tr>
               <tr>
                  <td className="py-3"><Latex formula="\delta(x-x_0, y-y_0)" /></td>
                  <td className="py-3"><Latex formula="\exp(-j2\pi(ux_0+vy_0))" /></td>
               </tr>
               <tr>
                  <td className="py-3"><Latex formula="\exp(j2\pi(u_0x+v_0y))" /></td>
                  <td className="py-3"><Latex formula="\delta(u-u_0, v-v_0)" /></td>
               </tr>
               <tr>
                  <td className="py-3"><Latex formula="\cos(2\pi(u_0x+v_0y))" /></td>
                  <td className="py-3"><Latex formula="\frac{1}{2}[\delta(u-u_0, v-v_0) + \delta(u+u_0, v+v_0)]" /></td>
               </tr>
               <tr>
                  <td className="py-3"><Latex formula="\sin(2\pi(u_0x+v_0y))" /></td>
                  <td className="py-3"><Latex formula="\frac{1}{2j}[\delta(u-u_0, v-v_0) - \delta(u+u_0, v+v_0)]" /></td>
               </tr>
            </tbody>
         </table>
      </div>

    </section>
  );
}
