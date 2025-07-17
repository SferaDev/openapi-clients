import type { PluginClient } from '@kubb/plugin-client';
import { createReactGenerator } from '@kubb/plugin-oas';
import { useOas, useOperationManager } from '@kubb/plugin-oas/hooks';
import { getBanner, getFooter } from '@kubb/plugin-oas/utils';
import { pluginTsName } from '@kubb/plugin-ts';
import { pluginZodName } from '@kubb/plugin-zod';
import { File, useApp } from '@kubb/react';
import { ClientOperation } from '../components/client-operation';

export const clientGenerator = createReactGenerator<PluginClient>({
  name: 'client',
  Operation({ options, operation }) {
    const {
      plugin: {
        options: { output }
      },
      pluginManager
    } = useApp<PluginClient>();
    const oas = useOas();
    const { getSchemas, getName, getFile } = useOperationManager();

    const client = {
      name: getName(operation, { type: 'function' }),
      file: getFile(operation)
    };

    const url = {
      name: getName(operation, { type: 'function', suffix: 'url', prefix: 'get' }),
      file: getFile(operation)
    };

    const type = {
      file: getFile(operation, { pluginKey: [pluginTsName] }),
      schemas: getSchemas(operation, { pluginKey: [pluginTsName], type: 'type' })
    };

    const zod = {
      file: getFile(operation, { pluginKey: [pluginZodName] }),
      schemas: getSchemas(operation, { pluginKey: [pluginZodName], type: 'function' })
    };

    return (
      // @ts-ignore - JSX runtime module resolution issue
      <File
        baseName={client.file.baseName}
        path={client.file.path}
        meta={client.file.meta}
        banner={getBanner({ oas, output, config: pluginManager.config })}
        footer={getFooter({ oas, output })}
      >
        <File.Import name={'client'} path={options.importPath} />
        <File.Import name={['FetcherConfig', 'ErrorWrapper']} path={options.importPath} isTypeOnly />
        {options.parser === 'zod' && (
          <File.Import
            name={[zod.schemas.response.name, zod.schemas.request?.name].filter(Boolean) as string[]}
            root={client.file.path}
            path={zod.file.path}
          />
        )}
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
          root={client.file.path}
          path={type.file.path}
          isTypeOnly
        />

        <ClientOperation
          name={client.name}
          urlName={url.name}
          baseURL={options.baseURL}
          paramsCasing={options.paramsCasing}
          typeSchemas={type.schemas}
          operation={operation}
          parser={options.parser}
          zodSchemas={zod.schemas}
        />
      </File>
    );
  }
});
