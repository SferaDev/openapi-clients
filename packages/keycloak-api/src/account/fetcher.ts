import { FetchImpl } from '../utils/fetch';

export type FetcherExtraProps = {
  baseUrl: string;
  token: string | null;
  fetchImpl: FetchImpl;
};

export * from '../common/fetcher';
