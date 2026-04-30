'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Chapter3() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 3: Image Quality</span>
      </div>

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Chapter 3: Image Quality</h1>
        <p className="text-xl text-slate-400">Contrast, Resolution, Noise, and SNR</p>
        <div className="flex gap-4 mt-4">
          <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm">Foundational</span>
          <span className="bg-amber-900 text-amber-300 px-3 py-1 rounded-full text-sm">Applies to All Modalities</span>
        </div>
      </header>

      <div className="claude-surface p-6">
        <h2 className="text-xl font-bold text-white mb-4">What is this Chapter About?</h2>
        <p className="text-slate-300 leading-relaxed">
          This chapter defines the metrics used to evaluate any medical imaging system. Before you can understand CT or MRI 
          or ultrasound, you need to understand HOW we measure image quality. The four pillars are: CONTRAST (can we see the 
          difference between tissues?), RESOLUTION (how small details can we see?), NOISE (how speckled/grainy is the image?), 
          and SNR (signal-to-noise ratio - is the signal stronger than the noise?).
        </p>
        <div className="claude-diagram mt-4">
          <div className="claude-kicker">Image quality pillars</div>
          <div className="grid md:grid-cols-4 gap-3 mt-3">
            <div className="claude-panel p-3 text-center">
              <div className="text-blue-400 font-semibold text-sm">Contrast</div>
              <p className="text-slate-400 text-xs mt-1">Visibility of differences</p>
            </div>
            <div className="claude-panel p-3 text-center">
              <div className="text-purple-400 font-semibold text-sm">Resolution</div>
              <p className="text-slate-400 text-xs mt-1">Small detail sharpness</p>
            </div>
            <div className="claude-panel p-3 text-center">
              <div className="text-emerald-400 font-semibold text-sm">Noise</div>
              <p className="text-slate-400 text-xs mt-1">Random image variation</p>
            </div>
            <div className="claude-panel p-3 text-center">
              <div className="text-amber-400 font-semibold text-sm">SNR</div>
              <p className="text-slate-400 text-xs mt-1">Signal vs noise strength</p>
            </div>
          </div>
        </div>
        <div className="claude-note mt-4">
          <div className="claude-kicker">Study note</div>
          <p className="text-slate-400 text-sm">When answering exam questions: define the metric, write the formula, and explain the physical meaning.</p>
        </div>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="claude-panel p-3">
            <div className="text-blue-400 font-semibold text-sm">Why It Matters</div>
            <p className="text-slate-400 text-xs mt-1">Every imaging modality is evaluated using these metrics</p>
          </div>
          <div className="claude-panel p-3">
            <div className="text-purple-400 font-semibold text-sm">Doctor's Focus</div>
            <p className="text-slate-400 text-xs mt-1">MTF, SNR calculations, noise models, sampling</p>
          </div>
          <div className="claude-panel p-3">
            <div className="text-emerald-400 font-semibold text-sm">Exam Weight</div>
            <p className="text-slate-400 text-xs mt-1">HIGH - Connects to all modalities</p>
          </div>
        </div>
      </div>

      {/* Section 3.1: Contrast */}
      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">3.1 Contrast</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">🧠 Simple Intuition</h4>
            <p className="text-slate-300 leading-relaxed">
              Contrast is the "difference" between bright and dark in an image. Without contrast, you can't distinguish a tumor 
              from healthy tissue - everything looks the same shade of gray. In chest X-rays, bones are white (high contrast vs air), 
              while soft tissues have subtle differences. The key question: "Can I see the abnormality?"
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">👁️ Visual Explanation</h4>
            <div className="space-y-4">
              <div className="bg-slate-800 p-4 rounded-lg">
                <h5 className="text-white font-semibold mb-2">Types of Contrast</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-900 p-3 rounded border border-slate-700">
                    <div className="text-blue-400 font-medium">Subject Contrast</div>
                    <p className="text-slate-400 text-xs mt-1">Physical difference in the object (e.g., bone vs muscle attenuation)</p>
                  </div>
                  <div className="bg-slate-900 p-3 rounded border border-slate-700">
                    <div className="text-purple-400 font-medium">Image Contrast</div>
                    <p className="text-slate-400 text-xs mt-1">Difference in pixel values in the final image</p>
                  </div>
                </div>
              </div>
              <div className="claude-diagram">
                <div className="claude-kicker">Contrast pipeline</div>
                <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
                  <span className="claude-chip">Object</span>
                  <span className="text-slate-400">-&gt;</span>
                  <span className="claude-chip">System</span>
                  <span className="text-slate-400">-&gt;</span>
                  <span className="claude-chip">Image</span>
                </div>
                <p className="text-slate-400 text-xs mt-2">Subject contrast becomes image contrast after system effects.</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <h5 className="text-white font-semibold mb-3">Contrast in Medical Imaging</h5>
                <div className="flex items-center justify-center gap-4 py-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded flex items-center justify-center">
                      <span className="text-white text-xs">Low</span>
                    </div>
                    <p className="text-slate-400 text-xs mt-1">No detail visible</p>
                  </div>
                  <div className="text-blue-400">→</div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-black to-white rounded"></div>
                    <p className="text-slate-400 text-xs mt-1">Low contrast</p>
                  </div>
                  <div className="text-blue-400">→</div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-black via-white to-black rounded"></div>
                    <p className="text-slate-400 text-xs mt-1">Medium contrast</p>
                  </div>
                  <div className="text-blue-400">→</div>
                  <div className="text-center">
                    <div className="w-8 h-16 bg-black inline-block"></div>
                    <div className="w-8 h-16 bg-white inline-block"></div>
                    <p className="text-slate-400 text-xs mt-1">High contrast</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">⚙️ Technical Depth</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-white font-semibold mb-2">Contrast Definition</h5>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <div className="text-center text-lg font-mono text-blue-300">C = (S₁ - S₂) / (S₁ + S₂)</div>
                </div>
                <p className="text-slate-400 text-sm mt-2">Range: -1 to 1. Higher absolute value = better contrast</p>
                <div className="claude-note mt-3">
                  <div className="claude-kicker">Formula intuition</div>
                  <p className="text-slate-400 text-sm">If S1 = S2, then C = 0 (no contrast). If S1 is much larger than S2, C approaches 1.</p>
                </div>
              </div>

              <div>
                <h5 className="text-white font-semibold mb-2">Modulation</h5>
                <p className="text-slate-300 text-sm">
                  Modulation is similar to contrast but used for periodic patterns (like bar patterns in test phantoms):
                </p>
                <div className="bg-slate-800 p-3 rounded-lg mt-2">
                  <div className="text-center font-mono text-blue-300">M = (Imax - Imin) / (Imax + Imin)</div>
                </div>
              </div>

              <div>
                <h5 className="text-white font-semibold mb-2">Local Contrast</h5>
                <p className="text-slate-300 text-sm">
                  For non-uniform backgrounds, use local contrast: C(x,y) = [S(x,y) - S̄(x,y)] / S̄(x,y) where S̄ is local mean.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">🎯 Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Know contrast formula: C = (S₁-S₂)/(S₁+S₂)</li>
              <li>• Understand difference between subject and image contrast</li>
              <li>• Contrast agents increase contrast (iodine, gadolinium)</li>
              <li>• Low contrast = tumor invisible = poor diagnostic value</li>
            </ul>
            <div className="claude-note mt-3">
              <div className="claude-kicker">Common confusion</div>
              <p className="text-slate-400 text-sm">Contrast is about differences between regions. Brightness shifts the whole image up or down.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3.2: Resolution */}
      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">3.2 Resolution</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">🧠 Simple Intuition</h4>
            <p className="text-slate-300 leading-relaxed">
              Resolution is HOW SMALL a detail you can see. High resolution = tiny things look sharp. Low resolution = 
              everything looks blurry. If you have high contrast but poor resolution, you know there's something there 
              but can't see its shape. Resolution is limited by the system's "blur" - the Point Spread Function (PSF).
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">👁️ Visual Explanation</h4>
            <div className="space-y-4">
              <div className="bg-slate-800 p-4 rounded-lg">
                <h5 className="text-white font-semibold mb-3">Resolution Concept</h5>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-black rounded-full mx-auto"></div>
                    <p className="text-slate-400 text-xs mt-2">Point Source</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-black via-gray-500 to-black rounded-full mx-auto blur-sm"></div>
                    <p className="text-slate-400 text-xs mt-2">Blurred (Low Res)</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-black rounded-full mx-auto blur-none"></div>
                    <p className="text-slate-400 text-xs mt-2">Sharp (High Res)</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 p-4 rounded-lg">
                <h5 className="text-white font-semibold mb-3">Line Spread Function (LSF)</h5>
                <p className="text-slate-400 text-sm mb-3">The system's response to a line input - gives us resolution in one direction</p>
                <div className="h-24 bg-gradient-to-r from-black via-white to-black rounded flex items-end justify-center">
                  <div className="text-white text-xs pb-2">LSF Profile</div>
                </div>
              </div>

              <div className="bg-slate-800 p-4 rounded-lg">
                <h5 className="text-white font-semibold mb-3">Full Width at Half Maximum (FWHM)</h5>
                <p className="text-slate-400 text-sm">The standard measure of resolution - width of the blur at half its maximum height</p>
                <div className="mt-3 relative h-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded">
                  <div className="absolute left-1/4 top-0 h-full w-0.5 bg-red-500"></div>
                  <div className="absolute right-1/4 top-0 h-full w-0.5 bg-red-500"></div>
                  <div className="absolute top-1/2 left-1/4 right-1/4 border-t border-dashed border-red-500"></div>
                  <span className="absolute right-1/4 -bottom-6 text-red-400 text-xs">FWHM</span>
                </div>
              </div>
              <div className="claude-diagram">
                <div className="claude-kicker">Resolution pipeline</div>
                <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
                  <span className="claude-chip">Point input</span>
                  <span className="text-slate-400">-&gt;</span>
                  <span className="claude-chip">PSF</span>
                  <span className="text-slate-400">-&gt;</span>
                  <span className="claude-chip">LSF</span>
                  <span className="text-slate-400">-&gt;</span>
                  <span className="claude-chip">MTF</span>
                </div>
                <p className="text-slate-400 text-xs mt-2">Each step converts blur information into a frequency response.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">⚙️ Technical Depth</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-white font-semibold mb-2">Modulation Transfer Function (MTF)</h5>
                <p className="text-slate-300 text-sm mb-3">
                  MTF is the Fourier transform of the LSF. It measures HOW WELL the system transfers each spatial frequency.
                  At low frequencies (large objects), MTF ≈ 1 (good). At high frequencies (small details), MTF drops to 0 (can't see them).
                </p>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <div className="text-center font-mono text-blue-300 mb-2">{'MTF(f) = |FT{LSF(x)}|'}</div>
                  <div className="h-32 flex items-end justify-center gap-1">
                    {[1.0, 0.9, 0.75, 0.5, 0.25, 0.1, 0].map((h, i) => (
                      <div key={i} className="w-8 bg-blue-500 rounded-t" style={{ height: `${h * 100}%` }}></div>
                    ))}
                  </div>
                  <p className="text-center text-slate-400 text-xs mt-2">Spatial Frequency →</p>
                </div>
              </div>

              <div className="bg-slate-800 p-3 rounded">
                <h5 className="text-white font-medium mb-2">Resolution ↔ MTF Relationship</h5>
                <ul className="text-slate-400 text-sm">
                  <li>• Narrow PSF (small FWHM) → High resolution → MTF stays high to higher frequencies</li>
                  <li>• Wide PSF (large FWHM) → Low resolution → MTF drops quickly</li>
                  <li>• MTF = 0 at some frequency = that detail cannot be resolved</li>
                </ul>
              </div>
              <div className="claude-note">
                <div className="claude-kicker">Exam note</div>
                <p className="text-slate-400 text-sm">When asked for resolution from an MTF curve, state the spatial frequency at the cutoff level specified in the question.</p>
              </div>

              <div>
                <h5 className="text-white font-semibold mb-2">Subsystem Cascade</h5>
                <p className="text-slate-300 text-sm">
                  In real systems, multiple components contribute to blur (source, detector, motion, etc.). The overall MTF is 
                  the product of individual MTFs: MTF_total = MTF₁ × MTF₂ × MTF₃ × ...
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">🎯 Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• FWHM is the standard resolution metric</li>
              <li>• MTF shows frequency response - where does it drop to zero?</li>
              <li>• MTF total = product of subsystem MTFs (in frequency domain!)</li>
              <li>• Resolution limited by: detector size, focal spot, motion, diffraction</li>
            </ul>
            <div className="mt-3 bg-red-900/20 border border-red-800 rounded p-2">
              <p className="text-red-300 text-sm"><strong>TRAP:</strong> Don't confuse MTF with contrast! MTF is frequency-dependent, contrast is not.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3.3: Noise */}
      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">3.3 Noise</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">🧠 Simple Intuition</h4>
            <p className="text-slate-300 leading-relaxed">
              Noise is the random speckle/grain in images. Even if you have perfect contrast and resolution, noise can hide 
              details. It's like static on a TV - the signal is there but noise obscures it. In medical imaging, noise comes 
              from: photon statistics (Poisson noise in X-ray/gamma), electronic noise, quantization noise. More dose = less noise 
              (but more radiation to patient!).
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">👁️ Visual Explanation</h4>
            <div className="space-y-4">
              <div className="bg-slate-800 p-4 rounded-lg">
                <h5 className="text-white font-semibold mb-3">Noise Concept</h5>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-500 rounded mx-auto"></div>
                    <p className="text-slate-400 text-xs mt-1">No noise (ideal)</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-600 rounded mx-auto" style={{ backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
                    <p className="text-slate-400 text-xs mt-1">Low noise</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-700 rounded mx-auto" style={{ backgroundImage: 'radial-gradient(circle, #666 1px, transparent 1px)', backgroundSize: '2px 2px' }}></div>
                    <p className="text-slate-400 text-xs mt-1">High noise</p>
                  </div>
                </div>
              </div>
              <div className="claude-diagram">
                <div className="claude-kicker">Dose vs noise (concept)</div>
                <div className="flex items-end gap-2 mt-3">
                  <div className="w-8 h-14 bg-blue-500 rounded-t"></div>
                  <div className="w-8 h-11 bg-blue-500 rounded-t"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-t"></div>
                  <div className="w-8 h-6 bg-blue-500 rounded-t"></div>
                </div>
                <p className="text-slate-400 text-xs mt-2">Higher dose reduces relative noise, but increases patient exposure.</p>
              </div>

              <div className="bg-slate-800 p-4 rounded-lg">
                <h5 className="text-white font-semibold mb-3">Common Noise Sources</h5>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-slate-900 p-3 rounded border border-slate-700">
                    <div className="text-blue-400 font-medium">Quantum Noise</div>
                    <p className="text-slate-400 text-xs">Photon statistics - follows Poisson distribution</p>
                  </div>
                  <div className="bg-slate-900 p-3 rounded border border-slate-700">
                    <div className="text-purple-400 font-medium">Electronic Noise</div>
                    <p className="text-slate-400 text-xs">Thermal noise in detectors/electronics</p>
                  </div>
                  <div className="bg-slate-900 p-3 rounded border border-slate-700">
                    <div className="text-emerald-400 font-medium">Structured Noise</div>
                    <p className="text-slate-400 text-xs">Fixed pattern, artifacts (not random)</p>
                  </div>
                  <div className="bg-slate-900 p-3 rounded border border-slate-700">
                    <div className="text-amber-400 font-medium">Quantization Noise</div>
                    <p className="text-slate-400 text-xs">ADC discretization error</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">⚙️ Technical Depth</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-white font-semibold mb-2">Random Variables</h5>
                <p className="text-slate-300 text-sm mb-2">
                  Noise is modeled as a random variable. Key properties: mean (average), variance (spread), PDF (probability distribution).
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-slate-800 p-3 rounded">
                    <div className="text-blue-400 font-medium">Gaussian (Normal)</div>
                    <p className="text-slate-400 text-xs">Bell curve - common in electronic noise</p>
                    <div className="mt-2 h-12 bg-gradient-to-b from-transparent via-white to-transparent rounded opacity-50"></div>
                  </div>
                  <div className="bg-slate-800 p-3 rounded">
                    <div className="text-purple-400 font-medium">Poisson</div>
                    <p className="text-slate-400 text-xs">Photon counting - σ² = mean</p>
                    <div className="mt-2 h-12 bg-gradient-to-b from-transparent via-blue-400 to-transparent rounded opacity-50"></div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-white font-semibold mb-2">Signal-to-Noise Ratio (SNR)</h5>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <div className="text-center text-lg font-mono text-blue-300 mb-2">SNR = S / σ</div>
                  <p className="text-slate-400 text-sm text-center">Signal mean / noise standard deviation</p>
                </div>
                <div className="claude-note mt-3">
                  <div className="claude-kicker">Remember</div>
                  <p className="text-slate-400 text-sm">For Poisson noise, variance equals the mean. That single fact explains many SNR questions.</p>
                </div>
                <ul className="text-slate-400 text-sm mt-3 space-y-1">
                  <li>• <strong>Amplitude SNR:</strong> S/σ - simple ratio</li>
                  <li>• <strong>Power SNR:</strong> S²/σ² = (SNR)²</li>
                  <li>• <strong>Differential SNR:</strong> For contrast: ΔS/σ</li>
                  <li>• <strong>Decibels:</strong> SNR_dB = 20 log₁₀(SNR)</li>
                </ul>
              </div>

              <div>
                <h5 className="text-white font-semibold mb-2">Dose and Noise Relationship</h5>
                <div className="bg-slate-800 p-3 rounded">
                  <div className="font-mono text-blue-300">For Poisson: σ ∝ √N ∝ √Dose</div>
                  <p className="text-slate-400 text-sm mt-2">To reduce noise by 2x, need 4x more dose!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">🎯 Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Know SNR formula: SNR = mean / std dev</li>
              <li>• Poisson noise: variance = mean</li>
              <li>• Doubling dose → noise reduces by √2 ≈ 1.4x</li>
              <li>• Noise power = variance = σ²</li>
              <li>• Decibels: dB = 20 log₁₀(ratio)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3.4: Sampling */}
      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">3.4 Sampling</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">🧠 Simple Intuition</h4>
            <p className="text-slate-300 leading-relaxed">
              Digital images are sampled - they're made of discrete pixels. Sampling determines how fine the details can be. 
              If you sample too coarsely (pixels too big), you lose information and get aliasing (moiré patterns, jagged edges). 
              The rule: sample at AT LEAST twice the highest frequency you want to capture (Nyquist theorem).
            </p>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">👁️ Visual Explanation</h4>
            <div className="space-y-4">
              <div className="bg-slate-800 p-4 rounded-lg">
                <h5 className="text-white font-semibold mb-3">Sampling Concept</h5>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-blue-400 text-sm mb-2">Original</div>
                    <div className="h-16 bg-gradient-to-r from-black via-white to-black rounded"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 text-sm mb-2">Well Sampled</div>
                    <div className="h-16 flex items-end justify-center gap-1">
                      {[0.2, 0.5, 0.8, 0.5, 0.2].map((h, i) => (
                        <div key={i} className="w-4 bg-white rounded-t" style={{ height: `${h * 60}px` }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-red-400 text-sm mb-2">Aliased (Undersampled)</div>
                    <div className="h-16 flex items-end justify-center gap-1">
                      {[0.2, 0.2, 0.8, 0.8, 0.2].map((h, i) => (
                        <div key={i} className="w-4 bg-white rounded-t" style={{ height: `${h * 60}px` }}></div>
                      ))}
                    </div>
                    <p className="text-red-400 text-xs mt-1">Wrong shape!</p>
                  </div>
                </div>
              </div>
              <div className="claude-diagram">
                <div className="claude-kicker">Frequency domain view</div>
                <div className="flex items-center justify-center gap-3 mt-3">
                  <div className="claude-panel px-3 py-2 text-xs">Spectrum</div>
                  <span className="text-slate-400">x</span>
                  <div className="claude-panel px-3 py-2 text-xs">Sampling comb</div>
                  <span className="text-slate-400">=&gt;</span>
                  <div className="claude-panel px-3 py-2 text-xs">Repeated spectra</div>
                </div>
                <p className="text-slate-400 text-xs mt-2">If repetitions overlap, aliasing appears in the sampled image.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">⚙️ Technical Depth</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-white font-semibold mb-2">Nyquist Theorem</h5>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <div className="text-center text-lg font-mono text-blue-300">f_sampling ≥ 2 × f_max</div>
                  <p className="text-slate-400 text-sm text-center mt-2">Sampling frequency must be at least twice the highest frequency in the signal</p>
                </div>
                <div className="claude-note mt-3">
                  <div className="claude-kicker">Exam note</div>
                  <p className="text-slate-400 text-sm">State the sampling frequency and compare it to twice the highest spatial frequency to justify aliasing or no aliasing.</p>
                </div>
              </div>

              <div>
                <h5 className="text-white font-semibold mb-2">Anti-aliasing</h5>
                <p className="text-slate-300 text-sm">
                  Before sampling, must filter out frequencies above Nyquist (anti-aliasing filter). Otherwise, high frequencies 
                  "fold back" into the sampled image as aliasing artifacts.
                </p>
              </div>

              <div>
                <h5 className="text-white font-semibold mb-2">Sampling in Imaging</h5>
                <ul className="text-slate-400 text-sm">
                  <li>• Pixel size determines spatial sampling</li>
                  <li>• Detector element size = sampling aperture</li>
                  <li>• Undersampling → aliasing/steps on edges</li>
                  <li>• Oversampling → more data, better quality, more dose (in X-ray)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">🎯 Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Nyquist: f_s ≥ 2f_max</li>
              <li>• If f_s &lt; 2f_max, aliasing occurs</li>
              <li>• Anti-aliasing filter needed before sampling</li>
              <li>• In CT: detector spacing affects sampling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sections 3.5-3.8: Brief summaries */}
      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">3.5-3.8: Additional Image Quality Factors</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="claude-diagram">
            <div className="claude-kicker">Quality tradeoffs</div>
            <div className="grid md:grid-cols-3 gap-3 mt-3 text-xs">
              <div className="claude-panel p-3 text-center">Resolution</div>
              <div className="claude-panel p-3 text-center">Noise</div>
              <div className="claude-panel p-3 text-center">Dose</div>
            </div>
            <p className="text-slate-400 text-xs mt-2">Improving one metric often affects another. State the tradeoff explicitly.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">3.5 Temporal & Spectral Resolution</h4>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• <strong>Temporal:</strong> How fast can you capture motion? (frames/sec)</li>
                <li>• <strong>Spectral:</strong> Energy resolution in nuclear medicine</li>
                <li>• Important for dynamic imaging (angiography, cardiac)</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">3.6 Artifacts</h4>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• <strong>Aliasing:</strong> Due to undersampling</li>
                <li>• <strong>Beam hardening:</strong> In CT - cupping artifact</li>
                <li>• <strong>Motion:</strong> Patient movement blur</li>
                <li>• <strong>Metal:</strong> Streak artifacts in CT</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">3.7 Distortion</h4>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• Non-linear geometric distortion</li>
                <li>• Barrel/pincushion distortion in optics</li>
                <li>• Causes: lens imperfections, field non-uniformity</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">3.8 Accuracy</h4>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• <strong>Quantitative:</strong> Do numbers match reality?</li>
                <li>• <strong>Diagnostic:</strong> Does image enable correct diagnosis?</li>
                <li>• Trade-off: resolution vs noise vs dose</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Summary */}
      <section className="bg-gradient-to-r from-purple-900 to-slate-900 rounded-xl border border-purple-800 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📋 Chapter 3 Summary</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-blue-400 font-semibold mb-2">Key Equations</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• Contrast: C = (S₁-S₂)/(S₁+S₂)</li>
              <li>• Modulation: M = (Imax-Imin)/(Imax+Imin)</li>
              <li>• SNR = S/σ (amplitude), dB = 20log₁₀(SNR)</li>
              <li>• Nyquist: f_s ≥ 2f_max</li>
              <li>• Poisson: σ² = mean</li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-400 font-semibold mb-2">Key Concepts</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• Contrast = visibility of differences</li>
              <li>• Resolution = ability to see small details (FWHM)</li>
              <li>• MTF = frequency response (from LSF)</li>
              <li>• Noise = random fluctuation (Poisson, Gaussian)</li>
              <li>• SNR = signal relative to noise</li>
            </ul>
          </div>
        </div>

        <div className="claude-diagram mt-6">
          <div className="claude-kicker">Two-minute recall map</div>
          <div className="grid md:grid-cols-4 gap-3 mt-3 text-xs">
            <div className="claude-panel p-3">
              <div className="text-blue-400 font-semibold">Contrast</div>
              <p className="text-slate-400 mt-1">C = (S1-S2)/(S1+S2)</p>
            </div>
            <div className="claude-panel p-3">
              <div className="text-purple-400 font-semibold">Resolution</div>
              <p className="text-slate-400 mt-1">FWHM, PSF, MTF</p>
            </div>
            <div className="claude-panel p-3">
              <div className="text-emerald-400 font-semibold">Noise</div>
              <p className="text-slate-400 mt-1">Poisson, Gaussian, sigma</p>
            </div>
            <div className="claude-panel p-3">
              <div className="text-amber-400 font-semibold">Sampling</div>
              <p className="text-slate-400 mt-1">fs &gt;= 2 fmax</p>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-amber-900/20 border border-amber-800 rounded-lg p-4">
          <h4 className="text-amber-400 font-semibold mb-2">🎯 Likely Exam Questions</h4>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Calculate SNR given mean and variance</li>
            <li>• Determine if aliasing will occur given sampling frequency</li>
            <li>• Explain relationship between dose and noise</li>
            <li>• Interpret MTF curves - what frequency is just resolvable?</li>
            <li>• Compare Gaussian vs Poisson noise statistics</li>
          </ul>
        </div>
      </section>

      <div className="flex justify-between">
        <Link href="/chapters/chapter-2" className="flex items-center gap-2 text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" /> Chapter 2
        </Link>
        <Link href="/chapters/chapter-1" className="flex items-center gap-2 text-blue-400 hover:text-white">
          Chapter 1: Introduction <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}