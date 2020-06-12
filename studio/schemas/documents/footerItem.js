import { FiMoreHorizontal } from 'react-icons/fi'

export default {
  name: 'footerItem',
  title: 'Footer Item',
  type: 'object',
  icon: FiMoreHorizontal,
  fields: [
    {
      name: 'footerItemSubtitle',
      title: 'Footer Item Subtitle',
      type: 'string'
    },
    {
      name: 'itemTitle',
      title: 'Item Title',
      type: 'string'
    },
    {
      name: 'urlAddress',
      title: 'URL Address',
      type: 'string'
    }

  ]
}