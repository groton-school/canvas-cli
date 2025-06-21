import { Canvas } from '@oauth2-cli/canvas';
// TODO replace node-fetch dependency with native fetch when bumping to node@>=21
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import * as Base from '@groton/canvas-cli.client.base';
import { isError, stringify } from '@groton/canvas-cli.utilities';
import nodeFetch, { fileFromSync, RequestInfo, RequestInit } from 'node-fetch';
import PQueue from 'p-queue';

type RequestInitParams = RequestInit & {
  pathParams?: JSONObject;
  searchParams?: JSONObject;
  params?: JSONObject;
};
type RequestInitMethod = Omit<RequestInitParams, 'method'>;

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Accept: 'application/json+canvas-string-ids'
};

export class Client extends Canvas implements Base.Base {
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
      init.body = stringify(params);
      if (!init.headers) {
        init.headers = {};
      }
      init.headers = { ...init.headers, ...headers };
    }
    if (searchParams) {
      nextEndpoint = `${nextEndpoint}${nextEndpoint.includes('?') ? '&' : '?'}${stringify(searchParams)}`;
    }
    do {
      const response = await this.fetch(
        nextEndpoint,
        result ? undefined : init
      );
      if (response.ok) {
        const page = (await response.json()) as T;
        Log.debug(
          `${Colors.command(`${Colors.keyword(init.method || 'GET')} ${nextEndpoint}`)}${result ? '' : init.body && typeof init.body === 'object' ? `\n${Log.syntaxColor(init.body)}` : ''}\n\n${Log.syntaxColor(page as object)}`
        );
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
        const details = {
          url: response.url,
          body: result ? undefined : init.body,
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
          response: response.text()
        };
        Log.error(
          `${Colors.command(`${Colors.keyword(init.method || 'GET')} ${nextEndpoint}`)}\n${Log.syntaxColor(
            details
          )}`
        );
        throw new Error(JSON.stringify(details, null, 2));
      }
    } while (Array.isArray(result) && nextEndpoint);

    if (result === undefined) {
      throw new Error(
        `Unexpected undefined result: ${JSON.stringify({ endpoint, init: result ? undefined : init })}`
      );
    }
    return result;
  }

  public async upload<T = JSONValue>({
    response,
    file
  }: Base.UploadParams): Promise<T> {
    const body = new FormData();
    for (const key in response.upload_params) {
      body.append(key, response.upload_params[key]);
    }
    if (file.filePath) {
      body.append('file', fileFromSync(file.filePath));
    } else if (file.url) {
      // FIXME implement URL upload too!
    }
    const confirm = await fetch(response.upload_url, {
      method: 'POST',
      body
    });
    let result: T;
    switch (confirm.status) {
      case 301:
      case 201:
        if (confirm.headers.has('location')) {
          result = await this.fetchAs<T>(confirm.headers.get('location')!);
          if (!isError(result)) {
            return result;
          }
        }
      // eslint-disable-next-line no-fallthrough
      default:
        throw new Error(
          `Error uploading file: ${{
            file,
            confirm,
            error: await confirm.json()
          }}`
        );
    }
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
