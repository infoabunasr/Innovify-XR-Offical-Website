import { sanityClient, isSanityConfigured } from './sanity';
import { urlForImage } from './sanityImage';
import { ArticleItem } from '../types';

// Lightweight projection for listing cards
export const ALL_ARTICLES_QUERY = `
*[_type == "article" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  featuredImage,
  "author": author->{name, role, "avatar": profileImage.asset->url},
  "category": category->name,
  "categorySlug": category->slug.current,
  tags,
  isFeatured,
  publishedAt,
  updatedAt,
  seoTitle,
  metaDescription,
  canonicalUrl
}
`;

// Detailed projection for full article view
export const ARTICLE_BY_SLUG_QUERY = `
*[_type == "article" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  featuredImage,
  "author": author->{name, role, bio, linkedin, "avatar": profileImage.asset->url},
  "category": category->name,
  "categorySlug": category->slug.current,
  tags,
  isFeatured,
  publishedAt,
  updatedAt,
  content,
  seoTitle,
  metaDescription,
  canonicalUrl,
  relatedServices,
  relatedIndustries,
  faq,
  "relatedArticles": relatedArticles[]->{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    featuredImage,
    "category": category->name,
    publishedAt
  }
}
`;

// Calculate estimated read time from portable text or plain text
function calculateReadTime(textOrContent: any): string {
  if (!textOrContent) return '5 min read';
  let totalWords = 0;
  if (typeof textOrContent === 'string') {
    totalWords = textOrContent.trim().split(/\s+/).length;
  } else if (Array.isArray(textOrContent)) {
    textOrContent.forEach((block) => {
      if (block.children && Array.isArray(block.children)) {
        block.children.forEach((child: any) => {
          if (child.text) {
            totalWords += child.text.trim().split(/\s+/).length;
          }
        });
      }
    });
  }
  const minutes = Math.max(1, Math.ceil(totalWords / 200));
  return `${minutes} min read`;
}

// Convert raw Sanity article payload into ArticleItem interface
export function transformSanityArticle(doc: any): ArticleItem {
  if (!doc) return null as any;

  const imageUrl = doc.featuredImage
    ? urlForImage(doc.featuredImage)?.url() || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
    : 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80';

  const categoryName = doc.category || 'Spatial Computing';

  // Determine topic based on category or tags
  let topic: ArticleItem['topic'] = 'AR';
  const catLower = categoryName.toLowerCase();
  if (catLower.includes('webar')) topic = 'WebAR';
  else if (catLower.includes('vr')) topic = 'VR';
  else if (catLower.includes('ai') && catLower.includes('xr')) topic = 'AI + XR';
  else if (catLower.includes('ai')) topic = 'AI';
  else if (catLower.includes('business') || catLower.includes('strategy')) topic = 'Business & Strategy';
  else if (catLower.includes('industry')) topic = 'Industries';
  else if (catLower.includes('tech')) topic = 'Technology';

  const dateFormatted = doc.publishedAt
    ? new Date(doc.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : 'Published Recently';

  const readTimeFormatted = calculateReadTime(doc.content || doc.excerpt);

  return {
    id: doc._id || doc.slug,
    slug: doc.slug,
    title: doc.title,
    category: categoryName,
    topic,
    contentType: 'Technology Guide',
    excerpt: doc.excerpt || '',
    readTime: readTimeFormatted,
    date: dateFormatted,
    updatedAt: doc.updatedAt ? new Date(doc.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : undefined,
    author: {
      name: doc.author?.name || 'Innovify XR Engineering',
      title: doc.author?.role || 'Spatial Computing & AI Team',
      avatar: doc.author?.avatar,
    },
    imageUrl,
    tags: doc.tags || ['XR', 'Spatial Computing', 'AI'],
    isFeatured: Boolean(doc.isFeatured),
    seoTitle: doc.seoTitle || `${doc.title} | Innovify XR`,
    seoDescription: doc.metaDescription || doc.excerpt,
    canonicalUrl: doc.canonicalUrl || `https://innovifyxr.com/insights/${doc.slug}`,
    portableTextContent: doc.content,
    faq: doc.faq,
    relatedServices: doc.relatedServices,
    relatedIndustries: doc.relatedIndustries,
  };
}

export async function fetchSanityArticles(): Promise<ArticleItem[] | null> {
  if (!isSanityConfigured || !sanityClient) return null;
  try {
    const rawArticles = await sanityClient.fetch(ALL_ARTICLES_QUERY);
    if (!Array.isArray(rawArticles) || rawArticles.length === 0) return null;
    return rawArticles.map(transformSanityArticle);
  } catch (err) {
    console.error('Failed to fetch articles from Sanity:', err);
    return null;
  }
}

export async function fetchSanityArticleBySlug(slug: string): Promise<ArticleItem | null> {
  if (!isSanityConfigured || !sanityClient) return null;
  try {
    const rawDoc = await sanityClient.fetch(ARTICLE_BY_SLUG_QUERY, { slug });
    if (!rawDoc) return null;
    return transformSanityArticle(rawDoc);
  } catch (err) {
    console.error(`Failed to fetch article slug "${slug}" from Sanity:`, err);
    return null;
  }
}
