import React, { useState } from 'react';
import { INDUSTRIES } from '../../data';
import { IndustryItem } from '../../types';
import {
  HeartPulse,
  Factory,
  ShoppingBag,
  GraduationCap,
  Building2,
  Compass,
  ArrowRight,
  X,
  CheckCircle2,
  Sparkles,
  Sparkle
} from 'lucide-react';

interface IndustriesSectionProps {
  onOpenIntake: (industryName?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenIntake }) => {
  const [selectedIndustryModal, setSelectedIndustryModal] = useState<IndustryItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return HeartPulse;
      case 'Factory': return Factory;
      case 'ShoppingBag': return ShoppingBag;
      case 'GraduationCap': return GraduationCap;
      case 'Building2': return Building2;
      case 'Compass': return Compass;
      default: return HeartPulse;
    }
  };

  return (
    <section id="industries" className="py-20 lg:py-28 bg-slate-50/80 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
            Industries Served
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading">
            Built for Real-World Industries
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Discover how spatial technology and AI integration deliver high-impact transformation across global enterprise sectors.
          </p>
        </div>

        {/* 6 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry) => {
            const Icon = getIcon(industry.iconName);
            return (
              <div
                key={industry.id}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between hover:border-blue-600 transition-all duration-300 hover:shadow-sm"
              >
                {/* Visual Header */}
                <div className="relative h-44 overflow-hidden bg-slate-100 border-b border-slate-150">
                  <img
                    src={industry.imageUrl}
                    alt={industry.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 p-2.5 rounded-lg bg-white/95 backdrop-blur-md text-blue-600 border border-slate-200 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-950 font-heading group-hover:text-blue-600 transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>

                  {/* Key Applications Pills */}
                  <div className="pt-1 flex flex-wrap gap-2">
                    {industry.keyApplications.map((app, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-700"
                      >
                        {app}
                      </span>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <div className="pt-4 border-t border-slate-150">
                    <button
                      onClick={() => setSelectedIndustryModal(industry)}
                      className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span>Explore {industry.title} Solutions</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Industry Detail Modal Popup */}
      {selectedIndustryModal && (() => {
        const Icon = getIcon(selectedIndustryModal.iconName);
        return (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative border border-slate-200 shadow-2xl my-8 animate-in fade-in zoom-in-95 duration-200">
              <button
                onClick={() => setSelectedIndustryModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
                    Enterprise Sector Solution
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-950 font-heading">
                    {selectedIndustryModal.title} Overview
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {selectedIndustryModal.description} Innovify XR partners with {selectedIndustryModal.title} leaders to deploy custom spatial environments, interactive 3D configurators, and AI-assisted workflows tailored to operational requirements.
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
                  Key Enterprise Applications:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedIndustryModal.keyApplications.map((app, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-xs space-y-1">
                <span className="font-mono text-blue-700 font-bold uppercase block">
                  Commercial Impact & Benefit:
                </span>
                <p className="text-slate-800 leading-relaxed">
                  Eliminates physical bottlenecks and reduces operational error rates by delivering high-fidelity 3D spatial visualizers and interactive AI guidance engines.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedIndustryModal(null)}
                  className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-800"
                >
                  Close Overview
                </button>

                <button
                  onClick={() => {
                    const title = selectedIndustryModal.title;
                    setSelectedIndustryModal(null);
                    onOpenIntake(`${title} Solution`);
                  }}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md"
                >
                  <Sparkle className="w-3.5 h-3.5" />
                  <span>Start {selectedIndustryModal.title} Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
};

