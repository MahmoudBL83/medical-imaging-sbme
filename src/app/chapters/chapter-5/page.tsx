'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Chapter5() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 5: Projection Radiography</span>
      </div>

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Chapter 5: Projection Radiography</h1>
        <p className="text-xl text-slate-400">Instrumentation, Image Formation, and Quality</p>
        <div className="flex gap-4 mt-4">
          <span className="bg-orange-900 text-orange-200 px-3 py-1 rounded-full text-sm">Systems</span>
          <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">Geometry</span>
        </div>
      </header>

      <div className="claude-surface p-6">
        <h2 className="text-xl font-bold text-white mb-4">What is this Chapter About?</h2>
        <p className="text-slate-300">
          This chapter explains how projection radiography systems are built and how they form images. You
          will connect hardware choices (tube, filtration, grids, detectors) to image quality, then derive
          the geometry and noise equations that govern x-ray images.
        </p>
        <div className="claude-diagram mt-4">
          <div className="claude-kicker">Imaging pipeline</div>
          <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
            <span className="claude-chip">Source</span>
            <span className="text-slate-400">-&gt;</span>
            <span className="claude-chip">Filter</span>
            <span className="text-slate-400">-&gt;</span>
            <span className="claude-chip">Collimator</span>
            <span className="text-slate-400">-&gt;</span>
            <span className="claude-chip">Patient</span>
            <span className="text-slate-400">-&gt;</span>
            <span className="claude-chip">Grid</span>
            <span className="text-slate-400">-&gt;</span>
            <span className="claude-chip">Detector</span>
          </div>
        </div>
      </div>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">5.2 Instrumentation</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300">
              A projection system is a chain of hardware decisions that shape the spectrum, reduce scatter,
              and capture photons efficiently. Every component affects contrast, dose, and resolution.
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">Visual Explanation</h4>
            <div className="claude-diagram">
              <div className="claude-kicker">System block diagram</div>
              <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
                <span className="claude-chip">X-ray tube</span>
                <span className="text-slate-400">-&gt;</span>
                <span className="claude-chip">Filter</span>
                <span className="text-slate-400">-&gt;</span>
                <span className="claude-chip">Collimator</span>
                <span className="text-slate-400">-&gt;</span>
                <span className="claude-chip">Grid / Airgap</span>
                <span className="text-slate-400">-&gt;</span>
                <span className="claude-chip">Detector</span>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Technical Depth</h4>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="claude-panel p-4">
                <div className="text-blue-300 text-sm font-semibold mb-2">Tube output</div>
                <Latex formula={String.raw`mAs = mA \cdot t`} displayMode />
                <p className="text-slate-400 text-xs mt-2">Tube current and exposure time control output.</p>
              </div>
              <div className="claude-panel p-4">
                <div className="text-purple-300 text-sm font-semibold mb-2">Filtration</div>
                <p className="text-slate-400 text-xs">Removes low-energy photons, reduces dose, hardens beam.</p>
              </div>
              <div className="claude-panel p-4">
                <div className="text-emerald-300 text-sm font-semibold mb-2">Beam restriction</div>
                <p className="text-slate-400 text-xs">Diaphragms, cones, and collimators reduce scatter.</p>
              </div>
              <div className="claude-panel p-4">
                <div className="text-amber-300 text-sm font-semibold mb-2">Grid ratio</div>
                <Latex formula={String.raw`\text{grid ratio}=\frac{h}{b}`} displayMode />
                <p className="text-slate-400 text-xs mt-2">Higher ratio means better scatter rejection.</p>
              </div>
              <div className="claude-panel p-4">
                <div className="text-blue-300 text-sm font-semibold mb-2">Contrast agents</div>
                <p className="text-slate-400 text-xs">Iodine (K-edge ~33 keV) and barium (~37 keV) increase absorption.</p>
              </div>
              <div className="claude-panel p-4">
                <div className="text-purple-300 text-sm font-semibold mb-2">Scatter control</div>
                <p className="text-slate-400 text-xs">Grids, air gaps, and scanning slits reduce Compton scatter.</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Explain how filtration, collimation, and grids trade dose for contrast.</li>
              <li>Know why iodine and barium are used (K-edge absorption).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">5.2.5-5.2.7 Detectors</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Detector Families</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="claude-panel p-4">
                <div className="text-blue-300 font-semibold text-sm">Film-screen</div>
                <p className="text-slate-400 text-xs mt-2">Intensifying screens convert x-rays to light for film.</p>
              </div>
              <div className="claude-panel p-4">
                <div className="text-purple-300 font-semibold text-sm">Computed radiography (CR)</div>
                <p className="text-slate-400 text-xs mt-2">Photostimulable phosphor plates scanned by laser.</p>
              </div>
              <div className="claude-panel p-4">
                <div className="text-emerald-300 font-semibold text-sm">Digital flat panel</div>
                <p className="text-slate-400 text-xs mt-2">Indirect (scintillator + a-Si) or direct (a-Se).</p>
              </div>
              <div className="claude-panel p-4">
                <div className="text-amber-300 font-semibold text-sm">Fluoroscopy (XRII)</div>
                <p className="text-slate-400 text-xs mt-2">Image intensifier boosts light for real-time imaging.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">5.3 Image Formation</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300">
              The detector measures how much the x-ray beam is attenuated along each path. Geometry adds
              inverse square falloff, obliquity, and magnification.
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">Visual Explanation</h4>
            <div className="claude-diagram">
              <div className="claude-kicker">Geometry effects</div>
              <div className="grid md:grid-cols-3 gap-4 mt-3">
                <div className="claude-panel p-3">
                  <div className="text-slate-300 text-xs">Inverse square</div>
                  <Latex formula={String.raw`I_r=\frac{I_s}{4\pi r^2}`} displayMode />
                </div>
                <div className="claude-panel p-3">
                  <div className="text-slate-300 text-xs">Obliquity</div>
                  <Latex formula={String.raw`I_r=I_0\cos^2\theta`} displayMode />
                </div>
                <div className="claude-panel p-3">
                  <div className="text-slate-300 text-xs">Magnification</div>
                  <Latex formula={String.raw`M(z)=\frac{d}{z}`} displayMode />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Technical Depth</h4>
            <div className="space-y-3">
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <Latex formula={String.raw`I(x,y)=I_0\exp\left(-\int \mu(s)\,ds\right)`} displayMode />
              </div>
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <Latex formula={String.raw`I_d(x,y)=I_0\cos^3\theta\,t_d(x,y)`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">Density maintenance</div>
                <Latex formula={String.raw`mAs_{new}=mAs_{old}\frac{d_{new}^2}{d_{old}^2}`} displayMode />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">5.3.3 Blurring and PSF</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300">
              Finite focal spot size and detector thickness blur the image. Both can be modeled by
              convolution with a system PSF.
            </p>
          </div>
          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Technical Depth</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">Source blur</div>
                <Latex formula={String.raw`D'=\frac{d-z}{z}D`} displayMode />
                <Latex formula={String.raw`m(z)=1-M(z)`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">Convolution model</div>
                <Latex formula={String.raw`I_d = (s * t_z) * h`} displayMode />
              </div>
            </div>
            <div className="claude-note mt-4">
              <div className="claude-kicker">MTF</div>
              <p className="text-slate-400 text-sm">The detector PSF determines the modulation transfer function.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">5.3.4 Film Characteristics</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">H&D Curve</h4>
            <div className="bg-slate-800 p-4 rounded-lg text-center">
              <Latex formula={String.raw`D=\gamma\log_{10}(X/X_0)`} displayMode />
            </div>
            <p className="text-slate-400 text-sm mt-3">
              Gamma controls contrast; latitude is the exposure range of the linear region.
            </p>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">5.4 Image Quality and Noise</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300">
              Image quality is set by contrast, blur, and noise. Photon statistics dominate noise in x-ray
              images, so dose and detector efficiency directly affect SNR.
            </p>
          </div>
          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Key Equations</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">SNR</div>
                <Latex formula={String.raw`SNR=C\sqrt{N_b}`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">DQE</div>
                <Latex formula={String.raw`DQE=\left(\frac{SNR_{out}}{SNR_{in}}\right)^2`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">Scatter reduces contrast</div>
                <Latex formula={String.raw`C' = \frac{C}{1+I_s/I_b}`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">Scatter reduces SNR</div>
                <Latex formula={String.raw`SNR' = \frac{SNR}{\sqrt{1+I_s/I_b}}`} displayMode />
              </div>
            </div>
          </div>
          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Higher dose increases SNR but raises patient risk.</li>
              <li>Scatter reduces both contrast and SNR.</li>
              <li>DQE compares input vs output SNR.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">5.2.8 Mammography</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300">
              Mammography uses low-energy x-rays and compression to visualize subtle soft tissue differences
              and microcalcifications with high spatial resolution.
            </p>
          </div>
          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Key Features</h4>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>Low kVp (around 30 kVp) for soft tissue contrast.</li>
              <li>Compression reduces scatter and motion.</li>
              <li>Digital systems enable tomosynthesis and CAD.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="claude-surface">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">Chapter 5 Summary</h2>
        </div>
        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-blue-400 font-semibold mb-3">Key Equations</h3>
            <ul className="text-slate-300 text-sm space-y-3">
              <li><Latex formula={String.raw`I(x,y)=I_0\exp\left(-\int \mu ds\right)`} /></li>
              <li><Latex formula={String.raw`M(z)=\frac{d}{z}`} /></li>
              <li><Latex formula={String.raw`SNR=C\sqrt{N_b}`} /></li>
              <li><Latex formula={String.raw`DQE=\left(\frac{SNR_{out}}{SNR_{in}}\right)^2`} /></li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-400 font-semibold mb-3">High-Yield Concepts</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>System geometry drives magnification and blur.</li>
              <li>Scatter control is essential for contrast.</li>
              <li>Detector choice sets efficiency and noise.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-between">
        <Link href="/chapters/chapter-4" className="flex items-center gap-2 text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" /> Chapter 4
        </Link>
        <Link href="/chapters/chapter-6" className="flex items-center gap-2 text-blue-400 hover:text-white">
          Chapter 6: CT <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}