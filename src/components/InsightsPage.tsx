import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Sparkles,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Filter,
  CheckCircle2,
  Mail,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Globe,
  Headphones,
  Eye,
  Building2,
  Stethoscope,
  Factory,
  ShoppingBag,
  GraduationCap,
  Building,
  Compass,
  FileText,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  DollarSign
} from 'lucide-react';
import { ArticleItem, FAQItem } from '../types';
import { INSIGHTS_ARTICLES, FAQS, FEATURED_CASE_STUDIES } from '../data';
import { ArticleReader } from './ArticleReader';

interface InsightsPageProps {
  onOpenProjectModal: () => void;
  onNavigateHome?: () => void;
  onNavigateToSolutions?: () => void;
  onNavigateToIndustries?: () => void;
  onNavigateToCaseStudies?: () => void;
  onNavigateToServiceRoute?: (route: string) => void;
  onNavigateToIndustryRoute?: (route: string) => void;
  onNavigateToCaseStudySlug?: (slug: string) => void;
  initialSlug?: string;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({
  onOpenProjectModal,
  onNavigateToSolutions,
  onNavigateToIndustries,
  onNavigateToCaseStudies,
  onNavigateToServiceRoute,
  onNavigateToIndustryRoute,
  onNavigateToCaseStudySlug,
  initialSlug,
}) => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [selectedContentType, setSelectedContentType] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // If initialSlug is passed, select the article automatically
  useEffect(() => {
    if (initialSlug) {
      const found = INSIGHTS_ARTICLES.find(
        (a) => a.slug === initialSlug || a.id === initialSlug
      );
      if (found) {
        setSelectedArticle(found);
        window.scrollTo(0, 0);
      }
    }
  }, [initialSlug]);

  // Featured Article
  const featuredArticle = useMemo(() => {
    return INSIGHTS_ARTICLES.find((a) => a.isFeatured) || INSIGHTS_ARTICLES[0];
  }, []);

