import { FiGithub } from "react-icons/fi";

export default {
  name: 'information',
  title: 'Pages',
  type: 'document',
  icon: FiGithub,
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug'
    },
    {
      name: 'headTitle',
      title: 'Head Title',
      type: 'string'
    },
    {
      name: 'headSubtitle',
      title: 'Head Subtitle',
      type: 'string'
    },
    {
      name: 'introductionText',
      title: 'Introduction Text',
      type: 'string'
    },
    {
      name: 'introBiography',
      title: 'Introduction Biography',
      description: 'This is a full text component in itself',
      type: 'string'
    },
    {
      name: 'dividerImage',
      title: 'Full Page Image',
      description: 'Image dividing the content',
      type: 'image'
    },
    {
      name: 'titleTable',
      title: 'Title Table',
      type: 'string'
    },
    {
      name: 'itemCell',
      title: 'Item Cell',
      type: 'array',
      description: 'Add the item needed in the cell',
      of: [
        { type: 'tableItem' }
      ]
    },
    {
      name: 'educationPlace',
      title: 'Education Place',
      type: 'array',
      description: 'All the places where I studied',
      of: [
        { title: 'Place Description', type: 'imgText' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'category',
      subtitle: 'headTitle'
    }
  }
}