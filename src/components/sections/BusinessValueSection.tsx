import React from 'react';
import { GraduationCap, Eye, Sparkles, Brain, ArrowRight } from 'lucide-react';

interface BusinessValueSectionProps {
  onOpenIntake: () => void;
}

export const BusinessValueSection: React.FC<BusinessValueSectionProps> = ({ onOpenIntake }) => {
  const pillars = [
    {
      title: 'Train',
      icon: GraduationCap,
      tagline: 'Immersive Safety & Skills Simulation',
      description: 'Create immersive simulations and training environments that allow workforce learners to practice high-stakes medical, industrial, or technical procedures in safe, zero-hazard spatial conditions.',
      benefit: 'Reduces operational accidents and cuts material training costs by up to 75%.'
    },
    {
      title: 'Visualize',
      icon: Eye,
      tagline: 'Spatial Product & Architectural Context',
      description: 'Help customers and enterprise teams experience products, machinery, and unbuilt architectural environments before manufacturing or physical installation occurs.',
      benefit: 'Dramatically reduces purchase friction and cuts costly design revision cycles.'
    },
    {
      title: 'Engage',
      icon: Sparkles,
      tagline: 'Memorable Interactive Experiences',
      description: 'Create memorable WebAR and mobile interactive experiences that capture audience attention, boost brand interaction times, and drive viral consumer participation.',
      benefit: 'Consistently yields higher conversion rates compared to static 2D media.'
    },
    {
      title: 'Automate & Personalize',
      icon: Brain,
      tagline: 'AI-Powered Spatial Intelligence',
      description: 'Use artificial intelligence to make digital experiences smarter and more efficient, leveraging real-time computer vision, automated spatial analysis, and personalized learning feedback.',
      benefit: 'Transforms static 3D models into self-learning, adaptive enterprise tools.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
            Business Value
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading">
            Transform the Way People Learn, Experience & Interact
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Investing in spatial computing and AI is not a gimmick—it is a strategic capability that unlocks operational efficiency, safety, and customer conversion.
          </p>
        </div>

        {/* 4 Pillars Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:p-9 rounded-xl bg-slate-50 border border-slate-150 space-y-5 flex flex-col justify-between hover:border-blue-600 hover:bg-white transition-all duration-300 hover:shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest font-mono">
                      0{idx + 1} / Value Pillar
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 font-heading">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    {pillar.tagline}
                  </p>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-200 bg-white -mx-8 -mb-8 p-6 rounded-b-xl">
                  <div className="text-xs font-bold text-emerald-700">
                    Impact: <span className="text-slate-600 font-normal">{pillar.benefit}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="text-center pt-6">
          <button
            onClick={onOpenIntake}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-full transition-all shadow-xs hover:shadow-md hover:scale-[1.01]"
          >
            <span>Consult With Our XR Strategists</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
