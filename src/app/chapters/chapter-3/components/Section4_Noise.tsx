import React from 'react';
import { Zap, FunctionSquare, Calculator } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section4_Noise() {
  return (
    <section id="noise" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-teal-400">Section 3.4</span>
        <h2 className="text-3xl font-bold text-white mt-2">Noise</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Noise refers to any type of random fluctuation in an image, and it can have a dramatic impact on image quality. For example, in projection radiography, x-rays arrive in discrete packets (quanta), leading to random fluctuations called <strong>quantum mottle</strong>.
        </p>
      </header>

      {/* Random Variables */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <FunctionSquare className="w-6 h-6 text-yellow-400" /> Continuous Random Variables
        </h3>
        
        <div className="claude-surface p-8">
          <p className="text-slate-300 leading-relaxed mb-4">
            A continuous random variable <Latex formula="N" /> is uniquely specified by its <strong>probability density function (pdf)</strong> <Latex formula="p_N(\eta)" />.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
             <div className="bg-slate-900 border border-slate-700 p-4 rounded-lg">
                <h4 className="text-slate-300 font-bold mb-2 text-sm">Expected Value (Mean)</h4>
                <Latex formula="\mu_N = E[N] = \int_{-\infty}^{\infty} \eta p_N(\eta) d\eta" displayMode />
             </div>
             <div className="bg-slate-900 border border-slate-700 p-4 rounded-lg">
                <h4 className="text-slate-300 font-bold mb-2 text-sm">Variance</h4>
                <Latex formula="\sigma_N^2 = \text{Var}[N] = \int_{-\infty}^{\infty} (\eta - \mu_N)^2 p_N(\eta) d\eta" displayMode />
             </div>
          </div>
          
          <div className="space-y-4">
             <div className="border-l-2 border-yellow-500 pl-4 py-2">
                <h4 className="text-yellow-400 font-bold mb-1">Gaussian Random Variable</h4>
                <p className="text-sm text-slate-300 mb-2">The most common noise model due to the Central Limit Theorem.</p>
                <Latex formula="p_N(\eta) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-(\eta - \mu)^2 / 2\sigma^2}" displayMode />
             </div>
          </div>
        </div>
      </div>

      {/* Discrete Random Variables */}
      <div className="space-y-6 mt-8">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <Calculator className="w-6 h-6 text-orange-400" /> Discrete Random Variables
        </h3>
        
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8">
          <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl">
            <h4 className="text-lg font-bold text-slate-300 mb-4">Probability Mass Function</h4>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              When the random variable takes only discrete values, it is specified by the PMF <Latex formula="\text{Pr}[N = \eta_i]" />. The integrals for mean and variance are replaced by sums.
            </p>
            <Latex formula="\mu_N = \sum_{i=1}^k \eta_i \text{Pr}[N = \eta_i]" displayMode />
          </div>

          <div className="claude-panel p-6 bg-gradient-to-br from-orange-900/20 to-slate-950 border border-orange-900/50 rounded-xl">
             <h4 className="text-lg font-bold text-orange-400 mb-2">Poisson Random Variable</h4>
             <p className="text-sm text-slate-300 mb-4 leading-relaxed">
               Crucial for modeling x-ray and nuclear medicine photon counting. If <Latex formula="N" /> is Poisson, its mean equals its variance!
             </p>
             <div className="bg-slate-950 py-3 px-4 rounded border border-orange-900/50 text-center mb-4">
                <Latex formula="\text{Pr}[N = k] = \frac{a^k}{k!} e^{-a}" displayMode />
                <div className="mt-2 text-orange-300 font-bold">
                   <Latex formula="\mu_N = a" /> , <Latex formula="\sigma_N^2 = a" />
                </div>
             </div>
             <p className="text-[11px] text-slate-400 italic">
               Example: If <Latex formula="\lambda" /> is the average arrival rate, the probability of zero photons detected in time <Latex formula="t" /> is <Latex formula="e^{-\lambda t}" />.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
