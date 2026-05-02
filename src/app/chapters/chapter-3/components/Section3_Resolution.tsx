import React from 'react';
import { Layers, Maximize, Activity } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section3_Resolution() {
  return (
    <section id="resolution" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-teal-400">Section 3.3</span>
        <h2 className="text-3xl font-bold text-white mt-2">Resolution</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Resolution is the ability of a medical imaging system to accurately depict two distinct events in space, time, or frequency as separate. A high resolution medical imaging system is characterized by low smearing, whereas a low resolution system is characterized by high smearing.
        </p>
      </header>

      {/* Line Spread Function */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <Layers className="w-6 h-6 text-blue-400" /> Line Spread Function (LSF)
        </h3>
        
        <div className="claude-surface p-8">
          <p className="text-slate-300 leading-relaxed mb-6">
            Instead of a point source (which gives the Point Spread Function, PSF), we can characterize resolution using a line source <Latex formula="f(x, y) = \delta(x)" />. The output <Latex formula="g(x, y)" /> is only a function of <Latex formula="x" />, called the <strong>Line Spread Function</strong> <Latex formula="l(x)" />:
          </p>
          
          <div className="bg-slate-900 border border-blue-900/50 p-6 rounded-lg text-center mb-6">
            <Latex formula="l(x) = \int_{-\infty}^{\infty} h(x, \eta) d\eta" displayMode />
          </div>

          <p className="text-slate-300 leading-relaxed">
            Because the PSF is normalized to 1, the LSF is also normalized to 1. The 1-D Fourier transform <Latex formula="L(u)" /> of the LSF equals the transfer function along the horizontal axis: <Latex formula="L(u) = H(u, 0)" />.
          </p>
        </div>
      </div>

      {/* FWHM */}
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 mt-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <Maximize className="w-6 h-6 text-indigo-400" /> Full Width at Half Maximum
          </h3>
          <p className="text-slate-300 leading-relaxed">
            The <strong>FWHM</strong> is the full width of the LSF (or PSF) at one-half its maximum value. Provided there is no geometric scaling, the FWHM equals the minimum distance that two lines (or points) must be separated in space to appear as separate in the recorded image.
          </p>
          
          <div className="claude-note border-l-indigo-500 bg-indigo-950/20 text-indigo-200 mt-4 text-sm">
             <strong className="block mb-1">Mathematical Depth: FWHM from MTF</strong>
             If <Latex formula="\text{MTF}(u) = e^{-\pi u^2}" />, the inverse Fourier transform gives the LSF <Latex formula="l(x) = e^{-\pi x^2}" />. To find FWHM, set <Latex formula="l(x_0) = 1/2" />:
             <div className="mt-2 text-center bg-slate-900 py-2 border border-slate-700 rounded">
               <Latex formula="\text{FWHM} = 2x_0 = 2\sqrt{\frac{\ln 2}{\pi}}" />
             </div>
          </div>
        </div>

        {/* System Cascades */}
        <div className="claude-panel p-6 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 rounded-xl flex flex-col justify-center">
          <h4 className="text-lg font-bold text-slate-300 mb-4 flex items-center gap-2">
             <Activity className="w-5 h-5 text-slate-400" /> Subsystem Cascade
          </h4>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed">
            When multiple subsystems are cascaded, the overall FWHM <Latex formula="R" /> is approximately the root-sum-square of the individual FWHMs (exact for Gaussian PSFs):
          </p>
          <div className="bg-slate-950 p-3 rounded border border-slate-800 text-center">
            <Latex formula="R = \sqrt{R_1^2 + R_2^2 + \dots + R_K^2}" displayMode />
          </div>
          <p className="text-[11px] text-slate-500 mt-4 italic">
            The overall FWHM is dominated by the poorest resolution subsystem.
          </p>
        </div>
      </div>
    </section>
  );
}
