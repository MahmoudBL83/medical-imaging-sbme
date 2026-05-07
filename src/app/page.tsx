'use client';

import Link from 'next/link';
import { BookOpen, Target, HelpCircle, Calculator, AlertTriangle, Cpu, Sigma, Activity, Radar, Star, ShieldAlert } from 'lucide-react';

export default function Home() {
  const chapters = [
    { id: 1, title: "Introduction to Medical Imaging", icon: BookOpen, color: "text-orange-400", border: "hover:border-orange-500/50", path: "/chapters/chapter-1" },
    { id: 2, title: "Signals and Systems", icon: Activity, color: "text-blue-400", border: "hover:border-blue-500/50", path: "/chapters/chapter-2" },
    { id: 3, title: "Image Quality", icon: Radar, color: "text-teal-400", border: "hover:border-teal-500/50", path: "/chapters/chapter-3" },
    { id: 4, title: "Physics of Radiography", icon: Target, color: "text-indigo-400", border: "hover:border-indigo-500/50", path: "/chapters/chapter-4" },
    { id: 5, title: "Projection Radiography", icon: Target, color: "text-indigo-400", border: "hover:border-indigo-500/50", path: "/chapters/chapter-5" },
    { id: 6, title: "Computed Tomography", icon: Sigma, color: "text-purple-400", border: "hover:border-purple-500/50", path: "/chapters/chapter-6" },
    { id: 7, title: "Nuclear Medicine Physics", icon: Activity, color: "text-rose-400", border: "hover:border-rose-500/50", path: "/chapters/chapter-7" },
    { id: 8, title: "Planar Scintigraphy", icon: Radar, color: "text-yellow-400", border: "hover:border-yellow-500/50", path: "/chapters/chapter-8" },
    { id: 9, title: "Emission CT (PET/SPECT)", icon: Cpu, color: "text-emerald-400", border: "hover:border-emerald-500/50", path: "/chapters/chapter-9" }
  ];

  const quickLinks = [
    { name: "High-Yield Review", path: "/high-yield", icon: Star, desc: "Must-know exam concepts", color: "text-amber-400", border: "hover:border-amber-500/50" },
    { name: "Master Formula Sheet", path: "/formulas", icon: Calculator, desc: "Every equation from Ch 1-9", color: "text-blue-400", border: "hover:border-blue-500/50" },
    { name: "Common Pitfalls", path: "/common-mistakes", icon: AlertTriangle, desc: "Avoid losing easy marks", color: "text-rose-500", border: "hover:border-rose-500/50" },
    { name: "Practice Questions", path: "/practice-questions", icon: HelpCircle, desc: "Doctor-style problem sets", color: "text-emerald-400", border: "hover:border-emerald-500/50" },
    { name: "Glossary of Terms", path: "/glossary", icon: BookOpen, desc: "Over 30 essential definitions", color: "text-indigo-400", border: "hover:border-indigo-500/50" }
  ];

  return (
    <div className="pb-20 fade-up max-w-[1400px] mx-auto">
      
      {/* Hero Section */}
      <header className="text-center py-16 mb-8 border-b border-slate-800/50 stagger">
        <div className="inline-flex items-center justify-center p-3 bg-blue-900/20 rounded-2xl mb-6 border border-blue-800/30">
          <Radar className="w-10 h-10 text-blue-400" />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-6 tracking-tight">
          Medical Imaging Study Guide
        </h1>
        <p className="text-2xl text-slate-300 font-light mb-4">Chapters 1-9 | Prince & Links</p>
        <p className="text-slate-500 max-w-2xl mx-auto">
          A comprehensive, high-yield examination resource tailored for 4th-year Systems & Biomedical Engineering students.
        </p>
      </header>

      {/* Doctor's Alert */}
      <div className="claude-panel border-l-4 border-l-amber-500 rounded-2xl p-8 mb-16 shadow-lg hover:border-amber-500/30 transition-colors stagger">
        <h3 className="text-xl font-bold text-amber-400 mb-3 flex items-center gap-3">
          <ShieldAlert className="w-6 h-6" /> Doctor's Exam Style Alert
        </h3>
        <p className="text-slate-300 leading-relaxed text-lg">
          Based on quiz analysis, expect <strong className="text-white">MATHEMATICAL PROBLEM SOLVING</strong> questions involving:
          Radon transforms, Fourier transforms, signal sketching, line integrals, and derivations.
          Focus heavily on the mathematical foundations established in Chapters 2 & 3.
        </p>
      </div>

      {/* Quick Links Dashboard */}
      <div className="mb-16 stagger">
        <h2 className="text-2xl font-bold text-white mb-6">Essential Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {quickLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <Link key={i} href={link.path} className={`claude-surface border border-slate-800 rounded-xl p-5 group transition-all duration-300 ${link.border}`}>
                <Icon className={`w-8 h-8 mb-4 ${link.color} group-hover:scale-110 transition-transform`} />
                <h3 className="text-white font-bold mb-1">{link.name}</h3>
                <p className="text-xs text-slate-400">{link.desc}</p>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Chapter Grid */}
      <div className="stagger">
        <h2 className="text-2xl font-bold text-white mb-6">Course Material</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((ch) => {
            const Icon = ch.icon;
            return (
              <Link key={ch.id} href={ch.path} className={`group claude-surface border border-slate-800 rounded-xl overflow-hidden transition-all duration-300 ${ch.border}`}>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 group-hover:bg-slate-800/50 transition-colors">
                      <Icon className={`w-6 h-6 ${ch.color}`} />
                    </div>
                    <span className="text-xs font-bold text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                      CH {ch.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{ch.title}</h3>
                  <div className="flex items-center text-sm font-semibold text-slate-500 group-hover:text-slate-300 transition-colors">
                    Review Chapter <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

    </div>
  );
}