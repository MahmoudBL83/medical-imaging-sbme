'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Atom, Zap, Shield, Activity, Info, AlertCircle, Layers } from 'lucide-react';
import Latex from '@/components/Latex';
import ExamTip from '@/components/ExamTip';
import FormulaBox from '@/components/FormulaBox';

export default function Chapter4() {
  return (
    <div className="space-y-10 pb-20">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 4: Physics of Radiography</span>
      </div>

      <header className="border-b border-slate-800 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight uppercase">
          Chapter 4: Physics of Radiography
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          The fundamental building blocks: atomic structure, radiation interactions, and the mathematics of attenuation and dose.
        </p>
        <div className="flex gap-4 mt-6">
          <span className="bg-blue-950/40 text-blue-400 border border-blue-800/50 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
            <Atom className="w-4 h-4" /> Atomic Physics
          </span>
          <span className="bg-emerald-950/40 text-emerald-400 border border-emerald-800/50 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
            <Shield className="w-4 h-4" /> Radiation Safety
          </span>
        </div>
      </header>

      {/* Chapter Overview */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-blue-400" /> Physical Foundation
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Every X-ray image is the result of billions of individual photon-atom interactions. Understanding these physics is critical for controlling image contrast, reducing noise, and ensuring patient safety through proper dosimetry.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Atomic Theory', icon: <Atom className="w-5 h-5 text-blue-400" />, desc: 'Shell models and binding energies.' },
            { title: 'Ionization', icon: <Zap className="w-5 h-5 text-amber-400" />, desc: 'Energy transfer mechanisms.' },
            { title: 'Interactions', icon: <Layers className="w-5 h-5 text-purple-400" />, desc: 'Photoelectric vs Compton effects.' },
            { title: 'Dosimetry', icon: <Activity className="w-5 h-5 text-emerald-400" />, desc: 'Risk, dose, and Sv/Gy units.' },
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

      {/* 4.1 - 4.2 Atoms & Energy */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-blue-900/20">4.1</div>
          <h2 className="text-3xl font-bold text-white">Atoms and Energy States</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 italic">The Shell Model</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Electrons are restricted to discrete shells (K, L, M, N). The binding energy of these shells determines how much energy is needed to eject an electron (ionization).
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <FormulaBox 
                  name="Max Electrons per Shell"
                  formula={String.raw`N_{max} = 2n^2`}
                  symbols={[{ symbol: 'n', meaning: 'Shell number (K=1, L=2...)' }]}
                />
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-tighter">Energy Scale</h4>
                  <ul className="text-slate-400 text-xs space-y-2">
                    <li><strong className="text-blue-300">Ground State:</strong> Lowest energy configuration.</li>
                    <li><strong className="text-amber-300">Excitation:</strong> Lifting to a higher shell.</li>
                    <li><strong className="text-red-400">Ionization:</strong> Total removal of electron.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" /> Electromagnetic Radiation
              </h3>
              <div className="space-y-4">
                <FormulaBox 
                  name="Photon Energy"
                  formula={String.raw`E = h\nu = \frac{hc}{\lambda}`}
                  symbols={[
                    { symbol: 'h', meaning: "Planck's constant" },
                    { symbol: 'ν', meaning: 'Frequency' },
                    { symbol: 'λ', meaning: 'Wavelength' }
                  ]}
                  intuition="Energy is directly proportional to frequency and inversely proportional to wavelength."
                />
                <p className="text-slate-400 text-sm">
                  <strong className="text-white">Diagnostic Range:</strong> X-ray photons used in imaging typically range from <strong className="text-blue-400">25 keV to 124 keV</strong>.
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase">Particulate Physics</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Because electrons in X-ray tubes travel at a significant fraction of light speed, we must use <strong>Relativistic Mass</strong>.
              </p>
              <Latex formula={String.raw`m = \frac{m_0}{\sqrt{1 - v^2/c^2}}`} displayMode />
              <div className="mt-4 p-3 bg-blue-900/20 border border-blue-800 rounded text-[10px] text-blue-300 italic">
                "Wait... massless photons act like particles, and massive electrons act like waves. Welcome to Quantum Mechanics."
              </div>
            </div>

            <ExamTip type="remember" title="Tungsten Binding">
              In diagnostic X-ray tubes (Tungsten target), the <strong>K-shell binding energy is ~69.5 keV</strong>. Electrons must have at least this much energy to eject a K-shell electron and create characteristic radiation.
            </ExamTip>
          </aside>
        </div>
      </section>

      {/* 4.4 Radiation Interactions */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-purple-900/20">4.4</div>
          <h2 className="text-3xl font-bold text-white">Radiation Interactions with Matter</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-blue-400 mb-4 uppercase tracking-wider">The Photoelectric Effect</h3>
            <p className="text-slate-300 mb-6">
              The incident photon is <strong>completely absorbed</strong> by a bound electron, which is then ejected. This is the primary driver of <strong className="text-white">image contrast</strong>.
            </p>
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 mb-6">
              <p className="text-xs text-slate-400 mb-1">Probability (P) is proportional to:</p>
              <Latex formula={String.raw`P \propto \frac{Z^3}{E^3}`} displayMode />
            </div>
            <ExamTip type="tip">
              Because probability depends on <strong>Z³</strong>, bone (high Z) absorbs much more than soft tissue (low Z), creating the bright shadows we see on X-rays.
            </ExamTip>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-amber-400 mb-4 uppercase tracking-wider">Compton Scattering</h3>
            <p className="text-slate-300 mb-6">
              The photon <strong>collides</strong> with an outer-shell electron, loses some energy, and <strong>deflects</strong> at an angle. This is the primary driver of <strong className="text-white">image noise and scatter</strong>.
            </p>
            <FormulaBox 
              name="Compton Shift Formula"
              formula={String.raw`h\nu' = \frac{h\nu}{1 + (1-\cos\theta)\frac{h\nu}{m_0 c^2}}`}
              intuition="The energy of the scattered photon depends on the deflection angle θ. 180° backscatter yields the maximum energy loss."
            />
          </div>
        </div>
      </section>

      {/* 4.5 Attenuation */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-emerald-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-emerald-900/20">4.5</div>
          <h2 className="text-3xl font-bold text-white">Attenuation Law</h2>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">The Exponential Decay</h3>
              <p className="text-slate-300 mb-6">
                As a beam passes through matter, the number of photons decreases exponentially. This assumes a <strong>monoenergetic</strong> beam and a <strong>homogeneous</strong> slab.
              </p>
              <div className="space-y-6">
                <FormulaBox 
                  name="Fundamental Attenuation Law"
                  formula={String.raw`I = I_0 e^{-\mu x}`}
                  symbols={[
                    { symbol: 'I', meaning: 'Transmitted intensity' },
                    { symbol: 'μ', meaning: 'Linear attenuation coefficient' },
                    { symbol: 'x', meaning: 'Thickness of material' }
                  ]}
                />
                <FormulaBox 
                  name="Half-Value Layer (HVL)"
                  formula={String.raw`HVL = \frac{\ln 2}{\mu} \approx \frac{0.693}{\mu}`}
                  intuition="The thickness required to reduce the beam intensity by exactly 50%."
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-400" /> Beam Hardening
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed italic mb-4">
                  "Real X-ray beams are polyenergetic. As they pass through a patient, the low-energy 'soft' photons are filtered out first, leaving only the high-energy 'hard' photons."
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-lg text-[10px] font-bold">Increases mean energy</span>
                  <span className="bg-orange-900/30 text-orange-300 px-3 py-1 rounded-lg text-[10px] font-bold">Changes HVL</span>
                </div>
              </div>
              
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                <h4 className="text-amber-400 font-bold text-xs uppercase mb-3">Material Densities (kg/m³)</h4>
                <div className="space-y-2">
                  {[
                    { name: 'Air', value: '1.29' },
                    { name: 'Fat', value: '916' },
                    { name: 'Water', value: '1,000' },
                    { name: 'Muscle', value: '1,040' },
                    { name: 'Bone', value: '1,650' }
                  ].map((m, i) => (
                    <div key={i} className="flex justify-between items-center py-1 border-b border-slate-800 last:border-0">
                      <span className="text-slate-400 text-xs">{m.name}</span>
                      <span className="text-white font-mono text-xs font-bold">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.6 Dosimetry */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-red-900/20">4.6</div>
          <h2 className="text-3xl font-bold text-white">Radiation Dosimetry</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:bg-slate-800/50 transition-colors">
            <h3 className="text-blue-400 font-bold text-sm mb-4 uppercase">Exposure (X)</h3>
            <p className="text-slate-400 text-xs mb-4">Quantity of ionization produced in <strong>air</strong>.</p>
            <div className="bg-slate-950 p-3 rounded font-mono text-center text-blue-300 mb-4">C / kg (or Roentgen)</div>
            <Latex formula={String.raw`D = f \cdot X`} />
            <p className="text-[10px] text-slate-500 mt-2">f is the f-factor converting air exposure to tissue dose.</p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:bg-slate-800/50 transition-colors">
            <h3 className="text-purple-400 font-bold text-sm mb-4 uppercase">Absorbed Dose (D)</h3>
            <p className="text-slate-400 text-xs mb-4">Energy deposited per unit <strong>mass of tissue</strong>.</p>
            <div className="bg-slate-950 p-3 rounded font-mono text-center text-purple-300 mb-4">Gray (Gy) = 1 J / kg</div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:bg-slate-800/50 transition-colors">
            <h3 className="text-emerald-400 font-bold text-sm mb-4 uppercase">Equivalent Dose (H)</h3>
            <p className="text-slate-400 text-xs mb-4">Dose weighted by <strong>radiation type</strong> (Q factor).</p>
            <div className="bg-slate-950 p-3 rounded font-mono text-center text-emerald-300 mb-4">Sievert (Sv)</div>
            <Latex formula={String.raw`H = Q \cdot D`} />
            <p className="text-[10px] text-slate-500 mt-2">For X-rays, Q = 1, so 1 Gy = 1 Sv.</p>
          </div>
        </div>

        <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-2xl">
          <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" /> Effective Dose (Deff)
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            The sum of doses to specific organs, weighted by their <strong>radiosensitivity (wj)</strong>. This is the single best measure of overall biological risk.
          </p>
          <div className="bg-slate-900 p-4 rounded-lg text-center border border-slate-700">
            <Latex formula={String.raw`D_{eff} = \sum_j H_j \cdot w_j`} displayMode />
          </div>
        </div>
      </section>

      {/* Chapter Summary */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl border border-slate-700 p-10 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8">Chapter 4 Recap</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm">Key Principles</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Binding energy sets the threshold for ionization.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Photoelectric is absorption; Compton is scattering.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> μ and Z³ drive differential attenuation (contrast).</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Effective dose Sv is the metric for cancer risk.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-orange-400 font-bold uppercase tracking-widest text-sm">Likely Exam Tasks</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Calculate HVL given linear attenuation μ.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Predict mAs change for distance (Inverse Square).</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Solve for Compton scattered photon energy hν'.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Explain why K-edges are useful for contrast agents.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-between pt-10 border-t border-slate-800">
        <Link href="/chapters/chapter-3" className="flex items-center gap-3 text-slate-400 hover:text-white group transition-all">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          <div>
            <div className="text-xs uppercase text-slate-500">Previous</div>
            <div className="font-bold">Chapter 3: Image Quality</div>
          </div>
        </Link>
        <Link href="/chapters/chapter-5" className="flex items-center gap-3 text-blue-400 hover:text-white text-right group transition-all">
          <div>
            <div className="text-xs uppercase text-slate-500">Next</div>
            <div className="font-bold">Chapter 5: Projection Radiography</div>
          </div>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}