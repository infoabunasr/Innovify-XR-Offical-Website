import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenProjectModal: () => void;
  currentView?: string;
  onNavigate?: (view: any, targetSection?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenProjectModal,
  currentView = 'home',
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', view: 'home', href: '#home' },
    { label: 'Solutions', view: 'solutions', href: '/solutions' },
    { label: 'Industries', view: 'industries', href: '/industries' },
    { label: 'Case Studies', view: 'case-studies', href: '/case-studies' },
    { label: 'Insights', view: 'insights', href: '/insights' },
    { label: 'About', view: 'about', href: '/about' },
    { label: 'Contact', view: 'contact', href: '/contact' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    linkView: string,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (linkView === 'insights') {
      if (onNavigate) {
        onNavigate('insights');
      } else {
        window.location.pathname = '/insights';
      }
    } else if (linkView === 'contact') {
      if (onNavigate) {
        onNavigate('contact');
      } else {
        window.location.pathname = '/contact';
      }
    } else if (linkView === 'industries') {
      if (onNavigate) {
        onNavigate('industries');
      } else {
        window.location.pathname = '/industries';
      }
    } else if (linkView === 'case-studies') {
      if (onNavigate) {
        onNavigate('case-studies');
      } else {
        window.location.pathname = '/case-studies';
      }
    } else if (linkView === 'solutions') {
      if (onNavigate) {
        onNavigate('solutions');
      } else {
        window.location.pathname = '/solutions';
      }
    } else if (linkView === 'about') {
      if (onNavigate) {
        onNavigate('about');
      } else {
        window.location.pathname = '/about';
      }
    } else {
      if (onNavigate) {
        onNavigate('home', href);
      } else {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3.5 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home', '#home')}
          className="group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1"
        >
          <Logo size="md" variant="light" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-slate-50/80 backdrop-blur-md border border-slate-150 rounded-full px-3.5 py-1.5 shadow-xs">
          {navLinks.map((link) => {
            const isActive =
              (link.view === 'insights' && currentView === 'insights') ||
              (link.view === 'contact' && currentView === 'contact') ||
              (link.view === 'industries' && currentView === 'industries') ||
              (link.view === 'case-studies' && currentView === 'case-studies') ||
              (link.view === 'solutions' && currentView === 'solutions') ||
              (link.view === 'about' && currentView === 'about') ||
              (link.view === 'home' && currentView === 'home' && link.label === 'Home');

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.view, link.href)}
                className={`text-sm font-medium px-3.5 py-1.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-2xs'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenProjectModal}
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-200 group-hover:rotate-12 transition-transform" />
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-slate-700 hover:text-blue-600 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-6 shadow-xl transition-all animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.view, link.href)}
                className="text-base font-medium text-slate-800 hover:text-blue-600 hover:bg-slate-50 px-4 py-3 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-150 mt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenProjectModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold uppercase tracking-wider text-xs py-3.5 rounded-full shadow-md transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
