import React from 'react';
import { ArrowUpRight, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenIntake: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenIntake }) => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/80 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 lg:p-16 rounded-xl bg-white border border-slate-200 text-center space-y-8 shadow-xs relative overflow-hidden">
          {/* Top border highlight */}
          <div className="absolute top-0 inset-x-0 h-1 bg-blue-600" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Ready To Transform Your Spatial Capabilities?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading leading-tight max-w-3xl mx-auto">
            Have an Idea? Let's Build It.
          </h2>

          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us what you're trying to achieve. We'll help you explore the right technology, experience, and development approach for your project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenIntake}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-full transition-all shadow-xs hover:shadow-md hover:scale-[1.01]"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenIntake}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold uppercase tracking-wider text-xs px-7 py-4 rounded-full transition-all"
            >
              <MessageSquare className="w-4 h-4 text-blue-600" />
              <span>Talk to Our Team</span>
            </button>
          </div>

          <div className="pt-6 border-t border-slate-150 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Free Technical Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>NDA Protected Inquiry</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
