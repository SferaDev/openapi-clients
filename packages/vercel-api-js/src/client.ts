import { operationsByTag } from "./api/components";
import { FetcherExtraProps } from "./api/fetcher";
import { FetchImpl } from "./utils/fetch";
import { RequiredKeys } from "./utils/types";

export interface VercelApiOptions {
  token: string;
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

export class VercelApi {
  #token: string;
  #fetch: FetchImpl;

  constructor(options: VercelApiOptions) {
    this.#token = options.token;
    if (!options.token) throw new Error("Token is required");

    this.#fetch = options.fetch || fetch;
    if (!this.#fetch) throw new Error("Fetch is required");
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

                return (params: Record<string, unknown>) => {
                  return method({ ...params, token, fetchImpl });
                };
              },
            }
          );
        },
      }
    ) as ApiProxy;
  }
}
