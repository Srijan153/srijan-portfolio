export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description / Case Study',
      type: 'text',
      description: 'Keep it concise. e.g., Context: Visual identity... Impact: Cohesive marketing...',
    },
    {
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [{ type: 'file', options: { accept: 'video/*' } }],
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Enter a number (1, 2, 3...) to control the order this appears on the website.',
    },
  ],
};