import React, { useEffect } from 'react';
import { ArrowLeft, Compass, Send } from 'lucide-react';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigateToSolutions: () => void;
  onNavigateToContact: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigateHome,
  onNavigateToSolutions,
  onNavigateToContact,
}) => {
  useEffect(() => {
    document.title = '404 - Page Not Found | Innovify XR';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-[80vh] pt-32 pb-20 bg-slate-900 text-slate-100 flex items-center justify-center relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-sm tracking-wider font-semibold">
          404 ERROR
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          We Couldn&apos;t Find That Page
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-lg mx-auto leading-relaxed">
          The page you&apos;re looking for may have moved or no longer exists. Use the navigation buttons below to explore our AR, VR, WebAR and AI capabilities.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onNavigateHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl border border-slate-700 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>

          <button
            onClick={onNavigateToSolutions}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl border border-slate-700 transition-all duration-200"
          >
            <Compass className="w-4 h-4 text-blue-400" /> Explore Solutions
          </button>

          <button
            onClick={onNavigateToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-200"
          >
            <Send className="w-4 h-4" /> Start a Project
          </button>
        </div>
      </div>
    </div>
  );
};
