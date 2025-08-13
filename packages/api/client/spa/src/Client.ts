import * as Configuration from '@battis/oauth2-configure';
import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import * as Base from '@groton/canvas-api.client.base';
import PQueue from 'p-queue';
import path from 'path-browserify';
import Cookies from 'universal-cookie';

type RequestInitParams = RequestInit & {
  pathParams?: JSONObject;
  searchParams?: JSONObject;
  params?: JSONObject;
};

export type Options = Configuration.Options & {
  scope?: string;
  headers?: Record<string, string>;
  parameters?: Record<string, string>;
  instance_url: string;
  cookie: string;
  oauth_root: string;
};

type AccessToken = {
  token_type: 'Bearer';
  user: {
    id: number;
    name: string;
    global_id: string;
    effective_locale: string;
    fake_student: boolean;
  };
  canvas_region: string;
  access_token: string;
  refresh_token: string;
  expires: number;
};

const cookies = new Cookies();

export class Client implements Base.Base {
  private queue = new PQueue();
  public readonly instance_url: string;
  private cookie: string;
  private oauth_root: string;

  public constructor(options: Options) {
    this.instance_url = options.instance_url;
    this.cookie = options.cookie;
    this.oauth_root = options.oauth_root;
  }

  private async getToken() {
    let token = cookies.get(this.cookie) as AccessToken | undefined;
    if (token) {
      if (token.expires > Date.now()) {
        return token;
      } else {
        await fetch(path.join(this.oauth_root, 'refresh'));
        token = cookies.get(this.cookie) as AccessToken | undefined;
        if (token) {
          return token;
        }
      }
    }
    window.location.href = `${this.oauth_root}/authorize`;
    return undefined;
  }

  public async fetch(endpoint: URL | RequestInfo, init?: RequestInit) {
    if (!(endpoint instanceof Request)) {
      endpoint = new URL(endpoint, this.instance_url);
    }
    const result = await this.queue.add(
      (async () => {
        return await fetch(endpoint, init);
      }).bind(this)
    );
    if (result) {
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
      accessToken: async () => (await this.getToken())?.access_token,
      fetch: this.fetch.bind(this)
    });
  }

  public async upload<T = JSONValue>(params: Base.UploadParams): Promise<T> {
    throw new Error('not implemented');
  }
}
