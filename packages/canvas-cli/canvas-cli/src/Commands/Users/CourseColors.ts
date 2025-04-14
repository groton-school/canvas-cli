import { Colors } from '@battis/qui-cli.colors';
import '@battis/qui-cli.env';
import * as Plugin from '@battis/qui-cli.plugin';
import * as Canvas from '@groton/canvas-cli.api';
import path from 'node:path';
import ora from 'ora';

export type Configuration = Plugin.Configuration & {
  account_id?: string;
  term_id?: number;
  overwrite?: boolean;
};

export const name = 'Users/CourseColors';
export const src = path.resolve(import.meta.dirname, '../..');

let account_id: string | undefined = undefined;
let term_id: number | undefined = undefined;
let overwrite = false;

export function configure(config: Configuration = {}) {
  account_id = Plugin.hydrate(config.account_id, account_id);
  term_id = Plugin.hydrate(config.term_id, term_id);
  overwrite = Plugin.hydrate(config.overwrite, overwrite);
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
