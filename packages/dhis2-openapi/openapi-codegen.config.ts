import { defineConfig } from '@openapi-codegen/cli';
import { generateFetchers, generateSchemaTypes } from '@openapi-codegen/typescript';

export default defineConfig({
  dhis2: {
    from: {
      source: 'url',
      url: 'https://admin:district@play.dhis2.org/40.0.0/api/openapi.json'
    },
    outputDir: 'src/api/v40',
    to: async (context) => {
      const filenamePrefix = '';

      const { schemasFiles } = await generateSchemaTypes(context, { filenamePrefix });
      await generateFetchers(context, { filenamePrefix, schemasFiles });
    }
  }
});
