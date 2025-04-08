import { Colors } from '@battis/qui-cli.colors';
import '@battis/qui-cli.env';
import { Log } from '@battis/qui-cli.log';
import * as Plugin from '@battis/qui-cli.plugin';
import * as Canvas from '@oauth2-cli/canvas';

export type Configuration = Plugin.Configuration & {
  canvasInstanceUrl?: string;
  account_id?: number;
};

export const name = '@groton/canvas-notifications-cli';
export const src = import.meta.dirname;

let canvas_instance_url: string | undefined = undefined;
let account_id: number | undefined = undefined;

export function configure(config: Configuration = {}) {
  account_id = Plugin.hydrate(config.account_id, account_id);
  canvas_instance_url = Plugin.hydrate(
    config.canvasInstanceUrl,
    canvas_instance_url
  );
  if (
    config.canvasInstanceUrl &&
    process.env.CANVAS_CLIENT_ID &&
    process.env.CANVAS_CLIENT_SECRET &&
    process.env.CANVAS_REDIRECT_URI
  ) {
    Log.info(`Using Canvas instance ${Colors.url(config.canvasInstanceUrl)}`);
    const canvasConfig = {
      instance_url: config.canvasInstanceUrl,
      client_id: process.env.CANVAS_CLIENT_ID,
      client_secret: process.env.CANVAS_CLIENT_SECRET,
      redirect_uri: process.env.CANVAS_REDIRECT_URI
    };
    if (process.env.CANVAS_TOKEN_STORE) {
      // @ts-expect-error 2339 should really type CanvasConfig, but need to directly import @oauth2-cli/canvas for that
      canvasConfig.store = path.join(
        process.env.CANVAS_TOKEN_STORE,
        `${new URL(config.canvasInstanceUrl).hostname}.json`
      );
    }
    Canvas.API.init(canvasConfig);
  }
}

export function options(): Plugin.Options {
  return {
    opt: {
      canvasInstanceUrl: {
        description: `URL of canvas instance`
      }
    },
    num: {
      accountId: {
        description: `Canvas account ID to include`,
        default: 1
      }
    }
  };
}

export function init(args: Plugin.ExpectedArguments<typeof options>) {
  const {
    values: { accountId: account_id, ...values }
  } = args;
  configure({
    account_id: account_id as unknown as number,
    ...values
  });
}

export async function run() {
  if (!account_id) {
    throw new Error('account_id must be defined');
  }
  const users = await Canvas.API.Accounts.Users.list({
    account_id,
    params: {
      per_page: 100
    }
  });
  for (const user of users) {
    const enrollments = await Canvas.API.Users.Enrollments.list({
      user,
      params: { state: ['active'], per_page: 100 }
    });
    for (const enrollment of enrollments) {
      if (enrollment.type === 'ObserverEnrollment') {
      }
    }
  }
}
