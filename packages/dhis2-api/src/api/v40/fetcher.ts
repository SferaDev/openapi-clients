import { Credentials } from '../../client';
import { FetchImpl } from '../../utils/fetch';

export type FetcherExtraProps = {
  fetchImpl: FetchImpl;
  baseUrl: string;
  credentials: Credentials;
};

export * from '../fetcher';
