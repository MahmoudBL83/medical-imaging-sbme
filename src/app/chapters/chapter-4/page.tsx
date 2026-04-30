'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Chapter4() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 4: Physics of Radiography</span>
      </div>

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Chapter 4: Physics of Radiography</h1>
        <p className="text-xl text-slate-400">Atoms, Radiation, Attenuation, Dosimetry</p>
        <div className="flex gap-4 mt-4">
          <span className="bg-orange-900 text-orange-200 px-3 py-1 rounded-full text-sm">X-ray Physics</span>
          <span className="bg-emerald-900 text-emerald-200 px-3 py-1 rounded-full text-sm">Safety</span>
        </div>
      </header>

      <div className="claude-surface p-6">
        <h2 className="text-xl font-bold text-white mb-4">What is this Chapter About?</h2>
        <p className="text-slate-300 leading-relaxed">
          This chapter builds the physical foundation for every x-ray based modality. You will connect atomic
          structure to ionization, learn how radiation interacts with matter, derive attenuation, and track
          how dose is defined and measured. This is where image contrast and patient safety become physics.
        </p>
        <div className="claude-diagram mt-4">
          <div className="claude-kicker">From atoms to images</div>
          <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
            <span className="claude-chip">Atoms</span>
            <span className="text-slate-400">-&gt;</span>
            <span className="claude-chip">Radiation</span>
            <span className="text-slate-400">-&gt;</span>
            <span className="claude-chip">Attenuation</span>
            <span className="text-slate-400">-&gt;</span>
            <span className="claude-chip">Dose</span>
          </div>
        </div>
        <div className="claude-note mt-4">
          <div className="claude-kicker">Study note</div>
          <p className="text-slate-400 text-sm">Write the governing equation first, then explain its clinical meaning.</p>
        </div>
      </div>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">4.1 Atoms and Electrons</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300">
              Electrons live in shells around the nucleus. The shell structure sets the binding energy and
              determines how x-rays interact with matter. High atomic number materials have tightly bound
              electrons and attenuate x-rays strongly.
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">Visual Explanation</h4>
            <div className="claude-diagram">
              <div className="claude-kicker">Shell model</div>
              <div className="flex items-center justify-center py-4">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 border-2 border-dashed border-slate-600 rounded-full"></div>
                  <div className="absolute inset-4 border border-slate-500 rounded-full"></div>
                  <div className="absolute inset-8 border border-slate-400 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              <div className="text-center text-slate-400 text-xs">K, L, M shells with increasing radius</div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Technical Depth</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-sm mb-2">Electrons per shell</div>
                <Latex formula={String.raw`N_{\text{max}}=2n^2`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-sm mb-2">Atomic number</div>
                <Latex formula={String.raw`Z=\text{number of protons}`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-sm mb-2">Mass number</div>
                <Latex formula={String.raw`A=\text{protons} + \text{neutrons}`} displayMode />
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>High Z materials attenuate x-rays more strongly.</li>
              <li>Shell structure drives characteristic radiation and K-edge behavior.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">4.2 Ionization and Excitation</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300">
              Ionization removes an electron completely; excitation lifts it to a higher shell. Both create
              a vacancy that can generate secondary radiation. Ionization is the source of biological risk.
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">Visual Explanation</h4>
            <div className="claude-diagram">
              <div className="claude-kicker">Electron shell transitions</div>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div className="claude-panel p-3">
                  <div className="text-blue-300 text-sm font-semibold">Excitation</div>
                  <div className="mt-3 h-10 bg-gradient-to-t from-slate-700 to-blue-500/70 rounded"></div>
                  <p className="text-slate-400 text-xs mt-2">Electron moves to a higher shell.</p>
                </div>
                <div className="claude-panel p-3">
                  <div className="text-purple-300 text-sm font-semibold">Ionization</div>
                  <div className="mt-3 h-10 bg-gradient-to-t from-slate-700 to-purple-500/70 rounded"></div>
                  <p className="text-slate-400 text-xs mt-2">Electron escapes the atom.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Technical Depth</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-sm mb-2">Photon energy</div>
                <Latex formula={String.raw`E=h\nu`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-sm mb-2">Wavelength</div>
                <Latex formula={String.raw`\lambda=\frac{c}{\nu}`} displayMode />
              </div>
            </div>
            <div className="claude-note mt-4">
              <div className="claude-kicker">Diagnostic range</div>
              <p className="text-slate-400 text-sm">Typical x-ray photon energies are about 25 to 500 keV.</p>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Ionization creates ions and can damage DNA.</li>
              <li>Excitation does not eject the electron but can produce characteristic x-rays.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">4.3 Forms of Ionizing Radiation</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300">
              Ionizing radiation is either particulate (massive charged particles) or electromagnetic
              (photons such as x-rays and gamma rays). EM radiation dominates diagnostic imaging.
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">Visual Explanation</h4>
            <div className="claude-diagram">
              <div className="claude-kicker">Two families</div>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div className="claude-panel p-3">
                  <div className="text-blue-300 font-semibold text-sm">Particulate</div>
                  <p className="text-slate-400 text-xs mt-2">Alpha, beta, heavy charged particles</p>
                </div>
                <div className="claude-panel p-3">
                  <div className="text-purple-300 font-semibold text-sm">Electromagnetic</div>
                  <p className="text-slate-400 text-xs mt-2">X-rays and gamma rays (photons)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Technical Depth</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-sm mb-2">Relativistic mass</div>
                <Latex formula={String.raw`m=\frac{m_0}{\sqrt{1-v^2/c^2}}`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-sm mb-2">Photon energy scale</div>
                <Latex formula={String.raw`E=h\nu \quad (\text{keV to MeV range})`} displayMode />
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>EM radiation is massless; particulate has mass and charge.</li>
              <li>Diagnostic x-rays are in the tens to hundreds of keV range.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">4.4 Radiation Interactions</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300">
              Electrons lose energy by collisions and radiation. Photons interact mainly via the photoelectric
              effect and Compton scatter at diagnostic energies. These processes drive contrast and noise.
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">Visual Explanation</h4>
            <div className="claude-diagram">
              <div className="claude-kicker">Interaction map</div>
              <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
                <span className="claude-chip">Electron</span>
                <span className="text-slate-400">-&gt;</span>
                <span className="claude-chip">Collisional</span>
                <span className="text-slate-400">/</span>
                <span className="claude-chip">Radiative</span>
                <span className="text-slate-400">|</span>
                <span className="claude-chip">Photon</span>
                <span className="text-slate-400">-&gt;</span>
                <span className="claude-chip">Photoelectric</span>
                <span className="text-slate-400">+</span>
                <span className="claude-chip">Compton</span>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Technical Depth</h4>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="claude-panel p-4">
                <div className="text-blue-300 text-sm font-semibold mb-2">Photoelectric effect</div>
                <p className="text-slate-400 text-xs">Photon absorbed, electron ejected; drives contrast.</p>
              </div>
              <div className="claude-panel p-4">
                <div className="text-purple-300 text-sm font-semibold mb-2">Compton scattering</div>
                <Latex
                  formula={String.raw`h\nu' = \frac{h\nu}{1 + (1-\cos\theta)\,h\nu/(m_0 c^2)}`}
                  displayMode
                />
              </div>
              <div className="claude-panel p-4">
                <div className="text-emerald-300 text-sm font-semibold mb-2">Pair production</div>
                <Latex formula={String.raw`E_{\text{threshold}}=1.02\,\text{MeV}`} displayMode />
                <p className="text-slate-400 text-xs mt-2">Not relevant for diagnostic x-rays.</p>
              </div>
              <div className="claude-panel p-4">
                <div className="text-amber-300 text-sm font-semibold mb-2">Electron radiation</div>
                <p className="text-slate-400 text-xs">Characteristic x-rays and bremsstrahlung are radiative losses.</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Photoelectric effect increases contrast but raises dose.</li>
              <li>Compton scatter reduces contrast and adds noise.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">4.5 Attenuation of EM Radiation</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300">
              As an x-ray beam travels through tissue, photons are removed by interactions. The loss is
              exponential and depends on material and energy.
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">Visual Explanation</h4>
            <div className="claude-diagram">
              <div className="claude-kicker">Exponential loss</div>
              <div className="flex items-center justify-center gap-4 py-4">
                <span className="claude-chip">I0</span>
                <span className="text-slate-400">-&gt;</span>
                <span className="claude-chip">Material</span>
                <span className="text-slate-400">-&gt;</span>
                <span className="claude-chip">I</span>
              </div>
              <div className="text-center text-slate-400 text-xs">
                <Latex formula={String.raw`I=I_0 e^{-\mu x}`} />
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Technical Depth</h4>
            <div className="space-y-3">
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <Latex formula={String.raw`N=N_0 e^{-\mu x}`} displayMode />
                <Latex formula={String.raw`I=I_0 e^{-\mu x}`} displayMode />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="claude-panel p-3">
                  <div className="text-slate-300 text-xs">Half value layer</div>
                  <Latex formula={String.raw`HVL=\frac{\ln 2}{\mu}`} displayMode />
                </div>
                <div className="claude-panel p-3">
                  <div className="text-slate-300 text-xs">Fluence and intensity</div>
                  <Latex formula={String.raw`\phi=\int_0^{\infty} S(E')\,dE'`} displayMode />
                  <Latex formula={String.raw`I=\int_0^{\infty} E' S(E')\,dE'`} displayMode />
                </div>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <Latex formula={String.raw`S(E)=S_0(E) e^{-\mu(E) x}`} displayMode />
                <Latex
                  formula={String.raw`S(x;E)=S_0(E)\exp\left(-\int_0^x \mu(x';E)\,dx'\right)`}
                  displayMode
                />
              </div>
              <div className="claude-note">
                <div className="claude-kicker">Beam hardening</div>
                <p className="text-slate-400 text-sm">Lower energy photons are removed first, raising the mean energy.</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Memorize the exponential attenuation law and HVL.</li>
              <li>Know monoenergetic vs polyenergetic differences.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">4.6 Radiation Dosimetry</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300">
              Dose quantifies how much energy radiation deposits in tissue. Exposure is measured in air;
              dose, equivalent dose, and effective dose tie that exposure to biological risk.
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">Visual Explanation</h4>
            <div className="claude-diagram">
              <div className="claude-kicker">Dose ladder</div>
              <div className="grid md:grid-cols-4 gap-3 mt-3">
                <div className="claude-panel p-3 text-center">
                  <div className="text-blue-300 text-xs">Exposure</div>
                  <div className="text-slate-400 text-xs">C/kg or R</div>
                </div>
                <div className="claude-panel p-3 text-center">
                  <div className="text-purple-300 text-xs">Absorbed dose</div>
                  <div className="text-slate-400 text-xs">Gy (J/kg)</div>
                </div>
                <div className="claude-panel p-3 text-center">
                  <div className="text-emerald-300 text-xs">Equivalent dose</div>
                  <div className="text-slate-400 text-xs">Sv</div>
                </div>
                <div className="claude-panel p-3 text-center">
                  <div className="text-amber-300 text-xs">Effective dose</div>
                  <div className="text-slate-400 text-xs">Sv (risk)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Technical Depth</h4>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">Exposure conversion</div>
                <Latex formula={String.raw`D=fX`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">Equivalent dose</div>
                <Latex formula={String.raw`H=QD`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">Effective dose</div>
                <Latex formula={String.raw`D_{\text{eff}}=\sum_j H_j w_j`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">Inverse square law</div>
                <Latex formula={String.raw`X\propto \frac{1}{d^2}`} displayMode />
              </div>
            </div>
            <div className="claude-note mt-4">
              <div className="claude-kicker">LET</div>
              <p className="text-slate-400 text-sm">Higher LET means more energy per unit length and more damage.</p>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Know units: X in C/kg or R, D in Gy, H and effective dose in Sv.</li>
              <li>Be able to compute dose using the f-factor and inverse square law.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="claude-surface">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">Chapter 4 Summary</h2>
        </div>
        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-blue-400 font-semibold mb-3">Key Equations</h3>
            <ul className="text-slate-300 text-sm space-y-3">
              <li><Latex formula={String.raw`E=h\nu`} /></li>
              <li><Latex formula={String.raw`I=I_0 e^{-\mu x}`} /></li>
              <li><Latex formula={String.raw`HVL=\frac{\ln 2}{\mu}`} /></li>
              <li><Latex formula={String.raw`D=fX`} /></li>
              <li><Latex formula={String.raw`D_{\text{eff}}=\sum_j H_j w_j`} /></li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-400 font-semibold mb-3">High-Yield Concepts</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>Photoelectric vs Compton determines contrast and scatter.</li>
              <li>Attenuation depends on energy and material composition.</li>
              <li>Dosimetry links exposure to biological risk.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-between">
        <Link href="/chapters/chapter-3" className="flex items-center gap-2 text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" /> Chapter 3
        </Link>
        <Link href="/chapters/chapter-5" className="flex items-center gap-2 text-blue-400 hover:text-white">
          Chapter 5: Projection Radiography <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}