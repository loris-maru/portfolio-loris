import { FiBookmark } from 'react-icons/fi';

export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: FiBookmark,
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string'
    },
    {
      name: 'featuredProject',
      title: 'Featured Project',
      type: 'array',
      description: 'Selected Project',
      of: [
        { type: 'footerItem' }
      ]
    },
    {
      name: 'aboutInfos',
      title: 'About informatons',
      type: 'array',
      description: 'Additional information about Loris and how to contact it',
      of: [
        { type: 'footerItem' }
      ]
    }
  ]
}