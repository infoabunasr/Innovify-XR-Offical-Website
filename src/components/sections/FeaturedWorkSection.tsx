import React from 'react';
import { FEATURED_CASE_STUDIES } from '../../data';
import { CaseStudy } from '../../types';
import { Sparkles, ArrowRight, Layers, BarChart } from 'lucide-react';

interface FeaturedWorkSectionProps {
  onSelectProject: (project: CaseStudy) => void;
  onNavigateToCaseStudies?: () => void;
}

export const FeaturedWorkSection: React.FC<FeaturedWorkSectionProps> = ({
  onSelectProject,
  onNavigateToCaseStudies,
}) => {
  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
            Selected Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading">
            Selected Work
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Real-world immersive experiences built for different industries and use cases.
          </p>
        </div>

        {/* 3 Exact Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FEATURED_CASE_STUDIES.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-50 border border-slate-200/90 rounded-xl overflow-hidden flex flex-col justify-between hover:border-blue-600 hover:bg-white transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5"
            >
              {/* Visual Banner */}
              <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-100 border-b border-slate-200">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-blue-600 border border-slate-200 shadow-2xs">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold text-slate-950 font-heading group-hover:text-blue-600 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Metric Highlights */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 gap-2">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-white border border-slate-200 text-left">
                        <div className="text-sm font-extrabold text-blue-600">{m.value}</div>
                        <div className="text-[10px] font-semibold text-slate-500 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-600 text-slate-800 hover:text-white text-xs font-bold uppercase tracking-wider py-3 rounded-lg border border-slate-200 hover:border-blue-600 transition-all duration-200 shadow-2xs"
                  >
                    <span>{project.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Case Studies Button */}
        {onNavigateToCaseStudies && (
          <div className="text-center pt-6">
            <button
              onClick={onNavigateToCaseStudies}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.01]"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
