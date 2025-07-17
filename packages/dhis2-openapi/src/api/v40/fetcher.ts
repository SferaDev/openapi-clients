import type { Credentials } from '../../client';
import type { FetchImpl } from '../../utils/fetch';

export type FetcherExtraProps = {
  fetchImpl: FetchImpl;
  baseUrl: string;
  credentials: Credentials;
};

export * from '../fetcher';
