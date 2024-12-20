import { defineConfig } from '@openapi-codegen/cli';
import { Context } from '@openapi-codegen/cli/lib/types';
import { generateFetchers, generateSchemaTypes } from '@openapi-codegen/typescript';
import { Project, VariableDeclarationKind } from 'ts-morph';
import ts from 'typescript';
import { PathItemObject } from "openapi3-ts/oas30";
import Case from "case";

export default defineConfig({
  vercel: {
    from: {
      source: 'url',
      url: 'https://openapi.vercel.sh'
    },
    outputDir: 'src/api',
    to: async (context) => {
      const filenamePrefix = '';

      // Add missing operation ids and clean them
      context.openAPIDocument = cleanOperationIds({ openAPIDocument: context.openAPIDocument });

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

      // Sort alphabetically enum values
      context.openAPIDocument = sortArrays(context.openAPIDocument);

      const { schemasFiles } = await generateSchemaTypes(context, { filenamePrefix });
      await generateFetchers(context, { filenamePrefix, schemasFiles });
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

function cleanOperationIds({
  openAPIDocument,
}: {
  openAPIDocument: Context['openAPIDocument'];
}) {
  for (const [key, path] of Object.entries(openAPIDocument.paths as Record<string, PathItemObject>)) {
    for (const method of ["get", "put", "post", "patch", "delete"] as const) {
      if (path[method]) {
        const operationId = path[method].operationId ?? `${method} ${key}`;
        openAPIDocument.paths[key][method] = {
          ...openAPIDocument.paths[key][method],
          operationId: Case.camel(operationId)
        }
      }
    }

  }

  return openAPIDocument;
}
