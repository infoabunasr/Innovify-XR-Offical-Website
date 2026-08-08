import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Send,
  Mail,
  User,
  Building2,
  Globe,
  Briefcase,
  Clock,
  DollarSign,
  FileText,
  Upload,
  X,
  ShieldCheck,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Eye,
  Headphones,
  Cpu,
  Layers,
  Building,
  Stethoscope,
  Factory,
  ShoppingBag,
  GraduationCap,
  ExternalLink,
  PhoneCall,
  Phone,
  Linkedin,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';
import { PRIMARY_SOLUTIONS, ALL_CASE_STUDIES, INDUSTRIES } from '../data';

interface ContactPageProps {
  onNavigateHome?: () => void;
  onNavigateToSolutions?: () => void;
  onNavigateToIndustries?: () => void;
  onNavigateToCaseStudies?: () => void;
  onNavigateToServiceRoute?: (route: string) => void;
  onNavigateToIndustryRoute?: (route: string) => void;
  onNavigateToCaseStudySlug?: (slug: string) => void;
}

const COUNTRIES = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Japan',
  'Singapore',
  'India',
  'United Arab Emirates',
  'Netherlands',
  'Switzerland',
  'Sweden',
  'Other / Global'
];

const SERVICE_OPTIONS = [
  'AR Development',
  'VR Development',
  'WebAR Development',
  'AI Integration',
  'AI + XR',
  'Mobile App Development',
  'Web Development',
  'Game Development',
  'Blockchain Development',
  'Other'
];

const INDUSTRY_OPTIONS = [
  'Healthcare',
  'Manufacturing',
  'Retail & E-commerce',
  'Education',
  'Real Estate',
  'Tourism & Hospitality',
  'Automotive',
  'Marketing & Advertising',
  'IT & Technology',
  'Other'
];

const PROJECT_STAGES = [
  'Idea / Concept',
  'Planning',
  'Prototype / MVP',
  'Existing Product',
  'Ready for Development',
  'Existing Product That Needs Improvement'
];

const BUDGET_RANGES = [
  'Not Sure Yet',
  'Under $10K',
  '$10K–$25K',
  '$25K–$50K',
  '$50K–$100K',
  '$100K+',
  'Prefer to Discuss'
];

const TIMELINE_OPTIONS = [
  'As Soon As Possible',
  'Within 1 Month',
  '1–3 Months',
  '3–6 Months',
  'Exploring / No Fixed Timeline'
];

const CONTACT_PREFERENCES = [
  'Email',
  'Phone',
  'WhatsApp',
  'Video Call'
];

