import React, { useEffect, useState } from 'react';
import {
  HeartPulse,
  Factory,
  ShoppingBag,
  GraduationCap,
  Building2,
  Plane,
  Eye,
  Headphones,
  Globe,
  Cpu,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Layers,
  ShieldCheck,
  Target,
  Users,
  BarChart3,
  Sparkle,
  X,
  FileCode,
  Wrench,
  Bot,
  Zap,
  HelpCircle,
  Check
} from 'lucide-react';
import { CaseStudy } from '../types';
import { FEATURED_CASE_STUDIES } from '../data';

interface IndustriesPageProps {
  onOpenIntake: (serviceName?: string) => void;
  onSelectProject: (project: CaseStudy) => void;
  onNavigate: (view: 'home' | 'about' | 'solutions' | 'industries', targetSection?: string) => void;
  initialIndustryId?: string;
}

interface IndustryDetail {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  imageUrl: string;
  icon: React.ReactNode;
  badge: string;
  techs: string[];
  applications: string[];
  challengeSolved: string;
  featuredCaseStudyId?: string;
  featuredCaseStudyTitle?: string;
  disclaimer?: string;
  route: string;
}

const INDUSTRIES_DATA: IndustryDetail[] = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    shortDesc: 'Create immersive training, visualization, education, and digital experiences for healthcare organizations.',
    longDesc: 'Innovify XR partners with medical institutions, teaching hospitals, and medical device manufacturers to build high-precision VR surgical simulations, anatomical visualization tools, and patient educational experiences. Our solutions allow practitioners to practice high-stakes procedures repeatedly in zero-risk virtual environments.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    icon: <HeartPulse className="w-6 h-6 text-blue-600" />,
    badge: 'Medical VR & Simulation',
    techs: ['VR Simulation', 'Haptic Feedback', 'AI Spatial Analytics', 'WebXR Anatomy'],
    applications: [
      'VR medical training',
      'Surgical education',
      'Emergency response simulation',
      'Patient education',
      'AR-assisted learning',
      'Healthcare visualization'
    ],
    challengeSolved: 'Eliminates procedural risk and OR scheduling bottlenecks by enabling surgeons and clinical trainees to master complex procedures in immersive 3D physics-based simulations.',
    featuredCaseStudyId: 'vr-orthopaedic-trauma-training',
    featuredCaseStudyTitle: 'VR Orthopaedic Trauma Training Experience',
    disclaimer: 'Note: Innovify XR software simulations are designed for educational and skill-enhancement purposes. They do not replace certified clinical judgment or formal regulatory-approved medical device instructions.',
    route: '/industries/healthcare'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    shortDesc: 'Use immersive technology to create safer, more engaging, and controlled training and visualization experiences.',
    longDesc: 'We build VR safety simulations, WebAR assembly guides, and AI-assisted maintenance overlays for manufacturing plants and industrial equipment makers. Trainees gain sub-millimeter motor skill precision before operating expensive machinery or stepping onto hazardous factory floors.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    icon: <Factory className="w-6 h-6 text-blue-600" />,
    badge: 'Industrial VR & Safety',
    techs: ['Industrial VR', 'AR Assembly Guides', 'Digital Twin Visualizer', 'Sub-mm Tracking'],
    applications: [
      'VR safety training',
      'Welding training',
      'Equipment training',
      'Maintenance simulation',
      'Factory visualization',
      'Employee onboarding'
    ],
    challengeSolved: 'Cuts consumable material costs, eliminates physical hazard exposure during onboarding, and speeds up complex equipment mastery through muscle-memory simulation.',
    featuredCaseStudyId: 'vr-welding-training-experience',
    featuredCaseStudyTitle: 'VR Welding Training Experience',
    route: '/industries/manufacturing'
  },
  {
    id: 'retail',
    title: 'Retail & E-commerce',
    shortDesc: 'Create interactive product experiences that help customers visualize, explore, and engage with products digitally.',
    longDesc: 'Empower shoppers to preview products inside their real homes or try on fashion items virtually via instant WebAR and spatial mobile apps. By blending photorealistic 3D rendering with real-time room surface tracking, we help e-commerce brands convert hesitant visitors into confident buyers.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    icon: <ShoppingBag className="w-6 h-6 text-blue-600" />,
    badge: 'WebAR & Product 3D',
    techs: ['WebAR Frictionless', '3D Product Configurator', 'Virtual Try-On', 'PBR Shaders'],
    applications: [
      'AR product visualization',
      'AR furniture placement',
      'Virtual try-on',
      'WebAR product experiences',
      'Interactive product campaigns',
      'Immersive commerce'
    ],
    challengeSolved: 'Bridges the physical-digital gap, increasing online conversion rates and reducing product returns caused by sizing or style uncertainty.',
    featuredCaseStudyId: 'ar-furniture-items-showcase',
    featuredCaseStudyTitle: 'AR Furniture Items Showcase',
    route: '/industries/retail'
  },
  {
    id: 'education',
    title: 'Education',
    shortDesc: 'Make complex subjects more interactive through immersive learning, simulation, and digital experiences.',
    longDesc: 'Transform abstract concepts in STEM, history, medicine, and engineering into interactive spatial environments. Educational institutions use our WebAR and VR classroom platforms to allow students to manipulate molecules, tour historical landmarks, and perform chemistry experiments safely.',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
    badge: 'Interactive STEM & Labs',
    techs: ['Interactive VR Labs', 'Multi-user Classroom', '3D STEM Models', 'Cross-platform WebXR'],
    applications: [
      'VR learning',
      'Interactive education',
      'Virtual laboratories',
      'Skills training',
      'Simulations',
      '3D learning experiences'
    ],
    challengeSolved: 'Increases student engagement and concept retention by replacing passive lectures with hands-on, multi-sensory 3D exploration.',
    route: '/industries/education'
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    shortDesc: 'Help customers and stakeholders experience properties and spaces through immersive visualization and interactive digital experiences.',
    longDesc: 'Enable buyers and commercial tenants to walk through unbuilt developments, customize architectural finishes in real time, and explore properties remotely. Innovify XR delivers photorealistic 1:1 scale VR tours, interactive master plans, and spatial WebAR property staging.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    icon: <Building2 className="w-6 h-6 text-blue-600" />,
    badge: 'Architectural VR & WebAR',
    techs: ['Architectural Walkthroughs', 'WebAR Room Staging', '3D Configurator', 'Interactive Masterplans'],
    applications: [
      'Virtual property tours',
      'AR furniture visualization',
      '3D property experiences',
      'Interactive property showcases',
      'Architectural visualization',
      'Virtual staging'
    ],
    challengeSolved: 'Accelerates pre-construction sales and lease signings by allowing global buyers to feel present inside unbuilt spaces prior to ground-breaking.',
    route: '/industries/real-estate'
  },
  {
    id: 'tourism',
    title: 'Tourism & Hospitality',
    shortDesc: 'Create immersive experiences that help travelers discover destinations, properties, and experiences before they arrive.',
    longDesc: 'Transport travelers into luxury resort suites, historical heritage sites, and cultural landmarks before booking. Hotels, tourism boards, and event venues use our spatial WebAR and VR preview engines to showcase destinations, historical overlays, and interactive guest guides.',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    icon: <Plane className="w-6 h-6 text-blue-600" />,
    badge: 'Virtual Tours & Destinations',
    techs: ['360° Spatial VR', 'AR Destination Guides', 'WebAR Hotel Preview', 'Cultural Overlays'],
    applications: [
      'Virtual tours',
      'AR destination experiences',
      'Hotel visualization',
      'Interactive maps',
      'Immersive marketing',
      'Guest experiences'
    ],
    challengeSolved: 'Drives direct booking confidence and engagement by offering interactive, room-scale previews of hotel suites and travel itineraries.',
    route: '/industries/tourism'
  }
];

