import fs from 'node:fs';
import path from 'node:path';
import * as OAuth2 from 'oauth2-cli';

const pkg = JSON.parse(
  fs.readFileSync(path.join(import.meta.dirname, '../package.json')).toString()
);

export type Credentials = Omit<
  OAuth2.Credentials,
  'authorization_endpoint' | 'token_endpoint'
> & {
  instance_url: string;
  user_agent?: string;
};

export class Canvas {
  private client: OAuth2.Client;
  private token?: OAuth2.Token;
  private _instance_url: string;
  public get instance_url() {
    return this._instance_url;
  }
  private _user_agent: string;
  public get user_agent() {
    return this._user_agent;
  }

  public constructor({
    instance_url,
    user_agent = `CLI (Node.js ${pkg.name}@${pkg.version})`,
    ...credentials
  }: Credentials) {
    this._instance_url = instance_url;
    this._user_agent = user_agent;
    this.client = new OAuth2.Client({
      ...credentials,
      authorization_endpoint: path.join(
        this.instance_url,
        '/login/oauth2/auth'
      ),
      token_endpoint: path.join(this.instance_url, '/login/oauth2/token')
    });
  }

  public async fetch(endpoint: URL | string | Request, init?: RequestInit) {
    await this.getToken();
    if (!this.token) {
      throw new Error('No access token');
    }
    return await fetch(new URL(endpoint, this.instance_url), {
      ...init,
      headers: {
        ...init?.headers,
        'User-Agent': this.user_agent,
        Authorization: `Bearer ${this.token.access_token}`
      }
    });
  }

  public async getToken() {
    this.token = await this.client.getToken();
    return this.token;
  }
}
