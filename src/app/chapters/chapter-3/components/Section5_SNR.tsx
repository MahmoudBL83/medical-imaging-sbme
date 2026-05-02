import React from 'react';
import { SignalHigh, TrendingUp, Search } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section5_SNR() {
  return (
    <section id="snr" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-teal-400">Section 3.5</span>
        <h2 className="text-3xl font-bold text-white mt-2">Signal-to-Noise Ratio (SNR)</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          The identification of an abnormal condition depends on how "close" an observed value is to its true value. This is quantified by the <strong>Signal-to-Noise Ratio (SNR)</strong>. Higher SNR values indicate a more accurate representation of the signal. Both blurring and noise reduce SNR.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Amplitude SNR */}
        <div className="claude-surface p-8">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <SignalHigh className="w-5 h-5 text-green-400" /> Amplitude SNR
          </h3>
          <div className="bg-slate-900 border border-slate-700 p-4 rounded text-center mb-6">
             <Latex formula="\text{SNR}_a = \frac{\text{Amplitude}(f)}{\text{Amplitude}(N)}" displayMode />
          </div>
          
          <div className="claude-note border-l-green-500 bg-green-950/20 text-green-200 text-sm">
            <strong className="block mb-1 text-green-400">Technical Depth: Poisson SNR</strong>
            In projection radiography, photons follow a Poisson distribution. If <Latex formula="\mu" /> is the average photon count:
            <div className="my-2 bg-slate-950 py-2 border border-green-900/50 rounded text-center">
               <Latex formula="\text{SNR}_a = \frac{\mu}{\sigma} = \frac{\mu}{\sqrt{\mu}} = \sqrt{\mu}" />
            </div>
            Conclusion: Higher x-ray exposure (higher <Latex formula="\mu" />) improves image quality, but increases radiation risk.
          </div>
        </div>

        {/* Power SNR */}
        <div className="claude-surface p-8">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-blue-400" /> Power SNR
          </h3>
          <div className="bg-slate-900 border border-slate-700 p-4 rounded text-center mb-6">
             <Latex formula="\text{SNR}_p = \frac{\text{power}(f)}{\text{power}(N)}" displayMode />
          </div>
          
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
             If the noise is assumed to be <strong>white noise</strong>, the mean is 0 and variance is <Latex formula="\sigma_N^2" /> everywhere. For more complex systems, we use the <strong>Noise Power Spectrum (NPS)</strong>.
          </p>
          <div className="bg-slate-950 py-2 px-3 border border-slate-800 rounded text-xs text-center text-slate-400">
             Frequency-dependent power SNR relates Contrast (MTF), Resolution, and Noise.
          </div>
        </div>
      </div>

      {/* Differential SNR & Rose Model */}
      <div className="claude-panel p-8 bg-gradient-to-br from-slate-900 to-slate-950 border-t-4 border-t-pink-500 mt-8 rounded-xl shadow-2xl">
         <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
            <Search className="w-6 h-6 text-pink-400" /> Differential SNR & The Rose Model
         </h3>
         <p className="text-slate-300 leading-relaxed mb-6">
            Consider a target (e.g., tumor) on a background. We can define SNR by the difference in average intensity integrated over area <Latex formula="A" />:
         </p>
         
         <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-pink-900/50 p-6 rounded-lg text-center flex flex-col justify-center">
               <Latex formula="\text{SNR}_{\text{diff}} = \frac{A(f_t - f_b)}{\sigma_b(A)} = \frac{C A f_b}{\sigma_b(A)}" displayMode />
               <p className="text-xs text-slate-400 mt-4">Relating differential SNR directly to contrast <Latex formula="C" />.</p>
            </div>
            
            <div className="bg-slate-900 border border-pink-900/50 p-6 rounded-lg">
               <h4 className="text-pink-400 font-bold mb-2">The Rose Model</h4>
               <p className="text-sm text-slate-300 mb-4">
                 In radiography, if background photons <Latex formula="\lambda_b" /> follow Poisson statistics, <Latex formula="\sigma_b(A) = \sqrt{\lambda_b A}" />. To achieve a desired SNR:
               </p>
               <div className="bg-slate-950 py-2 border border-slate-800 rounded text-center">
                 <Latex formula="\lambda_b = \frac{\text{SNR}_{\text{diff}}^2}{C^2 A}" displayMode />
               </div>
               <p className="text-[11px] text-pink-300 mt-3 italic">
                 To view small (<Latex formula="A" /> is small), low-contrast (<Latex formula="C" /> is small) objects, incredibly high radiation doses (<Latex formula="\lambda_b" />) are required!
               </p>
            </div>
         </div>
      </div>
    </section>
  );
}
