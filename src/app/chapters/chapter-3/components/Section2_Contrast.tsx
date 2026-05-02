import React from 'react';
import { Target, Activity } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section2_Contrast() {
  return (
    <section id="contrast" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-teal-400">Section 3.2</span>
        <h2 className="text-3xl font-bold text-white mt-2">Contrast</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Contrast refers to differences between the image intensity of an object and surrounding objects or background. In general, the goal of a medical imaging system is to accurately portray or preserve the true object contrast in the image. High contrast images are preferable since anatomical and functional features are easier to identify.
        </p>
      </header>

      {/* Modulation */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <Activity className="w-6 h-6 text-emerald-400" /> Modulation
        </h3>
        <p className="text-slate-300 leading-relaxed">
          Use of a periodic signal and its modulation is an effective way to quantify contrast. The modulation <Latex formula="m_f" /> of a periodic signal <Latex formula="f(x, y)" />, with maximum and minimum values <Latex formula="f_{\text{max}}" /> and <Latex formula="f_{\text{min}}" />, is defined by:
        </p>
        
        <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl flex items-center justify-center">
          <Latex formula="m_f = \frac{f_{\text{max}} - f_{\text{min}}}{f_{\text{max}} + f_{\text{min}}}" displayMode />
        </div>
        
        <p className="text-slate-300 leading-relaxed">
          Modulation quantifies the relative amount by which the amplitude stands out from the average background value. If <Latex formula="m_f = 0" />, we say the signal has no contrast.
        </p>
      </div>

      {/* Modulation Transfer Function */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white mt-8">Modulation Transfer Function (MTF)</h3>
        <p className="text-slate-300 leading-relaxed">
          The way a medical imaging system affects contrast can be investigated by imaging a sinusoidal object. For an LSI imaging system with point spread function <Latex formula="h(x, y)" />, the output modulation <Latex formula="m_g" /> is a scaled version of the input modulation <Latex formula="m_f" />.
        </p>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
          <div className="claude-panel p-8 space-y-6 bg-gradient-to-br from-slate-900 to-slate-950">
            <h4 className="text-xl font-bold text-emerald-400">MTF Equation</h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              The ratio of the output modulation to the input modulation as a function of spatial frequency is called the <strong>Modulation Transfer Function (MTF)</strong>:
            </p>
            <div className="bg-slate-900 border border-emerald-900/50 p-4 rounded text-center shadow-inner">
               <Latex formula="\text{MTF}(u) = \frac{m_g}{m_f} = \frac{|H(u, 0)|}{H(0, 0)}" displayMode />
            </div>
            
            <div className="claude-note border-l-emerald-500 bg-emerald-950/20 text-emerald-200 mt-6 text-sm">
              <strong className="block mb-1">Key Insight</strong>
              The MTF is the "frequency response" of the system, directly obtained from the Fourier transform of the PSF. Since <Latex formula="\text{MTF}(u) \le 1" />, the output image will always have less contrast than the input due to blurring.
            </div>
          </div>

          <div className="claude-diagram flex flex-col p-6 bg-slate-900 border border-slate-700 relative rounded-xl h-full justify-between shadow-[0_0_20px_rgba(16,185,129,0.1)]">
             <h4 className="text-sm font-bold text-slate-300 mb-4">Nonisotropic MTF</h4>
             <p className="text-sm text-slate-400 mb-6">
                In a nonisotropic system, the profile through the PSF changes with orientation; thus, the system has an orientation-dependent response.
             </p>
             <div className="bg-slate-950 p-4 rounded border border-slate-800 mb-4">
                <Latex formula="\text{MTF}(u, v) = \frac{|H(u, v)|}{H(0, 0)}" displayMode />
             </div>
             <p className="text-xs text-slate-500 italic">
               For a typical medical imaging system, <Latex formula="0 \le \text{MTF}(u, v) \le 1" />.
             </p>
          </div>
        </div>
      </div>

      {/* Local Contrast */}
      <div className="space-y-6 mt-8">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <Target className="w-6 h-6 text-purple-400" /> Local Contrast
        </h3>
        
        <div className="claude-surface p-8">
          <p className="text-slate-300 leading-relaxed mb-6">
            In clinical scenarios (e.g., nuclear medicine), we often refer to an object of interest (a tumor) as the <strong>target</strong> (<Latex formula="f_t" />), surrounded by other tissue called the <strong>background</strong> (<Latex formula="f_b" />).
          </p>
          
          <div className="bg-slate-900 border border-purple-900/50 p-6 rounded-lg text-center mb-6">
            <h4 className="text-purple-400 font-bold mb-4">Local Contrast Definition</h4>
            <Latex formula="C = \frac{f_t - f_b}{f_b}" displayMode />
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-950/20 p-6 rounded-r-lg">
            <h4 className="text-yellow-400 font-bold mb-2">Exam Tip: Adding Constant Intensity</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              If you add a constant intensity <Latex formula="I_c > 0" /> to the entire image, what happens to the local contrast? 
              <br/><br/>
              The target becomes <Latex formula="f_t = I_t + I_c" /> and the background becomes <Latex formula="f_b = I_o + I_c" />. The new local contrast is:
              <span className="block my-3 text-center bg-slate-900 py-2 rounded border border-slate-700">
                 <Latex formula="C' = \frac{(I_t + I_c) - (I_o + I_c)}{I_o + I_c} = \frac{I_t - I_o}{I_o + I_c} = C \frac{I_o}{I_o + I_c} < C" />
              </span>
              <strong>Conclusion:</strong> The local contrast is <em>worse</em> if you add a constant intensity to the image!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
