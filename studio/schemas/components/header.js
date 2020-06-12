import { FiCreditCard } from 'react-icons/fi'

export default {
  name: 'header',
  title: 'Header',
  type: 'object',
  icon: FiCreditCard,
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
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number'
    },
    {
      name: 'field',
      title: 'Field',
      type: 'reference',
      to: [{type: 'fields'}]
    },
    {
      name: 'introText',
      title: 'Intro Text',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'docTitle'
    }
  }
}