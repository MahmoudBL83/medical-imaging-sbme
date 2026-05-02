'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const chapters = [
    { 
      number: 1, 
      title: 'Introduction', 
      path: '/chapters/chapter-1',
      sections: []
    },
    { 
      number: 2, 
      title: 'Signals and Systems', 
      path: '/chapters/chapter-2',
      sections: [
        { id: 'signals', title: '2.1 - 2.2 Signals' },
        { id: 'systems', title: '2.3 LSI Systems' },
        { id: 'fourier', title: '2.4 - 2.7 Fourier Transforms' },
        { id: 'practice', title: '2.8 Practice Problems' }
      ]
    },
    { 
      number: 3, 
      title: 'Image Quality', 
      path: '/chapters/chapter-3',
      sections: [
        { id: 'contrast', title: '3.1 - 3.2 Contrast & Resolution' },
        { id: 'noise', title: '3.3 - 3.4 Noise & SNR' },
        { id: 'sampling', title: '3.5 - 3.6 Sampling & Artifacts' },
        { id: 'accuracy', title: '3.7 - 3.8 Accuracy & Practice' }
      ]
    },
    { 
      number: 4, 
      title: 'Physics of Radiography', 
      path: '/chapters/chapter-4',
      sections: [
        { id: 'introduction', title: '4.1 Intro & Basics' },
        { id: 'ionization', title: '4.2 Ionization' },
        { id: 'forms', title: '4.3 Forms of Radiation' },
        { id: 'properties', title: '4.4 Properties & Practice' }
      ]
    },
    { 
      number: 5, 
      title: 'Projection Radiography', 
      path: '/chapters/chapter-5',
      sections: [
        { id: 'introduction', title: '5.1 Intro' },
        { id: 'instrumentation', title: '5.2 Instrumentation' },
        { id: 'formation', title: '5.3 Image Formation' },
        { id: 'noise', title: '5.4 Noise & Practice' }
      ]
    },
    { 
      number: 6, 
      title: 'Computed Tomography', 
      path: '/chapters/chapter-6',
      sections: [
        { id: 'introduction', title: '6.1 Intro' },
        { id: 'instrumentation', title: '6.2 Instrumentation' },
        { id: 'formation', title: '6.3 Image Formation' },
        { id: 'noise', title: '6.4 Noise' },
        { id: 'practice', title: '6.5 Practice' }
      ]
    },
    { 
      number: 7, 
      title: 'Physics of Nuclear Medicine', 
      path: '/chapters/chapter-7',
      sections: [
        { id: 'introduction', title: '7.1 Intro' },
        { id: 'nomenclature', title: '7.2 Nomenclature' },
        { id: 'decay', title: '7.3 Radioactive Decay' },
        { id: 'modes', title: '7.4 Modes of Decay' },
        { id: 'tracers', title: '7.5 Radiotracers & Stats' },
        { id: 'practice', title: '7.6 Practice' }
      ]
    },
    { 
      number: 8, 
      title: 'Planar Scintigraphy', 
      path: '/chapters/chapter-8',
      sections: [
        { id: 'introduction', title: '8.1 Introduction' },
        { id: 'instrumentation', title: '8.2 Instrumentation' },
        { id: 'formation', title: '8.3 Image Formation' },
        { id: 'quality', title: '8.4 Image Quality' },
        { id: 'practice', title: '8.5 Practice Problems' }
      ]
    },
    { 
      number: 9, 
      title: 'Emission CT', 
      path: '/chapters/chapter-9',
      sections: [
        { id: 'instrumentation', title: '9.1 Instrumentation' },
        { id: 'formation', title: '9.2 Image Formation' },
        { id: 'quality', title: '9.3 Image Quality' },
        { id: 'practice', title: '9.4 Practice Problems' }
      ]
    },
  ];

  const resources = [
    { title: 'Glossary', path: '/glossary' },
    { title: 'Formula Sheet', path: '/formulas' },
    { title: 'High-Yield Review', path: '/high-yield' },
    { title: 'Common Mistakes', path: '/common-mistakes' },
    { title: 'Practice Questions', path: '/practice-questions' },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-800 p-2 rounded-lg text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky lg:top-0 inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-100 lg:h-screen min-h-screen flex flex-col border-r border-slate-700 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-4 border-b border-slate-700">
          <Link href="/" className="text-xl font-bold text-blue-400 hover:text-blue-300">
            Medical Imaging
          </Link>
          <p className="text-xs text-slate-400 mt-1">Study Guide - Chapters 1-9</p>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Chapters</h3>
            <ul className="space-y-2">
              {chapters.map((chapter) => {
                const isActive = pathname?.startsWith(chapter.path);
                return (
                  <li key={chapter.number}>
                    <Link
                      href={chapter.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive 
                          ? 'bg-blue-600/20 text-blue-400 font-semibold' 
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <span className="font-medium mr-2">{chapter.number}.</span> {chapter.title}
                    </Link>
                    
                    {isActive && chapter.sections.length > 0 && (
                      <ul className="mt-2 ml-4 pl-3 border-l border-slate-700 space-y-2">
                        {chapter.sections.map(section => (
                          <li key={section.id}>
                            <a 
                              href={`#${section.id}`}
                              onClick={() => setIsOpen(false)}
                              className="block text-xs text-slate-400 hover:text-teal-400 transition-colors py-1"
                            >
                              {section.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Resources</h3>
            <ul className="space-y-1">
              {resources.map((resource) => (
                <li key={resource.path}>
                  <Link
                    href={resource.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    {resource.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="p-4 border-t border-slate-700">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-sm text-slate-400 hover:text-white">
            ← Home
          </Link>
        </div>
      </aside>
    </>
  );
}