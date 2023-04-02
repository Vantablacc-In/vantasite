import {createClient} from '@sanity/client'

export const sanity = createClient({
  projectId: 'j1jwhvbj', // replace with your project ID
  dataset: 'production', // replace with your dataset name
  useCdn: false, // Use the CDN in production
  apiVersion: '2021-08-31'
})

