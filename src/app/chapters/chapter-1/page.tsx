'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Chapter1() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 1: Introduction</span>
      </div>

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Chapter 1: Introduction</h1>
        <p className="text-xl text-slate-400">History, Modalities, and Physical Signals</p>
        <div className="flex gap-4 mt-4">
          <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm">Overview</span>
          <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">Historical Context</span>
        </div>
      </header>

      <div className="bg-green-900/20 border border-green-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">📚 What is this Chapter About?</h2>
        <p className="text-slate-300 leading-relaxed">
          This chapter provides an overview of medical imaging - its history, the different modalities, and the physical 
          signals each uses. It establishes the framework for the entire course by showing that different imaging methods 
          measure different "signals" from the body, and each has its strengths and limitations.
        </p>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <div className="text-blue-400 font-semibold text-sm">Why It Matters</div>
            <p className="text-slate-400 text-xs mt-1">Understanding modality differences helps choose right tool for diagnosis</p>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <div className="text-purple-400 font-semibold text-sm">Doctor's Focus</div>
            <p className="text-slate-400 text-xs mt-1">Key names, dates, modality characteristics</p>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <div className="text-emerald-400 font-semibold text-sm">Exam Weight</div>
            <p className="text-slate-400 text-xs mt-1">Medium - More for background than deep technical questions</p>
          </div>
        </div>
      </div>

      {/* Section 1.1: History */}
      <section className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">1.1 History of Medical Imaging</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">🧠 Simple Intuition</h4>
            <p className="text-slate-300 leading-relaxed">
              Medical imaging didn't exist 150 years ago. Doctors had to cut patients open to see inside. Then came X-rays 
              (1895), then nuclear medicine (1920s), then ultrasound (1940s), then CT (1970s), then MRI (1970s). Each 
              breakthrough won Nobel Prizes and changed medicine forever.
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">👁️ Visual Explanation</h4>
            <div className="space-y-4">
              <div className="bg-slate-800 p-4 rounded-lg">
                <h5 className="text-white font-semibold mb-3">Timeline of Major Milestones</h5>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs font-bold">1895</span>
                    <span className="text-slate-300 text-sm">Wilhelm Röntgen discovers X-rays (1st Nobel in Physics)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-purple-600 px-2 py-1 rounded text-xs font-bold">1913</span>
                    <span className="text-slate-300 text-sm">First commercial X-ray system</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs font-bold">1923</span>
                    <span className="text-slate-300 text-sm">George de Hevesy (father of nuclear medicine)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-purple-600 px-2 py-1 rounded text-xs font-bold">1949</span>
                    <span className="text-slate-300 text-sm">Benedict Cassen - first nuclear medicine scanner</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs font-bold">1952</span>
                    <span className="text-slate-300 text-sm">Hal Anger - Anger scintillation camera</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-purple-600 px-2 py-1 rounded text-xs font-bold">1971</span>
                    <span className="text-slate-300 text-sm">Raymond Damadian - first MRI proposal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs font-bold">1973</span>
                    <span className="text-slate-300 text-sm">Paul Lauterbur - first MRI image</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-purple-600 px-2 py-1 rounded text-xs font-bold">1979</span>
                    <span className="text-slate-300 text-sm"> Godfrey Hounsfield - first commercial CT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">⚙️ Key Historical Figures</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-800 p-3 rounded">
                <div className="text-blue-400 font-medium">Wilhelm Röntgen</div>
                <p className="text-slate-400 text-xs">1895 - Discovered X-rays, 1st Nobel Prize in Physics (1901)</p>
              </div>
              <div className="bg-slate-800 p-3 rounded">
                <div className="text-purple-400 font-medium">George de Hevesy</div>
                <p className="text-slate-400 text-xs">1923 - Father of nuclear medicine, using radiotracers</p>
              </div>
              <div className="bg-slate-800 p-3 rounded">
                <div className="text-blue-400 font-medium">Hal Anger</div>
                <p className="text-slate-400 text-xs">1952 - Developed the Anger camera (standard gamma camera)</p>
              </div>
              <div className="bg-slate-800 p-3 rounded">
                <div className="text-purple-400 font-medium">Godfrey Hounsfield</div>
                <p className="text-slate-400 text-xs">1979 - CT inventor, Nobel Prize in Medicine (1979)</p>
              </div>
              <div className="bg-slate-800 p-3 rounded">
                <div className="text-blue-400 font-medium">Paul Lauterbur</div>
                <p className="text-slate-400 text-xs">1973 - MRI invention, Nobel Prize in Medicine (2003)</p>
              </div>
              <div className="bg-slate-800 p-3 rounded">
                <div className="text-purple-400 font-medium">Peter Mansfield</div>
                <p className="text-slate-400 text-xs">Developed fast MRI methods, Nobel (2003)</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">🎯 Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Key dates: 1895 (X-rays), 1973 (MRI), 1979 (CT)</li>
              <li>• Key names: Röntgen, Hounsfield, Lauterbur</li>
              <li>• 1923 - de Hevesy started radiotracer studies</li>
              <li>• 1952 - Anger camera for nuclear medicine</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 1.2: Physical Signals */}
      <section className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">1.2 Physical Signals</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">🧠 Simple Intuition</h4>
            <p className="text-slate-300 leading-relaxed">
              Each imaging modality measures a different "signal" from the body. It's like different tools for different jobs:
              X-rays measure how much radiation passes through (transmission), nuclear medicine measures gamma rays emitted 
              from inside (emission), ultrasound measures echoes of sound waves, and MRI measures radio signals from hydrogen nuclei.
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">👁️ Visual Explanation</h4>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h5 className="text-white font-semibold mb-3">The Four Medical Imaging Signals</h5>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900 p-4 rounded border border-blue-800">
                  <div className="text-blue-400 font-bold mb-2">X-Ray Transmission</div>
                  <p className="text-slate-400 text-xs">Measures: Linear attenuation coefficient (μ)</p>
                  <p className="text-slate-400 text-xs">Used in: Radiography, CT</p>
                </div>
                <div className="bg-slate-900 p-4 rounded border border-purple-800">
                  <div className="text-purple-400 font-bold mb-2">Gamma Emission</div>
                  <p className="text-slate-400 text-xs">Measures: Radiotracer concentration</p>
                  <p className="text-slate-400 text-xs">Used in: Nuclear Medicine, PET, SPECT</p>
                </div>
                <div className="bg-slate-900 p-4 rounded border border-green-800">
                  <div className="text-green-400 font-bold mb-2">Ultrasound Echoes</div>
                  <p className="text-slate-400 text-xs">Measures: Acoustic reflectivity</p>
                  <p className="text-slate-400 text-xs">Used in: Ultrasound Imaging</p>
                </div>
                <div className="bg-slate-900 p-4 rounded border border-amber-800">
                  <div className="text-amber-400 font-bold mb-2">NMR Signal</div>
                  <p className="text-slate-400 text-xs">Measures: Hydrogen proton density, T1/T2</p>
                  <p className="text-slate-400 text-xs">Used in: MRI</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">⚙️ Technical Details</h4>
            <div className="space-y-3">
              <div className="bg-slate-800 p-3 rounded">
                <div className="text-blue-400 font-medium">Electromagnetic Spectrum in Imaging</div>
                <ul className="text-slate-400 text-sm mt-1">
                  <li>• X-rays: 25-500 keV (angstroms: 10⁻² to 10⁻¹ Å)</li>
                  <li>• Too long wavelength = can't exit body</li>
                  <li>• Too short wavelength = can't detect easily</li>
                </ul>
              </div>
              <div className="bg-slate-800 p-3 rounded">
                <div className="text-purple-400 font-medium">Ultrasound</div>
                <ul className="text-slate-400 text-sm mt-1">
                  <li>• Frequency: 1-20 MHz</li>
                  <li>• Too low = poor resolution</li>
                  <li>• Too high = high attenuation</li>
                </ul>
              </div>
              <div className="bg-slate-800 p-3 rounded">
                <div className="text-amber-400 font-medium">MRI</div>
                <ul className="text-slate-400 text-sm mt-1">
                  <li>• RF frequencies: ~64 MHz (at 1.5 Tesla)</li>
                  <li>• Signal from hydrogen nucleus precession</li>
                  <li>• Faraday induction in receiver coils</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">🎯 Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Four signals: Transmission, Emission, Reflection, NMR</li>
              <li>• X-ray energy range: 25-500 keV</li>
              <li>• Ultrasound frequency: 1-20 MHz</li>
              <li>• MRI: hydrogen proton precession</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 1.3: Imaging Modalities */}
      <section className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">1.3 Imaging Modalities</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">🧠 Simple Intuition</h4>
            <p className="text-slate-300 leading-relaxed">
              Different modalities have different strengths. CT is great for bone and hard tissues. MRI is best for soft tissues. 
              Nuclear medicine shows function (not just anatomy). Ultrasound is safe, cheap, and real-time. No single modality 
              is best for everything - doctors choose based on what they need to see.
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">👁️ Visual Explanation</h4>
            <div className="space-y-4">
              <div className="bg-slate-800 p-4 rounded-lg">
                <h5 className="text-white font-semibold mb-3">Modality Categories</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="text-blue-400 font-medium mb-2">Transmission Imaging</h6>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>• X-rays pass through body</li>
                      <li>• Attenuation creates image contrast</li>
                      <li>• Includes: Radiography, CT</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-purple-400 font-medium mb-2">Emission Imaging</h6>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>• Radioactive source inside body</li>
                      <li>• Gamma rays emitted externally</li>
                      <li>• Includes: Nuclear Medicine, PET, SPECT</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-green-400 font-medium mb-2">Reflection Imaging</h6>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>• Sound waves enter body</li>
                      <li>• Echoes return from interfaces</li>
                      <li>• Includes: Ultrasound</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-amber-400 font-medium mb-2">Resonance Imaging</h6>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>• Magnetic field + RF pulses</li>
                      <li>• Hydrogen nuclei precess</li>
                      <li>• Includes: MRI</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">🎯 Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Transmission vs Emission vs Reflection vs Resonance</li>
              <li>• CT and radiography: X-ray transmission</li>
              <li>• Nuclear medicine: gamma emission</li>
              <li>• MRI: nuclear magnetic resonance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 1.4-1.6: Brief */}
      <section className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">1.4-1.7: Modalities Overview</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">1.4 Projection Radiography</h4>
              <ul className="text-slate-400 text-sm">
                <li>• Chest X-rays, mammography</li>
                <li>• 2D projection of 3D anatomy</li>
                <li>• Structures overlaid (superimposed)</li>
                <li>• X-ray tube → body → detector</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">1.5 Computed Tomography</h4>
              <ul className="text-slate-400 text-sm">
                <li>• Multiple X-ray projections</li>
                <li>• Reconstructs cross-sectional slices</li>
                <li>• No superposition</li>
                <li>• Single-slice → Helical → MDCT</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">1.6 Nuclear Medicine</h4>
              <ul className="text-slate-400 text-sm">
                <li>• Radiotracers emit gamma rays</li>
                <li>• Shows function (not just anatomy)</li>
                <li>• Planar → SPECT → PET</li>
                <li>• 1923: de Hevesy, radiotracer concept</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">1.7 Other Modalities</h4>
              <ul className="text-slate-400 text-sm">
                <li>• Ultrasound: 1-20 MHz, echoes</li>
                <li>• MRI: hydrogen protons, T1/T2</li>
                <li>• Multimodality: PET/CT, SPECT/CT</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Summary */}
      <section className="bg-gradient-to-r from-green-900 to-slate-900 rounded-xl border border-green-800 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📋 Chapter 1 Summary</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-blue-400 font-semibold mb-2">Key Historical Points</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• 1895: Röntgen discovers X-rays</li>
              <li>• 1923: de Hevesy starts nuclear medicine</li>
              <li>• 1952: Anger camera</li>
              <li>• 1973: First MRI (Lauterbur)</li>
              <li>• 1979: First commercial CT (Hounsfield)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-400 font-semibold mb-2">Four Physical Signals</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• Transmission (X-rays): CT, Radiography</li>
              <li>• Emission (Gamma): PET, SPECT</li>
              <li>• Reflection (Sound): Ultrasound</li>
              <li>• NMR (Hydrogen): MRI</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-end">
        <Link href="/chapters/chapter-2" className="flex items-center gap-2 text-blue-400 hover:text-white">
          Chapter 2: Signals and Systems <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}