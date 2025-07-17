import { defineConfig } from '@openapi-codegen/cli';
import type { Context } from '@openapi-codegen/cli/lib/types';
import { generateFetchers, generateSchemaTypes } from '@openapi-codegen/typescript';
import Case from 'case';
import { type ModuleKind, Project, ts, VariableDeclarationKind } from 'ts-morph';

export default defineConfig({
  api: {
    from: {
      source: 'url',
      url: 'https://www.demo.litellm.ai/openapi.json'
    },
    outputDir: 'src/api',
    to: async (context) => {
      context.openAPIDocument = ignorePassThroughPaths(context.openAPIDocument);
      pathReturnFixCatchAll(context.openAPIDocument);

      fixAPIReturns(context.openAPIDocument, [
        {
          paths: ['/model/info/', '/v1/model/info'],
          methods: ['get'],
          responses: {
            '200': obj({ data: arrayOf(schemaRef('Deployment')) })
          }
        }
      ]);

      context.openAPIDocument = removeDuplicatedTags(context.openAPIDocument);

      const filenamePrefix = '';
      const { schemasFiles } = await generateSchemaTypes(context, { filenamePrefix });
      await generateFetchers(context, { filenamePrefix, schemasFiles });
      await context.writeFile('extra.ts', buildExtraFile(context));
    }
  }
});

// Remove duplicated tags in path components
function removeDuplicatedTags(openAPIObject: Context['openAPIDocument']) {
  return {
    ...openAPIObject,
    paths: Object.fromEntries(
      Object.entries(openAPIObject.paths).map(([path, pathItem]) => {
        for (const method of Object.keys(pathItem)) {
          const operation = pathItem[method];
          if (operation.tags) {
            operation.tags = [...new Set(operation.tags)];
          }
        }
        return [path, pathItem];
      })
    )
  };
}

// Remove all pass-through paths. We don't need them in the client and they are causing problems with the codegen
// because all ops have the same operationId
// pass-through paths can be identified by the path ending in {endpoint}
function ignorePassThroughPaths(openAPIObject: Context['openAPIDocument']) {
  const paths = openAPIObject.paths;
  const filteredPaths = Object.keys(paths).filter((path) => !path.endsWith('{endpoint}'));
  return {
    ...openAPIObject,
    paths: Object.fromEntries(filteredPaths.map((path) => [path, paths[path]]))
  };
}

// The OpenAPI declaration uses empty objects for some return types. Code-gen uses 'void' in that case.
// Replace them with an catch-all object type to make the generated code work.
function pathReturnFixCatchAll(openAPIObject: Context['openAPIDocument']) {
  const catchAll = { type: 'object', properties: {}, additionalProperties: true };
  const methods = ['get', 'post', 'put', 'delete'];
  const JSON_CONTENT_TYPE = 'application/json';

  for (const pathItem of Object.values(openAPIObject.paths)) {
    for (const method of methods) {
      const methodItem = pathItem[method];
      if (!methodItem?.responses) continue;

      for (const responseItem of Object.values(methodItem.responses)) {
        const content = (responseItem as any).content;
        if (!content?.[JSON_CONTENT_TYPE]) continue;

        const schema = content[JSON_CONTENT_TYPE].schema;
        if (schema && Object.keys(schema).length === 0) {
          content[JSON_CONTENT_TYPE].schema = catchAll;
        }
      }
    }
  }
}

type ResponseUpdate = {
  paths: string[];
  methods: string[];
  responses: Record<string, any>;
};

// Fix some API returns for well known APIs.
function fixAPIReturns(openAPIObject: Context['openAPIDocument'], apiUpdates: ResponseUpdate[]) {
  for (const update of apiUpdates) {
    for (const path of update.paths) {
      const pathItem = openAPIObject.paths[path];
      if (!pathItem) continue;

      for (const method of update.methods) {
        const methodItem = pathItem[method];
        if (!methodItem?.responses) continue;

        for (const [code, schema] of Object.entries(update.responses)) {
          const responseItem = methodItem.responses[code];
          if (responseItem) {
            const content = responseItem.content;
            if (content?.['application/json']) {
              content['application/json'].schema = schema;
            }
          }
        }
      }
    }
  }
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
        .map(([method, operation]: [string, any]) => [
          `${method.toUpperCase()} ${path}`,
          Case.camel(operation.operationId)
        ]);
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

function obj(properties: Record<string, any>) {
  return {
    type: 'object',
    properties,
    additionalProperties: true
  };
}

function arrayOf(type: any) {
  return {
    type: 'array',
    items: type
  };
}

function schemaRef(ref: string) {
  return { $ref: `#/components/schemas/${ref}` };
}
