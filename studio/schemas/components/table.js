import { FiArchive } from 'react-icons/fi'

export default {
  name: 'table',
  title: 'Feature Table',
  type: 'object',
  icon: FiArchive,
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
      name: 'heading',
      title: 'Headline ?',
      type: 'boolean'
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string'
    },
    {
      name: 'firstIcon',
      title: 'First Icon',
      type: 'image'
    },
    {
      name: 'firstSubTitle',
      title: 'First Subtitle',
      type: 'string'
    },
    {
      name: 'firstTitle',
      title: 'First Title',
      type: 'string'
    },
    {
      name: 'firstContent',
      title: 'First Content',
      type: 'string'
    },
    {
      name: 'secondIcon',
      title: 'Second Icon',
      type: 'image'
    },
    {
      name: 'secondSubTitle',
      title: 'Second Subtitle',
      type: 'string'
    },
    {
      name: 'secondTitle',
      title: 'Second Title',
      type: 'string'
    },
    {
      name: 'secondContent',
      title: 'Second Content',
      type: 'string'
    },
  ],
  preview: {
    select: {
      title: 'docTitle'
    }
  }
}