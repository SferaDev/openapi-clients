import { operationsByTag } from './api/components';
import { operationsByPath } from './api/extra';
import { FetcherExtraProps, fetch as netlifyFetch } from './api/fetcher';
import { FetchImpl } from './utils/fetch';
import { RequiredKeys } from './utils/types';

export interface NetlifyApiOptions {
  token: string;
  fetch?: FetchImpl;
  basePath?: string;
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

export class NetlifyApi {
  #token: string;
  #fetch: FetchImpl;
  #basePath: string;

  constructor(options: NetlifyApiOptions) {
    this.#token = options.token;
    if (!options.token) throw new Error('Token is required');

    this.#fetch = options.fetch || (fetch as FetchImpl);
    if (!this.#fetch) throw new Error('Fetch is required');

    this.#basePath = options.basePath || '/api/v1';
  }

  get api() {
    const token = this.#token;
    const fetchImpl = this.#fetch;
    const basePath = this.#basePath;

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
                  return await method({ ...params, token, fetchImpl, basePath });
                };
              }
            }
          );
        }
      }
    ) as ApiProxy;
  }

  get auth() {
    return {
      refreshToken: async ({
        refreshToken,
        authToken,
        clientId,
        clientSecret
      }: RefreshTokenOptions): Promise<RefreshTokenResult> => {
        const result: {
          token_type: string;
          access_token: string;
          refresh_token: string;
          scope: string;
          created_at: number;
        } = await netlifyFetch({
          method: 'POST',
          url: '/oauth/token',
          body: {
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
            client_id: clientId,
            client_secret: clientSecret
          },
          token: authToken || this.#token,
          fetchImpl: this.#fetch,
          basePath: ''
        });

        return {
          tokenType: result.token_type,
          accessToken: result.access_token,
          refreshToken: result.refresh_token,
          scope: result.scope,
          createdAt: result.created_at
        };
      }
    };
  }

  public async request<Endpoint extends keyof typeof operationsByPath>(
    endpoint: Endpoint,
    params: RequestEndpointParams<Endpoint>
  ) {
    const [method = '', url = ''] = endpoint.split(' ');
    const extraParams = (params || {}) as Record<string, unknown>;

    const result = await netlifyFetch({
      ...extraParams,
      method,
      url,
      token: this.#token,
      fetchImpl: this.#fetch,
      basePath: this.#basePath
    });

    return result as RequestEndpointResult<Endpoint>;
  }
}

type RefreshTokenOptions = {
  refreshToken: string;
  authToken?: string;
  clientId: string;
  clientSecret: string;
};

type RefreshTokenResult = {
  tokenType: string;
  accessToken: string;
  refreshToken: string;
  scope: string;
  createdAt: number;
};
