'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Chapter8() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 8: Planar Scintigraphy</span>
      </div>

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Chapter 8: Planar Scintigraphy</h1>
        <p className="text-xl text-slate-400">Gamma Camera, Collimation, and 2D Nuclear Medicine Imaging</p>
      </header>

      <div className="bg-green-900/20 border border-green-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">📚 What is this Chapter About?</h2>
        <p className="text-slate-300">
          Planar scintigraphy is the basic 2D imaging method in nuclear medicine - the "gamma camera". It detects 
          gamma rays emitted from radiotracers in the body and creates a 2D projection image. This chapter covers 
          the Anger camera design, how collimators work, and image quality factors.
        </p>
      </div>

      {/* Section 8.1: Instrumentation */}
      <section className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">8.1 Instrumentation</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">🧠 Simple Intuition</h4>
            <p className="text-slate-300">
              A gamma camera has: (1) a collimator (lead plate with holes) that only lets through gamma rays traveling 
              parallel to the holes - this gives it spatial resolution, (2) a scintillation crystal (NaI) that flashes 
              when a gamma hits, (3) photomultiplier tubes (PMTs) that detect the light and convert to electrical signal, 
              and (4) electronics that figure out WHERE the gamma hit.
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h5 className="text-white font-semibold mb-3">Gamma Camera Components</h5>
              <div className="flex items-center justify-center gap-2 py-4 flex-wrap">
                <div className="bg-slate-600 px-3 py-2 rounded text-white text-sm">Collimator</div>
                <div className="text-yellow-400">→</div>
                <div className="bg-blue-600 px-3 py-2 rounded text-white text-sm">NaI Crystal</div>
                <div className="text-yellow-400">→</div>
                <div className="bg-purple-600 px-3 py-2 rounded text-white text-sm">PMTs</div>
                <div className="text-yellow-400">→</div>
                <div className="bg-green-600 px-3 py-2 rounded text-white text-sm">Positioning</div>
                <div className="text-yellow-400">→</div>
                <div className="bg-red-600 px-3 py-2 rounded text-white text-sm">Image</div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <div className="space-y-4">
              <div className="bg-slate-800 p-3 rounded">
                <h5 className="text-white font-medium mb-2">Collimator - THE KEY COMPONENT</h5>
                <ul className="text-slate-400 text-sm">
                  <li>• <strong>Function:</strong> Allows only gamma rays traveling parallel to holes to reach detector</li>
                  <li>• <strong>Trade-off:</strong> High resolution (small holes) = low sensitivity, high sensitivity (large holes) = poor resolution</li>
                  <li>• <strong>Types:</strong> Parallel-hole (standard), converging, diverging, pinhole</li>
                  'use client';

                  import Link from 'next/link';
                  import { ArrowLeft, ArrowRight } from 'lucide-react';
                  import Latex from '@/components/Latex';

                  export default function Chapter8() {
                    return (
                      <div className="space-y-8">
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <Link href="/" className="hover:text-white">Home</Link>
                          <span>/</span>
                          <span className="text-white">Chapter 8: Planar Scintigraphy</span>
                        </div>

                        <header className="border-b border-slate-800 pb-6">
                          <h1 className="text-4xl font-bold text-white mb-2">Chapter 8: Planar Scintigraphy</h1>
                          <p className="text-xl text-slate-400">Anger Camera Instrumentation, Image Formation, Image Quality</p>
                          <div className="flex gap-4 mt-4">
                            <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">Gamma Camera</span>
                            <span className="bg-emerald-900 text-emerald-200 px-3 py-1 rounded-full text-sm">Poisson Noise</span>
                          </div>
                        </header>

                        <div className="claude-surface p-6">
                          <h2 className="text-xl font-bold text-white mb-4">What is this Chapter About?</h2>
                          <p className="text-slate-300">
                            Planar scintigraphy uses the Anger camera to form 2D projections of radiotracer
                            activity. You will see how the camera localizes events, how projections form, and
                            how resolution, sensitivity, and noise define image quality.
                          </p>
                          <div className="claude-diagram mt-4">
                            <div className="claude-kicker">Photon to pixel</div>
                            <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
                              <span className="claude-chip">Collimator</span>
                              <span className="text-slate-400">-&gt;</span>
                              <span className="claude-chip">Crystal</span>
                              <span className="text-slate-400">-&gt;</span>
                              <span className="claude-chip">PMTs</span>
                              <span className="text-slate-400">-&gt;</span>
                              <span className="claude-chip">Anger logic</span>
                            </div>
                          </div>
                        </div>

                        <section className="claude-surface overflow-hidden">
                          <div className="p-6 border-b border-slate-800">
                            <h2 className="text-2xl font-bold text-white">8.1 Introduction</h2>
                          </div>
                          <div className="p-6">
                            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                              <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
                              <p className="text-slate-300">
                                A planar scan counts photons that pass through a collimator and strike a
                                scintillation crystal. Each event is localized and tallied into a pixel map.
                              </p>
                            </div>
                          </div>
                        </section>

                        <section className="claude-surface overflow-hidden">
                          <div className="p-6 border-b border-slate-800">
                            <h2 className="text-2xl font-bold text-white">8.2 Instrumentation</h2>
                          </div>
                          <div className="p-6 space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="claude-panel p-4">
                                <div className="text-blue-300 text-sm font-semibold">8.2.1 Collimators</div>
                                <p className="text-slate-400 text-xs mt-2">Parallel-hole most common; converging, diverging, and pinhole used for specific tasks.</p>
                              </div>
                              <div className="claude-panel p-4">
                                <div className="text-purple-300 text-sm font-semibold">8.2.2 Scintillation Crystal</div>
                                <p className="text-slate-400 text-xs mt-2">NaI(Tl) converts gamma energy to light; thickness trades resolution and sensitivity.</p>
                              </div>
                              <div className="claude-panel p-4">
                                <div className="text-blue-300 text-sm font-semibold">8.2.3 Photomultiplier Tubes</div>
                                <p className="text-slate-400 text-xs mt-2">PMTs amplify light into electrical pulses that encode event location.</p>
                              </div>
                              <div className="claude-panel p-4">
                                <div className="text-purple-300 text-sm font-semibold">8.2.4 Positioning Logic</div>
                                <p className="text-slate-400 text-xs mt-2">Anger logic uses weighted centroid to estimate event position.</p>
                              </div>
                              <div className="claude-panel p-4">
                                <div className="text-blue-300 text-sm font-semibold">8.2.5 Pulse Height Analyzer</div>
                                <p className="text-slate-400 text-xs mt-2">Energy windowing rejects Compton scatter outside the photopeak.</p>
                              </div>
                              <div className="claude-panel p-4">
                                <div className="text-purple-300 text-sm font-semibold">8.2.6 Gating Circuit</div>
                                <p className="text-slate-400 text-xs mt-2">Accepts events within a chosen energy range for the tracer.</p>
                              </div>
                              <div className="claude-panel p-4">
                                <div className="text-blue-300 text-sm font-semibold">8.2.7 Image Capture</div>
                                <p className="text-slate-400 text-xs mt-2">Counts are accumulated in frames or list-mode for reconstruction.</p>
                              </div>
                              <div className="claude-panel p-4">
                                <div className="text-purple-300 text-sm font-semibold">8.2.8 Solid State Cameras</div>
                                <p className="text-slate-400 text-xs mt-2">Modern designs replace PMTs with solid-state detectors.</p>
                              </div>
                            </div>

                            <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                              <h4 className="text-sm font-semibold text-emerald-400 mb-4">Anger Camera Equations</h4>
                              <div className="grid lg:grid-cols-3 gap-4">
                                <div className="claude-panel p-3">
                                  <div className="text-slate-300 text-xs">Total signal</div>
                                  <Latex formula={String.raw`Z=\sum_{k=1}^{K} a_k`} displayMode />
                                </div>
                                <div className="claude-panel p-3">
                                  <div className="text-slate-300 text-xs">X coordinate</div>
                                  <Latex formula={String.raw`X=\frac{1}{Z}\sum_{k=1}^{K} x_k a_k`} displayMode />
                                </div>
                                <div className="claude-panel p-3">
                                  <div className="text-slate-300 text-xs">Y coordinate</div>
                                  <Latex formula={String.raw`Y=\frac{1}{Z}\sum_{k=1}^{K} y_k a_k`} displayMode />
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>

                        <section className="claude-surface overflow-hidden">
                          <div className="p-6 border-b border-slate-800">
                            <h2 className="text-2xl font-bold text-white">8.3 Image Formation</h2>
                          </div>
                          <div className="p-6 space-y-6">
                            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                              <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
                              <p className="text-slate-300">
                                The underlying activity concentration defines how many photons are emitted.
                                The detector counts are a depth-weighted projection of that activity.
                              </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-4">
                              <div className="claude-panel p-4">
                                <div className="text-slate-300 text-xs">Activity element</div>
                                <Latex formula={String.raw`dA(x,y,z)=f(x,y,z)\,dx\,dy\,dz`} displayMode />
                              </div>
                              <div className="claude-panel p-4">
                                <div className="text-slate-300 text-xs">Differential fluence</div>
                                <Latex formula={String.raw`d\phi(x_d,y_d)=\frac{dA}{4\pi r^2}\exp\left\{-\int_{0}^{r}\mu(s;E)\,ds\right\}`} displayMode />
                              </div>
                              <div className="claude-panel p-4">
                                <div className="text-slate-300 text-xs">Total fluence (tube)</div>
                                <Latex
                                  formula={String.raw`\phi(x_d,y_d)=\iiint_{Tube}\frac{f(x,y,z)}{4\pi r^2}\exp\left\{-\int_{0}^{r}\mu(s;E)\,ds\right\}\,dx\,dy\,dz`}
                                  displayMode
                                />
                              </div>
                              <div className="claude-panel p-4">
                                <div className="text-slate-300 text-xs">Simplified model</div>
                                <Latex
                                  formula={String.raw`\phi(x_d,y_d)=A_h\int_{0}^{-\infty}\frac{f(x_d,y_d,z)}{4\pi z^2}\exp\left\{-\int_{0}^{z}\mu(x_d,y_d,z';E)\,dz'\right\}\,dz`}
                                  displayMode
                                />
                              </div>
                              <div className="claude-panel p-4">
                                <div className="text-slate-300 text-xs">Pixel counts</div>
                                <Latex formula={String.raw`n_k=\epsilon T A_k\phi(x_k,y_k)`} displayMode />
                                <Latex
                                  formula={String.raw`n_k=\epsilon T A_k A_h\int_{0}^{-\infty}\frac{f(x_k,y_k,z)}{4\pi z^2}\exp\left\{-\int_{0}^{z}\mu(x_k,y_k,z';E)\,dz'\right\}\,dz`}
                                  displayMode
                                />
                              </div>
                            </div>

                            <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                              <h4 className="text-sm font-semibold text-emerald-400 mb-4">Planar Source Model</h4>
                              <div className="grid lg:grid-cols-2 gap-4">
                                <div className="claude-panel p-3">
                                  <div className="text-slate-300 text-xs">Planar source</div>
                                  <Latex formula={String.raw`f(x,y,z)=f_{z_0}(x,y)\,\delta(z-z_0)`} displayMode />
                                </div>
                                <div className="claude-panel p-3">
                                  <div className="text-slate-300 text-xs">Fluence (planar)</div>
                                  <Latex
                                    formula={String.raw`\phi(x_d,y_d)=A_h f_{z_0}(x_d,y_d)\frac{1}{4\pi z_0^2}\exp\left\{-\int_{0}^{z_0}\mu(x_d,y_d,z';E)\,dz'\right\}`}
                                    displayMode
                                  />
                                </div>
                                <div className="claude-panel p-3">
                                  <div className="text-slate-300 text-xs">Pixel counts (planar)</div>
                                  <Latex
                                    formula={String.raw`n_k=\epsilon T A_k A_h f_{z_0}(x_k,y_k)\frac{1}{4\pi z_0^2}\exp\left\{-\int_{0}^{z_0}\mu(x_k,y_k,z';E)\,dz'\right\}`}
                                    displayMode
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>

                        <section className="claude-surface overflow-hidden">
                          <div className="p-6 border-b border-slate-800">
                            <h2 className="text-2xl font-bold text-white">8.4 Image Quality</h2>
                          </div>
                          <div className="p-6 space-y-6">
                            <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
                              <h4 className="text-sm font-semibold text-purple-400 mb-4">8.4.1 Resolution</h4>
                              <div className="grid lg:grid-cols-2 gap-4">
                                <div className="claude-panel p-3">
                                  <div className="text-slate-300 text-xs">Collimator resolution</div>
                                  <Latex formula={String.raw`R_C=\frac{d}{l}(l+b+|z|)`} displayMode />
                                  <Latex formula={String.raw`FWHM=2\sigma\sqrt{2\ln 2}`} displayMode />
                                </div>
                                <div className="claude-panel p-3">
                                  <div className="text-slate-300 text-xs">Collimator PSF</div>
                                  <Latex
                                    formula={String.raw`h_C(x,y;|z|)=\exp\left\{-\frac{4(x^2+y^2)\ln 2}{R_C(|z|)^2}\right\}`}
                                    displayMode
                                  />
                                </div>
                                <div className="claude-panel p-3">
                                  <div className="text-slate-300 text-xs">Blurred planar fluence</div>
                                  <Latex
                                    formula={String.raw`\phi(x,y)=A_h f_{z_0}(x,y)\frac{1}{4\pi z_0^2}\exp\left\{-\int_{0}^{z_0}\mu(x,y,z';E)\,dz'\right\} * h_C(x,y;|z_0|)`}
                                    displayMode
                                  />
                                </div>
                                <div className="claude-panel p-3">
                                  <div className="text-slate-300 text-xs">Effective hole length</div>
                                  <Latex formula={String.raw`l_e=l-2\mu^{-1}`} displayMode />
                                  <Latex formula={String.raw`R_C=\frac{d}{l_e}(l_e+b+r)`} displayMode />
                                </div>
                                <div className="claude-panel p-3">
                                  <div className="text-slate-300 text-xs">Intrinsic PSF</div>
                                  <Latex
                                    formula={String.raw`h_I(x,y)=\exp\left\{-\frac{4(x^2+y^2)\ln 2}{R_I^2}\right\}`}
                                    displayMode
                                  />
                                </div>
                                <div className="claude-panel p-3">
                                  <div className="text-slate-300 text-xs">Combined blur</div>
                                  <Latex
                                    formula={String.raw`\phi(x,y)=A_h f_{z_0}(x,y)\frac{1}{4\pi z_0^2}\exp\left\{-\int_{0}^{z_0}\mu(x,y,z';E)\,dz'\right\} * h_C(x,y;|z_0|) * h_I(x,y)`}
                                    displayMode
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                              <h4 className="text-sm font-semibold text-emerald-400 mb-4">8.4.2 Sensitivity</h4>
                              <div className="grid lg:grid-cols-2 gap-4">
                                <div className="claude-panel p-3">
                                  <div className="text-slate-300 text-xs">Collimator sensitivity</div>
                                  <Latex formula={String.raw`\epsilon=\left(\frac{K d^2}{l_e(d+h)}\right)^2`} displayMode />
                                </div>
                                <div className="claude-panel p-3">
                                  <div className="text-slate-300 text-xs">Large distance approx</div>
                                  <Latex formula={String.raw`R_C\approx\frac{d}{l_e}|z|`} displayMode />
                                  <Latex formula={String.raw`\epsilon\approx\left(\frac{R_C K d}{|z|(d+h)}\right)^2`} displayMode />
                                </div>
                              </div>
                            </div>

                            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                              <h4 className="text-sm font-semibold text-blue-400 mb-4">8.4.3 Uniformity and 8.4.4 Energy Resolution</h4>
                              <p className="text-slate-300 text-sm">
                                Uniformity is improved through calibration corrections. Energy resolution controls
                                the width of the photopeak window and scatter rejection.
                              </p>
                            </div>

                            <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
                              <h4 className="text-sm font-semibold text-amber-400 mb-4">8.4.5 Noise</h4>
                              <div className="grid lg:grid-cols-2 gap-4">
                                <div className="claude-panel p-3">
                                  <div className="text-slate-300 text-xs">Intrinsic SNR</div>
                                  <Latex formula={String.raw`SNR=\frac{N}{\sqrt{N}}=\sqrt{N}`} displayMode />
                                </div>
                                <div className="claude-panel p-3">
                                  <div className="text-slate-300 text-xs">Per-pixel SNR</div>
                                  <Latex formula={String.raw`SNR_p=\frac{\sqrt{N}}{J}`} displayMode />
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>

                        <section className="claude-surface">
                          <div className="p-6 border-b border-slate-800">
                            <h2 className="text-2xl font-bold text-white">Chapter 8 Summary</h2>
                          </div>
                          <div className="p-6 grid md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="text-blue-400 font-semibold mb-3">Key Equations</h3>
                              <ul className="text-slate-300 text-sm space-y-3">
                                <li><Latex formula={String.raw`X=\frac{1}{Z}\sum x_k a_k,\quad Y=\frac{1}{Z}\sum y_k a_k`} /></li>
                                <li><Latex formula={String.raw`n_k=\epsilon T A_k\phi(x_k,y_k)`} /></li>
                                <li><Latex formula={String.raw`R_C=\frac{d}{l}(l+b+|z|)`} /></li>
                                <li><Latex formula={String.raw`SNR=\sqrt{N}`} /></li>
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-purple-400 font-semibold mb-3">High-Yield Concepts</h3>
                              <ul className="text-slate-300 text-sm space-y-2">
                                <li>Anger logic estimates event position and energy.</li>
                                <li>Depth dependence causes attenuation and inverse-square losses.</li>
                                <li>Resolution and sensitivity trade off through collimator geometry.</li>
                                <li>Poisson noise limits SNR per pixel.</li>
                              </ul>
                            </div>
                          </div>
                        </section>

                        <div className="flex justify-between">
                          <Link href="/chapters/chapter-7" className="flex items-center gap-2 text-slate-400 hover:text-white">
                            <ArrowLeft className="w-4 h-4" /> Chapter 7
                          </Link>
                          <Link href="/chapters/chapter-9" className="flex items-center gap-2 text-blue-400 hover:text-white">
                            Chapter 9: Emission CT <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    );
                  }