import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Eye,
  Headphones,
  Globe,
  Cpu,
  Smartphone,
  Monitor,
  Gamepad2,
  Lock,
  Compass,
  Building2,
  GraduationCap,
  ShoppingBag,
  Factory,
  HeartPulse,
  ChevronDown,
  Layers,
  Target,
  Code2,
  Lightbulb,
  Check,
  Briefcase,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { FEATURED_CASE_STUDIES, PRIMARY_SOLUTIONS, SECONDARY_SOLUTIONS } from '../data';
import { CaseStudy, SolutionItem } from '../types';

interface AboutPageProps {
  onOpenIntake: (serviceName?: string) => void;
  onSelectProject: (project: CaseStudy) => void;
  onSelectSolution: (solution: SolutionItem) => void;
  onNavigateHome: (targetSection?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenIntake,
  onSelectProject,
  onSelectSolution,
  onNavigateHome,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Set document title and inject JSON-LD structured data for SEO
  useEffect(() => {
    document.title = 'About Innovify XR | AR, VR, WebAR & AI Technology Company';

    // Meta description update
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Learn about Innovify XR, a technology company creating AR, VR, WebAR and AI-powered experiences for businesses across industries.'
    );

    // JSON-LD Injection
    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://innovifyxr.com/#organization',
          name: 'Innovify XR',
          url: 'https://innovifyxr.com',
          logo: 'https://innovifyxr.com/logo.png',
          description:
            'Innovify XR is an international technology company creating AR, VR, WebAR, and AI-powered experiences for businesses across industries.',
          email: 'info.innovifyxr@gmail.com',
          founder: {
            '@type': 'Person',
            name: 'Abu Naser Maaz',
            jobTitle: 'Founder & CEO',
          },
          knowsAbout: [
            'Augmented Reality',
            'Virtual Reality',
            'WebAR',
            'Artificial Intelligence',
            'Spatial Computing',
            '3D Simulation',
          ],
        },
        {
          '@type': 'AboutPage',
          '@id': 'https://innovifyxr.com/about/#webpage',
          url: 'https://innovifyxr.com/about',
          name: 'About Innovify XR | AR, VR, WebAR & AI Technology Company',
          description:
            'Learn about Innovify XR, a technology company creating AR, VR, WebAR and AI-powered experiences for businesses across industries.',
          isPartOf: { '@id': 'https://innovifyxr.com/#website' },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://innovifyxr.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'About',
              item: 'https://innovifyxr.com/about',
            },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqItems.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.id = 'about-page-jsonld';
    scriptTag.text = JSON.stringify(schemaData);
    document.head.appendChild(scriptTag);

    return () => {
      const existingScript = document.getElementById('about-page-jsonld');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="pt-20 sm:pt-24 space-y-0">
      {/* ------------------------------------------------------------- */}
      {/* 02 — ABOUT HERO */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold uppercase tracking-widest shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>About Innovify XR</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 font-heading tracking-tight leading-[1.12]">
                Building the Future Through <span className="text-blue-600">AR, VR, WebAR & AI</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                Innovify XR creates immersive and intelligent digital experiences that help businesses train, visualize, engage, and transform the way they operate.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => onOpenIntake()}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-full transition-all shadow-sm hover:shadow-md hover:scale-[1.01]"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigateHome('#solutions')}
                  className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold uppercase tracking-wider text-xs px-7 py-4 rounded-full transition-all border border-slate-200/80"
                >
                  <span>Explore Our Solutions</span>
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </button>
              </div>

              {/* Factual Sub-Bar */}
              <div className="pt-6 border-t border-slate-150 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Domain Focus</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">Spatial & AI Tech</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Architecture</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">Custom & WebXR</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Governance</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">Enterprise NDA</div>
                </div>
              </div>
            </div>

            {/* Right Column: High Quality Immersive Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80"
                  alt="Innovify XR Spatial Computing, VR Headset and AI Visualization"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  width="1200"
                  height="800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Visual Badge overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg text-slate-900 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                    <Sparkles className="w-4 h-4" />
                    <span>Human + Technology Integration</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Combining spatial immersive environments (AR/VR/WebAR) with advanced artificial intelligence pipelines for real-world enterprise impact.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 03 — WHO WE ARE */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center sm:text-left">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
              Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
              Who We Are
            </h2>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 text-base sm:text-lg leading-relaxed space-y-6">
            <p>
              Innovify XR is an immersive technology and digital solutions company focused on helping organizations turn complex ideas into practical, high-value digital experiences.
            </p>
            <p>
              Our core engineering and creative expertise spans augmented reality (AR), virtual reality (VR), WebAR, artificial intelligence (AI), and spatial computing. Complementing our spatial focus, we also deliver scalable mobile application, web, game, and blockchain software architectures.
            </p>
            <p>
              We collaborate closely with business stakeholders, product leads, and innovation directors to explore opportunities, design intuitive spatial user experiences, engineer robust software architectures, and safely bring digital products into active real-world operations.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 04 & 05 — MISSION & VISION */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-slate-50/80 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
                  Our Purpose
                </span>
                <h3 className="text-2xl font-bold text-slate-950 font-heading">
                  Our Mission
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                  To make advanced technology practical, accessible, and valuable for businesses by transforming complex ideas into meaningful digital experiences.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Practical Innovation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Measurable Impact</span>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
                  Future Horizon
                </span>
                <h3 className="text-2xl font-bold text-slate-950 font-heading">
                  Our Vision
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                  To become a globally recognized technology partner for immersive and intelligent digital experiences.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Spatial Computing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Intelligent Systems</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 06 — WHAT WE BELIEVE (Principles) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
              Core Philosophies
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading">
              What We Believe
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Six foundational principles that guide our technical design, engineering decisions, and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3 hover:bg-white hover:border-blue-500 transition-all duration-200 shadow-2xs group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono text-blue-600 uppercase tracking-widest">
                    Principle 0{idx + 1}
                  </span>
                  <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-950 font-heading leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 07 — OUR EXPERTISE */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-slate-50/80 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
              Engineering Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading">
              Our Technology Expertise
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Primary specialization in spatial computing and AI, complemented by full-stack digital capabilities.
            </p>
          </div>

          {/* Primary Capabilities (High Visual Weight) */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
              Primary Capabilities (Core Focus)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRIMARY_SOLUTIONS.map((sol) => (
                <div
                  key={sol.id}
                  className="p-7 rounded-xl bg-white border border-slate-200 space-y-4 flex flex-col justify-between hover:border-blue-600 transition-all shadow-2xs group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100">
                        {sol.badge}
                      </span>
                      <div className="p-2 rounded-lg bg-slate-50 text-blue-600 border border-slate-200">
                        {renderIcon(sol.iconName)}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-slate-950 font-heading">
                      {sol.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {sol.shortDesc}
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectSolution(sol)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors pt-3 border-t border-slate-100"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Capabilities (Subtle Pill Style) */}
          <div className="pt-6 border-t border-slate-200 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
              Complementary Software Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SECONDARY_SOLUTIONS.map((sec) => (
                <div
                  key={sec.id}
                  className="p-5 rounded-lg bg-white border border-slate-200 space-y-2 hover:border-slate-300 transition-all"
                >
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <div className="p-1.5 rounded bg-slate-100 text-slate-700">
                      {renderIcon(sec.iconName)}
                    </div>
                    <span>{sec.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {sec.shortDesc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 08 — INDUSTRIES WE WORK WITH */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
              Sector Applications
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading">
              Technology for Real-World Industries
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Custom immersive and intelligent applications engineered for specific industry workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryCards.map((ind) => (
              <div
                key={ind.id}
                className="group rounded-xl bg-slate-50 border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:border-blue-600 hover:bg-white transition-all duration-300 hover:shadow-xs"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100 border-b border-slate-200">
                    <img
                      src={ind.imageUrl}
                      alt={ind.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-blue-600 border border-slate-200 shadow-2xs flex items-center gap-1.5">
                      {ind.icon}
                      <span>{ind.title}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-slate-950 font-heading">
                      {ind.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {ind.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenIntake(`${ind.title} Solution`)}
                    className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors pt-3 border-t border-slate-200"
                  >
                    <span>Request Industry Spec</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 09 — OUR APPROACH (Timeline Process) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-slate-50/80 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading">
              How We Approach Every Project
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              A disciplined, six-stage engineering lifecycle designed to ensure technical precision and business alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approachSteps.map((step) => (
              <div
                key={step.number}
                className="p-7 rounded-xl bg-white border border-slate-200 space-y-4 hover:border-blue-500 transition-all shadow-2xs"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-2xl font-black font-mono text-blue-600">
                    {step.number}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                    Phase {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-950 font-heading">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 10 & 11 — TEAM & LEADERSHIP */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
              Team & Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading">
              The People Behind Innovify XR
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Engineers, 3D artists, product directors, and business specialists building spatial computing solutions.
            </p>
          </div>

          {/* Prominent Leadership Feature: Abu Naser Maaz */}
          <div className="p-8 sm:p-12 rounded-xl bg-slate-50 border border-slate-200 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-2xs">
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-slate-200 border-2 border-blue-600 flex items-center justify-center text-slate-400 shadow-inner mb-4">
                <Users className="w-14 h-14 text-slate-500" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-950 font-heading">Abu Naser Maaz</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono mt-1">Founder & CEO</p>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <span>Executive Background</span>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Abu Naser Maaz leads Innovify XR with a background in Software Quality Assurance (SQA) Engineering, Project Management, Product Management, and technology business development.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['SQA Engineering', 'Project Management', 'Product Management', 'Tech Business Development'].map((spec, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Team Grid */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                Core Engineering & Creative Team
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamList.map((member, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 hover:border-blue-500 transition-all text-center shadow-2xs"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 mx-auto">
                    <Users className="w-8 h-8 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-950 font-heading">
                      {member.name}
                    </h4>
                    <p className="text-xs font-semibold text-blue-600 mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 12 — OUR PROJECT EXPERIENCE */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-slate-50/80 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
              Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading">
              Turning Ideas Into Experiences
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Featured spatial computing projects engineered for medical, retail, and manufacturing partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_CASE_STUDIES.map((project) => (
              <div
                key={project.id}
                className="group rounded-xl bg-white border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-blue-600 transition-all duration-300 shadow-2xs"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100 border-b border-slate-200">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-blue-600 border border-slate-200 shadow-2xs">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-slate-950 font-heading leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors pt-3 border-t border-slate-100"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 13 — TECHNOLOGY ECOSYSTEM */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
              Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading">
              Built With Modern Technology
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Engineered using industry-standard game engines, web specifications, and artificial intelligence frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* XR Stack */}
            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider font-mono">
                <Globe className="w-4 h-4" />
                <span>XR & Spatial Engines</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Unity 3D', 'Unreal Engine 5', 'ARKit', 'ARCore', 'WebXR API', 'Three.js', 'WebGL'].map((item, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Stack */}
            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider font-mono">
                <Cpu className="w-4 h-4" />
                <span>AI & Computer Vision</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Machine Learning', 'Computer Vision', 'Generative AI APIs', 'Custom Models'].map((item, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Web & Mobile Stack */}
            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider font-mono">
                <Code2 className="w-4 h-4" />
                <span>Web & App Architecture</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'C#', 'C++', 'GraphQL / REST APIs'].map((item, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 14 — WHAT MAKES US DIFFERENT */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-slate-50/80 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
              Key Differentiators
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading">
              Why Work With Innovify XR?
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Six core advantages that distinguish our client partnerships and technical deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, idx) => (
              <div
                key={idx}
                className="p-7 rounded-xl bg-white border border-slate-200 space-y-3 hover:border-blue-500 transition-all shadow-2xs"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 font-heading">
                  {diff.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 15 — FAQ */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading">
              About Innovify XR — FAQ
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Frequently asked questions regarding our company, capabilities, process, and engagement models.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden transition-all duration-200 hover:border-blue-400"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-950 font-heading">
                      {faq.question}
                    </span>
                    <div
                      className={`p-2 rounded-lg bg-white text-blue-600 transition-transform duration-200 shrink-0 border border-slate-200 ${
                        isOpen ? 'rotate-180 bg-blue-600 text-white border-blue-600' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/80 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 16 — FINAL CTA */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-slate-50/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-14 lg:p-16 rounded-xl bg-white border border-slate-200 text-center space-y-8 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-blue-600" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Initiate Collaboration</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading leading-tight max-w-3xl mx-auto">
              Let's Build Something Meaningful
            </h2>

            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Have an idea, business challenge, or immersive experience in mind? Let's explore what technology can do for it.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenIntake()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-full transition-all shadow-xs hover:shadow-md hover:scale-[1.01]"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigateHome('#solutions')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold uppercase tracking-wider text-xs px-7 py-4 rounded-full transition-all"
              >
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span>Explore Our Solutions</span>
              </button>
            </div>

            <div className="pt-6 border-t border-slate-150 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Free Technical Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>Mutual NDA Protected Inquiry</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helpers & Data Sets for About Page

function renderIcon(name: string) {
  switch (name) {
    case 'Eye': return <Eye className="w-5 h-5" />;
    case 'Headphones': return <Headphones className="w-5 h-5" />;
    case 'Globe': return <Globe className="w-5 h-5" />;
    case 'Cpu': return <Cpu className="w-5 h-5" />;
    case 'Sparkles': return <Sparkles className="w-5 h-5" />;
    case 'Smartphone': return <Smartphone className="w-5 h-5" />;
    case 'Monitor': return <Monitor className="w-5 h-5" />;
    case 'Gamepad2': return <Gamepad2 className="w-5 h-5" />;
    default: return <Sparkles className="w-5 h-5" />;
  }
}

const principles = [
  {
    title: 'Technology Should Solve Real Problems',
    description: 'Technology should have a clear purpose and measurable business value.',
    icon: <Target className="w-5 h-5" />
  },
  {
    title: 'Experiences Matter',
    description: 'The best digital products are intuitive, useful, and memorable.',
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    title: 'Innovation Needs Execution',
    description: 'Good ideas only create value when they are successfully designed, built, and deployed.',
    icon: <Code2 className="w-5 h-5" />
  },
  {
    title: 'AI Should Be Practical',
    description: 'AI should be applied where it improves efficiency, intelligence, personalization, or decision-making.',
    icon: <Cpu className="w-5 h-5" />
  },
  {
    title: 'Collaboration Creates Better Products',
    description: 'Strong communication between clients, designers, engineers, and stakeholders leads to better outcomes.',
    icon: <Users className="w-5 h-5" />
  },
  {
    title: 'Build for the Future',
    description: 'Solutions should be designed with scalability, adaptability, and evolving technology in mind.',
    icon: <Globe className="w-5 h-5" />
  }
];

const industryCards = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Immersive training, visualization, education, and digital experiences for healthcare organizations.',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    icon: <HeartPulse className="w-4 h-4" />
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Safety simulation, equipment operation guidance, machine maintenance overlays, and assembly training.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    icon: <Factory className="w-4 h-4" />
  },
  {
    id: 'retail',
    title: 'Retail & E-commerce',
    description: 'WebAR try-on, 3D product visualizers, interactive packaging, and spatial commerce experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    icon: <ShoppingBag className="w-4 h-4" />
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Interactive STEM simulations, virtual science laboratories, and immersive learning platforms.',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    icon: <GraduationCap className="w-4 h-4" />
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Spatial architectural walkthroughs, WebAR property staging, and interactive masterplan visualization.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    icon: <Building2 className="w-4 h-4" />
  },
  {
    id: 'tourism',
    title: 'Tourism & Hospitality',
    description: 'Virtual destination previews, landmark AR overlays, and spatial resort interactive guides.',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    icon: <Compass className="w-4 h-4" />
  }
];

const approachSteps = [
  {
    number: '01',
    title: 'Understand',
    description: 'We begin by understanding the business problem, audience, objectives, and technical requirements.'
  },
  {
    number: '02',
    title: 'Explore',
    description: 'We evaluate possible technologies and identify the most appropriate solution.'
  },
  {
    number: '03',
    title: 'Design',
    description: 'We create the experience, user flows, interface, and prototype.'
  },
  {
    number: '04',
    title: 'Build',
    description: 'Our team develops and integrates the required technology.'
  },
  {
    number: '05',
    title: 'Validate',
    description: 'We test usability, performance, compatibility, and technical requirements.'
  },
  {
    number: '06',
    title: 'Deliver',
    description: 'We deploy the solution and support future improvements where required.'
  }
];

const teamList = [
  { name: 'Abu Bakar Saad', role: 'Co-Founder / Senior 3D Artist' },
  { name: 'Muneeb Ahmad', role: 'CTO & MERN Stack Developer' },
  { name: 'Shoaib Ali', role: 'Senior Blockchain & Three.js Developer' },
  { name: 'Mahnoor', role: 'Senior Software Engineer' },
  { name: 'Muhammad Waqas', role: 'Senior Python Developer' },
  { name: 'Muhammad Zubair', role: 'Project Manager' },
  { name: 'Muhammad Junaid Ali', role: 'Senior Business Developer' },
  { name: 'Shanza Shabbir', role: 'HR Manager' }
];

const differentiators = [
  {
    title: 'Immersive Technology Focus',
    description: 'AR, VR, and WebAR are central to our capabilities.'
  },
  {
    title: 'AI-Ready Thinking',
    description: 'We identify practical opportunities to integrate AI into digital products.'
  },
  {
    title: 'Business-Oriented Development',
    description: 'Technology decisions are connected to real business objectives.'
  },
  {
    title: 'Cross-Disciplinary Expertise',
    description: 'Design, development, 3D, AI, and immersive technologies can come together under one project.'
  },
  {
    title: 'Flexible Collaboration',
    description: 'Work with us from early concept development through implementation.'
  },
  {
    title: 'Future-Focused',
    description: 'Build solutions that can evolve as technology and business requirements change.'
  }
];

const faqItems = [
  {
    id: 'faq-1',
    question: 'What does Innovify XR specialize in?',
    answer: 'Innovify XR specializes in augmented reality (AR), virtual reality (VR), WebAR, artificial intelligence (AI), and spatial computing solutions for enterprise training, visualization, and digital transformation. We also offer mobile app, web, game, and blockchain development services.'
  },
  {
    id: 'faq-2',
    question: 'What industries does Innovify XR work with?',
    answer: 'We work across healthcare, manufacturing, retail & e-commerce, education, real estate, and tourism & hospitality, delivering tailored immersive and intelligent digital systems.'
  },
  {
    id: 'faq-3',
    question: 'Do you develop custom AR and VR solutions?',
    answer: 'Yes. All of our AR and VR applications are custom-engineered to meet specific enterprise requirements, user workflows, and technical environments.'
  },
  {
    id: 'faq-4',
    question: 'Do you provide WebAR development?',
    answer: 'Yes, we build frictionless WebAR experiences using WebXR, WebGL, and Three.js that run directly in mobile and desktop web browsers without requiring users to download an app.'
  },
  {
    id: 'faq-5',
    question: 'Can Innovify XR integrate AI into existing products?',
    answer: 'Absolutely. We integrate computer vision, machine learning models, generative AI pipelines, and intelligent spatial assistants into both existing enterprise software and new XR applications.'
  },
  {
    id: 'faq-6',
    question: 'Can you work with international clients?',
    answer: 'Yes. Innovify XR works with clients globally, maintaining robust communication channels, remote project management, and mutual NDA compliance.'
  },
  {
    id: 'faq-7',
    question: 'What happens when we contact Innovify XR?',
    answer: 'Upon initial contact, our technical leads schedule a discovery consultation to discuss your project scope, technical feasibility, timeline, and strategic goals.'
  },
  {
    id: 'faq-8',
    question: 'How do we start a project?',
    answer: 'You can click "Start Your Project" on our website or email info.innovifyxr@gmail.com to submit an inquiry. We will guide you through discovery, scoping, and milestone planning.'
  }
];
