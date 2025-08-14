import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import * as Canvas from '@groton/canvas-api';
import * as Base from '@groton/canvas-api.client.base';
import PQueue from 'p-queue';
import path from 'path-browserify';

type RequestInitParams = RequestInit & {
  pathParams?: JSONObject;
  searchParams?: JSONObject;
  params?: JSONObject;
};

export type Options = {
  scope?: string;
  headers?: Record<string, string>;
  parameters?: Record<string, string>;
  instance_url: string;
};

export class Client implements Base.Base {
  private queue = new PQueue();
  public readonly instance_url: string;

  public constructor(options: Options = { instance_url: '/canvas/proxy' }) {
    this.instance_url = options.instance_url;
  }

  public async fetch(endpoint: URL | RequestInfo, init?: RequestInit) {
    if (!(endpoint instanceof Request)) {
      endpoint = path.join(this.instance_url, endpoint.toString());
    }
    const result = await this.queue.add(
      (async () => {
        return await fetch(endpoint, init);
      }).bind(this)
    );
    if (result) {
      if (result.status === 401) {
        this.authorize();
      }
      return result;
    } else {
      throw new Error(`No result from fetch`);
    }
  }

  public async fetchAs<T = JSONValue>(
    endpoint: string,
    { pathParams, searchParams, params, ...init }: RequestInitParams = {}
  ): Promise<T> {
    return await Base.fetchAllPages<T>({
      instance_url: this.instance_url,
      endpoint,
      pathParams,
      searchParams,
      params,
      init,
      fetch: this.fetch.bind(this)
    });
  }

  public async upload<T = JSONValue>(params: Base.UploadParams): Promise<T> {
    throw new Error('not implemented');
  }

  public authorize() {
    window.location.href = path.resolve(
      this.instance_url,
      '../login/authorize'
    );
  }

  public async deauthorize(redirect: string = '/') {
    await fetch(path.resolve(this.instance_url, '../login/deauthorize'));
    window.location.href = redirect;
  }

  public async getOwner() {
    const response = await fetch(path.resolve(this.instance_url, '../owner'));
    if (response.ok) {
      return (await response.json()) as Canvas.Users.Profile;
    }
    return undefined;
  }

  public async isAuthorized() {
    return !!(await this.getOwner());
  }
}
