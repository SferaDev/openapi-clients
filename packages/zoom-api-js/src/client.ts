import { operationsByPath as meetingOperationsByPath } from './meeting/extra';
import { FetcherExtraProps, fetch as zoomFetch } from './meeting/fetcher';
import { FetchImpl } from './utils/fetch';

export interface ZoomApiOptions {
  token: string | null;
  fetch?: FetchImpl;
}

type MeetingRequestEndpointParams<T extends keyof typeof meetingOperationsByPath> = Omit<
  Parameters<(typeof meetingOperationsByPath)[T]>[0],
  keyof FetcherExtraProps
>;

type MeetingRequestEndpointResult<T extends keyof typeof meetingOperationsByPath> = ReturnType<(typeof meetingOperationsByPath)[T]>;

export class ZoomApi {
  #token: string | null;
  #fetch: FetchImpl;

  constructor(options: ZoomApiOptions) {
    this.#token = options.token;

    this.#fetch = options.fetch || (fetch as FetchImpl);
    if (!this.#fetch) throw new Error('Fetch is required');
  }

  public async request<Endpoint extends keyof typeof meetingOperationsByPath>(
    endpoint: Endpoint,
    params: MeetingRequestEndpointParams<Endpoint>
  ) {
    const [method = '', url = ''] = endpoint.split(' ');
    const extraParams = (params || {}) as Record<string, unknown>;

    const result = await zoomFetch({ ...extraParams, method, url, token: this.#token, fetchImpl: this.#fetch });
    return result as MeetingRequestEndpointResult<Endpoint>;
  }
}
