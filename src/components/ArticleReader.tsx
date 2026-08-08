import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BookOpen,
  Tag,
  Layers,
  ChevronDown,
  ChevronUp,
  Building2,
  Cpu,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { ArticleItem } from '../types';
import { ALL_CASE_STUDIES } from '../data';

interface ArticleReaderProps {
  article: ArticleItem;
  allArticles: ArticleItem[];
  onBackToInsights: () => void;
  onOpenArticle: (article: ArticleItem) => void;
  onOpenProjectModal: () => void;
  onNavigateToService?: (route: string) => void;
  onNavigateToIndustry?: (route: string) => void;
  onNavigateToCaseStudy?: (slug: string) => void;
}

export const ArticleReader: React.FC<ArticleReaderProps> = ({
  article,
  allArticles,
  onBackToInsights,
  onOpenArticle,
  onOpenProjectModal,
  onNavigateToService,
  onNavigateToIndustry,
  onNavigateToCaseStudy,
}) => {
  const [isTocOpenMobile, setIsTocOpenMobile] = useState(false);
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');
  const [copied, setCopied] = useState(false);

  // Related case study lookup
  const relatedCaseStudy = article.relatedCaseStudyId
    ? ALL_CASE_STUDIES.find(cs => cs.id === article.relatedCaseStudyId || cs.slug === article.relatedCaseStudyId)
    : undefined;

  // Filter 3 related articles
  const relatedArticles = allArticles
    .filter(a => a.id !== article.id && (a.topic === article.topic || a.category === article.category))
    .slice(0, 3);

  // Handle section scrolling
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveHeadingId(id);
    }
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article]);

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* Article Header & Breadcrumbs */}
      <div className="bg-white border-b border-slate-200/80 pt-28 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button
              onClick={onBackToInsights}
              className="hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Insights Hub
            </button>
            <span>/</span>
            <span className="text-blue-600">{article.topic}</span>
            <span>/</span>
            <span className="text-slate-400 truncate max-w-[200px]">{article.title}</span>
          </nav>

          {/* Topic & Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold font-mono tracking-wide uppercase border border-blue-100">
              {article.topic}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              {article.contentType}
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-slate-500 text-xs font-medium">{article.category}</span>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight leading-tight">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            {article.excerpt}
          </p>

          {/* Meta Bar */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                IXR
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{article.author.name}</div>
                <div className="text-xs text-slate-500">{article.author.title}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>{article.readTime}</span>
              </div>
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Share article"
              >
                <Share2 className="w-3.5 h-3.5 text-slate-500" />
                {copied ? 'Link Copied!' : 'Share'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div className="relative aspect-[21/9] sm:aspect-[2/1] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>
      </div>

      {/* Main Body + Table of Contents Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Sticky Table of Contents (Desktop) */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-28 bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              Table of Contents
            </div>
            <nav className="space-y-1.5">
              {article.contentSections?.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block text-left text-xs leading-snug w-full transition-colors font-medium py-1 px-2 rounded-md ${
                    activeHeadingId === section.id
                      ? 'bg-blue-50 text-blue-700 font-bold border-l-2 border-blue-600'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {section.heading}
                </button>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={onOpenProjectModal}
                className="w-full py-2.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>Discuss This Topic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </aside>

        {/* Article Body Content */}
        <article className="lg:col-span-9 space-y-10">
          {/* Mobile Collapsible TOC */}
          {article.contentSections && article.contentSections.length > 0 && (
            <div className="lg:hidden bg-white rounded-xl border border-slate-200 p-4 space-y-2">
              <button
                onClick={() => setIsTocOpenMobile(!isTocOpenMobile)}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 font-mono"
              >
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  Table of Contents
                </span>
                {isTocOpenMobile ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {isTocOpenMobile && (
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  {article.contentSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        scrollToSection(section.id);
                        setIsTocOpenMobile(false);
                      }}
                      className="block text-left text-xs text-slate-600 hover:text-blue-600 py-1 w-full"
                    >
                      {section.heading}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Sections Render */}
          {article.contentSections?.map((section) => (
            <section key={section.id} id={section.id} className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                {section.heading}
              </h2>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                {section.content}
              </p>

              {/* Key Takeaways Box */}
              {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-100 space-y-3 my-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-900 font-mono flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    Key Strategic Takeaways
                  </div>
                  <ul className="space-y-2">
                    {section.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="text-sm text-slate-700 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quote Highlight */}
              {section.quote && (
                <blockquote className="p-6 rounded-2xl bg-slate-900 text-white border-l-4 border-blue-500 my-6 shadow-md space-y-2">
                  <p className="text-base sm:text-lg font-serif italic leading-relaxed text-slate-100">
                    "{section.quote}"
                  </p>
                  <cite className="block text-xs font-mono font-bold text-blue-400 not-italic uppercase tracking-wider">
                    — Innovify XR Insights Perspective
                  </cite>
                </blockquote>
              )}

              {/* Data Table */}
              {section.tableData && (
                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs my-6">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        {section.tableData.headers.map((h, idx) => (
                          <th key={idx} className="px-4 py-3 text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {section.tableData.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/50 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-4 py-3 text-xs sm:text-sm text-slate-700 font-medium">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" />
                Tags:
              </span>
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Connected Solution Services & Industries */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            {article.relatedServices && article.relatedServices.length > 0 && (
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  Related Enterprise Solutions
                </div>
                <div className="space-y-1.5">
                  {article.relatedServices.map((svc, idx) => (
                    <button
                      key={idx}
                      onClick={() => onNavigateToService && onNavigateToService(svc.route)}
                      className="w-full text-left p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-xs font-bold text-slate-800 hover:text-blue-700 transition-all flex items-center justify-between"
                    >
                      <span>{svc.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {article.relatedIndustries && article.relatedIndustries.length > 0 && (
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  Industry Applications
                </div>
                <div className="space-y-1.5">
                  {article.relatedIndustries.map((ind, idx) => (
                    <button
                      key={idx}
                      onClick={() => onNavigateToIndustry && onNavigateToIndustry(ind.route)}
                      className="w-full text-left p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-xs font-bold text-slate-800 hover:text-blue-700 transition-all flex items-center justify-between"
                    >
                      <span>{ind.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Connected Case Study Card */}
          {relatedCaseStudy && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 text-[10px] font-mono uppercase tracking-wider font-bold border border-blue-500/30">
                  Real-World Case Study Connection
                </span>
                <Sparkles className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-heading">{relatedCaseStudy.title}</h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">{relatedCaseStudy.description}</p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="text-xs text-blue-400 font-mono font-semibold">
                  {relatedCaseStudy.industry} • {relatedCaseStudy.technology}
                </div>
                <button
                  onClick={() => onNavigateToCaseStudy && onNavigateToCaseStudy(relatedCaseStudy.slug)}
                  className="py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
                >
                  <span>Explore Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* In-Article Conversion Banner */}
          <div className="p-8 rounded-2xl bg-blue-600 text-white space-y-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
            <div className="space-y-1 max-w-lg">
              <h3 className="text-xl font-bold font-heading">Have a Similar Project in Mind?</h3>
              <p className="text-xs sm:text-sm text-blue-100">
                Discuss how Innovify XR can tailor this technology to your exact enterprise operational workflows.
              </p>
            </div>
            <button
              onClick={onOpenProjectModal}
              className="px-6 py-3 rounded-xl bg-white text-blue-900 hover:bg-slate-100 font-extrabold text-sm transition-all shadow-md shrink-0 inline-flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </button>
          </div>

          {/* Related Articles Grid */}
          {relatedArticles.length > 0 && (
            <div className="space-y-6 pt-10 border-t border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 font-heading">Related Insights & Guides</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onOpenArticle(rel)}
                    className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                        <img
                          src={rel.imageUrl}
                          alt={rel.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-900/80 text-white text-[10px] font-mono font-bold">
                          {rel.topic}
                        </span>
                      </div>
                      <div className="p-4 space-y-2">
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {rel.title}
                        </h4>
                        <p className="text-xs text-slate-600 line-clamp-2">{rel.excerpt}</p>
                      </div>
                    </div>
                    <div className="p-4 pt-0 text-[11px] font-semibold text-blue-600 flex items-center gap-1">
                      <span>Read Insight</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};