  // Filtered Articles
  const filteredArticles = useMemo(() => {
    return INSIGHTS_ARTICLES.filter((article) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTopic = selectedTopic === 'All' || article.topic === selectedTopic;
      const matchesContentType = selectedContentType === 'All' || article.contentType === selectedContentType;

      return matchesSearch && matchesTopic && matchesContentType;
    });
  }, [searchQuery, selectedTopic, selectedContentType]);

  const handleOpenArticle = (article: ArticleItem) => {
    setSelectedArticle(article);
    window.history.pushState({}, '', `/insights/${article.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToInsights = () => {
    setSelectedArticle(null);
    window.history.pushState({}, '', '/insights');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  // If viewing an article detail
  if (selectedArticle) {
    return (
      <ArticleReader
        article={selectedArticle}
        allArticles={INSIGHTS_ARTICLES}
        onBackToInsights={handleBackToInsights}
        onOpenArticle={handleOpenArticle}
        onOpenProjectModal={onOpenProjectModal}
        onNavigateToService={onNavigateToServiceRoute}
        onNavigateToIndustry={onNavigateToIndustryRoute}
        onNavigateToCaseStudy={onNavigateToCaseStudySlug}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 01 HERO SECTION */}
      <section className="relative pt-32 pb-20 sm:pb-28 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden">
        {/* Subtle background tech grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Innovify XR Research & Thought Leadership Hub
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-none">
                Insights on <span className="text-blue-500">AR, VR, WebAR & AI</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
                Practical insights, technology perspectives, and industry knowledge from Innovify XR covering immersive technology, artificial intelligence, and the future of digital experiences.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#latest-insights"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
                >
                  <span>Explore Insights</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={onOpenProjectModal}
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-extrabold text-sm transition-all flex items-center gap-2"
                >
                  <span>Start a Project</span>
                </button>
              </div>
            </div>

            {/* Hero Right Visual Composition */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-slate-800/80 border border-slate-700/80 p-6 shadow-2xl backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    Topical Architecture Matrix
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <div className="text-blue-400 text-xs font-mono font-bold flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      AR & Smart Glasses
                    </div>
                    <div className="text-[11px] text-slate-400">Spatial overlays & 3D tracking</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <div className="text-purple-400 text-xs font-mono font-bold flex items-center gap-1.5">
                      <Headphones className="w-3.5 h-3.5" />
                      VR & Simulation
                    </div>
                    <div className="text-[11px] text-slate-400">Hands-on procedural mastery</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <div className="text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" />
                      WebAR & WebXR
                    </div>
                    <div className="text-[11px] text-slate-400">Zero app install browser 3D</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <div className="text-cyan-400 text-xs font-mono font-bold flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      AI & Computer Vision
                    </div>
                    <div className="text-[11px] text-slate-400">Adaptive intelligence pipelines</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-500/30 text-xs text-blue-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Authority → Expertise → AI Search Visibility → Qualified Leads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 FEATURED INSIGHT SECTION */}
      {featuredArticle && (
        <section className="py-16 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Featured Insight
              </h2>
            </div>

            <div
              onClick={() => handleOpenArticle(featuredArticle)}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-auto overflow-hidden bg-slate-900">
                <img
                  src={featuredArticle.imageUrl}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-mono font-bold uppercase tracking-wider">
                  {featuredArticle.topic}
                </span>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <span className="font-semibold text-slate-700">{featuredArticle.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      {featuredArticle.readTime}
                    </span>
                    <span>•</span>
                    <span>{featuredArticle.date}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading group-hover:text-blue-600 transition-colors leading-snug">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">{featuredArticle.author.name}</span>
                  <button className="px-4 py-2 rounded-lg bg-blue-600 group-hover:bg-blue-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 03 TOPIC EXPLORER */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Explore by Topic
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Discover research, guides, and practical enterprise analysis across our core spatial technology clusters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                topic: 'AR',
                title: 'Augmented Reality',
                desc: 'Augmented reality development, applications, product visualization and immersive commerce.',
                icon: Eye,
                color: 'text-blue-600 bg-blue-50 border-blue-100',
              },
              {
                topic: 'VR',
                title: 'Virtual Reality',
                desc: 'Virtual reality development, training, simulation, education and enterprise applications.',
                icon: Headphones,
                color: 'text-purple-600 bg-purple-50 border-purple-100',
              },
              {
                topic: 'WebAR',
                title: 'WebAR & WebXR',
                desc: 'Browser-based augmented reality, product experiences and friction-free digital campaigns.',
                icon: Globe,
                color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
              },
              {
                topic: 'AI',
                title: 'Artificial Intelligence',
                desc: 'Artificial intelligence, automation, computer vision and intelligent spatial applications.',
                icon: Cpu,
                color: 'text-cyan-600 bg-cyan-50 border-cyan-100',
              },
              {
                topic: 'AI + XR',
                title: 'AI + XR Convergence',
                desc: 'The intersection of AI and spatial computing for adaptive virtual coaching.',
                icon: Sparkles,
                color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
              },
              {
                topic: 'Business & Strategy',
                title: 'Business & Strategy',
                desc: 'Digital transformation frameworks, technology cost evaluations, and spatial ROI.',
                icon: TrendingUp,
                color: 'text-amber-600 bg-amber-50 border-amber-100',
              },
            ].map((t) => {
              const Icon = t.icon;
              const isSelected = selectedTopic === t.topic;
              return (
                <div
                  key={t.topic}
                  onClick={() => {
                    setSelectedTopic(selectedTopic === t.topic ? 'All' : t.topic);
                    const el = document.getElementById('latest-insights');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`p-5 rounded-xl border transition-all cursor-pointer space-y-3 ${
                    isSelected
                      ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                      : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-lg border ${isSelected ? 'bg-blue-500 text-white border-blue-400' : t.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-mono font-bold uppercase ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                      Topic
                    </span>
                  </div>
                  <div>
                    <h3 className={`text-base font-bold font-heading ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {t.title}
                    </h3>
                    <p className={`text-xs mt-1 leading-relaxed ${isSelected ? 'text-blue-100' : 'text-slate-600'}`}>
                      {t.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 LATEST INSIGHTS + FILTERS */}
      <section id="latest-insights" className="py-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Latest Insights
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Explore our full archive of technology research, strategy breakdowns, and guides.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search insights, topics, keywords..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-xs"
              />
            </div>
          </div>

          {/* Topic & Content Type Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Topic Chips */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filter Topic:
              </span>
              {['All', 'AR', 'VR', 'WebAR', 'AI', 'AI + XR', 'Business & Strategy'].map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    selectedTopic === topic
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>

            {/* Content Type Filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Type:</span>
              <select
                value={selectedContentType}
                onChange={(e) => setSelectedContentType(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="All">All Types</option>
                <option value="Technology Guide">Technology Guides</option>
                <option value="Industry Insight">Industry Insights</option>
                <option value="Business & Strategy">Business & Strategy</option>
                <option value="Emerging Technology">Emerging Technology</option>
              </select>
            </div>
          </div>

          {/* Article Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => handleOpenArticle(article)}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-900/90 text-white text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-xs">
                        {article.topic}
                      </span>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                        <span>{article.category}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-blue-600" />
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading leading-snug line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs pt-4 mt-2">
                    <span className="text-slate-400 font-medium">{article.date}</span>
                    <span className="font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-white border border-slate-200 space-y-4">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">No matching insights found</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  New insights are coming soon. Explore our solutions and case studies in the meantime.
                </p>
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTopic('All');
                  setSelectedContentType('All');
                }}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 06 CONTENT TYPES */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              What You'll Find Here
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Structured research and insights tailored for business leaders, CTOs, and innovation heads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Technology Guides',
                desc: 'Clear explanations of technologies and concepts, such as WebAR standards and spatial mechanics.',
                icon: FileText,
              },
              {
                title: 'Industry Insights',
                desc: 'Explore how spatial technology is applied across healthcare, manufacturing, and e-commerce.',
                icon: Building2,
              },
              {
                title: 'Business & Strategy',
                desc: 'Frameworks to evaluate technology ROI, development budgets, and execution timelines.',
                icon: Compass,
              },
              {
                title: 'Emerging Technology',
                desc: 'Analysis of AI + XR convergence, spatial computing, and next-gen computer vision.',
                icon: Cpu,
              },
            ].map((ct, idx) => {
              const Icon = ct.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">{ct.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{ct.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 07 FEATURED INDUSTRY INSIGHTS */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Immersive Technology Across Industries
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              Discover industry-specific applications and research briefs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Healthcare', icon: Stethoscope, route: '/industries/healthcare', desc: 'VR surgical simulation, 3D anatomy visualization, and medical training.' },
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

      {/* 08 DECISION-MAKER GUIDES */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Guides for Technology Decision-Makers
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Curated strategic analyses answering core executive questions around cost, platform selection, and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'How to Choose Between AR, VR and WebAR',
                desc: 'Comparative matrix mapping operational workflows against spatial display hardware.',
                slug: 'ar-vs-vr-business-guide',
              },
              {
                title: 'How Much Does AR and VR Development Cost in 2026?',
                desc: 'Transparent budget guidelines, 3D asset pipeline costs, and implementation timelines.',
                slug: 'ar-vr-development-cost-guide',
              },
              {
                title: 'What Is WebAR? A Complete Guide',
                desc: 'Why browser-based 3D previews outperform native app downloads for customer reach.',
                slug: 'what-is-webar',
              },
              {
                title: 'How AI Is Changing Immersive Training',
                desc: 'How adaptive algorithms and real-time biometrics transform virtual training simulations.',
                slug: 'ai-changing-immersive-training',
              },
              {
                title: 'VR Training in Manufacturing: Safety & ROI',
                desc: 'Quantifiable case analysis on material savings and safety hazard elimination.',
                slug: 'vr-training-manufacturing-roi',
              },
              {
                title: 'WebAR Product Visualization for E-commerce',
                desc: 'How 3D WebAR bridges the gap between digital shopping and physical reality.',
                slug: 'webar-product-visualization-ecommerce',
              },
            ].map((g, idx) => (
              <div
                key={idx}
                onClick={() => {
                  const article = INSIGHTS_ARTICLES.find((a) => a.slug === g.slug);
                  if (article) handleOpenArticle(article);
                }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">
                    Decision Guide
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">{g.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{g.desc}</p>
                </div>
                <div className="pt-3 text-xs font-bold text-blue-600 flex items-center gap-1">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09 NEWSLETTER / KNOWLEDGE CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-white">
            <Mail className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
              Stay Ahead of Immersive Technology
            </h2>
            <p className="text-base text-blue-100 max-w-xl mx-auto">
              Get practical insights on AR, VR, WebAR, AI and emerging digital experiences delivered to your inbox.
            </p>
          </div>

          {newsletterSubscribed ? (
            <div className="p-4 rounded-xl bg-white text-blue-900 font-bold text-sm max-w-md mx-auto flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Thank you for subscribing! We respect your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your executive email..."
                className="flex-1 px-4 py-3 rounded-xl bg-white text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none font-medium"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-extrabold text-xs transition-all shadow-md shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-[11px] text-blue-200">
            We respect your inbox. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* 10 INSIGHTS TO SERVICES CONNECTION */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider border border-blue-500/30">
                Technology Execution Partner
              </span>
              <h2 className="text-3xl font-extrabold font-heading">Looking for a Technology Partner?</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Explore how Innovify XR turns immersive technology and AI concepts into custom, production-grade digital experiences.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                onClick={onNavigateToSolutions}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs transition-all shadow-md flex items-center gap-2"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenProjectModal}
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-extrabold text-xs transition-all"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11 CASE STUDY CONNECTION */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                See the Technology in Action
              </h2>
              <p className="text-sm text-slate-600 max-w-xl">
                Explore selected AR, VR, WebAR and immersive technology projects developed by Innovify XR.
              </p>
            </div>

            <button
              onClick={onNavigateToCaseStudies}
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 text-blue-600 font-bold text-xs transition-all flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_CASE_STUDIES.slice(0, 3).map((project) => (
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
                    Explore Project <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 FAQ SECTION */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Insights — Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear answers regarding our research topics, expertise, and content hub.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
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

      {/* 13 FINAL CTA */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Let's Build
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight">
            Have an Idea Worth Exploring?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            If you're exploring AR, VR, WebAR, AI, or an immersive technology project, let's discuss what you're trying to build.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenProjectModal}
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm transition-all shadow-xl hover:shadow-blue-500/25 flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenProjectModal}
              className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-extrabold text-sm transition-all"
            >
              Talk to Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
