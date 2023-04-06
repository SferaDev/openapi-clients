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
        updates: {
          'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio': 'production',
          'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe': 'preview',
          'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen': 'development',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DomainCreate': 'domain.created',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentCreate': 'deployment.created',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentErro': 'deployment.error',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentCancele': 'deployment.canceled',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentSucceede': 'deployment.succeeded',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentRead': 'deployment.ready',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentCheckRerequeste':
            'deployment.check-rerequested',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.IntegrationConfigurationPermissionUpgrade':
            'integration-configuration.permission-upgraded',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.IntegrationConfigurationRemove':
            'integration-configuration.removed',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.IntegrationConfigurationScopeChangeConfirme':
            'integration-configuration.scope-change-confirmed',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.ProjectCreate': 'project.created',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.ProjectRemove': 'project.removed',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentChecksComplete':
            'deployment-checks-completed',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentRead': 'deployment-ready',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentPrepare':
            'deployment-prepared',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentErro': 'deployment-error',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentCheckRerequeste':
            'deployment-check-rerequested',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentCancele':
            'deployment-canceled',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyProjectCreate': 'project-created',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyProjectRemove': 'project-removed',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDomainCreate': 'domain-created',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymen': 'deployment',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyIntegrationConfigurationPermissionUpdate':
            'integration-configuration-permission-updated',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyIntegrationConfigurationRemove':
            'integration-configuration-removed',
          'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyIntegrationConfigurationScopeChangeConfirme':
            'integration-configuration-scope-change-confirmed'
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
  updates
}: {
  openAPIDocument: Context['openAPIDocument'];
  updates: Record<string, string>;
}) {
  const updatedOpenAPIDocument = JSON.stringify(openAPIDocument, (key, value) => {
    if (typeof value === 'string') {
      return updates[value] ?? value;
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
