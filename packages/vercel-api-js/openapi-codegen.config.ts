import { defineConfig } from '@openapi-codegen/cli';
import { Context } from '@openapi-codegen/cli/lib/types';
import { generateFetchers, generateSchemaTypes } from '@openapi-codegen/typescript';
import { Project, VariableDeclarationKind } from 'ts-morph';
import ts from 'typescript';

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

      // Rewrite invalid enum values
      context.openAPIDocument = updateStrings({
        openAPIDocument: context.openAPIDocument,
        updater: (_key, value) => {
          if (value.endsWith('EnvTarget.Productio')) return 'production';
          if (value.endsWith('EnvTarget.Previe')) return 'preview';
          if (value.endsWith('EnvTarget.Developmen')) return 'development';
          if (value.endsWith("WebhookName.DomainCreate'")) return 'domain.created';
          if (value.endsWith("WebhookName.DeploymentCreate'")) return 'deployment.created';
          if (value.endsWith("WebhookName.DeploymentErro'")) return 'deployment.error';
          if (value.endsWith("WebhookName.DeploymentCancele'")) return 'deployment.canceled';
          if (value.endsWith("WebhookName.DeploymentSucceede'")) return 'deployment.succeeded';
          if (value.endsWith("WebhookName.DeploymentRead'")) return 'deployment.ready';
          if (value.endsWith("WebhookName.DeploymentCheckRerequeste'")) return 'deployment.check-rerequested';
          if (value.endsWith("WebhookName.IntegrationConfigurationPermissionUpgrade'"))
            return 'integration-configuration.permission-upgraded';
          if (value.endsWith("WebhookName.IntegrationConfigurationRemove'")) return 'integration-configuration.removed';
          if (value.endsWith("WebhookName.IntegrationConfigurationScopeChangeConfirme'"))
            return 'integration-configuration.scope-change-confirmed';
          if (value.endsWith("WebhookName.ProjectCreate'")) return 'project.created';
          if (value.endsWith("WebhookName.ProjectRemove'")) return 'project.removed';
          if (value.endsWith("WebhookName.LegacyDeploymentChecksComplete'")) return 'deployment-checks-completed';
          if (value.endsWith("WebhookName.LegacyDeploymentRead'")) return 'deployment-ready';
          if (value.endsWith("WebhookName.LegacyDeploymentPrepare'")) return 'deployment-prepared';
          if (value.endsWith("WebhookName.LegacyDeploymentErro'")) return 'deployment-error';
          if (value.endsWith("WebhookName.LegacyDeploymentCheckRerequeste'")) return 'deployment-check-rerequested';
          if (value.endsWith("WebhookName.LegacyDeploymentCancele'")) return 'deployment-canceled';
          if (value.endsWith("WebhookName.LegacyProjectCreate'")) return 'project-created';
          if (value.endsWith("WebhookName.LegacyProjectRemove'")) return 'project-removed';
          if (value.endsWith("WebhookName.LegacyDomainCreate'")) return 'domain-created';
          if (value.endsWith("WebhookName.LegacyDeploymen'")) return 'deployment';
          if (value.endsWith("WebhookName.LegacyIntegrationConfigurationPermissionUpdate'"))
            return 'integration-configuration-permission-updated';
          if (value.endsWith("WebhookName.LegacyIntegrationConfigurationRemove'"))
            return 'integration-configuration-removed';
          if (value.endsWith("WebhookName.LegacyIntegrationConfigurationScopeChangeConfirme'"))
            return 'integration-configuration-scope-change-confirmed';

          return null;
        }
      });

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
