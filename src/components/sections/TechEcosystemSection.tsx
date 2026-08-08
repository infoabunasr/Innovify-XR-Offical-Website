import React from 'react';
import { Cpu, Eye, Code, Sparkles } from 'lucide-react';

export const TechEcosystemSection: React.FC = () => {
  const techCategories = [
    {
      category: 'AR / VR Engines & Frameworks',
      icon: Eye,
      items: [
        { name: 'Unity 3D', desc: 'Cross-platform spatial engine' },
        { name: 'Unreal Engine 5', desc: 'Photorealistic VR rendering' },
        { name: 'ARKit & ARCore', desc: 'Native iOS & Android tracking' },
        { name: 'WebXR API', desc: 'Browser spatial computing standard' },
        { name: 'Three.js & WebGL', desc: 'High-performance web 3D graphics' }
      ]
    },
    {
      category: 'AI & Machine Learning Pipelines',
      icon: Cpu,
      items: [
        { name: 'Python AI Stack', desc: 'Deep learning core' },
        { name: 'Computer Vision', desc: 'Real-time spatial tracking' },
        { name: 'AI APIs', desc: 'LLM & Multimodal AI integration' },
        { name: 'Predictive Models', desc: 'Trainee analytics & telemetry' }
      ]
    },
    {
      category: 'Web & Enterprise Infrastructure',
      icon: Code,
      items: [
        { name: 'React & TypeScript', desc: 'Enterprise frontend applications' },
        { name: 'Node.js & Express', desc: 'Scalable backend API services' },
        { name: 'JavaScript & ES2022', desc: 'Modern web web-core' },
        { name: 'Cloud Deployment', desc: 'Enterprise container hosting' }
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/80 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
            Technology Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading">
            Built With Modern Technology
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            We utilize industry-standard spatial graphics engines, native mobile frameworks, and advanced AI models to construct durable enterprise applications.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {techCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 space-y-6 shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 font-heading">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between hover:border-blue-400 transition-colors"
                    >
                      <div>
                        <div className="text-sm font-bold text-slate-900">{item.name}</div>
                        <div className="text-xs text-slate-500 font-medium">{item.desc}</div>
                      </div>
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
