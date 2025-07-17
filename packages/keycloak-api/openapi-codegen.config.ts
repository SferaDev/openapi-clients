import { defineConfig } from '@openapi-codegen/cli';
import type { Context } from '@openapi-codegen/cli/lib/types';
import { generateFetchers, generateSchemaTypes } from '@openapi-codegen/typescript';
import Case from 'case';
import type { PathItemObject } from 'openapi3-ts/oas30';
import { type ModuleKind, Project, VariableDeclarationKind } from 'ts-morph';
import ts from 'typescript';

export default defineConfig({
  admin: {
    from: {
      source: 'url',
      url: 'https://www.keycloak.org/docs-api/latest/rest-api/openapi.json'
    },
    outputDir: 'src/admin',
    to: async (context) => {
      const filenamePrefix = '';

      // Add missing operation ids and clean them
      context.openAPIDocument = cleanOperationIds({ openAPIDocument: context.openAPIDocument });

      // Sort alphabetically enum values
      context.openAPIDocument = sortArrays(context.openAPIDocument);

      // Warn for duplicated pathParameters with same name
      warnForDuplicatedPathParameters(context.openAPIDocument);

      const { schemasFiles } = await generateSchemaTypes(context, { filenamePrefix });
      await generateFetchers(context, { filenamePrefix, schemasFiles });
      await context.writeFile('extra.ts', buildExtraFile(context));
    }
  },
  account: {
    from: {
      source: 'file',
      relativePath: 'specs/account.yaml'
    },
    outputDir: 'src/account',
    to: async (context) => {
      const filenamePrefix = '';

      // Add missing operation ids and clean them
      context.openAPIDocument = cleanOperationIds({ openAPIDocument: context.openAPIDocument });

      // Sort alphabetically enum values
      context.openAPIDocument = sortArrays(context.openAPIDocument);

      // Warn for duplicated pathParameters with same name
      warnForDuplicatedPathParameters(context.openAPIDocument);

      const { schemasFiles } = await generateSchemaTypes(context, { filenamePrefix });
      await generateFetchers(context, { filenamePrefix, schemasFiles });
      await context.writeFile('extra.ts', buildExtraFile(context));
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

function cleanOperationIds({ openAPIDocument }: { openAPIDocument: Context['openAPIDocument'] }) {
  for (const [key, path] of Object.entries(openAPIDocument.paths as Record<string, PathItemObject>)) {
    for (const method of ['get', 'put', 'post', 'patch', 'delete'] as const) {
      if (path[method]) {
        const operationId = path[method].operationId ?? `${method} ${key}`;
        openAPIDocument.paths[key][method] = {
          ...openAPIDocument.paths[key][method],
          operationId: Case.camel(operationId)
        };
      }
    }
  }

  return openAPIDocument;
}

function warnForDuplicatedPathParameters(openAPIDocument: Context['openAPIDocument']) {
  for (const path of Object.keys(openAPIDocument.paths as Record<string, PathItemObject>)) {
    // Extract path parameters from the path string (e.g. /{realm}/clients/{id} -> ['realm', 'id'])
    const pathParameters = path.match(/{([^}]+)}/g)?.map((param) => param.slice(1, -1)) ?? [];

    // Check for duplicated path parameters
    const duplicatedPathParameters = pathParameters.filter((param, index) => pathParameters.indexOf(param) !== index);
    if (duplicatedPathParameters.length > 0) {
      console.warn(`Duplicated path parameters in path "${path}": ${duplicatedPathParameters.join(', ')}`);
    }
  }
}
