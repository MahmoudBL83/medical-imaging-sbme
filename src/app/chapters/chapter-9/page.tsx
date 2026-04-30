'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function Chapter9() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 9: Emission Computed Tomography</span>
      </div>

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Chapter 9: Emission Computed Tomography</h1>
        <p className="text-xl text-slate-400">SPECT and PET - 3D Nuclear Medicine Imaging</p>
      </header>

      'use client';

      import Link from 'next/link';
      import { ArrowLeft } from 'lucide-react';
      import Latex from '@/components/Latex';

      export default function Chapter9() {
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">Chapter 9: Emission Computed Tomography</span>
            </div>

            <header className="border-b border-slate-800 pb-6">
              <h1 className="text-4xl font-bold text-white mb-2">Chapter 9: Emission Computed Tomography</h1>
              <p className="text-xl text-slate-400">SPECT, PET, Reconstruction, Image Quality</p>
              <div className="flex gap-4 mt-4">
                <span className="bg-purple-900 text-purple-200 px-3 py-1 rounded-full text-sm">SPECT</span>
                <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">PET</span>
              </div>
            </header>

            <div className="claude-surface p-6">
              <h2 className="text-xl font-bold text-white mb-4">What is this Chapter About?</h2>
              <p className="text-slate-300">
                Emission CT forms cross-sectional images from radioactive emissions. SPECT
                uses rotating gamma cameras, while PET uses coincidence detection of 511 keV
                photon pairs. This chapter builds imaging equations and links physics to image
                quality.
              </p>
              <div className="claude-diagram mt-4">
                <div className="claude-kicker">Emission CT overview</div>
                <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
                  <span className="claude-chip">Radiotracer</span>
                  <span className="text-slate-400">-&gt;</span>
                  <span className="claude-chip">Projections</span>
                  <span className="text-slate-400">-&gt;</span>
                  <span className="claude-chip">Reconstruction</span>
                  <span className="text-slate-400">-&gt;</span>
                  <span className="claude-chip">SPECT/PET slice</span>
                </div>
              </div>
            </div>

            <section className="claude-surface overflow-hidden">
              <div className="p-6 border-b border-slate-800">
                <h2 className="text-2xl font-bold text-white">9.1 Instrumentation</h2>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="claude-panel p-4">
                    <div className="text-blue-300 text-sm font-semibold">9.1.1 SPECT Instrumentation</div>
                    <p className="text-slate-400 text-xs mt-2">Rotating Anger camera heads with parallel-hole collimators.</p>
                  </div>
                  <div className="claude-panel p-4">
                    <div className="text-purple-300 text-sm font-semibold">9.1.2 PET Instrumentation</div>
                    <p className="text-slate-400 text-xs mt-2">Ring detectors measure coincidence pairs; no collimator.</p>
                  </div>
                </div>

                <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-4">Time-of-Flight PET</h4>
                  <Latex
                    formula={String.raw`SNR_{TOF}=\sqrt{\frac{2D}{c\Delta t}}\,SNR_{non\text{-}TOF}`}
                    displayMode
                  />
                </div>
              </div>
            </section>

            <section className="claude-surface overflow-hidden">
              <div className="p-6 border-b border-slate-800">
                <h2 className="text-2xl font-bold text-white">9.2 Image Formation</h2>
              </div>
              <div className="p-6 space-y-6">
                <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">9.2.1 SPECT Image Formation</h4>
                  <div className="space-y-3">
                    <Latex
                      formula={String.raw`\phi(z,\ell)=A_h\int_{R}^{-\infty}\frac{f(x,y,z)}{4\pi(y-R)^2}\exp\left\{-\int_{R}^{y}\mu(x,y';E)\,dy'\right\}\,dy`}
                      displayMode
                    />
                    <Latex formula={String.raw`L(\ell,\theta)=\{(x,y)\mid x\cos\theta+y\sin\theta=\ell\}`} displayMode />
                    <Latex formula={String.raw`x(s)=\ell\cos\theta-s\sin\theta`} displayMode />
                    <Latex formula={String.raw`y(s)=\ell\sin\theta+s\cos\theta`} displayMode />
                    <Latex
                      formula={String.raw`n_k(\ell,\theta)=\epsilon T A_k A_h\int_{R}^{-\infty}\frac{f(x(s),y(s))}{4\pi(s-R)^2}\exp\left\{-\int_{R}^{s}\mu(x(s'),y(s');E)\,ds'\right\}\,ds`}
                      displayMode
                    />
                    <Latex formula={String.raw`n_k(\ell,\theta)=\epsilon T A_k A_h\int_{-\infty}^{\infty} f(x(s),y(s))\,ds`} displayMode />
                    <Latex formula={String.raw`g(\ell,\theta)=\frac{n_k(\ell,\theta)}{T A_k A_h \epsilon}`} displayMode />
                    <Latex
                      formula={String.raw`g(\ell,\theta)=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty} f(x,y)\,\delta(x\cos\theta+y\sin\theta-\ell)\,dx\,dy`}
                      displayMode
                    />
                    <Latex
                      formula={String.raw`\hat{f}(x,y)=\int_{0}^{\pi}\int_{-\infty}^{\infty} g(\ell,\theta)\,\tilde{c}(x\cos\theta+y\sin\theta-\ell)\,d\ell\,d\theta`}
                      displayMode
                    />
                    <Latex formula={String.raw`\tilde{c}(\ell)=\mathcal{F}^{-1}_{1D}\{\lvert\varrho\rvert W(\varrho)\}`} displayMode />
                    <Latex
                      formula={String.raw`W(\varrho)=\frac{1}{\sqrt{1+\left(\frac{\varrho}{\varrho_c}\right)^{2n}}}`}
                      displayMode
                    />
                    <Latex formula={String.raw`\hat{f}_c(x,y)=\frac{\hat{f}(x,y)}{a(x,y)}`} displayMode />
                  </div>
                </div>

                <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">9.2.2 PET Image Formation</h4>
                  <div className="space-y-3">
                    <Latex formula={String.raw`d\phi(x_d,y_d)=\frac{dA}{4\pi R^2}`} displayMode />
                    <Latex
                      formula={String.raw`d\phi(x_d,y_d)=\frac{dA}{4\pi R^2}\exp\left\{-\int_{-R}^{R}\mu(s;E)\,ds\right\}`}
                      displayMode
                    />
                    <Latex
                      formula={String.raw`d\phi(x_d,y_d)=\frac{dA}{4\pi(R+|s|)^2}\exp\left\{-\int_{-R}^{R}\mu(s';E)\,ds'\right\}`}
                      displayMode
                    />
                    <Latex formula={String.raw`dA(s)=\tilde{A}_h f(x(s),y(s),z)\,ds`} displayMode />
                    <Latex
                      formula={String.raw`\phi(x_d,y_d)=\tilde{A}_h\int_{-R}^{R}\frac{f(x(s),y(s))}{4\pi(R+|s|)^2}\exp\left\{-\int_{-R}^{R}\mu(s';E)\,ds'\right\}\,ds`}
                      displayMode
                    />
                    <Latex
                      formula={String.raw`n(\ell,\theta)=\epsilon T A_h \tilde{A}_h\int_{-R}^{R}\frac{f(x(s),y(s))}{4\pi(R+|s|)^2}\exp\left\{-\int_{-R}^{R}\mu(x(s'),y(s');E)\,ds'\right\}\,ds`}
                      displayMode
                    />
                    <Latex
                      formula={String.raw`n(\ell,\theta)=\frac{\epsilon T A_h \tilde{A}_h}{4\pi R^2}\int_{-R}^{R} f(x(s),y(s))\,ds\exp\left\{-\int_{-R}^{R}\mu(x(s'),y(s');E)\,ds'\right\}`}
                      displayMode
                    />
                    <Latex formula={String.raw`n(\ell,\theta)\approx K\int_{-R}^{R} f(x(s),y(s))\,ds`} displayMode />
                    <Latex
                      formula={String.raw`K=\frac{\epsilon T A_h \tilde{A}_h}{4\pi R^2}\exp\left\{-\int_{-R}^{R}\mu(x(s'),y(s');E)\,ds'\right\}`}
                      displayMode
                    />
                    <Latex formula={String.raw`g(\ell,\theta)=\frac{n(\ell,\theta)}{K}`} displayMode />
                    <Latex formula={String.raw`g(\ell,\theta)\approx\int_{-R}^{R} f(x(s),y(s))\,ds`} displayMode />
                  </div>
                </div>

                <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-2">PET Attenuation Correction</h4>
                  <div className="space-y-3">
                    <Latex
                      formula={String.raw`g_c(\ell,\theta)=\frac{n(\ell,\theta)}{K}\exp\left\{\int_{-R}^{R}\mu(x(s'),y(s');511\ \text{keV})\,ds'\right\}`}
                      displayMode
                    />
                    <Latex formula={String.raw`g_c(\ell,\theta)=\int_{-R}^{R} f(x(s),y(s))\,ds`} displayMode />
                    <Latex
                      formula={String.raw`\hat{f}(x,y)=\int_{0}^{\pi}\int_{-\infty}^{\infty} g_c(\ell,\theta)\,\tilde{c}(x\cos\theta+y\sin\theta-\ell)\,d\ell\,d\theta`}
                      displayMode
                    />
                  </div>
                </div>

                <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <h4 className="text-sm font-semibold text-amber-400 mb-2">9.2.3 Iterative Reconstruction</h4>
                  <div className="space-y-3">
                    <Latex formula={String.raw`f(x,y)=\sum_{j=1}^{m} f_j p_j(x,y)`} displayMode />
                    <Latex formula={String.raw`g_i=\sum_{j=1}^{m} a_{ij} f_j`} displayMode />
                    <Latex formula={String.raw`g_i=\mathbf{a}_i\cdot\mathbf{f}`} displayMode />
                    <Latex formula={String.raw`\mathbf{g}=A\mathbf{f}`} displayMode />
                    <Latex formula={String.raw`\mathbf{f}=A^{-1}\mathbf{g}`} displayMode />
                    <Latex formula={String.raw`\hat{\mathbf{f}}=(A^T A)^{-1}A^T\mathbf{g}`} displayMode />
                    <Latex
                      formula={String.raw`\hat{\mathbf{f}}^{(k)}=\hat{\mathbf{f}}^{(k-1)}-\frac{\mathbf{a}_i\cdot\hat{\mathbf{f}}^{(k-1)}-g_i}{\mathbf{a}_i\cdot\mathbf{a}_i}\,\mathbf{a}_i`}
                      displayMode
                    />
                    <Latex formula={String.raw`n_i(\mathbf{f})=\sum_{j=1}^{m} a_{ij} f_j + r_i`} displayMode />
                    <Latex formula={String.raw`L(\mathbf{f})=\sum_{i=1}^{m} n_i\ln n_i(\mathbf{f})-n_i(\mathbf{f})`} displayMode />
                    <Latex
                      formula={String.raw`f_j^{(k+1)}=\frac{f_j^{(k)}}{a_j}\sum_{i=1}^{n} a_{ji}\frac{n_i}{n_i(\mathbf{f}^{(k)})}`}
                      displayMode
                    />
                    <Latex formula={String.raw`a_j=\sum_{i=1}^{n} a_{ij}`} displayMode />
                  </div>
                </div>
              </div>
            </section>

            <section className="claude-surface overflow-hidden">
              <div className="p-6 border-b border-slate-800">
                <h2 className="text-2xl font-bold text-white">9.3 Image Quality in SPECT and PET</h2>
              </div>
              <div className="p-6 space-y-6">
                <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">9.3.1 Spatial Resolution</h4>
                  <Latex formula={String.raw`\hat{f}(x,y)=f(x,y)*h(r)`} displayMode />
                </div>

                <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">9.3.2 Attenuation and Scatter</h4>
                  <p className="text-slate-300 text-sm">
                    Attenuation and scatter distort counts in both SPECT and PET; PET allows
                    exact line-integral correction while SPECT relies on approximations.
                  </p>
                </div>

                <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-2">9.3.3 Random Coincidences</h4>
                  <Latex formula={String.raw`R=2\tau S^+ S^-`} displayMode />
                </div>

                <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <h4 className="text-sm font-semibold text-amber-400 mb-2">9.3.4 Contrast and Noise</h4>
                  <p className="text-slate-300 text-sm">
                    Finite resolution and statistical noise reduce contrast, especially for small
                    high-uptake structures.
                  </p>
                </div>
              </div>
            </section>

            <section className="claude-surface">
              <div className="p-6 border-b border-slate-800">
                <h2 className="text-2xl font-bold text-white">Chapter 9 Summary</h2>
              </div>
              <div className="p-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-blue-400 font-semibold mb-3">Key Equations</h3>
                  <ul className="text-slate-300 text-sm space-y-3">
                    <li><Latex formula={String.raw`g(\ell,\theta)=\int f(x,y)\,dl`} /></li>
                    <li><Latex formula={String.raw`g_c(\ell,\theta)=\frac{n(\ell,\theta)}{K}\exp\left\{\int \mu\,ds\right\}`} /></li>
                    <li><Latex formula={String.raw`R=2\tau S^+S^-`} /></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-purple-400 font-semibold mb-3">High-Yield Concepts</h3>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>SPECT uses collimated projections; PET uses coincidence LORs.</li>
                    <li>TOF improves SNR for larger objects.</li>
                    <li>Iterative reconstruction models attenuation, scatter, and noise.</li>
                    <li>Random coincidences rise with activity and timing window width.</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="flex justify-between">
              <Link href="/chapters/chapter-8" className="flex items-center gap-2 text-slate-400 hover:text-white">
                <ArrowLeft className="w-4 h-4" /> Chapter 8
              </Link>
              <span className="text-slate-600">End of Part II</span>
            </div>
          </div>
        );
      }
              <li>• Uses collimator</li>
              <li>• Filtered back-projection</li>
              <li>• Attenuation correction: challenging</li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-400 font-semibold mb-2">PET</h3>
            <ul className="text-slate-300 text-sm">
              <li>• Positron annihilation (511 keV)</li>
              <li>• Coincidence detection (no collimator)</li>
              <li>• Attenuation correction: using coincidence data</li>
              <li>• More sensitive, better resolution</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-blue-900/30 rounded-lg">
          <p className="text-white font-semibold">🎓 Course Complete! You've studied all 9 chapters of Medical Imaging!</p>
        </div>
      </section>

      <div className="flex justify-between">
        <Link href="/chapters/chapter-8" className="flex items-center gap-2 text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" /> Chapter 8
        </Link>
        <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-white">
          <BookOpen className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}