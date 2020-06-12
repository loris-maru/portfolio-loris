import { FiServer } from 'react-icons/fi'

export default {
  name: 'doubleImage',
  title: 'Double Image',
  type: 'object',
  icon: FiServer,
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
      name: 'firstImage',
      title: 'First Image',
      type: 'image'
    },
    {
      name: 'altOne',
      title: 'Alternative text image 1',
      description: 'Necessary for SEO',
      type: 'string'
    },
    {
      name: 'secondImage',
      title: 'Second Image',
      type: 'image'
    },
    {
      name: 'altTwo',
      title: 'Alternative text image 2',
      description: 'Necessary for SEO',
      type: 'string'
    },
  ],
  preview: {
    select: {
      title: 'docTitle'
    }
  }
}