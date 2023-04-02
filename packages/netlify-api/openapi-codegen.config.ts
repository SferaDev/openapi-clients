import { defineConfig } from '@openapi-codegen/cli';
import { generateFetchers, generateSchemaTypes } from '@openapi-codegen/typescript';

export default defineConfig({
  netlify: {
    from: {
      source: 'url',
      url: 'https://open-api.netlify.com/swagger.json'
    },
    outputDir: 'src/api',
    to: async (context) => {
      const filenamePrefix = '';

      const { schemasFiles } = await generateSchemaTypes(context, { filenamePrefix });
      await generateFetchers(context, { filenamePrefix, schemasFiles });
    }
  }
});
