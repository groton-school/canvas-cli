import { Colors } from '@battis/qui-cli.colors';
import '@battis/qui-cli.env';
import { Log } from '@battis/qui-cli.log';
import * as Plugin from '@battis/qui-cli.plugin';
import * as Canvas from '@groton/canvas-types';
import path from 'node:path';
import ora from 'ora';

export type Configuration = Plugin.Configuration & {
  canvasInstanceUrl?: string;
  account_id?: number;
  term_id?: number;
  overwrite?: boolean;
};

export const name = '@groton/canvas-users-cli';
export const src = import.meta.dirname;

let canvas_instance_url: string | undefined = undefined;
let account_id: number | undefined = undefined;
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
    Canvas.setUrl(config.canvasInstanceUrl);
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
      }
    },
    num: {
      accountId: {
        description: `Canvas account ID to include`,
        default: 1
      },
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
    account_id: account_id as unknown as number,
    term_id: term_id as unknown as number,
    ...values
  });
}

export async function run() {
  const colors = {
    RD: '#ad4928',
    OR: '#ea6a32',
    YE: '#ffd91c',
    GR: '#3d8028',
    LB: '#4898dc',
    DB: '#386ea5',
    PR: '#834692'
  };

  const args: Record<string, unknown> = { per_page: 100 };
  if (term_id) {
    args.enrollment_term_id = term_id;
  }
  const urlArgs = new URLSearchParams(Canvas.stringify(args));
  let response = await Canvas.canvas().rawFetch(
    `/api/v1/accounts/${account_id}/courses?${urlArgs}`
  );
  if (response) {
    let matches;
    do {
      const courses = (await response!.json()) as Canvas.Courses.Model[];
      for (const course of courses) {
        const spinner = ora(course.name).start();
        let applied = false;
        const enrollments = (await Canvas.canvas().fetch(
          `/api/v1/courses/${course.id}/enrollments?${urlArgs}`
        )) as Record<string, unknown>[];
        const context = `course_${course.id}`;
        const blockMatches = /\(([A-Z]{1,2})\s*[^)]*\)$/.exec(course.name);
        if (blockMatches && blockMatches.length >= 2) {
          const block = blockMatches[1];
          if (block in colors) {
            for (const enrollment of enrollments) {
              spinner.text = `${course.name} (user ${enrollment.user.id})`;
              await Canvas.canvas().fetch(
                `/api/v1/users/${enrollment.user.id}/colors/${context}`,
                {
                  method: 'PUT',
                  body: new URLSearchParams(
                    Canvas.stringify({
                      hexcode: colors[block as keyof typeof colors]
                    })
                  )
                }
              );
            }
            applied = true;
          }
        }
        if (applied) {
          spinner.succeed(
            `${enrollments.length} users in ${course.name} ${Colors.url(`${canvas_instance_url}/courses/${course.id}`)}`
          );
        } else {
          spinner.fail(course.name);
        }
      }
      matches = /<([^>]+)>;\s*rel="next"/gm.exec(
        response!.headers.get('link') || ''
      );
      if (matches && matches.length >= 2) {
        response = await Canvas.canvas().rawFetch(matches[1]);
      }
    } while (matches && matches[1]);
  }
}
