import React from 'react';
import { HeroCanvas } from '../HeroCanvas';
import { ArrowUpRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenIntake: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenIntake }) => {
  const handleExploreWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#case-studies');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 bg-white overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-gradient pointer-events-none opacity-80" />
      <div className="absolute top-0 inset-x-0 h-px bg-slate-100" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - SEO H1 & Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Enterprise Immersive Technology</span>
            </div>

            {/* SEO-focused H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1] font-heading">
              AR, VR, WebAR & AI Solutions <br className="hidden sm:inline" />
              <span className="text-blue-600">for the Future of Business</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-normal max-w-2xl">
              Innovify XR builds immersive and intelligent digital experiences that help businesses transform training, marketing, visualization, customer experiences, and digital operations through cutting-edge XR and AI integration.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenIntake}
                className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold uppercase tracking-wider text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#case-studies"
                onClick={handleExploreWork}
                className="inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-blue-600 border border-slate-200 font-semibold uppercase tracking-wider text-sm px-7 py-4 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Explore Selected Work</span>
              </a>
            </div>

            {/* Micro Trust Proof */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Enterprise Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <span>WebXR & Spatial Computing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span>AI Computer Vision</span>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive 3D Canvas Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full rounded-3xl bg-slate-50 border border-slate-200/80 p-2 shadow-xs backdrop-blur-sm overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />
              <HeroCanvas />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
