import { defineConfig } from '@openapi-codegen/cli';
import type { Context } from '@openapi-codegen/cli/lib/types';
import { generateFetchers, generateSchemaTypes } from '@openapi-codegen/typescript';
import Case from 'case';
import type { PathItemObject } from 'openapi3-ts/oas30';
import { type ModuleKind, Project, VariableDeclarationKind } from 'ts-morph';
import ts from 'typescript';

export default defineConfig({
  api: {
    from: {
      source: 'url',
      url: 'https://api.nuki.io/static/swagger/swagger.json'
    },
    outputDir: 'src/api',
    to: async (context) => {
      const filenamePrefix = '';

      // Add missing operation ids and clean them
      context.openAPIDocument = cleanOperationIds({ openAPIDocument: context.openAPIDocument });

      const { schemasFiles } = await generateSchemaTypes(context, { filenamePrefix });
      await generateFetchers(context, { filenamePrefix, schemasFiles });
      await context.writeFile('extra.ts', buildExtraFile(context));
    }
  }
});

function cleanOperationIds({ openAPIDocument }: { openAPIDocument: Context['openAPIDocument'] }) {
  for (const [key, path] of Object.entries(openAPIDocument.paths as Record<string, PathItemObject>)) {
    for (const method of ['get', 'put', 'post', 'patch', 'delete'] as const) {
      if (path[method]) {
        const defaultOperationId = path[method].operationId ?? `${method} ${key}`;
        const operationId = `${method} ${defaultOperationId.split('_')[0]}`;
        openAPIDocument.paths[key][method] = {
          ...openAPIDocument.paths[key][method],
          operationId: Case.camel(operationId)
        };
      }
    }
  }

  return openAPIDocument;
}

function buildExtraFile(context: Context) {
  const project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: { module: ts.ModuleKind.ESNext as ModuleKind, target: ts.ScriptTarget.ES2020 }
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
