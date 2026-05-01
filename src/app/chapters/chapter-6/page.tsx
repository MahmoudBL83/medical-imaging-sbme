'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Zap, Target, Activity, Info, Settings, Maximize, Layers, AlertCircle } from 'lucide-react';
import Latex from '@/components/Latex';
import ExamTip from '@/components/ExamTip';
import FormulaBox from '@/components/FormulaBox';

export default function Chapter6() {
  return (
    <div className="space-y-10 pb-20">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 6: Computed Tomography</span>
      </div>

      <header className="border-b border-slate-800 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight uppercase">
          Chapter 6: Computed Tomography
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          From line integrals to cross-sectional slices. The physics of scanners and the mathematics of the Radon transform.
        </p>
        <div className="flex gap-4 mt-6">
          <span className="bg-cyan-950/40 text-cyan-400 border border-cyan-800/50 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
            <Zap className="w-4 h-4" /> Reconstruction Math
          </span>
          <span className="bg-emerald-950/40 text-emerald-400 border border-emerald-800/50 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
            <Settings className="w-4 h-4" /> Scanner Generations
          </span>
        </div>
      </header>

      {/* Intro */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> The CT Revolution
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          CT (Computed Tomography) overcomes the primary limitation of projection radiography: <strong>superposition</strong>. By rotating the X-ray source around the patient, we can mathematically invert the line integrals to reconstruct a 3D volume as a series of axial slices.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Generations', icon: <Settings className="w-5 h-5 text-cyan-400" />, desc: 'Evolution from 1G to 7G scanners.' },
            { title: 'HU Units', icon: <Target className="w-5 h-5 text-blue-400" />, desc: 'Standardizing attenuation values.' },
            { title: 'Radon Math', icon: <Maximize className="w-5 h-5 text-purple-400" />, desc: 'Filtered Backprojection and FT.' },
            { title: 'Artifacts', icon: <Activity className="w-5 h-5 text-emerald-400" />, desc: 'Beam hardening and metal streaks.' },
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

      {/* 6.2 Instrumentation */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-cyan-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-cyan-900/20">6.2</div>
          <h2 className="text-3xl font-bold text-white">Instrumentation & Generations</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6 italic">The Evolution of Speed</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { gen: '1G', tech: 'Translate-Rotate', desc: 'Single detector, parallel beam. 5+ min per slice.' },
                  { gen: '2G', tech: 'Narrow Fan Beam', desc: 'Small detector array, translate-rotate. Faster.' },
                  { gen: '3G', tech: 'Rotate-Rotate', desc: 'Wide fan beam, large detector arc. Most common today.' },
                  { gen: '4G', tech: 'Stationary Ring', desc: 'Rotating source, fixed detector ring (360°).' },
                  { gen: '6G', tech: 'Helical / Spiral', desc: 'Continuous rotation + table motion. Uses slip rings.' },
                  { gen: '7G', tech: 'Multi-Detector (MDCT)', desc: 'Multiple rows (64, 128, 256+) for volumetric imaging.' }
                ].map((g, i) => (
                  <div key={i} className="p-4 bg-slate-800/40 border border-slate-700 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-cyan-400 font-black text-lg">{g.gen}</span>
                      <span className="text-slate-500 text-[10px] font-bold uppercase">{g.tech}</span>
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed">{g.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Hardware Constraints</h3>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0"></div>
                  <span><strong className="text-white">Slip Rings:</strong> Electromechanical brushes that allow the gantry to rotate indefinitely without tangling cables. Essential for Helical CT.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0"></div>
                  <span><strong className="text-white">Bow-Tie Filters:</strong> Specifically shaped to equalize the X-ray intensity reaching the detector, accounting for the body's cylindrical shape.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0"></div>
                  <span><strong className="text-white">X-ray Tube Cooling:</strong> CT tubes operate at high power for long durations, requiring massive oil-cooled heat exchangers.</span>
                </li>
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <ExamTip type="remember" title="Why CT is Monoenergetic?">
              Image reconstruction math assumes X-rays are <strong>monoenergetic</strong>. In practice, we use heavy filtration (Cu + Al) to "harden" the beam and minimize beam hardening artifacts.
            </ExamTip>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase flex items-center gap-2">
                <Layers className="w-4 h-4" /> Slice Thickness
              </h4>
              <p className="text-slate-400 text-[10px] leading-relaxed mb-4">
                Controlled by collimator slit width and detector row grouping.
              </p>
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 text-center">
                <span className="text-white text-xs font-bold">Standard: 1 mm - 10 mm</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-3 italic">
                Thinner slices = higher resolution but <strong className="text-red-400 font-bold uppercase tracking-tighter">higher noise</strong>.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* 6.3 Hounsfield Units */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-blue-900/20">6.3</div>
          <h2 className="text-3xl font-bold text-white">CT Numbers & Sinograms</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Hounsfield Units (HU)</h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Because different scanners use different effective energies (kVp), the raw attenuation μ varies. We normalize these values using water as a reference.
              </p>
              <FormulaBox 
                name="CT Number Calculation"
                formula={String.raw`h = 1000 \cdot \frac{\mu - \mu_{water}}{\mu_{water}}`}
                symbols={[
                  { symbol: 'h', meaning: 'CT number in Hounsfield Units' },
                  { symbol: 'μ', meaning: 'Measured linear attenuation of pixel' }
                ]}
              />
              <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                  <div className="text-blue-400 font-black">-1000</div>
                  <div className="text-slate-500 text-[8px] uppercase">Air</div>
                </div>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                  <div className="text-blue-400 font-black">0</div>
                  <div className="text-slate-500 text-[8px] uppercase">Water</div>
                </div>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                  <div className="text-blue-400 font-black">+1000</div>
                  <div className="text-slate-500 text-[8px] uppercase">Bone</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider italic">The Sinogram</h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              If we plot the 1D projections <Latex formula="g(\ell, \theta)" /> as a 2D image where one axis is position <Latex formula="\ell" /> and the other is angle <Latex formula="\theta" />, a single point in space traces out a <strong>sine wave</strong>.
            </p>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 border-2 border-slate-600 rounded-full flex items-center justify-center mb-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
                </div>
                <p className="text-slate-500 text-[10px] uppercase">Point Object trace</p>
              </div>
              <ArrowRight className="mx-6 text-slate-700" />
              <div className="w-32 h-32 bg-gradient-to-t from-slate-900 via-slate-700 to-slate-900 border border-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-cyan-400 text-4xl font-bold opacity-20">~</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.3.3 Reconstruction Math */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-purple-900/20">6.3.3</div>
          <h2 className="text-3xl font-bold text-white italic">Reconstruction Mathematics</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-purple-400 mb-6 uppercase tracking-widest">Fourier Slice Theorem</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                The core logic of CT: The 1D Fourier Transform of a projection at angle θ is exactly equal to a radial line through the 2D Fourier Transform of the original image.
              </p>
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
                <Latex formula={String.raw`G(\rho, \theta) = F(\rho \cos \theta, \rho \sin \theta)`} displayMode />
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Filtered Backprojection (FBP)</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Backprojecting raw data results in a blurry image (convolved with <Latex formula="1/r" />). To fix this, we apply a <strong>Ramp Filter</strong> <Latex formula="|\rho|" /> before backprojecting.
              </p>
              <FormulaBox 
                name="The FBP Reconstruction Formula"
                formula={String.raw`f(x,y) = \int_0^\pi \left[ \mathcal{F}^{-1} \{ |\rho| \cdot G(\rho, \theta) \} \right]_{\ell = x \cos \theta + y \sin \theta} d\theta`}
                intuition="Filter projections in frequency space, then smear them back across the image at their respective angles."
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-purple-950/20 border border-purple-900/30 rounded-xl p-6">
              <h4 className="text-purple-400 font-bold text-xs uppercase mb-4 flex items-center gap-2">
                <Maximize className="w-4 h-4" /> Filter Windows
              </h4>
              <p className="text-slate-400 text-[10px] leading-relaxed mb-4 italic">
                In practice, a pure Ramp filter amplifies noise. We use windows like:
              </p>
              <div className="space-y-3">
                {[
                  { name: 'Ram-Lak', desc: 'Sharp edges, high noise.' },
                  { name: 'Shepp-Logan', desc: 'Better noise reduction.' },
                  { name: 'Hamming', desc: 'Smoother, lower resolution.' }
                ].map((f, i) => (
                  <div key={i} className="p-3 bg-slate-800/50 rounded border border-slate-700 flex justify-between items-center">
                    <span className="text-white text-xs font-bold">{f.name}</span>
                    <span className="text-slate-500 text-[8px] italic">{f.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <ExamTip type="trap" title="Blur Factor">
              Simple backprojection (no filter) produces an image convolved with <strong>1/|r|</strong>. This is a classic exam question.
            </ExamTip>
          </div>
        </div>
      </section>

      {/* 6.4 Image Quality & Artifacts */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-emerald-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-emerald-900/20">6.4</div>
          <h2 className="text-3xl font-bold text-white italic tracking-tighter">Image Quality & Artifacts</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { 
              name: 'Beam Hardening', 
              cause: 'Soft photons absorb first.', 
              effect: 'Cupping artifact (edges look brighter than center).',
              icon: <AlertCircle className="w-5 h-5 text-red-400" />
            },
            { 
              name: 'Partial Volume', 
              cause: 'Object spans only half a slice.', 
              effect: 'Blurring/incorrect HU values.',
              icon: <AlertCircle className="w-5 h-5 text-orange-400" />
            },
            { 
              name: 'Metal Artifact', 
              cause: 'Total photon starvation.', 
              effect: 'Dark/bright starburst streaks.',
              icon: <AlertCircle className="w-5 h-5 text-yellow-400" />
            },
            { 
              name: 'Motion', 
              cause: 'Patient moves during scan.', 
              effect: 'Ghosting or misalignment.',
              icon: <AlertCircle className="w-5 h-5 text-blue-400" />
            }
          ].map((a, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-slate-800 rounded-full">{a.icon}</div>
              <h4 className="text-white font-bold text-sm mb-2">{a.name}</h4>
              <p className="text-slate-400 text-[10px] mb-2 font-mono">Cause: {a.cause}</p>
              <p className="text-slate-300 text-[10px] leading-snug italic">{a.effect}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chapter Summary */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl border border-slate-700 p-10 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8">Chapter 6 Recap</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-cyan-400 font-bold uppercase tracking-widest text-sm">Key Principles</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> CT is the inversion of the 2D Radon Transform.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> HU scales attenuation relative to water and air.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Filtered Backprojection is the standard reconstruction method.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Helical scanning allows for volumetric, fast acquisitions.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-orange-400 font-bold uppercase tracking-widest text-sm">Likely Exam Tasks</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Convert μ to HU for different tissues.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Explain the 1/r blur in simple backprojection.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Calculate Helical Pitch given table speed and width.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Identify artifacts (cupping, streaking) and their causes.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-between pt-10 border-t border-slate-800">
        <Link href="/chapters/chapter-5" className="flex items-center gap-3 text-slate-400 hover:text-white group transition-all">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          <div>
            <div className="text-xs uppercase text-slate-500">Previous</div>
            <div className="font-bold">Chapter 5: Projection Radiography</div>
          </div>
        </Link>
        <Link href="/chapters/chapter-7" className="flex items-center gap-3 text-blue-400 hover:text-white text-right group transition-all">
          <div>
            <div className="text-xs uppercase text-slate-500">Next</div>
            <div className="font-bold">Chapter 7: Physics of Nuclear Medicine</div>
          </div>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}