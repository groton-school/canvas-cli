import { URLString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import '@battis/qui-cli.env';
import * as Plugin from '@battis/qui-cli.plugin';
import * as Canvas from '@groton/canvas-cli.api';
import { Client } from '@groton/canvas-cli.client.node-cli';

export * from '@groton/canvas-cli.api/dist/Client.js';
export * from '@groton/canvas-cli.api/dist/Endpoints/index.js';
export * from '@groton/canvas-cli.api/dist/Resources/index.js';

export type Configuration = Plugin.Configuration & {
  instanceUrl?: URLString;
  clientId?: string;
  clientSecret?: string;
  redirectUri?: URLString;
  tokenStorage?: string;
  env?: {
    instanceUrl?: string;
    clientId?: string;
    clientSecret?: string;
    redirectUri?: string;
    tokenStorage?: string;
  };
};

export const name = '@groton/canvas-cli.client.qui-cli';
export const src = import.meta.dirname;

let instanceUrl: URLString | undefined = undefined;
let clientId: string | undefined = undefined;
let clientSecret: string | undefined = undefined;
let redirectUri = 'http://localhost:3000/oauth2/canvas';
let tokenStorage = './var';
const env = {
  instanceUrl: 'CANVAS_INSTANCE_URL',
  clientId: 'CANVAS_CLIENT_ID',
  clientSecret: 'CANVAS_CLIENT_SECRET',
  redirecutUri: 'CANVAS_REDIRECT_URI'
};

export function configure(config: Configuration = {}) {
  instanceUrl = Plugin.hydrate(config.instanceUrl, instanceUrl);
  clientId = Plugin.hydrate(config.clientId, clientId);
  clientSecret = Plugin.hydrate(config.clientSecret, clientSecret);
  redirectUri = Plugin.hydrate(config.redirectUri, redirectUri);
  tokenStorage = Plugin.hydrate(config.tokenStorage, tokenStorage);
  if (config.env) {
    for (const key of Object.keys(config.env) as (keyof typeof env &
      keyof typeof config.env)[]) {
      env[key] = Plugin.hydrate(config.env[key], env[key]);
    }
  }
}

export function options(): Plugin.Options {
  return {
    opt: {
      instanceUrl: {
        description: `URL of Canvas Instance (default: ${Colors.value(env.instanceUrl)} environment variable, if present)`,
        default: instanceUrl
      },
      clientId: {
        description: `Developer API Key ID (default: ${Colors.value(env.clientId)} environment variable, if present)`,
        default: clientId
      },
      clientSecret: {
        description: `Developer API Key secret (default: ${Colors.value(env.clientSecret)} environment variable, if present)`,
        default: clientSecret
      },
      redirectUri: {
        description: `Developer API Key redirect URI (default: ${Colors.value(env.redirecutUri)} environment variable, if present, must redirect to unique port at ${Colors.url('http://localhost')})`,
        default: redirectUri
      },
      tokenStorage: {
        description: `Path to token storage directory (default: ${Colors.url(tokenStorage)})`,
        default: tokenStorage
      }
    }
  };
}

export function init({
  values: { instanceUrl, clientId, clientSecret, redirectUri, tokenStorage }
}: Plugin.ExpectedArguments<typeof options>) {
  configure({
    instanceUrl: instanceUrl || process.env[env.instanceUrl],
    clientId: clientId || process.env[env.clientId],
    clientSecret: clientSecret || process.env[env.clientSecret],
    redirectUri: redirectUri || process.env[env.redirecutUri],
    tokenStorage
  });
  Canvas.init(
    new Client({
      instance_url: instanceUrl,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      store: tokenStorage
    })
  );
}
