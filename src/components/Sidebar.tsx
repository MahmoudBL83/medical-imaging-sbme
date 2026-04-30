'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, List, Calculator, Target, AlertTriangle, HelpCircle } from 'lucide-react';

const chapters = [
  { number: 1, title: 'Introduction', path: '/chapters/chapter-1' },
  { number: 2, title: 'Signals and Systems', path: '/chapters/chapter-2' },
  { number: 3, title: 'Image Quality', path: '/chapters/chapter-3' },
  { number: 4, title: 'Physics of Radiography', path: '/chapters/chapter-4' },
  { number: 5, title: 'Projection Radiography', path: '/chapters/chapter-5' },
  { number: 6, title: 'Computed Tomography', path: '/chapters/chapter-6' },
  { number: 7, title: 'Physics of Nuclear Medicine', path: '/chapters/chapter-7' },
  { number: 8, title: 'Planar Scintigraphy', path: '/chapters/chapter-8' },
  { number: 9, title: 'Emission Computed Tomography', path: '/chapters/chapter-9' },
];

const resources = [
  { title: 'Glossary', path: '/glossary', icon: List },
  { title: 'Formula Sheet', path: '/formulas', icon: Calculator },
  { title: 'High-Yield Review', path: '/high-yield', icon: Target },
  { title: 'Common Mistakes', path: '/common-mistakes', icon: AlertTriangle },
  { title: 'Practice Questions', path: '/practice-questions', icon: HelpCircle },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 text-slate-100 min-h-screen flex flex-col border-r border-slate-700">
      <div className="p-4 border-b border-slate-700">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-400 hover:text-blue-300">
          <BookOpen className="w-6 h-6" />
          Medical Imaging
        </Link>
        <p className="text-xs text-slate-400 mt-1">Prince & Links - Study Guide</p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Chapters</h3>
          <ul className="space-y-1">
            {chapters.map((chapter) => (
              <li key={chapter.number}>
                <Link
                  href={chapter.path}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    pathname === chapter.path
                      ? 'bg-blue-600 text-slate-900'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span className="font-medium">{chapter.number}.</span> {chapter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Resources</h3>
          <ul className="space-y-1">
            {resources.map((resource) => (
              <li key={resource.path}>
                <Link
                  href={resource.path}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    pathname === resource.path
                      ? 'bg-emerald-600 text-slate-900'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <resource.icon className="inline-block w-4 h-4 mr-2" />
                  {resource.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="p-4 border-t border-slate-700">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
        >
          <Home className="w-4 h-4" />
          Home
        </Link>
      </div>
    </aside>
  );
}