
export const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'image1',
      title: 'Image 1',
      type: 'image',
      options: {
        hotspot: true, // Image cropping ke liye
      },
    },
    {
      name: 'description1',
      title: 'Description 1',
      type: 'text',
    },
    {
      name: 'heading1',
      title: 'Heading 1',
      type: 'string',
    },
    {
      name: 'description2',
      title: 'Description 2',
      type: 'text',
    },
    {
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heading2',
      title: 'Heading 2',
      type: 'string',
    },
    {
      name: 'description3',
      title: 'Description 3',
      type: 'text',
    },
    {
      name: 'heading4',
      title: 'Heading 4',
      type: 'string',
    },
    {
      name: 'description4',
      title: 'Description 4',
      type: 'text',
    },
    {
      name: 'heading5',
      title: 'Heading 5',
      type: 'string',
    },
    {
      name: 'description5',
      title: 'Description 5',
      type: 'text',
    },
  ],
};
