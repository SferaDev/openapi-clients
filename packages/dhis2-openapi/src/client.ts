import { operationsByTag as v40Operations } from './api/v40/components';
import { operationsByTag as v41Operations } from './api/v41/components';
import { FetcherExtraProps } from './api/fetcher';
import { FetchImpl } from './utils/fetch';
import { RequiredKeys } from './utils/types';

type DHIS2Version = 'v40' | 'v41';

export type Credentials =
  | {
    type: 'basic';
    username: string;
    password: string;
  }
  | {
    type: 'apiToken';
    token: string;
  };

export interface Dhis2ApiOptions<Version extends DHIS2Version> {
  version: Version;
  baseUrl: string;
  credentials: Credentials;
  fetch?: FetchImpl;
}

type OperationsByTag<Version extends DHIS2Version> = Version extends 'v40'
  ? typeof v40Operations
  : Version extends 'v41'
  ? typeof v41Operations
  : never;

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

export class Dhis2Api<Version extends DHIS2Version> {
  #version: Version;
  #baseUrl: string;
  #credentials: Credentials;
  #fetch: FetchImpl;

  constructor(options: Dhis2ApiOptions<Version>) {
    this.#version = options.version;
    if (!options.version) throw new Error('Version is required');

    this.#fetch = options.fetch || (fetch as FetchImpl);
    if (!this.#fetch) throw new Error('Fetch is required');

    this.#credentials = options.credentials;
    if (!['basic', 'apiToken'].includes(options.credentials.type)) {
      throw new Error('Invalid credentials type');
    }

    this.#baseUrl = options.baseUrl;
    if (!options.baseUrl) throw new Error('Base URL is required');
  }

  get api() {
    const fetchImpl = this.#fetch;
    const baseUrl = this.#baseUrl;
    const credentials = this.#credentials;
    const operationsByTag: Record<string, Record<string, unknown>> = this.#version === 'v40' ? v40Operations : v41Operations;

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
                  return await method({ ...params, baseUrl, credentials, fetchImpl });
                };
              }
            }
          );
        }
      }
    ) as ApiProxy<Version>;
  }
}
