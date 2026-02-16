import * as OAuth2 from '@oauth2-cli/qui-cli/dist/OAuth2.js';
import { Colors } from '@qui-cli/colors';
import { Log } from '@qui-cli/log';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import * as requestish from 'requestish';

export class CanvasStudioPlugin extends OAuth2.OAuth2Plugin {
  public constructor(name = '@oauth2-cli/canvas-studio') {
    super(name);
    this.configure({
      man: {
        heading: 'Canvas Studio options',
        text: [
          `Once authorized, the app will store the Canvas Studio refresh ` +
            `token for reuse in the local environment as ` +
            `${Colors.varName('STUDIO_REFRESH_TOKEN')}.`
        ]
      },
      opt: {
        issuer: 'studioIssuer',
        client_id: 'studioClientId',
        client_secret: 'studioClientSecret',
        scope: 'studioScope',
        redirect_uri: 'studioRedirectUri'
      },
      hint: {
        issuer: Colors.quotedValue('"https://example.instructuremedia.com"')
      },
      env: {
        issuer: 'STUDIO_ISSUER',
        client_id: 'STUDIO_CLIENT_ID',
        client_secret: 'STUDIO_CLIENT_SECRET',
        scope: 'STUDIO_SCOPE',
        redirect_uri: 'STUDIO_REDIRECT_URI'
      },
      suppress: {
        authorization_endpoint: true,
        token_endpoint: true
      },
      storage: new OAuth2.Token.EnvironmentStorage('STUDIO_REFRESH_TOKEN')
    });
  }

  protected instantiateClient({
    credentials,
    inject,
    ...options
  }: OAuth2.ClientOptions) {
    const headers = requestish.Headers.from(inject?.headers);
    if (!headers.has('user-agent')) {
      const pkg = JSON.parse(
        fs.readFileSync(
          path.resolve(import.meta.dirname, '../package.json'),
          'utf8'
        )
      );
      headers.set(
        'User-Agent',
        `@oauth2-cli/canvas-studio/${pkg.version} Node.js/${process.versions.node} ${os.platform()}`
      );
    }

    const { issuer } = credentials;
    if (!issuer) {
      throw new Error();
    }
    return new OAuth2.Client({
      ...options,
      credentials: {
        authorization_endpoint: `${requestish.URL.toString(issuer)}/api/public/oauth/authorize`,
        token_endpoint: `${requestish.URL.toString(issuer)}/api/public/oauth/token`,
        ...credentials
      },
      inject: {
        ...inject,
        headers
      }
    });
  }

  public run() {
    Log.info(`Connecting to ${Colors.url(this.instance_url)}`);
  }
}
