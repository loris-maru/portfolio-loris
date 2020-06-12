import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 's3jiyh9l',
  dataset: 'production',
  useCdn: true
})