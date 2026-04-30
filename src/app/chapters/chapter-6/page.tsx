'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Chapter6() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 6: Computed Tomography</span>
      </div>

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Chapter 6: Computed Tomography</h1>
        <p className="text-xl text-slate-400">Instrumentation, Reconstruction, Image Quality</p>
        <div className="flex gap-4 mt-4">
          <span className="bg-cyan-900 text-cyan-200 px-3 py-1 rounded-full text-sm">Reconstruction</span>
          <span className="bg-emerald-900 text-emerald-200 px-3 py-1 rounded-full text-sm">Math-Heavy</span>
        </div>
      </header>

      <div className="claude-surface p-6">
        <h2 className="text-xl font-bold text-white mb-4">What is this Chapter About?</h2>
        <p className="text-slate-300">
          CT converts x-ray line integrals into cross-sectional images. You learn the scanner geometry,
          the Radon transform, and the filtered backprojection pipeline that reconstructs slices.
        </p>
        <div className="claude-diagram mt-4">
          <div className="claude-kicker">CT pipeline</div>
          <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
            <span className="claude-chip">Projections</span>
            <span className="text-slate-400">-&gt;</span>
            <span className="claude-chip">Filter</span>
            <span className="text-slate-400">-&gt;</span>
            <span className="claude-chip">Backproject</span>
            <span className="text-slate-400">-&gt;</span>
            <span className="claude-chip">Slice</span>
          </div>
        </div>
        <div className="claude-note mt-4">
          <div className="claude-kicker">Study note</div>
          <p className="text-slate-400 text-sm">Expect derivations: line integrals, Fourier slice theorem, and filters.</p>
        </div>
      </div>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">6.2 CT Instrumentation</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300">
              CT generations evolved from translate-rotate to rotate-only and multirow acquisition. Modern
              systems use fan-beam geometry, slip rings for continuous rotation, and helical scanning.
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">Visual Explanation</h4>
            <div className="claude-diagram">
              <div className="claude-kicker">Generations</div>
              <div className="grid md:grid-cols-2 gap-4 mt-3 text-sm">
                <div className="claude-panel p-3">
                  <div className="text-blue-300 font-medium">1G</div>
                  <p className="text-slate-400 text-xs">Single detector, translate-rotate, parallel beam.</p>
                </div>
                <div className="claude-panel p-3">
                  <div className="text-purple-300 font-medium">2G</div>
                  <p className="text-slate-400 text-xs">Detector array, translate-rotate, fan beam.</p>
                </div>
                <div className="claude-panel p-3">
                  <div className="text-blue-300 font-medium">3G</div>
                  <p className="text-slate-400 text-xs">Rotate-only, fan beam, detector arc.</p>
                </div>
                <div className="claude-panel p-3">
                  <div className="text-purple-300 font-medium">4G/5G</div>
                  <p className="text-slate-400 text-xs">Stationary ring or electron beam (EBCT).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Technical Depth</h4>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="claude-panel p-4">
                <div className="text-slate-300 text-sm mb-2">Key components</div>
                <ul className="text-slate-400 text-xs space-y-1">
                  <li>X-ray tube with fan-beam collimation.</li>
                  <li>Detector arrays and slip ring for continuous rotation.</li>
                  <li>Multi-detector rows for volumetric data.</li>
                </ul>
              </div>
              <div className="claude-panel p-4">
                <div className="text-slate-300 text-sm mb-2">Slice thickness</div>
                <p className="text-slate-400 text-xs">Set by collimation and detector height; thinner slices mean more noise.</p>
              </div>
              <div className="claude-panel p-4">
                <div className="text-slate-300 text-sm mb-2">Helical pitch</div>
                <Latex formula={String.raw`\zeta = z_{j+M}-z_j`} displayMode />
                <p className="text-slate-400 text-xs mt-2">Pitch controls table motion per rotation.</p>
              </div>
              <div className="claude-panel p-4">
                <div className="text-slate-300 text-sm mb-2">Dual-energy CT</div>
                <p className="text-slate-400 text-xs">Two spectra differentiate materials and reduce beam hardening.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">6.3 Projections and CT Numbers</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300">
              Each projection is a line integral of attenuation. Stacking projections over angle creates a
              sinogram. CT numbers normalize attenuation across scanners.
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">Core Equations</h4>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="claude-panel p-4">
                <div className="text-slate-300 text-xs">Line equation</div>
                <Latex formula={String.raw`L(\ell,\theta)=\{(x,y)\mid x\cos\theta+y\sin\theta=\ell\}`} displayMode />
              </div>
              <div className="claude-panel p-4">
                <div className="text-slate-300 text-xs">Projection</div>
                <Latex formula={String.raw`g(\ell,\theta)=\int_{-\infty}^{\infty} f(x(s),y(s))\,ds`} displayMode />
              </div>
              <div className="claude-panel p-4">
                <div className="text-slate-300 text-xs">Parametric line</div>
                <Latex formula={String.raw`x(s)=\ell\cos\theta-s\sin\theta`} displayMode />
                <Latex formula={String.raw`y(s)=\ell\sin\theta+s\cos\theta`} displayMode />
              </div>
              <div className="claude-panel p-4">
                <div className="text-slate-300 text-xs">CT number</div>
                <Latex formula={String.raw`h=1000\,\frac{\mu-\mu_{water}}{\mu_{water}}`} displayMode />
              </div>
            </div>
            <div className="claude-note mt-4">
              <div className="claude-kicker">Quick HU anchors</div>
              <p className="text-slate-400 text-sm">Water 0 HU, air about minus 1000 HU, bone typically positive.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">6.3.3 Reconstruction</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300">
              Backprojection alone blurs. Filtering each projection with a ramp filter restores edges,
              then backprojection and summation yield the slice.
            </p>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Key Formulas</h4>
            <div className="space-y-3">
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <Latex formula={String.raw`f_b(x,y)=\int_0^{\pi} b_\theta(x,y)\,d\theta`} displayMode />
              </div>
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <Latex
                  formula={String.raw`f(x,y)=\int_0^{\pi}\left[\mathcal{F}^{-1}\{|\rho|\,G(\rho,\theta)\}\right]_{\ell=x\cos\theta+y\sin\theta} d\theta`}
                  displayMode
                />
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">Windowed filter</div>
                <Latex formula={String.raw`\tilde{c}(\ell)=\mathcal{F}^{-1}\{|\rho|W(\rho)\}`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">Projection-slice theorem</div>
                <Latex formula={String.raw`G(\rho,\theta)=F(\rho\cos\theta,\rho\sin\theta)`} displayMode />
              </div>
            </div>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">Fan-Beam and Helical</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">Fan-beam projection</div>
                <Latex formula={String.raw`p(\gamma,\beta)=g(D\sin\gamma,\beta+\gamma)`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">Helical interpolation</div>
                <Latex
                  formula={String.raw`\hat{p}_z(\gamma,\beta_j)=\frac{z-z_{j+kM}}{\zeta}p_{z_{j+(k+1)M}}+\frac{z_{j+(k+1)M}-z}{\zeta}p_{z_{j+kM}}`}
                  displayMode
                />
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Backprojection must be filtered with a ramp-like filter.</li>
              <li>Fourier slice theorem links 1D projection FT to 2D image FT.</li>
              <li>Fan-beam geometry requires weighting or rebinning.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">6.4 Image Quality</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="claude-panel p-4">
              <div className="text-blue-300 text-sm font-semibold">Resolution</div>
              <p className="text-slate-400 text-xs mt-2">Detector size, focal spot, and reconstruction filter set blur.</p>
            </div>
            <div className="claude-panel p-4">
              <div className="text-purple-300 text-sm font-semibold">Noise</div>
              <p className="text-slate-400 text-xs mt-2">Noise falls with higher mAs and thicker slices.</p>
            </div>
            <div className="claude-panel p-4">
              <div className="text-emerald-300 text-sm font-semibold">Artifacts</div>
              <p className="text-slate-400 text-xs mt-2">Beam hardening, metal streaks, motion, partial volume.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="claude-surface">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">Chapter 6 Summary</h2>
        </div>
        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-blue-400 font-semibold mb-3">Key Equations</h3>
            <ul className="text-slate-300 text-sm space-y-3">
              <li><Latex formula={String.raw`g(\ell,\theta)=\int f(x(s),y(s))\,ds`} /></li>
              <li><Latex formula={String.raw`h=1000\,\frac{\mu-\mu_{water}}{\mu_{water}}`} /></li>
              <li><Latex formula={String.raw`f(x,y)=\int \mathcal{F}^{-1}\{|\rho|G\}\,d\theta`} /></li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-400 font-semibold mb-3">High-Yield Concepts</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>CT is inversion of line integrals (Radon transform).</li>
              <li>Filtering is mandatory before backprojection.</li>
              <li>Helical scanning relies on interpolation between slices.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-between">
        <Link href="/chapters/chapter-5" className="flex items-center gap-2 text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" /> Chapter 5
        </Link>
        <Link href="/chapters/chapter-7" className="flex items-center gap-2 text-blue-400 hover:text-white">
          Chapter 7: Nuclear Medicine <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}