import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/80 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
            Client Verification
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Innovify XR operates under strict non-disclosure agreements (NDAs) for enterprise defense, healthcare, and industrial simulation partnerships.
          </p>
        </div>

        {/* Verified Placeholder Card */}
        <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-xl bg-white border border-slate-200 text-center space-y-6 relative overflow-hidden shadow-2xs">
          <div className="absolute top-0 inset-x-0 h-1 bg-blue-600" />
          
          <div className="w-12 h-12 bg-blue-50 border border-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-950 font-heading">
              Enterprise Client Privacy & NDA Compliance
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
              Verified client testimonials and project benchmarks are available to qualified business stakeholders upon request following mutual Non-Disclosure Agreement execution.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold uppercase tracking-wider text-emerald-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Verified Customer Feedback Governance</span>
          </div>
        </div>

      </div>
    </section>
  );
};
