import { defineConfig } from '@openapi-codegen/cli';
import type { Context } from '@openapi-codegen/cli/lib/types';
import { generateFetchers, generateSchemaTypes } from '@openapi-codegen/typescript';
import Case from 'case';
import type { OperationObject, PathItemObject } from 'openapi3-ts/oas30';
import { Project, VariableDeclarationKind } from 'ts-morph';
import ts from 'typescript';

export default defineConfig({
  cloudflare: {
    from: {
      source: 'url',
      url: 'https://raw.githubusercontent.com/cloudflare/api-schemas/main/openapi.json'
    },
    outputDir: 'src/api',
    to: async (context) => {
      const filenamePrefix = '';

      // Add missing operation ids and clean them
      context.openAPIDocument = cleanOperationIds({ openAPIDocument: context.openAPIDocument });

      // Remove duplicated schemas
      const schemaCount: Record<string, number> = {};
      const rewrites = new Map<string, string>();
      for (const path of Object.keys(context.openAPIDocument.components?.schemas ?? {})) {
        const schemaName = Case.pascal(path);
        if (schemaCount[schemaName] === undefined) {
          schemaCount[schemaName] = 0;
        }

        schemaCount[schemaName] += 1;
        if (schemaCount[schemaName] > 1 && context.openAPIDocument.components?.schemas?.[path]) {
          rewrites.set(path, `${path}-${schemaCount[schemaName]}`);
          context.openAPIDocument.components.schemas[`${path}-${schemaCount[schemaName]}`] =
            context.openAPIDocument.components.schemas[path];
          delete context.openAPIDocument.components.schemas[path];
        }
      }

      // Rewrite all $ref in components with new schema names
      for (const [ref, newRef] of rewrites) {
        context.openAPIDocument = JSON.parse(
          JSON.stringify(context.openAPIDocument).replace(
            new RegExp(`"#/components/schemas/${ref}"`, 'g'),
            `"#/components/schemas/${newRef}"`
          )
        );
      }

      // Rewrite status code in components response with XX suffix to avoid invalid identifier (4XX -> 400, 5XX -> 500)
      for (const [_, definition] of Object.entries(context.openAPIDocument.paths ?? {})) {
        for (const [_, operation] of Object.entries(definition as PathItemObject)) {
          const responses = (operation as OperationObject).responses;
          if (responses) {
            for (const [statusCode, response] of Object.entries(responses)) {
              if (statusCode.endsWith('XX')) {
                const newStatusCode = `${statusCode.slice(0, 1)}00`;
                responses[newStatusCode] = response;
                delete responses[statusCode];
              }
            }
          }
        }
      }

      const { schemasFiles } = await generateSchemaTypes(context, { filenamePrefix });
      await generateFetchers(context, { filenamePrefix, schemasFiles });
      await context.writeFile('extra.ts', buildExtraFile(context));
    }
  }
});

function buildExtraFile(context: Context) {
  const project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 }
  });

  const sourceFile = project.createSourceFile('extra.ts');

  const operationsByPath = Object.fromEntries(
    Object.entries(context.openAPIDocument.paths ?? {}).flatMap(([path, methods]) => {
      return Object.entries(methods)
        .filter(([method]) => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(method.toUpperCase()))
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
