export type RequestInit = {
  body?: string | FormData | undefined;
  headers?: Record<string, string> | undefined;
  method?: string | undefined;
  signal?: any | undefined;
};

export type Response = {
  ok: boolean;
  status: number;
  url: string;
  json(): Promise<any>;
  text(): Promise<string>;
  headers?:
  | {
    get(name: string): string | null;
  }
  | undefined;
};

// Typed only the subset of the spec we actually use (to be able to build a simple mock)
export type FetchImpl = (url: string, init?: RequestInit | undefined) => Promise<Response>;
