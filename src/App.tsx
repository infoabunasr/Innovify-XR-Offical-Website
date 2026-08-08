import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { TrustStrip } from './components/sections/TrustStrip';
import { CoreSolutionsSection } from './components/sections/CoreSolutionsSection';
import { WhyInnovifySection } from './components/sections/WhyInnovifySection';
import { FeaturedWorkSection } from './components/sections/FeaturedWorkSection';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { HowWeWorkSection } from './components/sections/HowWeWorkSection';
import { TechEcosystemSection } from './components/sections/TechEcosystemSection';
import { BusinessValueSection } from './components/sections/BusinessValueSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { InsightsSection } from './components/sections/InsightsSection';
import { FAQSection } from './components/sections/FAQSection';
import { FinalCTASection } from './components/sections/FinalCTASection';
import { AboutPage } from './components/AboutPage';
import { SolutionsPage } from './components/SolutionsPage';
import { IndustriesPage } from './components/IndustriesPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { InsightsPage } from './components/InsightsPage';
import { ContactPage } from './components/ContactPage';
import { LegalPages } from './components/LegalPages';
import { NotFoundPage } from './components/NotFoundPage';
import { SolutionModal } from './components/SolutionModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ProjectIntakeModal } from './components/ProjectIntakeModal';
import { SolutionItem, CaseStudy } from './types';

