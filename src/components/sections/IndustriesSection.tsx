import React from 'react';
import { INDUSTRIES } from '../../data';
import { IndustryItem } from '../../types';
import { HeartPulse, Factory, ShoppingBag, GraduationCap, Building2, Compass, ArrowRight } from 'lucide-react';

interface IndustriesSectionProps {
  onOpenIntake: (industryName?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenIntake }) => {
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
                      onClick={() => onOpenIntake(industry.title)}
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
    </section>
  );
};
