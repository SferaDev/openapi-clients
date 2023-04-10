import { operationsByTag } from './api/components';
import { operationsByPath } from './api/extra';
import { FetcherExtraProps, fetch as vercelFetch } from './api/fetcher';
import { FetchImpl, formEncoded } from './utils/fetch';
import { RequiredKeys } from './utils/types';

export interface VercelApiOptions {
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

export class VercelApi {
  #token: string | null;
  #fetch: FetchImpl;

  constructor(options: VercelApiOptions) {
    this.#token = options.token;

    this.#fetch = options.fetch || (fetch as FetchImpl);
    if (!this.#fetch) throw new Error('Fetch is required');
  }

  get api() {
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
                  return await method({ ...params, token, fetchImpl });
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
      accessToken: async ({
        code,
        redirectUri,
        clientId,
        clientSecret
      }: AccessTokenOptions): Promise<AccessTokenResult> => {
        return await vercelFetch({
          method: 'POST',
          url: `/v2/oauth/access_token`,
          token: null,
          fetchImpl: this.#fetch,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: formEncoded({ code, redirect_uri: redirectUri, client_id: clientId, client_secret: clientSecret })
        });
      }
    };
  }

  public async request<Endpoint extends keyof typeof operationsByPath>(
    endpoint: Endpoint,
    params: RequestEndpointParams<Endpoint>
  ) {
    const [method = '', url = ''] = endpoint.split(' ');
    const extraParams = (params || {}) as Record<string, unknown>;

    const result = await vercelFetch({ ...extraParams, method, url, token: this.#token, fetchImpl: this.#fetch });
    return result as RequestEndpointResult<Endpoint>;
  }
}

type AccessTokenOptions = {
  redirectUri: string;
  code: string;
  clientId: string;
  clientSecret: string;
};

type AccessTokenResult = {
  accessToken: string;
  tokenType: string;
  installationId: string;
  userId: string;
  teamId: string | null;
};
