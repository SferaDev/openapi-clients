import React from 'react';
import { URLPath } from '@kubb/core/utils';
import { isOptional, type Operation } from '@kubb/oas';
import type { PluginClient } from '@kubb/plugin-client';
import type { OperationSchemas } from '@kubb/plugin-oas';
import { getComments, getPathParams } from '@kubb/plugin-oas/utils';
import { File, Function as FunctionDeclaration, FunctionParams } from '@kubb/react';

export function getParams({
  paramsCasing,
  typeSchemas
}: {
  paramsCasing: PluginClient['resolvedOptions']['paramsCasing'];
  typeSchemas: OperationSchemas;
}) {
  return FunctionParams.factory({
    data: {
      mode: 'object',
      children: {
        pathParams: typeSchemas.pathParams?.name
          ? {
              type: typeSchemas.pathParams?.name,
              mode: 'object',
              children: getPathParams(typeSchemas.pathParams, { typed: true, casing: paramsCasing }),
              optional: isOptional(typeSchemas.pathParams?.schema)
            }
          : undefined,
        body: typeSchemas.request?.name
          ? {
              type: typeSchemas.request?.name,
              optional: isOptional(typeSchemas.request?.schema)
            }
          : undefined,
        queryParams: typeSchemas.queryParams?.name
          ? {
              type: isOptional(typeSchemas.queryParams?.schema)
                ? `${typeSchemas.queryParams?.name} | undefined`
                : typeSchemas.queryParams?.name,
              optional: isOptional(typeSchemas.queryParams?.schema)
            }
          : undefined,
        headers: typeSchemas.headerParams?.name
          ? {
              type: isOptional(typeSchemas.headerParams?.schema)
                ? `${typeSchemas.headerParams?.name} | undefined`
                : typeSchemas.headerParams?.name,
              optional: isOptional(typeSchemas.headerParams?.schema)
            }
          : undefined,
        config: {
          mode: 'inlineSpread',
          type: 'Partial<FetcherConfig> & { client?: typeof client }',
          default: '{}',
          optional: true
        }
      }
    }
  });
}

export const ClientOperation: any = ({
  name,
  isExportable = true,
  isIndexable = true,
  returnType,
  typeSchemas,
  baseURL,
  parser,
  zodSchemas,
  paramsCasing,
  operation,
  urlName,
  children
}: {
  /**
   * Name of the function
   */
  name: string;
  urlName?: string;
  isExportable?: boolean;
  isIndexable?: boolean;
  isConfigurable?: boolean;
  returnType?: string;

  baseURL: string | undefined;
  paramsCasing: PluginClient['resolvedOptions']['paramsCasing'];
  parser: PluginClient['resolvedOptions']['parser'] | undefined;
  typeSchemas: OperationSchemas;
  zodSchemas: OperationSchemas | undefined;
  operation: Operation;
  children?: any;
}) => {
  const path = new URLPath(operation.path, { casing: paramsCasing });
  const contentType = operation.getContentType();
  const isFormData = contentType === 'multipart/form-data';
  const headers = [
    contentType !== 'application/json' ? `'Content-Type': '${contentType}'` : undefined,
    typeSchemas.headerParams?.name ? '...headers' : undefined
  ].filter(Boolean);

  const TError = `ErrorWrapper<${typeSchemas.errors?.map((item) => item.name).join(' | ') || 'Error'}>`;

  const generics = [
    typeSchemas.response.name,
    TError,
    typeSchemas.request?.name || 'null',
    typeSchemas.headerParams?.name || 'Record<string, string>',
    typeSchemas.queryParams?.name || 'Record<string, string>',
    typeSchemas.pathParams?.name || 'Record<string, string>'
  ];
  const params = getParams({ paramsCasing, typeSchemas });

  const clientParams = FunctionParams.factory({
    config: {
      mode: 'object',
      children: {
        method: {
          value: JSON.stringify(operation.method.toUpperCase())
        },
        url: {
          value: path.template
        },
        baseUrl:
          baseURL && !urlName
            ? {
                value: JSON.stringify(baseURL)
              }
            : undefined,
        queryParams: typeSchemas.queryParams?.name ? {} : undefined,
        body: typeSchemas.request?.name
          ? {
              value:
                parser === 'zod' && zodSchemas
                  ? `${zodSchemas.request?.name}.parse(${isFormData ? 'formData' : 'body'})`
                  : isFormData
                    ? 'formData'
                    : undefined
            }
          : undefined,
        requestConfig: {
          mode: 'inlineSpread'
        },
        headers: headers.length
          ? {
              value: `{ ${headers.join(', ')}, ...requestConfig.headers }`
            }
          : undefined
      }
    }
  });

  const formData = isFormData
    ? `
   const formData = new FormData()
   if(body) {
    Object.keys(body).forEach((key) => {
      const value = body[key as keyof typeof body];
      if (typeof key === "string" && (typeof value === "string" || (value as Blob) instanceof Blob)) {
        formData.append(key, value as unknown as string);
      }
    })
   }
  `
    : '';

  const childrenElement = children ? (
    children
  ) : (
    <>
      {parser === 'zod' && zodSchemas && `return ${zodSchemas.response.name}.parse(data)`}
      {parser === 'client' && 'return data'}
    </>
  );

  return (
    // @ts-ignore - JSX runtime module resolution issue
    <File.Source name={name} isExportable={isExportable} isIndexable={isIndexable}>
      <FunctionDeclaration
        name={name}
        async
        export={isExportable}
        params={params.toConstructor()}
        JSDoc={{
          comments: getComments(operation)
        }}
        returnType={returnType}
      >
        {'const { client: request = client, ...requestConfig } = config;'}
        <br />
        <br />
        {typeSchemas.pathParams?.schema &&
          `${Object.keys(typeSchemas.pathParams.schema.properties || {})
            .map((key) => {
              return `if (!${key}) {
              throw new Error(\`Missing required path parameter: ${key}\`);
            }`;
            })
            .join('\n\n')}
        `}
        <br />
        {formData}
        {`const data = await request<${generics.join(', ')}>(${clientParams.toCall()})`}
        <br />
        {childrenElement}
      </FunctionDeclaration>
    </File.Source>
  );
};

ClientOperation.getParams = getParams;
