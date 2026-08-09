import { defineType, defineField } from 'sanity';

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).error('Title is required and must be at least 5 characters.'),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Slug is required.'),
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Excerpt / Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(300).error('Excerpt is required (max 300 characters).'),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text (Alt Text)',
          validation: (Rule) => Rule.required().error('Alt text is required for accessibility and SEO.'),
        },
      ],
      validation: (Rule) => Rule.required().error('Featured image is required.'),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required().error('Author is required.'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required().error('Category is required.'),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured Article?',
      type: 'boolean',
      description: 'Highlight this article as the main featured article on the Insights hub.',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule) => Rule.required().error('Published date is required.'),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated Date (Optional)',
      type: 'datetime',
    }),
    defineField({
      name: 'content',
      title: 'Article Body Content (Portable Text)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2 (Section Heading)', value: 'h2' },
            { title: 'H3 (Subheading)', value: 'h3' },
            { title: 'Quote Block', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet List', value: 'bullet' },
            { title: 'Numbered List', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'string',
                    title: 'URL / Path (e.g., /services/webar-development or https://...)',
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption (Optional)',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().error('Article body content is required.'),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Meta Title',
      type: 'string',
      description: 'Search engine title tag. Recommended: 50-60 characters.',
      validation: (Rule) => Rule.required().max(70).error('SEO Title is required (max 70 characters).'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 2,
      description: 'Search engine snippet summary. Recommended: 120-160 characters.',
      validation: (Rule) => Rule.required().max(160).error('Meta Description is required (max 160 characters).'),
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL (Optional)',
      type: 'url',
      description: 'Defaults to https://innovifyxr.com/insights/{slug} if left empty.',
    }),
    defineField({
      name: 'relatedServices',
      title: 'Related Enterprise Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Service Name (e.g. WebAR Development)' },
            { name: 'route', type: 'string', title: 'Route Path (e.g. /solutions/webar-development)' },
          ],
        },
      ],
    }),
    defineField({
      name: 'relatedIndustries',
      title: 'Related Industry Applications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Industry Name (e.g. Healthcare)' },
            { name: 'route', type: 'string', title: 'Route Path (e.g. /industries/healthcare)' },
          ],
        },
      ],
    }),
    defineField({
      name: 'relatedArticles',
      title: 'Related Articles',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'article' }] }],
    }),
    defineField({
      name: 'faq',
      title: 'Article FAQ (Structured Data & On-Page)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', type: 'string', title: 'Question', validation: (Rule) => Rule.required() },
            { name: 'answer', type: 'text', title: 'Answer', validation: (Rule) => Rule.required() },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featuredImage',
      date: 'publishedAt',
    },
    prepare({ title, author, media, date }) {
      return {
        title,
        subtitle: `${author ? author : 'No author'} — ${date ? new Date(date).toLocaleDateString() : 'Draft'}`,
        media,
      };
    },
  },
});
