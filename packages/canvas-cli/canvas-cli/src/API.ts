import { Colors } from '@battis/qui-cli.colors';
import { Env } from '@battis/qui-cli.env';
import '@battis/qui-cli.log';
import * as Plugin from '@battis/qui-cli.plugin';
import { Root } from '@battis/qui-cli.root';
import * as Canvas from '@groton/canvas-cli.api';
import path from 'node:path';

export type Configuration = Plugin.Configuration & {
  instanceUrl?: string;
  clientId?: string;
  clientSecret?: string;
  redirectUri?: string;
  tokenStorage?: string;
};

export const name = '@groton/canvas-cli.api-plugin';
export const src = import.meta.dirname;

let instanceUrl: string | undefined = undefined;
let clientId: string | undefined = undefined;
let clientSecret: string | undefined = undefined;
let redirectUri: string | undefined = undefined;
let tokenStorage: string | undefined =
  process.env.CANVAS_TOKEN_STORAGE || './var';

export function configure(config: Configuration = {}) {
  instanceUrl = Plugin.hydrate(config.instanceUrl, instanceUrl);
  clientId = Plugin.hydrate(config.clientId, clientId);
  clientSecret = Plugin.hydrate(config.clientSecret, clientSecret);
  redirectUri = Plugin.hydrate(config.redirectUri, redirectUri);
  tokenStorage = Plugin.hydrate(config.tokenStorage, tokenStorage);
}

export function options(): Plugin.Options {
  // FIXME manually calling Env.configure() is usually unnecessary
  Env.configure({});
  return {
    opt: {
      instanceUrl: {
        description: `Required, Canvas Instance URL. (default: environment variable ${Colors.value('CANVAS_INSTANCE_URL')}, current value is ${Colors.quotedValue(`"${instanceUrl || 'undefined'}"`)})`,
        default: instanceUrl || process.env.CANVAS_INSTANCE_URL
      },
      clientId: {
        description: `Required, Canvas developer key ID. (default: environment variable ${Colors.value('CANVAS_CLIENT_ID')})`,
        default: clientId || process.env.CANVAS_CLIENT_ID
      },
      clientSecret: {
        description: `Required, Canvas developer key secret. (default: environment variable ${Colors.value('CANVAS_CLIENT_SECRET')})`,
        default: clientSecret || process.env.CANVAS_CLIENT_SECRET
      },
      redirectUri: {
        description: `Required, redirect URI registered with Canvas developer key. Must be a localhost url. (default: environment variable ${Colors.value('CANVAS_REDIRECT_URI')})`,
        default: (redirectUri = process.env.CANVAS_REDIRECT_URI)
      },
      tokenStorage: {
        description: `Optional, path to token storage files. (default: environemnt variable ${Colors.value('CANVAS_TOKEN_STORAGE')}, current value is ${Colors.quotedValue(`"${tokenStorage || 'undefined'}"`)})`,
        default: tokenStorage
      }
    }
  };
}

export function init(args: Plugin.ExpectedArguments<typeof options>) {
  configure(args.values);
}

export async function run() {
  if (!instanceUrl) {
    throw new Error(`${Colors.value('instanceUrl')} must be defined`);
  }
  if (!clientId) {
    throw new Error(`${Colors.value('clientId')} must be defined`);
  }
  if (!clientSecret) {
    throw new Error(`${Colors.value('clientSecret')} must be defined`);
  }
  if (!redirectUri) {
    throw new Error(`${Colors.value('redirectUri')} must be defined`);
  }

  Canvas.init({
    instance_url: instanceUrl,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    store:
      tokenStorage &&
      path.resolve(
        Root.path(),
        tokenStorage,
        new URL(instanceUrl).hostname + '.json'
      )
  });
}
