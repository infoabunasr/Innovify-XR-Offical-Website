import React from 'react';
import { SolutionItem } from '../types';
import { X, Check, ArrowRight, Sparkles, Shield, Cpu, Layers } from 'lucide-react';

interface SolutionModalProps {
  solution: SolutionItem | null;
  onClose: () => void;
  onOpenIntake: (serviceName?: string) => void;
}

export const SolutionModal: React.FC<SolutionModalProps> = ({
  solution,
  onClose,
  onOpenIntake,
}) => {
  if (!solution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden my-8 text-slate-900">
        {/* Top accent bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-blue-600 pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6 relative z-0">
          {/* Badge & Title */}
          <div className="space-y-3 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              {solution.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
              {solution.title}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {solution.fullDesc}
            </p>
          </div>

          {/* Key Technical Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 font-mono">
              <Cpu className="w-4 h-4 text-blue-600" />
              Technical Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {solution.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="p-1 rounded bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Use Cases */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 font-mono">
              <Layers className="w-4 h-4 text-blue-600" />
              Enterprise Applications
            </h3>
            <div className="flex flex-wrap gap-2">
              {solution.useCases.map((useCase, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-md bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom CTA Bar */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Enterprise Ready Architecture</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenIntake(solution.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold uppercase tracking-wider text-xs px-6 py-3.5 rounded-full transition-all shadow-xs"
            >
              <span>Build Custom {solution.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
