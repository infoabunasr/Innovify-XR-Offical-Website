import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { urlForImage } from '../lib/sanityImage';

interface PortableTextRendererProps {
  value: any[];
}

// Helper to convert heading text to URL slug for Table of Contents anchors
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export const PortableTextRenderer: React.FC<PortableTextRendererProps> = ({ value }) => {
  if (!value || !Array.isArray(value)) return null;

  const components: PortableTextComponents = {
    block: {
      h2: ({ children }) => {
        const text = Array.isArray(children) ? children.join('') : String(children || '');
        const id = slugifyHeading(text);
        return (
          <h2 id={id} className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight mt-10 mb-4 scroll-mt-28">
            {children}
          </h2>
        );
      },
      h3: ({ children }) => (
        <h3 className="text-xl font-bold text-slate-900 font-heading mt-8 mb-3">
          {children}
        </h3>
      ),
      normal: ({ children }) => (
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-5">
          {children}
        </p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="p-6 rounded-2xl bg-slate-900 text-white border-l-4 border-blue-500 my-6 shadow-md">
          <p className="text-base sm:text-lg font-serif italic leading-relaxed text-slate-100">
            "{children}"
          </p>
          <cite className="block text-xs font-mono font-bold text-blue-400 not-italic uppercase tracking-wider mt-2">
            — Innovify XR Insights Perspective
          </cite>
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc pl-6 space-y-2.5 my-5 text-slate-700 text-base sm:text-lg leading-relaxed">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal pl-6 space-y-2.5 my-5 text-slate-700 text-base sm:text-lg leading-relaxed">
          {children}
        </ol>
      ),
    },
    marks: {
      strong: ({ children }) => <strong className="font-bold text-slate-900">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => (
        <code className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-blue-700 text-sm font-mono">
          {children}
        </code>
      ),
      link: ({ value, children }) => {
        const target = value?.blank ? '_blank' : '_self';
        const rel = value?.blank ? 'noreferrer noopener' : undefined;
        return (
          <a
            href={value?.href}
            target={target}
            rel={rel}
            className="text-blue-600 font-semibold hover:text-blue-800 underline decoration-blue-300 underline-offset-2 transition-colors"
          >
            {children}
          </a>
        );
      },
    },
    types: {
      image: ({ value }) => {
        const imageUrl = urlForImage(value)?.url();
        if (!imageUrl) return null;
        return (
          <figure className="my-8 space-y-2">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={imageUrl}
                alt={value.alt || 'Innovify XR Article Image'}
                loading="lazy"
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
            {value.caption && (
              <figcaption className="text-center text-xs text-slate-500 italic">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      },
    },
  };

  return (
    <div className="prose prose-slate max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
};
