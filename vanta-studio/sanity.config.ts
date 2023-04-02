import {defineConfig, isDev} from 'sanity'

import {deskTool} from 'sanity/desk'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {schemaTypes} from './schemas'
import {visionTool} from '@sanity/vision'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'vanta-studio',

  projectId: 'j1jwhvbj',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})
