import { init } from '@groton/canvas-api';
import * as OAuth2 from '@oauth2-cli/qui-cli/dist/Unregistered.js';
import { Colors } from '@qui-cli/colors';
import { Log } from '@qui-cli/log';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import * as requestish from 'requestish';
import { Client, Credentials } from './Client.js';

export class CanvasPlugin extends OAuth2.OAuth2Plugin<Credentials, Client> {
  public constructor(name = '@oauth2-cli/canvas') {
    super(name);
    this.configure({
      man: {
        heading: 'Canvas options',
        text: [
          `Once authorized, the app will store the Canvas refresh ` +
            `token for reuse in the local environment as ` +
            `${Colors.varName('CANVAS_REFRESH_TOKEN')}.`
        ]
      },
      url: {
        client_id:
          'https://developerdocs.instructure.com/services/canvas/oauth2/file.oauth#oauth2-flow-0'
      },
      hint: {
        issuer: Colors.quotedValue('"https://example.instructure.com"')
      },
      env: {
        issuer: 'CANVAS_ISSUER',
        client_id: 'CANVAS_CLIENT_ID',
        client_secret: 'CANVAS_CLIENT_SECRET',
        scope: 'CANVAS_SCOPE',
        redirect_uri: 'CANVAS_REDIRECT_URI'
      },
      suppress: {
        authorization_endpoint: true,
        token_endpoint: true,
        base_url: true
      },
      storage: new OAuth2.Token.EnvironmentStorage('CANVAS_REFRESH_TOKEN')
    });
  }

  protected instantiateClient({
    credentials,
    inject,
    ...options
  }: OAuth2.ClientOptions<Credentials>) {
    const pkg = JSON.parse(
      fs.readFileSync(
        path.resolve(import.meta.dirname, '../package.json'),
        'utf8'
      )
    );
    const headers = requestish.Headers.merge(inject?.headers, {
      'User-Agent': `@oauth2-cli/canvas/${pkg.version} Node.js/${process.versions.node} ${os.platform()}`
    });
    const { issuer, ...rest } = credentials;
    const client = new Client({
      ...options,
      credentials: {
        issuer,
        authorization_endpoint: `${requestish.URL.toString(issuer)}/login/oauth2/auth`,
        token_endpoint: `${requestish.URL.toString(issuer)}/login/oauth2/token`,
        ...rest
      },
      inject: {
        ...inject,
        headers
      }
    });
    init(client);
    return client;
  }

  public run() {
    Log.info(`Connecting to ${Colors.url(this.client.instance_url)}`);
  }
}
