import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Medical Imaging Study Guide',
  description: 'Comprehensive study guide for Medical Imaging - Chapters 1-9',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 font-sans theme-claude">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}