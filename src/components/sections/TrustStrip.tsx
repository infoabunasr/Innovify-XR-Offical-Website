import React from 'react';
import { HeartPulse, Factory, ShoppingBag, GraduationCap, Building2, Compass } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const categories = [
    { name: 'Healthcare', icon: HeartPulse },
    { name: 'Manufacturing', icon: Factory },
    { name: 'Retail', icon: ShoppingBag },
    { name: 'Education', icon: GraduationCap },
    { name: 'Real Estate', icon: Building2 },
    { name: 'Hospitality', icon: Compass },
  ];

  return (
    <section className="py-10 bg-slate-50 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 font-mono">
          Building immersive experiences across industries
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-slate-200/80 hover:border-blue-500 hover:shadow-xs transition-all duration-200"
              >
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all mb-2.5">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                  {cat.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
