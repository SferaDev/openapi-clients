import { operationsByPath } from './admin/extra';
import { FetcherExtraProps, fetch as fetchRequest } from './admin/fetcher';
import { FetchImpl } from './utils/fetch';

export interface KeycloakApiOptions {
  baseUrl: string;
  token: string | null;
  fetch?: FetchImpl;
}

type RequestEndpointParams<T extends keyof typeof operationsByPath> = Omit<
  Parameters<(typeof operationsByPath)[T]>[0],
  keyof FetcherExtraProps
>;

type RequestEndpointResult<T extends keyof typeof operationsByPath> = ReturnType<(typeof operationsByPath)[T]>;

export class KeycloakApi {
  #baseUrl: string;
  #token: string | null;
  #fetch: FetchImpl;

  constructor(options: KeycloakApiOptions) {
    this.#baseUrl = options.baseUrl;
    this.#token = options.token;

    this.#fetch = options.fetch || (fetch as FetchImpl);
    if (!this.#fetch) throw new Error('Fetch is required');
  }

  public async request<Endpoint extends keyof typeof operationsByPath>(
    endpoint: Endpoint,
    params: RequestEndpointParams<Endpoint>
  ) {
    const [method = '', url = ''] = endpoint.split(' ');
    const extraParams = (params || {}) as Record<string, unknown>;

    const result = await fetchRequest({ ...extraParams, method, url, baseUrl: this.#baseUrl, token: this.#token, fetchImpl: this.#fetch });
    return result as RequestEndpointResult<Endpoint>;
  }
}