const MATRIX_DATA = [
  {
    industry: 'Healthcare',
    ar: 'Medical overlay & anatomical guide',
    vr: 'Full surgical & trauma simulation',
    webar: 'Browser 3D patient education',
    ai: 'AI diagnostic & procedure feedback',
    aiXr: 'Self-adapting surgical avatar coach'
  },
  {
    industry: 'Manufacturing',
    ar: 'Hands-free repair & assembly HUD',
    vr: 'Hazardous welding & plant safety',
    webar: 'QR code machine manual 3D',
    ai: 'Computer vision defect detection',
    aiXr: 'Real-time guided maintenance overlay'
  },
  {
    industry: 'Retail & E-commerce',
    ar: 'Spatial true-to-scale room preview',
    vr: 'Virtual interactive flagship store',
    webar: 'Zero-download AR try-on link',
    ai: 'Personalized product recommendation',
    aiXr: 'AI conversational shopping avatar'
  },
  {
    industry: 'Education',
    ar: 'Interactive 3D textbook models',
    vr: 'Virtual physics & chemistry lab',
    webar: 'Instant browser STEM visualizer',
    ai: 'Automated student learning analytics',
    aiXr: 'Intelligent spatial tutor companion'
  },
  {
    industry: 'Real Estate',
    ar: 'On-site unbuilt structure projection',
    vr: 'Photorealistic architectural tour',
    webar: 'Web spatial floor plan visualizer',
    ai: 'Smart property valuation insights',
    aiXr: 'Interactive AI interior designer'
  },
  {
    industry: 'Tourism & Hospitality',
    ar: 'Historical landmark AR overlays',
    vr: 'Immersive resort & destination preview',
    webar: 'QR amenity spatial explorer',
    ai: 'Automated itinerary personalization',
    aiXr: 'Multilingual AI concierge avatar'
  }
];

