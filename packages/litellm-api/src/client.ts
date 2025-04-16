import { operationsByTag } from './api/components';
import { operationsByPath } from './api/extra';
import { FetcherExtraProps, fetch as apiFetch } from './api/fetcher';
import { FetchImpl } from './utils/fetch';
import { RequiredKeys } from './utils/types';

export interface LiteLLMApiOptions {
  baseUrl: string;
  token: string | null;
  fetch?: FetchImpl;
}

type ApiProxy = {
  [Tag in keyof typeof operationsByTag]: {
    [Method in keyof (typeof operationsByTag)[Tag]]: (typeof operationsByTag)[Tag][Method] extends infer Operation extends (
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

type RequestEndpointParams<T extends keyof typeof operationsByPath> = Omit<
  Parameters<(typeof operationsByPath)[T]>[0],
  keyof FetcherExtraProps
>;

type RequestEndpointResult<T extends keyof typeof operationsByPath> = ReturnType<(typeof operationsByPath)[T]>;

export class LiteLLMApi {
  #baseUrl: string;
  #token: string | null;
  #fetch: FetchImpl;

  constructor(options: LiteLLMApiOptions) {
    this.#baseUrl = options.baseUrl;
    this.#token = options.token;

    this.#fetch = options.fetch || (fetch as FetchImpl);
    if (!this.#fetch) throw new Error('Fetch is required');
  }

  get api() {
    const baseUrl = this.#baseUrl;
    const token = this.#token;
    const fetchImpl = this.#fetch;

    return new Proxy(
      {},
      {
        get: (_target, namespace: keyof typeof operationsByTag) => {
          if (operationsByTag[namespace] === undefined) {
            return undefined;
          }

          return new Proxy(
            {},
            {
              get: (_target, operation: keyof (typeof operationsByTag)[keyof typeof operationsByTag]) => {
                if (operationsByTag[namespace][operation] === undefined) {
                  return undefined;
                }

                const method = operationsByTag[namespace][operation] as any;

                return async (params: Record<string, unknown>) => {
                  return await method({ ...params, baseUrl, token, fetchImpl });
                };
              }
            }
          );
        }
      }
    ) as ApiProxy;
  }

  public async request<Endpoint extends keyof typeof operationsByPath>(
    endpoint: Endpoint,
    params: RequestEndpointParams<Endpoint>
  ) {
    const [method = '', url = ''] = endpoint.split(' ');
    const extraParams = (params || {}) as Record<string, unknown>;

    const result = await apiFetch({
      ...extraParams, method, url, baseUrl: this.#baseUrl,
      token: this.#token, fetchImpl: this.#fetch
    });
    return result as RequestEndpointResult<Endpoint>;
  }
}
