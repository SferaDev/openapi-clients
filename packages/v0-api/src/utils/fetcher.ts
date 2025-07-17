import type { FetchImpl } from './fetch';
import { compactObject } from './lang';

export type FetcherConfig = {
  baseUrl?: string;
  token?: string | null;
  fetchImpl?: FetchImpl;
  headers?: Record<string, any>;
};

export type ErrorWrapper<TError> = TError | { status: 'unknown'; payload: string };

export type FetcherOptions<TBody, THeaders, TQueryParams, TPathParams> = {
  url: string;
  method: string;
  body?: TBody | undefined;
  headers?: THeaders | undefined;
  queryParams?: TQueryParams | undefined;
  pathParams?: TPathParams | undefined;
  signal?: AbortSignal | undefined;
} & FetcherConfig;

export async function client<TData, TError, TBody, THeaders, TQueryParams, TPathParams>({
  url,
  method,
  body,
  headers,
  queryParams,
  signal,
  token = null,
  baseUrl = '',
  fetchImpl = fetch as FetchImpl
}: FetcherOptions<TBody, THeaders, TQueryParams, TPathParams>): Promise<TData> {
  try {
    const requestHeaders: HeadersInit = compactObject({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : undefined,
      ...headers
    });

    /**
     * As the fetch API is being used, when multipart/form-data is specified
     * the Content-Type header must be deleted so that the browser can set
     * the correct boundary.
     * https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects#sending_files_using_a_formdata_object
     */
    if (requestHeaders['Content-Type']?.toLowerCase().includes('multipart/form-data')) {
      delete requestHeaders['Content-Type'];
    }

    const payload =
      body instanceof FormData
        ? body
        : requestHeaders['Content-Type'] === 'application/json'
          ? JSON.stringify(body)
          : (body as unknown as string);

    const fullUrl = `${baseUrl}${resolveUrl(url, queryParams)}`;

    const response = await fetchImpl(fullUrl, {
      signal,
      method: method.toUpperCase(),
      body: payload,
      headers: requestHeaders
    });

    if (!response.ok) {
      let error: ErrorWrapper<TError>;
      try {
        error = await response.json();
      } catch (e) {
        error = {
          status: 'unknown' as const,
          payload: e instanceof Error ? `Unexpected error (${e.message})` : 'Unexpected error'
        };
      }
      throw error;
    }

    if (response.headers?.get('content-type')?.includes('json')) {
      return await response.json();
    } else {
      // if it is not a json response, assume it is a blob and cast it to TData
      return (await response.text()) as unknown as TData;
    }
  } catch (e) {
    const errorObject: Error = {
      name: 'unknown' as const,
      message: (e as any)?.message ? `${(e as any)?.message}` : 'Network error'
    };
    throw errorObject;
  }
}

const resolveUrl = (url: string, queryParams: any = {}) => {
  let query = new URLSearchParams(queryParams).toString();
  if (query) query = `?${query}`;
  return url + query;
};

export default client;
