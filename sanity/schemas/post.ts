import { defineType, defineField } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
    }),
    defineField({
      name: 'featuredArticle',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt / Summary',
      type: 'text',
      rows: 3,
      description: 'Shown on article cards and in search results. Max 200 characters.',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: (Rule) => Rule.required().error('Alt text is required for accessibility'),
        }),
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Caption (optional)',
        }),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    }),
    defineField({
      name: 'estimatedReadingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      description: 'Leave blank to auto-calculate from body word count',
    }),
    defineField({
      name: 'body',
      title: 'Article Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alt Text' },
            { name: 'caption', type: 'string', title: 'Caption' },
          ],
        },
        {
          name: 'pullQuote',
          type: 'object',
          title: 'Pull Quote',
          fields: [{ name: 'quote', type: 'text', title: 'Quote Text' }],
        },
      ],
    }),
    defineField({
      name: 'crossPostLinks',
      title: 'Cross-Post Links',
      type: 'object',
      description: 'If you publish this article on other platforms, add the links here so readers can find and engage on their preferred network.',
      fields: [
        defineField({
          name: 'linkedin',
          title: 'LinkedIn Article URL',
          type: 'url',
          description: 'URL of the LinkedIn article / newsletter post',
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter / X Thread URL',
          type: 'url',
          description: 'URL of the Twitter/X thread or post',
        }),
        defineField({
          name: 'medium',
          title: 'Medium Article URL',
          type: 'url',
          description: 'URL of the Medium article',
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Meta Title' },
        { name: 'metaDescription', type: 'text', title: 'Meta Description', rows: 2 },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      status: 'status',
      publishedAt: 'publishedAt',
    },
    prepare({ title, media, status, publishedAt }) {
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString('en-CA') : 'No date'
      return {
        title,
        subtitle: `${status === 'published' ? '✅' : '📝'} ${status} · ${date}`,
        media,
      }
    },
  },
})
