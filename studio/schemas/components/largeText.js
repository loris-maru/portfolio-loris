import { FiAlignJustify } from 'react-icons/fi'

export default {
  name: 'largeText',
  title: 'Large Text',
  type: 'object',
  icon: FiAlignJustify,
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