export type RequestInit = { body?: string | FormData; headers?: Record<string, string>; method?: string; signal?: any };

export type Response = {
    ok: boolean;
    status: number;
    url: string;
    json(): Promise<any>;
    text(): Promise<string>;
    headers?: {
        get(name: string): string | null;
    };
};

// Typed only the subset of the spec we actually use (to be able to build a simple mock)
export type FetchImpl = (url: string, init?: RequestInit) => Promise<Response>;