const BUSINESS_CHALLENGES = [
  {
    id: 'training',
    title: 'Training & Skills Development',
    subtitle: 'Simulate high-risk, expensive, or rare procedures in zero-risk virtual environments.',
    description: 'Traditional onboarding and technical training often carry physical safety risks, consumable costs, or OR/factory floor scheduling conflicts. VR and WebXR simulations allow employees to repeat procedures until muscle memory is perfected.',
    metrics: ['Zero physical hazard exposure', '3x faster learning cycles', 'Reduced consumable materials'],
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'visualization',
    title: 'Product & Spatial Visualization',
    subtitle: 'Experience physical products, unbuilt real estate, or complex machinery prior to production.',
    description: 'Bring CAD models and architectural blueprints to life at 1:1 photorealistic scale. Stakeholders, buyers, and engineers can walk through designs, test ergonomics, and validate dimensions before physical prototyping.',
    metrics: ['Sub-millimeter spatial accuracy', 'Reduced pre-production revisions', 'Global remote review'],
    icon: <Eye className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'engagement',
    title: 'Customer Engagement & E-Commerce',
    subtitle: 'Eliminate shopper hesitation with frictionless WebAR product placement and try-ons.',
    description: 'Allow customers to project furniture into their living room or test products visually in real time. WebAR requires zero app installation, boosting campaign reach and conversion confidence.',
    metrics: ['Instant WebXR activation', '+35% cart conversion boost', 'Reduced return rates'],
    icon: <ShoppingBag className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'complex-info',
    title: 'Communicating Complex Information',
    subtitle: 'Turn dense technical manuals and spatial concepts into intuitive 3D interactions.',
    description: 'Complex anatomical structures, industrial engine assemblies, and multi-layered architectural blueprints are difficult to understand on flat screens. Immersive spatial graphics make data clear.',
    metrics: ['Multi-layer exploded views', 'Intuitive gesture controls', 'Higher concept retention'],
    icon: <Layers className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'transformation',
    title: 'Digital Transformation & AI Workflows',
    subtitle: 'Combine Spatial Computing, Computer Vision, and AI APIs into unified business workflows.',
    description: 'Transform field inspection, maintenance guidance, and automated quality control by uniting computer vision overlays with predictive cloud AI models.',
    metrics: ['Automated visual check', 'Hands-free HUD operation', 'Cloud AI integration'],
    icon: <Cpu className="w-6 h-6 text-blue-600" />
  }
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understand the Industry',
    description: 'We audit your operating environment, user skill profiles, physical constraints, and core business metrics to define target outcomes.'
  },
  {
    step: '02',
    title: 'Identify the Opportunity',
    description: 'We select the optimal medium (AR, VR, WebAR, AI, or AI + XR) based on accessibility, hardware deployment, and ROI targets.'
  },
  {
    step: '03',
    title: 'Design the Experience',
    description: 'Our UX designers craft spatial interaction flows, ergonomic UI, 3D asset pipelines, and high-fidelity wireframes.'
  },
  {
    step: '04',
    title: 'Develop the Solution',
    description: 'Our engineers build robust software in Unity, Unreal Engine 5, or WebGL, integrating custom C# shaders, computer vision, and AI models.'
  },
  {
    step: '05',
    title: 'Test in Context',
    description: 'We perform rigorous testing across target headsets, iOS/Android mobile devices, and desktop browsers for performance and usability.'
  },
  {
    step: '06',
    title: 'Deploy & Improve',
    description: 'We deploy enterprise builds, assist with hardware rollouts, measure usage telemetry, and continuously optimize.'
  }
];

