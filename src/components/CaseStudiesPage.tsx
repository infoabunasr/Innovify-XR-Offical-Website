import React, { useState, useMemo, useEffect } from 'react';
import { ALL_CASE_STUDIES } from '../data';
import { CaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import {
  Sparkles,
  ArrowUpRight,
  Filter,
  Search,
  Box,
  Layers,
  Cpu,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  ChevronDown,
  Info,
  ShieldCheck,
  Eye,
  ArrowRight
} from 'lucide-react';

interface CaseStudiesPageProps {
  onOpenProjectModal: (projectName?: string) => void;
  onNavigateHome?: () => void;
  initialSlug?: string;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  onOpenProjectModal,
  onNavigateHome,
  initialSlug,
}) => {
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<CaseStudy | null>(null);
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-cs-1');

  // Handle deep-linking to specific project slug
  useEffect(() => {
    if (initialSlug) {
      const matched = ALL_CASE_STUDIES.find(
        (cs) => cs.slug === initialSlug || cs.id === initialSlug
      );
      if (matched) {
        setActiveModalProject(matched);
      }
    }
  }, [initialSlug]);

  // Document title and meta setup for SEO
  useEffect(() => {
    document.title = 'AR, VR & WebAR Case Studies | Innovify XR';
  }, []);

  const featuredProjects = useMemo(() => {
    return ALL_CASE_STUDIES.filter((cs) => cs.isFeaturedPortfolio || cs.isFeaturedHomepage);
  }, []);

  const filteredProjects = useMemo(() => {
    return ALL_CASE_STUDIES.filter((project) => {
      // Tech filter
      const matchesTech =
        selectedTech === 'All' ||
        project.technology.toLowerCase().includes(selectedTech.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(selectedTech.toLowerCase()));

      // Industry filter
      const matchesIndustry =
        selectedIndustry === 'All' ||
        project.industry.toLowerCase().includes(selectedIndustry.toLowerCase());

      // Search query filter
      const matchesSearch =
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.longDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesTech && matchesIndustry && matchesSearch;
    });
  }, [selectedTech, selectedIndustry, searchQuery]);

  const caseStudyFaqs = [
    {
      id: 'faq-cs-1',
      question: 'Are these case studies real projects or technical concepts?',
      answer:
        'Innovify XR develops both commissioned client solutions and internal demonstration projects to showcase spatial capabilities. In accordance with our strict accuracy principles, we never fabricate client logos, company names, or unverified statistical claims. Demonstration concepts are clearly marked.',
    },
    {
      id: 'faq-cs-2',
      question: 'Can these AR and VR experiences be customized for my organization?',
      answer:
        'Yes. Every solution we build is custom-engineered to align with your exact workflows, brand identity, 3D assets, security protocols, and target hardware platforms (Meta Quest, Web browsers, iOS, Android, Apple Vision Pro).',
    },
    {
      id: 'faq-cs-3',
      question: 'What hardware or platforms are required to run these solutions?',
      answer:
        'Our WebAR solutions run on standard smartphone browsers without downloads. VR simulations are built for standalone headsets (Meta Quest 3, Pico 4) as well as PC-tethered setups (HTC Vive Pro, Vision Pro) depending on spatial graphics requirements.',
    },
    {
      id: 'faq-cs-4',
      question: 'What is the typical timeline for developing a custom spatial experience?',
      answer:
        'A focused WebAR product viewer or interactive prototype generally takes 3 to 6 weeks. Comprehensive multi-user VR training suites or AI-integrated spatial applications typically require 8 to 14 weeks from initial discovery to final deployment.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 pb-20 font-sans">
      {/* Search & Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateHome) onNavigateHome();
              else window.location.href = '/';
            }}
            className="hover:text-blue-600 transition-colors"
          >
            Home
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Case Studies & Work</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Innovify XR Work & Demonstrations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-heading leading-[1.1]">
            Turning Ideas Into Immersive Experiences
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Explore real-world spatial computing applications, interactive WebAR viewers, and high-fidelity VR simulations engineered across healthcare, manufacturing, retail, and corporate training.
          </p>
        </div>
      </div>

      {/* Featured Projects Highlight Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
              Featured Flagship Demonstrations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading mt-1">
              Primary Case Studies
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Verifiable Scope & Technical Proof</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Media Thumbnail */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Tech Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-slate-900 shadow-sm border border-slate-200">
                    {project.technology}
                  </span>
                </div>

                {/* Industry Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-medium text-slate-200">
                    {project.industry}
                  </span>
                  <span className="text-[11px] font-mono text-blue-300 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
                    {project.demoType.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-950 font-heading group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Deliverables snippet */}
                {project.deliverables && project.deliverables.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1">
                      {project.deliverables.slice(0, 3).map((item, dIdx) => (
                        <li key={dIdx} className="text-xs text-slate-700 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech tags */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[11px] font-semibold text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action button */}
                <div className="pt-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs py-3 rounded-xl transition-all duration-200 shadow-xs group-hover:shadow-md"
                  >
                    <span>View Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Complete Work Filter & Search Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-8">
          
          {/* Header & Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
                Complete Project Directory
              </span>
              <h2 className="text-2xl font-bold text-slate-950 font-heading">
                All AR, VR & WebAR Solutions ({filteredProjects.length})
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[280px] sm:min-w-[340px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword, technology, or topic..."
                className="w-full pl-10 pr-4 py-2.5 text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Filter Pills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tech filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-blue-600" />
                <span>Filter by Technology</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {['All', 'AR', 'VR', 'WebAR', 'AI'].map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      selectedTech === tech
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            {/* Industry filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>Filter by Industry</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  'All',
                  'Healthcare',
                  'Retail',
                  'Manufacturing',
                  'Hospitality',
                  'Safety',
                  'IT & Corporate',
                ].map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      selectedIndustry === ind
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="p-5 space-y-3">
                    <div className="relative h-40 rounded-lg overflow-hidden bg-slate-900">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {project.isConcept && (
                        <div className="absolute top-2 right-2 bg-slate-900/90 text-slate-200 text-[10px] font-mono font-medium px-2 py-0.5 rounded border border-slate-700">
                          Concept
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-semibold text-blue-600">
                      <span>{project.industry}</span>
                      <span className="text-slate-400 font-normal">{project.technology}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-950 font-heading leading-snug group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="p-5 pt-0 mt-auto">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg bg-white border border-slate-200 group-hover:border-blue-300 text-slate-800 hover:text-blue-600 font-semibold text-xs transition-all"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center space-y-3 bg-slate-50 rounded-xl border border-dashed border-slate-200">
              <Box className="w-8 h-8 text-slate-400 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">No matching projects found</h3>
              <p className="text-xs text-slate-500">
                Try adjusting your search query or reset filters to view all 8 projects.
              </p>
              <button
                onClick={() => {
                  setSelectedTech('All');
                  setSelectedIndustry('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
              <HelpCircle className="w-4 h-4" />
              <span>Case Studies & Methodology FAQ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Questions regarding project authenticity, custom development processes, and hardware integration.
            </p>
          </div>

          <div className="space-y-4">
            {caseStudyFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-slate-50 hover:bg-slate-100/80 transition-colors"
                  >
                    <span className="text-sm font-bold text-slate-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 bg-white border-t border-slate-150 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono uppercase tracking-wider border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready for Spatial Transformation?</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
              Have a Similar Spatial or AI Solution to Build?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Consult with our senior technical architects to scope your AR, VR, WebAR, or AI integration project. Receive a complete technical roadmap and proposal.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto relative z-10 shrink-0">
            <button
              onClick={() => onOpenProjectModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-blue-500/25"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {activeModalProject && (
        <CaseStudyModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onOpenIntake={(projectName) => {
            setActiveModalProject(null);
            onOpenProjectModal(projectName);
          }}
        />
      )}
    </div>
  );
};
