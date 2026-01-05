import { JSONValue } from '@battis/typescript-tricks';
import * as Base from '@groton/canvas-api.client.base';
import { isError } from '@groton/canvas-api.utilities';
import {
  Configuration as BaseConfiguration,
  Credentials as BaseCredentials,
  ConfigurationProposal,
  OAuth2
} from '@oauth2-cli/qui-cli/dist/OAuth2.js';
import fs from 'node:fs';
import path from 'node:path';

export type Credentials = Omit<
  BaseCredentials,
  'authorization_endpoint' | 'token_endpoint'
> & {
  instance_url: string;
  user_agent?: string;
};

type CanvasConfiguration = {
  headers?: BaseConfiguration['headers'];
  instance_url?: string;
  user_agent?: string;
};

export type Configuration = ConfigurationProposal & CanvasConfiguration;

export class Client extends OAuth2 implements Base.Base {
  public constructor(name = '@oauth2-cli/canvas') {
    super(name);
  }

  private conf: CanvasConfiguration = {
    user_agent: '@oauth2-cli/canvas (Node.js)'
  };

  public get instance_url() {
    if (this.conf.instance_url) {
      return this.conf.instance_url;
    }
    throw new Error('instance_url property undefined');
  }

  public configure({
    instance_url,
    user_agent,
    headers,
    ...proposal
  }: Configuration = {}): void {
    // Canvas authorization and token endpoints are relative to the instance URL
    if (instance_url) {
      this.conf.instance_url = instance_url;
      proposal.authorization_endpoint = path.join(
        instance_url,
        '/login/oauth2/auth'
      );
      proposal.token_endpoint = path.join(instance_url, '/login/oauth2/token');
    }

    // User-Agent header is required
    this.conf.user_agent = user_agent || this.conf.user_agent;
    if (this.conf.user_agent) {
      if (!headers) {
        headers = {};
      }
      headers['User-Agent'] = this.conf.user_agent;
    }
    super.configure({ ...proposal, headers });
  }

  public fetchAs = this.fetchJSON.bind(this);

  public async upload<T extends JSONValue = JSONValue>({
    response,
    file
  }: Base.UploadParams): Promise<T> {
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
}
