import React, { useState } from 'react';
import { X, CheckCircle, Send, Sparkles, Building, Mail, User, Briefcase, Calendar, DollarSign } from 'lucide-react';

interface ProjectIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ProjectIntakeModal: React.FC<ProjectIntakeModalProps> = ({
  isOpen,
  onClose,
  initialService = ''
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    serviceInterest: initialService || 'AR Development',
    industry: 'Healthcare',
    budget: '$25k - $50k',
    timeline: '1 - 3 months',
    summary: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          company: formData.companyName,
          services: formData.serviceInterest,
          industry: formData.industry,
          budget: formData.budget,
          timeline: formData.timeline,
          description: formData.summary || 'Inquiry submitted via quick project intake modal.',
          consent: true,
          pageUrl: window.location.href,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Failed to send inquiry. Please try again or email us directly.');
      }
    } catch (err) {
      console.error('Error submitting intake form:', err);
      setErrorMessage('Network error occurred. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const servicesList = [
    'AR Development',
    'VR Development',
    'WebAR Development',
    'AI Integration',
    'AI + XR Solutions',
    'Mobile App Development',
    'Web Development',
    'Game Development',
    'Blockchain Development'
  ];

  const industriesList = [
    'Healthcare',
    'Manufacturing',
    'Retail & E-commerce',
    'Education',
    'Real Estate',
    'Tourism & Hospitality',
    'Other Industry'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden my-6 text-slate-900">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-950 font-heading">Start Your Project</h2>
              <p className="text-xs text-slate-500 font-medium">Innovify XR Enterprise Project Inquiry</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full transition-colors focus:outline-none"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-950 font-heading">Inquiry Received</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Thank you for reaching out to Innovify XR. Our technical lead will review your project requirements and respond to <span className="text-blue-600 font-semibold">{formData.email}</span> within 24 business hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold uppercase tracking-wider text-xs px-6 py-3 rounded-full transition-all shadow-2xs"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {errorMessage && (
              <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {errorMessage}
              </div>
            )}
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 font-mono mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 font-mono mb-1.5">
                  Work Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="s.jenkins@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Company & Primary Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 font-mono mb-1.5">
                  Company / Organization
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="e.g. Apex Healthcare Ltd."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 font-mono mb-1.5">
                  Primary Capability Needed *
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white appearance-none"
                  >
                    {servicesList.map((service) => (
                      <option key={service} value={service} className="bg-white text-slate-900">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Industry & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 font-mono mb-1.5">
                  Industry Vertical
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                >
                  {industriesList.map((ind) => (
                    <option key={ind} value={ind} className="bg-white text-slate-900">
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 font-mono mb-1.5">
                  Estimated Budget Range
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white appearance-none"
                  >
                    <option value="$10k - $25k">$10,000 - $25,000</option>
                    <option value="$25k - $50k">$25,000 - $50,000</option>
                    <option value="$50k - $100k">$50,000 - $100,000</option>
                    <option value="$100k+">$100,000 Enterprise</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 font-mono mb-1.5">
                Brief Description of Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Describe your objectives, target audience, or desired timeline..."
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider text-xs py-3.5 rounded-full transition-all shadow-2xs disabled:opacity-50"
              >
                {loading ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Enterprise Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
