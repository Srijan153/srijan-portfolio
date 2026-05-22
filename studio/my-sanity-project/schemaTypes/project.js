import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
      description: 'Briefly explain the strategy, context, and impact behind this design.',
    }),
    defineField({
      name: 'order',
      title: 'Grid Position',
      type: 'number',
      description: 'The position in the grid (1, 2, 3, etc.)',
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [{ type: 'file', options: { accept: 'video/mp4' } }],
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),
  ],
})