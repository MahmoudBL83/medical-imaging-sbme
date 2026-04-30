'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Chapter2() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 2: Signals and Systems</span>
      </div>

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Chapter 2: Signals and Systems</h1>
        <p className="text-xl text-slate-400">The Mathematical Foundation of Medical Imaging</p>
        <div className="flex gap-4 mt-4">
          <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">Math-Heavy</span>
          <span className="bg-emerald-900 text-emerald-300 px-3 py-1 rounded-full text-sm">Core Foundations</span>
        </div>
      </header>

      <div className="claude-surface p-6">
        <h2 className="text-xl font-bold text-white mb-4">What is this Chapter About?</h2>
        <p className="text-slate-300 leading-relaxed">
          This chapter builds the math language used across the rest of the course. Imaging systems are modeled
          as transformations that take a signal from the patient and produce a signal we can see. Once you
          understand impulses, sampling, convolution, and the Fourier transform, CT and MRI become much easier
          to explain.
        </p>
        <div className="claude-diagram mt-4">
          <div className="claude-kicker">Signal to system to image</div>
          <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
            <span className="claude-chip"><Latex formula={String.raw`f(x,y)`} /></span>
            <span className="text-slate-400">-&gt;</span>
            <span className="claude-chip"><Latex formula={String.raw`S[\cdot]`} /></span>
            <span className="text-slate-400">-&gt;</span>
            <span className="claude-chip"><Latex formula={String.raw`g(x,y)`} /></span>
          </div>
          <p className="text-slate-400 text-xs mt-2">The imaging system is the map between input and output signals.</p>
        </div>
        <div className="claude-note mt-4">
          <div className="claude-kicker">Study note</div>
          <p className="text-slate-400 text-sm">Always write the defining equation first, then interpret it clinically.</p>
        </div>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="claude-panel p-3">
            <div className="text-blue-400 font-semibold text-sm">Why It Matters</div>
            <p className="text-slate-400 text-xs mt-1">Every modality uses these transforms for reconstruction or filtering.</p>
          </div>
          <div className="claude-panel p-3">
            <div className="text-purple-400 font-semibold text-sm">Doctor's Focus</div>
            <p className="text-slate-400 text-xs mt-1">Sifting, convolution, Fourier pairs, transfer function.</p>
          </div>
          <div className="claude-panel p-3">
            <div className="text-emerald-400 font-semibold text-sm">Exam Weight</div>
            <p className="text-slate-400 text-xs mt-1">Very High - expect derivations and property questions.</p>
          </div>
        </div>
      </div>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">2.1 Introduction: Signal Classes</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300 leading-relaxed">
              A signal is just a mathematical description of a physical quantity. Signals can be continuous
              (smooth), discrete (samples), or mixed (continuous in one variable, discrete in another). Medical
              imaging uses all three.
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">Visual Explanation</h4>
            <div className="claude-diagram">
              <div className="claude-kicker">Signal classes</div>
              <div className="grid md:grid-cols-3 gap-4 mt-3">
                <div className="claude-panel p-4">
                  <div className="text-blue-300 font-semibold text-sm">Continuous</div>
                  <p className="text-slate-400 text-xs mt-2">Example: attenuation map in CT.</p>
                  <div className="mt-3 h-10 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent rounded"></div>
                </div>
                <div className="claude-panel p-4">
                  <div className="text-purple-300 font-semibold text-sm">Discrete</div>
                  <p className="text-slate-400 text-xs mt-2">Example: digitized pixel grid.</p>
                  <div className="mt-3 grid grid-cols-6 gap-2">
                    {Array.from({ length: 18 }).map((_, index) => (
                      <span key={index} className="h-2 w-2 rounded-full bg-slate-300/80"></span>
                    ))}
                  </div>
                </div>
                <div className="claude-panel p-4">
                  <div className="text-emerald-300 font-semibold text-sm">Mixed</div>
                  <p className="text-slate-400 text-xs mt-2">Example: projection data indexed by angle.</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                    <span className="claude-chip">Continuous</span>
                    <span>+</span>
                    <span className="claude-chip">Discrete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Technical Depth</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-sm mb-2">Continuous signal</div>
                <div className="bg-slate-800 p-3 rounded-lg text-center">
                  <Latex formula={String.raw`f(x,y),\ -\infty \le x,y \le \infty`} displayMode />
                </div>
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-sm mb-2">Discrete signal</div>
                <div className="bg-slate-800 p-3 rounded-lg text-center">
                  <Latex formula={String.raw`f_d[m,n],\ m,n \in \mathbb{Z}`} displayMode />
                </div>
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-sm mb-2">Mixed signal</div>
                <div className="bg-slate-800 p-3 rounded-lg text-center">
                  <Latex formula={String.raw`g(\ell,\theta_k),\ \ell \in \mathbb{R},\ \theta_k\ \text{discrete}`} displayMode />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Know continuous vs discrete vs mixed definitions.</li>
              <li>Be ready to classify CT, MR, and detector data by signal type.</li>
              <li>Use the correct independent variables (space, time, angle).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">2.2 Signals: Building Blocks</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300 leading-relaxed">
              Imaging math is built from a small toolbox: impulses to pick out points, combs to sample grids,
              rects to window a region, and sinusoids to represent frequency content.
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">Visual Explanation</h4>
            <div className="claude-diagram">
              <div className="claude-kicker">Impulse family</div>
              <div className="grid md:grid-cols-3 gap-4 mt-3">
                <div className="claude-panel p-4 text-center">
                  <div className="text-blue-300 text-sm font-semibold">Point impulse</div>
                  <div className="w-2 h-2 bg-slate-200 rounded-full mx-auto mt-4"></div>
                  <p className="text-slate-400 text-xs mt-3">Single location</p>
                </div>
                <div className="claude-panel p-4 text-center">
                  <div className="text-purple-300 text-sm font-semibold">Line impulse</div>
                  <div className="w-0.5 h-12 bg-slate-200 mx-auto mt-3"></div>
                  <p className="text-slate-400 text-xs mt-3">All points on a line</p>
                </div>
                <div className="claude-panel p-4 text-center">
                  <div className="text-emerald-300 text-sm font-semibold">Sampling grid</div>
                  <div className="grid grid-cols-5 gap-2 place-items-center mt-3">
                    {Array.from({ length: 15 }).map((_, index) => (
                      <span key={index} className="w-2 h-2 bg-slate-300 rounded-full"></span>
                    ))}
                  </div>
                  <p className="text-slate-400 text-xs mt-3">Comb function</p>
                </div>
              </div>
            </div>
            <div className="claude-diagram mt-4">
              <div className="claude-kicker">Rect vs sinc</div>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div className="claude-panel p-4 text-center">
                  <div className="text-blue-300 text-sm font-semibold">rect</div>
                  <div className="mt-3 h-8 bg-blue-400/70 rounded"></div>
                  <p className="text-slate-400 text-xs mt-3">Finite window</p>
                </div>
                <div className="claude-panel p-4 text-center">
                  <div className="text-purple-300 text-sm font-semibold">sinc</div>
                  <div className="mt-3 flex items-end justify-center gap-1 h-8">
                    <span className="w-1 h-2 bg-purple-400/50"></span>
                    <span className="w-1 h-4 bg-purple-400/60"></span>
                    <span className="w-1 h-7 bg-purple-400/70"></span>
                    <span className="w-1 h-4 bg-purple-400/60"></span>
                    <span className="w-1 h-2 bg-purple-400/50"></span>
                  </div>
                  <p className="text-slate-400 text-xs mt-3">Main lobe + side lobes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Technical Depth</h4>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="claude-panel p-4">
                <div className="text-blue-300 text-sm font-semibold mb-2">Point impulse + sifting</div>
                <div className="space-y-2">
                  <Latex formula={String.raw`\delta(x)=0\ \text{for}\ x\ne 0`} displayMode />
                  <Latex formula={String.raw`\int_{-\infty}^{\infty} f(x)\,\delta(x-a)\,dx=f(a)`} displayMode />
                </div>
              </div>
              <div className="claude-panel p-4">
                <div className="text-purple-300 text-sm font-semibold mb-2">Line impulse</div>
                <Latex formula={String.raw`\delta_\ell(x,y)=\delta(x\cos\theta+y\sin\theta-\ell)`} displayMode />
              </div>
              <div className="claude-panel p-4">
                <div className="text-emerald-300 text-sm font-semibold mb-2">Comb + sampling</div>
                <Latex formula={String.raw`\mathrm{comb}(x)=\sum_{n=-\infty}^{\infty}\delta(x-n)`} displayMode />
                <Latex formula={String.raw`\delta_s(x,y;\Delta x,\Delta y)=\sum_{m}\sum_{n}\delta(x-m\Delta x,\ y-n\Delta y)`} displayMode />
              </div>
              <div className="claude-panel p-4">
                <div className="text-amber-300 text-sm font-semibold mb-2">Rect + sinc</div>
                <Latex formula={String.raw`\mathrm{rect}(x)=\begin{cases}1,&|x|<\tfrac{1}{2}\\0,&|x|>\tfrac{1}{2}\end{cases}`} displayMode />
                <Latex formula={String.raw`\mathrm{sinc}(x)=\frac{\sin(\pi x)}{\pi x}`} displayMode />
              </div>
              <div className="claude-panel p-4">
                <div className="text-blue-300 text-sm font-semibold mb-2">Exponentials + sinusoids</div>
                <Latex formula={String.raw`e^{j2\pi(u_0x+v_0y)}=\cos(2\pi(u_0x+v_0y))+j\sin(2\pi(u_0x+v_0y))`} displayMode />
              </div>
              <div className="claude-panel p-4">
                <div className="text-purple-300 text-sm font-semibold mb-2">Separable signals</div>
                <Latex formula={String.raw`f(x,y)=f_1(x)\,f_2(y)`} displayMode />
              </div>
              <div className="claude-panel p-4">
                <div className="text-emerald-300 text-sm font-semibold mb-2">Periodic signals</div>
                <Latex formula={String.raw`f(x,y)=f(x+X,y)=f(x,y+Y)`} displayMode />
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Sifting property and scaling of the impulse appear repeatedly.</li>
              <li>Know comb and sampling function definitions cold.</li>
              <li>rect and sinc are a core Fourier pair.</li>
              <li>Separable signals reduce 2-D math to two 1-D steps.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">2.3 Systems: Linearity, Shift Invariance, Convolution</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300 leading-relaxed">
              Imaging systems blur and scale what goes in. If a system is linear and shift-invariant (LSI),
              its behavior is completely captured by its impulse response, and everything becomes convolution.
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">Visual Explanation</h4>
            <div className="claude-diagram">
              <div className="claude-kicker">LSI pipeline</div>
              <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
                <span className="claude-chip"><Latex formula={String.raw`f(x,y)`} /></span>
                <span className="text-slate-400">*</span>
                <span className="claude-chip"><Latex formula={String.raw`h(x,y)`} /></span>
                <span className="text-slate-400">=</span>
                <span className="claude-chip"><Latex formula={String.raw`g(x,y)`} /></span>
              </div>
              <p className="text-slate-400 text-xs mt-2">Convolution: output is input blurred by the PSF.</p>
            </div>
            <div className="claude-diagram mt-4">
              <div className="claude-kicker">System connections</div>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div className="claude-panel p-3">
                  <div className="text-slate-300 text-xs">Cascade</div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="claude-chip">h1</span>
                    <span className="text-slate-400">-&gt;</span>
                    <span className="claude-chip">h2</span>
                    <span className="text-slate-400">=&gt;</span>
                    <span className="claude-chip">h1 * h2</span>
                  </div>
                </div>
                <div className="claude-panel p-3">
                  <div className="text-slate-300 text-xs">Parallel</div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="claude-chip">h1</span>
                    <span className="text-slate-400">+</span>
                    <span className="claude-chip">h2</span>
                    <span className="text-slate-400">=&gt;</span>
                    <span className="claude-chip">h1 + h2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Technical Depth</h4>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="claude-panel p-4">
                <div className="text-blue-300 text-sm font-semibold mb-2">Input-output relation</div>
                <Latex formula={String.raw`g(x,y)=S[f(x,y)]`} displayMode />
              </div>
              <div className="claude-panel p-4">
                <div className="text-purple-300 text-sm font-semibold mb-2">Linearity</div>
                <Latex formula={String.raw`S\left[\sum_k w_k f_k(x,y)\right]=\sum_k w_k S[f_k(x,y)]`} displayMode />
              </div>
              <div className="claude-panel p-4">
                <div className="text-emerald-300 text-sm font-semibold mb-2">Impulse response</div>
                <Latex formula={String.raw`h(x,y;\xi,\eta)=S[\delta(x-\xi,y-\eta)]`} displayMode />
              </div>
              <div className="claude-panel p-4">
                <div className="text-amber-300 text-sm font-semibold mb-2">Superposition integral</div>
                <Latex formula={String.raw`g(x,y)=\int\!\!\int f(\xi,\eta)\,h(x,y;\xi,\eta)\,d\xi\,d\eta`} displayMode />
              </div>
              <div className="claude-panel p-4">
                <div className="text-blue-300 text-sm font-semibold mb-2">Shift invariance (LSI)</div>
                <Latex formula={String.raw`g(x,y)=h(x,y)*f(x,y)`} displayMode />
              </div>
              <div className="claude-panel p-4">
                <div className="text-purple-300 text-sm font-semibold mb-2">BIBO stability</div>
                <Latex formula={String.raw`\int\!\!\int |h(x,y)|\,dx\,dy < \infty`} displayMode />
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Know when you can assume LSI and when you cannot.</li>
              <li>Convolution is the key operation for system response.</li>
              <li>PSF and impulse response are the same concept.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">2.4 Fourier Transform</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300 leading-relaxed">
              The Fourier transform rewrites an image as a sum of sinusoids. Slow variations show up at low
              spatial frequencies, and sharp edges show up at high frequencies.
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">Visual Explanation</h4>
            <div className="claude-diagram">
              <div className="claude-kicker">Spatial to frequency</div>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div className="claude-panel p-4">
                  <div className="text-slate-300 text-xs">Spatial domain</div>
                  <div className="mt-3 h-10 bg-gradient-to-r from-slate-800 via-slate-500 to-slate-800 rounded"></div>
                </div>
                <div className="claude-panel p-4">
                  <div className="text-slate-300 text-xs">Frequency domain</div>
                  <div className="mt-3 flex items-end gap-2 h-10">
                    <span className="w-2 h-8 bg-blue-400/70"></span>
                    <span className="w-2 h-4 bg-blue-400/50"></span>
                    <span className="w-2 h-2 bg-blue-400/40"></span>
                    <span className="w-2 h-4 bg-blue-400/50"></span>
                    <span className="w-2 h-8 bg-blue-400/70"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Technical Depth</h4>
            <div className="space-y-3">
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <Latex formula={String.raw`F(u,v)=\int_{-\infty}^{\infty}\!\!\int_{-\infty}^{\infty} f(x,y)e^{-j2\pi(ux+vy)}\,dx\,dy`} displayMode />
              </div>
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <Latex formula={String.raw`f(x,y)=\int_{-\infty}^{\infty}\!\!\int_{-\infty}^{\infty} F(u,v)e^{j2\pi(ux+vy)}\,du\,dv`} displayMode />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="claude-panel p-3">
                  <div className="text-slate-300 text-xs">Magnitude</div>
                  <Latex formula={String.raw`|F(u,v)|=\sqrt{F_R^2(u,v)+F_I^2(u,v)}`} displayMode />
                </div>
                <div className="claude-panel p-3">
                  <div className="text-slate-300 text-xs">Phase</div>
                  <Latex formula={String.raw`\angle F(u,v)=\tan^{-1}\left(\frac{F_I(u,v)}{F_R(u,v)}\right)`} displayMode />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Know forward and inverse transform equations.</li>
              <li>Explain how low vs high spatial frequencies relate to image content.</li>
              <li>Magnitude and phase together reconstruct the image.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">2.5 Properties of the Fourier Transform</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300 leading-relaxed">
              Properties let you transform problems quickly without doing integrals. If you can spot a property,
              you can compute transforms in seconds.
            </p>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Property Map</h4>
            <div className="claude-diagram">
              <div className="claude-kicker">High-yield properties</div>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div className="claude-panel p-3">
                  <div className="text-blue-300 text-xs">Linearity</div>
                  <Latex formula={String.raw`a_1 f + a_2 g \leftrightarrow a_1 F + a_2 G`} displayMode />
                </div>
                <div className="claude-panel p-3">
                  <div className="text-purple-300 text-xs">Translation</div>
                  <Latex formula={String.raw`f(x-x_0,y-y_0) \leftrightarrow F(u,v)e^{-j2\pi(ux_0+vy_0)}`} displayMode />
                </div>
                <div className="claude-panel p-3">
                  <div className="text-emerald-300 text-xs">Scaling</div>
                  <Latex formula={String.raw`f(ax,by) \leftrightarrow \frac{1}{|ab|}F\left(\frac{u}{a},\frac{v}{b}\right)`} displayMode />
                </div>
                <div className="claude-panel p-3">
                  <div className="text-amber-300 text-xs">Convolution</div>
                  <Latex formula={String.raw`f * g \leftrightarrow F \cdot G`} displayMode />
                </div>
                <div className="claude-panel p-3">
                  <div className="text-blue-300 text-xs">Product</div>
                  <Latex formula={String.raw`f \cdot g \leftrightarrow F * G`} displayMode />
                </div>
                <div className="claude-panel p-3">
                  <div className="text-purple-300 text-xs">Rotation</div>
                  <Latex formula={String.raw`f_\theta(x,y) \leftrightarrow F_\theta(u,v)`} displayMode />
                </div>
                <div className="claude-panel p-3">
                  <div className="text-emerald-300 text-xs">Conjugate symmetry</div>
                  <Latex formula={String.raw`f \ \text{real} \Rightarrow F(u,v)=F^*(-u,-v)`} displayMode />
                </div>
                <div className="claude-panel p-3">
                  <div className="text-amber-300 text-xs">Parseval</div>
                  <Latex formula={String.raw`\int\!\!\int |f|^2\,dx\,dy=\int\!\!\int |F|^2\,du\,dv`} displayMode />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Translation changes phase, not magnitude.</li>
              <li>Convolution in space equals multiplication in frequency.</li>
              <li>Scaling flips size in frequency by the reciprocal factor.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">2.6 Transfer Function</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300 leading-relaxed">
              The transfer function tells you how each spatial frequency is scaled by the system. It is the
              frequency-domain version of the PSF.
            </p>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Technical Depth</h4>
            <div className="space-y-3">
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <Latex formula={String.raw`H(u,v)=\int\!\!\int h(x,y)e^{-j2\pi(ux+vy)}\,dx\,dy`} displayMode />
              </div>
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <Latex formula={String.raw`G(u,v)=H(u,v)\,F(u,v)`} displayMode />
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Transfer function is the Fourier transform of the PSF.</li>
              <li>Multiplication in frequency is the same as convolution in space.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="claude-surface">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">Chapter 2 Summary</h2>
        </div>
        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-blue-400 font-semibold mb-3">Key Equations</h3>
            <ul className="text-slate-300 text-sm space-y-3">
              <li><Latex formula={String.raw`\int f(x)\,\delta(x-a)\,dx=f(a)`} /></li>
              <li><Latex formula={String.raw`g(x,y)=h(x,y)*f(x,y)`} /></li>
              <li><Latex formula={String.raw`F(u,v)=\int\!\!\int f(x,y)e^{-j2\pi(ux+vy)}\,dx\,dy`} /></li>
              <li><Latex formula={String.raw`f(x,y)=\int\!\!\int F(u,v)e^{j2\pi(ux+vy)}\,du\,dv`} /></li>
              <li><Latex formula={String.raw`G(u,v)=H(u,v)F(u,v)`} /></li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-400 font-semibold mb-3">High-Yield Concepts</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>LSI systems are defined by their PSF.</li>
              <li>Sampling uses the comb function and introduces discretization.</li>
              <li>rect and sinc are core Fourier pairs.</li>
              <li>Fourier properties save time on exam derivations.</li>
              <li>Transfer function describes system behavior in frequency space.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-between">
        <Link href="/chapters/chapter-1" className="flex items-center gap-2 text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" /> Chapter 1
        </Link>
        <Link href="/chapters/chapter-3" className="flex items-center gap-2 text-blue-400 hover:text-white">
          Chapter 3: Image Quality <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}