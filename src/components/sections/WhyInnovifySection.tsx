import React from 'react';
import { WHY_INNOVIFY_DIFFERENTIATORS } from '../../data';
import { Target, Layers, Brain, SmartphoneNfc, Server, CheckCircle2 } from 'lucide-react';

export const WhyInnovifySection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return Target;
      case 'Layers': return Layers;
      case 'Brain': return Brain;
      case 'SmartphoneNfc': return SmartphoneNfc;
      case 'Server': return Server;
      case 'CheckCircle2': return CheckCircle2;
      default: return Target;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50/80 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
            Why Innovify XR
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading">
            Technology Built Around Your Business
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            We do not simply build immersive technology; we architect tailored digital solutions aligned with measurable business outcomes, operational safety, and scalability.
          </p>
        </div>

        {/* 6 Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_INNOVIFY_DIFFERENTIATORS.map((diff, idx) => {
            const Icon = getIcon(diff.iconName);
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 hover:border-blue-500 transition-all duration-200 space-y-4 group hover:shadow-xs"
              >
                <div className="p-3 w-fit rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-heading group-hover:text-blue-600 transition-colors">
                  {diff.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
