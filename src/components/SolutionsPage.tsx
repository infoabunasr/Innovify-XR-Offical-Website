import React, { useEffect, useState } from 'react';
import {
  Eye,
  Headphones,
  Globe,
  Cpu,
  Sparkles,
  Smartphone,
  Monitor,
  Gamepad2,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Layers,
  Zap,
  Target,
  BarChart3,
  Bot,
  Box,
  Compass,
  FileCode,
  HeartPulse,
  Factory,
  ShoppingBag,
  GraduationCap,
  Building2,
  Plane,
  HelpCircle,
  MessageSquare,
  Sparkle
} from 'lucide-react';
import { SolutionItem, CaseStudy } from '../types';
import { PRIMARY_SOLUTIONS, SECONDARY_SOLUTIONS, FEATURED_CASE_STUDIES, INDUSTRIES } from '../data';

interface SolutionsPageProps {
  onOpenIntake: (serviceName?: string) => void;
  onSelectProject: (project: CaseStudy) => void;
  onSelectSolution: (solution: SolutionItem) => void;
  onNavigateHome: (targetSection?: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onOpenIntake,
  onSelectProject,
  onSelectSolution,
  onNavigateHome,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'all' | 'xr' | 'ai' | 'web'>('all');

  useEffect(() => {
    // Set document title and meta description
    document.title = 'AR, VR, WebAR & AI Solutions | Innovify XR';

    // Scroll to top when loaded
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Inject JSON-LD structured data for SEO
    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://innovifyxr.com/#organization',
          name: 'Innovify XR',
          url: 'https://innovifyxr.com',
          logo: 'https://innovifyxr.com/logo.png',
          description: 'Enterprise AR, VR, WebAR and AI Technology Company',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://innovifyxr.com/solutions/#webpage',
          url: 'https://innovifyxr.com/solutions',
          name: 'AR, VR, WebAR & AI Solutions | Innovify XR',
          description:
            'Explore Innovify XR solutions across AR, VR, WebAR, AI and AI + XR, plus custom mobile, web, game and blockchain development for businesses.',
          isPartOf: { '@id': 'https://innovifyxr.com/#website' },
          breadcrumb: { '@id': 'https://innovifyxr.com/solutions/#breadcrumb' },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://innovifyxr.com/solutions/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://innovifyxr.com',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Solutions',
              item: 'https://innovifyxr.com/solutions',
            },
          ],
        },
        {
          '@type': 'Service',
          name: 'AR Development',
          serviceType: 'Augmented Reality Development',
          provider: { '@id': 'https://innovifyxr.com/#organization' },
          description: 'Create augmented reality experiences that connect digital content with the physical world.',
        },
        {
          '@type': 'Service',
          name: 'VR Development',
          serviceType: 'Virtual Reality Development',
          provider: { '@id': 'https://innovifyxr.com/#organization' },
          description: 'Build immersive virtual environments for training, simulation, education, healthcare, and enterprise experiences.',
        },
        {
          '@type': 'Service',
          name: 'WebAR Development',
          serviceType: 'WebAR Development',
          provider: { '@id': 'https://innovifyxr.com/#organization' },
          description: 'Deliver browser-based augmented reality experiences without requiring users to download a dedicated application.',
        },
        {
          '@type': 'Service',
          name: 'AI Integration',
          serviceType: 'Artificial Intelligence Services',
          provider: { '@id': 'https://innovifyxr.com/#organization' },
          description: 'Integrate artificial intelligence into digital products and workflows to create smarter, more efficient experiences.',
        },
        {
          '@type': 'Service',
          name: 'AI + XR Solutions',
          serviceType: 'AI and Immersive Technology Convergence',
          provider: { '@id': 'https://innovifyxr.com/#organization' },
          description: 'Combine artificial intelligence with AR and VR to create intelligent immersive experiences.',
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqItems.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.a,
            },
          })),
        },
      ],
    };

    const scriptElement = document.createElement('script');
    scriptElement.type = 'application/ld+json';
    scriptElement.id = 'solutions-jsonld';
    scriptElement.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(scriptElement);

    return () => {
      const existingScript = document.getElementById('solutions-jsonld');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-20 sm:pt-24 pb-16">
      {/* ==========================================
          02 — HERO SECTION
          ========================================== */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-16 lg:py-24 border-b border-slate-800">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkle className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                <span>Enterprise Technology Capabilities</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Technology Solutions Built for Real-World Business
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                From immersive AR and VR experiences to browser-based WebAR and intelligent AI solutions, Innovify XR helps businesses turn ambitious ideas into practical digital experiences.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenIntake()}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm uppercase tracking-wider px-7 py-3.5 rounded-full shadow-lg hover:shadow-blue-600/30 transition-all duration-200 group"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('featured-projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm uppercase tracking-wider px-7 py-3.5 rounded-full border border-slate-700 transition-all"
                >
                  <span>View Our Work</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Highlights bar */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs font-medium text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>AR & VR Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Frictionless WebAR</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>AI + Spatial Systems</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
                {/* Header tag */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/60 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    INNOVIFY_XR_MATRIX
                  </span>
                  <span>v3.4 PROD</span>
                </div>

                {/* Grid Visual representation */}
                <div className="py-6 space-y-4">
                  {/* AR Row */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between group hover:border-blue-500/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                        <Eye className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Augmented Reality (AR)</div>
                        <div className="text-xs text-slate-400">Spatial product placement & tracking</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">ARKit / ARCore</span>
                  </div>

                  {/* VR Row */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between group hover:border-blue-500/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                        <Headphones className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Virtual Reality (VR)</div>
                        <div className="text-xs text-slate-400">High-fidelity medical & industrial simulation</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">Unity / Unreal 5</span>
                  </div>

                  {/* WebAR Row */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between group hover:border-blue-500/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-cyan-600/20 text-cyan-400 border border-cyan-500/30">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">WebAR (Browser-based)</div>
                        <div className="text-xs text-slate-400">Zero app download friction</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">WebXR / Three.js</span>
                  </div>

                  {/* AI + XR Row */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between group hover:border-blue-500/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">AI + XR Convergence</div>
                        <div className="text-xs text-slate-400">Computer vision & adaptive avatars</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">Vision + LLM</span>
                  </div>
                </div>

                {/* Footer badge */}
                <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                  <span>Target Platforms:</span>
                  <span className="text-slate-300 font-medium">Headsets, Mobile, Web Browsers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          03 — SOLUTION INTRODUCTION
          ========================================== */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-150">
            Strategic Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            One Technology Partner. Multiple Digital Possibilities.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Businesses increasingly need digital experiences that are interactive, intelligent, and accessible across devices. Innovify XR brings together immersive technologies, artificial intelligence, software engineering, and creative development to build custom solutions around specific business objectives.
          </p>
        </div>
      </section>

      {/* ==========================================
          04 — PRIMARY SOLUTIONS
          ========================================== */}
      <section id="core-solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Core Solutions
            </h2>
            <p className="text-slate-600 text-base">
              High-impact spatial computing, browser-based WebXR, and artificial intelligence architectures tailored to enterprise goals.
            </p>
          </div>

          <div className="space-y-16">
            {PRIMARY_SOLUTIONS.map((sol, index) => {
              const isEven = index % 2 === 0;
              const IconComp = getSolutionIcon(sol.iconName);

              return (
                <div
                  key={sol.id}
                  id={sol.id}
                  className={`bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Text Column */}
                  <div className={`lg:col-span-7 space-y-6 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        {sol.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                        {sol.title}
                      </h3>
                      <p className="text-base text-slate-700 font-medium leading-relaxed mb-2">
                        {sol.shortDesc}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {sol.fullDesc}
                      </p>
                    </div>

                    {/* Features list */}
                    {sol.features && sol.features.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                          Key Capabilities:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                          {sol.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Common Use cases */}
                    {sol.useCases && sol.useCases.length > 0 && (
                      <div className="pt-2">
                        <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                          Primary Business Use Cases:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {sol.useCases.map((uc, uIdx) => (
                            <span
                              key={uIdx}
                              className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-lg border border-slate-200"
                            >
                              {uc}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => onSelectSolution(sol)}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-sm"
                      >
                        <span>{sol.ctaText}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => onOpenIntake(sol.title)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 px-4 py-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-all"
                      >
                        <span>Request Technical Spec</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Visual Column */}
                  <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative bg-slate-900 rounded-2xl p-6 text-white overflow-hidden shadow-lg border border-slate-800 min-h-[280px] flex flex-col justify-between">
                      {/* Background accent */}
                      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl" />

                      <div className="relative z-10 flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 bg-blue-950/60 border border-blue-800/50 px-2.5 py-1 rounded">
                          0{index + 1} // ARCHITECTURE
                        </span>
                        <span className="text-xs font-medium text-slate-400">Enterprise Ready</span>
                      </div>

                      <div className="relative z-10 my-8 text-center space-y-3">
                        <div className="inline-flex p-4 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 mb-1">
                          <IconComp className="w-10 h-10" />
                        </div>
                        <h4 className="text-lg font-bold text-white">{sol.title}</h4>
                        <p className="text-xs text-slate-300 max-w-xs mx-auto">
                          Custom-engineered spatial computing & AI architecture designed for scale.
                        </p>
                      </div>

                      <div className="relative z-10 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>Deploy: Cross-Platform</span>
                        <span className="text-emerald-400 font-semibold">100% Production Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          05 — ADDITIONAL DIGITAL CAPABILITIES
          ========================================== */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 bg-slate-200/70 px-3 py-1 rounded-full">
              Extended Software Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Additional Development Capabilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Custom mobile, web, interactive game, and blockchain software engineering to support complete enterprise digital ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECONDARY_SOLUTIONS.map((sec) => {
              const IconComp = getSolutionIcon(sec.iconName);
              return (
                <div
                  key={sec.id}
                  className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                        {sec.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{sec.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">{sec.shortDesc}</p>
                    </div>

                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      {sec.features?.map((f, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-500">
                          <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => onSelectSolution(sec)}
                      className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <span>Explore Capability</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          06 — SOLUTION COMPARISON
          ========================================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Technology Selection Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Which Technology Is Right for Your Project?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A practical decision guide comparing hardware requirements, deployment friction, and optimal business applications.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider font-semibold">
                  <th className="py-4 px-6">Technology</th>
                  <th className="py-4 px-6">Best For</th>
                  <th className="py-4 px-6">Requires App Download?</th>
                  <th className="py-4 px-6">Typical Enterprise Use Case</th>
                  <th className="py-4 px-6">Key Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700 bg-white">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>AR (Augmented Reality)</span>
                  </td>
                  <td className="py-4 px-6 font-medium">Physical-world digital overlay</td>
                  <td className="py-4 px-6 text-slate-600">Usually (iOS/Android native app)</td>
                  <td className="py-4 px-6">Product visualization & machine maintenance</td>
                  <td className="py-4 px-6 text-blue-600 font-semibold">High-precision surface & spatial tracking</td>
                </tr>

                <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/40">
                  <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                    <Headphones className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>VR (Virtual Reality)</span>
                  </td>
                  <td className="py-4 px-6 font-medium">Full immersive digital simulation</td>
                  <td className="py-4 px-6 text-slate-600">Yes (Headset app, e.g., Meta Quest)</td>
                  <td className="py-4 px-6">Surgical, industrial & hazardous safety training</td>
                  <td className="py-4 px-6 text-indigo-600 font-semibold">100% controlled zero-hazard environment</td>
                </tr>

                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>WebAR (Browser AR)</span>
                  </td>
                  <td className="py-4 px-6 font-medium">Frictionless accessible 3D</td>
                  <td className="py-4 px-6 font-bold text-emerald-600">NO (Direct browser via QR / URL)</td>
                  <td className="py-4 px-6">E-commerce, packaging, marketing & events</td>
                  <td className="py-4 px-6 text-cyan-600 font-semibold">Zero download drop-off & maximum reach</td>
                </tr>

                <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/40">
                  <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>AI Integration</span>
                  </td>
                  <td className="py-4 px-6 font-medium">Intelligence & process automation</td>
                  <td className="py-4 px-6 text-slate-600">Depends (API / Cloud / Native SDK)</td>
                  <td className="py-4 px-6">Computer vision inspection & predictive analytics</td>
                  <td className="py-4 px-6 text-purple-600 font-semibold">Continuous learning & pattern recognition</td>
                </tr>

                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>AI + XR Convergence</span>
                  </td>
                  <td className="py-4 px-6 font-medium">Intelligent spatial environments</td>
                  <td className="py-4 px-6 text-slate-600">Depends on target device</td>
                  <td className="py-4 px-6">Adaptive VR surgical coaching & smart AR guidance</td>
                  <td className="py-4 px-6 text-amber-600 font-semibold">Real-time context awareness & smart avatars</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==========================================
          07 — BUSINESS PROBLEMS WE SOLVE
          ========================================== */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
              Commercial Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technology With a Purpose
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Instead of building technology for its own sake, we align spatial computing and AI directly with concrete commercial objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-4 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Train Better</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Immersive VR environments for surgical education, industrial equipment operation, and hazardous safety simulation with zero real-world physical risk or material waste.
              </p>
              <div className="pt-2 text-xs font-semibold text-blue-400 flex items-center gap-1">
                <span>42% Faster Skill Retention</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-4 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                <Box className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Visualize Products</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Allow customers and enterprise buyers to inspect products, CAD models, and architectural spaces digitally in true scale prior to manufacture or purchase.
              </p>
              <div className="pt-2 text-xs font-semibold text-indigo-400 flex items-center gap-1">
                <span>35% Higher Cart Conversion</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-4 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Engage Customers</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Create interactive WebAR campaigns, spatial branded environments, and frictionless digital try-on experiences that make products memorable.
              </p>
              <div className="pt-2 text-xs font-semibold text-cyan-400 flex items-center gap-1">
                <span>3x Longer User Engagement</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-4 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Build Smarter</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Integrate AI computer vision, automated quality control, LLM assistants, and predictive models into enterprise software workflows.
              </p>
              <div className="pt-2 text-xs font-semibold text-purple-400 flex items-center gap-1">
                <span>68% Manual Inspection Drop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          08 — INDUSTRIES
          ========================================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Sector Specializations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Solutions Across Industries
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Tailored spatial computing and artificial intelligence applications designed for domain-specific operational demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind) => {
              const IconComp = getIndustryIcon(ind.iconName);
              return (
                <div
                  key={ind.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={ind.imageUrl}
                        alt={`${ind.title} AR/VR Solutions`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width="800"
                        height="400"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-lg bg-blue-600 text-white shadow-sm">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <h3 className="text-lg font-bold text-white">{ind.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {ind.description}
                      </p>

                      <div className="space-y-1.5 pt-2">
                        <div className="text-[11px] font-semibold text-slate-900 uppercase tracking-wider">
                          Key Industry Applications:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {ind.keyApplications.map((app, aIdx) => (
                            <span
                              key={aIdx}
                              className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded border border-slate-200"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => onOpenIntake(`${ind.title} Solution`)}
                      className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 py-2.5 rounded-xl transition-colors border border-blue-150"
                    >
                      <span>Explore {ind.title} Solutions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          09 — FEATURED PROJECTS
          ========================================== */}
      <section id="featured-projects" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Proven Implementation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Built for Real-World Applications
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore our flagship enterprise implementations across healthcare, retail, and industrial manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_CASE_STUDIES.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width="800"
                      height="500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-slate-700">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-xs"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          10 — DEVELOPMENT PROCESS
          ========================================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Structured Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              From Idea to Deployment
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A disciplined six-phase spatial and AI software engineering lifecycle to ensure high-performance, predictable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black font-mono text-blue-600">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded border border-slate-200">
                    {step.phase}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{step.desc}</p>

                <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 font-mono">
                  <span className="text-slate-900 font-semibold">Deliverable: </span>
                  {step.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          11 — TECHNOLOGY STACK
          ========================================== */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
              Technology Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technology Behind the Experience
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              We leverage industry-standard game engines, spatial SDKs, computer vision libraries, and web protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1: XR */}
            <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">XR & Spatial Engines</h3>
              </div>
              <p className="text-xs text-slate-300">
                High-performance 3D rendering, physics simulation, and real-time spatial positioning SDKs.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Unity 3D', 'Unreal Engine 5', 'ARKit', 'ARCore', 'WebXR', 'Three.js', 'WebGL', 'VisionOS', 'OpenXR'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-slate-900/90 text-slate-200 px-3 py-1 rounded-lg border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 2: AI */}
            <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">AI & Intelligent Systems</h3>
              </div>
              <p className="text-xs text-slate-300">
                Computer vision, spatial object recognition, machine learning models, and custom AI APIs.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Python', 'Computer Vision', 'OpenCV', 'TensorFlow', 'PyTorch', 'Spatial AI APIs', 'LLM Agents', 'Neural Shaders'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-slate-900/90 text-slate-200 px-3 py-1 rounded-lg border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 3: Web & Core */}
            <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30">
                  <Monitor className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Web & Core Software</h3>
              </div>
              <p className="text-xs text-slate-300">
                Scalable web applications, cloud backends, C# / C++ native scripts, and microservices.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['React', 'TypeScript', 'Node.js', 'C# / .NET', 'C++', 'WebAssembly', 'REST & GraphQL APIs', 'Docker & Cloud'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-slate-900/90 text-slate-200 px-3 py-1 rounded-lg border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          12 — WHY INNOVIFY XR
          ========================================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Our Differentiators
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Businesses Choose Innovify XR
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Six core principles guiding our spatial software engineering and partner relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyPoints.map((pt, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600 text-white text-xs font-bold font-mono">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{pt.title}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          13 — FAQ
          ========================================== */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Clear Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Direct, transparent answers regarding spatial development, timelines, and technology selection.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-blue-600 focus:outline-none"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          14 — FINAL CTA
          ========================================== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Ready to Build?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Have a Technology Challenge? Let's Build the Solution.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us what you're trying to achieve and we'll help you identify the right technology, experience, and development approach.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenIntake()}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:shadow-blue-600/30 transition-all group"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => onOpenIntake('Strategic Consultation')}
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-full border border-slate-700 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-slate-400" />
              <span>Talk to Our Team</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper for Solution Icons
function getSolutionIcon(iconName: string) {
  switch (iconName) {
    case 'Eye':
      return Eye;
    case 'Headphones':
      return Headphones;
    case 'Globe':
      return Globe;
    case 'Cpu':
      return Cpu;
    case 'Sparkles':
      return Sparkles;
    case 'Smartphone':
      return Smartphone;
    case 'Monitor':
      return Monitor;
    case 'Gamepad2':
      return Gamepad2;
    case 'ShieldCheck':
      return ShieldCheck;
    default:
      return Box;
  }
}

// Helper for Industry Icons
function getIndustryIcon(iconName: string) {
  switch (iconName) {
    case 'HeartPulse':
      return HeartPulse;
    case 'Factory':
      return Factory;
    case 'ShoppingBag':
      return ShoppingBag;
    case 'GraduationCap':
      return GraduationCap;
    case 'Building2':
      return Building2;
    case 'Plane':
      return Plane;
    default:
      return Building2;
  }
}

// Development Process Steps Data
const processSteps = [
  {
    num: '01',
    phase: 'Discovery',
    title: 'Discovery & ROI Analysis',
    desc: 'Understand business challenges, define target user personas, outline spatial constraints, and specify hardware specs.',
    deliverable: 'Technical Requirements Brief & ROI Strategy',
  },
  {
    num: '02',
    phase: 'Architecture',
    title: 'Technology & Hardware Strategy',
    desc: 'Select the optimal engine (Unity, Unreal, WebXR), hardware ecosystem (Meta Quest, VisionOS, Mobile AR), and AI framework.',
    deliverable: 'System Architecture Blueprint',
  },
  {
    num: '03',
    phase: 'UX/UI Design',
    title: 'Spatial UX & Ergonomic Prototype',
    desc: 'Design 3D spatial wireframes, controller haptics, gaze UI, and interactive 3D proof-of-concept for validation.',
    deliverable: 'Interactive 3D Prototype',
  },
  {
    num: '04',
    phase: 'Engineering',
    title: 'Agile Software Development',
    desc: 'Build high-performance 3D visual assets, physics engines, computer vision pipelines, and secure API integrations.',
    deliverable: 'Production Software Builds',
  },
  {
    num: '05',
    phase: 'Validation',
    title: 'Testing & Performance Tuning',
    desc: 'Rigorous testing for frame rates (90fps+ VR target), tracking latency, multi-user sync, and WCAG accessibility compliance.',
    deliverable: 'QA & Framerate Audit Report',
  },
  {
    num: '06',
    phase: 'Deployment',
    title: 'Deployment & Lifecycle Support',
    desc: 'Launch to enterprise MDMs, public app stores, or web servers with ongoing performance monitoring and feature updates.',
    deliverable: 'Live Production Release & SLA',
  },
];

// Why Points Data
const whyPoints = [
  {
    title: 'Immersive Expertise',
    desc: 'AR, VR, and WebAR are our core competencies, not afterthoughts. We possess specialized spatial computing mastery.',
  },
  {
    title: 'AI Integration',
    desc: 'We incorporate computer vision and artificial intelligence where it adds tangible user and operational value.',
  },
  {
    title: 'Business-Focused Development',
    desc: 'Our software engineering directly solves concrete enterprise KPIs, such as training speed, error reduction, and sales conversion.',
  },
  {
    title: 'Cross-Disciplinary Team',
    desc: 'Senior 3D artists, Unity/Unreal programmers, AI engineers, and spatial UX designers collaborate under one roof.',
  },
  {
    title: 'Flexible Engagement',
    desc: 'We support full end-to-end product builds, rapid proof-of-concepts, or specialized staff augmentation.',
  },
  {
    title: 'Scalable Architecture',
    desc: 'We architect spatial solutions built on clean codebases that seamlessly adapt to next-generation hardware.',
  },
];

// FAQ Items Data
const faqItems = [
  {
    q: 'What AR development services do you provide?',
    a: 'We build custom Augmented Reality applications ranging from mobile spatial apps (iOS ARKit, Android ARCore) to web-based WebAR solutions and industrial head-mounted display software. Services include 3D product visualization, interactive retail try-on, industrial maintenance overlays, and spatial marketing experiences.',
  },
  {
    q: 'What types of VR experiences can you build?',
    a: 'We specialize in high-fidelity Virtual Reality solutions for enterprise training, medical and surgical simulation, industrial safety, virtual real estate tours, and educational interactive classrooms. We build for standalone headsets like Meta Quest, HTC Vive, Pico, and Apple VisionOS.',
  },
  {
    q: 'What is WebAR and when should a business use it?',
    a: 'WebAR delivers augmented reality experiences directly through mobile web browsers (Safari, Chrome) using WebXR and WebGL, eliminating the requirement for users to download an app. It is ideal for e-commerce, marketing campaigns, event activation, and packaging engagement where friction-free access is vital.',
  },
  {
    q: 'Can you integrate AI into an existing application?',
    a: 'Yes. We integrate computer vision models, generative AI APIs, automated visual inspection tools, and intelligent conversational assistants into existing web, mobile, or enterprise desktop platforms.',
  },
  {
    q: 'What is an AI + XR solution?',
    a: 'AI + XR combines spatial computing with artificial intelligence. Examples include VR surgical training simulations with intelligent virtual avatars that adapt difficulty based on trainee performance, or AR maintenance guides that use computer vision to recognize physical machinery parts.',
  },
  {
    q: 'Which industries can benefit from AR and VR?',
    a: 'Healthcare (surgical training), Manufacturing (safety & equipment operations), Retail & E-commerce (3D try-ons), Real Estate (virtual spatial walkthroughs), Education (STEM virtual labs), and Tourism/Hospitality (interactive destination guides).',
  },
  {
    q: 'How does an AR or VR project begin?',
    a: 'Projects start with a discovery phase where we assess your business goals, target user devices, and technical requirements. We then define a clear architecture blueprint, 3D prototype timeline, and development scope.',
  },
  {
    q: 'How long does a custom immersive technology project take?',
    a: 'Timelines vary based on scope. A rapid WebAR campaign or proof-of-concept can take 3 to 6 weeks, while a comprehensive multi-user VR surgical training simulator or enterprise AI system typically takes 8 to 16 weeks.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. Innovify XR works with enterprise clients, startups, healthcare systems, and educational institutions globally, operating across North America, Europe, Asia, and the Middle East.',
  },
  {
    q: 'Can you integrate AR, VR, AI, and software into one project?',
    a: 'Absolutely. Many of our enterprise projects combine cross-platform software web portals, cloud AI microservices, and immersive VR/AR user interfaces into a unified digital ecosystem.',
  },
];