type ViewType =
  | 'home'
  | 'about'
  | 'solutions'
  | 'industries'
  | 'case-studies'
  | 'insights'
  | 'contact'
  | 'privacy-policy'
  | 'terms-and-conditions'
  | 'cookie-policy'
  | '404';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/contact' || hash === '#contact') return 'contact';
      if (path === '/privacy-policy') return 'privacy-policy';
      if (path === '/terms-and-conditions') return 'terms-and-conditions';
      if (path === '/cookie-policy') return 'cookie-policy';
      if (path.startsWith('/insights') || hash === '#insights') return 'insights';
      if (path.startsWith('/case-studies') || hash === '#case-studies') return 'case-studies';
      if (path.startsWith('/industries') || hash === '#industries') return 'industries';
      if (path.startsWith('/solutions') || hash === '#solutions') return 'solutions';
      if (path === '/about' || hash === '#about') return 'about';
      if (path === '/' || path === '') return 'home';
      return '404';
    }
    return 'home';
  });

  const [initialInsightSlug, setInitialInsightSlug] = useState<string | undefined>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/insights/')) {
        return path.replace('/insights/', '');
      }
    }
    return undefined;
  });

  const [initialIndustryId, setInitialIndustryId] = useState<string | undefined>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/industries/')) {
        return path.replace('/industries/', '');
      }
    }
    return undefined;
  });

  const [initialCaseStudySlug, setInitialCaseStudySlug] = useState<string | undefined>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/case-studies/')) {
        return path.replace('/case-studies/', '');
      }
    }
    return undefined;
  });

  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [isIntakeOpen, setIsIntakeOpen] = useState(false);
  const [intakeInitialService, setIntakeInitialService] = useState('');

  // Handle URL history popstate events (e.g. back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/contact' || hash === '#contact') {
        setCurrentView('contact');
      } else if (path === '/privacy-policy') {
        setCurrentView('privacy-policy');
      } else if (path === '/terms-and-conditions') {
        setCurrentView('terms-and-conditions');
      } else if (path === '/cookie-policy') {
        setCurrentView('cookie-policy');
      } else if (path.startsWith('/insights') || hash === '#insights') {
        setCurrentView('insights');
        if (path.startsWith('/insights/')) {
          setInitialInsightSlug(path.replace('/insights/', ''));
        }
      } else if (path.startsWith('/case-studies') || hash === '#case-studies') {
        setCurrentView('case-studies');
        if (path.startsWith('/case-studies/')) {
          setInitialCaseStudySlug(path.replace('/case-studies/', ''));
        }
      } else if (path.startsWith('/industries') || hash === '#industries') {
        setCurrentView('industries');
        if (path.startsWith('/industries/')) {
          setInitialIndustryId(path.replace('/industries/', ''));
        }
      } else if (path.startsWith('/solutions') || hash === '#solutions') {
        setCurrentView('solutions');
      } else if (path === '/about' || hash === '#about') {
        setCurrentView('about');
      } else if (path === '/' || path === '') {
        setCurrentView('home');
      } else {
        setCurrentView('404');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update window title and meta description when view changes
  useEffect(() => {
    if (currentView === 'home') {
      document.title = 'Innovify XR | Enterprise AR, VR, WebAR & AI Technology Company';
    } else if (currentView === 'contact') {
      document.title = 'Contact Innovify XR | Start Your AR, VR, WebAR or AI Project';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Have an AR, VR, WebAR, AI or immersive technology project in mind? Contact Innovify XR to discuss your idea, requirements and development goals.');
      }
    } else if (currentView === 'privacy-policy') {
      document.title = 'Privacy Policy | Innovify XR';
    } else if (currentView === 'terms-and-conditions') {
      document.title = 'Terms & Conditions | Innovify XR';
    } else if (currentView === 'cookie-policy') {
      document.title = 'Cookie Policy | Innovify XR';
    } else if (currentView === 'insights') {
      document.title = 'Insights on AR, VR, WebAR & AI | Innovify XR';
    } else if (currentView === 'case-studies') {
      document.title = 'Case Studies & Success Stories | Innovify XR';
    } else if (currentView === 'industries') {
      document.title = 'Industry Solutions | Innovify XR';
    } else if (currentView === 'solutions') {
      document.title = 'Spatial Computing & AI Solutions | Innovify XR';
    } else if (currentView === 'about') {
      document.title = 'About Innovify XR | Immersive Tech & AI Pioneers';
    } else if (currentView === '404') {
      document.title = '404 - Page Not Found | Innovify XR';
    }
  }, [currentView]);

  const handleOpenIntake = (serviceName?: string) => {
    handleNavigate('contact');
  };

  const handleNavigate = (
    view: ViewType,
    targetSection?: string
  ) => {
    setCurrentView(view);
    if (view === 'contact') {
      window.history.pushState({}, '', '/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'privacy-policy') {
      window.history.pushState({}, '', '/privacy-policy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'terms-and-conditions') {
      window.history.pushState({}, '', '/terms-and-conditions');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'cookie-policy') {
      window.history.pushState({}, '', '/cookie-policy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'insights') {
      const targetUrl = targetSection && targetSection.startsWith('/insights/') ? targetSection : '/insights';
      if (targetSection && targetSection.startsWith('/insights/')) {
        setInitialInsightSlug(targetSection.replace('/insights/', ''));
      }
      window.history.pushState({}, '', targetUrl);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'case-studies') {
      const targetUrl = targetSection && targetSection.startsWith('/case-studies/') ? targetSection : '/case-studies';
      if (targetSection && targetSection.startsWith('/case-studies/')) {
        setInitialCaseStudySlug(targetSection.replace('/case-studies/', ''));
      }
      window.history.pushState({}, '', targetUrl);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'industries') {
      const targetUrl = targetSection && targetSection.startsWith('/industries/') ? targetSection : '/industries';
      if (targetSection && targetSection.startsWith('/industries/')) {
        setInitialIndustryId(targetSection.replace('/industries/', ''));
      }
      window.history.pushState({}, '', targetUrl);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'solutions') {
      const targetUrl = targetSection && targetSection.startsWith('/solutions/') ? targetSection : '/solutions';
      window.history.pushState({}, '', targetUrl);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'about') {
      window.history.pushState({}, '', '/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === '404') {
      window.history.pushState({}, '', '/404');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState({}, '', '/');
      if (targetSection) {
        setTimeout(() => {
          const targetElement = document.querySelector(targetSection);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 01 — HEADER */}
      <Header
        onOpenProjectModal={() => handleOpenIntake()}
        currentView={currentView === '404' || currentView === 'privacy-policy' || currentView === 'terms-and-conditions' || currentView === 'cookie-policy' ? 'home' : currentView}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {currentView === 'contact' ? (
          <ContactPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateToSolutions={() => handleNavigate('solutions')}
            onNavigateToIndustries={() => handleNavigate('industries')}
            onNavigateToCaseStudies={() => handleNavigate('case-studies')}
            onNavigateToServiceRoute={(route) => handleNavigate('solutions', route)}
            onNavigateToIndustryRoute={(route) => handleNavigate('industries', route)}
            onNavigateToCaseStudySlug={(slug) => handleNavigate('case-studies', `/case-studies/${slug}`)}
          />
        ) : currentView === 'privacy-policy' || currentView === 'terms-and-conditions' || currentView === 'cookie-policy' ? (
          <LegalPages
            type={currentView}
            onNavigateHome={() => handleNavigate('home')}
            onNavigateToContact={() => handleNavigate('contact')}
          />
        ) : currentView === '404' ? (
          <NotFoundPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateToSolutions={() => handleNavigate('solutions')}
            onNavigateToContact={() => handleNavigate('contact')}
          />
        ) : currentView === 'insights' ? (
          <InsightsPage
            onOpenProjectModal={handleOpenIntake}
            onNavigateHome={() => handleNavigate('home')}
            onNavigateToSolutions={() => handleNavigate('solutions')}
            onNavigateToIndustries={() => handleNavigate('industries')}
            onNavigateToCaseStudies={() => handleNavigate('case-studies')}
            onNavigateToServiceRoute={(route) => handleNavigate('solutions', route)}
            onNavigateToIndustryRoute={(route) => handleNavigate('industries', route)}
            onNavigateToCaseStudySlug={(slug) => handleNavigate('case-studies', `/case-studies/${slug}`)}
            initialSlug={initialInsightSlug}
          />
        ) : currentView === 'case-studies' ? (
          <CaseStudiesPage
            onOpenProjectModal={handleOpenIntake}
            onNavigateHome={() => handleNavigate('home')}
            initialSlug={initialCaseStudySlug}
          />
        ) : currentView === 'industries' ? (
          <IndustriesPage
            onOpenIntake={handleOpenIntake}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onNavigate={handleNavigate}
            initialIndustryId={initialIndustryId}
          />
        ) : currentView === 'solutions' ? (
          <SolutionsPage
            onOpenIntake={handleOpenIntake}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onSelectSolution={(sol) => setSelectedSolution(sol)}
            onNavigateHome={(targetSection) => handleNavigate('home', targetSection)}
          />
        ) : currentView === 'about' ? (
          <AboutPage
            onOpenIntake={handleOpenIntake}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onSelectSolution={(sol) => setSelectedSolution(sol)}
            onNavigateHome={(targetSection) => handleNavigate('home', targetSection)}
          />
        ) : (
          <>
            {/* 02 — HERO SECTION */}
            <HeroSection onOpenIntake={() => handleOpenIntake()} />

            {/* 03 — TRUST / CREDIBILITY STRIP */}
            <TrustStrip />

            {/* 04 — CORE SOLUTIONS */}
            <CoreSolutionsSection onSelectSolution={(sol) => setSelectedSolution(sol)} />

            {/* 05 — WHY INNOVIFY XR */}
            <WhyInnovifySection />

            {/* 06 — FEATURED WORK (3 Required Projects Only) */}
            <FeaturedWorkSection onSelectProject={(proj) => setSelectedProject(proj)} />

            {/* 07 — INDUSTRIES */}
            <IndustriesSection onOpenIntake={(industry) => handleOpenIntake(industry ? `${industry} Solution` : undefined)} />

            {/* 08 — HOW WE WORK */}
            <HowWeWorkSection />

            {/* 09 — TECHNOLOGY ECOSYSTEM */}
            <TechEcosystemSection />

            {/* 10 — BUSINESS VALUE SECTION */}
            <BusinessValueSection onOpenIntake={() => handleOpenIntake()} />

            {/* 11 — TESTIMONIALS / SOCIAL PROOF */}
            <TestimonialsSection />

            {/* 12 — INSIGHTS */}
            <InsightsSection onNavigate={(view, section) => handleNavigate(view, section)} />

            {/* 13 — FAQ */}
            <FAQSection />

            {/* 14 — FINAL CTA */}
            <FinalCTASection onOpenIntake={() => handleOpenIntake()} />
          </>
        )}
      </main>

      {/* 15 — FOOTER */}
      <Footer
        onOpenIntake={() => handleOpenIntake()}
        onNavigate={handleNavigate}
      />

      {/* Modals & Interactive Overlays */}
      <SolutionModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onOpenIntake={(svc) => handleOpenIntake(svc)}
      />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenIntake={(prj) => handleOpenIntake(prj)}
      />

      <ProjectIntakeModal
        isOpen={isIntakeOpen}
        onClose={() => setIsIntakeOpen(false)}
        initialService={intakeInitialService}
      />
    </div>
  );
}
