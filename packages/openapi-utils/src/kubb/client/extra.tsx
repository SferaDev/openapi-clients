import { PluginClient } from '@kubb/plugin-client';
import { createReactGenerator } from '@kubb/plugin-oas';
import { useOas, useOperationManager } from '@kubb/plugin-oas/hooks';
import { getBanner, getFooter } from '@kubb/plugin-oas/utils';
import { File, useApp } from '@kubb/react';
import c from 'case';

export const extraGenerator = createReactGenerator<PluginClient>({
  name: 'extra',
  Operations({ operations }) {
    const { pluginManager, plugin } = useApp<PluginClient>();
    const oas = useOas();
    const { getFile, getName } = useOperationManager();

    const fileName = 'extra';
    const file = pluginManager.getFile({ name: fileName, extname: '.ts', pluginKey: plugin.key });

    const imports = operations.map((operation) => {
      const name = getName(operation, {
        type: 'function'
      });

      return <File.Import key={name} name={[name]} root={file.path} path={getFile(operation).path} />;
    });

    const tags = Array.from(new Set(operations.flatMap((operation) => operation.getTags().map((tag: { name: string }) => tag.name))));

    const operationsByPath = Object.fromEntries(
      operations
        .filter((operation) => 
          ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(operation.method.toUpperCase()) &&
          operation.getOperationId() !== undefined
        )
        .map((operation) => [`${operation.method.toUpperCase()} ${operation.path}`, operation.getOperationId()])
    );

    const operationsByTag = Object.fromEntries(
      tags.map((name) => [
        c.camel(name.toLowerCase()),
        operations
          .filter((operation) => {
            return operation
              .getTags()
              .map((tag: { name: string }) => tag.name)
              .includes(name);
          })
          .map((operation) => operation.getOperationId())
      ])
    );

    const tagDictionary = Object.fromEntries(
      tags.map((name) => [
        c.camel(name.toLowerCase()),
        operations.reduce(
          (acc, operation) => {
            const upperMethod = operation.method.toUpperCase();
            if (
              operation
                .getTags()
                .map((tag: { name: string }) => tag.name)
                .includes(name) &&
              ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(upperMethod) &&
              operation?.getOperationId() !== undefined
            ) {
              acc[upperMethod] = acc[upperMethod] ?? [];
              acc[upperMethod].push(operation.getOperationId());
            }

            return acc;
          },
          {} as Record<string, string[]>
        )
      ])
    );

    return (
      // @ts-ignore - JSX runtime module resolution issue
      <File
        baseName={file.baseName}
        path={file.path}
        meta={file.meta}
        banner={getBanner({ oas, output: plugin.options.output })}
        footer={getFooter({ oas, output: plugin.options.output })}
      >
        {imports}

        <File.Source>
          {`
        export const operationsByPath = {
            ${Object.entries(operationsByPath)
              .map(([path, operation]) => `"${path}": ${operation}`)
              .join(',\n')}
        };

        export const operationsByTag = {
            ${Object.entries(operationsByTag)
              .map(
                ([tag, operations]) => `"${tag}": {
                ${operations.join(',\n')}
              }`
              )
              .join(',\n')}
        };

        export const tagDictionary = {
            ${Object.entries(tagDictionary)
              .map(([tag, operations]) => `"${tag}": ${JSON.stringify(operations, null, 2)}`)
              .join(',\n')}
        } as const;
        `}
        </File.Source>
      </File>
    );
  }
});
