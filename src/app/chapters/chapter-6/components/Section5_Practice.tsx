import React from 'react';
import { HelpCircle, AlertCircle, BookOpen } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section5_Practice() {
  return (
    <section id="practice" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-indigo-400">Section 6.5</span>
        <h2 className="text-3xl font-bold text-white mt-2">Summary & Exam Practice</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Test your understanding of CT instrumentation, the Radon transform, and artifact identification.
        </p>
      </header>

      {/* Key Concepts Summary */}
      <div className="border-l-4 border-indigo-500 bg-indigo-950/20 p-8 rounded-r-xl shadow-lg mb-8">
         <h3 className="text-xl font-bold text-indigo-400 flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6" /> Core Takeaways
         </h3>
         <ul className="space-y-3 text-sm text-indigo-100">
           <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">•</span>
              <span><strong>Eliminating Overlap:</strong> CT isolates specific cross-sectional slices by acquiring multiple 1-D projections from different angles, solving the primary limitation of standard 2-D projection radiography.</span>
           </li>
           <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">•</span>
              <span><strong>Filtered Backprojection:</strong> The industry standard reconstruction technique. It requires taking the projection, filtering it with a high-pass ramp filter to prevent blurring, and then smearing (backprojecting) it across the image plane.</span>
           </li>
           <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">•</span>
              <span><strong>Helical & MDCT:</strong> Modern scanners move the table continuously while acquiring thick cone-beams of data. Projections for a specific slice plane must be synthesized using linear interpolation from adjacent spiral data.</span>
           </li>
         </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Problem 1 */}
        <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Problem 6.1
           </div>
           <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-blue-400" /> Hounsfield Calibration
           </h3>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             A CT calibration experiment measures two uncalibrated Hounsfield numbers: <Latex formula="h^m_{water} = 10" /> for water and <Latex formula="h^m_{air} = -1100" /> for air. What are the correct, calibrated CT numbers for water and air?
           </p>
           <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded text-sm text-slate-400">
             <div className="flex items-center gap-2 mb-2 text-slate-300">
                <AlertCircle className="w-4 h-4 text-blue-400" /> <strong>Solution:</strong>
             </div>
             By definition, regardless of the scanner's effective energy, the calibrated Hounsfield Unit (HU) for Water must be exactly 0 HU, and the HU for Air must be exactly -1000 HU. The scanner would apply a linear shift <Latex formula="a h^m + b" /> to correct these raw values.
           </div>
        </div>

        {/* Problem 2 */}
        <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Problem 6.2
           </div>
           <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-indigo-400" /> Helical Pitch
           </h3>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             Suppose a 6G helical CT scanner has a patient table moving at 2 cm/s. The x-ray source apparatus rotates at <Latex formula="4\pi" /> radians per second. What is the pitch of the helix?
           </p>
           <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded text-sm text-slate-400">
             <div className="flex items-center gap-2 mb-2 text-slate-300">
                <AlertCircle className="w-4 h-4 text-indigo-400" /> <strong>Solution:</strong>
             </div>
             The apparatus completes one full rotation (<Latex formula="2\pi" /> rad) every 0.5 seconds. In 0.5 seconds, the table moves <Latex formula="2 \text{ cm/s} \times 0.5 \text{ s} = 1 \text{ cm}" />. Therefore, the pitch (table travel per rotation) is 1 cm.
           </div>
        </div>

      </div>
    </section>
  );
}