const CONTACT_FAQS = [
  {
    id: 'cfaq-1',
    question: '1. What types of projects can I discuss with Innovify XR?',
    answer: 'You can discuss any Augmented Reality (AR), Virtual Reality (VR), WebAR, Artificial Intelligence (AI), or AI + XR spatial computing project, as well as high-performance mobile apps, web applications, 3D interactive tools, and blockchain platforms.'
  },
  {
    id: 'cfaq-2',
    question: '2. Can I contact Innovify XR with only an idea?',
    answer: 'Yes, absolutely. You do not need a fully defined technical specification or complete wireframes before contacting us. Our technical architects will help clarify requirements, define user journeys, and recommend optimal technology approaches.'
  },
  {
    id: 'cfaq-3',
    question: '3. Does Innovify XR work with international clients?',
    answer: 'Yes. Innovify XR collaborates with startups, enterprise organizations, healthcare providers, and brands across North America, Europe, Asia-Pacific, and global markets using efficient asynchronous and live video discovery workflows.'
  },
  {
    id: 'cfaq-4',
    question: '4. Can you work with an existing application or product?',
    answer: 'Yes. We can audit your existing application, codebase, or 3D asset pipeline to integrate AR/VR capabilities, optimize WebGL performance, embed AI models, or refactor legacy code.'
  },
  {
    id: 'cfaq-5',
    question: '5. Can I request a custom AR or VR solution?',
    answer: 'Yes. Every solution we build is customized to your exact operational workflows, educational objectives, marketing channels, and target hardware platforms.'
  },
  {
    id: 'cfaq-6',
    question: '6. Do you build WebAR experiences without a mobile app?',
    answer: 'Yes. Our WebAR development enables instant 3D augmented reality directly in standard mobile browsers (Safari, Chrome, Edge) via WebXR and QR codes—no app store download required.'
  },
  {
    id: 'cfaq-7',
    question: '7. Can you help define the technology for my project?',
    answer: 'Yes. We evaluate your target audience, hardware constraints, timeline, and business goals to recommend the most cost-effective and scalable technology platform (e.g., WebAR vs Native iOS/Android vs Meta Quest/VisionOS).'
  },
  {
    id: 'cfaq-8',
    question: '8. How do I start a project with Innovify XR?',
    answer: 'Simply fill out our Project Inquiry form on this page with your project details or send us an email directly at info.innovifyxr@gmail.com. Our team will review your inquiry and schedule a discovery call.'
  }
];

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onNavigateToSolutions,
  onNavigateToIndustries,
  onNavigateToCaseStudies,
  onNavigateToServiceRoute,
  onNavigateToIndustryRoute,
  onNavigateToCaseStudySlug
}) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [country, setCountry] = useState('United States');
  const [selectedServices, setSelectedServices] = useState<string[]>(['AR Development']);
  const [industry, setIndustry] = useState('Healthcare');
  const [projectStage, setProjectStage] = useState('Idea / Concept');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('Not Sure Yet');
  const [timeline, setTimeline] = useState('Within 1 Month');
  const [contactPreference, setContactPreference] = useState('Email');
  const [files, setFiles] = useState<File[]>([]);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Anti-spam bot trap

  // UI state
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('cfaq-1');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('inquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleServiceToggle = (service: string) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Spam honeypot check
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    // Validation
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid work email address.');
      return;
    }
    if (!description.trim()) {
      setErrorMessage('Please describe your project requirements or idea.');
      return;
    }
    if (!consent) {
      setErrorMessage('Please accept the privacy consent to send your inquiry.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          company: companyName,
          country,
          services: selectedServices,
          industry,
          projectStage,
          description,
          budget,
          timeline,
          preferredContact: contactPreference,
          attachments: files.map((f) => ({ name: f.name, size: f.size, type: f.type })),
          consent,
          hp_field: honeypot,
          pageUrl: window.location.href,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Failed to submit inquiry. Please try again or email info.innovifyxr@gmail.com directly.');
      }
    } catch (err) {
      console.error('Error submitting inquiry form:', err);
      setErrorMessage('A network error occurred. Please try again or contact us directly at info.innovifyxr@gmail.com.');
    } finally {
      setSubmitting(false);
    }
  };

  // Get 3 featured case studies for trust section
  const featuredCaseStudies = ALL_CASE_STUDIES.filter((cs) =>
    ['vr-orthopaedic-trauma-training', 'ar-furniture-items-showcase', 'vr-welding-training-experience'].includes(cs.slug)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* 01 HERO SECTION */}
      <section className="relative pt-32 pb-20 sm:pb-28 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Text */}
            <div className="lg:col-span-7 space-y-6 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Innovify XR Project Discovery & Collaboration
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-tight">
                Let's Build Something <span className="text-blue-500">That Matters</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
                Have an idea for an AR, VR, WebAR, AI, or immersive digital experience? Tell us what you're building, and our team will explore the right technology and development approach with you.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4">
                <button
                  onClick={scrollToForm}
                  className="px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm transition-all shadow-xl hover:shadow-blue-500/25 flex items-center gap-2"
                >
                  <span>Tell Us About Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onNavigateToSolutions}
                  className="px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-extrabold text-sm transition-all"
                >
                  Explore Our Solutions
                </button>
              </div>
            </div>

            {/* Hero Right Visual Composition */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    Project Qualification Matrix
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Eye className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-heading">Augmented Reality & WebAR</div>
                      <div className="text-[11px] text-slate-400">3D spatial overlays, product try-ons & WebXR</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      <Headphones className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-heading">Virtual Reality Simulation</div>
                      <div className="text-[11px] text-slate-400">High-fidelity surgical, welding & industrial VR</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-heading">AI & Computer Vision</div>
                      <div className="text-[11px] text-slate-400">Intelligent 3D avatars & automated vision</div>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-500/30 text-xs text-blue-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Prompt Response • NDA Option • Technical Consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 TRUST / VALUE STRIP */}
      <section className="py-10 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
              <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Custom Solutions
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Technology designed around your specific business requirements.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
              <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Technical Expertise
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Experience across AR, VR, WebAR, AI and immersive technologies.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
              <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Business-Focused
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Solutions designed around real objectives rather than tech for its own sake.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
              <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                Global Collaboration
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Designed to support projects and clients across international markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 CONTACT / PROJECT INQUIRY SECTION */}
      <section id="inquiry-form" className="py-20 bg-slate-50/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Form */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Project Qualification Form
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                  Tell Us About Your Project
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Share a few details about your idea, requirements, or challenge. The more context you provide, the better we can understand what you're trying to achieve.
                </p>
              </div>

              {submitted ? (
                /* Success Message */
                <div className="p-8 sm:p-12 rounded-2xl bg-blue-50/80 border border-blue-200 text-center space-y-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900 font-heading">
                      Thanks — We’ve Received Your Project Inquiry
                    </h3>
                    <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
                      Your information has been received. Our technical team will review your requirements and get back to you at <span className="font-bold text-blue-700">{email}</span>.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-bold text-xs transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                    {onNavigateHome && (
                      <button
                        onClick={onNavigateHome}
                        className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 font-bold text-xs transition-colors"
                      >
                        Back to Home
                      </button>
                    )}
                    {onNavigateToCaseStudies && (
                      <button
                        onClick={onNavigateToCaseStudies}
                        className="px-6 py-3 rounded-xl bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 font-bold text-xs transition-colors"
                      >
                        Explore Case Studies
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Honeypot hidden input */}
                  <input
                    type="text"
                    name="website_url_honeypot"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Error display */}
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold">
                      {errorMessage}
                    </div>
                  )}

                  {/* STEP 1 — YOUR INFORMATION */}
                  <div className="space-y-4">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">
                      Step 1 — Your Information
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Your name"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                          />
                        </div>
                      </div>

                      {/* Work Email */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Work Email <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@company.com"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <div className="relative">
                          <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="Company name"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                          />
                        </div>
                      </div>

                      {/* Country / Region */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Country / Region
                        </label>
                        <div className="relative">
                          <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                          >
                            {COUNTRIES.map((c) => (
                              <option key={c} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* STEP 2 — YOUR PROJECT */}
                  <div className="space-y-5 pt-4 border-t border-slate-100">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">
                      Step 2 — Your Project Requirements
                    </div>

                    {/* What Can We Help You Build? */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        What Can We Help You Build? <span className="text-slate-400 font-normal">(Select all that apply)</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {SERVICE_OPTIONS.map((svc) => {
                          const isSelected = selectedServices.includes(svc);
                          return (
                            <button
                              key={svc}
                              type="button"
                              onClick={() => handleServiceToggle(svc)}
                              className={`px-3 py-2.5 rounded-xl border text-xs font-bold text-left transition-all flex items-center justify-between ${
                                isSelected
                                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <span>{svc}</span>
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Industry & Project Stage */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Project Industry
                        </label>
                        <select
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                        >
                          {INDUSTRY_OPTIONS.map((ind) => (
                            <option key={ind} value={ind}>
                              {ind}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Project Stage
                        </label>
                        <select
                          value={projectStage}
                          onChange={(e) => setProjectStage(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                        >
                          {PROJECT_STAGES.map((stg) => (
                            <option key={stg} value={stg}>
                              {stg}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Tell Us About Your Project <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe your idea, business challenge, target users, key features, or anything else you think we should know."
                        className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white font-medium leading-relaxed"
                      />
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Estimated Project Budget
                        </label>
                        <div className="relative">
                          <DollarSign className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <select
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                          >
                            {BUDGET_RANGES.map((b) => (
                              <option key={b} value={b}>
                                {b}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          When Would You Like to Start?
                        </label>
                        <div className="relative">
                          <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <select
                            value={timeline}
                            onChange={(e) => setTimeline(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                          >
                            {TIMELINE_OPTIONS.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Project Files <span className="text-slate-400 font-normal">(Optional — PDF, DOC, PPT, PNG, JPG, ZIP max 25MB)</span>
                      </label>
                      <div className="relative border-2 border-dashed border-slate-200 hover:border-blue-400 rounded-2xl p-4 bg-slate-50/80 text-center transition-colors">
                        <input
                          type="file"
                          multiple
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg,.zip"
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <div className="space-y-1 pointer-events-none">
                          <Upload className="w-6 h-6 text-slate-400 mx-auto" />
                          <p className="text-xs font-bold text-slate-700">Click or drag files here to upload specs, wireframes, or decks</p>
                        </div>
                      </div>

                      {/* Display Uploaded File Chips */}
                      {files.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {files.map((file, idx) => (
                            <div
                              key={idx}
                              className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold flex items-center gap-2"
                            >
                              <FileText className="w-3.5 h-3.5 text-blue-600" />
                              <span className="truncate max-w-[150px]">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => handleRemoveFile(idx)}
                                className="text-blue-500 hover:text-rose-600 transition-colors"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Preferred Way to Contact */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Way to Contact You
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {CONTACT_PREFERENCES.map((pref) => (
                          <button
                            key={pref}
                            type="button"
                            onClick={() => setContactPreference(pref)}
                            className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                              contactPreference === pref
                                ? 'bg-slate-900 text-white border-slate-900'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {pref}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Consent Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer text-xs text-slate-600 leading-relaxed font-medium">
                        <input
                          type="checkbox"
                          required
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          className="mt-0.5 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                        />
                        <span>
                          I agree to Innovify XR using the information provided to respond to my project inquiry in accordance with the{' '}
                          <a href="#privacy" className="text-blue-600 font-bold underline">
                            Privacy Policy
                          </a>
                          .
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 px-8 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white font-extrabold text-sm transition-all shadow-xl hover:shadow-blue-600/25 flex items-center justify-center gap-2"
                      >
                        {submitting ? (
                          <span>Processing Your Inquiry...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Project Inquiry</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Contact Guidance & Direct Info */}
            <div className="lg:col-span-4 space-y-6">
              {/* Direct Info Card */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400">
                    Direct Contact Channels
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    Prefer to Reach Us Directly?
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Connect directly with our technical discovery team for immediate project inquiries.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href="mailto:contac@innovifyxr.com"
                    className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-white">Official Email</div>
                        <div className="text-[11px] text-slate-300 truncate">contac@innovifyxr.com</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" />
                  </a>

                  <a
                    href="mailto:info.innovifyxr@gmail.com"
                    className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-white">Inquiries Email</div>
                        <div className="text-[11px] text-slate-300 truncate">info.innovifyxr@gmail.com</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all shrink-0" />
                  </a>

                  <a
                    href="https://wa.me/923204513240"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-white">WhatsApp / Call</div>
                        <div className="text-[11px] text-slate-300 truncate">+92 320 4513240</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0" />
                  </a>

                  {/* Social Media Links */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Connect on Social Media
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <a
                        href="https://www.linkedin.com/company/innovify-xr/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors flex items-center gap-2 font-semibold"
                      >
                        <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href="https://www.instagram.com/innovifyxr01/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/40 transition-colors flex items-center gap-2 font-semibold"
                      >
                        <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                        <span>Instagram</span>
                      </a>
                      <a
                        href="https://www.facebook.com/innovifyxr/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-blue-500 hover:border-blue-500/40 transition-colors flex items-center gap-2 font-semibold"
                      >
                        <Facebook className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>Facebook</span>
                      </a>
                      <a
                        href="https://www.youtube.com/@innovifyxr01"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-red-400 hover:border-red-500/40 transition-colors flex items-center gap-2 font-semibold"
                      >
                        <Youtube className="w-4 h-4 text-red-400 shrink-0" />
                        <span>YouTube</span>
                      </a>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1 mt-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Response Commitment</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      We respond to all project inquiries within 24 business hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* What to Include Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-mono text-slate-900">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  What to Prepare
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  What Should You Include in Your Inquiry?
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {[
                    'Core project idea & business objective',
                    'Target audience & desired platforms (iOS, Android, Web, Quest)',
                    'Key functional requirements & feature priorities',
                    'Existing designs, wireframes, or codebase references',
                    'Expected timeline or launch milestone goals',
                    'Estimated budget parameter'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-100 text-[11px] text-blue-900 font-semibold leading-relaxed">
                  💡 Note: You don't need to have everything figured out before contacting us. Our technical architects will help structure your scope.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 WHAT HAPPENS NEXT */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
              Collaboration Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              What Happens After You Contact Us?
            </h2>
            <p className="text-sm text-slate-600">
              A clear, predictable four-step evaluation workflow from initial inquiry to development kickoff.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'We Review',
                desc: 'We review your requirements, goals, technical constraints, and project context.',
              },
              {
                num: '02',
                title: 'We Discuss',
                desc: 'We discuss the idea, target user workflows, platform strategy, and desired outcomes.',
              },
              {
                num: '03',
                title: 'We Define',
                desc: 'We help define an appropriate solution architecture, roadmap, scope, and development approach.',
              },
              {
                num: '04',
                title: 'We Move Forward',
                desc: 'If there’s a good fit, we finalize planning, deliverables, proposal, and move into development.',
              },
            ].map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-2xl font-mono font-black text-blue-600">{step.num}</div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 SERVICES CONNECTION */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                Enterprise Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                What Can We Build Together?
              </h2>
              <p className="text-sm text-slate-600 max-w-xl">
                Custom spatial computing, immersive simulation, and artificial intelligence solutions tailored to your operational goals.
              </p>
            </div>

            <button
              onClick={onNavigateToSolutions}
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 text-blue-600 font-bold text-xs transition-all flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'AR Development',
                desc: 'Custom augmented reality experiences for products, marketing, retail, training, and real-world interaction.',
                cta: 'Explore AR',
                route: '/solutions/ar-development',
                icon: Eye,
              },
              {
                title: 'VR Development',
                desc: 'Immersive virtual reality applications for training, simulation, education, healthcare, and enterprise use cases.',
                cta: 'Explore VR',
                route: '/solutions/vr-development',
                icon: Headphones,
              },
              {
                title: 'WebAR Development',
                desc: 'Browser-based augmented reality experiences that can be accessed without requiring a dedicated application.',
                cta: 'Explore WebAR',
                route: '/solutions/webar-development',
                icon: Globe,
              },
              {
                title: 'AI Integration',
                desc: 'AI-powered features and intelligent digital experiences designed around specific business requirements.',
                cta: 'Explore AI',
                route: '/solutions/ai-integration',
                icon: Cpu,
              },
              {
                title: 'AI + XR',
                desc: 'Combine artificial intelligence with immersive experiences to create more adaptive and intelligent applications.',
                cta: 'Explore AI + XR',
                route: '/solutions/ai-xr-solutions',
                icon: Sparkles,
              },
              {
                title: 'Custom Digital Products',
                desc: 'Mobile, web, game, and blockchain development when they are relevant to the project.',
                cta: 'Explore Solutions',
                route: '/solutions',
                icon: Layers,
              },
            ].map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  onClick={() => onNavigateToServiceRoute && onNavigateToServiceRoute(s.route)}
                  className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-xs font-bold text-blue-600 flex items-center justify-between">
                    <span>{s.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 08 CASE STUDY TRUST SECTION */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                Proven Executions
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                See What We've Built
              </h2>
              <p className="text-sm text-slate-600 max-w-xl">
                Explore selected projects across AR, VR, WebAR, training, product visualization, and immersive experiences.
              </p>
            </div>

            <button
              onClick={onNavigateToCaseStudies}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCaseStudies.map((project) => (
              <div
                key={project.id}
                onClick={() => onNavigateToCaseStudySlug && onNavigateToCaseStudySlug(project.slug)}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-slate-900/90 text-white text-[10px] font-mono font-bold uppercase">
                      {project.technology}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-[10px] font-mono font-bold text-blue-600 uppercase">
                      {project.industry}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs pt-4 mt-2">
                  <span className="font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09 INDUSTRY SECTION */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                Domain Specialization
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                Built for Different Industries
              </h2>
              <p className="text-sm text-slate-300 max-w-xl">
                We engineer tailored spatial computing applications across key enterprise industry verticals.
              </p>
            </div>

            <button
              onClick={onNavigateToIndustries}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>Explore Industries</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Healthcare', icon: Stethoscope, route: '/industries/healthcare', desc: 'Surgical VR simulation, 3D anatomy overlays, and medical procedural training.' },
              { name: 'Manufacturing', icon: Factory, route: '/industries/manufacturing', desc: 'Industrial assembly guidance, VR welding physics, and safety onboarding.' },
              { name: 'Retail & E-commerce', icon: ShoppingBag, route: '/industries/retail', desc: '3D WebAR product try-on, spatial catalog previews, and higher conversion.' },
              { name: 'Education', icon: GraduationCap, route: '/industries/education', desc: 'Interactive 3D STEM labs, immersive history, and virtual classrooms.' },
              { name: 'Real Estate', icon: Building, route: '/industries/real-estate', desc: 'Photorealistic WebAR property tours and architectural model walkthroughs.' },
              { name: 'Tourism & Hospitality', icon: Globe, route: '/industries/tourism', desc: 'Interactive destination spatial previews and digital cultural heritage.' },
            ].map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  onClick={() => onNavigateToIndustryRoute && onNavigateToIndustryRoute(ind.route)}
                  className="group p-6 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-all cursor-pointer space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-blue-400 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10 FAQ SECTION */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
              Clear Guidance
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear answers regarding our discovery process, project collaboration, and custom solution capabilities.
            </p>
          </div>

          <div className="space-y-3">
            {CONTACT_FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-slate-200 overflow-hidden bg-white transition-all"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-blue-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11 FINAL CTA */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Start Your Project Today
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight">
            Have an Idea? Let's Explore It.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Tell us what you're building, what problem you're solving, and where you want to take it. We'll start by understanding the opportunity.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm transition-all shadow-xl hover:shadow-blue-500/25 flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateToCaseStudies}
              className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-extrabold text-sm transition-all"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
