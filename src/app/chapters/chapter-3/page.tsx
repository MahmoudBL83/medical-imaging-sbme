'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Activity, Zap, Maximize, Target, Info, AlertCircle, BarChart3, Scan } from 'lucide-react';
import Latex from '@/components/Latex';
import ExamTip from '@/components/ExamTip';
import FormulaBox from '@/components/FormulaBox';

export default function Chapter3() {
  return (
    <div className="space-y-10 pb-20">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 3: Image Quality</span>
      </div>

      <header className="border-b border-slate-800 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight uppercase">
          Chapter 3: Image Quality
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          The metrics of excellence: Contrast, resolution, noise, and the fundamental tradeoffs of medical imaging.
        </p>
        <div className="flex gap-4 mt-6">
          <span className="bg-amber-950/40 text-amber-400 border border-amber-800/50 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
            <BarChart3 className="w-4 h-4" /> Performance Metrics
          </span>
          <span className="bg-emerald-950/40 text-emerald-400 border border-emerald-800/50 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
            <Scan className="w-4 h-4" /> Diagnostic Accuracy
          </span>
        </div>
      </header>

      {/* Chapter Overview */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-blue-400" /> The Quality Framework
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          An image is only useful if it allows a physician to make an accurate diagnosis. We quantify this utility through four pillars: Contrast (visibility), Resolution (sharpness), Noise (certainty), and SNR (efficiency).
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Contrast', icon: <Activity className="w-5 h-5 text-blue-400" />, desc: 'Signal difference vs. background.' },
            { title: 'Resolution', icon: <Target className="w-5 h-5 text-purple-400" />, desc: 'System blur and FWHM.' },
            { title: 'Noise', icon: <Zap className="w-5 h-5 text-amber-400" />, desc: 'Poisson stats and SNR.' },
            { title: 'Sampling', icon: <Maximize className="w-5 h-5 text-emerald-400" />, desc: 'Nyquist and Aliasing.' },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl hover:border-slate-600 transition-colors cursor-default">
              <div className="flex items-center gap-3 mb-2">
                {item.icon}
                <span className="font-bold text-white">{item.title}</span>
              </div>
              <p className="text-slate-400 text-sm leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3.2 Contrast */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-blue-900/20">3.2</div>
          <h2 className="text-3xl font-bold text-white italic">Contrast & MTF</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Quantifying Contrast</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <FormulaBox 
                  name="Local Contrast"
                  formula={String.raw`C = \frac{f_t - f_b}{f_b}`}
                  intuition="Ratio of target-background difference to the background intensity."
                />
                <FormulaBox 
                  name="Modulation"
                  formula={String.raw`m_f = \frac{f_{max} - f_{min}}{f_{max} + f_{min}}`}
                  intuition="Used for periodic signals (sinusoids). 0 = no contrast, 1 = max contrast."
                />
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4 uppercase tracking-widest">Modulation Transfer Function (MTF)</h3>
              <p className="text-slate-300 text-sm mb-4">
                The MTF describes how a system preserves contrast as spatial frequency increases. Fine details (high frequency) are always blurred more than large structures.
              </p>
              <FormulaBox 
                name="MTF Definition"
                formula={String.raw`MTF(u) = \frac{m_g(u)}{m_f(u)} = \frac{|H(u, 0)|}{H(0, 0)}`}
                intuition="The normalized magnitude of the system's Transfer Function."
              />
            </div>
          </div>

          <aside className="space-y-6">
            <ExamTip type="trap" title="The Constant Bias">
              Adding a constant value <Latex formula="I_c" /> to an image (e.g., scatter) <strong>always reduces contrast</strong> because the denominator <Latex formula="f_b + I_c" /> increases while the numerator remains same.
            </ExamTip>
            
            <div className="bg-slate-800/40 border border-slate-700 p-4 rounded-lg flex flex-col items-center">
              <div className="w-full flex justify-between items-end h-24 px-4">
                <div className="w-4 bg-blue-500/80 h-full rounded-t"></div>
                <div className="w-4 bg-blue-500/60 h-[80%] rounded-t"></div>
                <div className="w-4 bg-blue-500/40 h-[50%] rounded-t"></div>
                <div className="w-4 bg-blue-500/20 h-[20%] rounded-t"></div>
              </div>
              <p className="text-[10px] text-slate-500 mt-2 uppercase font-bold tracking-tighter">Typical MTF Decay</p>
            </div>
          </aside>
        </div>
      </section>

      {/* 3.3 Resolution */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-purple-900/20">3.3</div>
          <h2 className="text-3xl font-bold text-white italic">Resolution & PSF</h2>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white uppercase tracking-widest">Sharpness Metrics</h3>
              <p className="text-slate-300 leading-relaxed">
                Resolution is the minimum distance between two points that allows them to be seen as distinct. It is governed by the system's Point Spread Function (PSF).
              </p>
              <FormulaBox 
                name="Cascaded Resolution"
                formula={String.raw`R_{total} = \sqrt{R_1^2 + R_2^2 + \dots + R_K^2}`}
                intuition="The overall resolution is dominated by the 'weakest link' (the component with the largest FWHM)."
              />
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h4 className="text-purple-400 font-bold text-xs uppercase mb-4">FWHM Definition</h4>
                <p className="text-slate-400 text-xs mb-4 italic">
                  "Full Width at Half Maximum" - The width of the LSF at 50% of its peak amplitude.
                </p>
                <div className="bg-slate-900 p-4 rounded border border-slate-800 text-center">
                  <Latex formula={String.raw`l(x) = \int_{-\infty}^{\infty} h(x, \eta) d\eta`} displayMode />
                  <p className="text-[10px] text-slate-500 mt-2">Line Spread Function derivation from PSF.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.4-3.5 Noise & SNR */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-amber-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-amber-900/20">3.4</div>
          <h2 className="text-3xl font-bold text-white italic">Noise & Signal Statistics</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Quantum Mottle (Poisson)</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                In photon-limited imaging, noise follows a Poisson distribution where the <strong>variance equals the mean</strong>.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <FormulaBox 
                  name="Amplitude SNR"
                  formula={String.raw`SNR_a = \sqrt{\mu}`}
                  intuition="To double the SNR, you must increase the dose (photon count) by 4x."
                />
                <FormulaBox 
                  name="Rose Model SNR"
                  formula={String.raw`SNR_{diff} = C\sqrt{A \lambda_b}`}
                  intuition="SNR is proportional to contrast and the square root of the target area."
                />
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 text-center">
              <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase">The dB Scale</h4>
              <Latex formula={String.raw`SNR(dB) = 20\log_{10}(SNR_a)`} displayMode />
              <p className="text-[10px] text-slate-500 mt-4 italic">6 dB increase = 2x Amplitude SNR.</p>
            </div>
            
            <ExamTip type="remember" title="Variance Addition">
              For independent noise sources, <strong>Variances add</strong> (<Latex formula="\sigma_{total}^2 = \sigma_1^2 + \sigma_2^2" />), not standard deviations.
            </ExamTip>
          </aside>
        </div>
      </section>

      {/* 3.6 Sampling */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-emerald-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-emerald-900/20">3.6</div>
          <h2 className="text-3xl font-bold text-white italic tracking-tighter">Sampling & Nyquist</h2>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 shadow-inner">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-4 uppercase">The Anti-Aliasing Limit</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                To capture a signal with maximum frequency <Latex formula="U" />, the sampling interval <Latex formula="\Delta x" /> must be small enough to avoid frequency overlap (aliasing).
              </p>
              <FormulaBox 
                name="Nyquist Criterion"
                formula={String.raw`\Delta x \le \frac{1}{2U}`}
                intuition="Sample at least twice as fast as the highest frequency component."
              />
            </div>
            <div className="w-full md:w-64 bg-slate-900 border border-slate-800 rounded-xl p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-emerald-400 font-bold text-[10px] uppercase">Aliasing Effect</span>
                <AlertCircle className="w-4 h-4 text-emerald-400 opacity-50" />
              </div>
              <div className="space-y-1">
                {[1, 0.8, 0.6, 0.4, 0.2].map((o, i) => (
                  <div key={i} className="h-2 bg-emerald-500/20 rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-emerald-400/40" style={{ width: `${o * 100}%`, marginLeft: `${(1-o)*50}%` }}></div>
                  </div>
                ))}
              </div>
              <p className="text-[8px] text-slate-500 mt-4 leading-tight">High frequency data 'folds' back into low frequency space when undersampled.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Summary */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl border border-slate-700 p-10 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-widest text-center">Chapter 3 Recap</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm">Key Principles</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Contrast is visibility; Resolution is sharpness.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> MTF is the frequency-domain measure of blur.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> SNR improves with square root of photon count.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Nyquist limit prevents moiré patterns and artifacts.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-orange-400 font-bold uppercase tracking-widest text-sm">Likely Exam Tasks</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Calculate overall FWHM for cascaded systems.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Determine the effect of background on local contrast.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Solve for required dose to achieve a target SNR.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Sketch Sensitivity/Specificity on an ROC curve.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-between pt-10 border-t border-slate-800">
        <Link href="/chapters/chapter-2" className="flex items-center gap-3 text-slate-400 hover:text-white group transition-all">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          <div>
            <div className="text-xs uppercase text-slate-500">Previous</div>
            <div className="font-bold">Chapter 2: Signals & Systems</div>
          </div>
        </Link>
        <Link href="/chapters/chapter-4" className="flex items-center gap-3 text-blue-400 hover:text-white text-right group transition-all">
          <div>
            <div className="text-xs uppercase text-slate-500">Next</div>
            <div className="font-bold">Chapter 4: Physics of Radiography</div>
          </div>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}