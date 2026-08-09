import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';

const projectId = process.env.VITE_SANITY_PROJECT_ID || 'your_project_id';
const dataset = process.env.VITE_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'innovify-xr-studio',
  title: 'Innovify XR Content Studio',

  projectId,
  dataset,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
