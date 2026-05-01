'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Activity, Zap, Maximize, Target } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Chapter3() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 3: Image Quality</span>
      </div>

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Chapter 3: Image Quality</h1>
        <p className="text-xl text-slate-400">Contrast, Resolution, Noise, SNR, Sampling, Artifacts, and Accuracy</p>
        <div className="flex gap-4 mt-4">
          <span className="bg-purple-900/50 text-purple-300 border border-purple-700 px-3 py-1 rounded-full text-sm">Foundational</span>
          <span className="bg-amber-900/50 text-amber-300 border border-amber-700 px-3 py-1 rounded-full text-sm">Applies to All Modalities</span>
        </div>
      </header>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        <h2 className="text-xl font-bold text-white mb-4">3.1 Introduction</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          The primary purpose of a medical imaging system is to create images of the internal structures and functions of the human body for diagnosis and treatment. The quality of these images determines whether a medical professional can successfully accomplish their goals.
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
          {[
            { title: 'Contrast', desc: 'Visibility of differences', icon: <Activity className="w-4 h-4 text-blue-400" /> },
            { title: 'Resolution', desc: 'Small detail sharpness', icon: <Target className="w-4 h-4 text-purple-400" /> },
            { title: 'Noise', desc: 'Random variation', icon: <Zap className="w-4 h-4 text-emerald-400" /> },
            { title: 'SNR', desc: 'Signal vs noise', icon: <Maximize className="w-4 h-4 text-amber-400" /> },
            { title: 'Artifacts', desc: 'False features', icon: <Activity className="w-4 h-4 text-red-400" /> },
            { title: 'Accuracy', desc: 'Conformity to truth', icon: <Target className="w-4 h-4 text-indigo-400" /> },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800 border border-slate-700 p-3 rounded-lg flex flex-col items-center text-center">
              {item.icon}
              <div className="text-white font-semibold text-sm mt-2">{item.title}</div>
              <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3.2: Contrast */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-slate-800 bg-slate-800/50">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">3.2</span>
            Contrast
          </h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-950/30 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-bold text-blue-400 mb-2 uppercase tracking-wider">Simple Intuition</h4>
            <p className="text-slate-300 leading-relaxed">
              Contrast is the "difference" between bright and dark in an image. Without contrast, you can't distinguish a target (like a tumor) from the background (like healthy liver tissue). High contrast means it's easy to tell things apart.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg">
            <h4 className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider">Visual Explanation: Contrast Levels</h4>
            <div className="flex items-center justify-center gap-6 py-4">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#222] border border-slate-700 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#333] rounded-full"></div>
                </div>
                <p className="text-slate-400 text-xs mt-2 font-medium">Low Contrast</p>
              </div>
              <div className="text-slate-600">→</div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#111] border border-slate-700 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#888] rounded-full"></div>
                </div>
                <p className="text-slate-400 text-xs mt-2 font-medium">Medium Contrast</p>
              </div>
              <div className="text-slate-600">→</div>
              <div className="text-center">
                <div className="w-20 h-20 bg-black border border-slate-700 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <p className="text-slate-400 text-xs mt-2 font-medium">High Contrast</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-950/30 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-bold text-emerald-400 mb-4 uppercase tracking-wider">Technical Depth</h4>
            <div className="space-y-6">
              
              <div>
                <h5 className="text-white font-semibold mb-2">3.2.1 Modulation</h5>
                <p className="text-slate-300 text-sm mb-3">
                  For periodic signals (like sine waves), contrast is quantified using <strong>modulation</strong> ($m_f$), which measures the relative amplitude compared to the average background:
                </p>
                <div className="bg-slate-900 p-4 rounded border border-slate-700 flex justify-center items-center">
                  <Latex formula={String.raw`m_f = \frac{f_{max} - f_{min}}{f_{max} + f_{min}}`} displayMode />
                </div>
                <p className="text-slate-400 text-xs mt-2">Where <Latex formula="0 \le m_f \le 1" />. If <Latex formula="m_f = 0" />, there is no contrast. Nonzero background always reduces modulation.</p>
              </div>

              <div>
                <h5 className="text-white font-semibold mb-2">3.2.2 Modulation Transfer Function (MTF)</h5>
                <p className="text-slate-300 text-sm mb-3">
                  A system alters contrast depending on the spatial frequency <Latex formula="u" /> of the object. The ratio of the output modulation <Latex formula="m_g" /> to the input modulation <Latex formula="m_f" /> is the MTF:
                </p>
                <div className="bg-slate-900 p-4 rounded border border-slate-700 flex justify-center items-center">
                  <Latex formula={String.raw`MTF(u) = \frac{m_g}{m_f} = \frac{|H(u, 0)|}{H(0, 0)}`} displayMode />
                </div>
                <p className="text-slate-400 text-xs mt-2">MTF typically starts at 1.0 (for frequency 0) and drops toward 0 at high frequencies (blurring reduces contrast for fine details).</p>
              </div>

              <div>
                <h5 className="text-white font-semibold mb-2">3.2.3 Local Contrast</h5>
                <p className="text-slate-300 text-sm mb-3">
                  For isolated targets (like a tumor) on a background, we use <strong>local contrast</strong> (<Latex formula="C" />). If <Latex formula="f_t" /> is target intensity and <Latex formula="f_b" /> is background intensity:
                </p>
                <div className="bg-slate-900 p-4 rounded border border-slate-700 flex justify-center items-center">
                  <Latex formula={String.raw`C = \frac{f_t - f_b}{f_b}`} displayMode />
                </div>
              </div>

            </div>
          </div>

          <div className="bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-bold text-amber-400 mb-2 uppercase tracking-wider">Exam Focus: Doctor's Style</h4>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• <strong>Trap:</strong> Adding a constant intensity <Latex formula="I_c" /> to an image <em>reduces</em> local contrast: <Latex formula="C' = \frac{(I_t - I_b)}{(I_b + I_c)} < C" />.</li>
              <li>• <strong>Application:</strong> Be prepared to calculate MTF given an input sine wave and the resulting output sine wave amplitude.</li>
              <li>• <strong>Sketching:</strong> Know how to draw an MTF curve. It monotonically decreases. A system with an MTF curve that drops off later has better high-frequency contrast.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3.3: Resolution */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-slate-800 bg-slate-800/50">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="bg-purple-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">3.3</span>
            Resolution
          </h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-950/30 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-slate-300 leading-relaxed">
              Resolution is the ability of the system to depict two distinct events in space (or time/frequency) as separate. It measures the "blur" introduced by the system.
            </p>
          </div>

          <div className="bg-emerald-950/30 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-bold text-emerald-400 mb-4 uppercase tracking-wider">Technical Depth</h4>
            <div className="space-y-6">
              
              <div>
                <h5 className="text-white font-semibold mb-2">3.3.1 Line Spread Function (LSF)</h5>
                <p className="text-slate-300 text-sm mb-3">
                  The LSF <Latex formula="l(x)" /> is the 1D profile of the system's response to an infinitely thin line source <Latex formula="\delta(x)" />. It is derived from the 2D Point Spread Function (PSF) <Latex formula="h(x,y)" />:
                </p>
                <div className="bg-slate-900 p-4 rounded border border-slate-700 flex justify-center items-center">
                  <Latex formula={String.raw`l(x) = \int h(x, \eta) d\eta`} displayMode />
                </div>
              </div>

              <div>
                <h5 className="text-white font-semibold mb-2">3.3.2 Full Width at Half Maximum (FWHM)</h5>
                <p className="text-slate-300 text-sm mb-3">
                  FWHM is the width of the LSF (or PSF) at one-half of its maximum value. It defines the minimum distance two points must be separated to be distinguishable. A smaller FWHM means better resolution.
                </p>
                <div className="h-32 mt-4 relative bg-slate-800 rounded flex items-end justify-center border border-slate-700 p-4">
                   {/* Mock Gaussian Curve */}
                   <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                     <path d="M 10 90 Q 70 90 90 50 T 100 10 T 110 50 T 190 90" fill="none" stroke="#a855f7" strokeWidth="3" />
                     <line x1="78" y1="50" x2="122" y2="50" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4" />
                     <text x="100" y="45" fill="#f43f5e" fontSize="10" textAnchor="middle">FWHM</text>
                     <line x1="100" y1="10" x2="100" y2="90" stroke="#64748b" strokeWidth="1" />
                   </svg>
                </div>
              </div>

              <div>
                <h5 className="text-white font-semibold mb-2">3.3.3 Resolution and MTF & 3.3.4 Subsystem Cascade</h5>
                <p className="text-slate-300 text-sm mb-3">
                  The MTF is the normalized 1D Fourier transform of the LSF: <Latex formula="MTF(u) = \frac{|L(u)|}{L(0)}" />.
                  <br/><br/>
                  When a system has multiple blurring stages (e.g., source blur, detector blur), they act as a cascade of linear shift-invariant (LSI) subsystems. The overall FWHM <Latex formula="R" /> can be approximated from individual FWHMs (<Latex formula="R_1, R_2, \dots" />):
                </p>
                <div className="bg-slate-900 p-4 rounded border border-slate-700 flex justify-center items-center">
                  <Latex formula={String.raw`R = \sqrt{R_1^2 + R_2^2 + \dots + R_K^2}`} displayMode />
                </div>
                <p className="text-slate-400 text-xs mt-2">Because of the square root of squares, the overall resolution is dominated by the WORST (largest) individual FWHM.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 3.4: Noise */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-slate-800 bg-slate-800/50">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="bg-emerald-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">3.4</span>
            Noise
          </h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-950/30 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-slate-300 leading-relaxed">
              Noise represents random fluctuations in image intensity that do not contribute to image quality. In X-ray/nuclear medicine, it often comes from the discrete nature of photon arrival (quantum mottle).
            </p>
          </div>

          <div className="bg-emerald-950/30 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-bold text-emerald-400 mb-4 uppercase tracking-wider">Technical Depth</h4>
            <div className="space-y-6">
              
              <div>
                <h5 className="text-white font-semibold mb-2">3.4.1 - 3.4.3 Random Variables & Poisson Distribution</h5>
                <p className="text-slate-300 text-sm mb-3">
                  Noise is treated as a random variable with a mean (<Latex formula="\mu" />) and standard deviation (<Latex formula="\sigma" />). In imaging, photon counting follows a <strong>Poisson Random Variable</strong> where the mean equals the variance:
                </p>
                <div className="bg-slate-900 p-4 rounded border border-slate-700 flex flex-col items-center gap-2">
                  <Latex formula={String.raw`Pr[N = k] = \frac{a^k e^{-a}}{k!}`} displayMode />
                  <Latex formula={String.raw`\mu_N = a, \quad \sigma_N^2 = a`} displayMode />
                </div>
              </div>

              <div>
                <h5 className="text-white font-semibold mb-2">3.4.4 Independent Random Variables</h5>
                <p className="text-slate-300 text-sm mb-3">
                  When adding independent noise sources (like photons from different areas), their <em>variances</em> add, not their standard deviations:
                </p>
                <div className="bg-slate-900 p-4 rounded border border-slate-700 flex justify-center items-center">
                  <Latex formula={String.raw`\sigma_S^2 = \sigma_1^2 + \sigma_2^2 + \dots + \sigma_m^2`} displayMode />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 3.5: SNR */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-slate-800 bg-slate-800/50">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="bg-amber-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">3.5</span>
            Signal-to-Noise Ratio (SNR)
          </h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-emerald-950/30 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-bold text-emerald-400 mb-4 uppercase tracking-wider">Technical Depth</h4>
            
            <div className="space-y-6">
              <div>
                <h5 className="text-white font-semibold mb-2">3.5.1 Amplitude SNR</h5>
                <p className="text-slate-300 text-sm mb-3">
                  For a Poisson process (like x-ray detection), the signal is the mean photon count <Latex formula="\mu" />, and noise is the standard deviation <Latex formula="\sigma = \sqrt{\mu}" />.
                </p>
                <div className="bg-slate-900 p-4 rounded border border-slate-700 flex justify-center items-center">
                  <Latex formula={String.raw`SNR_a = \frac{\mu}{\sigma} = \frac{\mu}{\sqrt{\mu}} = \sqrt{\mu}`} displayMode />
                </div>
                <p className="text-slate-400 text-xs mt-2">To double the SNR, you must quadruple the photon count (dose).</p>
              </div>

              <div>
                <h5 className="text-white font-semibold mb-2">3.5.2 & 3.5.3 Power SNR & Differential SNR</h5>
                <p className="text-slate-300 text-sm mb-3">
                  Power SNR is the ratio of signal power to noise power. Differential SNR relates SNR to contrast <Latex formula="C" />. If detecting a target area <Latex formula="A" /> with background count <Latex formula="\lambda_b" />, the Rose Model states:
                </p>
                <div className="bg-slate-900 p-4 rounded border border-slate-700 flex justify-center items-center">
                  <Latex formula={String.raw`SNR_{diff} \approx C \sqrt{A \lambda_b}`} displayMode />
                </div>
              </div>

              <div>
                <h5 className="text-white font-semibold mb-2">3.5.4 Decibels</h5>
                <div className="bg-slate-900 p-4 rounded border border-slate-700 flex justify-center items-center">
                  <Latex formula={String.raw`SNR (dB) = 20 \log_{10}(SNR_{amplitude})`} displayMode />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3.6: Sampling */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-slate-800 bg-slate-800/50">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="bg-rose-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">3.6</span>
            Sampling
          </h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-emerald-950/30 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-bold text-emerald-400 mb-4 uppercase tracking-wider">Technical Depth</h4>
            
            <div className="space-y-6">
              <div>
                <h5 className="text-white font-semibold mb-2">3.6.1 & 3.6.2 Nyquist Sampling Theorem</h5>
                <p className="text-slate-300 text-sm mb-3">
                  To capture a band-limited continuous signal with maximum spatial frequency <Latex formula="U" />, the sampling interval <Latex formula="\Delta x" /> must satisfy the Nyquist criterion to avoid <strong>aliasing</strong>:
                </p>
                <div className="bg-slate-900 p-4 rounded border border-slate-700 flex justify-center items-center">
                  <Latex formula={String.raw`\Delta x \le \frac{1}{2U}`} displayMode />
                </div>
              </div>

              <div>
                <h5 className="text-white font-semibold mb-2">3.6.3 Anti-Aliasing Filters</h5>
                <p className="text-slate-300 text-sm">
                  If the sampling rate cannot be increased, the signal must be low-pass filtered (blurred) <em>before</em> sampling to remove frequencies above the Nyquist limit. In digital detectors, the physical area of the detector element acts as a natural boxcar (rect) anti-aliasing filter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections 3.7 & 3.8: Other Effects and Accuracy */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-slate-800 bg-slate-800/50">
          <h2 className="text-2xl font-bold text-white">3.7 & 3.8 Other Effects & Accuracy</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <h4 className="text-white font-semibold mb-2">3.7 Artifacts & Distortion</h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• <strong>Artifacts:</strong> Features that don't exist in the patient (e.g. motion streaks in CT, beam hardening, ring artifacts from dead detectors).</li>
                <li>• <strong>Size/Shape Distortion:</strong> Diverging beams (like X-ray) cause magnification. Objects further from the detector look larger.</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <h4 className="text-white font-semibold mb-2">3.8 Accuracy (Sensitivity & Specificity)</h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• <strong>Sensitivity (True Positive Fraction):</strong> <Latex formula="\frac{a}{a+c}" /> - fraction of diseased patients correctly identified.</li>
                <li>• <strong>Specificity (True Negative Fraction):</strong> <Latex formula="\frac{d}{b+d}" /> - fraction of healthy patients correctly identified.</li>
                <li>• <strong>ROC Curve:</strong> Plots Sensitivity vs (1 - Specificity) across different detection thresholds.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Summary */}
      <section className="bg-gradient-to-r from-purple-900 to-slate-900 rounded-xl border border-purple-800 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📋 Chapter 3 Summary & Review</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-blue-400 font-semibold mb-2">Key Equations</h3>
            <ul className="text-slate-300 text-sm space-y-3 font-mono">
              <li>• <Latex formula={String.raw`C = \frac{f_t - f_b}{f_b}`} /></li>
              <li>• <Latex formula={String.raw`MTF(u) = \frac{|L(u)|}{L(0)}`} /></li>
              <li>• <Latex formula={String.raw`SNR = \sqrt{\mu}`} /> (Poisson)</li>
              <li>• <Latex formula={String.raw`R_{total} = \sqrt{R_1^2 + R_2^2 + \dots + R_K^2}`} /></li>
              <li>• <Latex formula={String.raw`\Delta x \le \frac{1}{2U}`} /> (Nyquist)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-amber-400 font-semibold mb-2">Doctor's Style Questions</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• <em>Analytical:</em> Given two cascaded systems with Gaussian PSFs, derive the overall system FWHM.</li>
              <li>• <em>Derivation:</em> Prove why the differential SNR improves by the square root of the dose increase.</li>
              <li>• <em>Sketching:</em> Draw the spatial frequency spectrum of an undersampled signal and label the aliased components.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-between">
        <Link href="/chapters/chapter-2" className="flex items-center gap-2 text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" /> Chapter 2: Signals & Systems
        </Link>
        <Link href="/chapters/chapter-4" className="flex items-center gap-2 text-blue-400 hover:text-white">
          Chapter 4: Physics of Radiography <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}