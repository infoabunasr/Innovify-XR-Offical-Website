import React from 'react';
import { PROCESS_STEPS } from '../../data';
import { CheckCircle2 } from 'lucide-react';

export const HowWeWorkSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading">
            From Concept to Reality
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Our disciplined engineering methodology guarantees predictable project delivery, technical precision, and measurable ROI.
          </p>
        </div>

        {/* 6 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative p-6 sm:p-7 rounded-xl bg-slate-50 border border-slate-150 hover:border-blue-600 hover:bg-white transition-all duration-200 space-y-4 group hover:shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-blue-600 font-heading font-mono opacity-90 group-hover:scale-105 transition-transform">
                  {step.number}
                </span>
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-300 transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-950 font-heading group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed">
                {step.description}
              </p>

              <ul className="pt-3 border-t border-slate-200/80 space-y-1.5">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="text-xs text-slate-600 flex items-center gap-2 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
