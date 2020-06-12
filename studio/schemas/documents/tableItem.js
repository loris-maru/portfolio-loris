import { FiServer } from 'react-icons/fi'

export default {
  name: 'tableItem',
  title: 'Table Item',
  type: 'object',
  icon: FiServer,
  fields: [
    {
      name: 'itemSubtitle',
      title: 'Item Subtitle',
      type: 'string'
    },
    {
      name: 'itemTitle',
      title: 'Item Title',
      type: 'string'
    },
    {
      name: 'itemContent',
      title: 'Item Content',
      type: 'string'
    }

  ]
}