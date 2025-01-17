import { operationsByPath as adminOperations } from './admin/extra';
import { operationsByPath as accountOperations } from './account/extra';
import { FetcherExtraProps, fetch as fetchRequest } from './common/fetcher';
import { FetchImpl } from './utils/fetch';

export interface KeycloakAdminApiOptions {
  baseUrl: string;
  token: string | null;
  fetch?: FetchImpl;
}

export interface KeycloakAccountApiOptions {
  baseUrl: string;
  realm: string;
  token: string | null;
  fetch?: FetchImpl;
}

type AdminRequestEndpointParams<T extends keyof typeof adminOperations> = Omit<
  Parameters<(typeof adminOperations)[T]>[0],
  keyof FetcherExtraProps
>;

type AdminRequestEndpointResult<T extends keyof typeof adminOperations> = ReturnType<(typeof adminOperations)[T]>;

type AccountRequestEndpointParams<T extends keyof typeof accountOperations> = Omit<
  Parameters<(typeof accountOperations)[T]>[0],
  keyof FetcherExtraProps
>;

type AccountRequestEndpointResult<T extends keyof typeof accountOperations> = ReturnType<(typeof accountOperations)[T]>;

export class KeycloakAdminApi {
  #baseUrl: string;
  #token: string | null;
  #fetch: FetchImpl;

  constructor(options: KeycloakAdminApiOptions) {
    this.#baseUrl = options.baseUrl;
    this.#token = options.token;

    this.#fetch = options.fetch || (fetch as FetchImpl);
    if (!this.#fetch) throw new Error('Fetch is required');
  }

  public async request<Endpoint extends keyof typeof adminOperations>(
    endpoint: Endpoint,
    params: AdminRequestEndpointParams<Endpoint>
  ) {
    const [method = '', url = ''] = endpoint.split(' ');
    const extraParams = (params || {}) as Record<string, unknown>;

    const result = await fetchRequest({ ...extraParams, method, url, baseUrl: this.#baseUrl, token: this.#token, fetchImpl: this.#fetch });
    return result as AdminRequestEndpointResult<Endpoint>;
  }
}

export class KeycloakAccountApi {
  #baseUrl: string;
  #realm: string;
  #token: string | null;
  #fetch: FetchImpl;

  constructor(options: KeycloakAccountApiOptions) {
    this.#baseUrl = options.baseUrl;
    this.#realm = options.realm;
    this.#token = options.token;

    this.#fetch = options.fetch || (fetch as FetchImpl);
    if (!this.#fetch) throw new Error('Fetch is required');
  }

  public async request<Endpoint extends keyof typeof accountOperations>(
    endpoint: Endpoint,
    params: AccountRequestEndpointParams<Endpoint>
  ) {
    const baseUrl = `${this.#baseUrl}/realms/${this.#realm}`;
    const [method = '', url = ''] = endpoint.split(' ');
    const extraParams = (params || {}) as Record<string, unknown>;

    const result = await fetchRequest({ ...extraParams, method, url, baseUrl, token: this.#token, fetchImpl: this.#fetch });
    return result as AccountRequestEndpointResult<Endpoint>;
  }
}
