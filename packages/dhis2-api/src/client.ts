import { operationsByTag as v40Operations } from './api/v40/components';
import { FetcherExtraProps } from './api/fetcher';
import { FetchImpl } from './utils/fetch';
import { RequiredKeys } from './utils/types';

type DHIS2Version = 'v40';

export interface VercelApiOptions<Version extends DHIS2Version> {
  version: Version;
  fetch?: FetchImpl;
}

const operationsByTagDict = {
  v40: v40Operations
} as const;

type OperationsByTag<Version extends DHIS2Version> = (typeof operationsByTagDict)[Version];

type ApiProxy<Version extends DHIS2Version> = {
  [Tag in keyof OperationsByTag<Version>]: {
    [Method in keyof OperationsByTag<Version>[Tag]]: OperationsByTag<Version>[Tag][Method] extends infer Operation extends (
      ...args: any
    ) => any
      ? Omit<Parameters<Operation>[0], keyof FetcherExtraProps> extends infer Params
        ? RequiredKeys<Params> extends never
          ? (params?: Params) => ReturnType<Operation>
          : (params: Params) => ReturnType<Operation>
        : never
      : never;
  };
};

export class VercelApi<Version extends DHIS2Version> {
  #version: Version;
  #fetch: FetchImpl;

  constructor(options: VercelApiOptions<Version>) {
    this.#version = options.version;
    if (!options.version) throw new Error('Version is required');

    this.#fetch = options.fetch || (fetch as FetchImpl);
    if (!this.#fetch) throw new Error('Fetch is required');
  }

  get api() {
    const fetchImpl = this.#fetch;
    const operationsByTag: Record<string, Record<string, unknown>> = operationsByTagDict[this.#version];

    return new Proxy(
      {},
      {
        get: (_target, namespace: string) => {
          if (operationsByTag[namespace] === undefined) {
            return undefined;
          }

          return new Proxy(
            {},
            {
              get: (_target, operation: string) => {
                if (operationsByTag[namespace]?.[operation] === undefined) {
                  return undefined;
                }

                const method = operationsByTag[namespace]?.[operation] as any;

                return async (params: Record<string, unknown>) => {
                  return await method({ ...params, fetchImpl });
                };
              }
            }
          );
        }
      }
    ) as ApiProxy<Version>;
  }
}
