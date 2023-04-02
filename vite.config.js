import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      'part:@sanity/base/schema-creator': path.resolve(
        './node_modules/@sanity/base/schema-creator'
      ),
      'part:@sanity/base/schema-type': path.resolve(
        './node_modules/@sanity/base/schema-type'
      ),
    },
  },
});
