import * as GrotonColors from '@groton/colors';
import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import { Log } from '@qui-cli/log';
import * as Plugin from '@qui-cli/plugin';
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

  const colorCache: Record<
    Canvas.Enrollments.Enrollment['sis_section_id'],
    Canvas.v1.Users.Colors.updateFormParameters['hexcode']
  > = {};

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

  try {
    const per_page = 100;
    const courses = await await Canvas.v1.Accounts.Courses.list({
      pathParams: { account_id },
      searchParams: { enrollment_term_id: term_id, per_page }
    });

    function colorOf(enrollment: Canvas.Enrollments.Enrollment) {
      const course = courses.find(
        (course) => course.sis_course_id === enrollment.sis_section_id
      );
      if (course) {
        if (!(course.sis_course_id in colorCache)) {
          const block = blockFrom(course);
          if (block && block in colors) {
            colorCache[course.sis_course_id] =
              colors[block as keyof typeof colors];
          }
        }
        return colorCache[course.sis_course_id];
      }
      return undefined;
    }

    for (const course of courses) {
      const spinner = ora(course.name).start();
      let applied = 0;
      const block = blockFrom(course);
      const asset_string = `course_${course.id}`;
      try {
        if (block && block in colors) {
          const enrollments = await Canvas.v1.Courses.Enrollments.list({
            pathParams: { course_id: course.id },
            searchParams: { per_page }
          });
          for (const enrollment of enrollments) {
            const hexcode = colorOf(enrollment);
            if (hexcode) {
              if (!(enrollment.user_id in userCache)) {
                userCache[enrollment.user_id] =
                  (await Canvas.v1.Users.Colors.list({
                    pathParams: { id: enrollment.user_id }
                  })) as CustomColors;
              }
              if (
                hexcode !==
                userCache[enrollment.user_id].custom_colors[asset_string]
              ) {
                await Canvas.v1.Users.Colors.update({
                  pathParams: {
                    id: enrollment.user_id,
                    asset_string
                  },
                  params: { hexcode }
                });
                applied++;
              }
            }
          }

          spinner.succeed(
            `${applied}/${enrollments.length} users required updates in ${course.name} ${Colors.url(`${Canvas.client().instance_url}/courses/${course.id}`)}`
          );
        } else {
          spinner.warn(
            `${course.name} does appear to not meet in a color block`
          );
        }
      } catch (error) {
        spinner.fail(Colors.error((error as Error).message));
      }
    }
  } catch (error) {
    Log.error({ error });
  }
}
