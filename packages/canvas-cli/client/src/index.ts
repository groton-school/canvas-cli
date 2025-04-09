// TODO replace node-fetch dependency with native fetch when bumping to node@>=21
import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { Canvas } from '@oauth2-cli/canvas';
import nodeFetch, { RequestInfo, RequestInit } from 'node-fetch';
import PQueue from 'p-queue';
import { isError, stringify } from './Utilities/index.js';

export * as Utilities from './Utilities/index.js';

type RequestInitParams = RequestInit & {
  pathParams?: JSONObject;
  searchParams?: JSONObject;
  params?: JSONObject;
};
type RequestInitMethod = Omit<RequestInitParams, 'method'>;

export type Paginated = { per_page?: number };

export class Client extends Canvas {
  private queue = new PQueue();

  public async fetch(endpoint: URL | RequestInfo, init?: RequestInit) {
    const result = await this.queue.add(
      (async () => {
        return await nodeFetch(new URL(endpoint, this.instance_url), {
          ...init,
          headers: {
            ...init?.headers,
            Authorization: `Bearer ${await this.getToken()}`
          }
        });
      }).bind(this)
    );
    if (result) {
      return result;
    } else {
      throw new Error(`No result from fetch`);
    }
  }

  public async fetchAs<T = JSONValue>(
    endpoint: URL | RequestInfo,
    { pathParams, searchParams, params, ...init }: RequestInitParams = {}
  ): Promise<T> {
    // TODO monitor quota usage and add delays as necessary
    // TODO retry failed requests due to quota limits
    let result: T | undefined = undefined;
    let next: string | undefined = endpoint.toString();
    endpoint = endpoint.toString();
    if (pathParams) {
      endpoint = Object.keys(pathParams || {}).reduce((endpoint, paramName) => {
        if (pathParams[paramName]) {
          return endpoint.replaceAll(
            `{${paramName}}`,
            pathParams[paramName].toString()
          );
        }
        return endpoint;
      }, endpoint);
    }
    if (params) {
      init.body = new URLSearchParams(stringify(params));
    }
    if (searchParams) {
      endpoint = `${endpoint}${endpoint.includes('?') ? '&' : '?'}${new URLSearchParams(stringify(searchParams))}`;
    }
    do {
      const response = await this.fetch(next, result ? undefined : init);
      const page = (await response.json()) as T;
      if (isError(page)) {
        throw new Error(
          `Error: ${JSON.stringify({ endpoint, init, response, error: page })}`
        );
      }
      if (Array.isArray(page)) {
        if (!result) {
          result = page;
        } else {
          result.push(...page);
        }
        const matches = /<([^>]+)>;\s*rel="next"/gm.exec(
          response!.headers.get('link') || ''
        );
        next = matches && matches.length >= 2 ? matches[1] : undefined;
      }
    } while (Array.isArray(result) && next);

    if (result === undefined) {
      throw new Error(
        `Unexpected undefined result: ${JSON.stringify({ endpoint, init: result ? undefined : init })}`
      );
    }
    return result;
  }

  public async get<T = JSONValue>(
    endpoint: URL | RequestInfo,
    init?: RequestInitMethod
  ) {
    return this.fetchAs<T>(endpoint, { ...init, method: 'GET' });
  }

  public async post<T = JSONValue>(
    endpoint: URL | RequestInfo,
    init?: RequestInitMethod
  ) {
    return this.fetchAs<T>(endpoint, { ...init, method: 'POST' });
  }

  public async put<T = JSONValue>(
    endpoint: URL | RequestInfo,
    init?: RequestInitMethod
  ) {
    return this.fetchAs<T>(endpoint, { ...init, method: 'PUT' });
  }

  public async delete<T = JSONValue>(
    endpoint: URL | RequestInfo,
    init?: RequestInitMethod
  ) {
    return this.fetchAs<T>(endpoint, { ...init, method: 'DELETE' });
  }
}
