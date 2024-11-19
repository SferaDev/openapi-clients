import { defineConfig } from '@openapi-codegen/cli';
import { Context } from '@openapi-codegen/cli/lib/types';
import { generateFetchers, generateSchemaTypes } from '@openapi-codegen/typescript';
import { Project, VariableDeclarationKind } from 'ts-morph';
import ts from 'typescript';
import { sortEnumValues } from './utils/sortEnumValues';

export default defineConfig({
  vercel: {
    from: {
      source: 'url',
      url: 'https://openapi.vercel.sh'
    },
    outputDir: 'src/api',
    to: async (context) => {
      const filenamePrefix = '';

      // Rename invalid component name for searchRepo
      context.openAPIDocument = updateMethod({
        openAPIDocument: context.openAPIDocument,
        path: '/v1/integrations/search-repo',
        method: 'get',
        update: (operation) => ({ ...operation, operationId: 'searchRepo' })
      });

      // Rename invalid component name for listPromoteAliases
      context.openAPIDocument = updateMethod({
        openAPIDocument: context.openAPIDocument,
        path: '/v1/projects/{projectId}/promote/aliases',
        method: 'get',
        update: (operation) => ({ ...operation, operationId: 'listPromoteAliases' })
      });

      const { schemasFiles } = await generateSchemaTypes(context, { filenamePrefix, sortEnumValues });
      await generateFetchers(context, { filenamePrefix, schemasFiles, sortEnumValues });
      await context.writeFile('extra.ts', buildExtraFile(context));
    }
  }
});

function updateMethod({
  openAPIDocument,
  path,
  method,
  update
}: {
  openAPIDocument: Context['openAPIDocument'];
  path: string;
  method: string;
  update: (
    operation: Context['openAPIDocument']['paths'][string][string]
  ) => Context['openAPIDocument']['paths'][string][string];
}) {
  const operation = openAPIDocument.paths?.[path]?.[method];
  if (!operation) return openAPIDocument;

  openAPIDocument.paths[path][method] = { ...operation, ...update(operation) };

  return openAPIDocument;
}

function updateStrings({
  openAPIDocument,
  updater
}: {
  openAPIDocument: Context['openAPIDocument'];
  updater: (key: string, value: string) => string | null;
}) {
  const updatedOpenAPIDocument = JSON.stringify(openAPIDocument, (key, value) => {
    if (typeof value === 'string') {
      return updater(key, value) ?? value;
    }

    return value;
  });

  return JSON.parse(updatedOpenAPIDocument);
}

function buildExtraFile(context: Context) {
  const project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget['ES2020'] }
  });

  const sourceFile = project.createSourceFile('extra.ts');

  const operationsByPath = Object.fromEntries(
    Object.entries(context.openAPIDocument.paths ?? {}).flatMap(([path, methods]) => {
      return Object.entries(methods)
        .filter(
          ([method, operation]: [string, any]) =>
            ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(method.toUpperCase()) &&
            operation?.operationId !== undefined
        )
        .map(([method, operation]: [string, any]) => [`${method.toUpperCase()} ${path}`, operation.operationId]);
    })
  );

  sourceFile.addImportDeclaration({
    namedImports: Object.values(operationsByPath),
    moduleSpecifier: './components'
  });

  sourceFile.addVariableStatement({
    isExported: true,
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: 'operationsByPath',
        initializer: `{
            ${Object.entries(operationsByPath)
              .map(([path, operation]) => `"${path}": ${operation}`)
              .join(',\n')}
        }`
      }
    ]
  });

  return sourceFile.getFullText();
}
