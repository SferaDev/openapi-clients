import { defineConfig } from '@openapi-codegen/cli';
import type { Context } from '@openapi-codegen/cli/lib/types';
import { generateFetchers, generateSchemaTypes } from '@openapi-codegen/typescript';
import { Project, VariableDeclarationKind } from 'ts-morph';
import ts from 'typescript';

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
      await context.writeFile('extra.ts', buildExtraFile(context));
    }
  }
});

function buildExtraFile(context: Context) {
  const project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: { module: ts.ModuleKind.ESNext as any, target: ts.ScriptTarget.ES2020 }
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
