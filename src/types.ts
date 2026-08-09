export interface SolutionItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'primary' | 'secondary';
  badge: string;
  iconName: string;
  features: string[];
  useCases: string[];
  ctaText: string;
  route: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  industry: string;
  technology: string;
  tags: string[];
  description: string;
  longDescription: string;
  imageUrl: string;
  galleryImages?: string[];
  metrics?: { label: string; value: string }[];
  deliverables: string[];
  technologies: string[];
  demoType: '3d-vr' | '3d-ar' | 'interactive-view';
  ctaText: string;
  isFeaturedHomepage?: boolean;
  isFeaturedPortfolio?: boolean;
  route: string;
  challenge: string;
  solution: string;
  experience: string;
  outcome: string;
  developmentProcess?: string[];
  disclaimer?: string;
  isConcept?: boolean;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  iconName: string;
  keyApplications: string[];
  route: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface ArticleSection {
  id: string;
  heading: string;
  content: string;
  keyTakeaways?: string[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  quote?: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  topic: 'AR' | 'VR' | 'WebAR' | 'AI' | 'AI + XR' | 'Industries' | 'Business & Strategy' | 'Technology';
  contentType: 'Technology Guide' | 'Industry Insight' | 'Business & Strategy' | 'Emerging Technology';
  excerpt: string;
  readTime: string;
  date: string;
  updatedAt?: string;
  author: {
    name: string;
    title: string;
    avatar?: string;
  };
  imageUrl: string;
  tags: string[];
  isFeatured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  contentSections?: ArticleSection[];
  relatedServices?: { name: string; route: string }[];
  relatedIndustries?: { name: string; route: string }[];
  relatedCaseStudyId?: string;
  portableTextContent?: any[];
  faq?: { question: string; answer: string }[];
  canonicalUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface LeadFormData {
  fullName: string;
  email: string;
  companyName: string;
  serviceInterest: string;
  industry: string;
  projectBudget: string;
  timeline: string;
  projectSummary: string;
}
