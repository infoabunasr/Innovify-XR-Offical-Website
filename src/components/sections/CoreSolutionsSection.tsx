import React, { useState } from 'react';
import { PRIMARY_SOLUTIONS, SECONDARY_SOLUTIONS } from '../../data';
import { SolutionItem } from '../../types';
import { Eye, Headphones, Globe, Cpu, Sparkles, Smartphone, Monitor, Gamepad2, ShieldCheck, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface CoreSolutionsSectionProps {
  onSelectSolution: (solution: SolutionItem) => void;
}

export const CoreSolutionsSection: React.FC<CoreSolutionsSectionProps> = ({ onSelectSolution }) => {
  const [showSecondary, setShowSecondary] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye': return Eye;
      case 'Headphones': return Headphones;
      case 'Globe': return Globe;
      case 'Cpu': return Cpu;
      case 'Sparkles': return Sparkles;
      case 'Smartphone': return Smartphone;
      case 'Monitor': return Monitor;
      case 'Gamepad2': return Gamepad2;
      case 'ShieldCheck': return ShieldCheck;
      default: return Sparkles;
    }
  };

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
            Core Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading">
            Technology That Turns Ideas Into Experiences
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Innovify XR combines spatial computing, immersive 3D technologies, and artificial intelligence to solve complex enterprise challenges and drive real-world business results.
          </p>
        </div>

        {/* Primary Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRIMARY_SOLUTIONS.map((solution) => {
            const Icon = getIcon(solution.iconName);
            return (
              <div
                key={solution.id}
                className="group relative bg-slate-50 border border-slate-150 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-blue-600 hover:bg-white hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600">
                      {solution.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 font-heading group-hover:text-blue-600 transition-colors">
                    {solution.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    {solution.shortDesc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/80">
                  <button
                    onClick={() => onSelectSolution(solution)}
                    className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors py-1 group/btn"
                  >
                    <span>{solution.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Link toggle for auxiliary services */}
        <div className="text-center pt-2">
          <button
            onClick={() => setShowSecondary(!showSecondary)}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-blue-600 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all"
          >
            <span>View All Services (Mobile, Web, Game, Blockchain)</span>
            {showSecondary ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Secondary Services Grid */}
        {showSecondary && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-100 animate-fadeIn">
            {SECONDARY_SOLUTIONS.map((service) => {
              const Icon = getIcon(service.iconName);
              return (
                <div
                  key={service.id}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 space-y-3"
                >
                  <div className="p-2.5 w-fit rounded-lg bg-white border border-slate-200 text-blue-600">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-heading">{service.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{service.shortDesc}</p>
                  <button
                    onClick={() => onSelectSolution(service)}
                    className="text-xs font-bold uppercase tracking-wider text-blue-600 hover:underline flex items-center gap-1 pt-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
