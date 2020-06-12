import { FiFilePlus } from "react-icons/fi";

export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  icon: FiFilePlus,
  fieldset: [
      {
        title: 'SEO & metadata',
        name: 'metadata',
      }
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug'
    },
    {
      name: 'field',
      title: 'Field',
      type: 'reference',
      to: [{type: 'fields'}]
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number'
    },
    {
      name: 'headline',
      title: 'Headline',
      description: 'This short sentence will be displayed on the homepage',
      type: 'string'
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      description: 'This image is illustrating the project on the homepage',
      type: 'image'
    },
    {
      name: 'components',
      title: 'Components',
      type: 'array',
      description: 'Build the page as it will be visible',
      of: [
        { type: 'feature' },
        { type: 'header' },
        { type: 'imgText' },
        { type: 'imgFullPage' },
        { type: 'largeText' },
        { type: 'table' },
        { type: 'textImg' },
        { type: 'doubleImage' }
      ]
    }
  ]
}