import { PluginMcp } from '@kubb/plugin-mcp';
import { createReactGenerator } from '@kubb/plugin-oas';
import { useOas, useOperationManager } from '@kubb/plugin-oas/hooks';
import { getBanner, getFooter } from '@kubb/plugin-oas/utils';
import { pluginTsName } from '@kubb/plugin-ts';
import { File, useApp } from '@kubb/react';
import { ClientOperation } from '../components/client-operation';

export const toolsGenerator = createReactGenerator<PluginMcp>({
  name: 'mcp',
  Operation({ operation }) {
    const {
      plugin: { options }
    } = useApp<PluginMcp>();
    const oas = useOas();
    const { getSchemas, getName, getFile } = useOperationManager();

    const mcp = {
      name: getName(operation, { type: 'function' }),
      file: getFile(operation)
    };

    const type = {
      file: getFile(operation, { pluginKey: [pluginTsName] }),
      schemas: getSchemas(operation, { pluginKey: [pluginTsName], type: 'type' })
    };

    return (
      // @ts-ignore - JSX runtime module resolution issue
      <File
        baseName={mcp.file.baseName}
        path={mcp.file.path}
        meta={mcp.file.meta}
        banner={getBanner({ oas, output: options.output })}
        footer={getFooter({ oas, output: options.output })}
      >
        <File.Import name={['CallToolResult']} path="../utils/mcp" isTypeOnly />
        <File.Import name={'client'} path={options.client.importPath} />
        <File.Import name={['FetcherConfig', 'ErrorWrapper']} path={options.client.importPath} isTypeOnly />
        <File.Import name={['RequestConfig', 'ResponseErrorConfig']} path={options.client.importPath} isTypeOnly />
        <File.Import
          name={
            [
              type.schemas.request?.name,
              type.schemas.response.name,
              type.schemas.pathParams?.name,
              type.schemas.queryParams?.name,
              type.schemas.headerParams?.name,
              ...(type.schemas.statusCodes?.map((item) => item.name) || [])
            ].filter(Boolean) as string[]
          }
          root={mcp.file.path}
          path={type.file.path}
          isTypeOnly
        />

        <ClientOperation
          name={mcp.name}
          returnType={'Promise<CallToolResult>'}
          baseURL={options.client.baseURL}
          operation={operation}
          typeSchemas={type.schemas}
          zodSchemas={undefined}
          paramsCasing={'camelcase'}
          parser={'client'}
        >
          {`return { content: [{ type: 'text', text: JSON.stringify(data) }] };`}
        </ClientOperation>
      </File>
    );
  }
});
