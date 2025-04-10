import { Colors } from '@battis/qui-cli.colors';
import '@battis/qui-cli.env';
import { Log } from '@battis/qui-cli.log';
import * as Plugin from '@battis/qui-cli.plugin';
import * as Canvas from '@groton/canvas-cli.api';
import path from 'node:path';
import ora from 'ora';

export type Configuration = Plugin.Configuration & {
  canvasInstanceUrl?: string;
  account_id?: string;
  term_id?: number;
  overwrite?: boolean;
};

export const name = 'Users/Colors';
export const src = path.resolve(import.meta.dirname, '../..');

let canvas_instance_url: string | undefined = undefined;
let account_id: string | undefined = undefined;
let term_id: number | undefined = undefined;
let overwrite = false;

export function configure(config: Configuration = {}) {
  account_id = Plugin.hydrate(config.account_id, account_id);
  term_id = Plugin.hydrate(config.term_id, term_id);
  overwrite = Plugin.hydrate(config.overwrite, overwrite);
  canvas_instance_url = Plugin.hydrate(
    config.canvasInstanceUrl,
    canvas_instance_url
  );
  if (config.canvasInstanceUrl) {
    if (
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
      Canvas.init(canvasConfig);
    }
  }
}

export function options(): Plugin.Options {
  return {
    flag: {
      overwrite: {
        description: 'Whether or not to overwrite existing colors',
        default: overwrite
      }
    },
    opt: {
      canvasInstanceUrl: {
        description: `URL of canvas instance`
      },
      accountId: {
        description: `Canvas account ID to include`,
        default: '1'
      }
    },
    num: {
      termId: {
        description: `Canvas term ID to include`
      }
    }
  };
}

export function init(args: Plugin.ExpectedArguments<typeof options>) {
  const {
    values: { accountId: account_id, termId: term_id, ...values }
  } = args;
  configure({
    account_id,
    term_id: term_id as unknown as number,
    ...values
  });
}

export async function run() {
  if (!account_id) {
    throw new Error(`account_id must be defined`);
  }

  const colors = {
    RD: '#ad4928',
    OR: '#ea6a32',
    YE: '#ffd91c',
    GR: '#3d8028',
    LB: '#4898dc',
    DB: '#386ea5',
    PR: '#834692'
  };
  const per_page = 100;
  for (const course of await Canvas.v1.Accounts.Courses.list({
    pathParams: { account_id },
    searchParams: { enrollment_term_id: term_id, per_page }
  })) {
    const spinner = ora(course.name).start();
    let applied = 0;
    const blockMatches = /\(([A-Z]{1,2})\s*[^)]*\)$/.exec(course.name);
    if (blockMatches && blockMatches.length >= 2) {
      const block = blockMatches[1];
      if (block in colors) {
        const asset_string = `course_${course.id}`;
        for (const enrollment of await Canvas.v1.Courses.Enrollments.list({
          pathParams: { course_id: course.id.toString() },
          searchParams: { per_page }
        })) {
          Canvas.v1.Users.Colors.update({
            pathParams: { id: enrollment.user_id.toString(), asset_string },
            params: { hexcode: colors[block as keyof typeof colors] }
          });
          applied++;
        }
      }
    }
    if (applied > 0) {
      spinner.succeed(
        `${applied} users in ${course.name} ${Colors.url(`${Canvas.client().instance_url}/courses/${course.id}`)}`
      );
    } else {
      spinner.fail(course.name);
    }
  }
}
