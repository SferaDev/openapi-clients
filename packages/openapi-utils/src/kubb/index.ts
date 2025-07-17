import { UserConfig } from '@kubb/core';
import { pluginClient } from '@kubb/plugin-client';
import { pluginMcp } from '@kubb/plugin-mcp';
import { pluginOas } from '@kubb/plugin-oas';
import { pluginTs } from '@kubb/plugin-ts';
import { pluginZod } from '@kubb/plugin-zod';
import { extraGenerator } from './client/extra';
import { clientGenerator } from './client/operations';
import { serverGenerator } from './mcp/server';
import { toolsGenerator } from './mcp/tools';

export const baseConfig = {
    root: '.',
    output: {
        path: './src/generated'
    },
    plugins: [
        pluginOas({
            validate: false,
            output: {
                path: './json',
                barrelType: false
            },
            serverIndex: 0,
            contentType: 'application/json'
        }),
        pluginTs({
            output: {
                path: './types.ts',
                barrelType: false
            },
            enumType: 'asConst',
            enumSuffix: 'Enum',
            dateType: 'string',
            unknownType: 'unknown',
            optionalType: 'questionTokenAndUndefined',
            oasType: false
        }),
        pluginClient({
            output: {
                path: './components.ts',
                barrelType: false
            },
            client: 'fetch',
            dataReturnType: 'data',
            pathParamsType: 'object',
            paramsType: 'object',
            urlType: 'export',
            importPath: '../utils/fetcher',
            generators: [clientGenerator, extraGenerator]
        }),
        pluginZod({
            output: {
                path: './schemas.ts',
                barrelType: false
            },
            typed: false, // Workaround for https://github.com/kubb-labs/kubb/issues/1775
            dateType: 'date',
            unknownType: 'unknown',
            importPath: 'zod',
            version: '4'
        }),
        pluginMcp({
            output: {
                path: './mcp.ts',
                barrelType: false
            },
            client: { importPath: '../utils/fetcher' },
            generators: [toolsGenerator, serverGenerator]
        })
    ]
} satisfies Omit<UserConfig, 'input'>;
