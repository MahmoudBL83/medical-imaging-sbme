'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Zap, Target, Activity, Info, Maximize, Layers, Divide } from 'lucide-react';
import Latex from '@/components/Latex';
import ExamTip from '@/components/ExamTip';
import FormulaBox from '@/components/FormulaBox';

export default function Chapter2() {
  return (
    <div className="space-y-10 pb-20">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 2: Signals and Systems</span>
      </div>

      <header className="border-b border-slate-800 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight uppercase">
          Chapter 2: Signals and Systems
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          The mathematical language of medical imaging: From impulses and convolution to the Fourier transform.
        </p>
        <div className="flex gap-4 mt-6">
          <span className="bg-purple-950/40 text-purple-400 border border-purple-800/50 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
            <Divide className="w-4 h-4" /> Math-Heavy
          </span>
          <span className="bg-blue-950/40 text-blue-400 border border-blue-800/50 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
            <Maximize className="w-4 h-4" /> Frequency Analysis
          </span>
        </div>
      </header>

      {/* Chapter Overview */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-blue-400" /> Mathematical Foundation
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Imaging systems are mathematical operators that transform an object <Latex formula="f(x,y)" /> into an image <Latex formula="g(x,y)" />. Understanding these transformations is the key to reconstructing and improving medical images.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Impulses', icon: <Target className="w-5 h-5 text-red-400" />, desc: 'The building blocks of signals.' },
            { title: 'Convolution', icon: <Layers className="w-5 h-5 text-cyan-400" />, desc: 'Modeling system blur (PSF).' },
            { title: 'Fourier', icon: <Maximize className="w-5 h-5 text-purple-400" />, desc: 'Moving to the frequency domain.' },
            { title: 'Sampling', icon: <Activity className="w-5 h-5 text-emerald-400" />, desc: 'Continuous to discrete grids.' },
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

      {/* 2.1-2.2 Signals & Building Blocks */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-blue-900/20">2.1</div>
          <h2 className="text-3xl font-bold text-white italic">Signals & Building Blocks</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">The Delta Function (Impulse)</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                The Dirac delta <Latex formula="\delta(x)" /> is the most fundamental signal. It has infinite height, zero width, and an area of exactly 1.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <FormulaBox 
                  name="Sifting Property"
                  formula={String.raw`\int_{-\infty}^{\infty} f(x)\delta(x-a)dx = f(a)`}
                  intuition="The impulse 'picks out' the value of the function at the location of the spike."
                />
                <FormulaBox 
                  name="2D Impulse"
                  formula={String.raw`\delta(x,y) = \delta(x)\delta(y)`}
                  intuition="A 2D point at the origin."
                />
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Special Functions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div className="text-cyan-400 font-bold text-xs uppercase mb-2">Rect Function</div>
                  <Latex formula={String.raw`rect(x) = \begin{cases} 1 & |x| < 1/2 \\ 0 & |x| > 1/2 \end{cases}`} displayMode />
                </div>
                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div className="text-purple-400 font-bold text-xs uppercase mb-2">Sinc Function</div>
                  <Latex formula={String.raw`sinc(x) = \frac{\sin(\pi x)}{\pi x}`} displayMode />
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <ExamTip type="remember" title="Sampling Grid">
              The <strong>Comb Function</strong> is used to model sampling:
              <br/><br/>
              <Latex formula={String.raw`comb(x) = \sum_{n=-\infty}^{\infty} \delta(x-n)`} displayMode />
            </ExamTip>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase">Signal Classes</h4>
              <ul className="space-y-2">
                <li className="text-xs text-slate-400"><strong className="text-white">Continuous:</strong> f(x,y)</li>
                <li className="text-xs text-slate-400"><strong className="text-white">Discrete:</strong> f[m,n]</li>
                <li className="text-xs text-slate-400"><strong className="text-white">Mixed:</strong> g(l, θk)</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* 2.3 Linear Systems */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-cyan-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-cyan-900/20">2.3</div>
          <h2 className="text-3xl font-bold text-white italic">Linear Systems & Convolution</h2>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white uppercase tracking-widest">System Response</h3>
              <p className="text-slate-300 leading-relaxed">
                If a system is <strong>Linear</strong> and <strong>Shift-Invariant (LSI)</strong>, its output is determined by the convolution of the input with the Point Spread Function (PSF).
              </p>
              <FormulaBox 
                name="Convolution Integral"
                formula={String.raw`g(x,y) = f(x,y) * h(x,y)`}
                symbols={[
                  { symbol: 'f(x,y)', meaning: 'Input Object' },
                  { symbol: 'h(x,y)', meaning: 'Impulse Response (PSF)' },
                  { symbol: 'g(x,y)', meaning: 'Output Image' }
                ]}
              />
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h4 className="text-cyan-400 font-bold text-xs uppercase mb-4">LSI Properties</h4>
                <ul className="text-slate-400 text-xs space-y-3">
                  <li><strong className="text-white">Commutative:</strong> f * h = h * f</li>
                  <li><strong className="text-white">Distributive:</strong> f * (h1 + h2) = f * h1 + f * h2</li>
                  <li><strong className="text-white">Associative:</strong> f * (h1 * h2) = (f * h1) * h2</li>
                </ul>
              </div>
              <ExamTip type="tip">
                In cascading systems (e.g., source blur + detector blur), the total PSF is the <strong>convolution</strong> of individual PSFs.
              </ExamTip>
            </div>
          </div>
        </div>
      </section>

      {/* 2.4-2.5 Fourier Transform */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-purple-900/20">2.4</div>
          <h2 className="text-3xl font-bold text-white italic tracking-widest">Fourier Analysis</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-purple-400 mb-6 uppercase tracking-widest">2D Fourier Transform</h3>
              <div className="space-y-6">
                <FormulaBox 
                  name="Forward Transform"
                  formula={String.raw`F(u,v) = \int\!\int f(x,y)e^{-j2\pi(ux+vy)}dxdy`}
                />
                <FormulaBox 
                  name="Inverse Transform"
                  formula={String.raw`f(x,y) = \int\!\int F(u,v)e^{j2\pi(ux+vy)}dudv`}
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
            <h4 className="text-purple-300 font-bold text-xs uppercase mb-4">High-Yield Properties</h4>
            <div className="space-y-3">
              {[
                { name: 'Linearity', formula: 'af + bg ↔ aF + bG' },
                { name: 'Translation', formula: 'f(x-x0) ↔ F(u)e^{-j2\pi u x0}' },
                { name: 'Scaling', formula: 'f(ax) ↔ (1/|a|)F(u/a)' },
                { name: 'Convolution', formula: 'f * h ↔ F · H' },
                { name: 'Parseval', formula: 'Total Energy is conserved.' }
              ].map((p, i) => (
                <div key={i} className="p-2 bg-slate-800/50 rounded border border-slate-700">
                  <div className="text-[10px] text-slate-500 font-bold uppercase">{p.name}</div>
                  <div className="text-white text-xs font-mono">{p.formula}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2.7 Circular Symmetry */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-emerald-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-emerald-900/20">2.7</div>
          <h2 className="text-3xl font-bold text-white italic">Circular Symmetry</h2>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
          <h3 className="text-xl font-bold text-emerald-400 mb-6 uppercase tracking-widest">The Hankel Transform</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            If <Latex formula="f(x,y) = f(r)" />, the Fourier transform is also circularly symmetric and can be calculated via a 1D integral:
          </p>
          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 mb-6">
            <Latex formula={String.raw`F(q) = 2\pi \int_{0}^{\infty} f(r) J_0(2\pi q r) r dr`} displayMode />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ExamTip type="remember" title="Gaussian Pair">
              The Gaussian function <Latex formula="e^{-\pi r^2}" /> is its own Hankel transform!
            </ExamTip>
            <ExamTip type="tip" title="Jinc Function">
              The transform of a circular unit disk (rect in radius) is the <strong>jinc</strong> function: <Latex formula="J_1(x)/x" />.
            </ExamTip>
          </div>
        </div>
      </section>

      {/* Chapter Summary */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl border border-slate-700 p-10 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-widest text-center">Chapter 2 Recap</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm">Key Principles</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Sifting property isolates point values.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Convolution in space = Multiplication in frequency.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Sampling is represented by the Comb function.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Transfer function H(u,v) models system resolution.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-orange-400 font-bold uppercase tracking-widest text-sm">Likely Exam Tasks</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Solve sifting integrals with shifted deltas.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Apply scaling and translation properties to FTs.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Compute the cascaded PSF of two LSI systems.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Sketch the effect of sampling (aliasing) in frequency.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-between pt-10 border-t border-slate-800">
        <Link href="/chapters/chapter-1" className="flex items-center gap-3 text-slate-400 hover:text-white group transition-all">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          <div>
            <div className="text-xs uppercase text-slate-500">Previous</div>
            <div className="font-bold">Chapter 1: Introduction</div>
          </div>
        </Link>
        <Link href="/chapters/chapter-3" className="flex items-center gap-3 text-blue-400 hover:text-white text-right group transition-all">
          <div>
            <div className="text-xs uppercase text-slate-500">Next</div>
            <div className="font-bold">Chapter 3: Image Quality</div>
          </div>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}