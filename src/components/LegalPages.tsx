import React, { useEffect } from 'react';
import { Shield, FileText, Cookie, ArrowLeft, Mail, ChevronRight } from 'lucide-react';

interface LegalPagesProps {
  type: 'privacy-policy' | 'terms-and-conditions' | 'cookie-policy';
  onNavigateHome: () => void;
  onNavigateToContact: () => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({
  type,
  onNavigateHome,
  onNavigateToContact,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (type === 'privacy-policy') {
      document.title = 'Privacy Policy | Innovify XR';
    } else if (type === 'terms-and-conditions') {
      document.title = 'Terms & Conditions | Innovify XR';
    } else {
      document.title = 'Cookie Policy | Innovify XR';
    }
  }, [type]);

  const lastUpdated = 'August 7, 2026';

  return (
    <div className="pt-24 pb-20 bg-slate-900 text-slate-100 min-h-screen">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 border-b border-slate-800">
        <div className="flex items-center gap-3 text-sm text-slate-400 mb-6">
          <button
            onClick={onNavigateHome}
            className="hover:text-white flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Home
          </button>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <span className="text-blue-400 font-medium capitalize">
            {type.replace(/-/g, ' ')}
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
          {type === 'privacy-policy' && <Shield className="w-3.5 h-3.5" />}
          {type === 'terms-and-conditions' && <FileText className="w-3.5 h-3.5" />}
          {type === 'cookie-policy' && <Cookie className="w-3.5 h-3.5" />}
          <span>Legal & Transparency</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          {type === 'privacy-policy' && 'Privacy Policy'}
          {type === 'terms-and-conditions' && 'Terms & Conditions'}
          {type === 'cookie-policy' && 'Cookie Policy'}
        </h1>
        <p className="text-slate-400 text-sm">Last updated: {lastUpdated}</p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 leading-relaxed text-slate-300 space-y-10 text-sm sm:text-base">
        {type === 'privacy-policy' && (
          <>
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">1. Introduction</h2>
              <p>
                At Innovify XR (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website at innovifyxr.com or submit a project inquiry through our forms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when expressing interest in our services or submitting a project inquiry.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong className="text-white">Contact Data:</strong> Full Name, Work Email Address, Phone Number, Company Name, and Country/Region.</li>
                <li><strong className="text-white">Project Information:</strong> Services required, industry, project stage, scope description, estimated budget, timeline, and uploaded document attachments.</li>
                <li><strong className="text-white">Technical & Usage Data:</strong> IP address, browser type, operating system, referring URLs, and page navigation history collected automatically via standard analytical technologies.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
              <p>We use the collected information for legitimate business purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Evaluating and responding to your project inquiries or request for proposals.</li>
                <li>Communicating regarding prospective development engagements or technology consultations.</li>
                <li>Improving our website performance, user experience, and service offerings.</li>
                <li>Ensuring network security, fraud prevention, and technical integrity of our systems.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">4. Data Sharing & Third Parties</h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers (e.g. secure cloud hosting, transactional email delivery) who operate under strict confidentiality agreements solely to facilitate our operational workflows.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">5. Data Retention & Security</h2>
              <p>
                We implement robust technical and organizational security measures to protect your personal information from unauthorized access, alteration, or disclosure. We retain inquiry records only as long as necessary to fulfill project discussion goals or meet legal accounting obligations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">6. Your Data Rights</h2>
              <p>
                Depending on your location, you may have rights under privacy regulations (such as GDPR or CCPA) to access, correct, delete, or restrict processing of your personal data. To exercise any of these rights, please contact us at <a href="mailto:info.innovifyxr@gmail.com" className="text-blue-400 hover:underline">info.innovifyxr@gmail.com</a>.
              </p>
            </section>
          </>
        )}

        {type === 'terms-and-conditions' && (
          <>
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
              <p>
                By accessing or using the Innovify XR website, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with all of these terms, you are expressly prohibited from using the site and must discontinue use immediately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the website, design, source code, functionality, software, 3D assets, text, graphics, and trademarks are owned or licensed by Innovify XR and are protected by copyright and intellectual property laws. Content on this site is provided for informational and business evaluation purposes only.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">3. User Conduct & Project Inquiries</h2>
              <p>
                When submitting information through our project intake or contact forms, you warrant that all information provided is accurate, truthful, and non-confidential unless protected by a mutually signed Non-Disclosure Agreement (NDA). You agree not to submit malicious software, automated spam, or copyrighted material belonging to third parties without authorization.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">4. Professional Services Disclaimer</h2>
              <p>
                Information published on this website regarding AR, VR, WebAR, and AI technologies does not constitute a formal binding development agreement. Official development projects, scope milestones, pricing, deliverables, and intellectual property transfers are governed exclusively by executed master service agreements (MSAs) and statements of work (SOWs).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">5. Limitation of Liability</h2>
              <p>
                In no event will Innovify XR or its directors, employees, or agents be liable to you or any third party for direct, indirect, consequential, or incidental damages arising from your use of the website or inability to access the platform.
              </p>
            </section>
          </>
        )}

        {type === 'cookie-policy' && (
          <>
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide customized user experiences, and supply reporting information to site owners.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">2. How We Use Cookies</h2>
              <p>We use essential and functional storage mechanisms to support website operations:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong className="text-white">Essential Cookies:</strong> Required for fundamental site navigation, security features, and form state preservation.</li>
                <li><strong className="text-white">Preference Cookies:</strong> Store session parameters, active tabs, and user interface preferences across pages.</li>
                <li><strong className="text-white">Analytics Cookies:</strong> Collect aggregated, non-personally identifiable traffic metrics to measure page responsiveness and conversion performance.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">3. Managing Your Cookie Preferences</h2>
              <p>
                Most web browsers allow you to control or disable cookies through browser setting preferences. Disabling essential cookies may impair your ability to interact with certain interactive features or form submission capabilities on our website.
              </p>
            </section>
          </>
        )}

        {/* Contact Banner */}
        <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-12">
          <div>
            <h3 className="text-white font-semibold text-lg">Have questions about our policies?</h3>
            <p className="text-slate-400 text-sm">Reach out to our team directly for legal or privacy inquiries.</p>
          </div>
          <button
            onClick={onNavigateToContact}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
          >
            <Mail className="w-4 h-4" /> Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};
