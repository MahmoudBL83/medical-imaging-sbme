'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Zap, History, Activity, Info, FlaskConical, Radiation, Layers, Shield } from 'lucide-react';
import Latex from '@/components/Latex';
import ExamTip from '@/components/ExamTip';
import FormulaBox from '@/components/FormulaBox';

export default function Chapter7() {
  return (
    <div className="space-y-10 pb-20">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 7: Physics of Nuclear Medicine</span>
      </div>

      <header className="border-b border-slate-800 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight uppercase">
          Chapter 7: Physics of Nuclear Medicine
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          The chemistry of light: Understanding radioactive decay, radiotracers, and the statistics of emission imaging.
        </p>
        <div className="flex gap-4 mt-6">
          <span className="bg-rose-950/40 text-rose-400 border border-rose-800/50 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
            <Radiation className="w-4 h-4" /> Radioactive Decay
          </span>
          <span className="bg-blue-950/40 text-blue-400 border border-blue-800/50 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
            <FlaskConical className="w-4 h-4" /> Radiotracers
          </span>
        </div>
      </header>

      {/* Chapter Overview */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-blue-400" /> Emission vs. Transmission
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Unlike X-ray imaging, where the source is outside the body, Nuclear Medicine relies on <strong>emission</strong>. We inject a radiotracer—a molecule bound to a radioactive isotope—which targets specific organs or metabolic processes. The body itself becomes the source of radiation.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Decay Modes', icon: <Zap className="w-5 h-5 text-amber-400" />, desc: 'Alpha, Beta, Gamma, Positron.' },
            { title: 'Activity', icon: <Activity className="w-5 h-5 text-rose-400" />, desc: 'Becquerels and Curies.' },
            { title: 'Half-Life', icon: <History className="w-5 h-5 text-blue-400" />, desc: 'Physical vs. Biological decay.' },
            { title: 'Annihilation', icon: <Layers className="w-5 h-5 text-purple-400" />, desc: 'The physics behind PET.' },
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

      {/* 7.3 Radioactive Decay Law */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-rose-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-rose-900/20">7.3</div>
          <h2 className="text-3xl font-bold text-white italic">The Radioactive Decay Law</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Exponential Disintegration</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Radioactive decay is a stochastic (random) process. The number of atoms <Latex formula="N(t)" /> decreases exponentially over time.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <FormulaBox 
                  name="Fundamental Decay Law"
                  formula={String.raw`N(t) = N_0 e^{-\lambda t}`}
                  symbols={[
                    { symbol: 'N_0', meaning: 'Initial number of atoms' },
                    { symbol: 'λ', meaning: 'Decay constant (probability per unit time)' }
                  ]}
                />
                <FormulaBox 
                  name="Physical Half-Life"
                  formula={String.raw`T_{1/2} = \frac{\ln 2}{\lambda} \approx \frac{0.693}{\lambda}`}
                  intuition="The time required for exactly half of the atoms to decay."
                />
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-rose-400" /> Measuring Activity
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                Activity <Latex formula="A(t)" /> is the rate of disintegration (decays per second).
              </p>
              <div className="space-y-4">
                <FormulaBox 
                  name="Activity Equation"
                  formula={String.raw`A(t) = \lambda N(t) = A_0 e^{-\lambda t}`}
                  intuition="Activity follows the same exponential decay as the number of atoms."
                />
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-rose-400 font-black text-xs uppercase">Becquerel (Bq)</div>
                    <div className="text-white text-sm font-bold">1 decay / sec</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-black text-xs uppercase">Curie (Ci)</div>
                    <div className="text-white text-sm font-bold">3.7 x 10¹⁰ Bq</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <ExamTip type="remember" title="Effective Half-Life">
              In a patient, the tracer disappears due to <strong>Physical Decay</strong> AND <strong>Biological Excretion</strong>.
              <br/><br/>
              <div className="bg-slate-900 p-3 rounded border border-slate-700">
                <Latex formula={String.raw`\frac{1}{T_e} = \frac{1}{T_p} + \frac{1}{T_b}`} displayMode />
              </div>
              <p className="text-[10px] text-slate-500 mt-2 italic">
                The effective half-life is ALWAYS shorter than either the physical or biological half-life.
              </p>
            </ExamTip>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" /> Statistics
              </h4>
              <p className="text-slate-400 text-[10px] leading-relaxed mb-4 italic">
                Because decay is random, photon counting follows <strong>Poisson Statistics</strong>.
              </p>
              <div className="p-2 bg-slate-900 rounded border border-slate-800 text-center">
                <span className="text-white text-xs font-bold">SNR = √Counts</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 7.4 Decay Modes */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-amber-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-amber-900/20">7.4</div>
          <h2 className="text-3xl font-bold text-white italic">Decay Modes & PET Physics</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-blue-400 mb-6 uppercase tracking-wider italic">Isomeric Transition</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              A metastable nucleus drops to a lower energy state by emitting a <strong>Gamma Ray</strong>. This is the primary signal for SPECT.
            </p>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="text-blue-300 font-bold text-xs uppercase mb-2">Technetium-99m</div>
              <p className="text-slate-400 text-xs">The workhorse of nuclear medicine. 140 keV gamma emission, 6-hour half-life.</p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-purple-400 mb-6 uppercase tracking-wider">Positron Decay & Annihilation</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              A proton converts to a neutron, emitting a <strong>Positron</strong> (<Latex formula="\beta^+" />) and a neutrino.
            </p>
            <div className="space-y-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <h4 className="text-xs font-bold text-purple-300 uppercase mb-2">The Annihilation Event</h4>
                <p className="text-slate-400 text-[10px] leading-relaxed italic">
                  "The positron meets an electron. They annihilate, converting mass into energy: two <strong>511 keV photons</strong> emitted <strong>180° back-to-back</strong>."
                </p>
              </div>
              <div className="flex gap-2">
                <span className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-lg text-[10px] font-bold">PET Imaging</span>
                <span className="bg-slate-900 text-slate-500 px-3 py-1 rounded-lg text-[10px] font-bold border border-slate-800">Coincidence Detection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Summary */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl border border-slate-700 p-10 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-widest text-center">Chapter 7 Recap</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-rose-400 font-bold uppercase tracking-widest text-sm">Key Principles</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> Emission imaging uses tracers injected into the patient.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> Physical and biological half-lives combine for effective half-life.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> Positron annihilation produces two 511 keV photons.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> Gamma rays originate from the nucleus.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-orange-400 font-bold uppercase tracking-widest text-sm">Likely Exam Tasks</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Calculate Activity A(t) after a specific time interval.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Derive the effective half-life for a patient study.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Explain the 511 keV energy requirement for PET.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Convert between Becquerels and Curies.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-between pt-10 border-t border-slate-800">
        <Link href="/chapters/chapter-6" className="flex items-center gap-3 text-slate-400 hover:text-white group transition-all">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          <div>
            <div className="text-xs uppercase text-slate-500">Previous</div>
            <div className="font-bold">Chapter 6: Computed Tomography</div>
          </div>
        </Link>
        <Link href="/chapters/chapter-8" className="flex items-center gap-3 text-blue-400 hover:text-white text-right group transition-all">
          <div>
            <div className="text-xs uppercase text-slate-500">Next</div>
            <div className="font-bold">Chapter 8: Planar Scintigraphy</div>
          </div>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}