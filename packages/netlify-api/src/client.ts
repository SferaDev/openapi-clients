import { operationsByTag } from './api/components';
import { FetcherExtraProps, baseUrl } from './api/fetcher';
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

                return (params: Record<string, unknown>) => {
                  return method({ ...params, token, fetchImpl, basePath });
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
      refreshToken: ({ refreshToken, authToken, clientId, clientSecret }: RefreshTokenOptions) => {
        return this.#fetch(`${baseUrl}/oauth/token`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${authToken}` },
          body: JSON.stringify({
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
            client_id: clientId,
            client_secret: clientSecret
          })
        });
      }
    };
  }
}

type RefreshTokenOptions = {
  refreshToken: string;
  authToken: string;
  clientId: string;
  clientSecret: string;
};
