import { FiImage } from 'react-icons/fi'

export default {
  name: 'imgFullPage',
  title: 'Image Full Page',
  type: 'object',
  icon: FiImage,
  fields: [
    {
      name: 'docTitle',
      title: 'Document Type',
      type: 'string',
      options: {
        list: [
          {title: 'Header', value: 'Header'},
          {title: 'Full Image', value: 'Full Image'},
          {title: 'Image + Text', value: 'Image + Text'},
          {title: 'Text + Image', value: 'Text + Image'},
          {title: 'Large Text', value: 'Large Text'},
          {title: 'Double Image', value: 'Double Image'},
          {title: 'Table', value: 'Table'}
        ]
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'altIMGfull',
      title: 'Alternative text image',
      description: 'Necessary for SEO',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'docTitle'
    }
  }
}