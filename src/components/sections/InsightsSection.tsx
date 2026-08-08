import React, { useState } from 'react';
import { INSIGHTS_ARTICLES } from '../../data';
import { ArticleItem } from '../../types';
import { ArrowRight, BookOpen, Clock, X } from 'lucide-react';

interface InsightsSectionProps {
  onNavigate?: (view: 'insights', slug?: string) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onNavigate }) => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const handleArticleClick = (article: ArticleItem) => {
    if (onNavigate) {
      onNavigate('insights', `/insights/${article.slug}`);
    } else {
      setSelectedArticle(article);
    }
  };

  return (
    <section id="insights" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100">
            Thought Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading">
            Ideas, Insights & Innovation
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Articles and strategic analysis on augmented reality, virtual reality, WebXR, and enterprise AI transformation.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="group bg-slate-50 border border-slate-200/90 rounded-xl overflow-hidden flex flex-col justify-between hover:border-blue-600 hover:bg-white transition-all duration-300 hover:shadow-xs"
            >
              <div className="space-y-4">
                {/* Featured Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100 border-b border-slate-200">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-blue-600 border border-slate-200 shadow-2xs">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 font-heading group-hover:text-blue-600 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleArticleClick(article)}
                  className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors pt-3 border-t border-slate-200"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Insights Button */}
        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate && onNavigate('insights')}
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md inline-flex items-center gap-2"
          >
            <span>Explore Insights Hub</span>
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </button>
        </div>

      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6 text-slate-900 shadow-xl">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100">
              {selectedArticle.category}
            </span>
            <h3 className="text-2xl font-bold text-slate-950 font-heading">{selectedArticle.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{selectedArticle.excerpt}</p>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-500">
              Full executive whitepaper publication available for download in our enterprise repository.
            </div>
            <button
              onClick={() => setSelectedArticle(null)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold uppercase tracking-wider py-3 rounded-lg text-xs"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
