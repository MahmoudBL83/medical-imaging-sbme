'use client';

import Link from 'next/link';
import Latex from '@/components/Latex';
import { Sparkles, Activity, Radar, Target, Sigma, Cpu, BookOpen } from 'lucide-react';

export default function HighYield() {
  return (
    <div className="pb-20 fade-up max-w-[1400px] mx-auto">
      <div className="flex items-center gap-4 text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">High-Yield Review</span>
      </div>

      <header className="border-b border-slate-800 pb-8 mb-12 stagger">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-8 h-8 text-amber-400" />
          <h1 className="text-5xl font-extrabold text-white tracking-tight">High-Yield Exam Review</h1>
        </div>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          The absolute must-know concepts, specifically tailored for what professors love to test on exams. Watch out for the "Doctor's Traps".
        </p>
      </header>

      <div className="space-y-8 stagger">
        
        {/* Chapter 1 */}
        <div className="claude-surface border-l-4 border-l-orange-500 rounded-xl p-6 shadow-lg hover:border-slate-600 transition-colors">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-orange-400" /> Chapter 1: Intro to Medical Imaging
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg">
              <h3 className="text-orange-400 font-semibold mb-3">Core Foundations</h3>
              <ul className="text-slate-300 text-sm space-y-3">
                <li>• <strong>Modality Trade-offs:</strong> No single modality is perfect. X-ray is fast/cheap but uses ionizing radiation. MRI has excellent soft tissue contrast but is slow/expensive.</li>
                <li>• <strong>Point Spread Function (PSF):</strong> The impulse response of a 2D imaging system. It dictates the spatial resolution. A wider PSF means a blurrier image.</li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-900/40 text-red-400 text-[10px] font-bold px-2 py-1 rounded-bl-lg">EXAM TRAP</div>
              <h3 className="text-orange-400 font-semibold mb-3">Doctor's Trap 🚨</h3>
              <ul className="text-slate-300 text-sm space-y-3">
                <li>• <em>Trap:</em> Claiming Ultrasound or MRI uses ionizing radiation. False!</li>
                <li>• You must know how to prove if an operation is Linear and Shift-Invariant. If it has a constant offset (e.g., <Latex formula="f(x) + 2" />), it is <strong>non-linear</strong>.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chapter 2 */}
        <div className="claude-surface border-l-4 border-l-blue-500 rounded-xl p-6 shadow-lg hover:border-slate-600 transition-colors">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Activity className="w-6 h-6 text-blue-400" /> Chapter 2: Signals and Systems <span className="text-xs bg-red-900/50 text-red-400 px-2 py-1 rounded ml-2">HIGHEST YIELD</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg">
              <h3 className="text-blue-400 font-semibold mb-3">Mathematical Absolutes</h3>
              <ul className="text-slate-300 text-sm space-y-3">
                <li>• <strong>Sifting Property:</strong> <Latex formula="\int f(x)\delta(x-a)dx = f(a)" />. Always tests your understanding of the Delta function.</li>
                <li>• <strong>Fourier Pair:</strong> <Latex formula="\text{rect}(x) \leftrightarrow \text{sinc}(u)" />. If you input a box, you get a rippling sinc wave in frequency.</li>
                <li>• <strong>Convolution Theorem:</strong> <Latex formula="f(x) * h(x) \leftrightarrow F(u) \cdot H(u)" />. Blurring in space equals filtering in frequency.</li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-900/40 text-red-400 text-[10px] font-bold px-2 py-1 rounded-bl-lg">EXAM TRAP</div>
              <h3 className="text-blue-400 font-semibold mb-3">Doctor's Trap 🚨</h3>
              <ul className="text-slate-300 text-sm space-y-3">
                <li>• Expect to calculate the Fourier transform of simple functions manually.</li>
                <li>• <em>Trap:</em> Forgetting that Convolution is commutative: <Latex formula="f*g = g*f" />. Don't waste time integrating the complex function when you can flip the simple one!</li>
                <li>• <em>Trap:</em> Confusing the frequency scaling property: <Latex formula="f(ax) \leftrightarrow \frac{1}{|a|} F(u/a)" />. Compressing in space expands in frequency!</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chapter 3 */}
        <div className="claude-surface border-l-4 border-l-teal-500 rounded-xl p-6 shadow-lg hover:border-slate-600 transition-colors">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Radar className="w-6 h-6 text-teal-400" /> Chapter 3: Image Quality
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg">
              <h3 className="text-teal-400 font-semibold mb-3">The Four Pillars</h3>
              <ul className="text-slate-300 text-sm space-y-3">
                <li>• <strong>Contrast:</strong> Signal diff / Background. (<Latex formula="C = \Delta S / S" />).</li>
                <li>• <strong>Resolution:</strong> Measured by FWHM of the PSF, or the MTF.</li>
                <li>• <strong>Noise:</strong> Assumed Poisson. Variance equals Mean (<Latex formula="\sigma^2 = \bar{N}" />).</li>
                <li>• <strong>SNR:</strong> <Latex formula="S/\sigma = \sqrt{\bar{N}}" />.</li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-900/40 text-red-400 text-[10px] font-bold px-2 py-1 rounded-bl-lg">EXAM TRAP</div>
              <h3 className="text-teal-400 font-semibold mb-3">Doctor's Trap 🚨</h3>
              <ul className="text-slate-300 text-sm space-y-3">
                <li>• <em>Trap:</em> Thinking doubling the radiation dose doubles the SNR. It only increases SNR by <Latex formula="\sqrt{2}" /> (~1.41x). You must quadruple dose to double SNR!</li>
                <li>• <strong>Rose Criterion:</strong> A human needs <Latex formula="SNR \ge 5" /> to confidently detect an object. Don't accept <Latex formula="SNR = 3" /> on an exam question!</li>
                <li>• <strong>Nyquist Sampling:</strong> Must sample at <Latex formula="f_s \ge 2f_{max}" /> to avoid Moiré patterns.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chapters 4 & 5 */}
        <div className="claude-surface border-l-4 border-l-indigo-500 rounded-xl p-6 shadow-lg hover:border-slate-600 transition-colors">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-indigo-400" /> Chapters 4 & 5: X-Ray Physics & Radiography
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
              <h3 className="text-indigo-400 font-semibold mb-2">Interactions</h3>
              <p className="text-sm text-slate-300 mb-2"><strong>Photoelectric:</strong> Absorbs photon completely. <Latex formula="\propto Z^4/E^3" />. Gives bone its white contrast!</p>
              <p className="text-sm text-slate-300"><strong>Compton Scatter:</strong> Photon deflected. <Latex formula="\propto \text{Electron Density}" />. Creates fog/noise.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
              <h3 className="text-indigo-400 font-semibold mb-2">X-Ray Production</h3>
              <p className="text-sm text-slate-300 mb-2"><strong>Bremsstrahlung:</strong> Braking radiation. Continuous spectrum. 99% Heat, 1% X-rays.</p>
              <p className="text-sm text-slate-300"><strong>Characteristic:</strong> Discrete spikes. Outer electron fills inner hole.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-900/40 text-red-400 text-[10px] font-bold px-2 py-1 rounded-bl-lg">EXAM TRAP</div>
              <h3 className="text-indigo-400 font-semibold mb-2">Doctor's Trap 🚨</h3>
              <p className="text-sm text-slate-300 mb-2"><em>Trap:</em> Geometric Magnification <Latex formula="m = SID/SOD" />. Don't confuse SOD with OID!</p>
              <p className="text-sm text-slate-300">Remember: <Latex formula="SID = SOD + OID" />. To minimize blur (penumbra), use a large SID and very small OID.</p>
            </div>
          </div>
        </div>

        {/* Chapter 6 */}
        <div className="claude-surface border-l-4 border-l-purple-500 rounded-xl p-6 shadow-lg hover:border-slate-600 transition-colors">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Sigma className="w-6 h-6 text-purple-400" /> Chapter 6: Computed Tomography
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg">
              <h3 className="text-purple-400 font-semibold mb-3">Reconstruction Math</h3>
              <ul className="text-slate-300 text-sm space-y-3">
                <li>• <strong>Radon Transform:</strong> The forward process of acquiring 1D projections (sinogram) from a 2D object.</li>
                <li>• <strong>Filtered Backprojection:</strong> You MUST filter projections with a Ramp Filter (<Latex formula="|\omega|" />) before smearing them back to fix the 1/r starburst blur.</li>
                <li>• <strong>Hounsfield Units:</strong> Scale where Water = 0, Air = -1000.</li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-900/40 text-red-400 text-[10px] font-bold px-2 py-1 rounded-bl-lg">EXAM TRAP</div>
              <h3 className="text-purple-400 font-semibold mb-3">Doctor's Trap 🚨</h3>
              <ul className="text-slate-300 text-sm space-y-3">
                <li>• <em>Trap:</em> "Beam hardening is caused by high-energy photons being absorbed." False! It's because low-energy photons are absorbed first, shifting the mean beam energy higher (harder). This causes dark cupping artifacts.</li>
                <li>• Know your CT Generations. Ring artifacts are strictly a 3rd Generation (Rotate-Rotate) problem.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chapters 7-9 */}
        <div className="claude-surface border-l-4 border-l-emerald-500 rounded-xl p-6 shadow-lg hover:border-slate-600 transition-colors">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-emerald-400" /> Chapters 7-9: Nuclear Medicine & Emission CT
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
              <h3 className="text-emerald-400 font-semibold mb-2">Decay Physics</h3>
              <p className="text-sm text-slate-300 mb-2"><strong>Decay Law:</strong> <Latex formula="N_t = N_0 e^{-\lambda t}" /> where <Latex formula="\lambda = 0.693 / T_{1/2}" />.</p>
              <p className="text-sm text-slate-300"><strong>Positron (<Latex formula="\beta^+" />):</strong> Annihilates with electron → two 511 keV <Latex formula="\gamma" /> rays at ~180°.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
              <h3 className="text-emerald-400 font-semibold mb-2">Anger Camera & SPECT</h3>
              <p className="text-sm text-slate-300 mb-2">Uses physical <strong>Lead Collimators</strong> (terrible sensitivity, absorbs 99.9%) to form images.</p>
              <p className="text-sm text-slate-300">SPECT is just an Anger camera rotating around the patient.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-900/40 text-red-400 text-[10px] font-bold px-2 py-1 rounded-bl-lg">EXAM TRAP</div>
              <h3 className="text-emerald-400 font-semibold mb-2">Doctor's Trap 🚨</h3>
              <p className="text-sm text-slate-300 mb-2"><em>Trap:</em> "PET uses collimators." False! PET uses <strong>Electronic Collimation</strong> (coincidence timing). This makes PET roughly 100x more sensitive than SPECT!</p>
              <p className="text-sm text-slate-300"><em>Trap:</em> Effective half-life is always shorter than both biological and physical half-lives.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}