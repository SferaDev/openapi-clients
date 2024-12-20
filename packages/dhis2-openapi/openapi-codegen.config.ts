import { defineConfig } from '@openapi-codegen/cli';
import { Context } from '@openapi-codegen/cli/lib/types';
import { generateFetchers, generateSchemaTypes } from '@openapi-codegen/typescript';

export default defineConfig({
  v40: {
    from: {
      source: 'url',
      url: 'https://admin:district@play.im.dhis2.org/stable-2-40-6/api/openapi.json'
    },
    outputDir: 'src/api/v40',
    to: async (context) => {
      const filenamePrefix = '';

      // Sort alphabetically enum values
      context.openAPIDocument = sortArrays(context.openAPIDocument);

      const { schemasFiles } = await generateSchemaTypes(context, { filenamePrefix });
      await generateFetchers(context, { filenamePrefix, schemasFiles });
    }
  },
  v41: {
    from: {
      source: 'url',
      url: 'https://admin:district@play.im.dhis2.org/stable-2-41-2/api/openapi.json'
    },
    outputDir: 'src/api/v40',
    to: async (context) => {
      const filenamePrefix = '';

      // Sort alphabetically enum values
      context.openAPIDocument = sortArrays(context.openAPIDocument);

      const { schemasFiles } = await generateSchemaTypes(context, { filenamePrefix });
      await generateFetchers(context, { filenamePrefix, schemasFiles });
    }
  }
});

function sortArrays(openAPIDocument: Context['openAPIDocument']) {
  // Recurse through the document and in any "enum" property that is a string array, sort the values alphabetically
  function sortEnumValuesRecursively<T>(obj: T): T {
    if (Array.isArray(obj)) {
      return obj.sort() as T;
    } else if (typeof obj === 'object' && !!obj) {
      return Object.fromEntries(
        Object.entries(obj as any).map(([key, value]) => [key, sortEnumValuesRecursively(value)])
      ) as T;
    } else {
      return obj;
    }
  }

  return sortEnumValuesRecursively(openAPIDocument);
}
