import { Canvas } from '@oauth2-cli/canvas';
// TODO replace node-fetch dependency with native fetch when bumping to node@>=21
import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { isError, stringify } from '@groton/canvas-cli.utilities';
import nodeFetch, { RequestInfo, RequestInit } from 'node-fetch';
import PQueue from 'p-queue';

type RequestInitParams = RequestInit & {
  pathParams?: JSONObject;
  searchParams?: JSONObject;
  params?: JSONObject;
};
type RequestInitMethod = Omit<RequestInitParams, 'method'>;

export class Client extends Canvas {
  private queue = new PQueue();

  public async fetch(endpoint: URL | RequestInfo, init?: RequestInit) {
    const result = await this.queue.add(
      (async () => {
        return await nodeFetch(new URL(endpoint, this.instance_url), {
          ...init,
          headers: {
            ...init?.headers,
            Authorization: `Bearer ${(await this.getToken())?.access_token}`
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
    let nextEndpoint: string | undefined = endpoint.toString();
    let result: T | undefined = undefined;
    if (pathParams) {
      nextEndpoint = Object.keys(pathParams || {}).reduce(
        (populatedEndpoint, paramName) => {
          if (pathParams[paramName]) {
            return populatedEndpoint.replaceAll(
              `{${paramName}}`,
              pathParams[paramName].toString()
            );
          }
          return populatedEndpoint;
        },
        nextEndpoint
      );
    }
    if (params) {
      init.body = new URLSearchParams(stringify(params));
    }
    if (searchParams) {
      nextEndpoint = `${nextEndpoint}${nextEndpoint.includes('?') ? '&' : '?'}${new URLSearchParams(stringify(searchParams))}`;
    }
    do {
      const response = await this.fetch(
        nextEndpoint,
        result ? undefined : init
      );
      if (response.ok) {
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
          nextEndpoint =
            matches && matches.length >= 2 ? matches[1] : undefined;
        } else {
          result = page;
        }
      } else {
        throw new Error(
          JSON.stringify(
            {
              url: response.url,
              status: response.status,
              statusText: response.statusText,
              headers: response.headers,
              response: response.text()
            },
            null,
            2
          )
        );
      }
    } while (Array.isArray(result) && nextEndpoint);

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
