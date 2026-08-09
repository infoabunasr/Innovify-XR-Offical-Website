import { ArticleItem } from '../types';

export function setPageSeo({
  title,
  description,
  canonicalUrl,
  imageUrl,
  type = 'website',
  article,
}: {
  title: string;
  description: string;
  canonicalUrl: string;
  imageUrl?: string;
  type?: 'website' | 'article';
  article?: ArticleItem;
}) {
  if (typeof window === 'undefined') return;

  // 1. Page Title
  document.title = title;

  // 2. Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // 3. Canonical Link Tag
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', canonicalUrl);

  // 4. Open Graph Meta Tags
  const setOgTag = (property: string, content: string) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  setOgTag('og:title', title);
  setOgTag('og:description', description);
  setOgTag('og:url', canonicalUrl);
  setOgTag('og:type', type);
  if (imageUrl) {
    setOgTag('og:image', imageUrl);
  }

  // 5. JSON-LD Structured Data Injection
  let jsonLdScript = document.getElementById('innovify-jsonld');
  if (!jsonLdScript) {
    jsonLdScript = document.createElement('script');
    jsonLdScript.id = 'innovify-jsonld';
    jsonLdScript.setAttribute('type', 'application/ld+json');
    document.head.appendChild(jsonLdScript);
  }

  const schemas: any[] = [];

  // Organization Schema
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Innovify XR',
    url: 'https://innovifyxr.com',
    logo: 'https://innovifyxr.com/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/innovify-xr/',
      'https://www.instagram.com/innovifyxr01/',
      'https://www.facebook.com/innovifyxr/',
      'https://www.youtube.com/@innovifyxr01',
    ],
  };

  if (type === 'article' && article) {
    // Article / BlogPosting Schema
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl,
      },
      headline: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      image: [article.imageUrl],
      datePublished: article.date,
      dateModified: article.updatedAt || article.date,
      author: {
        '@type': 'Person',
        name: article.author.name,
        jobTitle: article.author.title,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Innovify XR',
        url: 'https://innovifyxr.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://innovifyxr.com/logo.png',
        },
      },
    };
    schemas.push(articleSchema);

    // BreadcrumbList Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://innovifyxr.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Insights',
          item: 'https://innovifyxr.com/insights',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: article.title,
          item: canonicalUrl,
        },
      ],
    };
    schemas.push(breadcrumbSchema);

    // FAQPage Schema if article has FAQ items
    if (article.faq && article.faq.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      };
      schemas.push(faqSchema);
    }
  } else {
    schemas.push(orgSchema);
  }

  jsonLdScript.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
}