const FAQ_ITEMS = [
  {
    q: 'Which industries can benefit from AR and VR?',
    a: 'Organizations across healthcare, manufacturing, retail, e-commerce, education, real estate, and tourism gain significant efficiency by adopting immersive technologies for training, visualization, sales, and spatial workflows.'
  },
  {
    q: 'How is VR used for employee training?',
    a: 'VR creates realistic, interactive 3D simulations of work environments—such as surgical operating rooms, hazardous factory floors, or high-altitude maintenance towers. Trainees practice hands-on procedures safely without consuming physical materials or risking injury.'
  },
  {
    q: 'How can AR help retail and e-commerce?',
    a: 'AR allows shoppers to place true-to-scale, photorealistic 3D models of products (like furniture, appliances, or decor) into their physical environment using their smartphone, significantly increasing purchasing confidence and reducing product return rates.'
  },
  {
    q: 'Can WebAR be used without a mobile app?',
    a: 'Yes. WebAR runs directly inside standard web browsers (Safari, Chrome, Edge) using WebXR and WebGL. Users simply tap a web link or scan a QR code to experience augmented reality immediately without downloading an application.'
  },
  {
    q: 'How can AI be combined with AR and VR?',
    a: 'AI enhances XR by powering intelligent 3D virtual avatars, computer vision object recognition, real-time spatial analytics, and adaptive learning engines that customize training difficulty based on user performance.'
  },
  {
    q: 'Can you build customized industry solutions?',
    a: 'Yes. Innovify XR builds tailored spatial software engineered specifically for your company’s workflows, operating procedures, 3D assets, and backend IT systems.'
  },
  {
    q: 'Can Innovify XR work with international companies?',
    a: 'Yes. Innovify XR delivers enterprise solutions globally for clients across North America, Europe, Asia-Pacific, and the Middle East, supporting multi-language deployments and remote cloud sync.'
  },
  {
    q: 'How do we determine which technology is right for our business?',
    a: 'During our discovery consultation, we analyze your primary goal, target audience, hardware constraints, and budget to recommend whether AR, VR, WebAR, or AI is the best fit.'
  },
  {
    q: 'Can you integrate immersive technology into an existing product?',
    a: 'Yes. We can integrate WebAR viewers into existing e-commerce platforms (Shopify, Magento, Custom React), embedding spatial features directly into your existing digital ecosystem.'
  },
  {
    q: 'How do we start an industry-specific project?',
    a: 'Click "Start Your Project" or contact our team. We will schedule a strategic discovery call to outline scope, feasibility, hardware recommendations, and timeline.'
  }
];

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onOpenIntake,
  onSelectProject,
  onNavigate,
  initialIndustryId
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryDetail>(
    () => {
      if (initialIndustryId) {
        const found = INDUSTRIES_DATA.find((i) => i.id === initialIndustryId);
        if (found) return found;
      }
      return INDUSTRIES_DATA[0];
    }
  );

  const [activeMatrixIndustry, setActiveMatrixIndustry] = useState<string>('Healthcare');
  const [activeChallengeId, setActiveChallengeId] = useState<string>('training');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [detailModalIndustry, setDetailModalIndustry] = useState<IndustryDetail | null>(null);

  useEffect(() => {
    // Set document title
    document.title = 'Industries We Serve | AR, VR, WebAR & AI Solutions | Innovify XR';

    // Scroll top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Inject JSON-LD
    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://innovifyxr.com/#organization',
          name: 'Innovify XR',
          url: 'https://innovifyxr.com',
          logo: 'https://innovifyxr.com/logo.png',
          description: 'Enterprise AR, VR, WebAR and AI Technology Company'
        },
        {
          '@type': 'WebPage',
          '@id': 'https://innovifyxr.com/industries/#webpage',
          url: 'https://innovifyxr.com/industries',
          name: 'Industries We Serve | AR, VR, WebAR & AI Solutions | Innovify XR',
          description:
            'Explore how Innovify XR applies AR, VR, WebAR and AI to healthcare, manufacturing, retail, education, real estate and tourism.',
          isPartOf: { '@id': 'https://innovifyxr.com/#website' },
          breadcrumb: { '@id': 'https://innovifyxr.com/industries/#breadcrumb' }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://innovifyxr.com/industries/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://innovifyxr.com'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Industries',
              item: 'https://innovifyxr.com/industries'
            }
          ]
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://innovifyxr.com/industries/#faq',
          mainEntity: FAQ_ITEMS.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.a
            }
          }))
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'jsonld-industries';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('jsonld-industries');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const handleIndustrySelect = (ind: IndustryDetail) => {
    setSelectedIndustry(ind);
  };

  const openDetailModal = (ind: IndustryDetail) => {
    setDetailModalIndustry(ind);
  };

  return (
    <div className="pt-20 bg-white text-slate-900 min-h-screen">
      
      {/* 02 — HERO SECTION */}
      <section className="relative bg-slate-900 text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Subtle Background Glow Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900 to-slate-950 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Industry Transformation Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
              Immersive Technology for Real-World Industries
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Innovify XR helps organizations use AR, VR, WebAR and AI to create better training, visualization, customer experiences, education, and digital workflows.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#featured-industries"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-lg hover:shadow-blue-500/20"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenIntake()}
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all"
              >
                <Sparkle className="w-3.5 h-3.5 text-blue-400" />
                <span>Start Your Project</span>
              </button>
            </div>
          </div>

          {/* Interactive Hero Showcase Visual Collage */}
          <div className="mt-12 lg:mt-16 pt-8 border-t border-slate-800/80">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Select an Industry to Explore Capability Preview:</span>
            </div>

            {/* Industry Selector Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {INDUSTRIES_DATA.map((ind) => {
                const isSelected = selectedIndustry.id === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => handleIndustrySelect(ind)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-400/30'
                        : 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border border-slate-700/60'
                    }`}
                  >
                    <span className={isSelected ? 'text-white' : 'text-blue-400'}>
                      {ind.icon}
                    </span>
                    <span>{ind.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Industry Showcase Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 lg:p-8 backdrop-blur-md">
              <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 rounded-md bg-blue-500/20 text-blue-300 text-[11px] font-mono uppercase tracking-wider mb-3">
                    {selectedIndustry.badge}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedIndustry.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {selectedIndustry.shortDesc}
                  </p>

                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                      Key Business Applications:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-200">
                      {selectedIndustry.applications.slice(0, 4).map((app, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center gap-3">
                  <button
                    onClick={() => openDetailModal(selectedIndustry)}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 hover:text-blue-300"
                  >
                    <span>View Full {selectedIndustry.title} Overview</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 relative group overflow-hidden rounded-xl border border-slate-700 bg-slate-950 aspect-video lg:aspect-auto min-h-[260px]">
                <img
                  src={selectedIndustry.imageUrl}
                  alt={`${selectedIndustry.title} Spatial Solution`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="bg-slate-900/90 backdrop-blur-md border border-slate-700 px-3 py-1.5 rounded-lg font-mono text-[11px] text-blue-300">
                    Target Tech: {selectedIndustry.techs.join(' • ')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — INDUSTRY INTRODUCTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">
              Editorial Perspective
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Technology Becomes More Valuable When It Solves a Real Problem
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Immersive technologies and artificial intelligence are not valuable simply because they are new. Their true enterprise value comes from how effectively they solve practical operational challenges across learning, visual communication, and spatial workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold font-mono text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">Train People Safely</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Allow trainees to practice hands-on procedures in high-fidelity 3D simulations repeatedly without physical hazards or hardware wear.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold font-mono text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">Visualize Products & Spaces</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Inspect 1:1 scale unbuilt real estate, industrial machinery, or custom retail goods before physical fabrication or construction begins.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold font-mono text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">Improve Customer Experiences</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Provide instant WebAR room try-on and interactive 3D product showcases that build customer confidence and drive online sales.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold font-mono text-sm">
                04
              </div>
              <h3 className="font-bold text-slate-900 text-base">Communicate Complex Data</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Replace dense technical manuals and 2D blueprints with intuitive 3D spatial graphics that teams and stakeholders understand immediately.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold font-mono text-sm">
                05
              </div>
              <h3 className="font-bold text-slate-900 text-base">Simulate Environments</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Recreate operating rooms, industrial welding bays, chemical labs, and hotel suites with full spatial audio and realistic physics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold font-mono text-sm">
                06
              </div>
              <h3 className="font-bold text-slate-900 text-base">Create Digital Workflows</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Unite computer vision, AI language models, and spatial HUD overlays to guide field operators step-by-step in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — FEATURED INDUSTRIES */}
      <section id="featured-industries" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">
              Core Sectors
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Industries We Help Transform
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore how Innovify XR applies Augmented Reality, Virtual Reality, WebAR, and AI across six primary enterprise sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_DATA.map((ind) => (
              <div
                key={ind.id}
                className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <img
                      src={ind.imageUrl}
                      alt={`${ind.title} Immersive Technology`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-xs border border-slate-100">
                      {ind.icon}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded-md border border-slate-700">
                      {ind.badge}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {ind.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {ind.shortDesc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-200">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                        Potential Applications:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {ind.applications.slice(0, 4).map((app, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {ind.featuredCaseStudyTitle && (
                      <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-100 text-xs space-y-1">
                        <span className="font-mono text-[10px] text-blue-700 font-bold uppercase tracking-wider block">
                          Featured Project Connection:
                        </span>
                        <p className="font-semibold text-slate-900">
                          {ind.featuredCaseStudyTitle}
                        </p>
                      </div>
                    )}

                    {ind.disclaimer && (
                      <p className="text-[10px] text-slate-400 italic leading-normal">
                        {ind.disclaimer}
                      </p>
                    )}
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => openDetailModal(ind)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-600 hover:text-white border border-slate-200 hover:border-blue-600 text-slate-800 text-xs font-semibold uppercase tracking-wider py-3 rounded-xl transition-all shadow-2xs"
                  >
                    <span>Explore {ind.title} Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — INDUSTRY / TECHNOLOGY MATRIX */}
      <section className="py-20 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">
              Technology Fit Assessment
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Where AR, VR, WebAR & AI Fit
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Different industries require distinct spatial and intelligence mediums. Click on any sector below to inspect specific technology applications.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/80">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/90 text-slate-300 font-mono uppercase tracking-wider">
                  <th className="p-4 font-semibold">Industry</th>
                  <th className="p-4 font-semibold text-blue-400">AR</th>
                  <th className="p-4 font-semibold text-blue-400">VR</th>
                  <th className="p-4 font-semibold text-blue-400">WebAR</th>
                  <th className="p-4 font-semibold text-blue-400">AI</th>
                  <th className="p-4 font-semibold text-blue-400">AI + XR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {MATRIX_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-bold text-white whitespace-nowrap flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      <span>{row.industry}</span>
                    </td>
                    <td className="p-4 text-slate-300 max-w-xs">{row.ar}</td>
                    <td className="p-4 text-slate-300 max-w-xs">{row.vr}</td>
                    <td className="p-4 text-slate-300 max-w-xs">{row.webar}</td>
                    <td className="p-4 text-slate-300 max-w-xs">{row.ai}</td>
                    <td className="p-4 text-slate-300 max-w-xs">{row.aiXr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Tabbed View Alternative */}
          <div className="lg:hidden space-y-4">
            <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none">
              {MATRIX_DATA.map((item) => (
                <button
                  key={item.industry}
                  onClick={() => setActiveMatrixIndustry(item.industry)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    activeMatrixIndustry === item.industry
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}
                >
                  {item.industry}
                </button>
              ))}
            </div>

            {(() => {
              const current = MATRIX_DATA.find((m) => m.industry === activeMatrixIndustry) || MATRIX_DATA[0];
              return (
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
                  <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
                    {current.industry} Technology Applications
                  </h3>
                  <div className="grid grid-cols-1 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <span className="font-mono text-blue-400 font-bold block">AR (Augmented Reality):</span>
                      <p className="text-slate-300">{current.ar}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <span className="font-mono text-blue-400 font-bold block">VR (Virtual Reality):</span>
                      <p className="text-slate-300">{current.vr}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <span className="font-mono text-blue-400 font-bold block">WebAR (Frictionless Web):</span>
                      <p className="text-slate-300">{current.webar}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <span className="font-mono text-blue-400 font-bold block">AI (Artificial Intelligence):</span>
                      <p className="text-slate-300">{current.ai}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <span className="font-mono text-blue-400 font-bold block">AI + XR Convergence:</span>
                      <p className="text-slate-300">{current.aiXr}</p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 text-xs text-slate-300 flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-blue-400 shrink-0" />
            <p>
              <strong className="text-white">Selection Methodology:</strong> The right technology depends on your business objective, target user audience, physical environment, and hardware constraints. Contact our team for an architectural discovery session.
            </p>
          </div>
        </div>
      </section>

      {/* 06 — BUSINESS CHALLENGES */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">
              Problem-Focused Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Can Immersive Technology Help You Solve?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We align spatial computing and AI architectures around core organizational challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Category Sidebar */}
            <div className="lg:col-span-4 space-y-2">
              {BUSINESS_CHALLENGES.map((ch) => {
                const isActive = activeChallengeId === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChallengeId(ch.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all border flex items-center justify-between ${
                      isActive
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20 text-white' : 'bg-white border border-slate-200'}`}>
                        {ch.icon}
                      </div>
                      <span className="font-bold text-sm">{ch.title}</span>
                    </div>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Category Detail Panel */}
            <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 lg:p-8 space-y-6">
              {(() => {
                const activeCh = BUSINESS_CHALLENGES.find((c) => c.id === activeChallengeId) || BUSINESS_CHALLENGES[0];
                return (
                  <>
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                        {activeCh.icon}
                        <span>Challenge Category</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900">
                        {activeCh.title}
                      </h3>
                      <p className="text-slate-700 font-medium text-sm sm:text-base">
                        {activeCh.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {activeCh.description}
                    </p>

                    <div className="pt-4 border-t border-slate-200 space-y-3">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                        Core Value Indicators:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {activeCh.metrics.map((m, idx) => (
                          <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => onOpenIntake(`Challenge Solution: ${activeCh.title}`)}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-2xs"
                      >
                        <span>Discuss Your {activeCh.title} Requirement</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* 07 — FEATURED INDUSTRY PROJECTS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">
              Proven Deliverables
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Real-World Applications
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Inspect three representative case studies engineered across healthcare, manufacturing, and e-commerce sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_CASE_STUDIES.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-[11px] font-mono px-2.5 py-1 rounded-md uppercase font-semibold shadow-xs">
                      {project.industry}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <span className="text-xs font-mono text-blue-600 font-semibold block uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider py-3 rounded-xl transition-all shadow-2xs"
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

      {/* 08 — HOW WE BUILD INDUSTRY SOLUTIONS */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">
              Structured Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              From Industry Challenge to Digital Experience
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our six-step engineering framework ensures technical reliability, user accessibility, and seamless enterprise integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative overflow-hidden group hover:border-blue-300 transition-colors">
                <div className="text-3xl font-extrabold font-mono text-blue-600/30 group-hover:text-blue-600 transition-colors">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
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

      {/* 09 — TECHNOLOGY ECOSYSTEM */}
      <section className="py-20 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">
              Technical Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              The Technology Behind the Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <Headphones className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">AR / VR Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {['Unity 3D', 'Unreal Engine 5', 'ARKit', 'ARCore', 'WebXR API', 'Three.js', 'WebGL'].map((t, idx) => (
                  <span key={idx} className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">AI & Computer Vision</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {['Python', 'Machine Learning', 'Computer Vision', 'Generative AI APIs', 'LLM Integrations', 'OpenCV'].map((t, idx) => (
                  <span key={idx} className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Web & Infrastructure</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'REST / GraphQL APIs', 'Cloud SQL'].map((t, idx) => (
                  <span key={idx} className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — CROSS-INDUSTRY CAPABILITIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">
              Unified Foundation
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              One Technology Foundation. Multiple Industry Applications.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our core spatial computing, 3D graphics pipeline, and AI engine form a reusable foundation adapted into distinct vertical solutions.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-700 font-mono text-xs font-bold">
                  <Zap className="w-4 h-4" />
                  <span>Innovify Core Architecture</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Adaptable Spatial Core
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Rather than rebuilding from scratch for every project, Innovify XR leverages proprietary 3D shader libraries, WebXR scene loaders, and AI avatar modules that ensure rapid development and enterprise stability.
                </p>
                <div className="space-y-2 pt-2">
                  {['Sub-second 3D Asset Loading', 'Universal Headset & Mobile Web Scalability', 'Secure On-Premise or Cloud Synchronization'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold">
                {INDUSTRIES_DATA.map((ind) => (
                  <div
                    key={ind.id}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col items-start gap-2"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                      {ind.icon}
                    </div>
                    <span className="font-bold text-slate-900">{ind.title}</span>
                    <span className="text-[10px] text-slate-500 leading-tight">
                      {ind.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11 — WHY INNOVIFY XR */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">
              Competitive Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Work With Innovify XR?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry-Aware Development',
                desc: 'Every technical decision is aligned with real operational environments, user safety parameters, and business KPIs.'
              },
              {
                title: 'Immersive Expertise',
                desc: 'AR, VR, and WebAR are our core foundation, not peripheral add-ons or temporary experimentations.'
              },
              {
                title: 'AI Integration',
                desc: 'We incorporate state-of-the-art computer vision, language models, and predictive analytics where they deliver practical value.'
              },
              {
                title: 'Custom Solutions',
                desc: 'Every application is custom-built around your proprietary assets, workflows, and brand guidelines.'
              },
              {
                title: 'Cross-Disciplinary Skills',
                desc: 'Our team seamlessly combines 3D artistry, physics engine optimization, web development, and AI API engineering.'
              },
              {
                title: 'Future-Ready Architecture',
                desc: 'We build clean, extensible codebases designed to support future headset releases, web standards, and cloud scale.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold font-mono text-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 — FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">
              Clear Answers
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Industries & Immersive Technology — Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm sm:text-base transition-colors"
                  >
                    <span>{item.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-white text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13 — FINAL CTA */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultation & Feasibility Assessment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have an Industry Challenge to Solve?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Tell us about your business, users, and objectives. We'll help you explore where AR, VR, WebAR, and AI can fit.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenIntake()}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-blue-500/20"
            >
              <Sparkle className="w-4 h-4" />
              <span>Start Your Project</span>
            </button>

            <button
              onClick={() => onOpenIntake('Team Consultation')}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Industry Detailed Modal Overlay */}
      {detailModalIndustry && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 relative border border-slate-200 shadow-2xl my-8">
            <button
              onClick={() => setDetailModalIndustry(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100">
                {detailModalIndustry.icon}
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
                  {detailModalIndustry.badge}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {detailModalIndustry.title} Solutions
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {detailModalIndustry.longDesc}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
                Primary Applications:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {detailModalIndustry.applications.map((app, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-xs space-y-1">
              <span className="font-mono text-blue-700 font-bold uppercase block">
                Primary Challenge Solved:
              </span>
              <p className="text-slate-800 leading-relaxed">
                {detailModalIndustry.challengeSolved}
              </p>
            </div>

            {detailModalIndustry.disclaimer && (
              <p className="text-[11px] text-slate-400 italic">
                {detailModalIndustry.disclaimer}
              </p>
            )}

            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => setDetailModalIndustry(null)}
                className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-800"
              >
                Close Overview
              </button>

              <button
                onClick={() => {
                  const title = detailModalIndustry.title;
                  setDetailModalIndustry(null);
                  onOpenIntake(`${title} Solution`);
                }}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-sm"
              >
                <Sparkle className="w-3.5 h-3.5" />
                <span>Start {detailModalIndustry.title} Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
