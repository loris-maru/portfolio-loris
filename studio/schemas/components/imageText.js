import { FiTrello } from 'react-icons/fi'

export default {
  name: 'imgText',
  title: 'Image + Text',
  type: 'object',
  icon: FiTrello,
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
      name: 'altIMG',
      title: 'Alternative text image',
      description: 'Necessary for SEO',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'docTitle'
    }
  }
}