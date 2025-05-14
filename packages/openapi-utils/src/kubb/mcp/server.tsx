import { camelCase } from '@kubb/core/transformers';
import { isNullable, isReference } from '@kubb/oas';
import { PluginMcp } from '@kubb/plugin-mcp';
import { createReactGenerator, OperationSchemas } from '@kubb/plugin-oas';
import { useOas, useOperationManager } from '@kubb/plugin-oas/hooks';
import { getBanner, getFooter, getPathParams, isOptional } from '@kubb/plugin-oas/utils';
import { pluginTsName } from '@kubb/plugin-ts';
import { pluginZodName } from '@kubb/plugin-zod';
import { File, FunctionParams, useApp } from '@kubb/react';
import { getParams as getClientParams } from '../components/client-operation';

export const serverGenerator = createReactGenerator<PluginMcp>({
  name: 'operations',
  Operations({ operations, options }) {
    const { pluginManager, plugin } = useApp<PluginMcp>();
    const oas = useOas();
    const { getFile, getName, getSchemas } = useOperationManager();

    const fileName = 'mcp';
    const file = pluginManager.getFile({ name: fileName, extname: '.ts', pluginKey: plugin.key });

    const operationsMapped = operations.map((operation) => {
      return {
        tool: {
          name:
            operation.getOperationId() ||
            operation.getSummary() ||
            `${operation.method.toUpperCase()} ${operation.path}`,
          description:
            operation.getDescription() || `Make a ${operation.method.toUpperCase()} request to ${operation.path}`
        },
        mcp: {
          name: getName(operation, {
            type: 'function'
          }),
          file: getFile(operation)
        },
        zod: {
          name: getName(operation, {
            type: 'function',
            pluginKey: [pluginZodName]
          }),
          schemas: getSchemas(operation, { pluginKey: [pluginZodName], type: 'function' }),
          file: getFile(operation, { pluginKey: [pluginZodName] })
        },
        type: {
          schemas: getSchemas(operation, { pluginKey: [pluginTsName], type: 'type' })
        }
      };
    });

    const imports = operationsMapped.flatMap(({ mcp, zod }) => {
      return [
        <File.Import key={mcp.name} name={[mcp.name]} root={file.path} path={mcp.file.path} />,
        <File.Import
          key={zod.name}
          name={
            [
              zod.schemas.request?.name,
              zod.schemas.pathParams?.name,
              zod.schemas.queryParams?.name,
              zod.schemas.headerParams?.name
            ].filter(Boolean) as string[]
          }
          root={file.path}
          path={zod.file.path}
        />
      ];
    });

    return (
      <>
        <File
          baseName={file.baseName}
          path={file.path}
          meta={file.meta}
          banner={getBanner({ oas, output: options.output, config: pluginManager.config })}
          footer={getFooter({ oas, output: options.output })}
        >
          {imports}

          <File.Source name={fileName} isExportable isIndexable>
            {`
            import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
            
            export function initMcpTools<Server>(serverLike: Server, config: FetcherConfig) {
              const server = serverLike as McpServer;
              
              ${operationsMapped
                .map(({ tool, mcp, zod }) => {
                  const params = getParams({ schemas: zod.schemas });
                  const clientParams = getClientParams({ paramsCasing: 'camelcase', typeSchemas: zod.schemas });

                  if (
                    zod.schemas.request?.name ||
                    zod.schemas.headerParams?.name ||
                    zod.schemas.queryParams?.name ||
                    zod.schemas.pathParams?.name
                  ) {
                    return `
                      server.tool(${JSON.stringify(tool.name)}, ${JSON.stringify(tool.description)}, ${params.toObjectValue()}, async (${params.toObject()}) => {
                        try {
                          return await ${mcp.name}(${clientParams.toObject()})
                        } catch (error) {
                          return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] };
                        }
                      })`;
                  }

                  return `
                    server.tool(${JSON.stringify(tool.name)}, ${JSON.stringify(tool.description)}, async () => {
                      try {
                        return await ${mcp.name}(${clientParams.toObject()})
                      } catch (error) {
                        return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] };
                      }
                    })
          `;
                })
                .filter(Boolean)
                .join('\n')}
            }`}
          </File.Source>
        </File>
      </>
    );
  }
});

function getParams({ schemas }: { schemas: OperationSchemas }) {
  const pathParams = getPathParams(schemas.pathParams, {
    typed: false
  });

  return FunctionParams.factory({
    data: {
      mode: 'object',
      children: {
        ...Object.entries(pathParams).reduce((acc, [key, param]) => {
          if (param && schemas.pathParams?.name) {
            let suffix = '.shape';

            if (isNullable(schemas.pathParams.schema)) {
              if (isReference(schemas.pathParams)) {
                suffix = '.unwrap().schema.unwrap().shape';
              } else {
                suffix = '.unwrap().shape';
              }
            } else {
              if (isReference(schemas.pathParams)) {
                suffix = '.schema.shape';
              }
            }

            (param as any).value = `${schemas.pathParams?.name}${suffix}['${key}']`;
          }

          return {
            ...acc,
            [camelCase(key)]: param
          };
        }, {}),
        body: schemas.request?.name
          ? {
              value: schemas.request?.name,
              optional: isOptional(schemas.request?.schema)
            }
          : undefined,
        queryParams: schemas.queryParams?.name
          ? {
              value: schemas.queryParams?.name,
              optional: isOptional(schemas.queryParams?.schema)
            }
          : undefined,
        headers: schemas.headerParams?.name
          ? {
              value: schemas.headerParams?.name,
              optional: isOptional(schemas.headerParams?.schema)
            }
          : undefined
      }
    }
  });
}
