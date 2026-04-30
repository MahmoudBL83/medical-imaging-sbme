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
    <html lang="en" className="theme-claude">
      <body className="min-h-screen font-sans antialiased">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 px-6 py-8 md:px-10 lg:px-12 overflow-y-auto">
            <div className="max-w-5xl mx-auto fade-up">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}