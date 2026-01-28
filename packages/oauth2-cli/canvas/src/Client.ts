import { URLString } from '@battis/descriptive-types';
import { importLocal } from '@battis/import-package-json';
import { JSONValue } from '@battis/typescript-tricks';
import {
  Base,
  fetchAllPages,
  Init,
  UploadParams
} from '@groton/canvas-api.client.base';
import { isError } from '@groton/canvas-api.utilities';
import * as OAuth2 from '@oauth2-cli/qui-cli/dist/OAuth2.js';
import { Log } from '@qui-cli/log';
import fs from 'node:fs';
import os from 'node:os';

export type Credentials = OAuth2.Credentials & {
  instance_url: URLString;
  user_agent?: string;
};

export class Client extends OAuth2.Client implements Base {
  public readonly instance_url: URLString;
  private user_agent: string;

  public constructor({
    instance_url,
    user_agent,
    ...credentials
  }: Credentials) {
    super(credentials);
    this.instance_url = instance_url;
    if (user_agent) {
      this.user_agent = user_agent;
    } else {
      this.user_agent = `@oauth2-cli/canvas Node.js/${process.versions.node} ${os.platform()}/${os.version()}`;
      importLocal('../package.json').then((pkg) => {
        this.user_agent = `@oauth2-cli/canvas/${pkg.version} Node.js/${process.versions.node} ${os.platform()}/${os.version()}`;
      });
    }
  }

  public async fetchAs<T extends JSONValue = JSONValue>(
    endpoint: string,
    { method, ...init }: Init = {}
  ): Promise<T> {
    return fetchAllPages<T>({
      endpoint,
      instance_url: this.instance_url,
      ...init,
      init: {
        method,
        headers: { 'User-Agent': this.user_agent }
      },
      accessToken: async () => (await this.getToken())?.access_token,
      fetch: async (...request) => {
        Log.debug({ request });
        const response = await fetch(...request);
        Log.debug({ ok: response.ok, status: response.status });
        return response;
      }
    });
  }

  public async upload<T extends JSONValue = JSONValue>({
    response,
    file
  }: UploadParams): Promise<T> {
    const body = new FormData();
    for (const key in response.upload_params) {
      body.append(key, response.upload_params[key]);
    }
    if (file.filePath) {
      body.append('file', await fs.openAsBlob(file.filePath));
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
          result = await this.fetchJSON<T>(confirm.headers.get('location')!);
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

  public request(
    ...args: Parameters<OAuth2.OAuth2Plugin['request']>
  ): Promise<Response> {
    let [url] = args;
    const [, method, body, headers = new Headers(), dPoPOptions] = args;
    if (typeof url === 'string') {
      url = new URL(url, this.instance_url);
    }
    if (!headers.has('user-agent')) {
      headers.set('user-agent', this.user_agent);
    }
    return super.request(url, method, body, headers, dPoPOptions);
  }
}
