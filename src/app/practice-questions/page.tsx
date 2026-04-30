import Link from 'next/link';

export default function PracticeQuestions() {
  const questions = [
    { chapter: "2", type: "Derivation", question: "Find the 2D Fourier transform of rect(x,y). State the Fourier pair relationship.", answer: "rect(x,y) ↔ sinc(u,v); F{u,v} = sinc(u,v) = sin(πu)sin(πv)/(π²uv)" },
    { chapter: "2", type: "Calculation", question: "Given f(x) = e^(-πx²), find its Fourier transform.", answer: "F(u) = e^(-πu²) (Gaussian is its own Fourier transform)" },
    { chapter: "3", type: "Calculation", question: "A system has mean signal 100 and variance 400. What is the SNR?", answer: "SNR = mean/σ = 100/20 = 5" },
    { chapter: "3", type: "Concept", question: "To reduce noise by half in an X-ray image, by what factor must the dose be increased?", answer: "Noise ∝ √Dose, so to reduce noise to half, need 4x dose" },
    { chapter: "4", type: "Calculation", question: "If μ = 0.5 cm⁻¹ for soft tissue at a certain energy, what fraction of X-rays remain after 3 cm?", answer: "I/I₀ = e^(-0.5×3) = e^(-1.5) ≈ 0.223 (22.3%)" },
    { chapter: "6", type: "Calculation", question: "A CT image shows μ = 0.025 cm⁻¹ for a lesion. If μ_water = 0.020 cm⁻¹, what is the CT number in HU?", answer: "CT# = 1000(0.025-0.020)/0.020 = 1000(0.25) = 250 HU" },
    { chapter: "6", type: "Concept", question: "Why must we filter the projections before back-projecting in CT reconstruction?", answer: "Simple back-projection produces blur (ringing). Filtering removes this blur by emphasizing high frequencies." },
    { chapter: "7", type: "Calculation", question: "A sample has half-life of 6 hours. After 24 hours, what fraction of original activity remains?", answer: "24/6 = 4 half-lives → (1/2)⁴ = 1/16 = 6.25%" },
    { chapter: "9", type: "Comparison", question: "List three advantages of PET over SPECT.", answer: "1) Higher resolution (~4mm vs ~10mm), 2) Better attenuation correction, 3) Higher sensitivity (100x)" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Practice Questions</span>
      </div>

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Practice Questions</h1>
        <p className="text-xl text-slate-400">Test yourself with these exam-style questions</p>
      </header>

      <div className="space-y-4">
        {questions.map((q, i) => (
          <div key={i} className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
            <div className="bg-slate-800 px-4 py-2 flex justify-between items-center">
              <span className="text-blue-400 font-bold">Chapter {q.chapter}</span>
              <span className="text-purple-400 text-sm">{q.type}</span>
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold mb-3">{q.question}</h3>
              <div className="bg-green-900/20 border-l-4 border-green-500 p-3 rounded-r">
                <p className="text-slate-300 text-sm"><strong>Answer:</strong> {q.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-900/20 border border-amber-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-amber-400 mb-4">💡 Study Tip</h2>
        <p className="text-slate-300">
          Practice sketching the following: rect function, sinc function, comb function, Fourier transform pairs, 
          back-projection vs filtered back-projection, CT scanner geometry. Drawing is often required in exams!
        </p>
      </div>
    </div>
  );
}