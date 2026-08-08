import React from 'react';
import { Logo } from './Logo';
import { Mail, Linkedin, Twitter, ArrowUpRight, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenIntake: () => void;
  onNavigate?: (view: 'home' | 'about' | 'solutions' | 'industries' | 'case-studies' | 'insights' | 'contact' | 'privacy-policy' | 'terms-and-conditions' | 'cookie-policy' | '404', targetSection?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenIntake, onNavigate }) => {
  const solutionsLinks = [
    { label: 'AR Development', view: 'solutions', href: '/solutions#ar-development' },
    { label: 'VR Development', view: 'solutions', href: '/solutions#vr-development' },
    { label: 'WebAR Development', view: 'solutions', href: '/solutions#webar-development' },
    { label: 'AI Integration', view: 'solutions', href: '/solutions#ai-integration' },
    { label: 'AI + XR Solutions', view: 'solutions', href: '/solutions#ai-xr-solutions' },
    { label: 'Mobile App Development', view: 'solutions', href: '/solutions#mobile-app-development' },
    { label: 'Web Development', view: 'solutions', href: '/solutions#web-development' },
    { label: 'Game Development', view: 'solutions', href: '/solutions#game-development' },
    { label: 'Blockchain Development', view: 'solutions', href: '/solutions#blockchain-development' },
  ];

  const industryLinks = [
    { label: 'Healthcare', view: 'industries', href: '/industries/healthcare' },
    { label: 'Manufacturing', view: 'industries', href: '/industries/manufacturing' },
    { label: 'Retail & E-commerce', view: 'industries', href: '/industries/retail' },
    { label: 'Education', view: 'industries', href: '/industries/education' },
    { label: 'Real Estate', view: 'industries', href: '/industries/real-estate' },
    { label: 'Tourism & Hospitality', view: 'industries', href: '/industries/tourism' },
  ];

  const companyLinks = [
    { label: 'About', view: 'about', href: '/about' },
    { label: 'Solutions', view: 'solutions', href: '/solutions' },
    { label: 'Industries', view: 'industries', href: '/industries' },
    { label: 'Case Studies', view: 'case-studies', href: '/case-studies' },
    { label: 'Insights', view: 'insights', href: '/insights' },
    { label: 'Contact', view: 'contact', href: '/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, view?: string) => {
    e.preventDefault();
    if (view === 'insights') {
      if (onNavigate) {
        onNavigate('insights', href);
      } else {
        window.location.pathname = '/insights';
      }
    } else if (view === 'contact') {
      if (onNavigate) {
        onNavigate('contact');
      } else {
        window.location.pathname = '/contact';
      }
    } else if (view === 'industries') {
      if (onNavigate) {
        onNavigate('industries', href);
      } else {
        window.location.pathname = '/industries';
      }
    } else if (view === 'case-studies') {
      if (onNavigate) {
        onNavigate('case-studies', href);
      } else {
        window.location.pathname = '/case-studies';
      }
    } else if (view === 'solutions') {
      if (onNavigate) {
        onNavigate('solutions', href);
      } else {
        window.location.pathname = '/solutions';
      }
    } else if (view === 'about') {
      if (onNavigate) {
        onNavigate('about');
      } else {
        window.location.pathname = '/about';
      }
    } else {
      if (onNavigate) {
        onNavigate('home', href);
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-500 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Five Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-3 space-y-4">
            <Logo size="md" />
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
              Innovify XR is an international technology company delivering spatial computing, enterprise AR/VR, WebAR, and artificial intelligence digital solutions.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Solutions
            </h4>
            <ul className="space-y-1.5 text-xs">
              {solutionsLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.view)}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Industries
            </h4>
            <ul className="space-y-1.5 text-xs">
              {industryLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.view)}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Company
            </h4>
            <ul className="space-y-1.5 text-xs">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.view)}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Let's Connect */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Connect
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href="mailto:info.innovifyxr@gmail.com"
                className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors p-2 rounded-lg bg-white border border-slate-200 w-full overflow-hidden text-ellipsis whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="truncate">info.innovifyxr@gmail.com</span>
              </a>

              <button
                onClick={onOpenIntake}
                className="w-full inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold uppercase tracking-wider text-[11px] py-2.5 rounded-full transition-all shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Innovify XR. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('privacy-policy');
                else window.location.pathname = '/privacy-policy';
              }}
              className="hover:text-slate-900 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('terms-and-conditions');
                else window.location.pathname = '/terms-and-conditions';
              }}
              className="hover:text-slate-900 transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="/cookie-policy"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('cookie-policy');
                else window.location.pathname = '/cookie-policy';
              }}
              className="hover:text-slate-900 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
