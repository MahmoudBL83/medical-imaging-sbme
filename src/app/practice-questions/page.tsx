'use client';

import Link from 'next/link';
import Latex from '@/components/Latex';
import { PenTool, BrainCircuit } from 'lucide-react';

export default function PracticeQuestions() {
  const questions = [
    // Chapter 2
    { 
      chapter: "2", type: "Derivation", 
      question: "Find the 1D Fourier transform of the rectangle function, rect(x). State the Fourier pair relationship.", 
      answer: <p><Latex formula="\text{rect}(x) \leftrightarrow \text{sinc}(u)" />. The transform is <Latex formula="F(u) = \frac{\sin(\pi u)}{\pi u} = \text{sinc}(u)" />.</p> 
    },
    { 
      chapter: "2", type: "Concept", 
      question: "If a system's output is simply the input shifted by 5 units, what is its impulse response h(x)?", 
      answer: <p>The impulse response is a shifted delta function: <Latex formula="h(x) = \delta(x-5)" />.</p> 
    },
    // Chapter 3
    { 
      chapter: "3", type: "Calculation", 
      question: "A region of interest has a mean signal of 400 photons. Assuming Poisson statistics, what is the SNR?", 
      answer: <p>For Poisson noise, variance <Latex formula="\sigma^2 = \text{mean}" />. So <Latex formula="\sigma = \sqrt{400} = 20" />. <Latex formula="\text{SNR} = \frac{400}{20} = 20" />.</p> 
    },
    { 
      chapter: "3", type: "Concept", 
      question: "According to the Rose Criterion, is an SNR of 3 sufficient to reliably detect a tumor?", 
      answer: <p>No. The Rose Criterion states that an <Latex formula="\text{SNR} \ge 5" /> is required for reliable human detection.</p> 
    },
    // Chapter 4
    { 
      chapter: "4", type: "Calculation", 
      question: "If the linear attenuation coefficient of bone is μ = 0.693 cm⁻¹, what is the Half-Value Layer (HVL)?", 
      answer: <p><Latex formula="\text{HVL} = \frac{0.693}{\mu} = \frac{0.693}{0.693} = 1 \text{ cm}" />.</p> 
    },
    { 
      chapter: "4", type: "Comparison", 
      question: "How does the probability of the Photoelectric Effect scale with atomic number (Z) compared to Compton Scatter?", 
      answer: <p>Photoelectric probability scales rapidly with <Latex formula="Z^4" /> (highly dependent on material). Compton scatter depends only on electron density and is nearly independent of Z.</p> 
    },
    // Chapter 5
    { 
      chapter: "5", type: "Calculation", 
      question: "An x-ray source is 100 cm from the detector (SID=100). The patient is 20 cm from the detector (OID=20). What is the geometric magnification?", 
      answer: <p><Latex formula="\text{SOD} = 100 - 20 = 80 \text{ cm}" />. Magnification <Latex formula="m = \frac{SID}{SOD} = \frac{100}{80} = 1.25" />.</p> 
    },
    // Chapter 6
    { 
      chapter: "6", type: "Calculation", 
      question: "A CT voxel has an attenuation coefficient of 0.025 cm⁻¹. If water is 0.020 cm⁻¹, calculate the Hounsfield Unit (HU).", 
      answer: <p><Latex formula="\text{HU} = 1000 \times \frac{0.025 - 0.020}{0.020} = 1000 \times 0.25 = 250 \text{ HU}" />.</p> 
    },
    { 
      chapter: "6", type: "Concept", 
      question: "Why must we use 'Filtered' Backprojection instead of simple Backprojection in CT?", 
      answer: <p>Simple backprojection smears the data across the image matrix, resulting in severe <Latex formula="1/r" /> blurring (a starburst pattern). The ramp filter corrects this before smearing.</p> 
    },
    // Chapter 7
    { 
      chapter: "7", type: "Calculation", 
      question: "A 10 mCi dose of Tc-99m (half-life = 6 hours) is prepared. How much activity remains after 24 hours?", 
      answer: <p>24 hours is exactly 4 half-lives (<Latex formula="24/6" />). Remaining activity = <Latex formula="10 \times (1/2)^4 = \frac{10}{16} = 0.625 \text{ mCi}" />.</p> 
    },
    // Chapter 8
    { 
      chapter: "8", type: "Concept", 
      question: "Why are collimators required in Planar Scintigraphy (Anger Cameras)?", 
      answer: <p>Unlike x-ray tubes which produce directed beams, radiotracers inside the body emit gamma rays isotropically (in all directions). Collimators are needed to absorb off-axis rays to form an image.</p> 
    },
    // Chapter 9
    { 
      chapter: "9", type: "Comparison", 
      question: "Why is PET roughly 100x more sensitive than SPECT?", 
      answer: <p>SPECT relies on physical lead collimators, which absorb ~99.9% of all emitted photons. PET uses Electronic Collimation (coincidence detection) without lead septa, capturing vastly more photons.</p> 
    },
  ];

  return (
    <div className="pb-20 fade-up max-w-[1400px] mx-auto">
      <div className="flex items-center gap-4 text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Practice Questions</span>
      </div>

      <header className="border-b border-slate-800 pb-8 mb-12 stagger">
        <div className="flex items-center gap-3 mb-4">
          <PenTool className="w-8 h-8 text-green-400" />
          <h1 className="text-5xl font-extrabold text-white tracking-tight">Practice Questions</h1>
        </div>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          Test your understanding with these exam-style questions spanning derivations, calculations, and core concepts.
        </p>
      </header>

      <div className="space-y-6 stagger">
        {questions.map((q, i) => (
          <div key={i} className="claude-surface border border-slate-800 rounded-xl overflow-hidden shadow-lg group hover:border-slate-600 transition-colors">
            <div className="bg-slate-900/80 px-6 py-3 border-b border-slate-800 flex justify-between items-center">
              <span className="text-blue-400 font-bold tracking-wide">Chapter {q.chapter}</span>
              <span className="text-xs font-semibold text-slate-900 bg-slate-400 px-3 py-1 rounded-full">{q.type}</span>
            </div>
            <div className="p-6">
              <h3 className="text-lg text-white font-medium mb-6 leading-relaxed">{q.question}</h3>
              <div className="bg-slate-950/50 border-l-4 border-green-500 p-5 rounded-r-lg relative overflow-hidden group-hover:bg-slate-900 transition-colors">
                <div className="flex items-start gap-3">
                  <BrainCircuit className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div className="text-slate-300 text-sm leading-relaxed w-full">
                    <strong className="text-green-400 mb-2 block">Answer:</strong>
                    {q.answer}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="claude-panel border border-amber-900/50 rounded-xl p-8 mt-12 bg-amber-950/10">
        <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
          💡 Exam Strategy Tip
        </h2>
        <p className="text-slate-300 leading-relaxed">
          When solving calculation problems on the exam, always write down the fundamental equation first (e.g., <Latex formula="I = I_0 e^{-\mu x}" />) before plugging in numbers. For conceptual questions, practice sketching functions like the rect, sinc, and comb functions, as visual proofs are often heavily rewarded!
        </p>
      </div>
    </div>
  );
}