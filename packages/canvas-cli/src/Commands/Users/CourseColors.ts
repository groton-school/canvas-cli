import * as GrotonColors from '@groton/colors';
import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import { Log } from '@qui-cli/log';
import * as Plugin from '@qui-cli/plugin';
import path from 'node:path';
import ora from 'ora';

export type Configuration = Plugin.Configuration & {
  account_id?: string;
  term_id?: number;
  overwrite?: boolean;
};

export const name = 'course-colors';

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
    man: [{ level: 1, text: 'Course colors options' }],
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
  Canvas.plugin.configure({
    reason: path.basename(import.meta.filename, '.js')
  });
  configure({
    account_id,
    term_id: term_id as unknown as number,
    ...values
  });
}

export async function run() {
  if (!account_id) {
    throw new Error(`accountId must be defined`);
  }
  if (!term_id) {
    throw new Error(`termId must be defined`);
  }

  const colors = {
    RD: GrotonColors.RedOnWhite,
    OR: GrotonColors.OrangeOnWhite,
    YL: GrotonColors.YellowOnWhite,
    GR: GrotonColors.GreenOnWhite,
    LB: GrotonColors.LightBlueOnWhite,
    DB: GrotonColors.DarkBlueOnWhite,
    PR: GrotonColors.PurpleOnWhite
  };

  // TODO /users/{id}/colors list return type
  type CustomColors = { custom_colors: Record<string, string> };

  const userCache: Record<Canvas.Users.User['id'], CustomColors> = {};

  function blockFrom(course?: Canvas.Courses.Course) {
    let block: string | undefined = undefined;
    const blockMatches =
      course && /\(([A-Z]{1,2})[^)]*\)$/.exec(course.course_code);
    if (blockMatches && blockMatches.length >= 2) {
      block = blockMatches[1];
    }
    return block;
  }

  const per_page = 100;
  const courses = await Canvas.v1.Accounts.Courses.list({
    pathParams: { account_id },
    searchParams: { enrollment_term_id: term_id, per_page }
  });

  for (const course of courses) {
    const spinner = ora(course.name).start();
    let applied = 0;
    let overwritten = 0;
    const block = blockFrom(course);
    const asset_string = `course_${course.id}`;
    const hexcode =
      block && block in colors
        ? colors[block as keyof typeof colors]
        : undefined;
    Log.debug({ course: course.name, block, asset_string, hexcode });
    try {
      if (hexcode) {
        const enrollments = await Canvas.v1.Courses.Enrollments.list({
          pathParams: { course_id: course.id },
          searchParams: { per_page }
        });
        for (let i = 0; i < enrollments.length; i++) {
          if (!(enrollments[i].user_id in userCache)) {
            userCache[enrollments[i].user_id] =
              (await Canvas.v1.Users.Colors.list({
                pathParams: { id: enrollments[i].user_id }
              })) as CustomColors;
          }
          if (
            (!userCache[enrollments[i].user_id].custom_colors[asset_string] ||
              overwrite) &&
            hexcode !==
              userCache[enrollments[i].user_id].custom_colors[asset_string]
          ) {
            await Canvas.v1.Users.Colors.update({
              pathParams: {
                id: enrollments[i].user_id,
                asset_string
              },
              params: { hexcode }
            });
            applied++;
            overwritten += userCache[enrollments[i].user_id].custom_colors[
              asset_string
            ]
              ? 1
              : 0;
          }
          spinner.text = `${course.name}: Updated ${applied}/${i + 1} users ${overwrite && overwritten > 0 ? `(overwriting ${overwritten}) ` : ''}`;
        }

        spinner.succeed();
      } else {
        spinner.warn(
          `${course.name} does not appear to not meet in a color block`
        );
      }
    } catch (error) {
      spinner.fail(Colors.error((error as Error).message));
    }
  }
}
