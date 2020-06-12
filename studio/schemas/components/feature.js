import { FiSlack } from 'react-icons/fi'

export default {
  name: 'feature',
  title: 'Feature',
  type: 'object',
  icon: FiSlack,
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
      name: 'featNumber',
      title: 'Feature Number',
      type: 'number'
    },
    {
      name: 'featTitle',
      title: 'Feature Title',
      type: 'string'
    },
    {
      name: 'firstImage',
      title: 'First Image',
      type: 'image'
    },
    {
      name: 'secImage',
      title: 'Second Image',
      type: 'image'
    }
  ],
  preview: {
    select: {
      title: 'docTitle'
    }
  }
}