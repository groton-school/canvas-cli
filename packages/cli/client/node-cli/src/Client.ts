import { Canvas } from '@oauth2-cli/canvas';
// TODO replace node-fetch dependency with native fetch when bumping to node@>=21
import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import * as Base from '@groton/canvas-api.client.base';
import { isError } from '@groton/canvas-api.utilities';
import nodeFetch, { fileFromSync, RequestInfo, RequestInit } from 'node-fetch';
import PQueue from 'p-queue';

type RequestInitParams = RequestInit & {
  pathParams?: JSONObject;
  searchParams?: JSONObject;
  params?: JSONObject;
};
type RequestInitMethod = Omit<RequestInitParams, 'method'>;

export class Client extends Canvas implements Base.Base {
  private queue = new PQueue();

  public async fetch(endpoint: URL | RequestInfo, init?: RequestInit) {
    const result = await this.queue.add(
      (async () => {
        return await nodeFetch(new URL(endpoint, this.instance_url), init);
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
    return await Base.fetchAllPages<T>({
      instance_url: this.instance_url,
      endpoint,
      pathParams,
      searchParams,
      params,
      init,
      accessToken: async () => (await this.getToken())?.access_token,
      fetch: this.fetch.bind(this)
    });
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
